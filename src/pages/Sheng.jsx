import { useNavigate } from 'react-router-dom'

const modules = [
  {
    title: '以史为鉴',
    subtitle: '历史不会重复，但会押韵',
    icon: '📜',
    description: '回顾A股30年重大牛熊周期，理解市场规律，从历史中寻找投资的智慧。',
  },
  {
    title: '以人为鉴',
    subtitle: '站在巨人的肩膀上',
    icon: '👥',
    description: '学习巴菲特、段永平等投资大师的成功经验，汲取他们的投资智慧。',
  },
  {
    title: '投资的坑',
    subtitle: '避开前人踩过的雷',
    icon: '⚠️',
    description: '总结常见的投资陷阱和错误，建立避坑指南，少交学费。',
  },
  {
    title: '经典股票分析',
    subtitle: '解剖牛股的成功基因',
    icon: '📊',
    description: '深度分析茅台、腾讯等经典牛股的投资逻辑，学习如何识别优质企业。',
  },
  {
    title: '经典财报分析',
    subtitle: '透过数字看本质',
    icon: '📈',
    description: '解读优秀企业的财务报表，学习从财报中发现投资机会和风险。',
  },
]

function Sheng() {
  const navigate = useNavigate()

  return (
    <div className="sub-page">
      <div className="page-header">
        <button className="page-back" onClick={() => navigate('/')}>
          <span>←</span> 返回首页
        </button>
        <div className="page-badge" style={{ background: 'linear-gradient(145deg, var(--sheng), var(--sheng-dark))' }}>
          省
        </div>
        <h1>复盘篇</h1>
        <p>回顾交易，分析得失，持续改进</p>
      </div>

      <div className="page-intro">
        <p>
          曾子曰："吾日三省吾身。"投资同样需要复盘。
          没有复盘的投资就像闭着眼睛开车，永远不知道自己在哪里、要去哪里。
          通过系统化的复盘，你可以从每一次交易中学习，
          把经验转化为能力，把教训转化为智慧。
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

export default Sheng
