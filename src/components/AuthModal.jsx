import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

function AuthModal() {
  const { showAuth, setShowAuth, setAuthError, register, login, authError } = useAuth()
  const [mode, setMode] = useState(showAuth || 'login')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')

  if (!showAuth) return null

  const handleClose = () => {
    setShowAuth(null)
    setAuthError('')
    setUsername('')
    setPassword('')
    setConfirmPwd('')
  }

  const switchMode = (m) => {
    setMode(m)
    setAuthError('')
    setPassword('')
    setConfirmPwd('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username.trim() || !password.trim()) {
      setAuthError('请填写用户名和密码')
      return
    }
    if (mode === 'register') {
      if (password !== confirmPwd) {
        setAuthError('两次密码不一致')
        return
      }
      const err = register(username.trim(), password)
      if (err) setAuthError(err)
    } else {
      const err = login(username.trim(), password)
      if (err) setAuthError(err)
    }
  }

  return (
    <div className="auth-modal-overlay" onClick={handleClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>
        <button className="auth-modal-close" onClick={handleClose}>✕</button>

        <div className="auth-modal-header">
          <div className="auth-modal-icon">
            {mode === 'login' ? '🔐' : '✨'}
          </div>
          <h2>{mode === 'login' ? '欢迎回来' : '创建账户'}</h2>
          <p>{mode === 'login' ? '登录你的投资学习之旅' : '开始你的投资学习之旅'}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="auth-field">
            <label>用户名</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="请输入用户名"
              autoComplete="username"
            />
          </div>

          <div className="auth-field">
            <label>密码</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder={mode === 'register' ? '至少8位，含大小写字母和数字' : '请输入密码'}
              autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
            />
          </div>

          {mode === 'register' && (
            <div className="auth-field">
              <label>确认密码</label>
              <input
                type="password"
                value={confirmPwd}
                onChange={e => setConfirmPwd(e.target.value)}
                placeholder="请再次输入密码"
                autoComplete="new-password"
              />
            </div>
          )}

          {mode === 'register' && (
            <div className="auth-pwd-rules">
              <p>密码要求：</p>
              <ul>
                <li className={password.length >= 8 ? 'rule-ok' : ''}>至少8位字符</li>
                <li className={/[A-Z]/.test(password) ? 'rule-ok' : ''}>包含大写字母 (A-Z)</li>
                <li className={/[a-z]/.test(password) ? 'rule-ok' : ''}>包含小写字母 (a-z)</li>
                <li className={/[0-9]/.test(password) ? 'rule-ok' : ''}>包含数字 (0-9)</li>
              </ul>
            </div>
          )}

          {authError && <div className="auth-error">{authError}</div>}

          <button type="submit" className="auth-submit-btn">
            {mode === 'login' ? '登 录' : '注 册'}
          </button>
        </form>

        <div className="auth-switch">
          {mode === 'login' ? (
            <span>还没有账户？<button onClick={() => switchMode('register')}>立即注册</button></span>
          ) : (
            <span>已有账户？<button onClick={() => switchMode('login')}>去登录</button></span>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthModal
