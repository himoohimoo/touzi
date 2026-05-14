import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// 投资建议类型定义（与ZhiTest.jsx保持一致）
const INVESTMENT_TYPES = {
  deposit: {
    name: '存款型',
    icon: '🏦',
    color: '#888888',
    desc: '建议以存款/货币基金为主',
    detail: '你的风险偏好较低，对亏损非常敏感。建议以银行存款、货币基金、国债等保本产品为主，追求跑赢通胀即可。投资前建议先学习基础知识，从小额开始尝试。',
    suitable: ['银行存款', '货币基金', '国债', '保本理财'],
    unsuitable: ['股票', '基金定投', '期货', '加密货币'],
    advice: '对于存款型投资者，最重要的是保本。建议将资金主要配置于银行存款、货币基金、国债等低风险产品。在确保本金安全的前提下，追求跑赢通胀的收益。',
  },
  value: {
    name: '价值投资型',
    icon: '📊',
    color: '#2ECC71',
    desc: '适合长期价值投资',
    detail: '你有较好的耐心和风险意识，适合做价值投资。建议选择优质蓝筹股、宽基指数基金，长期持有享受复利。关注公司基本面，忽略短期波动。',
    suitable: ['蓝筹股', '指数基金', 'ETF定投', '可转债'],
    unsuitable: ['短线交易', '追热点', '杠杆操作'],
    advice: '价值投资的核心是"好公司+好价格+长期持有"。建议选择业绩稳定、估值合理的优质公司，或投资宽基指数基金。保持耐心，让时间成为你的朋友。',
  },
  trend: {
    name: '趋势投资型',
    icon: '📈',
    color: '#4A90D9',
    desc: '适合趋势跟踪策略',
    detail: '你善于把握市场节奏，适合做趋势投资。建议学习技术分析，跟随市场趋势操作。设置好止损止盈点，严格执行交易纪律。',
    suitable: ['趋势跟踪', '技术指标', '波段操作', '行业ETF'],
    unsuitable: ['长期套牢', '逆势操作', '频繁换股'],
    advice: '趋势投资的关键是"顺势而为"。建议学习技术分析，识别趋势方向。设置明确的止损止盈点，严格执行交易纪律。不要逆势操作，趋势不明时观望。',
  },
  growth: {
    name: '成长投资型',
    icon: '🚀',
    color: '#9B59B6',
    desc: '适合成长股的挖掘',
    detail: '你愿意承担风险追求高回报，适合做成长投资。关注高成长行业（科技、新能源、医药等），挖掘有潜力的公司。注意分散投资，控制仓位。',
    suitable: ['成长股', '科技股', '新兴产业', '小盘基金'],
    unsuitable: ['全仓单票', '追高买入', '忽视估值'],
    advice: '成长投资需要平衡风险与收益。建议选择有核心竞争力、行业前景好的成长型公司。注意估值合理性，避免追高。分散投资，单只股票仓位不宜过重。',
  },
  short: {
    name: '短线交易型',
    icon: '⚡',
    color: '#E74C3C',
    desc: '适合短线/超短线交易',
    detail: '你追求快速收益，适合做短线交易。建议学习技术分析和盘口语言，严格执行止损。注意控制仓位，不要频繁交易导致手续费侵蚀利润。',
    suitable: ['短线交易', '打板', 'T+0', '期权'],
    unsuitable: ['长期持有', '价值投资', '重仓死扛'],
    advice: '短线交易对技术和心态要求极高。建议先模拟盘练习，形成稳定的盈利模式后再实盘。严格控制风险，单笔亏损不超过总资金的2%。',
  },
}

function ZhiResult() {
  const navigate = useNavigate()
  const { user, saveTestResult, showAuth, setShowAuth } = useAuth()
  const [result, setResult] = useState(null)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const saved = sessionStorage.getItem('zhiTestResult')
    if (saved) {
      const parsed = JSON.parse(saved)
      setResult(parsed)
      // 如果已登录，自动保存
      if (user) {
        saveTestResult('personality', parsed)
        setSaved(true)
      }
    }
  }, [])

  // 登录后自动保存
  useEffect(() => {
    if (user && result && !saved) {
      saveTestResult('personality', result)
      setSaved(true)
    }
  }, [user, result, saved])

  const handleSave = () => {
    if (!user) {
      setShowAuth('login')
      return
    }
    if (result && !saved) {
      saveTestResult('personality', result)
      setSaved(true)
    }
  }

  if (!result) {
    return (
      <div className="zhi-result-page">
        <div className="result-header">
          <button className="page-back" onClick={() => navigate('/zhi')}>
            <span>←</span> 返回认知篇
          </button>
          <h1>暂无测试结果</h1>
          <p>请先完成测试</p>
        </div>
      </div>
    )
  }

  const type = INVESTMENT_TYPES[result.type.key]
  const scores = result.scores

  // 维度标签
  const dimensions = [
    { key: 'R', name: '风险偏好', score: scores.R },
    { key: 'T', name: '时间偏好', score: scores.T },
    { key: 'D', name: '决策风格', score: scores.D },
    { key: 'Ret', name: '收益期望', score: scores.Ret },
  ]

  return (
    <div className="zhi-result-page">
      <button className="page-back" onClick={() => navigate('/zhi')}>
        <span>←</span> 返回认知篇
      </button>

      <div className="result-header">
        <div className="result-type-icon" style={{ background: type.color }}>
          {type.icon}
        </div>
        <h1>你的投资类型</h1>
        <h2 className="result-type-name" style={{ color: type.color }}>
          {type.name}
        </h2>
        <p className="result-type-desc">{type.desc}</p>
      </div>

      {/* 四维雷达图/条形图 */}
      <div className="result-dimensions">
        <h3>四维特征分析</h3>
        <div className="dimension-bars">
          {dimensions.map(d => (
            <div key={d.key} className="dimension-item">
              <div className="dimension-label">
                <span>{d.name}</span>
                <span>{Math.round(d.score)}%</span>
              </div>
              <div className="dimension-bar">
                <div 
                  className="dimension-fill" 
                  style={{ 
                    width: `${d.score}%`,
                    background: d.score > 60 ? '#2ECC71' : d.score > 40 ? '#4A90D9' : '#E74C3C'
                  }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 详细解读 */}
      <div className="result-detail-card">
        <h3>详细解读</h3>
        <p>{type.detail}</p>
      </div>

      {/* 适合/不适合 */}
      <div className="result-suitability">
        <div className="suitable-section">
          <h4>✅ 适合你的投资方式</h4>
          <div className="tag-list">
            {type.suitable.map((item, idx) => (
              <span key={idx} className="tag tag-suitable">{item}</span>
            ))}
          </div>
        </div>
        <div className="unsuitable-section">
          <h4>❌ 需要避免的投资方式</h4>
          <div className="tag-list">
            {type.unsuitable.map((item, idx) => (
              <span key={idx} className="tag tag-unsuitable">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 投资建议 */}
      <div className="result-advice">
        <h3>投资建议</h3>
        <p>{type.advice}</p>
      </div>

      {/* 保存提示 */}
      {!user && (
        <div style={{
          background: 'rgba(243, 156, 18, 0.08)',
          border: '1px solid rgba(243, 156, 18, 0.2)',
          borderRadius: '12px',
          padding: '16px',
          margin: '0 16px 16px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '14px', color: '#f39c12', fontWeight: 500, marginBottom: '8px' }}>
            💡 登录后即可保存测试结果
          </p>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0 }}>
            保存后可在"认知篇 → 我的画像"中随时查看
          </p>
        </div>
      )}

      {/* 操作按钮 */}
      <div className="result-actions">
        {!saved && (
          <button className="btn btn-primary" onClick={handleSave}>
            {user ? '保存结果' : '登录并保存'}
          </button>
        )}
        {saved && (
          <div style={{
            background: 'rgba(46, 204, 113, 0.08)',
            border: '1px solid rgba(46, 204, 113, 0.2)',
            borderRadius: '8px',
            padding: '10px 20px',
            fontSize: '14px',
            color: 'var(--dao)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            ✅ 已保存到我的画像
          </div>
        )}
        <button className="btn btn-secondary" onClick={() => navigate('/zhi/test/self')}>
          重新测试
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/zhi')}>
          返回认知篇
        </button>
      </div>
    </div>
  )
}

export default ZhiResult
