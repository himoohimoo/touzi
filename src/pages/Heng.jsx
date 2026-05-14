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
    title: '资产配置',
    subtitle: '不把鸡蛋放在一个篮子里',
    icon: '🎯',
    description: '中美中产资产配置差异、45岁中产配置建议，科学分配你的资产。',
    path: '/heng/asset',
  },
  {
    title: '再平衡策略',
    subtitle: '让组合回归最优状态',
    icon: '⚖️',
    description: '定期检查资产配比，偏离目标时进行再平衡，低买高卖，纪律化操作。',
  },
  {
    title: '定投系统',
    subtitle: '用时间换空间',
    icon: '🔄',
    description: '设定定投计划，选择定投标的，确定定投频率和金额，让时间成为你的朋友。',
  },
  {
    title: '买卖纪律',
    subtitle: '知行合一的交易规则',
    icon: '📏',
    description: '建立买入清单和卖出规则，避免情绪化交易，用纪律战胜人性弱点。',
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
          随波逐流，最终迷失方向。一个好的投资体系应该包括：
          资产配置策略、买入卖出规则、风险管理方案和定期复盘机制。
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
