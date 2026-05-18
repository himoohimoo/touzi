import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

function Contact() {
  const navigate = useNavigate()
  const { user, isAdmin } = useAuth()
  const [activeTab, setActiveTab] = useState('feedback')
  
  // 反馈表单状态
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  // 反馈列表和访问统计
  const [feedbacks, setFeedbacks] = useState([])
  const [visitStats, setVisitStats] = useState({
    today: 0,
    month: 0,
    total: 0,
    details: [],
  })

  // 加载反馈数据和访问统计
  useEffect(() => {
    // 加载反馈数据
    const savedFeedbacks = localStorage.getItem('feedbacks')
    if (savedFeedbacks) {
      setFeedbacks(JSON.parse(savedFeedbacks))
    }
    
    // 加载访问统计
    const savedStats = localStorage.getItem('visitStats')
    if (savedStats) {
      setVisitStats(JSON.parse(savedStats))
    }
  }, [])

  // 提交反馈
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!feedback.message.trim()) {
      alert('请输入反馈内容')
      return
    }
    
    setSubmitting(true)
    
    setTimeout(() => {
      const newFeedback = {
        id: Date.now(),
        ...feedback,
        ip: '匿名用户',
        time: new Date().toLocaleString(),
        date: new Date().toISOString().split('T')[0],
      }
      
      const updatedFeedbacks = [newFeedback, ...feedbacks]
      setFeedbacks(updatedFeedbacks)
      localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks))
      
      setSubmitting(false)
      setSubmitSuccess(true)
      setFeedback({ name: '', email: '', message: '' })
      
      setTimeout(() => setSubmitSuccess(false), 3000)
    }, 500)
  }

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
      if (!grouped[v.date]) {
        grouped[v.date] = { count: 0, ips: new Set() }
      }
      grouped[v.date].count++
      grouped[v.date].ips.add(v.ip)
    })
    return Object.entries(grouped)
      .sort((a, b) => b[0].localeCompare(a[0]))
      .slice(0, 30)
      .map(([date, data]) => ({
        date,
        visits: data.count,
        uniqueIps: data.ips.size,
      }))
  }

  return (
    <div className="sub-page">
      <div className="page-header">
        <button className="page-back" onClick={() => navigate('/')}>
          <span>←</span> 返回首页
        </button>
        <div className="page-badge" style={{ background: 'linear-gradient(145deg, #3498db, #2980b9)' }}>
          ✉️
        </div>
        <h1>联系我们</h1>
        <p>您的建议是我们进步的动力</p>
      </div>

      {/* Tab导航 - 管理员可见 */}
      {isAdmin && (
        <div style={{ padding: '0 20px 24px' }}>
          <div style={{
            display: 'flex',
            gap: '10px',
          }}>
            <button
              onClick={() => setActiveTab('feedback')}
              style={{
                padding: '10px 20px',
                background: activeTab === 'feedback' ? 'rgba(52, 152, 219, 0.2)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${activeTab === 'feedback' ? 'rgba(52, 152, 219, 0.4)' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '8px',
                color: activeTab === 'feedback' ? '#3498DB' : 'var(--text-secondary)',
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              写反馈
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              style={{
                padding: '10px 20px',
                background: activeTab === 'admin' ? 'rgba(155, 89, 182, 0.2)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${activeTab === 'admin' ? 'rgba(155, 89, 182, 0.4)' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '8px',
                color: activeTab === 'admin' ? '#9B59B6' : 'var(--text-secondary)',
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              🔐 管理后台
            </button>
          </div>
        </div>
      )}

      {/* 反馈表单 */}
      {(activeTab === 'feedback' || !isAdmin) && (
        <div style={{ padding: '0 20px 40px' }}>
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '16px',
            padding: '24px',
          }}>
            <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', margin: '0 0 20px' }}>
              想对版主说
            </h2>

            {submitSuccess && (
              <div style={{
                padding: '12px',
                background: 'rgba(46, 204, 113, 0.15)',
                borderRadius: '8px',
                marginBottom: '16px',
                textAlign: 'center',
              }}>
                <span style={{ color: '#2ECC71', fontSize: '14px' }}>✓ 反馈提交成功，感谢您的建议！</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  您的称呼（选填）
                </label>
                <input
                  type="text"
                  value={feedback.name}
                  onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
                  placeholder="请输入您的称呼"
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '14px',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  联系邮箱（选填）
                </label>
                <input
                  type="email"
                  value={feedback.email}
                  onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
                  placeholder="请输入您的邮箱"
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '14px',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  反馈内容 *
                </label>
                <textarea
                  value={feedback.message}
                  onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
                  placeholder="请输入您想对版主说的话，可以是建议、意见、问题或鼓励..."
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '14px',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                style={{
                  padding: '14px',
                  background: submitting ? 'rgba(52, 152, 219, 0.3)' : '#3498DB',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: submitting ? 'not-allowed' : 'pointer',
                }}
              >
                {submitting ? '提交中...' : '提交反馈'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 管理员后台 */}
      {isAdmin && activeTab === 'admin' && (
        <div style={{ padding: '0 20px 40px' }}>
          {/* 访问统计卡片 */}
          <div style={{
            background: 'rgba(155, 89, 182, 0.08)',
            border: '1px solid rgba(155, 89, 182, 0.2)',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '24px',
          }}>
            <h2 style={{ fontSize: '18px', color: '#9B59B6', margin: '0 0 20px' }}>
              📊 访问统计
            </h2>

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
            <h3 style={{ fontSize: '14px', color: 'var(--text-primary)', margin: '0 0 12px' }}>最近30天访问记录</h3>
            <div style={{
              maxHeight: '300px',
              overflowY: 'auto',
            }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '12px',
              }}>
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

          {/* 反馈列表 */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '16px',
            padding: '24px',
          }}>
            <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', margin: '0 0 20px' }}>
              💬 用户反馈 ({feedbacks.length}条)
            </h2>

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
        </div>
      )}
    </div>
  )
}

export default Contact
