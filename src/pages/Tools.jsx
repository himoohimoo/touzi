import { useNavigate } from 'react-router-dom'

function Tools() {
  const navigate = useNavigate()

  const modules = [
    {
      title: '抄作业',
      subtitle: '站在巨人肩膀上',
      icon: '📝',
      description: '参考优秀投资者的持仓和操作，快速建立自己的股票池。',
      color: '#4A90D9',
      status: 'coming',
    },
    {
      title: '公司基本面分析',
      subtitle: '看透公司的本质',
      icon: '🔬',
      description: '从商业模式、护城河、管理层、行业格局等维度深入分析公司。',
      color: '#2ECC71',
      status: 'coming',
    },
    {
      title: '财报分析',
      subtitle: '数字背后的真相',
      icon: '📊',
      description: '解读资产负债表、利润表、现金流量表，发现财务健康信号。',
      color: '#E67E22',
      status: 'coming',
    },
  ]

  return (
    <div className="sub-page">
      <div className="page-header">
        <button className="page-back" onClick={() => navigate('/')}>
          <span>←</span> 返回首页
        </button>
        <div className="page-badge" style={{ background: 'linear-gradient(145deg, var(--qi), var(--qi-dark))' }}>
          🛠️
        </div>
        <h1>器</h1>
        <p>工欲善其事，必先利其器</p>
      </div>

      <div className="page-intro">
        <p>
          投资工具箱，提供实用的分析工具帮助你做出更明智的投资决策。
          从抄作业快速入门，到基本面分析、财报解读，逐步建立独立研究能力。
        </p>
      </div>

      <div className="modules-grid">
        {modules.map((mod, idx) => (
          <div key={idx} className="module-card" style={{ cursor: 'default' }}>
            <span className="module-icon">{mod.icon}</span>
            <h3>{mod.title}</h3>
            <p className="module-subtitle">{mod.subtitle}</p>
            <p className="module-desc">{mod.description}</p>
            <span className="module-btn disabled">
              即将上线
            </span>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 20px 40px' }}>
        <div style={{
          background: 'rgba(243, 156, 18, 0.08)',
          border: '1px solid rgba(243, 156, 18, 0.15)',
          borderRadius: '16px',
          padding: '20px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '14px', color: 'var(--text-primary)', margin: '0 0 8px', fontWeight: 500 }}>
            🚧 工具持续开发中
          </p>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.7 }}>
            投资工具箱正在迭代开发中，将逐步上线抄作业、基本面分析、财报分析等功能。<br/>
            敬请期待！
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tools
