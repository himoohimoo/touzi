import { useNavigate } from 'react-router-dom'

const modules = [
  {
    title: '交易记录',
    subtitle: '好记性不如烂笔头',
    icon: '📒',
    description: '记录每笔交易的买入理由、卖出原因、持仓时间和盈亏情况，建立完整的交易档案。',
  },
  {
    title: '归因分析',
    subtitle: '找到盈亏的真正原因',
    icon: '🔍',
    description: '区分运气和能力，分析盈利是因为体系正确还是偶然因素，亏损是因为判断失误还是黑天鹅事件。',
  },
  {
    title: '策略迭代',
    subtitle: '持续优化你的投资系统',
    icon: '🔄',
    description: '基于复盘结果，调整资产配置、优化买卖规则、完善风控方案，让投资体系不断进化。',
  },
  {
    title: '情绪管理',
    subtitle: '战胜最大的敌人——自己',
    icon: '🧘',
    description: '记录交易时的情绪状态，识别贪婪和恐惧的信号，建立情绪预警机制，保持理性决策。',
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
