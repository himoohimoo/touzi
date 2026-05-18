import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'

function History() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('us50')
  const [pptFiles, setPptFiles] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef(null)
  const pptViewerRef = useRef(null)

  // 模拟PPT文件数据（实际应从后端API获取）
  useEffect(() => {
    // 这里应该从localStorage或后端API加载已上传的PPT文件列表
    const savedFiles = localStorage.getItem('pptFiles_2026')
    if (savedFiles) {
      setPptFiles(JSON.parse(savedFiles))
    }
  }, [])

  // 检查是否是管理员（简单模拟，实际应通过登录验证）
  useEffect(() => {
    const adminMode = localStorage.getItem('adminMode') === 'true'
    setIsAdmin(adminMode)
  }, [])

  // 切换管理员模式（按Ctrl+Shift+A）
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault()
        const newMode = !isAdmin
        setIsAdmin(newMode)
        localStorage.setItem('adminMode', newMode)
        alert(newMode ? '已切换到管理员模式' : '已退出管理员模式')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isAdmin])

  const tabs = [
    { id: 'us50', title: '美股五十年', icon: '🇺🇸' },
    { id: 'a30', title: 'A股三十年', icon: '🇨🇳' },
    { id: '2026', title: '2026:价值投资很难受', icon: '📉' },
  ]

  // 模拟PPT上传
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    if (files.length === 0) return

    setUploading(true)
    
    // 模拟上传过程
    setTimeout(() => {
      const newFiles = files.map((file, index) => ({
        id: Date.now() + index,
        name: file.name,
        url: URL.createObjectURL(file),
        uploadTime: new Date().toLocaleString(),
      }))
      
      const updatedFiles = [...pptFiles, ...newFiles]
      setPptFiles(updatedFiles)
      localStorage.setItem('pptFiles_2026', JSON.stringify(updatedFiles))
      setUploading(false)
      
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }, 1000)
  }

  // 删除PPT
  const handleDeleteFile = (fileId) => {
    if (!confirm('确定要删除这个PPT文件吗？')) return
    
    const updatedFiles = pptFiles.filter(f => f.id !== fileId)
    setPptFiles(updatedFiles)
    localStorage.setItem('pptFiles_2026', JSON.stringify(updatedFiles))
    
    if (currentSlide >= updatedFiles.length) {
      setCurrentSlide(Math.max(0, updatedFiles.length - 1))
    }
  }

  // 上一页
  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(0, prev - 1))
  }

  // 下一页
  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(pptFiles.length - 1, prev + 1))
  }

  // 全屏切换
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      pptViewerRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  // 监听全屏变化
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeTab !== '2026' || pptFiles.length === 0) return
      
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'Escape' && isFullscreen) {
        document.exitFullscreen()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeTab, pptFiles.length, isFullscreen])

  const us50Content = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{
        padding: '20px',
        background: 'rgba(74, 144, 217, 0.08)',
        border: '1px solid rgba(74, 144, 217, 0.2)',
        borderRadius: '12px',
      }}>
        <h3 style={{ fontSize: '16px', color: '#4A90D9', margin: '0 0 12px' }}>🇺🇸 美股五十年回顾</h3>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
          从1970年代至今，美股经历了多次重大危机与繁荣周期。
          每一次危机都是价值投资者的考验，也是最好的学习机会。
        </p>
      </div>

      {[
        { year: '1970s', title: '滞胀危机', desc: '石油危机、高通胀，巴菲特却在此期间收购了喜诗糖果', lesson: '危机中保持冷静，寻找被错杀的好公司' },
        { year: '1987', title: '黑色星期一', desc: '单日暴跌22.6%，但市场很快恢复', lesson: '短期波动不代表长期价值' },
        { year: '2000', title: '互联网泡沫', desc: '科技股估值疯狂，价值投资者被嘲笑', lesson: '坚守估值纪律，不追热点' },
        { year: '2008', title: '金融危机', desc: '雷曼破产，全球股市暴跌', lesson: '现金为王，危机中大胆买入' },
        { year: '2020', title: '新冠疫情', desc: '美股四次熔断，随后V型反弹', lesson: '市场恐慌时逆向投资' },
        { year: '2022', title: '加息周期', desc: '科技股暴跌，价值股回归', lesson: '利率环境变化影响估值逻辑' },
      ].map((item, i) => (
        <div key={i} style={{
          padding: '16px',
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '10px',
          borderLeft: '3px solid #4A90D9',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#4A90D9' }}>{item.year}</span>
            <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>{item.title}</span>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 8px' }}>{item.desc}</p>
          <p style={{ fontSize: '12px', color: '#2ECC71', lineHeight: 1.6, margin: 0 }}>💡 {item.lesson}</p>
        </div>
      ))}
    </div>
  )

  const a30Content = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{
        padding: '20px',
        background: 'rgba(231, 76, 60, 0.08)',
        border: '1px solid rgba(231, 76, 60, 0.2)',
        borderRadius: '12px',
      }}>
        <h3 style={{ fontSize: '16px', color: '#E74C3C', margin: '0 0 12px' }}>🇨🇳 A股三十年回顾</h3>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
          从1990年上交所成立至今，A股经历了多轮牛熊周期。
          理解A股的独特性，才能在这个市场中长期生存。
        </p>
      </div>

      {[
        { year: '1990-1992', title: '开市初期', desc: '沪深交易所成立，股票稀缺，炒作盛行', lesson: '早期市场投机氛围浓厚' },
        { year: '1996-1997', title: '第一次大牛市', desc: '深发展、四川长虹等绩优股领涨', lesson: '业绩驱动是牛市的根本' },
        { year: '1999-2001', title: '519行情', desc: '互联网概念炒作，随后泡沫破裂', lesson: '概念炒作终将回归价值' },
        { year: '2005-2007', title: '股权分置改革牛', desc: '998点到6124点，全民炒股', lesson: '改革红利可以催生大牛市' },
        { year: '2008', title: '全球金融危机', desc: '6124跌至1664，跌幅73%', lesson: '没有只涨不跌的市场' },
        { year: '2014-2015', title: '杠杆牛', desc: '融资配资推动快速上涨，随后暴跌', lesson: '杠杆是双刃剑，加速涨跌' },
        { year: '2019-2021', title: '核心资产牛', desc: '茅台、恒瑞等白马股大涨', lesson: '优质公司长期跑赢市场' },
        { year: '2022-2024', title: '熊市调整', desc: '美联储加息、地产下行、消费疲软', lesson: '宏观环境对估值影响巨大' },
      ].map((item, i) => (
        <div key={i} style={{
          padding: '16px',
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '10px',
          borderLeft: '3px solid #E74C3C',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#E74C3C' }}>{item.year}</span>
            <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>{item.title}</span>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 8px' }}>{item.desc}</p>
          <p style={{ fontSize: '12px', color: '#2ECC71', lineHeight: 1.6, margin: 0 }}>💡 {item.lesson}</p>
        </div>
      ))}
    </div>
  )

  const render2026Content = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{
        padding: '20px',
        background: 'rgba(243, 156, 18, 0.08)',
        border: '1px solid rgba(243, 156, 18, 0.2)',
        borderRadius: '12px',
      }}>
        <h3 style={{ fontSize: '16px', color: '#F39C12', margin: '0 0 12px' }}>📉 2026: 价值投资很难受</h3>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
          2026年，价值投资面临前所未有的挑战。高估值、低增长、市场分化，
          坚守价值投资理念需要极大的定力和耐心。
        </p>
      </div>

      {/* PPT管理区域 - 仅管理员可见 */}
      {isAdmin && (
        <div style={{
          padding: '16px',
          background: 'rgba(155, 89, 182, 0.08)',
          border: '1px solid rgba(155, 89, 182, 0.2)',
          borderRadius: '12px',
        }}>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#9B59B6', marginBottom: '12px' }}>
            🔐 管理员：PPT文件管理
          </div>
          
          <div style={{ marginBottom: '12px' }}>
            <input
              type="file"
              ref={fileInputRef}
              accept=".ppt,.pptx,.pdf,.jpg,.jpeg,.png"
              multiple
              onChange={handleFileUpload}
              style={{ display: 'none' }}
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              style={{
                padding: '10px 20px',
                background: uploading ? 'rgba(155, 89, 182, 0.3)' : '#9B59B6',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '13px',
                cursor: uploading ? 'not-allowed' : 'pointer',
              }}
            >
              {uploading ? '上传中...' : '📤 上传PPT文件'}
            </button>
          </div>

          {pptFiles.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '12px', color: 'var(--text-dim)' }}>已上传文件：</div>
              {pptFiles.map((file, index) => (
                <div key={file.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '6px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '12px', color: '#9B59B6' }}>#{index + 1}</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{file.name}</span>
                  </div>
                  <button
                    onClick={() => handleDeleteFile(file.id)}
                    style={{
                      padding: '4px 10px',
                      background: 'rgba(231, 76, 60, 0.2)',
                      border: 'none',
                      borderRadius: '4px',
                      color: '#E74C3C',
                      fontSize: '11px',
                      cursor: 'pointer',
                    }}
                  >
                    删除
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* PPT浏览区域 */}
      {pptFiles.length > 0 ? (
        <div
          ref={pptViewerRef}
          style={{
            background: '#000',
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* PPT显示区域 */}
          <div style={{
            aspectRatio: '16/9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#1a1a2e',
            position: 'relative',
          }}>
            <img
              src={pptFiles[currentSlide]?.url}
              alt={`PPT第${currentSlide + 1}页`}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
              }}
            />
            
            {/* 页码显示 */}
            <div style={{
              position: 'absolute',
              bottom: '10px',
              right: '15px',
              padding: '4px 10px',
              background: 'rgba(0,0,0,0.6)',
              borderRadius: '4px',
              fontSize: '12px',
              color: '#fff',
            }}>
              {currentSlide + 1} / {pptFiles.length}
            </div>
          </div>

          {/* 控制栏 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            padding: '15px',
            background: 'rgba(255,255,255,0.05)',
          }}>
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              style={{
                padding: '8px 16px',
                background: currentSlide === 0 ? 'rgba(255,255,255,0.1)' : 'rgba(74, 144, 217, 0.3)',
                border: 'none',
                borderRadius: '6px',
                color: currentSlide === 0 ? 'var(--text-dim)' : '#4A90D9',
                fontSize: '13px',
                cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
              }}
            >
              ← 上一页
            </button>

            <div style={{
              display: 'flex',
              gap: '6px',
              alignItems: 'center',
            }}>
              {pptFiles.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    border: 'none',
                    background: idx === currentSlide ? '#4A90D9' : 'rgba(255,255,255,0.3)',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === pptFiles.length - 1}
              style={{
                padding: '8px 16px',
                background: currentSlide === pptFiles.length - 1 ? 'rgba(255,255,255,0.1)' : 'rgba(74, 144, 217, 0.3)',
                border: 'none',
                borderRadius: '6px',
                color: currentSlide === pptFiles.length - 1 ? 'var(--text-dim)' : '#4A90D9',
                fontSize: '13px',
                cursor: currentSlide === pptFiles.length - 1 ? 'not-allowed' : 'pointer',
              }}
            >
              下一页 →
            </button>

            <button
              onClick={toggleFullscreen}
              style={{
                padding: '8px 16px',
                background: 'rgba(46, 204, 113, 0.2)',
                border: 'none',
                borderRadius: '6px',
                color: '#2ECC71',
                fontSize: '13px',
                cursor: 'pointer',
                marginLeft: '10px',
              }}
            >
              {isFullscreen ? '⛶ 退出全屏' : '⛶ 全屏'}
            </button>
          </div>
        </div>
      ) : (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '12px',
          border: '1px dashed rgba(255,255,255,0.1)',
        }}>
          <p style={{ fontSize: '14px', color: 'var(--text-dim)', margin: 0 }}>
            📊 PPT内容即将上传，敬请期待
          </p>
          {isAdmin && (
            <p style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '10px' }}>
              管理员请点击上方"上传PPT文件"按钮添加内容
            </p>
          )}
        </div>
      )}

      {/* 2026年市场特点 */}
      <div style={{
        padding: '16px',
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '10px',
      }}>
        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
          2026年市场特点
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[
            '高估值：核心资产估值仍处于历史高位',
            '低增长：经济增速放缓，企业盈利承压',
            '分化严重：AI等热门板块与传统行业冰火两重天',
            '利率环境：全球货币政策分化，汇率波动加大',
            '地缘风险：贸易摩擦、供应链重构影响深远',
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              fontSize: '12px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}>
              <span style={{ color: '#F39C12' }}>•</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="sub-page">
      <div className="page-header">
        <button className="page-back" onClick={() => navigate('/sheng')}>
          <span>←</span> 返回复盘篇
        </button>
        <div className="page-badge" style={{ background: 'linear-gradient(145deg, #9b59b6, #8e44ad)' }}>
          📜
        </div>
        <h1>以史为鉴</h1>
        <p>历史不会重复，但会押韵</p>
      </div>

      {/* Tab导航 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          display: 'flex',
          gap: '10px',
          overflowX: 'auto',
          paddingBottom: '5px',
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id)
                setCurrentSlide(0)
              }}
              style={{
                padding: '12px 20px',
                background: activeTab === tab.id ? 'rgba(155, 89, 182, 0.2)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${activeTab === tab.id ? 'rgba(155, 89, 182, 0.4)' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '10px',
                color: activeTab === tab.id ? '#9B59B6' : 'var(--text-secondary)',
                fontSize: '14px',
                fontWeight: activeTab === tab.id ? 600 : 400,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{ marginRight: '6px' }}>{tab.icon}</span>
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* 内容区域 */}
      <div style={{ padding: '0 20px 40px' }}>
        {activeTab === 'us50' && us50Content}
        {activeTab === 'a30' && a30Content}
        {activeTab === '2026' && render2026Content()}
      </div>
    </div>
  )
}

export default History
