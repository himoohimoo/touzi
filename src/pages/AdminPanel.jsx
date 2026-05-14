import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'

const CATEGORIES = [
  { key: 'zhi', name: '知', icon: '🧠' },
  { key: 'xing', name: '行', icon: '⚔️' },
  { key: 'sheng', name: '省', icon: '🔍' },
  { key: 'dao', name: '道', icon: '☯' },
]

function AdminPanel() {
  const navigate = useNavigate()
  const { user, isAdmin, getAllUsers, getLevel } = useAuth()
  const [users, setUsers] = useState(() => getAllUsers())

  if (!user || !isAdmin) {
    return (
      <div className="sub-page">
        <div className="page-header">
          <button className="page-back" onClick={() => navigate('/')}>
            <span>←</span> 返回首页
          </button>
          <h1>无权限访问</h1>
        </div>
      </div>
    )
  }

  const refreshUsers = () => setUsers(getAllUsers())

  return (
    <div className="sub-page admin-page">
      <div className="page-header">
        <button className="page-back" onClick={() => navigate('/my')}>
          <span>←</span> 返回我的
        </button>
        <div className="page-badge" style={{ background: 'linear-gradient(145deg, #f093fb, #f5576c)' }}>
          🛡️
        </div>
        <h1>管理员面板</h1>
        <p>查看所有注册用户信息</p>
      </div>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <span className="admin-stat-num">{users.length}</span>
          <span className="admin-stat-label">注册用户</span>
        </div>
        <div className="admin-stat-card">
          <span className="admin-stat-num">
            {users.filter(u => (u.exp?.zhi || 0) > 0 || (u.exp?.xing || 0) > 0).length}
          </span>
          <span className="admin-stat-label">活跃用户</span>
        </div>
      </div>

      <button className="btn btn-secondary admin-refresh" onClick={refreshUsers}>
        🔄 刷新数据
      </button>

      <div className="admin-user-list">
        {users.map(u => {
          const totalExp = Object.values(u.exp || {}).reduce((a, b) => a + b, 0)
          const level = getLevel(totalExp)
          return (
            <div key={u.id} className="admin-user-card">
              <div className="admin-user-header">
                <div className="admin-user-avatar">{u.username.charAt(0).toUpperCase()}</div>
                <div className="admin-user-info">
                  <h3>{u.username} {u.role === 'admin' && <span className="admin-badge">管理员</span>}</h3>
                  <p>注册于 {new Date(u.createdAt).toLocaleDateString('zh-CN')}</p>
                </div>
                <div className="admin-user-level">
                  {level.icon} {level.name}
                </div>
              </div>
              <div className="admin-user-exp">
                {CATEGORIES.map(cat => (
                  <div key={cat.key} className="admin-user-exp-item">
                    <span>{cat.icon} {cat.name}</span>
                    <span>{u.exp?.[cat.key] || 0} EXP</span>
                  </div>
                ))}
              </div>
              {u.personalityResult && (
                <div className="admin-user-personality">
                  <span>投资人格：{u.personalityResult.type}</span>
                </div>
              )}
              {u.quizResults && u.quizResults.length > 0 && (
                <div className="admin-user-quiz">
                  <span>市场问答：{u.quizResults.length}次，最高 {Math.max(...u.quizResults.map(r => r.score))}/{u.quizResults[0]?.total || 12}</span>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AdminPanel
