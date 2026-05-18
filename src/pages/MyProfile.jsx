import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
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
  const [adminTab, setAdminTab] = useState('stats')
  const [visitStats, setVisitStats] = useState({ details: [] })
  const [feedbacks, setFeedbacks] = useState([])

  // 加载访问统计和反馈数据
  useEffect(() => {
    if (isAdmin) {
      const savedStats = localStorage.getItem('visitStats')
      if (savedStats) setVisitStats(JSON.parse(savedStats))
      
      const savedFeedbacks = localStorage.getItem('feedbacks')
      if (savedFeedbacks) setFeedbacks(JSON.parse(savedFeedbacks))
    }
  }, [isAdmin])

  // 获取今日和本月统计
  const getTodayCount = () => {
    const today = new Date().toISOString().split('T')[0]
    return visitStats.details.filter(v => v.date === today).length
  }
  
  const getMonthCount = () => {
    const currentMonth = new Date().toISOString().slice(0, 7)
    return visitStats.details.filter(v => v.date.startsWith(currentMonth)).length
  }

  // 按日期分组统计
  const getDailyStats = () => {
    const grouped = {}
    visitStats.details.forEach(v => {
      if (!grouped[v.date]) grouped[v.date] = { count: 0, ips: new Set() }
      grouped[v.date].count++
      grouped[v.date].ips.add(v.ip)
    })
    return Object.entries(grouped)
      .sort((a, b) => b[0].localeCompare(a[0]))
      .slice(0, 30)
      .map(([date, data]) => ({ date, visits: data.count, uniqueIps: data.ips.size }))
  }

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

      {/* 管理员面板 */}
      {isAdmin && (
        <div className="admin-panel-section" style={{
          marginTop: '32px',
          padding: '24px',
          background: 'rgba(155, 89, 182, 0.08)',
          border: '1px solid rgba(155, 89, 182, 0.2)',
          borderRadius: '16px',
        }}>
          <h3 style={{ fontSize: '18px', color: '#9B59B6', margin: '0 0 20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🛡️ 管理员面板
          </h3>

          {/* Tab导航 */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <button
              onClick={() => setAdminTab('stats')}
              style={{
                padding: '10px 20px',
                background: adminTab === 'stats' ? 'rgba(155, 89, 182, 0.3)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${adminTab === 'stats' ? 'rgba(155, 89, 182, 0.5)' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '8px',
                color: adminTab === 'stats' ? '#9B59B6' : 'var(--text-secondary)',
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              📊 访问统计
            </button>
            <button
              onClick={() => setAdminTab('feedback')}
              style={{
                padding: '10px 20px',
                background: adminTab === 'feedback' ? 'rgba(155, 89, 182, 0.3)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${adminTab === 'feedback' ? 'rgba(155, 89, 182, 0.5)' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '8px',
                color: adminTab === 'feedback' ? '#9B59B6' : 'var(--text-secondary)',
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              💬 用户反馈 ({feedbacks.length})
            </button>
          </div>

          {/* 访问统计内容 */}
          {adminTab === 'stats' && (
            <div>
              {/* 统计卡片 */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                marginBottom: '20px',
              }}>
                <div style={{
                  padding: '16px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '10px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: '#3498DB' }}>{getTodayCount()}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>今日访问</div>
                </div>
                <div style={{
                  padding: '16px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '10px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: '#2ECC71' }}>{getMonthCount()}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>本月访问</div>
                </div>
                <div style={{
                  padding: '16px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '10px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: '#E74C3C' }}>{visitStats.details.length}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>总访问次数</div>
                </div>
              </div>

              {/* 每日访问明细 */}
              <h4 style={{ fontSize: '14px', color: 'var(--text-primary)', margin: '0 0 12px' }}>最近30天访问记录</h4>
              <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <th style={{ padding: '10px', textAlign: 'left', color: 'var(--text-secondary)', fontWeight: 500 }}>日期</th>
                      <th style={{ padding: '10px', textAlign: 'center', color: 'var(--text-secondary)', fontWeight: 500 }}>访问次数</th>
                      <th style={{ padding: '10px', textAlign: 'center', color: 'var(--text-secondary)', fontWeight: 500 }}>独立IP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getDailyStats().map((stat, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '10px', color: 'var(--text-primary)' }}>{stat.date}</td>
                        <td style={{ padding: '10px', textAlign: 'center', color: '#3498DB' }}>{stat.visits}</td>
                        <td style={{ padding: '10px', textAlign: 'center', color: '#2ECC71' }}>{stat.uniqueIps}</td>
                      </tr>
                    ))}
                    {getDailyStats().length === 0 && (
                      <tr>
                        <td colSpan={3} style={{ padding: '20px', textAlign: 'center', color: 'var(--text-dim)' }}>
                          暂无访问记录
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 用户反馈内容 */}
          {adminTab === 'feedback' && (
            <div>
              {feedbacks.length === 0 ? (
                <p style={{ textAlign: 'center', color: 'var(--text-dim)', padding: '40px' }}>暂无反馈</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {feedbacks.map((item) => (
                    <div key={item.id} style={{
                      padding: '16px',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '10px',
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '8px',
                      }}>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {item.name || '匿名用户'}
                        </span>
                        <span style={{ fontSize: '11px', color: 'var(--text-dim)' }}>{item.time}</span>
                      </div>
                      {item.email && (
                        <div style={{ fontSize: '11px', color: '#3498DB', marginBottom: '6px' }}>
                          📧 {item.email}
                        </div>
                      )}
                      <p style={{
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        margin: 0,
                      }}>{item.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 操作按钮 */}
      <div className="profile-actions">
        <button className="btn btn-outline" onClick={logout}>
          退出登录
        </button>
      </div>
    </div>
  )
}

export default MyProfile
