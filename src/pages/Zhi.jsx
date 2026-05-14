import { useNavigate } from 'react-router-dom'

const modules = [
  {
    id: 'self',
    title: '认知自己',
    subtitle: '寻找你的投资坐标',
    icon: '🪞',
    description: '通过心理测试与财务体检，找到"睡得着觉"的投资方式',
    questions: 15,
  },
  {
    id: 'market',
    title: '认知市场',
    subtitle: '看懂游戏的规则',
    icon: '📊',
    description: 'A股、港股、美股三大市场特征，宏观水位感知',
    questions: 0,
    hasQuiz: true,
  },
  {
    id: 'system',
    title: '认知投资体系',
    subtitle: '建立知识护城河',
    icon: '📚',
    description: '复利与时间、价值投资理念、大师谱系',
    questions: 0,
  },
  {
    id: 'rules',
    title: '认知交易规则',
    subtitle: '了解游戏规则',
    icon: '⚖️',
    description: '交易时间、涨跌停、T+1、费用结构等基础规则',
    questions: 0,
  },
  {
    id: 'participants',
    title: '认知市场参与者',
    subtitle: '了解你的对手',
    icon: '👥',
    description: '散户、机构、外资、游资——不同参与者的行为模式',
    questions: 0,
  },
]

function Zhi() {
  const navigate = useNavigate()

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
        {modules.map(mod => (
          <div
            key={mod.id}
            className="module-card"
            onClick={() => {
              if (mod.questions > 0) {
                navigate(`/zhi/test/${mod.id}`)
              } else if (mod.hasQuiz) {
                navigate('/zhi/market')
              }
            }}
          >
            <span className="module-icon">{mod.icon}</span>
            <h3>{mod.title}</h3>
            <p className="module-subtitle">{mod.subtitle}</p>
            <p className="module-desc">{mod.description}</p>
            {mod.questions > 0 ? (
              <span className="module-btn">开始测试（{mod.questions}题）→</span>
            ) : mod.hasQuiz ? (
              <span className="module-btn">趣味问答（12题）→</span>
            ) : (
              <span className="module-btn disabled">即将上线</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Zhi
