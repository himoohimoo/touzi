import { useNavigate } from 'react-router-dom'

const modules = [
  {
    title: '账户搭建',
    subtitle: '从零开始建立投资账户',
    icon: '🏦',
    description: '选择券商、开立账户、了解资金转入转出流程，做好投资前的准备工作。',
  },
  {
    title: '第一笔交易',
    subtitle: '迈出投资第一步',
    icon: '🛒',
    description: '从买入第一只基金或股票开始，体验完整的交易流程：选股、下单、成交、持仓管理。',
  },
  {
    title: '工具使用',
    subtitle: '善用工具提升效率',
    icon: '🔧',
    description: '行情软件、财务数据平台、估值工具、定投提醒——掌握常用投资工具的使用方法。',
  },
  {
    title: '信息获取',
    subtitle: '建立信息输入渠道',
    icon: '📡',
    description: '财报、研报、新闻、公告——学会筛选有价值的信息，避免被噪音干扰。',
  },
]

function Xing() {
  const navigate = useNavigate()

  return (
    <div className="sub-page">
      <div className="page-header">
        <button className="page-back" onClick={() => navigate('/')}>
          <span>←</span> 返回首页
        </button>
        <div className="page-badge" style={{ background: 'linear-gradient(145deg, var(--xing), var(--xing-dark))' }}>
          行
        </div>
        <h1>实践篇</h1>
        <p>从开户到交易，掌握投资实操技能</p>
      </div>

      <div className="page-intro">
        <p>
          纸上得来终觉浅，绝知此事要躬行。投资是一门实践的艺术，
          再多的理论知识也需要通过实际操作来内化。
          从开立第一个账户开始，用小资金、多尝试、快积累的方式，
          逐步建立自己的投资实操能力。
        </p>
      </div>

      <div className="modules-grid">
        {modules.map((mod, idx) => (
          <div key={idx} className="module-card">
            <span className="module-icon">{mod.icon}</span>
            <h3>{mod.title}</h3>
            <p className="module-subtitle">{mod.subtitle}</p>
            <p className="module-desc">{mod.description}</p>
            <span className="module-btn disabled">即将上线</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Xing
