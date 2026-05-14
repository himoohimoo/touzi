import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// 30道认知自己测试题
// 四个维度：风险偏好(Risk)、时间偏好(Time)、决策风格(Decision)、收益期望(Return)
const questions = [
  // ========== 维度1：风险偏好 (Risk) ==========
  {
    id: 1,
    question: '如果你投资的10万元一天亏了5000元，你会？',
    options: [
      { text: '😰 立刻卖出，不能再亏了', scores: { R: 3, T: 1, D: 1, Ret: 1 } },
      { text: '😐 有点难受，但再看看', scores: { R: 1, T: 2, D: 2, Ret: 2 } },
      { text: '🤔 分析原因，决定是否需要止损', scores: { R: 0, T: 2, D: 3, Ret: 2 } },
      { text: '😌 正常波动，甚至考虑加仓', scores: { R: -1, T: 3, D: 2, Ret: 3 } },
    ],
  },
  {
    id: 2,
    question: '你能接受的最大单只股票亏损比例是？',
    options: [
      { text: '不能超过5%', scores: { R: 3, T: 1, D: 1, Ret: 1 } },
      { text: '10%左右', scores: { R: 2, T: 2, D: 2, Ret: 2 } },
      { text: '20%以内', scores: { R: 1, T: 2, D: 2, Ret: 3 } },
      { text: '30%以上，甚至腰斩也能接受', scores: { R: -1, T: 3, D: 2, Ret: 3 } },
    ],
  },
  {
    id: 3,
    question: '你更倾向哪种资产配置？',
    options: [
      { text: '80%存款/债券 + 20%股票', scores: { R: 3, T: 2, D: 2, Ret: 1 } },
      { text: '60%股票 + 40%稳健资产', scores: { R: 1, T: 2, D: 2, Ret: 2 } },
      { text: '80%股票 + 20%现金', scores: { R: 0, T: 2, D: 2, Ret: 3 } },
      { text: '全仓股票，甚至加杠杆', scores: { R: -2, T: 1, D: 1, Ret: 3 } },
    ],
  },
  {
    id: 4,
    question: '听到"股市有风险，投资需谨慎"，你的反应是？',
    options: [
      { text: '很有道理，我还是存银行吧', scores: { R: 3, T: 1, D: 1, Ret: 1 } },
      { text: '风险可控，小心一点就行', scores: { R: 2, T: 2, D: 2, Ret: 2 } },
      { text: '风险越大，机会越大', scores: { R: 0, T: 2, D: 2, Ret: 3 } },
      { text: '富贵险中求，怕什么', scores: { R: -2, T: 2, D: 1, Ret: 3 } },
    ],
  },
  {
    id: 5,
    question: '2008年金融危机那种级别的下跌，你会？',
    options: [
      { text: '彻底退出股市，再也不碰', scores: { R: 3, T: 1, D: 1, Ret: 1 } },
      { text: '大幅减仓，等稳定再说', scores: { R: 2, T: 2, D: 2, Ret: 2 } },
      { text: '继续持有，相信会回来', scores: { R: 0, T: 3, D: 2, Ret: 2 } },
      { text: '借钱抄底，千载难逢', scores: { R: -2, T: 3, D: 1, Ret: 3 } },
    ],
  },
  {
    id: 6,
    question: '你购买保险的态度是？',
    options: [
      { text: '必须配齐，防范于未然', scores: { R: 2, T: 2, D: 2, Ret: 1 } },
      { text: '基本的医疗/意外险要有', scores: { R: 1, T: 2, D: 2, Ret: 2 } },
      { text: '有社保就够了', scores: { R: 0, T: 2, D: 2, Ret: 2 } },
      { text: '不需要，不如投资赚钱', scores: { R: -1, T: 2, D: 1, Ret: 3 } },
    ],
  },
  {
    id: 7,
    question: '朋友推荐一只"稳赚"的股票，你会投入多少？',
    options: [
      { text: '不参与，我不信这种消息', scores: { R: 2, T: 2, D: 3, Ret: 1 } },
      { text: '拿一小部分试试水', scores: { R: 1, T: 2, D: 2, Ret: 2 } },
      { text: '投入一半资金', scores: { R: 0, T: 1, D: 1, Ret: 3 } },
      { text: '全仓杀入，错过就没了', scores: { R: -2, T: 1, D: 1, Ret: 3 } },
    ],
  },
  {
    id: 8,
    question: '你的应急资金（6个月生活费）准备好了吗？',
    options: [
      { text: '已备好，且与投资资金严格分开', scores: { R: 2, T: 3, D: 3, Ret: 2 } },
      { text: '有存款，但没那么严格区分', scores: { R: 1, T: 2, D: 2, Ret: 2 } },
      { text: '一部分在投资里，急用可以取', scores: { R: 0, T: 1, D: 1, Ret: 2 } },
      { text: '全部在股市里，反正随时能卖', scores: { R: -2, T: 1, D: 1, Ret: 3 } },
    ],
  },

  // ========== 维度2：时间偏好 (Time) ==========
  {
    id: 9,
    question: '你计划用这笔钱投资多久？',
    options: [
      { text: '1年以内', scores: { R: 2, T: 1, D: 1, Ret: 2 } },
      { text: '1-3年', scores: { R: 1, T: 2, D: 2, Ret: 2 } },
      { text: '3-10年', scores: { R: 0, T: 3, D: 2, Ret: 2 } },
      { text: '10年以上，甚至养老用', scores: { R: -1, T: 3, D: 3, Ret: 2 } },
    ],
  },
  {
    id: 10,
    question: '你多久看一次股票账户？',
    options: [
      { text: '每天看好几次', scores: { R: 0, T: 1, D: 1, Ret: 3 } },
      { text: '每天收盘看一眼', scores: { R: 0, T: 2, D: 2, Ret: 2 } },
      { text: '每周看一次', scores: { R: 1, T: 2, D: 2, Ret: 2 } },
      { text: '每月或更久看一次', scores: { R: 2, T: 3, D: 3, Ret: 1 } },
    ],
  },
  {
    id: 11,
    question: '买入一只股票后，你期望多久看到收益？',
    options: [
      { text: '一周内', scores: { R: 0, T: 1, D: 1, Ret: 3 } },
      { text: '一个月内', scores: { R: 0, T: 2, D: 2, Ret: 2 } },
      { text: '半年到一年', scores: { R: 1, T: 2, D: 2, Ret: 2 } },
      { text: '不在乎短期，看长期价值', scores: { R: 1, T: 3, D: 3, Ret: 2 } },
    ],
  },
  {
    id: 12,
    question: '以下哪种描述更符合你？',
    options: [
      { text: '我想快速致富，等不了太久', scores: { R: -1, T: 1, D: 1, Ret: 3 } },
      { text: '希望3-5年能看到明显回报', scores: { R: 0, T: 2, D: 2, Ret: 2 } },
      { text: '愿意用10年积累财富', scores: { R: 1, T: 3, D: 2, Ret: 2 } },
      { text: '投资是终身事业，不急于一时', scores: { R: 1, T: 3, D: 3, Ret: 1 } },
    ],
  },
  {
    id: 13,
    question: '你如何看待"复利"的力量？',
    options: [
      { text: '太慢了，我想赚快钱', scores: { R: 0, T: 1, D: 1, Ret: 3 } },
      { text: '有道理，但需要很长时间', scores: { R: 1, T: 2, D: 2, Ret: 2 } },
      { text: '相信复利，愿意慢慢积累', scores: { R: 1, T: 3, D: 2, Ret: 2 } },
      { text: '复利的奇迹需要耐心，我有', scores: { R: 2, T: 3, D: 3, Ret: 2 } },
    ],
  },
  {
    id: 14,
    question: '如果一只好股票短期内不涨，你会？',
    options: [
      { text: '卖掉换别的，时间也是成本', scores: { R: 0, T: 1, D: 1, Ret: 3 } },
      { text: '持有3个月，不涨就走', scores: { R: 0, T: 2, D: 2, Ret: 2 } },
      { text: '持有1年，相信价值会体现', scores: { R: 1, T: 3, D: 2, Ret: 2 } },
      { text: '越跌越买，长期持有5年+', scores: { R: 1, T: 3, D: 3, Ret: 2 } },
    ],
  },
  {
    id: 15,
    question: '你的年龄阶段是？',
    options: [
      { text: '25岁以下', scores: { R: -1, T: 3, D: 2, Ret: 3 } },
      { text: '25-35岁', scores: { R: 0, T: 3, D: 2, Ret: 2 } },
      { text: '35-50岁', scores: { R: 1, T: 2, D: 2, Ret: 2 } },
      { text: '50岁以上', scores: { R: 2, T: 2, D: 2, Ret: 1 } },
    ],
  },

  // ========== 维度3：决策风格 (Decision) ==========
  {
    id: 16,
    question: '买入股票前，你会做多少研究？',
    options: [
      { text: '看K线走势，感觉好就买', scores: { R: 0, T: 1, D: 1, Ret: 3 } },
      { text: '看看新闻和论坛讨论', scores: { R: 0, T: 2, D: 2, Ret: 2 } },
      { text: '研究财报和行业前景', scores: { R: 1, T: 2, D: 3, Ret: 2 } },
      { text: '深度调研，建立估值模型', scores: { R: 1, T: 3, D: 3, Ret: 2 } },
    ],
  },
  {
    id: 17,
    question: '你的投资决策主要依据？',
    options: [
      { text: '直觉和盘感', scores: { R: 0, T: 1, D: 1, Ret: 3 } },
      { text: '技术指标和K线', scores: { R: 0, T: 2, D: 2, Ret: 3 } },
      { text: '基本面分析和价值', scores: { R: 1, T: 3, D: 3, Ret: 2 } },
      { text: '量化模型和数据', scores: { R: 1, T: 2, D: 3, Ret: 2 } },
    ],
  },
  {
    id: 18,
    question: '你会记录自己的投资决策吗？',
    options: [
      { text: '从不记录', scores: { R: 0, T: 1, D: 1, Ret: 2 } },
      { text: '偶尔记一下', scores: { R: 0, T: 2, D: 2, Ret: 2 } },
      { text: '有投资日记', scores: { R: 1, T: 2, D: 3, Ret: 2 } },
      { text: '完整的交易系统和复盘', scores: { R: 1, T: 3, D: 3, Ret: 2 } },
    ],
  },
  {
    id: 19,
    question: '面对市场热点，你会？',
    options: [
      { text: '马上追，怕错过', scores: { R: -1, T: 1, D: 1, Ret: 3 } },
      { text: '看看再说，跟风买一点', scores: { R: 0, T: 2, D: 2, Ret: 2 } },
      { text: '分析是否真有投资价值', scores: { R: 1, T: 2, D: 3, Ret: 2 } },
      { text: '无视热点，坚持自己策略', scores: { R: 2, T: 3, D: 3, Ret: 1 } },
    ],
  },
  {
    id: 20,
    question: '你是否有明确的买入/卖出规则？',
    options: [
      { text: '没有，看情况决定', scores: { R: 0, T: 1, D: 1, Ret: 2 } },
      { text: '大致有，但不严格执行', scores: { R: 0, T: 2, D: 2, Ret: 2 } },
      { text: '有规则，大部分时候遵守', scores: { R: 1, T: 2, D: 3, Ret: 2 } },
      { text: '严格执行交易系统', scores: { R: 1, T: 3, D: 3, Ret: 2 } },
    ],
  },
  {
    id: 21,
    question: '你如何看待"别人恐惧我贪婪"？',
    options: [
      { text: '做不到，我也恐惧', scores: { R: 2, T: 1, D: 1, Ret: 1 } },
      { text: '理想状态，但很难执行', scores: { R: 1, T: 2, D: 2, Ret: 2 } },
      { text: '努力做到逆向思考', scores: { R: 0, T: 3, D: 3, Ret: 2 } },
      { text: '这是我的投资信条', scores: { R: 0, T: 3, D: 3, Ret: 2 } },
    ],
  },
  {
    id: 22,
    question: '犯错后你会？',
    options: [
      { text: '找借口，市场不对', scores: { R: 0, T: 1, D: 1, Ret: 2 } },
      { text: '难过一阵子，然后忘了', scores: { R: 0, T: 2, D: 2, Ret: 2 } },
      { text: '总结教训，下次改进', scores: { R: 1, T: 2, D: 3, Ret: 2 } },
      { text: '详细复盘，完善系统', scores: { R: 1, T: 3, D: 3, Ret: 2 } },
    ],
  },
  {
    id: 23,
    question: '你更信任哪种信息来源？',
    options: [
      { text: '微信群/论坛/大V推荐', scores: { R: 0, T: 1, D: 1, Ret: 2 } },
      { text: '财经新闻和研报', scores: { R: 0, T: 2, D: 2, Ret: 2 } },
      { text: '公司财报和公告', scores: { R: 1, T: 2, D: 3, Ret: 2 } },
      { text: '独立思考和实地调研', scores: { R: 1, T: 3, D: 3, Ret: 2 } },
    ],
  },

  // ========== 维度4：收益期望 (Return) ==========
  {
    id: 24,
    question: '你对年化收益的期望是？',
    options: [
      { text: '跑赢通胀就行（3-5%）', scores: { R: 2, T: 3, D: 2, Ret: 1 } },
      { text: '稳健增值（8-12%）', scores: { R: 1, T: 3, D: 2, Ret: 2 } },
      { text: '较好回报（15-20%）', scores: { R: 0, T: 2, D: 2, Ret: 3 } },
      { text: '追求超额收益（25%+）', scores: { R: -1, T: 1, D: 1, Ret: 3 } },
    ],
  },
  {
    id: 25,
    question: '你愿意为高收益承担多大风险？',
    options: [
      { text: '不愿承担任何风险', scores: { R: 3, T: 2, D: 2, Ret: 1 } },
      { text: '小风险换小收益', scores: { R: 2, T: 2, D: 2, Ret: 2 } },
      { text: '中等风险换中等收益', scores: { R: 1, T: 2, D: 2, Ret: 2 } },
      { text: '高风险高收益', scores: { R: -1, T: 1, D: 1, Ret: 3 } },
    ],
  },
  {
    id: 26,
    question: '以下哪种投资理念你更认同？',
    options: [
      { text: '不亏钱是第一要务', scores: { R: 3, T: 2, D: 2, Ret: 1 } },
      { text: '稳健增长，复利积累', scores: { R: 1, T: 3, D: 2, Ret: 2 } },
      { text: '寻找十倍股，追求爆发', scores: { R: -1, T: 2, D: 2, Ret: 3 } },
      { text: '短线交易，积小胜为大胜', scores: { R: 0, T: 1, D: 1, Ret: 3 } },
    ],
  },
  {
    id: 27,
    question: '你如何看待"保本出"？',
    options: [
      { text: '经常这样，回本就好', scores: { R: 2, T: 1, D: 1, Ret: 1 } },
      { text: '偶尔，解套就卖', scores: { R: 1, T: 2, D: 2, Ret: 2 } },
      { text: '看情况，不因成本决策', scores: { R: 0, T: 2, D: 3, Ret: 2 } },
      { text: '从不，只看好坏不看成本', scores: { R: 0, T: 3, D: 3, Ret: 2 } },
    ],
  },
  {
    id: 28,
    question: '你的投资目标更接近？',
    options: [
      { text: '资产保值，不贬值就行', scores: { R: 3, T: 2, D: 2, Ret: 1 } },
      { text: '跑赢银行理财', scores: { R: 2, T: 2, D: 2, Ret: 2 } },
      { text: '实现财务自由', scores: { R: 0, T: 3, D: 2, Ret: 3 } },
      { text: '成为职业投资者', scores: { R: -1, T: 2, D: 2, Ret: 3 } },
    ],
  },
  {
    id: 29,
    question: '如果有一种"稳赚不赔"5%收益的产品，你会？',
    options: [
      { text: '全部资金投入', scores: { R: 3, T: 2, D: 2, Ret: 1 } },
      { text: '大部分投入，小部分博高收益', scores: { R: 1, T: 2, D: 2, Ret: 2 } },
      { text: '小部分投入，主要自己投资', scores: { R: 0, T: 2, D: 2, Ret: 3 } },
      { text: '不感兴趣，自己能赚更多', scores: { R: -1, T: 2, D: 1, Ret: 3 } },
    ],
  },
  {
    id: 30,
    question: '用一句话形容你的投资目标？',
    options: [
      { text: '安全第一，稳稳当当', scores: { R: 3, T: 2, D: 2, Ret: 1 } },
      { text: '慢慢变富，享受复利', scores: { R: 1, T: 3, D: 2, Ret: 2 } },
      { text: '抓住机会，实现跃迁', scores: { R: -1, T: 2, D: 2, Ret: 3 } },
      { text: '快速交易，赚取差价', scores: { R: 0, T: 1, D: 1, Ret: 3 } },
    ],
  },
]

// 投资建议类型定义
const INVESTMENT_TYPES = {
  DEPOSIT: {
    key: 'deposit',
    name: '存款型',
    icon: '🏦',
    color: '#888888',
    desc: '建议以存款/货币基金为主',
    detail: '你的风险偏好较低，对亏损非常敏感。建议以银行存款、货币基金、国债等保本产品为主，追求跑赢通胀即可。投资前建议先学习基础知识，从小额开始尝试。',
    suitable: ['银行存款', '货币基金', '国债', '保本理财'],
    unsuitable: ['股票', '基金定投', '期货', '加密货币'],
  },
  VALUE: {
    key: 'value',
    name: '价值投资型',
    icon: '📊',
    color: '#2ECC71',
    desc: '适合长期价值投资',
    detail: '你有较好的耐心和风险意识，适合做价值投资。建议选择优质蓝筹股、宽基指数基金，长期持有享受复利。关注公司基本面，忽略短期波动。',
    suitable: ['蓝筹股', '指数基金', 'ETF定投', '可转债'],
    unsuitable: ['短线交易', '追热点', '杠杆操作'],
  },
  TREND: {
    key: 'trend',
    name: '趋势投资型',
    icon: '📈',
    color: '#4A90D9',
    desc: '适合趋势跟踪策略',
    detail: '你善于把握市场节奏，适合做趋势投资。建议学习技术分析，跟随市场趋势操作。设置好止损止盈点，严格执行交易纪律。',
    suitable: ['趋势跟踪', '技术指标', '波段操作', '行业ETF'],
    unsuitable: ['长期套牢', '逆势操作', '频繁换股'],
  },
  GROWTH: {
    key: 'growth',
    name: '成长投资型',
    icon: '🚀',
    color: '#9B59B6',
    desc: '适合成长股的挖掘',
    detail: '你愿意承担风险追求高回报，适合做成长投资。关注高成长行业（科技、新能源、医药等），挖掘有潜力的公司。注意分散投资，控制仓位。',
    suitable: ['成长股', '科技股', '新兴产业', '小盘基金'],
    unsuitable: ['全仓单票', '追高买入', '忽视估值'],
  },
  SHORT: {
    key: 'short',
    name: '短线交易型',
    icon: '⚡',
    color: '#E74C3C',
    desc: '适合短线/超短线交易',
    detail: '你追求快速收益，适合做短线交易。建议学习技术分析和盘口语言，严格执行止损。注意控制仓位，不要频繁交易导致手续费侵蚀利润。',
    suitable: ['短线交易', '打板', 'T+0', '期权'],
    unsuitable: ['长期持有', '价值投资', '重仓死扛'],
  },
}

function ZhiTest() {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const progress = ((currentQ + 1) / questions.length) * 100

  const handleSelect = (optionIndex) => {
    if (isAnimating) return
    setSelectedOption(optionIndex)
    setIsAnimating(true)

    setTimeout(() => {
      const newAnswers = [...answers, questions[currentQ].options[optionIndex]]
      setAnswers(newAnswers)

      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1)
        setSelectedOption(null)
      } else {
        const result = calculateResult(newAnswers)
        sessionStorage.setItem('zhiTestResult', JSON.stringify(result))
        navigate('/zhi/result')
      }
      setIsAnimating(false)
    }, 400)
  }

  const calculateResult = (ans) => {
    // 计算四个维度总分
    const totals = { R: 0, T: 0, D: 0, Ret: 0 }
    ans.forEach(a => {
      Object.entries(a.scores).forEach(([key, val]) => {
        totals[key] = (totals[key] || 0) + val
      })
    })

    // 归一化到0-100分
    const maxScore = { R: 42, T: 36, D: 36, Ret: 36 } // 各维度最大可能得分
    const normalized = {
      R: Math.max(0, Math.min(100, ((totals.R + 10) / (maxScore.R + 10)) * 100)),
      T: Math.max(0, Math.min(100, (totals.T / maxScore.T) * 100)),
      D: Math.max(0, Math.min(100, (totals.D / maxScore.D) * 100)),
      Ret: Math.max(0, Math.min(100, (totals.Ret / maxScore.Ret) * 100)),
    }

    // 判断投资建议类型
    let type = INVESTMENT_TYPES.VALUE // 默认价值投资

    if (normalized.R > 65) {
      // 高风险厌恶 -> 存款型
      type = INVESTMENT_TYPES.DEPOSIT
    } else if (normalized.T < 40 && normalized.Ret > 60) {
      // 短期 + 高收益期望 -> 短线型
      type = INVESTMENT_TYPES.SHORT
    } else if (normalized.T > 60 && normalized.D > 50 && normalized.Ret < 50) {
      // 长期 + 理性决策 + 稳健收益 -> 价值投资型
      type = INVESTMENT_TYPES.VALUE
    } else if (normalized.D > 50 && normalized.Ret > 50 && normalized.T > 40) {
      // 理性决策 + 较高收益 + 中期 -> 成长型
      type = INVESTMENT_TYPES.GROWTH
    } else if (normalized.D < 50 && normalized.T < 60 && normalized.Ret > 50) {
      // 偏直觉 + 中期 + 较高收益 -> 趋势型
      type = INVESTMENT_TYPES.TREND
    } else if (normalized.T > 50 && normalized.D > 50) {
      // 长期 + 理性 -> 价值投资
      type = INVESTMENT_TYPES.VALUE
    } else if (normalized.Ret > 60) {
      // 高收益期望 -> 成长型
      type = INVESTMENT_TYPES.GROWTH
    }

    return {
      type,
      scores: normalized,
      rawScores: totals,
    }
  }

  const q = questions[currentQ]

  return (
    <div className="zhi-test-page">
      <div className="test-header">
        <button className="page-back" onClick={() => navigate('/zhi')}>
          <span>←</span> 返回认知篇
        </button>
        <div className="test-progress">
          <div className="progress-info">
            <span>第 {currentQ + 1} / {questions.length} 题</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <div className={`test-content ${isAnimating ? 'fade-out' : ''}`}>
        <div className="question-card">
          <span className="question-num">Q{q.id}</span>
          <h2 className="question-text">{q.question}</h2>
          <div className="options-list">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                className={`option-btn ${selectedOption === idx ? 'selected' : ''}`}
                onClick={() => handleSelect(idx)}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZhiTest
