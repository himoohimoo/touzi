import { useNavigate } from 'react-router-dom'

const modules = [
  {
    title: '投资门派',
    subtitle: '找到适合你的投资风格',
    icon: '⚔️',
    description: '价值投资、趋势交易、量化投资……了解各派精髓和代表人物，找到最适合你的门派。',
    path: '/heng/sect',
  },
  {
    title: '价投股精髓',
    subtitle: '价值投资的核心理念',
    icon: '💎',
    description: '安全边际、能力圈、护城河、长期持有——掌握巴菲特价值投资的精髓要义。',
    path: '/heng/value',
  },
  {
    title: '成长股精髓',
    subtitle: '寻找未来的十倍股',
    icon: '🚀',
    description: '高ROE、净利润增长、行业空间、管理层质量——识别高成长企业的关键指标。',
    path: '/heng/growth',
  },
  {
    title: '仓位控制',
    subtitle: '风险控制的第一道防线',
    icon: '🎯',
    description: '单只股票仓位上限、行业集中度、现金储备比例——科学的仓位管理策略。',
    path: '/heng/position',
  },
  {
    title: '交易军规',
    subtitle: '铁的纪律，钢的执行力',
    icon: '📏',
    description: '买入前 checklist、止损止盈规则、禁止操作清单——用纪律战胜人性弱点。',
    path: '/heng/rules',
  },
  {
    title: '投资心法',
    subtitle: '修炼内心的平静',
    icon: '🧘',
    description: '独立思考、逆向思维、延迟满足、承认错误——投资大师的心理修炼之道。',
    path: '/heng/mindset',
  },
]

function Heng() {
  const navigate = useNavigate()

  return (
    <div className="sub-page">
      <div className="page-header">
        <button className="page-back" onClick={() => navigate('/')}>
          <span>←</span> 返回首页
        </button>
        <div className="page-badge" style={{ background: 'linear-gradient(145deg, var(--dao), var(--dao-dark))' }}>
          道
        </div>
        <h1>体系篇</h1>
        <p>建立投资体系，形成可复制、可持续的投资方法论</p>
      </div>

      <div className="page-intro">
        <p style={{ marginBottom: '12px', color: 'var(--dao)', fontWeight: 600 }}>
          💡 每个人都可以有自己的投资体系，没有最好的，只有最适合自己的。操作起来舒服，就是好的体系。
        </p>
        <p>
          投资体系是你的"护城河"。没有体系的投资就像没有地图的航行，
          随波逐流，最终迷失方向。
          <span style={{ color: 'var(--dao)', fontWeight: 700, display: 'block', marginTop: '12px' }}>
            我们重点聚焦价值投资和成长投资体系，短线炒作和量化不涉及，聚焦赚公司成长的钱。
          </span>
        </p>
      </div>

      <div className="modules-grid">
        {modules.map((mod, idx) => (
          <div
            key={idx}
            className="module-card"
            onClick={() => {
              if (mod.path) navigate(mod.path)
            }}
          >
            <span className="module-icon">{mod.icon}</span>
            <h3>{mod.title}</h3>
            <p className="module-subtitle">{mod.subtitle}</p>
            <p className="module-desc">{mod.description}</p>
            {mod.path ? (
              <span className="module-btn">查看详情 →</span>
            ) : (
              <span className="module-btn disabled">即将上线</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Heng
