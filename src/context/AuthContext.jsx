import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

// 等级定义
const LEVELS = [
  { key: 'bronze', name: '青铜', icon: '🥉', minExp: 0 },
  { key: 'silver', name: '白银', icon: '🥈', minExp: 100 },
  { key: 'gold', name: '黄金', icon: '🥇', minExp: 300 },
  { key: 'platinum', name: '铂金', icon: '💎', minExp: 600 },
  { key: 'diamond', name: '钻石', icon: '👑', minExp: 1000 },
]

function getLevel(exp) {
  let level = LEVELS[0]
  for (const l of LEVELS) {
    if (exp >= l.minExp) level = l
  }
  return level
}

function getNextLevel(exp) {
  for (const l of LEVELS) {
    if (exp < l.minExp) return l
  }
  return null
}

// 密码校验：至少8位，包含大小写字母和数字
function validatePassword(pwd) {
  if (pwd.length < 8) return '密码至少8位'
  if (!/[A-Z]/.test(pwd)) return '密码需包含大写字母'
  if (!/[a-z]/.test(pwd)) return '密码需包含小写字母'
  if (!/[0-9]/.test(pwd)) return '密码需包含数字'
  return null
}

// 用户数据操作（localStorage）
function getUsers() {
  try {
    return JSON.parse(localStorage.getItem('tz_users') || '[]')
  } catch { return [] }
}

function saveUsers(users) {
  localStorage.setItem('tz_users', JSON.stringify(users))
}

function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem('tz_current_user'))
  } catch { return null }
}

function saveCurrentUser(user) {
  localStorage.setItem('tz_current_user', JSON.stringify(user))
}

function clearCurrentUser() {
  localStorage.removeItem('tz_current_user')
}

// 初始化默认管理员
function initAdmin() {
  const users = getUsers()
  if (!users.find(u => u.username === 'Admin')) {
    users.push({
      id: 'admin_001',
      username: 'Admin',
      password: 'Admin123',
      role: 'admin',
      createdAt: new Date().toISOString(),
      exp: { zhi: 0, xing: 0, sheng: 0, dao: 0 },
      quizResults: [],
      personalityResult: null,
    })
    saveUsers(users)
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [showAuth, setShowAuth] = useState(false) // 'login' | 'register' | null
  const [authError, setAuthError] = useState('')

  useEffect(() => {
    initAdmin()
    const saved = getCurrentUser()
    if (saved) setUser(saved)
  }, [])

  const register = (username, password) => {
    const pwdErr = validatePassword(password)
    if (pwdErr) return pwdErr

    const users = getUsers()
    if (users.find(u => u.username === username)) return '用户名已存在'
    if (username === 'Admin') return '该用户名不可用'

    const newUser = {
      id: 'user_' + Date.now(),
      username,
      password,
      role: 'user',
      createdAt: new Date().toISOString(),
      exp: { zhi: 0, xing: 0, sheng: 0, dao: 0 },
      quizResults: [],
      personalityResult: null,
    }
    users.push(newUser)
    saveUsers(users)
    saveCurrentUser(newUser)
    setUser(newUser)
    setAuthError('')
    setShowAuth(null)
    return null
  }

  const login = (username, password) => {
    const users = getUsers()
    const found = users.find(u => u.username === username && u.password === password)
    if (!found) return '用户名或密码错误'
    saveCurrentUser(found)
    setUser(found)
    setAuthError('')
    setShowAuth(null)
    return null
  }

  const logout = () => {
    clearCurrentUser()
    setUser(null)
  }

  // 更新用户经验值
  const updateExp = (category, points) => {
    if (!user) return
    const users = getUsers()
    const idx = users.findIndex(u => u.id === user.id)
    if (idx === -1) return

    users[idx].exp[category] = (users[idx].exp[category] || 0) + points
    saveUsers(users)
    saveCurrentUser(users[idx])
    setUser({ ...users[idx] })
  }

  // 保存测试结果
  const saveTestResult = (type, result) => {
    if (!user) return
    const users = getUsers()
    const idx = users.findIndex(u => u.id === user.id)
    if (idx === -1) return

    if (type === 'personality') {
      users[idx].personalityResult = result
      users[idx].exp.zhi = (users[idx].exp.zhi || 0) + 50
    } else if (type === 'marketQuiz') {
      users[idx].quizResults = users[idx].quizResults || []
      users[idx].quizResults.push({ ...result, date: new Date().toISOString() })
      users[idx].exp.zhi = (users[idx].exp.zhi || 0) + result.score * 10
    }

    saveUsers(users)
    saveCurrentUser(users[idx])
    setUser({ ...users[idx] })
  }

  // 获取所有用户（管理员用）
  const getAllUsers = () => {
    return getUsers().map(u => ({
      id: u.id,
      username: u.username,
      role: u.role,
      createdAt: u.createdAt,
      exp: u.exp,
      quizResults: u.quizResults,
      personalityResult: u.personalityResult,
    }))
  }

  const isAdmin = user?.role === 'admin'

  return (
    <AuthContext.Provider value={{
      user, isAdmin, showAuth, authError,
      setShowAuth, setAuthError,
      register, login, logout,
      updateExp, saveTestResult, getAllUsers,
      getLevel, getNextLevel, LEVELS,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
