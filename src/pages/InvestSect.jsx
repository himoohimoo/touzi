import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// 投资门派数据
const SECTS = [
  {
    key: 'value',
    name: '价值投资派',
    icon: '📊',
    color: '#2ECC71',
    founder: '本杰明·格雷厄姆',
    masters: ['沃伦·巴菲特', '查理·芒格', '彼得·林奇', '约翰·博格'],
    coreIdea: '以低于内在价值的价格买入优质资产，长期持有，赚取企业成长的钱。',
    method: '深入研究公司基本面（财报、护城河、管理层），估算内在价值，在安全边际内买入，忽略短期波动。',
    holdPeriod: '3-10年+',
    riskLevel: '中低',
    suitableFor: '有耐心、愿意深入研究、追求稳健回报的投资者',
    keywords: ['基本面', '护城河', '安全边际', '长期持有', '复利'],
  },
  {
    key: 'growth',
    name: '成长投资派',
    icon: '🚀',
    color: '#9B59B6',
    founder: '菲利普·费雪',
    masters: ['托马斯·罗·普莱斯', '凯瑟琳·伍德', '蔡志勇'],
    coreIdea: '寻找收入和利润高速增长的公司，即使当前估值较高，只要成长性够强就值得持有。',
    method: '关注行业趋势、营收增长率、利润率扩张空间，选择有核心竞争力的成长型企业。',
    holdPeriod: '1-5年',
    riskLevel: '中高',
    suitableFor: '愿意承担较高风险、看好新兴产业、追求超额回报的投资者',
    keywords: ['高增长', '行业趋势', '营收增速', '核心竞争力', '估值'],
  },
  {
    key: 'trend',
    name: '趋势交易派',
    icon: '📈',
    color: '#4A90D9',
    founder: '杰西·利弗莫尔',
    masters: ['理查德·丹尼斯', '斯坦利·克罗', '大卫·瑞安'],
    coreIdea: '顺势而为，在趋势形成时跟进，趋势结束时退出。不预测市场，只跟随市场。',
    method: '运用技术分析（均线、MACD、成交量等），识别趋势方向，设置止损止盈点，严格执行交易纪律。',
    holdPeriod: '几天到数月',
    riskLevel: '中',
    suitableFor: '对技术分析感兴趣、能严格执行纪律、有时间盯盘的投资者',
    keywords: ['技术分析', '趋势线', '止损止盈', '量价关系', '交易纪律'],
  },
  {
    key: 'quant',
    name: '量化投资派',
    icon: '🤖',
    color: '#E67E22',
    founder: '爱德华·索普',
    masters: ['詹姆斯·西蒙斯', '大卫·肖', '肯·格里芬', '李笑来（量化基金）'],
    coreIdea: '用数学模型和计算机程序替代人工判断，通过统计分析发现市场规律并执行交易。',
    method: '建立数学模型，回测历史数据，设定交易信号和风控参数，程序化自动执行。',
    holdPeriod: '毫秒到数月（因策略而异）',
    riskLevel: '高',
    suitableFor: '有数学/编程背景、追求绝对收益、能承受较大回撤的专业投资者',
    keywords: ['数学模型', '回测', '算法交易', '统计套利', '程序化'],
  },
  {
    key: 'short',
    name: '短线投机派',
    icon: '⚡',
    color: '#E74C3C',
    founder: '无特定创始人（市场自然演化）',
    masters: ['徐翔（已入刑）', '炒股养家', '赵老哥', '作手新一'],
    coreIdea: '快进快出，捕捉短期价格波动赚取差价。不关心公司基本面，只关注市场情绪和资金流向。',
    method: '打板（涨停板战法）、龙头战法、情绪周期判断、资金面分析，高频交易。',
    holdPeriod: '几分钟到几天',
    riskLevel: '极高',
    suitableFor: '全职交易、心理素质极强、能承受大起大落、有丰富市场经验的投资者',
    keywords: ['打板', '龙头战法', '情绪周期', '资金流向', '快进快出'],
  },
  {
    key: 'index',
    name: '指数投资派',
    icon: '🏦',
    color: '#1ABC9C',
    founder: '约翰·博格（先锋领航创始人）',
    masters: [' Burton Malkiel', '约翰·博格', '天弘基金团队'],
    coreIdea: '既然大部分主动基金跑不赢指数，不如直接买指数基金，低成本、分散化、长期持有。',
    method: '选择宽基指数（沪深300、标普500等）或行业指数基金，定期定额投入，长期持有。',
    holdPeriod: '5年以上',
    riskLevel: '中低',
    suitableFor: '没有时间研究个股、追求稳健回报、相信长期投资的普通投资者',
    keywords: ['指数基金', 'ETF', '定投', '低成本', '分散化'],
  },
]

// 灵魂三问
const SOUL_QUESTIONS = [
  {
    id: 1,
    question: '你想赚什么钱？',
    options: [
      { text: '企业成长的钱——公司越做越好，我的股份越来越值钱', scores: { value: 3, growth: 2, trend: 0, quant: 0, short: 0, index: 2 } },
      { text: '市场波动的钱——低买高卖，赚取价格差', scores: { value: 0, growth: 0, trend: 3, quant: 1, short: 3, index: 0 } },
      { text: '经济整体增长的钱——跟着大盘走，稳稳增值', scores: { value: 1, growth: 1, trend: 0, quant: 0, short: 0, index: 3 } },
      { text: '别人犯错的钱——利用市场非理性获利', scores: { value: 2, growth: 1, trend: 1, quant: 2, short: 1, index: 0 } },
    ],
  },
  {
    id: 2,
    question: '你更关注什么？',
    options: [
      { text: '企业基本面——收入、利润、护城河、管理层', scores: { value: 3, growth: 3, trend: 0, quant: 1, short: 0, index: 1 } },
      { text: 'K线图和技术指标——均线、MACD、成交量', scores: { value: 0, growth: 0, trend: 3, quant: 2, short: 3, index: 0 } },
      { text: '市场热点和资金流向——哪个板块火、主力在哪', scores: { value: 0, growth: 1, trend: 2, quant: 1, short: 3, index: 0 } },
      { text: '宏观数据和行业趋势——利率、政策、产业周期', scores: { value: 1, growth: 2, trend: 1, quant: 2, short: 0, index: 2 } },
    ],
  },
  {
    id: 3,
    question: '你愿意花多少时间在投资上？',
    options: [
      { text: '每天几小时——研究、盯盘、交易是我的日常', scores: { value: 1, growth: 1, trend: 2, quant: 2, short: 3, index: 0 } },
      { text: '每周几小时——周末研究一下，平时偶尔看看', scores: { value: 2, growth: 2, trend: 2, quant: 1, short: 1, index: 2 } },
      { text: '每月花一点时间——定投就行，不用管太多', scores: { value: 1, growth: 0, trend: 0, quant: 0, short: 0, index: 3 } },
      { text: '愿意深入学习——读财报、学模型、建系统', scores: { value: 3, growth: 2, trend: 1, quant: 3, short: 1, index: 1 } },
    ],
  },
]

function InvestSect() {
  const navigate = useNavigate()
  const [showQuiz, setShowQuiz] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)
  const [quizResult, setQuizResult] = useState(null)

  const handleQuizStart = () => {
    setShowQuiz(true)
    setCurrentQ(0)
    setAnswers([])
    setSelectedOption(null)
    setQuizResult(null)
  }

  const handleAnswer = (optionIndex) => {
    const q = SOUL_QUESTIONS[currentQ]
    const newAnswers = [...answers, q.options[optionIndex]]
    setAnswers(newAnswers)
    setSelectedOption(optionIndex)

    setTimeout(() => {
      if (currentQ < SOUL_QUESTIONS.length - 1) {
        setCurrentQ(currentQ + 1)
        setSelectedOption(null)
      } else {
        // 计算结果
        const totals = { value: 0, growth: 0, trend: 0, quant: 0, short: 0, index: 0 }
        newAnswers.forEach(a => {
          Object.entries(a.scores).forEach(([key, val]) => {
            totals[key] += val
          })
        })
        const maxKey = Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0]
        setQuizResult({ totals, bestMatch: maxKey })
      }
    }, 300)
  }

  const matchedSect = quizResult ? SECTS.find(s => s.key === quizResult.bestMatch) : null

  return (
    <div className="sub-page sect-page">
      <button className="page-back" onClick={() => navigate('/heng')}>
        <span>←</span> 返回体系篇
      </button>

      <div className="sect-header">
        <div className="page-badge" style={{ background: 'linear-gradient(145deg, #E67E22, #E74C3C)' }}>
          ⚔️
        </div>
        <h1>投资门派</h1>
        <p>了解各派精髓，找到最适合你的投资风格</p>
      </div>

      {/* 灵魂三问入口 */}
      <div className="sect-quiz-intro" onClick={handleQuizStart}>
        <div className="sect-quiz-icon">🔮</div>
        <div className="sect-quiz-text">
          <h3>灵魂三问：你属于哪个门派？</h3>
          <p>回答3个问题，找到最适合你的投资风格</p>
        </div>
        <span className="sect-quiz-arrow">→</span>
      </div>

      {/* 灵魂三问弹窗 */}
      {showQuiz && !quizResult && (
        <div className="sect-quiz-modal">
          <div className="sect-quiz-card">
            <button className="sect-quiz-close" onClick={() => setShowQuiz(false)}>✕</button>
            <div className="sect-quiz-progress">
              <span>问题 {currentQ + 1} / {SOUL_QUESTIONS.length}</span>
            </div>
            <h2 className="sect-quiz-question">{SOUL_QUESTIONS[currentQ].question}</h2>
            <div className="sect-quiz-options">
              {SOUL_QUESTIONS[currentQ].options.map((opt, idx) => (
                <button
                  key={idx}
                  className={`sect-quiz-option ${selectedOption === idx ? 'selected' : ''}`}
                  onClick={() => handleAnswer(idx)}
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 测试结果 */}
      {quizResult && matchedSect && (
        <div className="sect-quiz-modal">
          <div className="sect-quiz-card sect-quiz-result">
            <div className="sect-result-badge" style={{ background: matchedSect.color }}>
              {matchedSect.icon}
            </div>
            <h2>你最适合：{matchedSect.name}</h2>
            <p className="sect-result-core">{matchedSect.coreIdea}</p>
            <div className="sect-result-scores">
              {SECTS.map(s => {
                const score = quizResult.totals[s.key]
                const maxScore = Math.max(...Object.values(quizResult.totals))
                const isMatch = s.key === quizResult.bestMatch
                return (
                  <div key={s.key} className={`sect-score-item ${isMatch ? 'matched' : ''}`}>
                    <span>{s.icon} {s.name}</span>
                    <div className="sect-score-bar">
                      <div className="sect-score-fill" style={{
                        width: `${(score / maxScore) * 100}%`,
                        background: isMatch ? s.color : 'rgba(255,255,255,0.15)',
                      }} />
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="sect-result-actions">
              <button className="btn btn-primary" onClick={handleQuizStart}>重新测试</button>
              <button className="btn btn-secondary" onClick={() => setShowQuiz(false)}>关闭</button>
            </div>
          </div>
        </div>
      )}

      {/* 门派列表 */}
      <div className="sect-list">
        <h2 className="sect-list-title">六大投资门派</h2>
        {SECTS.map((sect) => (
          <div key={sect.key} className="sect-card">
            <div className="sect-card-header">
              <span className="sect-card-icon" style={{ background: sect.color }}>{sect.icon}</span>
              <div className="sect-card-info">
                <h3 style={{ color: sect.color }}>{sect.name}</h3>
                <p className="sect-card-meta">
                  持有周期：{sect.holdPeriod} · 风险等级：{sect.riskLevel}
                </p>
              </div>
            </div>
            <div className="sect-card-body">
              <div className="sect-card-section">
                <h4>💡 核心理念</h4>
                <p>{sect.coreIdea}</p>
              </div>
              <div className="sect-card-section">
                <h4>📋 操作方法</h4>
                <p>{sect.method}</p>
              </div>
              <div className="sect-card-section">
                <h4>👤 代表人物</h4>
                <p>创始人：{sect.founder}</p>
                <p>代表人物：{sect.masters.join('、')}</p>
              </div>
              <div className="sect-card-section">
                <h4>🎯 适合人群</h4>
                <p>{sect.suitableFor}</p>
              </div>
              <div className="sect-card-tags">
                {sect.keywords.map((kw, idx) => (
                  <span key={idx} className="sect-tag" style={{ borderColor: sect.color, color: sect.color }}>{kw}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InvestSect
