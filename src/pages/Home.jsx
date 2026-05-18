import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../context/AuthContext'

function Home() {
  const navigate = useNavigate()
  const { user, setShowAuth, logout } = useAuth()
  const [hoveredNode, setHoveredNode] = useState(null)
  const [showVision, setShowVision] = useState(false)
  const orbitRef = useRef(null)

  // 动态计算轨道尺寸，确保精确穿过三球圆心
  useEffect(() => {
    const updateOrbit = () => {
      const zhi = document.querySelector('.node-zhi')
      const orbit = orbitRef.current
      if (!zhi || !orbit) return

      const mainRect = zhi.closest('.main-content').getBoundingClientRect()
      const zhiRect = zhi.getBoundingClientRect()

      const centerX = mainRect.left + mainRect.width / 2
      const centerY = mainRect.top + mainRect.height / 2
      const zhiCenterX = zhiRect.left + zhiRect.width / 2
      const zhiCenterY = zhiRect.top + zhiRect.height / 2

      const dist = Math.sqrt(
        Math.pow(zhiCenterX - centerX, 2) +
        Math.pow(zhiCenterY - centerY, 2)
      )

      const diameter = dist * 2
      orbit.style.width = diameter + 'px'
      orbit.style.height = diameter + 'px'
    }

    updateOrbit()
    window.addEventListener('resize', updateOrbit)
    return () => window.removeEventListener('resize', updateOrbit)
  }, [])

  return (
    <div className="home">
      {/* 简洁顶部栏 */}
      <header className="top-bar">
        <div className="top-bar-inner">
          <div className="brand-logo" onClick={() => setShowVision(true)} style={{ cursor: 'pointer' }}>
            <svg viewBox="0 0 40 40" className="logo-icon">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2ECC71"/>
                  <stop offset="100%" stopColor="#4A90D9"/>
                </linearGradient>
              </defs>
              <circle cx="20" cy="20" r="18" fill="none" stroke="url(#logoGrad)" strokeWidth="2"/>
              <path d="M12 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="url(#logoGrad)" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M20 12v16M16 20h8" stroke="url(#logoGrad)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="auth-buttons">
            {user ? (
              <>
                <button className="auth-link" onClick={() => navigate('/my')}>我的</button>
                <span className="auth-divider">|</span>
                <button className="auth-link" onClick={logout}>退出</button>
              </>
            ) : (
              <>
              <button className="auth-link" onClick={() => setShowAuth('login')}>登录</button>
              <span className="auth-divider">|</span>
              <button className="auth-link" onClick={() => setShowAuth('register')}>注册</button>
              <span className="auth-divider">|</span>
              <button className="auth-link" onClick={() => navigate('/contact')}>联系</button>
            </>
            )}
          </div>
        </div>
      </header>

      {/* Logo愿景弹窗（含复利投资内容） */}
      {showVision && (
        <div className="vision-overlay" onClick={() => setShowVision(false)}>
          <div className="vision-card compound-card" onClick={e => e.stopPropagation()}>
            <div className="vision-icon">🌟</div>
            <h2>我们的愿景</h2>
            <div className="vision-text">
              <p>日行一步</p>
              <p>价值投资</p>
              <p>财务自由</p>
            </div>

            <div className="wealth-curve-section">
              <h3>人生收入曲线图</h3>
              <div className="wealth-curve-visual">
                <svg viewBox="0 0 420 220" className="curve-svg">
                  {/* 背景网格 */}
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect x="50" y="20" width="340" height="140" fill="url(#grid)"/>

                  {/* 坐标轴 */}
                  <line x1="50" y1="20" x2="50" y2="160" stroke="#555" strokeWidth="1.5"/>
                  <line x1="50" y1="160" x2="390" y2="160" stroke="#555" strokeWidth="1.5"/>

                  {/* Y轴刻度 */}
                  <text x="45" y="160" textAnchor="end" fill="#888" fontSize="9">0</text>
                  <text x="45" y="120" textAnchor="end" fill="#888" fontSize="9">低</text>
                  <text x="45" y="80" textAnchor="end" fill="#888" fontSize="9">中</text>
                  <text x="45" y="40" textAnchor="end" fill="#888" fontSize="9">高</text>

                  {/* X轴年龄刻度 */}
                  <text x="50" y="175" textAnchor="middle" fill="#888" fontSize="9">20</text>
                  <text x="107" y="175" textAnchor="middle" fill="#888" fontSize="9">30</text>
                  <text x="164" y="175" textAnchor="middle" fill="#888" fontSize="9">40</text>
                  <text x="221" y="175" textAnchor="middle" fill="#888" fontSize="9">50</text>
                  <text x="278" y="175" textAnchor="middle" fill="#888" fontSize="9">60</text>
                  <text x="335" y="175" textAnchor="middle" fill="#888" fontSize="9">70</text>
                  <text x="390" y="175" textAnchor="middle" fill="#888" fontSize="9">80</text>

                  {/* 工资收入曲线（蓝色） */}
                  <path
                    d="M50 145 C80 140, 100 130, 130 110 C150 95, 170 75, 190 65 C210 58, 240 55, 278 58 C310 62, 340 80, 370 110 L390 125"
                    stroke="#4A90D9" strokeWidth="3" fill="none" strokeLinecap="round"
                  />

                  {/* 被动收入曲线（绿色） */}
                  <path
                    d="M50 155 C100 152, 150 148, 190 140 C220 132, 250 110, 278 80 C310 50, 350 30, 390 25"
                    stroke="#2ECC71" strokeWidth="3" fill="none" strokeLinecap="round"
                  />

                  {/* 关键节点标记 */}
                  <circle cx="207" cy="62" r="6" fill="#FFD700" stroke="#fff" strokeWidth="1"/>
                  <text x="207" y="52" textAnchor="middle" fill="#FFD700" fontSize="10" fontWeight="600">45岁</text>
                  <circle cx="278" cy="58" r="4" fill="#4A90D9" stroke="#fff" strokeWidth="1"/>
                  <text x="278" y="75" textAnchor="middle" fill="#4A90D9" fontSize="9">60岁</text>

                  {/* 曲线标签 */}
                  <text x="90" y="125" fill="#4A90D9" fontSize="10" fontWeight="500">工资收入</text>
                  <text x="340" y="45" fill="#2ECC71" fontSize="10" fontWeight="500">被动收入</text>

                  {/* 阶段标注 */}
                  <text x="100" y="190" textAnchor="middle" fill="#666" fontSize="8">奋斗期</text>
                  <text x="220" y="190" textAnchor="middle" fill="#666" fontSize="8">收入高峰</text>
                  <text x="330" y="190" textAnchor="middle" fill="#666" fontSize="8">退休期</text>

                  {/* 轴标签 */}
                  <text x="220" y="205" textAnchor="middle" fill="#aaa" fontSize="10">年龄（岁）</text>
                  <text x="25" y="90" textAnchor="middle" fill="#aaa" fontSize="10" transform="rotate(-90 25 90)">收入</text>

                  {/* 图例 */}
                  <rect x="280" y="180" width="12" height="3" fill="#4A90D9" rx="1"/>
                  <text x="296" y="184" fill="#888" fontSize="8">工资</text>
                  <rect x="330" y="180" width="12" height="3" fill="#2ECC71" rx="1"/>
                  <text x="346" y="184" fill="#888" fontSize="8">被动</text>
                </svg>
              </div>
              <div className="wealth-phases">
                <div className="phase-item">
                  <div className="phase-dot" style={{background: '#4A90D9'}}></div>
                  <div className="phase-text">
                    <strong>20-45岁：奋斗期</strong>
                    <p>工资收入持续上升，积累本金，开始投资布局</p>
                  </div>
                </div>
                <div className="phase-item">
                  <div className="phase-dot" style={{background: '#FFD700'}}></div>
                  <div className="phase-text">
                    <strong>45-60岁：收入高峰期</strong>
                    <p>工资收入达到顶峰并保持平稳，被动收入开始加速增长</p>
                  </div>
                </div>
                <div className="phase-item">
                  <div className="phase-dot" style={{background: '#2ECC71'}}></div>
                  <div className="phase-text">
                    <strong>60岁后：被动收入期</strong>
                    <p>工资收入逐步下降，被动收入成为主要财富来源</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="compound-formula">
              <h3>复利公式</h3>
              <div className="formula-box">
                <p className="formula">FV = PV × (1 + r)<sup>n</sup></p>
                <p className="formula-desc">FV = 未来价值 | PV = 本金 | r = 年化收益率 | n = 年数</p>
              </div>
            </div>

            <div className="compound-calculations">
              <h3>收益计算（本金 1 万元）</h3>
              <div className="calc-table">
                <div className="calc-row calc-header">
                  <span>年化收益率</span>
                  <span>10年后</span>
                  <span>20年后</span>
                  <span>收益率</span>
                </div>
                <div className="calc-row">
                  <span className="rate">10%</span>
                  <span>¥25,937</span>
                  <span>¥67,275</span>
                  <span className="gain">+573%</span>
                </div>
                <div className="calc-row">
                  <span className="rate">20%</span>
                  <span>¥61,917</span>
                  <span>¥383,376</span>
                  <span className="gain">+3,734%</span>
                </div>
              </div>
            </div>

            <div className="compound-cases">
              <h3>🇺🇸 美国价值投资成功案例</h3>
              <div className="case-list">
                <div className="case-item">
                  <strong>沃伦·巴菲特</strong>
                  <p>伯克希尔·哈撒韦，1965-2023年复合年化收益约20%，1万美元变成约3.6亿美元</p>
                </div>
                <div className="case-item">
                  <strong>彼得·林奇</strong>
                  <p>富达麦哲伦基金，1977-1990年复合年化收益29%，管理资产从1800万美元增至140亿美元</p>
                </div>
                <div className="case-item">
                  <strong>约翰·博格</strong>
                  <p>先锋集团创始人，推广指数基金投资，标普500长期年化收益约10%</p>
                </div>
                <div className="case-item">
                  <strong>普通投资者案例</strong>
                  <p>坚持定投标普500指数，每月投入500美元，30年后平均可积累超过100万美元</p>
                </div>
              </div>
            </div>

            <button className="vision-close" onClick={() => setShowVision(false)}>关闭</button>
          </div>
        </div>
      )}

      {/* 主内容区 */}
      <main className="main-content">
        {/* 背景光效 */}
        <div className="bg-glow"></div>

        {/* 曲线轨道 - JS动态计算尺寸，精确穿过三球圆心 */}
        <div className="orbit-ring-css" ref={orbitRef}></div>

        {/* 知 - 顶部 */}
        <div className="node-container node-zhi">
          <button
            className="node"
            onClick={() => navigate('/zhi')}
            aria-label="认知篇"
            onMouseEnter={() => setHoveredNode('zhi')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="node-ring outer"></div>
            <div className="node-ring inner"></div>
            <div className="node-core">
              <span className="node-icon">🧠</span>
              <span className="node-char">知</span>
              <span className="node-en">Know</span>
            </div>
          </button>
          <div className="node-desc" style={{ opacity: hoveredNode === 'zhi' ? 1 : 0, visibility: hoveredNode === 'zhi' ? 'visible' : 'hidden' }}>
            认识自己，认识市场<br/>建立投资认知体系
          </div>
        </div>

        {/* 行 - 右侧 */}
        <div className="node-container node-xing">
          <button
            className="node"
            onClick={() => navigate('/xing')}
            aria-label="实践篇"
            onMouseEnter={() => setHoveredNode('xing')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="node-ring outer"></div>
            <div className="node-ring inner"></div>
            <div className="node-core">
              <span className="node-icon">⚔️</span>
              <span className="node-char">行</span>
              <span className="node-en">Act</span>
            </div>
          </button>
          <div className="node-desc" style={{ opacity: hoveredNode === 'xing' ? 1 : 0, visibility: hoveredNode === 'xing' ? 'visible' : 'hidden' }}>
            知行合一<br/>从开户到实盘操作
          </div>
        </div>

        {/* 器 - 下方 */}
        <div className="node-container node-qi">
          <button
            className="node"
            onClick={() => navigate('/qi')}
            aria-label="工具篇"
            onMouseEnter={() => setHoveredNode('qi')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="node-ring outer"></div>
            <div className="node-ring inner"></div>
            <div className="node-core">
              <span className="node-icon">🛠️</span>
              <span className="node-char">器</span>
              <span className="node-en">Tools</span>
            </div>
          </button>
          <div className="node-desc" style={{ opacity: hoveredNode === 'qi' ? 1 : 0, visibility: hoveredNode === 'qi' ? 'visible' : 'hidden' }}>
            工欲善其事<br/>投资分析工具箱
          </div>
        </div>

        {/* 省 - 左侧 */}
        <div className="node-container node-sheng">
          <button
            className="node"
            onClick={() => navigate('/sheng')}
            aria-label="复盘篇"
            onMouseEnter={() => setHoveredNode('sheng')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="node-ring outer"></div>
            <div className="node-ring inner"></div>
            <div className="node-core">
              <span className="node-icon">🔍</span>
              <span className="node-char">省</span>
              <span className="node-en">Reflect</span>
            </div>
          </button>
          <div className="node-desc" style={{ opacity: hoveredNode === 'sheng' ? 1 : 0, visibility: hoveredNode === 'sheng' ? 'visible' : 'hidden' }}>
            吾日三省吾身<br/>持续优化投资系统
          </div>
        </div>

        {/* 道 - 中心 */}
        <div className="node-container node-dao">
          <button
            className="node center-node"
            onClick={() => navigate('/heng')}
            aria-label="体系篇"
            onMouseEnter={() => setHoveredNode('dao')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="node-ring outer"></div>
            <div className="node-ring inner"></div>
            <div className="node-core">
              <span className="node-icon">☯</span>
              <span className="node-char">道</span>
              <span className="node-en">System</span>
            </div>
          </button>
          <div className="node-desc" style={{ opacity: hoveredNode === 'dao' ? 1 : 0, visibility: hoveredNode === 'dao' ? 'visible' : 'hidden' }}>
            以道御术<br/>构建完整投资体系
          </div>
        </div>
      </main>

      {/* 底部标语 */}
      <footer className="home-footer">
        <p>知 → 行 → 器 → 省 · 循环精进，以道御术</p>
      </footer>
    </div>
  )
}

export default Home
