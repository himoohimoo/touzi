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
              </>
            )}
          </div>
        </div>
      </header>

      {/* Logo愿景弹窗 */}
      {showVision && (
        <div className="vision-overlay" onClick={() => setShowVision(false)}>
          <div className="vision-card" onClick={e => e.stopPropagation()}>
            <div className="vision-icon">🌟</div>
            <h2>我们的愿景</h2>
            <div className="vision-text">
              <p>日行一步</p>
              <p>价值投资</p>
              <p>财务自由</p>
            </div>
            <button className="vision-close" onClick={() => setShowVision(false)}>知道了</button>
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

        {/* 行 - 右下 */}
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

        {/* 省 - 左下 */}
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
        <p>知 → 行 → 省 · 循环精进，以道御术</p>
      </footer>
    </div>
  )
}

export default Home
