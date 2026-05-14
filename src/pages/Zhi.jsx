import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'

const modules = [
  {
    id: 'self',
    title: '认知自己',
    subtitle: '寻找你的投资坐标',
    icon: '🪞',
    description: '通过心理测试与财务体检，找到"睡得着觉"的投资方式',
    hasTest: true,
  },
  {
    id: 'market',
    title: '认知市场',
    subtitle: '看懂游戏的规则',
    icon: '📊',
    description: 'A股、港股、美股三大市场特征，宏观水位感知',
    hasQuiz: true,
  },
  {
    id: 'system',
    title: '认知投资体系',
    subtitle: '建立知识护城河',
    icon: '📚',
    description: '复利与时间、价值投资理念、大师谱系',
  },
  {
    id: 'rules',
    title: '认知交易规则',
    subtitle: '了解游戏规则',
    icon: '⚖️',
    description: '交易时间、涨跌停、T+1、费用结构等基础规则',
  },
  {
    id: 'participants',
    title: '认知市场参与者',
    subtitle: '了解你的对手',
    icon: '👥',
    description: '散户、机构、外资、游资——不同参与者的行为模式',
  },
  {
    id: 'technical',
    title: '认知股票技术分析',
    subtitle: '图表背后的语言',
    icon: '📈',
    description: 'K线、均线、成交量、技术指标——读懂市场情绪的辅助工具',
  },
  {
    id: 'masters',
    title: '投资大师的故事&经典书',
    subtitle: '站在巨人的肩膀上',
    icon: '📖',
    description: '巴菲特、芒格、段永平……他们的投资智慧与必读书单',
  },
]

function Zhi() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [showProfile, setShowProfile] = useState(false)
  const [showSoulQuestion, setShowSoulQuestion] = useState(false)
  const [showParticipants, setShowParticipants] = useState(false)
  const [showMarketHistory, setShowMarketHistory] = useState(false)
  const [showMarketMechanism, setShowMarketMechanism] = useState(false)

  const hasPersonalityResult = user?.personalityResult

  return (
    <div className="sub-page">
      <div className="page-header">
        <button className="page-back" onClick={() => navigate('/')}>
          <span>←</span> 返回首页
        </button>
        <div className="page-badge" style={{ background: 'linear-gradient(145deg, var(--zhi), var(--zhi-dark))' }}>
          知
        </div>
        <h1>认知篇</h1>
        <p>投资前先认识自己、认识市场、认识规则</p>
      </div>

      <div className="modules-grid">
        {/* 认知自己 */}
        <div
          className="module-card"
          style={{ cursor: 'default' }}
        >
          <span className="module-icon">{modules[0].icon}</span>
          <h3>{modules[0].title}</h3>
          <p className="module-subtitle">{modules[0].subtitle}</p>
          <p className="module-desc">{modules[0].description}</p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
            <span className="module-btn" style={{ cursor: 'pointer' }} onClick={() => navigate('/zhi/test/self')}>开始测试 →</span>
            <span
              className="module-btn"
              style={{ cursor: 'pointer', background: hasPersonalityResult ? 'linear-gradient(135deg, var(--zhi), var(--zhi-dark))' : 'rgba(255,255,255,0.06)', color: hasPersonalityResult ? '#fff' : 'var(--text-dim)' }}
              onClick={() => setShowProfile(true)}
            >
              我的画像 →
            </span>
          </div>
        </div>

        {/* 认知市场 */}
        <div
          className="module-card"
          style={{ cursor: 'default' }}
        >
          <span className="module-icon">{modules[1].icon}</span>
          <h3>{modules[1].title}</h3>
          <p className="module-subtitle">{modules[1].subtitle}</p>
          <p className="module-desc">{modules[1].description}</p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
            <span 
              className="module-btn" 
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/zhi/market')}
            >
              📚 知识问答 →
            </span>
            <span 
              className="module-btn" 
              style={{ cursor: 'pointer', background: 'linear-gradient(135deg, var(--zhi), var(--zhi-dark))' }}
              onClick={() => setShowMarketHistory(true)}
            >
              📜 股票市场历史 →
            </span>
            <span 
              className="module-btn" 
              style={{ cursor: 'pointer', background: 'linear-gradient(135deg, var(--xing), var(--xing-dark))' }}
              onClick={() => setShowMarketMechanism(true)}
            >
              ⚙️ 市场机制 →
            </span>
          </div>
        </div>

        {/* 认知市场参与者 - 特殊处理 */}
        <div
          className="module-card"
          style={{ cursor: 'default' }}
        >
          <span className="module-icon">{modules[4].icon}</span>
          <h3>{modules[4].title}</h3>
          <p className="module-subtitle">{modules[4].subtitle}</p>
          <p className="module-desc">{modules[4].description}</p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
            <span 
              className="module-btn" 
              style={{ cursor: 'pointer' }}
              onClick={() => setShowSoulQuestion(true)}
            >
              💭 灵魂问题 →
            </span>
            <span 
              className="module-btn" 
              style={{ cursor: 'pointer', background: 'linear-gradient(135deg, var(--zhi), var(--zhi-dark))' }}
              onClick={() => setShowParticipants(true)}
            >
              👥 股市参与者 →
            </span>
          </div>
        </div>

        {/* 其余模块 */}
        {[modules[2], modules[3], modules[5], modules[6]].map(mod => (
          <div
            key={mod.id}
            className="module-card"
            style={{ cursor: 'default' }}
          >
            <span className="module-icon">{mod.icon}</span>
            <h3>{mod.title}</h3>
            <p className="module-subtitle">{mod.subtitle}</p>
            <p className="module-desc">{mod.description}</p>
            <span className="module-btn disabled">即将上线</span>
          </div>
        ))}
      </div>

      {/* 我的画像弹窗 */}
      {showProfile && (
        <div className="vision-overlay" onClick={() => setShowProfile(false)}>
          <div className="vision-card account-guide-card" onClick={e => e.stopPropagation()}>
            <h2>🪄 我的投资画像</h2>

            {!hasPersonalityResult ? (
              <div className="guide-section">
                <div className="guide-content" style={{ textAlign: 'center', padding: '32px 16px' }}>
                  <p style={{ fontSize: '40px', marginBottom: '16px' }}>🪞</p>
                  <p style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: 500, marginBottom: '12px' }}>
                    你还没有完成"认知自己"测试
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                    完成测试后，系统将为你生成专属投资画像，帮助你找到最适合的投资方式。
                  </p>
                  <button
                    className="module-btn"
                    style={{ background: 'linear-gradient(135deg, var(--zhi), var(--zhi-dark))', color: '#fff', padding: '10px 24px', border: 'none', borderRadius: '20px', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}
                    onClick={() => { setShowProfile(false); navigate('/zhi/test/self') }}
                  >
                    去测试 →
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="guide-section">
                  <div className="guide-content" style={{ textAlign: 'center', padding: '20px' }}>
                    <p style={{ fontSize: '48px', marginBottom: '8px' }}>{user.personalityResult.type?.icon}</p>
                    <h3 style={{ fontSize: '20px', color: user.personalityResult.type?.color, marginBottom: '8px', border: 'none', padding: 0 }}>
                      {user.personalityResult.type?.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                      {user.personalityResult.type?.desc}
                    </p>
                  </div>
                </div>

                <div className="guide-section">
                  <h3>📊 维度评分</h3>
                  <div className="broker-list">
                    {[
                      { label: '风险偏好', key: 'R', desc: '越高越能承受波动' },
                      { label: '时间偏好', key: 'T', desc: '越高越倾向长期持有' },
                      { label: '决策风格', key: 'D', desc: '越高越倾向理性分析' },
                      { label: '收益期望', key: 'Ret', desc: '越高越追求高回报' },
                    ].map(item => (
                      <div key={item.key} className="broker-item" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ minWidth: '70px' }}>
                          <strong style={{ fontSize: '13px' }}>{item.label}</strong>
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{
                              width: `${user.personalityResult.scores?.[item.key] || 0}%`,
                              height: '100%',
                              background: `linear-gradient(90deg, var(--zhi), ${user.personalityResult.type?.color || 'var(--zhi)'})`,
                              borderRadius: '4px',
                              transition: 'width 0.5s ease',
                            }} />
                          </div>
                        </div>
                        <div style={{ minWidth: '36px', textAlign: 'right' }}>
                          <span style={{ fontSize: '14px', fontWeight: 600, color: user.personalityResult.type?.color }}>
                            {Math.round(user.personalityResult.scores?.[item.key] || 0)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {user.personalityResult.type?.suitable && (
                  <div className="guide-section">
                    <h3>✅ 适合的投资方式</h3>
                    <div className="broker-item">
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {user.personalityResult.type.suitable.map((item, i) => (
                          <span key={i} style={{
                            background: 'rgba(46, 204, 113, 0.1)',
                            border: '1px solid rgba(46, 204, 113, 0.2)',
                            borderRadius: '12px',
                            padding: '4px 12px',
                            fontSize: '12px',
                            color: 'var(--dao)',
                          }}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {user.personalityResult.type?.unsuitable && (
                  <div className="guide-section">
                    <h3>⚠️ 不建议的投资方式</h3>
                    <div className="broker-item">
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {user.personalityResult.type.unsuitable.map((item, i) => (
                          <span key={i} style={{
                            background: 'rgba(231, 76, 60, 0.1)',
                            border: '1px solid rgba(231, 76, 60, 0.2)',
                            borderRadius: '12px',
                            padding: '4px 12px',
                            fontSize: '12px',
                            color: '#e74c3c',
                          }}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="guide-section">
                  <div className="guide-tip" style={{ textAlign: 'center' }}>
                    💡 你的投资画像会随着认知提升而动态调整，建议定期重新测试。
                  </div>
                </div>
              </>
            )}

            <button className="vision-close" onClick={() => setShowProfile(false)}>关闭</button>
          </div>
        </div>
      )}

      {/* 灵魂问题弹窗 */}
      {showSoulQuestion && (
        <div className="vision-overlay" onClick={() => setShowSoulQuestion(false)}>
          <div className="vision-card account-guide-card" onClick={e => e.stopPropagation()}>
            <h2>💭 灵魂问题</h2>

            <div className="guide-section">
              <div className="guide-content" style={{ borderLeft: '3px solid #E74C3C', padding: '16px 20px' }}>
                <p style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.8, margin: 0 }}>
                  "股市那么多专业人士，散户拼信息拼不过，拼技术拼不过，他赚的就是你亏的，不就是韭菜的命么？"
                </p>
              </div>
            </div>

            <div className="guide-section">
              <h3 style={{ color: 'var(--dao)' }}>🎯 答案：取决于你的投资视角</h3>

              <div className="broker-item" style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '20px' }}>⚡</span>
                  <strong style={{ fontSize: '15px', color: '#E74C3C' }}>短线视角：这个问题是对的</strong>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  从短期博弈的角度看，普通散户在信息获取、技术分析、交易速度等方面确实存在劣势。
                  短线交易本质是零和博弈（甚至负和，考虑手续费），散户大概率处于弱势地位。
                  如果只做短线，只能靠运气，长期下来亏钱是大概率事件。
                </p>
              </div>

              <div style={{ textAlign: 'center', fontSize: '24px', margin: '12px 0' }}>⬇️</div>

              <div className="broker-item" style={{ background: 'rgba(46, 204, 113, 0.08)', borderColor: 'rgba(46, 204, 113, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '20px' }}>🌱</span>
                  <strong style={{ fontSize: '15px', color: '#2ECC71' }}>股东视角：这是完全不同的游戏</strong>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  当你以<strong style={{ color: 'var(--text-primary)' }}>公司股东</strong>的身份思考时，
                  你赚的钱来自企业真实的盈利增长和分红，而不是其他投资者的亏损。
                </p>
              </div>
            </div>

            <div className="guide-section">
              <h3>📊 示意图：两种赚钱逻辑</h3>
              <div className="guide-content" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* 零和博弈 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '80px', textAlign: 'center' }}>
                      <div style={{ fontSize: '12px', color: '#E74C3C', fontWeight: 600 }}>零和博弈</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>(短线)</div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ flex: 1, height: '40px', background: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed rgba(231, 76, 60, 0.3)' }}>
                        <span style={{ fontSize: '12px', color: '#E74C3C' }}>散户亏钱 →</span>
                      </div>
                      <span style={{ fontSize: '16px' }}>💸</span>
                      <div style={{ flex: 1, height: '40px', background: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(46, 204, 113, 0.3)' }}>
                        <span style={{ fontSize: '12px', color: '#2ECC71' }}>→ 机构赚钱</span>
                      </div>
                    </div>
                  </div>

                  {/* 正和博弈 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '80px', textAlign: 'center' }}>
                      <div style={{ fontSize: '12px', color: '#2ECC71', fontWeight: 600 }}>正和博弈</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>(长线)</div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ flex: 1, padding: '12px', background: 'rgba(74, 144, 217, 0.1)', borderRadius: '8px', border: '1px solid rgba(74, 144, 217, 0.3)', textAlign: 'center' }}>
                          <span style={{ fontSize: '12px', color: 'var(--zhi)' }}>🏢 公司盈利增长</span>
                        </div>
                        <span style={{ fontSize: '14px' }}>➕</span>
                        <div style={{ flex: 1, padding: '12px', background: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', border: '1px solid rgba(155, 89, 182, 0.3)', textAlign: 'center' }}>
                          <span style={{ fontSize: '12px', color: '#9B59B6' }}>💰 分红</span>
                        </div>
                      </div>
                      <div style={{ textAlign: 'center', fontSize: '14px' }}>⬇️</div>
                      <div style={{ padding: '12px', background: 'rgba(46, 204, 113, 0.15)', borderRadius: '8px', border: '2px solid rgba(46, 204, 113, 0.4)', textAlign: 'center' }}>
                        <span style={{ fontSize: '13px', color: '#2ECC71', fontWeight: 500 }}>✨ 股东共同分享企业成长红利</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="guide-section">
              <div className="guide-tip" style={{ textAlign: 'center' }}>
                <strong style={{ color: 'var(--dao)' }}>核心结论：</strong>
                <br />
                选择做<span style={{ color: '#E74C3C' }}>赌徒</span>还是<span style={{ color: '#2ECC71' }}>股东</span>，
                决定了你在股市的命运。
              </div>
            </div>

            <button className="vision-close" onClick={() => setShowSoulQuestion(false)}>关闭</button>
          </div>
        </div>
      )}

      {/* 股市参与者弹窗 */}
      {showParticipants && (
        <div className="vision-overlay" onClick={() => setShowParticipants(false)}>
          <div className="vision-card account-guide-card" onClick={e => e.stopPropagation()} style={{ maxWidth: '640px' }}>
            <h2>👥 股市参与者画像</h2>

            <div className="guide-section">
              <h3>📊 A股市值占比（约100万亿）</h3>
              <div className="guide-content" style={{ padding: '16px' }}>
                <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <th style={{ textAlign: 'left', padding: '10px 8px', color: 'var(--text-primary)' }}>参与者</th>
                      <th style={{ textAlign: 'center', padding: '10px 8px', color: 'var(--text-primary)' }}>市值占比</th>
                      <th style={{ textAlign: 'center', padding: '10px 8px', color: 'var(--text-primary)' }}>交易占比</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: '一般法人（大股东）', share: '~45%', trade: '~5%', color: '#4A90D9' },
                      { name: '个人投资者（散户）', share: '~30%', trade: '~60%', color: '#E74C3C' },
                      { name: '公募基金', share: '~8%', trade: '~12%', color: '#2ECC71' },
                      { name: '外资（北向资金）', share: '~5%', trade: '~8%', color: '#9B59B6' },
                      { name: '保险资金', share: '~4%', trade: '~3%', color: '#F39C12' },
                      { name: '私募基金', share: '~4%', trade: '~8%', color: '#1ABC9C' },
                      { name: '社保基金/国家队', share: '~3%', trade: '~2%', color: '#E67E22' },
                      { name: '其他（信托、券商等）', share: '~1%', trade: '~2%', color: '#95A5A6' },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '10px 8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: row.color }}></span>
                          <span style={{ color: 'var(--text-primary)' }}>{row.name}</span>
                        </td>
                        <td style={{ textAlign: 'center', padding: '10px 8px', color: row.color, fontWeight: 500 }}>{row.share}</td>
                        <td style={{ textAlign: 'center', padding: '10px 8px', color: 'var(--text-secondary)' }}>{row.trade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '12px', textAlign: 'center' }}>
                  * 数据为2024年 approximate 值，仅供参考
                </p>
              </div>
            </div>

            <div className="guide-section">
              <h3>⚖️ 优劣势分析</h3>
              <div className="broker-list" style={{ gap: '12px' }}>
                {[
                  {
                    icon: '👤',
                    name: '散户',
                    pros: ['资金灵活，无考核压力', '船小好调头', '可以长期持有'],
                    cons: ['信息不对称', '缺乏专业分析能力', '情绪易受影响', '频繁交易成本高'],
                    strategy: '认清劣势，扬长避短，做时间的朋友'
                  },
                  {
                    icon: '🏢',
                    name: '机构（公募/私募）',
                    pros: ['专业研究团队', '信息获取能力强', '资金规模大，有议价权'],
                    cons: ['短期业绩考核压力', '规模大了难调头', '受投资范围限制', '羊群效应明显'],
                    strategy: '跟随聪明钱，但避免追高热门基金'
                  },
                  {
                    icon: '🌐',
                    name: '外资',
                    pros: ['全球视野，估值体系成熟', '长期投资理念', '研究深度强'],
                    cons: ['受汇率波动影响', '地缘政治风险', '对本土市场理解有限'],
                    strategy: '关注北向资金流向，但要有独立判断'
                  },
                  {
                    icon: '🛡️',
                    name: '国家队/社保基金',
                    pros: ['资金成本低', '政策信息优势', '长期投资，稳定市场'],
                    cons: ['追求绝对收益，非超额收益', '操作不灵活', '入市时机偏保守'],
                    strategy: '熊市时关注其动向，往往是底部信号'
                  },
                  {
                    icon: '💼',
                    name: '大股东/产业资本',
                    pros: ['最了解公司真实情况', '长期利益绑定', '可以影响公司经营'],
                    cons: ['减持受监管限制', '资金占用大', '增减持需披露'],
                    strategy: '关注大股东增持/回购，往往是价值信号'
                  },
                ].map((p, i) => (
                  <div key={i} className="broker-item">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <span style={{ fontSize: '20px' }}>{p.icon}</span>
                      <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>{p.name}</strong>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '10px' }}>
                      <div>
                        <div style={{ fontSize: '11px', color: '#2ECC71', marginBottom: '4px' }}>✅ 优势</div>
                        <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                          {p.pros.map((pro, j) => <li key={j}>{pro}</li>)}
                        </ul>
                      </div>
                      <div>
                        <div style={{ fontSize: '11px', color: '#E74C3C', marginBottom: '4px' }}>❌ 劣势</div>
                        <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                          {p.cons.map((con, j) => <li key={j}>{con}</li>)}
                        </ul>
                      </div>
                    </div>
                    <div style={{ padding: '8px 12px', background: 'rgba(74, 144, 217, 0.08)', borderRadius: '6px', fontSize: '12px', color: 'var(--zhi)' }}>
                      <strong>💡 策略：</strong>{p.strategy}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="guide-section">
              <div className="guide-tip" style={{ textAlign: 'center' }}>
                <strong>核心洞察：</strong>
                <br />
                散户虽然市值占比30%，却贡献了60%的交易量——
                <br />
                <span style={{ color: '#E74C3C' }}>过度交易</span>是散户亏损的首要原因。
              </div>
            </div>

            <button className="vision-close" onClick={() => setShowParticipants(false)}>关闭</button>
          </div>
        </div>
      )}

      {/* 股票市场历史弹窗 */}
      {showMarketHistory && (
        <div className="vision-overlay" onClick={() => setShowMarketHistory(false)}>
          <div className="vision-card account-guide-card" onClick={e => e.stopPropagation()} style={{ maxWidth: '640px' }}>
            <h2>📜 股票市场历史</h2>

            <div className="guide-section">
              <h3>🇺🇸 美股：两百年的成熟市场</h3>
              <div className="broker-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '20px' }}>🏛️</span>
                  <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>1792年 - 华尔街诞生</strong>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  24名经纪人在华尔街的一棵梧桐树下签订《梧桐树协议》，标志着纽约证券交易所的前身诞生。
                  经过200多年的发展，美股已成为全球最成熟、最规范的资本市场。
                </p>
              </div>

              <div className="broker-item" style={{ marginTop: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '20px' }}>💻</span>
                  <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>1990年代 - 信息革命</strong>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  随着互联网和IT技术的发展，电子交易取代传统人工交易，交易成本大幅降低，
                  交易效率显著提升。纳斯达克交易所崛起，科技股成为市场主角，
                  催生了高盛、摩根士丹利等全球顶尖投资银行。
                </p>
              </div>

              <div className="broker-item" style={{ marginTop: '12px', background: 'rgba(46, 204, 113, 0.08)', borderColor: 'rgba(46, 204, 113, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '20px' }}>✨</span>
                  <strong style={{ fontSize: '14px', color: '#2ECC71' }}>美股特色</strong>
                </div>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  <li>全球市值最大，约50万亿美元，占全球股市45%</li>
                  <li>机构投资者主导，散户交易占比仅约10-15%</li>
                  <li>T+0交易，无涨跌幅限制，做空机制完善</li>
                  <li>监管严格，信息披露要求高，违法成本极高</li>
                  <li>退市机制成熟，优胜劣汰，保持市场活力</li>
                </ul>
              </div>
            </div>

            <div className="guide-section">
              <h3>🇨🇳 A股：年轻的成长市场</h3>
              <div className="broker-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '20px' }}>🎂</span>
                  <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>1990年 - 上交所成立</strong>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  A股仅有30多年历史，相比美股还非常年轻。从最初的老八股发展到如今5300多家上市公司，
                  总市值约100万亿人民币，已成为全球第二大股票市场。
                </p>
              </div>

              <div className="broker-item" style={{ marginTop: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '20px' }}>📈</span>
                  <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>发展阶段</strong>
                </div>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  <li><strong>1990-2005：</strong>探索期，股权分置改革前，市场机制不完善</li>
                  <li><strong>2005-2018：</strong>成长期，股权分置改革，市场规模快速扩张</li>
                  <li><strong>2018至今：</strong>改革期，科创板、注册制、北交所，制度逐步完善</li>
                </ul>
              </div>

              <div className="broker-item" style={{ marginTop: '12px', background: 'rgba(243, 156, 18, 0.08)', borderColor: 'rgba(243, 156, 18, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '20px' }}>🌱</span>
                  <strong style={{ fontSize: '14px', color: '#F39C12' }}>A股特色</strong>
                </div>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  <li>散户占比高，交易占比约60%，市场波动较大</li>
                  <li>T+1交易，主板±10%涨跌幅限制（创业板科创板±20%）</li>
                  <li>监管机制持续完善中，退市制度逐步健全</li>
                  <li>股票种类日益丰富，但衍生品市场相对薄弱</li>
                  <li>政策市特征明显，受宏观政策影响较大</li>
                </ul>
              </div>
            </div>

            <div className="guide-section">
              <h3>🇭🇰 港股：连接东西方的桥梁</h3>
              <div className="broker-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '20px' }}>🌉</span>
                  <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>1891年 - 香港证券交易所成立</strong>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  香港作为国际金融中心，港股市场兼具国际化和中国特色。
                  既有腾讯、阿里等中国科技巨头，也有汇丰、友邦等国际金融巨头。
                </p>
              </div>

              <div className="broker-item" style={{ marginTop: '12px', background: 'rgba(155, 89, 182, 0.08)', borderColor: 'rgba(155, 89, 182, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '20px' }}>🌏</span>
                  <strong style={{ fontSize: '14px', color: '#9B59B6' }}>港股特色</strong>
                </div>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  <li>国际化程度高，外资占比大，受全球资本流动影响</li>
                  <li>T+0交易，无涨跌幅限制，市场波动剧烈</li>
                  <li>仙股（低价股）众多，退市机制严格</li>
                  <li>连接内地与国际市场的桥梁（沪深港通）</li>
                  <li>金融、地产板块占比高，科技股近年崛起</li>
                </ul>
              </div>
            </div>

            <div className="guide-section">
              <h3>📊 三大市场对比</h3>
              <div className="guide-content" style={{ padding: '16px' }}>
                <table style={{ width: '100%', fontSize: '12px', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <th style={{ textAlign: 'left', padding: '10px 6px', color: 'var(--text-primary)' }}>维度</th>
                      <th style={{ textAlign: 'center', padding: '10px 6px', color: '#4A90D9' }}>美股</th>
                      <th style={{ textAlign: 'center', padding: '10px 6px', color: '#E74C3C' }}>A股</th>
                      <th style={{ textAlign: 'center', padding: '10px 6px', color: '#9B59B6' }}>港股</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { dim: '历史', us: '200+年', cn: '30+年', hk: '130+年' },
                      { dim: '总市值', us: '~50万亿$', cn: '~100万亿¥', hk: '~30万亿HK$' },
                      { dim: '交易制度', us: 'T+0', cn: 'T+1', hk: 'T+0' },
                      { dim: '涨跌幅', us: '无限制', cn: '±10%/20%', hk: '无限制' },
                      { dim: '散户占比', us: '~15%', cn: '~60%', hk: '~30%' },
                      { dim: '监管成熟度', us: '⭐⭐⭐⭐⭐', cn: '⭐⭐⭐', hk: '⭐⭐⭐⭐' },
                      { dim: '国际化', us: '⭐⭐⭐⭐⭐', cn: '⭐⭐⭐', hk: '⭐⭐⭐⭐⭐' },
                      { dim: '做空机制', us: '完善', cn: '有限', hk: '完善' },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '10px 6px', color: 'var(--text-secondary)' }}>{row.dim}</td>
                        <td style={{ textAlign: 'center', padding: '10px 6px', color: '#4A90D9' }}>{row.us}</td>
                        <td style={{ textAlign: 'center', padding: '10px 6px', color: '#E74C3C' }}>{row.cn}</td>
                        <td style={{ textAlign: 'center', padding: '10px 6px', color: '#9B59B6' }}>{row.hk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="guide-section">
              <div className="guide-tip" style={{ textAlign: 'center' }}>
                <strong>启示：</strong>
                <br />
                A股虽然年轻，但改革步伐坚定。理解市场特征，
                <br />
                在适合自己的市场中，用适合的策略投资。
              </div>
            </div>

            <button className="vision-close" onClick={() => setShowMarketHistory(false)}>关闭</button>
          </div>
        </div>
      )}

      {/* 市场机制弹窗 */}
      {showMarketMechanism && (
        <div className="vision-overlay" onClick={() => setShowMarketMechanism(false)}>
          <div className="vision-card account-guide-card" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <h2>⚙️ 市场机制：市场先生理论</h2>

            <div className="guide-section">
              <div className="guide-content" style={{ borderLeft: '3px solid var(--zhi)', padding: '16px 20px' }}>
                <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.8, margin: 0 }}>
                  <strong>"市场先生"</strong>是本杰明·格雷厄姆提出的经典比喻：
                  想象你有一个合伙人叫"市场先生"，他每天来敲你的门，
                  报一个价格要买你的股权，或者卖他的股权给你。
                </p>
              </div>
            </div>

            <div className="guide-section">
              <h3>🎭 市场先生的性格</h3>
              <div className="guide-content" style={{ padding: '20px' }}>
                {/* 市场先生情绪图 - 重新设计 */}
                <div style={{ position: 'relative', height: '220px', marginBottom: '8px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', padding: '10px' }}>
                  {/* Y轴标签 */}
                  <div style={{ position: 'absolute', left: '5px', top: '30px', fontSize: '10px', color: '#E74C3C', writingMode: 'vertical-rl' }}>高价区（卖出）↑</div>
                  <div style={{ position: 'absolute', left: '5px', bottom: '30px', fontSize: '10px', color: '#2ECC71', writingMode: 'vertical-rl' }}>↓低价区（买入）</div>
                  
                  {/* SVG图表 */}
                  <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 400 200" preserveAspectRatio="none">
                    {/* 背景区域 - 高价区（卖出区） */}
                    <rect x="40" y="10" width="340" height="70" fill="rgba(231, 76, 60, 0.08)" />
                    {/* 背景区域 - 低价区（买入区） */}
                    <rect x="40" y="120" width="340" height="70" fill="rgba(46, 204, 113, 0.08)" />
                    
                    {/* 价值线（中间水平线） */}
                    <line x1="40" y1="100" x2="380" y2="100" stroke="#2ECC71" strokeWidth="2" strokeDasharray="8,4" />
                    
                    {/* 价格曲线 */}
                    <path
                      d="M 50 40 C 80 30, 100 50, 130 80 S 180 130, 210 150 S 260 160, 290 140 S 340 90, 370 60"
                      fill="none"
                      stroke="#4A90D9"
                      strokeWidth="3"
                    />
                    
                    {/* 关键点标注 */}
                    {/* 点1: 恐慌卖出 - 价格远高于价值 */}
                    <circle cx="70" cy="35" r="8" fill="#E74C3C" stroke="#fff" strokeWidth="2" />
                    <text x="70" y="25" textAnchor="middle" fontSize="9" fill="#E74C3C" fontWeight="600">①</text>
                    
                    {/* 点2: 价格回归价值 */}
                    <circle cx="150" cy="85" r="8" fill="#F39C12" stroke="#fff" strokeWidth="2" />
                    <text x="150" y="75" textAnchor="middle" fontSize="9" fill="#F39C12" fontWeight="600">②</text>
                    
                    {/* 点3: 恐慌抛售 - 价格远低于价值（买入机会！） */}
                    <circle cx="230" cy="155" r="8" fill="#2ECC71" stroke="#fff" strokeWidth="2" />
                    <text x="230" y="175" textAnchor="middle" fontSize="9" fill="#2ECC71" fontWeight="600">③</text>
                    
                    {/* 点4: 价格回升 */}
                    <circle cx="310" cy="130" r="8" fill="#F39C12" stroke="#fff" strokeWidth="2" />
                    <text x="310" y="120" textAnchor="middle" fontSize="9" fill="#F39C12" fontWeight="600">④</text>
                    
                    {/* 点5: 又涨高了 */}
                    <circle cx="370" cy="55" r="8" fill="#E74C3C" stroke="#fff" strokeWidth="2" />
                    <text x="370" y="45" textAnchor="middle" fontSize="9" fill="#E74C3C" fontWeight="600">⑤</text>
                    
                    {/* 价值线标签 */}
                    <text x="385" y="104" fontSize="10" fill="#2ECC71" fontWeight="600">价值</text>
                  </svg>
                  
                  {/* 时间轴 */}
                  <div style={{ position: 'absolute', bottom: '-5px', left: '50px', right: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--text-dim)' }}>
                    <span>时间起点</span>
                    <span>→</span>
                    <span>时间终点</span>
                  </div>
                </div>
                
                {/* 图例说明 */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '16px' }}>
                  <div style={{ padding: '12px', background: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px', border: '1px solid rgba(231, 76, 60, 0.2)' }}>
                    <div style={{ fontSize: '13px', color: '#E74C3C', fontWeight: 600, marginBottom: '6px' }}>🔴 红色区域 = 卖出时机</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>价格 &gt; 价值<br/>市场先生<strong>过度乐观</strong></div>
                  </div>
                  <div style={{ padding: '12px', background: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', border: '1px solid rgba(46, 204, 113, 0.2)' }}>
                    <div style={{ fontSize: '13px', color: '#2ECC71', fontWeight: 600, marginBottom: '6px' }}>🟢 绿色区域 = 买入时机</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>价格 &lt; 价值<br/>市场先生<strong>过度悲观</strong></div>
                  </div>
                </div>
                
                {/* 时间线解读 */}
                <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '8px' }}>📍 时间线解读：</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', fontSize: '11px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: '#E74C3C', fontWeight: 600 }}>①</div>
                      <div style={{ color: 'var(--text-secondary)' }}>价格高涨<br/>考虑卖出</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: '#F39C12', fontWeight: 600 }}>②</div>
                      <div style={{ color: 'var(--text-secondary)' }}>回归价值<br/>持有观望</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: '#2ECC71', fontWeight: 600 }}>③</div>
                      <div style={{ color: 'var(--text-secondary)' }}>恐慌抛售<br/><strong style={{ color: '#2ECC71' }}>买入机会!</strong></div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: '#F39C12', fontWeight: 600 }}>④</div>
                      <div style={{ color: 'var(--text-secondary)' }}>价格回升<br/>继续持有</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: '#E74C3C', fontWeight: 600 }}>⑤</div>
                      <div style={{ color: 'var(--text-secondary)' }}>又涨高了<br/>考虑卖出</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="guide-section">
              <h3>💡 核心洞察</h3>
              <div className="broker-list">
                <div className="broker-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '18px' }}>🎢</span>
                    <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>市场先生情绪不稳定</strong>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                    他有时极度乐观（报高价），有时极度悲观（报低价）。
                    他的报价<strong>只反映情绪，不反映价值</strong>。
                  </p>
                </div>

                <div className="broker-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '18px' }}>🎯</span>
                    <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>价格 ≠ 价值</strong>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                    短期价格是投票机（受情绪影响），长期价格是称重机（反映价值）。
                    <strong>价格围绕价值波动</strong>，但长期会回归价值。
                  </p>
                </div>

                <div className="broker-item" style={{ background: 'rgba(46, 204, 113, 0.08)', borderColor: 'rgba(46, 204, 113, 0.2)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '18px' }}>💰</span>
                    <strong style={{ fontSize: '14px', color: '#2ECC71' }}>利用市场先生，而不是被利用</strong>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                    当市场先生<strong style={{ color: '#E74C3C' }}>悲观</strong>（价格远低于价值）→ <strong style={{ color: '#2ECC71' }}>买入机会</strong>
                    <br />
                    当市场先生<strong style={{ color: '#2ECC71' }}>乐观</strong>（价格远高于价值）→ <strong style={{ color: '#E74C3C' }}>卖出机会</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="guide-section">
              <h3>📐 价格与价值的关系</h3>
              <div className="guide-content" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* 高估 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '60px', textAlign: 'center' }}>
                      <div style={{ fontSize: '24px' }}>📈</div>
                      <div style={{ fontSize: '11px', color: '#E74C3C' }}>高估</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ height: '24px', background: 'rgba(231, 76, 60, 0.2)', borderRadius: '4px', position: 'relative' }}>
                        <div style={{ position: 'absolute', left: '70%', right: '10%', height: '100%', background: '#E74C3C', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontSize: '11px', color: '#fff' }}>价格</span>
                        </div>
                        <div style={{ position: 'absolute', left: '40%', width: '2px', height: '100%', background: '#2ECC71' }}>
                          <span style={{ position: 'absolute', top: '-16px', left: '-12px', fontSize: '10px', color: '#2ECC71' }}>价值</span>
                        </div>
                      </div>
                      <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '6px 0 0' }}>价格 &gt; 价值 → 考虑卖出</p>
                    </div>
                  </div>

                  {/* 合理 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '60px', textAlign: 'center' }}>
                      <div style={{ fontSize: '24px' }}>⚖️</div>
                      <div style={{ fontSize: '11px', color: 'var(--zhi)' }}>合理</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ height: '24px', background: 'rgba(74, 144, 217, 0.2)', borderRadius: '4px', position: 'relative' }}>
                        <div style={{ position: 'absolute', left: '35%', right: '45%', height: '100%', background: '#4A90D9', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontSize: '11px', color: '#fff' }}>价格</span>
                        </div>
                        <div style={{ position: 'absolute', left: '40%', width: '2px', height: '100%', background: '#2ECC71' }}>
                          <span style={{ position: 'absolute', top: '-16px', left: '-12px', fontSize: '10px', color: '#2ECC71' }}>价值</span>
                        </div>
                      </div>
                      <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '6px 0 0' }}>价格 ≈ 价值 → 持有观望</p>
                    </div>
                  </div>

                  {/* 低估 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '60px', textAlign: 'center' }}>
                      <div style={{ fontSize: '24px' }}>📉</div>
                      <div style={{ fontSize: '11px', color: '#2ECC71' }}>低估</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ height: '24px', background: 'rgba(46, 204, 113, 0.2)', borderRadius: '4px', position: 'relative' }}>
                        <div style={{ position: 'absolute', left: '10%', right: '60%', height: '100%', background: '#2ECC71', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontSize: '11px', color: '#fff' }}>价格</span>
                        </div>
                        <div style={{ position: 'absolute', left: '40%', width: '2px', height: '100%', background: '#2ECC71' }}>
                          <span style={{ position: 'absolute', top: '-16px', left: '-12px', fontSize: '10px', color: '#2ECC71' }}>价值</span>
                        </div>
                      </div>
                      <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '6px 0 0' }}>价格 &lt; 价值 → 买入机会 🎯</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="guide-section">
              <div className="guide-tip" style={{ textAlign: 'center' }}>
                <strong>巴菲特的忠告：</strong>
                <br />
                "市场先生是你的仆人，而不是你的向导。"
                <br />
                <span style={{ color: 'var(--dao)' }}>利用他的情绪，而不是被他的情绪左右。</span>
              </div>
            </div>

            <button className="vision-close" onClick={() => setShowMarketMechanism(false)}>关闭</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Zhi
