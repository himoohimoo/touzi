import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const CATEGORIES = [
  { key: 'zhi', name: '知', en: 'Know', icon: '🧠', color: 'var(--zhi)', desc: '认识自己，认识市场' },
  { key: 'xing', name: '行', en: 'Act', icon: '⚔️', color: 'var(--xing)', desc: '知行合一，实践出真知' },
  { key: 'sheng', name: '省', en: 'Reflect', icon: '🔍', color: 'var(--sheng)', desc: '吾日三省吾身' },
  { key: 'dao', name: '道', en: 'System', icon: '☯', color: 'var(--dao)', desc: '以道御术，构建体系' },
]

function MyProfile() {
  const navigate = useNavigate()
  const { user, logout, getLevel, getNextLevel, LEVELS, isAdmin } = useAuth()

  if (!user) {
    return (
      <div className="sub-page">
        <div className="page-header">
          <button className="page-back" onClick={() => navigate('/')}>
            <span>←</span> 返回首页
          </button>
          <div className="page-badge" style={{ background: 'linear-gradient(145deg, #667eea, #764ba2)' }}>
            👤
          </div>
          <h1>我的</h1>
          <p>请先登录查看个人中心</p>
        </div>
      </div>
    )
  }

  const totalExp = Object.values(user.exp || {}).reduce((a, b) => a + b, 0)
  const totalLevel = getLevel(totalExp)
  const nextLevel = getNextLevel(totalExp)
  const progress = nextLevel
    ? ((totalExp - (totalLevel.minExp)) / (nextLevel.minExp - totalLevel.minExp)) * 100
    : 100

  return (
    <div className="sub-page my-profile-page">
      <div className="page-header">
        <button className="page-back" onClick={() => navigate('/')}>
          <span>←</span> 返回首页
        </button>
        <div className="page-badge" style={{ background: 'linear-gradient(145deg, #667eea, #764ba2)' }}>
          👤
        </div>
        <h1>我的</h1>
      </div>

      {/* 用户信息卡片 */}
      <div className="profile-card">
        <div className="profile-avatar">
          <span>{user.username.charAt(0).toUpperCase()}</span>
        </div>
        <div className="profile-info">
          <h2>{user.username}</h2>
          <p className="profile-join-date">加入于 {new Date(user.createdAt).toLocaleDateString('zh-CN')}</p>
        </div>
        <div className="profile-total-level">
          <span className="level-icon">{totalLevel.icon}</span>
          <span className="level-name">{totalLevel.name}</span>
        </div>
      </div>

      {/* 总经验进度 */}
      <div className="profile-exp-card">
        <div className="exp-header">
          <span>总经验值</span>
          <span className="exp-value">{totalExp} EXP</span>
        </div>
        <div className="exp-bar">
          <div className="exp-bar-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
        </div>
        <div className="exp-footer">
          <span>{totalLevel.icon} {totalLevel.name}</span>
          {nextLevel ? (
            <span>距离 {nextLevel.icon} {nextLevel.name} 还需 {nextLevel.minExp - totalExp} EXP</span>
          ) : (
            <span>已达最高等级！</span>
          )}
        </div>
      </div>

      {/* 四维等级 */}
      <div className="profile-levels">
        <h3 className="levels-title">修行进度</h3>
        <div className="levels-grid">
          {CATEGORIES.map(cat => {
            const exp = user.exp?.[cat.key] || 0
            const level = getLevel(exp)
            const next = getNextLevel(exp)
            const pct = next
              ? ((exp - level.minExp) / (next.minExp - level.minExp)) * 100
              : 100

            return (
              <div key={cat.key} className="level-card" style={{ borderColor: cat.color }}>
                <div className="level-card-header">
                  <span className="level-card-icon">{cat.icon}</span>
                  <span className="level-card-name">{cat.name}</span>
                  <span className="level-card-badge" style={{ background: cat.color }}>
                    {level.icon} {level.name}
                  </span>
                </div>
                <p className="level-card-desc">{cat.desc}</p>
                <div className="level-card-exp">
                  <div className="level-exp-bar">
                    <div className="level-exp-fill" style={{ width: `${Math.min(pct, 100)}%`, background: cat.color }} />
                  </div>
                  <span className="level-exp-text">{exp} EXP</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 等级说明 */}
      <div className="profile-level-legend">
        <h3>等级体系</h3>
        <div className="legend-list">
          {LEVELS.map(l => (
            <div key={l.key} className="legend-item">
              <span className="legend-icon">{l.icon}</span>
              <span className="legend-name">{l.name}</span>
              <span className="legend-exp">{l.minExp} EXP</span>
            </div>
          ))}
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="profile-actions">
        {isAdmin && (
          <button className="btn btn-secondary" onClick={() => navigate('/admin')}>
            🛡️ 管理员面板
          </button>
        )}
        <button className="btn btn-outline" onClick={logout}>
          退出登录
        </button>
      </div>
    </div>
  )
}

export default MyProfile
