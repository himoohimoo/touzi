import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const quizQuestions = [
  {
    id: 1,
    category: '市场规模',
    question: '以下哪个股市的总市值最大？（截至2024年）',
    options: [
      { text: 'A. A股（上海+深圳）', isCorrect: false },
      { text: 'B. 美股（纳斯达克+纽交所）', isCorrect: true },
      { text: 'C. 港股', isCorrect: false },
      { text: 'D. 日股（东京交易所）', isCorrect: false },
    ],
    explanation: '美股是全球最大的股票市场，总市值超过50万亿美元，占全球股市总市值的约45%。其中纽交所（NYSE）和纳斯达克（NASDAQ）是全球最大的两个证券交易所。A股总市值约12万亿美元，排名全球第二。港股总市值约4万亿美元，排名全球第四（仅次于美股、A股、日股）。',
  },
  {
    id: 2,
    category: '上市公司',
    question: 'A股有多少家上市公司？（截至2024年底）',
    options: [
      { text: 'A. 约2000家', isCorrect: false },
      { text: 'B. 约3500家', isCorrect: false },
      { text: 'C. 约5300家', isCorrect: true },
      { text: 'D. 约8000家', isCorrect: false },
    ],
    explanation: '截至2024年底，A股（上交所+深交所+北交所）上市公司总数约5300家。其中上交所约2200家，深交所约2800家，北交所约260家。作为对比，美股上市公司约5800家（纽交所约2400家，纳斯达克约3400家），港股约2600家。虽然A股上市公司数量接近美股，但总市值差距较大，说明A股平均市值远低于美股。',
  },
  {
    id: 3,
    category: '交易制度',
    question: 'A股实行的是哪种交易制度？',
    options: [
      { text: 'A. T+0 当日回转交易', isCorrect: false },
      { text: 'B. T+1 次日交收', isCorrect: true },
      { text: 'C. T+2 两日后交收', isCorrect: false },
      { text: 'D. T+3 三日后交收', isCorrect: false },
    ],
    explanation: 'A股实行T+1交易制度，即今天买入的股票，明天才能卖出。这是1995年起实施的制度，目的是抑制过度投机。而美股和港股都实行T+0交易制度，当天买入可以当天卖出。不过需要注意，A股在2022年已将部分ETF纳入T+0交易范围，且资金实行T+1交收（2024年起部分试点T+0）。了解交易制度差异对制定交易策略非常重要。',
  },
  {
    id: 4,
    category: '涨跌幅限制',
    question: 'A股主板普通股票的每日涨跌幅限制是多少？',
    options: [
      { text: 'A. 无限制', isCorrect: false },
      { text: 'B. ±5%', isCorrect: false },
      { text: 'C. ±10%', isCorrect: true },
      { text: 'D. ±20%', isCorrect: false },
    ],
    explanation: 'A股主板实行±10%的涨跌幅限制（ST股票为±5%）。创业板和科创板实行±20%的涨跌幅限制，北交所也是±30%。而美股和港股没有每日涨跌幅限制，理论上一天可以涨跌任意幅度。比如2020年美股多次出现单日熔断（下跌超7%触发一级熔断，暂停交易15分钟）。没有涨跌幅限制意味着港股和美股可能一天之内暴涨或暴跌，风险和机会都更大。',
  },
  {
    id: 5,
    category: '散户占比',
    question: '哪个市场的散户（个人投资者）交易占比最高？',
    options: [
      { text: 'A. 美股', isCorrect: false },
      { text: 'B. 港股', isCorrect: false },
      { text: 'C. A股', isCorrect: true },
      { text: 'D. 三者差不多', isCorrect: false },
    ],
    explanation: 'A股是全球散户占比最高的主要股市之一。A股个人投资者交易量占比约60-70%（按交易额计算），持有市值占比约30%。相比之下，美股散户交易量仅占约10-15%，机构投资者（公募基金、养老金、对冲基金等）占据主导地位。港股介于两者之间，散户交易量约占20-25%。A股"散户市"的特征意味着市场情绪波动更大，追涨杀跌现象更明显，但也为价值投资者提供了更多错误定价的机会。',
  },
  {
    id: 6,
    category: '资金结构',
    question: '以下哪类资金在A股市场中占比最大？',
    options: [
      { text: 'A. 外资（北向资金）', isCorrect: false },
      { text: 'B. 公募基金', isCorrect: false },
      { text: 'C. 个人投资者（散户）', isCorrect: true },
      { text: 'D. 社保基金', isCorrect: false },
    ],
    explanation: '从持股市值来看，A股市场中个人投资者持有约30%的自由流通市值，是国内最大的单一投资者群体。公募基金持有约15%，外资（北向资金）持有约5%，社保基金和保险资金合计约5%，其余为一般法人（大股东等）持有。从交易活跃度来看，散户贡献了约60-70%的交易量。近年来，监管层持续推动"去散户化"，鼓励通过公募基金等专业机构参与市场。',
  },
  {
    id: 7,
    category: '港股通',
    question: '内地投资者可以通过"港股通"投资港股，以下说法正确的是？',
    options: [
      { text: 'A. 港股通可以买卖所有港股', isCorrect: false },
      { text: 'B. 港股通需要换汇，用港币交易', isCorrect: false },
      { text: 'C. 港股通以人民币报价和结算', isCorrect: true },
      { text: 'D. 港股通没有投资门槛', isCorrect: false },
    ],
    explanation: '港股通（沪深港通的一部分）允许内地投资者用人民币直接买卖符合条件的港股，无需换汇，以人民币报价和结算。港股通标的为恒生综合指数成分股（市值在一定门槛以上），并非所有港股。沪港通需要50万人民币的账户资产门槛，深港通同样有此要求。港股没有涨跌幅限制，且可以T+0交易，与A股规则差异较大，投资前务必了解规则差异。',
  },
  {
    id: 8,
    category: '美股交易',
    question: '关于美股交易，以下哪个说法是正确的？',
    options: [
      { text: 'A. 美股只能通过券商APP交易，不能电话委托', isCorrect: false },
      { text: 'B. 美股交易时间与A股相同', isCorrect: false },
      { text: 'C. 美股允许做空（卖空）个股', isCorrect: true },
      { text: 'D. 美股不允许盘前盘后交易', isCorrect: false },
    ],
    explanation: '美股是全球最自由的股票市场之一。允许个股做空（卖空），即借入股票卖出，期望价格下跌后买回归还。美股常规交易时间为美东时间9:30-16:00（对应北京时间21:30-次日4:00，夏令时提前1小时），此外还有盘前交易（4:00-9:30）和盘后交易（16:00-20:00）。A股目前不允许个股做空（仅有股指期货和融券，但门槛高且限制多）。了解这些差异有助于选择适合自己的投资市场。',
  },
  {
    id: 9,
    category: '市场规模',
    question: '港股的上市公司中，以下哪个行业的公司数量最多？',
    options: [
      { text: 'A. 科技互联网', isCorrect: false },
      { text: 'B. 金融（银行、保险）', isCorrect: true },
      { text: 'C. 房地产', isCorrect: false },
      { text: 'D. 消费品', isCorrect: false },
    ],
    explanation: '港股是重要的国际金融中心，金融业是港股的支柱产业。在港股上市公司中，金融类公司数量最多、市值占比最大。汇丰控股、中国平安、工商银行、建设银行等大型金融股都是港股的重要成分股。不过从市值占比来看，腾讯、阿里、美团等科技互联网公司也占据了很大比重。港股还有一个独特现象——大量中国内地企业选择在香港上市（H股和红筹股），内地企业市值占港股总市值约70%。',
  },
  {
    id: 10,
    category: '资金结构',
    question: '以下关于"北向资金"的说法，哪个是正确的？',
    options: [
      { text: 'A. 北向资金是指从北方流入南方市场的资金', isCorrect: false },
      { text: 'B. 北向资金是指境外投资者通过沪深港通买入A股的资金', isCorrect: true },
      { text: 'C. 北向资金只能买不能卖', isCorrect: false },
      { text: 'D. 北向资金不受额度限制', isCorrect: false },
    ],
    explanation: '"北向资金"是指境外投资者通过沪深港通机制从香港流入A股市场的资金（地理上从南向北）。与之对应，"南向资金"是内地投资者通过港股通流入香港市场的资金。北向资金每日有额度限制（沪股通520亿、深股通520亿），但实际很少触及限额。北向资金被A股市场视为"聪明钱"的风向标，其买卖动向常被投资者关注。不过，北向资金也并非总是正确的，盲目跟随也可能亏损。',
  },
  {
    id: 11,
    category: '交易制度',
    question: '港股的"碎股"（零股交易）是什么意思？',
    options: [
      { text: 'A. 股票价格跌到很低的股票', isCorrect: false },
      { text: 'B. 不足一手交易单位的股票买卖', isCorrect: true },
      { text: 'C. 公司破产清算时的股票', isCorrect: false },
      { text: 'D. 交易量极小的冷门股', isCorrect: false },
    ],
    explanation: '港股的"碎股"是指不足一手（整手）交易单位的股票。港股不同于A股（A股一手统一为100股），港股不同股票的一手数量不同，有的100股、500股、1000股甚至更多，由上市公司自行决定。碎股通常通过专门的碎股市场交易，价格一般比整手交易低1-2%。买入碎股的风险在于流动性差，卖出时可能需要折价。A股没有碎股概念，买入必须是100股的整数倍。',
  },
  {
    id: 12,
    category: '散户占比',
    question: '美股市场中，占比最大的投资者类型是？',
    options: [
      { text: 'A. 个人投资者（散户）', isCorrect: false },
      { text: 'B. 共同基金（公募基金）', isCorrect: false },
      { text: 'C. 养老金和ETF', isCorrect: true },
      { text: 'D. 对冲基金', isCorrect: false },
    ],
    explanation: '美股市场中，最大的投资者群体是机构投资者。其中，养老金（包括401k、IRA等退休账户）和ETF（交易所交易基金）是持股市值最大的两类。Vanguard（先锋领航）和BlackRock（贝莱德）是全球最大的两家资产管理公司，各自管理超过7万亿美元资产。美国约50%的家庭通过401k等退休账户间接持有股票。这种"全民持股"的结构使美股具有更强的长期投资属性，也是美股长期走牛的重要支撑力量。',
  },
]

function MarketQuiz() {
  const navigate = useNavigate()
  const { saveTestResult } = useAuth()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredCount, setAnsweredCount] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const q = quizQuestions[currentIndex]

  const handleAnswer = (optionIndex) => {
    if (showExplanation) return
    setSelectedAnswer(optionIndex)
    setShowExplanation(true)
    setAnsweredCount(prev => prev + 1)
    if (q.options[optionIndex].isCorrect) {
      setScore(prev => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      // 保存测试结果到用户
      saveTestResult('marketQuiz', { score, total: quizQuestions.length })
      setIsFinished(true)
    }
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setAnsweredCount(0)
    setIsFinished(false)
  }

  const getScoreLabel = () => {
    const pct = score / quizQuestions.length
    if (pct >= 0.9) return { emoji: '🏆', text: '投资学霸！你对全球股市了如指掌' }
    if (pct >= 0.7) return { emoji: '📊', text: '市场达人！知识储备相当扎实' }
    if (pct >= 0.5) return { emoji: '📖', text: '入门选手，继续学习会有更大收获' }
    return { emoji: '🌱', text: '投资新手，建议先从基础概念学起' }
  }

  if (isFinished) {
    const result = getScoreLabel()
    return (
      <div className="market-quiz-page">
        <button className="page-back" onClick={() => navigate('/zhi')}>
          <span>←</span> 返回认知篇
        </button>

        <div className="quiz-result-card">
          <div className="quiz-result-icon">{result.emoji}</div>
          <h2 className="quiz-result-title">测验完成！</h2>
          <div className="quiz-score">
            <span className="quiz-score-num">{score}</span>
            <span className="quiz-score-total"> / {quizQuestions.length}</span>
          </div>
          <p className="quiz-result-desc">{result.text}</p>

          <div className="quiz-result-details">
            <div className="quiz-stat">
              <span className="quiz-stat-num" style={{ color: 'var(--dao)' }}>{score}</span>
              <span className="quiz-stat-label">答对</span>
            </div>
            <div className="quiz-stat">
              <span className="quiz-stat-num" style={{ color: 'var(--xing)' }}>{quizQuestions.length - score}</span>
              <span className="quiz-stat-label">答错</span>
            </div>
            <div className="quiz-stat">
              <span className="quiz-stat-num" style={{ color: 'var(--zhi)' }}>{Math.round(score / quizQuestions.length * 100)}%</span>
              <span className="quiz-stat-label">正确率</span>
            </div>
          </div>

          <div className="quiz-result-actions">
            <button className="btn btn-primary" onClick={handleRestart}>再来一次</button>
            <button className="btn btn-secondary" onClick={() => navigate('/zhi')}>返回认知篇</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="market-quiz-page">
      <button className="page-back" onClick={() => navigate('/zhi')}>
        <span>←</span> 返回认知篇
      </button>

      <div className="quiz-header">
        <div className="quiz-badge">📊</div>
        <h1>认知市场 · 趣味问答</h1>
        <p>A股、港股、美股，你了解多少？</p>
      </div>

      <div className="quiz-progress">
        <div className="progress-info">
          <span>第 {currentIndex + 1} / {quizQuestions.length} 题</span>
          <span>得分：{score}</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }} />
        </div>
      </div>

      <div className="quiz-content">
        <div className="quiz-card">
          <div className="quiz-category">{q.category}</div>
          <h2 className="quiz-question">{q.question}</h2>

          <div className="quiz-options">
            {q.options.map((opt, idx) => {
              let className = 'quiz-option'
              if (showExplanation) {
                if (opt.isCorrect) className += ' correct'
                else if (selectedAnswer === idx && !opt.isCorrect) className += ' wrong'
              }
              return (
                <button
                  key={idx}
                  className={className}
                  onClick={() => handleAnswer(idx)}
                  disabled={showExplanation}
                >
                  <span className="quiz-option-text">{opt.text}</span>
                  {showExplanation && opt.isCorrect && <span className="quiz-option-icon">✓</span>}
                  {showExplanation && selectedAnswer === idx && !opt.isCorrect && <span className="quiz-option-icon">✗</span>}
                </button>
              )
            })}
          </div>

          {showExplanation && (
            <div className="quiz-explanation">
              <div className="quiz-explanation-header">
                <span>💡 答案解析</span>
              </div>
              <p>{q.explanation}</p>
            </div>
          )}
        </div>

        {showExplanation && (
          <div className="quiz-next">
            <button className="btn btn-primary" onClick={handleNext}>
              {currentIndex < quizQuestions.length - 1 ? '下一题 →' : '查看结果 →'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default MarketQuiz
