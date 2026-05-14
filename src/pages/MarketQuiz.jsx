import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const quizQuestions = [
  // === 原有12题 ===
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
    explanation: '美股是全球最大的股票市场，总市值超过50万亿美元，占全球股市总市值的约45%。其中纽交所（NYSE）和纳斯达克（NASDAQ）是全球最大的两个证券交易所。',
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
    explanation: '截至2024年底，A股（上交所+深交所+北交所）上市公司总数约5300家。其中上交所约2200家，深交所约2800家，北交所约260家。',
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
    explanation: 'A股实行T+1交易制度，即今天买入的股票，明天才能卖出。这是1995年起实施的制度，目的是抑制过度投机。而美股和港股都实行T+0交易制度。',
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
    explanation: 'A股主板实行±10%的涨跌幅限制（ST股票为±5%）。创业板和科创板实行±20%的涨跌幅限制，北交所是±30%。',
  },
  {
    id: 5,
    category: '投资者结构',
    question: '哪个市场的散户（个人投资者）交易占比最高？',
    options: [
      { text: 'A. 美股', isCorrect: false },
      { text: 'B. 港股', isCorrect: false },
      { text: 'C. A股', isCorrect: true },
      { text: 'D. 三者差不多', isCorrect: false },
    ],
    explanation: 'A股是全球散户占比最高的主要股市之一。A股个人投资者交易量占比约60-70%，美股散户交易量仅占约10-15%。',
  },
  {
    id: 6,
    category: '资金结构',
    question: '以下哪类资金在A股市场中持股市值占比最大？',
    options: [
      { text: 'A. 外资（北向资金）', isCorrect: false },
      { text: 'B. 公募基金', isCorrect: false },
      { text: 'C. 个人投资者（散户）', isCorrect: true },
      { text: 'D. 社保基金', isCorrect: false },
    ],
    explanation: '从持股市值来看，A股市场中个人投资者持有约30%的自由流通市值，是国内最大的单一投资者群体。',
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
    explanation: '港股通允许内地投资者用人民币直接买卖符合条件的港股，无需换汇。沪港通需要50万人民币的账户资产门槛。',
  },
  {
    id: 8,
    category: '美股交易',
    question: '关于美股交易，以下哪个说法是正确的？',
    options: [
      { text: 'A. 美股只能通过券商APP交易', isCorrect: false },
      { text: 'B. 美股交易时间与A股相同', isCorrect: false },
      { text: 'C. 美股允许做空（卖空）个股', isCorrect: true },
      { text: 'D. 美股不允许盘前盘后交易', isCorrect: false },
    ],
    explanation: '美股允许个股做空（卖空），即借入股票卖出，期望价格下跌后买回归还。A股目前不允许个股做空。',
  },
  {
    id: 9,
    category: '港股结构',
    question: '港股的上市公司中，以下哪个行业的公司数量最多？',
    options: [
      { text: 'A. 科技互联网', isCorrect: false },
      { text: 'B. 金融（银行、保险）', isCorrect: true },
      { text: 'C. 房地产', isCorrect: false },
      { text: 'D. 消费品', isCorrect: false },
    ],
    explanation: '港股是重要的国际金融中心，金融业是港股的支柱产业。在港股上市公司中，金融类公司数量最多、市值占比最大。',
  },
  {
    id: 10,
    category: '北向资金',
    question: '以下关于"北向资金"的说法，哪个是正确的？',
    options: [
      { text: 'A. 北向资金是指从北方流入南方市场的资金', isCorrect: false },
      { text: 'B. 北向资金是指境外投资者通过沪深港通买入A股的资金', isCorrect: true },
      { text: 'C. 北向资金只能买不能卖', isCorrect: false },
      { text: 'D. 北向资金不受额度限制', isCorrect: false },
    ],
    explanation: '"北向资金"是指境外投资者通过沪深港通机制从香港流入A股市场的资金。与之对应，"南向资金"是内地投资者流入香港市场的资金。',
  },
  {
    id: 11,
    category: '港股规则',
    question: '港股的"碎股"（零股交易）是什么意思？',
    options: [
      { text: 'A. 股票价格跌到很低的股票', isCorrect: false },
      { text: 'B. 不足一手交易单位的股票买卖', isCorrect: true },
      { text: 'C. 公司破产清算时的股票', isCorrect: false },
      { text: 'D. 交易量极小的冷门股', isCorrect: false },
    ],
    explanation: '港股的"碎股"是指不足一手（整手）交易单位的股票。港股不同股票的一手数量不同，有的100股、500股、1000股甚至更多。',
  },
  {
    id: 12,
    category: '美股结构',
    question: '美股市场中，占比最大的投资者类型是？',
    options: [
      { text: 'A. 个人投资者（散户）', isCorrect: false },
      { text: 'B. 共同基金（公募基金）', isCorrect: false },
      { text: 'C. 养老金和ETF', isCorrect: true },
      { text: 'D. 对冲基金', isCorrect: false },
    ],
    explanation: '美股市场中，养老金（包括401k、IRA等退休账户）和ETF是持股市值最大的两类。Vanguard和BlackRock是全球最大的两家资产管理公司。',
  },
  // === 新增题目 ===
  {
    id: 13,
    category: '股票基础',
    question: '股票代表的是持有者对公司的什么权利？',
    options: [
      { text: 'A. 债权', isCorrect: false },
      { text: 'B. 所有权', isCorrect: true },
      { text: 'C. 经营权', isCorrect: false },
      { text: 'D. 优先购买权', isCorrect: false },
    ],
    explanation: '股票是一种有价证券，代表持有者对公司的所有权。持有股票意味着你是公司的股东，享有分红权、投票权等权利。',
  },
  {
    id: 14,
    category: '股票基础',
    question: '以下哪项不是股票的基本特征？',
    options: [
      { text: 'A. 流动性', isCorrect: false },
      { text: 'B. 风险性', isCorrect: false },
      { text: 'C. 永久性', isCorrect: false },
      { text: 'D. 保本性', isCorrect: true },
    ],
    explanation: '股票不具有保本性。股票是权益性投资，没有保本承诺，投资者可能面临本金损失。这是股票与存款、债券的重要区别。',
  },
  {
    id: 15,
    category: '新股申购',
    question: 'A股新股申购（打新）需要满足什么条件？',
    options: [
      { text: 'A. 账户内有现金即可', isCorrect: false },
      { text: 'B. 持有一定市值的股票', isCorrect: true },
      { text: 'C. 开户满一定时间', isCorrect: false },
      { text: 'D. 账户资产达到50万', isCorrect: false },
    ],
    explanation: 'A股打新需要持有一定市值的股票（沪市和深市分别计算），每个申购单位对应一定市值。这是为了鼓励长期持股。',
  },
  {
    id: 16,
    category: '新股上市',
    question: 'A股主板新股上市前几个交易日没有涨跌幅限制？',
    options: [
      { text: 'A. 前3个交易日', isCorrect: false },
      { text: 'B. 前5个交易日', isCorrect: true },
      { text: 'C. 前10个交易日', isCorrect: false },
      { text: 'D. 一直有限制', isCorrect: false },
    ],
    explanation: '2023年全面注册制改革后，主板新股上市前5个交易日不设涨跌幅限制，之后恢复±10%的限制。',
  },
  {
    id: 17,
    category: '交易时间',
    question: 'A股的正式交易时间是？',
    options: [
      { text: 'A. 9:00-15:00', isCorrect: false },
      { text: 'B. 9:30-11:30, 13:00-15:00', isCorrect: true },
      { text: 'C. 9:00-12:00, 13:00-16:00', isCorrect: false },
      { text: 'D. 8:30-15:30', isCorrect: false },
    ],
    explanation: 'A股交易时间为上午9:30-11:30，下午13:00-15:00。9:15-9:25为集合竞价时间，产生开盘价。',
  },
  {
    id: 18,
    category: '交易费用',
    question: 'A股交易中，印花税在什么时候收取？',
    options: [
      { text: 'A. 买入时收取', isCorrect: false },
      { text: 'B. 卖出时收取', isCorrect: true },
      { text: 'C. 买入和卖出都收取', isCorrect: false },
      { text: 'D. 不收取印花税', isCorrect: false },
    ],
    explanation: 'A股印花税只在卖出时收取，目前税率为成交金额的0.05%（2023年减半征收）。买入时不收印花税。',
  },
  {
    id: 19,
    category: '基金基础',
    question: '开放式基金和封闭式基金的主要区别是？',
    options: [
      { text: 'A. 开放式基金规模固定', isCorrect: false },
      { text: 'B. 封闭式基金可以随时申购赎回', isCorrect: false },
      { text: 'C. 开放式基金可以随时申购赎回', isCorrect: true },
      { text: 'D. 两者没有区别', isCorrect: false },
    ],
    explanation: '开放式基金规模不固定，投资者可以随时申购和赎回；封闭式基金规模固定，有固定存续期，投资者只能在二级市场买卖。',
  },
  {
    id: 20,
    category: '基金基础',
    question: 'ETF基金的特点是？',
    options: [
      { text: 'A. 只能申购赎回，不能交易', isCorrect: false },
      { text: 'B. 可以像股票一样在交易所买卖', isCorrect: true },
      { text: 'C. 只能在场外购买', isCorrect: false },
      { text: 'D. 管理费比普通基金高', isCorrect: false },
    ],
    explanation: 'ETF（交易所交易基金）可以像股票一样在交易所实时买卖，同时也可以申购赎回。ETF通常跟踪指数，管理费较低。',
  },
  {
    id: 21,
    category: '基金定投',
    question: '基金定投的最大优势是？',
    options: [
      { text: 'A. 保证收益', isCorrect: false },
      { text: 'B. 分散风险、平滑成本', isCorrect: true },
      { text: 'C. 不需要选择基金', isCorrect: false },
      { text: 'D. 没有任何风险', isCorrect: false },
    ],
    explanation: '基金定投通过定期定额投资，可以在市场下跌时买入更多份额，上涨时买入较少份额，从而平滑投资成本，分散择时风险。',
  },
  {
    id: 22,
    category: '估值指标',
    question: 'PE（市盈率）的计算公式是？',
    options: [
      { text: 'A. 股价/每股净资产', isCorrect: false },
      { text: 'B. 股价/每股收益', isCorrect: true },
      { text: 'C. 每股收益/股价', isCorrect: false },
      { text: 'D. 净利润/总市值', isCorrect: false },
    ],
    explanation: 'PE（市盈率）= 股价/每股收益 = 总市值/净利润。PE越高，说明市场对公司未来盈利预期越高，但也可能意味着估值过高。',
  },
  {
    id: 23,
    category: '估值指标',
    question: 'PB（市净率）适用于哪类公司的估值？',
    options: [
      { text: 'A. 高科技成长公司', isCorrect: false },
      { text: 'B. 重资产公司（银行、地产等）', isCorrect: true },
      { text: 'C. 亏损公司', isCorrect: false },
      { text: 'D. 初创企业', isCorrect: false },
    ],
    explanation: 'PB（市净率）= 股价/每股净资产。适用于重资产公司如银行、地产、钢铁等，这些公司的价值主要体现在净资产上。',
  },
  {
    id: 24,
    category: '估值指标',
    question: 'ROE（净资产收益率）反映的是？',
    options: [
      { text: 'A. 公司的偿债能力', isCorrect: false },
      { text: 'B. 公司运用股东资金创造利润的能力', isCorrect: true },
      { text: 'C. 公司的成长速度', isCorrect: false },
      { text: 'D. 公司的现金流状况', isCorrect: false },
    ],
    explanation: 'ROE = 净利润/净资产，反映公司运用股东资金创造利润的能力。巴菲特曾说，如果只能选一个指标选股，他会选ROE。',
  },
  {
    id: 25,
    category: '分红',
    question: '股票分红后，股价会怎样变化？',
    options: [
      { text: 'A. 不变', isCorrect: false },
      { text: 'B. 上涨', isCorrect: false },
      { text: 'C. 下跌（除权除息）', isCorrect: true },
      { text: 'D. 随机波动', isCorrect: false },
    ],
    explanation: '分红后股价会相应下调，称为"除权除息"。现金分红叫除息，送股/转增叫除权。分红前后投资者总资产基本不变。',
  },
  {
    id: 26,
    category: '风险控制',
    question: '止损的主要目的是？',
    options: [
      { text: 'A. 保证盈利', isCorrect: false },
      { text: 'B. 限制单笔亏损幅度', isCorrect: true },
      { text: 'C. 增加交易次数', isCorrect: false },
      { text: 'D. 提高胜率', isCorrect: false },
    ],
    explanation: '止损是为了限制单笔交易的亏损幅度，避免小亏变大亏。合理的止损是风险控制的重要手段。',
  },
  {
    id: 27,
    category: '技术分析',
    question: 'K线图中，阳线表示？',
    options: [
      { text: 'A. 收盘价低于开盘价', isCorrect: false },
      { text: 'B. 收盘价高于开盘价', isCorrect: true },
      { text: 'C. 价格上涨', isCorrect: false },
      { text: 'D. 价格下跌', isCorrect: false },
    ],
    explanation: '阳线表示收盘价高于开盘价，通常用红色表示（A股）。阴线表示收盘价低于开盘价，通常用绿色表示（A股）。',
  },
  {
    id: 28,
    category: '技术分析',
    question: '移动平均线（MA）的作用是？',
    options: [
      { text: 'A. 预测未来价格', isCorrect: false },
      { text: 'B. 平滑价格波动，识别趋势', isCorrect: true },
      { text: 'C. 计算成交量', isCorrect: false },
      { text: 'D. 确定买卖点', isCorrect: false },
    ],
    explanation: '移动平均线通过计算一段时间内的平均价格，平滑短期波动，帮助识别价格趋势方向。',
  },
  {
    id: 29,
    category: '板块知识',
    question: '科创板股票代码以什么开头？',
    options: [
      { text: 'A. 000', isCorrect: false },
      { text: 'B. 002', isCorrect: false },
      { text: 'C. 300', isCorrect: false },
      { text: 'D. 688', isCorrect: true },
    ],
    explanation: '科创板股票代码以688开头，是上海证券交易所设立的板块，主要服务科技创新企业。',
  },
  {
    id: 30,
    category: '板块知识',
    question: '创业板股票代码以什么开头？',
    options: [
      { text: 'A. 000', isCorrect: false },
      { text: 'B. 002', isCorrect: false },
      { text: 'C. 300', isCorrect: true },
      { text: 'D. 688', isCorrect: false },
    ],
    explanation: '创业板股票代码以300开头，是深圳证券交易所设立的板块，主要服务成长型创新创业企业。',
  },
  {
    id: 31,
    category: 'ST股票',
    question: 'ST股票是指？',
    options: [
      { text: 'A. 特别优秀的股票', isCorrect: false },
      { text: 'B. 特别处理的股票（风险警示）', isCorrect: true },
      { text: 'C. 科技类股票', isCorrect: false },
      { text: 'D. 小盘股', isCorrect: false },
    ],
    explanation: 'ST（Special Treatment）是指财务状况异常或其他风险情况的股票，涨跌幅限制为±5%，投资风险较高。',
  },
  {
    id: 32,
    category: '融资融券',
    question: '融资交易是指？',
    options: [
      { text: 'A. 借钱买股票', isCorrect: true },
      { text: 'B. 借股票卖出', isCorrect: false },
      { text: 'C. 卖出股票换钱', isCorrect: false },
      { text: 'D. 股票质押', isCorrect: false },
    ],
    explanation: '融资交易是向券商借钱买股票，属于杠杆交易。融券交易是借股票卖出，属于做空交易。',
  },
  {
    id: 33,
    category: '融资融券',
    question: '开通融资融券需要多少资产门槛？',
    options: [
      { text: 'A. 10万', isCorrect: false },
      { text: 'B. 20万', isCorrect: false },
      { text: 'C. 50万', isCorrect: true },
      { text: 'D. 100万', isCorrect: false },
    ],
    explanation: '开通融资融券需要前20个交易日日均证券类资产不低于50万，且需要有半年以上交易经验。',
  },
  {
    id: 34,
    category: '指数知识',
    question: '上证指数的基准日是？',
    options: [
      { text: 'A. 1990年12月19日', isCorrect: true },
      { text: 'B. 1991年7月15日', isCorrect: false },
      { text: 'C. 1992年5月21日', isCorrect: false },
      { text: 'D. 1990年1月1日', isCorrect: false },
    ],
    explanation: '上证指数以1990年12月19日为基准日，基点为100点。这是上海证券交易所正式营业的日期。',
  },
  {
    id: 35,
    category: '指数知识',
    question: '沪深300指数包含多少只股票？',
    options: [
      { text: 'A. 100只', isCorrect: false },
      { text: 'B. 200只', isCorrect: false },
      { text: 'C. 300只', isCorrect: true },
      { text: 'D. 500只', isCorrect: false },
    ],
    explanation: '沪深300指数包含上海和深圳证券市场中市值大、流动性好的300只股票，反映A股市场整体走势。',
  },
  {
    id: 36,
    category: '价值投资',
    question: '巴菲特的投资核心理念是？',
    options: [
      { text: 'A. 短线频繁交易', isCorrect: false },
      { text: 'B. 买入好公司并长期持有', isCorrect: true },
      { text: 'C. 追涨杀跌', isCorrect: false },
      { text: 'D. 只买低价股', isCorrect: false },
    ],
    explanation: '巴菲特的价值投资核心理念是：以合理价格买入优秀公司，长期持有，让复利发挥作用。',
  },
  {
    id: 37,
    category: '价值投资',
    question: '"安全边际"是指？',
    options: [
      { text: 'A. 价格高于价值的部分', isCorrect: false },
      { text: 'B. 价值高于价格的部分', isCorrect: true },
      { text: 'C. 公司的利润率', isCorrect: false },
      { text: 'D. 股票的波动率', isCorrect: false },
    ],
    explanation: '安全边际是指股票内在价值与市场价格的差额。用0.6元买价值1元的东西，就有0.4元的安全边际。',
  },
  {
    id: 38,
    category: '风险认知',
    question: '系统性风险是指？',
    options: [
      { text: 'A. 单只股票的风险', isCorrect: false },
      { text: 'B. 影响整个市场的风险', isCorrect: true },
      { text: 'C. 行业风险', isCorrect: false },
      { text: 'D. 公司经营风险', isCorrect: false },
    ],
    explanation: '系统性风险是影响整个市场的风险，如经济衰退、利率变化、政策调整等，无法通过分散投资消除。',
  },
  {
    id: 39,
    category: '风险认知',
    question: '分散投资的主要目的是？',
    options: [
      { text: 'A. 提高收益', isCorrect: false },
      { text: 'B. 降低非系统性风险', isCorrect: true },
      { text: 'C. 增加交易乐趣', isCorrect: false },
      { text: 'D. 降低系统性风险', isCorrect: false },
    ],
    explanation: '分散投资可以降低非系统性风险（单只股票或行业的风险），但无法消除系统性风险。',
  },
  {
    id: 40,
    category: '复利',
    question: '复利被称为世界第几大奇迹？',
    options: [
      { text: 'A. 第五', isCorrect: false },
      { text: 'B. 第七', isCorrect: false },
      { text: 'C. 第八', isCorrect: true },
      { text: 'D. 第十', isCorrect: false },
    ],
    explanation: '爱因斯坦曾说复利是"世界第八大奇迹"。复利的力量在于利滚利，时间越长效果越显著。',
  },
  {
    id: 41,
    category: '复利',
    question: '年化收益率10%，大约多少年资产翻倍？（72法则）',
    options: [
      { text: 'A. 5年', isCorrect: false },
      { text: 'B. 7年', isCorrect: true },
      { text: 'C. 10年', isCorrect: false },
      { text: 'D. 15年', isCorrect: false },
    ],
    explanation: '根据72法则，翻倍年数 ≈ 72/年化收益率。10%收益率约7.2年翻倍。',
  },
  {
    id: 42,
    category: '行为金融',
    question: '"追涨杀跌"属于哪种心理偏差？',
    options: [
      { text: 'A. 过度自信', isCorrect: false },
      { text: 'B. 从众心理（羊群效应）', isCorrect: true },
      { text: 'C. 损失厌恶', isCorrect: false },
      { text: 'D. 锚定效应', isCorrect: false },
    ],
    explanation: '追涨杀跌是典型的从众心理（羊群效应），看到别人买就跟着买，看到别人卖就跟着卖。',
  },
  {
    id: 43,
    category: '行为金融',
    question: '投资者往往对亏损的感受比盈利更强烈，这称为？',
    options: [
      { text: 'A. 过度自信', isCorrect: false },
      { text: 'B. 损失厌恶', isCorrect: true },
      { text: 'C. 确认偏差', isCorrect: false },
      { text: 'D. 近期偏差', isCorrect: false },
    ],
    explanation: '损失厌恶是指人们对损失的痛苦感远大于同等收益的快乐感，通常损失的心理影响是收益的2倍以上。',
  },
  {
    id: 44,
    category: '资产配置',
    question: '"不要把鸡蛋放在一个篮子里"体现的是？',
    options: [
      { text: 'A. 集中投资', isCorrect: false },
      { text: 'B. 分散投资', isCorrect: true },
      { text: 'C. 激进投资', isCorrect: false },
      { text: 'D. 保守投资', isCorrect: false },
    ],
    explanation: '这句话强调分散投资的重要性，通过配置不同资产类别降低整体风险。',
  },
  {
    id: 45,
    category: '资产配置',
    question: '股债平衡策略中，当股票大涨后应该？',
    options: [
      { text: 'A. 买入更多股票', isCorrect: false },
      { text: 'B. 卖出部分股票，买入债券', isCorrect: true },
      { text: 'C. 全部卖出股票', isCorrect: false },
      { text: 'D. 不做任何操作', isCorrect: false },
    ],
    explanation: '股债平衡策略需要定期再平衡。股票大涨后，股票占比超配，应卖出部分股票买入债券，恢复目标比例。',
  },
  {
    id: 46,
    category: '财报基础',
    question: '资产负债表反映的是？',
    options: [
      { text: 'A. 公司一段时间的经营成果', isCorrect: false },
      { text: 'B. 公司某一时点的财务状况', isCorrect: true },
      { text: 'C. 公司的现金收支情况', isCorrect: false },
      { text: 'D. 公司的股东权益变动', isCorrect: false },
    ],
    explanation: '资产负债表反映公司在某一时点的财务状况，包括资产、负债和所有者权益。',
  },
  {
    id: 47,
    category: '财报基础',
    question: '利润表反映的是？',
    options: [
      { text: 'A. 公司某一时点的财务状况', isCorrect: false },
      { text: 'B. 公司一段时间的经营成果', isCorrect: true },
      { text: 'C. 公司的现金收支情况', isCorrect: false },
      { text: 'D. 公司的资产负债结构', isCorrect: false },
    ],
    explanation: '利润表反映公司在一段时期内的经营成果，包括收入、成本、费用和利润。',
  },
  {
    id: 48,
    category: '财报基础',
    question: '现金流量表中的"经营性现金流"为负说明？',
    options: [
      { text: 'A. 公司盈利', isCorrect: false },
      { text: 'B. 公司主营业务现金流出大于流入', isCorrect: true },
      { text: 'C. 公司投资活跃', isCorrect: false },
      { text: 'D. 公司分红较多', isCorrect: false },
    ],
    explanation: '经营性现金流为负说明公司主营业务消耗现金，可能是应收账款过多或存货积压，需要关注。',
  },
  {
    id: 49,
    category: '宏观影响',
    question: '央行降息对股市通常是？',
    options: [
      { text: 'A. 利空', isCorrect: false },
      { text: 'B. 利好', isCorrect: true },
      { text: 'C. 无影响', isCorrect: false },
      { text: 'D. 不确定', isCorrect: false },
    ],
    explanation: '降息降低企业融资成本，提高股票相对吸引力（相比债券、存款），通常利好股市。',
  },
  {
    id: 50,
    category: '宏观影响',
    question: '通货膨胀对股市的影响是？',
    options: [
      { text: 'A. 温和通胀有利，高通胀不利', isCorrect: true },
      { text: 'B. 任何通胀都不利', isCorrect: false },
      { text: 'C. 任何通胀都有利', isCorrect: false },
      { text: 'D. 无影响', isCorrect: false },
    ],
    explanation: '温和通胀（2-3%）有利于企业盈利增长，但高通胀会导致成本上升、购买力下降，对股市不利。',
  },
]

function MarketQuiz() {
  const navigate = useNavigate()
  const { saveTestResult } = useAuth()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState({}) // 记录已答题
  const [showNavigator, setShowNavigator] = useState(false)

  const q = quizQuestions[currentIndex]
  const answeredCount = Object.keys(answeredQuestions).length
  const correctCount = Object.values(answeredQuestions).filter(v => v).length

  const handleAnswer = (optionIndex) => {
    if (showExplanation) return
    setSelectedAnswer(optionIndex)
    setShowExplanation(true)
    setAnsweredQuestions(prev => ({
      ...prev,
      [q.id]: q.options[optionIndex].isCorrect
    }))
  }

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const handleJumpTo = (index) => {
    setCurrentIndex(index)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setShowNavigator(false)
  }

  const handleFinish = () => {
    saveTestResult('marketQuiz', { score: correctCount, total: quizQuestions.length })
    navigate('/zhi')
  }

  // 获取分类颜色
  const getCategoryColor = (category) => {
    const colors = {
      '市场规模': '#4A90D9',
      '上市公司': '#2ECC71',
      '交易制度': '#E74C3C',
      '涨跌幅限制': '#F39C12',
      '投资者结构': '#9B59B6',
      '资金结构': '#1ABC9C',
      '港股通': '#E67E22',
      '美股交易': '#3498DB',
      '港股结构': '#27AE60',
      '北向资金': '#8E44AD',
      '港股规则': '#16A085',
      '美股结构': '#2980B9',
      '股票基础': '#C0392B',
      '新股申购': '#D35400',
      '新股上市': '#7F8C8D',
      '交易时间': '#2C3E50',
      '交易费用': '#F1C40F',
      '基金基础': '#00CED1',
      '基金定投': '#20B2AA',
      '估值指标': '#FF6347',
      '分红': '#3CB371',
      '风险控制': '#DC143C',
      '技术分析': '#4169E1',
      '板块知识': '#8A2BE2',
      'ST股票': '#FF4500',
      '融资融券': '#4682B4',
      '指数知识': '#32CD32',
      '价值投资': '#6495ED',
      '风险认知': '#FFD700',
      '复利': '#00FA9A',
      '行为金融': '#DA70D6',
      '资产配置': '#87CEEB',
      '财报基础': '#98FB98',
      '宏观影响': '#F0E68C',
    }
    return colors[category] || '#4A90D9'
  }

  return (
    <div className="market-quiz-page">
      <button className="page-back" onClick={() => navigate('/zhi')}>
        <span>←</span> 返回认知篇
      </button>

      <div className="quiz-header">
        <div className="quiz-badge">📊</div>
        <h1>认知市场 · 知识问答</h1>
        <p>共{quizQuestions.length}题，点击题号可跳转</p>
      </div>

      {/* 进度和统计 */}
      <div className="quiz-progress">
        <div className="progress-info">
          <span>第 {currentIndex + 1} / {quizQuestions.length} 题</span>
          <span>已答 {answeredCount} 题 · 正确 {correctCount} 题</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(answeredCount / quizQuestions.length) * 100}%` }} />
        </div>
      </div>

      {/* 题目导航 */}
      <div style={{ padding: '0 16px 16px' }}>
        <button
          onClick={() => setShowNavigator(!showNavigator)}
          style={{
            width: '100%',
            padding: '10px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '8px',
            color: 'var(--text-secondary)',
            fontSize: '13px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span>📋 题目导航</span>
          <span>{showNavigator ? '收起 ▲' : '展开 ▼'}</span>
        </button>
        
        {showNavigator && (
          <div style={{
            marginTop: '12px',
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 1fr)',
            gap: '6px',
          }}>
            {quizQuestions.map((q, idx) => {
              const isAnswered = answeredQuestions[q.id] !== undefined
              const isCorrect = answeredQuestions[q.id]
              const isCurrent = idx === currentIndex
              return (
                <button
                  key={q.id}
                  onClick={() => handleJumpTo(idx)}
                  style={{
                    aspectRatio: '1',
                    borderRadius: '6px',
                    border: isCurrent ? '2px solid var(--zhi)' : '1px solid rgba(255,255,255,0.1)',
                    background: isAnswered
                      ? (isCorrect ? 'rgba(46, 204, 113, 0.2)' : 'rgba(231, 76, 60, 0.2)')
                      : 'rgba(255,255,255,0.03)',
                    color: isAnswered
                      ? (isCorrect ? '#2ECC71' : '#E74C3C')
                      : (isCurrent ? 'var(--zhi)' : 'var(--text-dim)'),
                    fontSize: '12px',
                    fontWeight: isCurrent ? 600 : 400,
                    cursor: 'pointer',
                  }}
                >
                  {idx + 1}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* 题目内容 */}
      <div className="quiz-content">
        <div className="quiz-card">
          <div 
            className="quiz-category"
            style={{ background: `${getCategoryColor(q.category)}20`, color: getCategoryColor(q.category) }}
          >
            {q.category}
          </div>
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

        {/* 导航按钮 */}
        <div className="quiz-next" style={{ display: 'flex', gap: '12px', justifyContent: 'space-between' }}>
          <button
            className="btn btn-secondary"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
          >
            ← 上一题
          </button>
          {currentIndex < quizQuestions.length - 1 ? (
            <button className="btn btn-primary" onClick={handleNext}>
              下一题 →
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleFinish}>
              完成 ({correctCount}/{answeredCount})
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default MarketQuiz
