import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const modules = [
  {
    title: '账户搭建',
    subtitle: '从零开始建立投资账户',
    icon: '🏦',
    description: '选择券商、开立账户、了解资金转入转出流程，做好投资前的准备工作。',
  },
  {
    title: '如何选股',
    subtitle: '找到好公司是投资的第一步',
    icon: '🔍',
    description: '从行业分析、商业模式、财务指标、估值水平等多维度筛选优质企业。',
  },
  {
    title: '如何持股',
    subtitle: '耐心持有，让时间成为朋友',
    icon: '📈',
    description: '建立正确的持股心态，学会应对波动，避免频繁交易，享受复利增长。',
  },
  {
    title: '如何卖股',
    subtitle: '会买的是徒弟，会卖的是师傅',
    icon: '💰',
    description: '掌握止盈止损策略，识别卖出信号，在合适时机兑现收益或控制亏损。',
  },
  {
    title: '如何对待波动',
    subtitle: '市场先生的情绪起伏',
    icon: '🌊',
    description: '理解市场波动的本质，建立应对剧烈波动的心理准备和操作策略。',
  },
  {
    title: '实践N问',
    subtitle: '投资路上的常见问题',
    icon: '❓',
    description: '解答投资实践中遇到的典型问题，从他人经验中汲取智慧。',
  },
]

function Xing() {
  const navigate = useNavigate()
  const [showAccountGuide, setShowAccountGuide] = useState(false)

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
          <div key={idx} className="module-card" onClick={() => mod.title === '账户搭建' && setShowAccountGuide(true)} style={{ cursor: mod.title === '账户搭建' ? 'pointer' : 'default' }}>
            <span className="module-icon">{mod.icon}</span>
            <h3>{mod.title}</h3>
            <p className="module-subtitle">{mod.subtitle}</p>
            <p className="module-desc">{mod.description}</p>
            <span className={mod.title === '账户搭建' ? 'module-btn' : 'module-btn disabled'}>
              {mod.title === '账户搭建' ? '查看详情' : '即将上线'}
            </span>
          </div>
        ))}
      </div>

      {/* 账户搭建弹窗 */}
      {showAccountGuide && (
        <div className="vision-overlay" onClick={() => setShowAccountGuide(false)}>
          <div className="vision-card account-guide-card" onClick={e => e.stopPropagation()}>
            <h2>🏦 账户搭建指南</h2>

            <div className="guide-section">
              <h3>📋 开户建议</h3>
              <div className="broker-list">
                <div className="broker-item">
                  <strong>传统券商</strong>
                  <ul>
                    <li><b>中信证券</b>：国内最大券商，网点多，服务全面，适合需要线下服务的投资者</li>
                    <li><b>招商证券</b>：APP体验好，研究报告质量高，适合注重投研服务的投资者</li>
                  </ul>
                </div>
                <div className="broker-item">
                  <strong>互联网券商</strong>
                  <ul>
                    <li><b>东方财富</b>：资讯丰富，社区活跃，适合喜欢交流的投资者</li>
                    <li><b>同花顺</b>：软件功能强大，数据全面，适合技术分析爱好者</li>
                    <li><b>华泰证券（涨乐财富通）</b>：APP体验优秀，佣金较低</li>
                  </ul>
                </div>
                <p className="guide-tip">💡 建议：网上开户非常方便，下载APP后按指引操作，一般10分钟内即可完成</p>
              </div>
            </div>

            <div className="guide-section">
              <h3>💳 资金转入</h3>
              <div className="guide-content">
                <p>只需准备一张银行卡（建议大型银行：工行、建行、招行等），在证券公司APP上操作即可：</p>
                <ol>
                  <li>打开券商APP，进入"银证转账"或"资金管理"</li>
                  <li>选择"银行转证券"，输入金额</li>
                  <li>确认转账，资金<strong>秒到账</strong></li>
                </ol>
                <p className="guide-tip">💡 注意：交易时间（工作日9:00-16:00）内转账最方便，非交易时间可能需要预约</p>
              </div>
            </div>

            <div className="guide-section">
              <h3>🔒 权限开通要求</h3>
              <div className="permission-list">
                <div className="permission-item">
                  <strong>北交所（北证）</strong>
                  <ul>
                    <li>资金要求：50万资产（20个交易日日均）</li>
                    <li>经验要求：2年以上证券交易经验</li>
                    <li>风险等级：积极型/激进型</li>
                  </ul>
                </div>
                <div className="permission-item">
                  <strong>港股通</strong>
                  <ul>
                    <li>资金要求：50万资产（20个交易日日均）</li>
                    <li>风险等级：积极型/激进型</li>
                    <li>知识测评：需通过港股通知识测试</li>
                  </ul>
                </div>
                <div className="permission-item">
                  <strong>科创板</strong>
                  <ul>
                    <li>资金要求：50万资产（20个交易日日均）</li>
                    <li>经验要求：2年以上证券交易经验</li>
                  </ul>
                </div>
                <div className="permission-item">
                  <strong>创业板</strong>
                  <ul>
                    <li>资金要求：10万资产（20个交易日日均）</li>
                    <li>经验要求：2年以上证券交易经验</li>
                  </ul>
                </div>
              </div>
              <div className="guide-warning">
                <strong>⚠️ 风险提示</strong>
                <p>政府在保护投资者！这些门槛是为了确保您有足够的风险承受能力。北交所、港股通等板块波动较大，请务必了解风险后再开通。</p>
              </div>
            </div>

            <div className="guide-section">
              <h3>🇺🇸 关于美股</h3>
              <div className="guide-content">
                <p><strong>美股开户需要离岸账户</strong>，一般流程：</p>
                <ol>
                  <li>前往香港开设银行账户（如汇丰银行、中银香港）</li>
                  <li>申请国际券商账户（如IBKR盈透证券）</li>
                  <li>完成W-8BEN税务表格</li>
                  <li>入金并开始交易</li>
                </ol>
                <div className="guide-notice">
                  <strong>📢 重要提醒</strong>
                  <p>国家不鼓励境内投资者投资美股。外汇管制严格，资金出境存在合规风险。</p>
                  <p><strong>建议：先玩转A股/港股，积累足够经验后再考虑海外市场。</strong></p>
                </div>
              </div>
            </div>

            <button className="vision-close" onClick={() => setShowAccountGuide(false)}>关闭</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Xing
