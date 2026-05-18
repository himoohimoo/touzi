import { useNavigate } from 'react-router-dom'

function ValueInvesting() {
  const navigate = useNavigate()

  return (
    <div className="sub-page">
      <div className="page-header">
        <button className="page-back" onClick={() => navigate('/heng')}>
          <span>←</span> 返回体系篇
        </button>
        <div className="page-badge" style={{ background: 'linear-gradient(145deg, #27ae60, #1e8449)' }}>
          💎
        </div>
        <h1>价值投资精髓</h1>
        <p>巴菲特的投资哲学：好公司 + 好价格 + 长期持有</p>
      </div>

      {/* 核心三要素 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
        }}>
          {[
            { icon: '🏢', title: '好公司', desc: 'ROE持续优秀', color: '#4A90D9' },
            { icon: '🏷️', title: '好价格', desc: 'PE合理偏低', color: '#2ECC71' },
            { icon: '⏳', title: '长期持有', desc: '基本面不变不卖', color: '#F39C12' },
          ].map((item, i) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: '20px 12px',
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid ${item.color}30`,
              borderRadius: '12px',
            }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>{item.icon}</div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: item.color, marginBottom: '4px' }}>{item.title}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 巴菲特名言 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(39, 174, 96, 0.1), rgba(30, 132, 73, 0.05))',
          border: '1px solid rgba(39, 174, 96, 0.2)',
          borderRadius: '12px',
          padding: '20px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '15px', color: 'var(--text-primary)', fontStyle: 'italic', lineHeight: 1.8, margin: 0 }}>
            "投资很简单，但不容易。你所需要做的，就是以低于其内在价值的价格，<br />
            买入一家优秀企业的股票，然后耐心持有。"
          </p>
          <p style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '10px', marginBottom: 0 }}>—— 沃伦·巴菲特</p>
        </div>
      </div>

      {/* 要素一：好公司 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>🏢</span>
            <div>
              <h2 style={{ fontSize: '18px', color: '#4A90D9', margin: 0 }}>要素一：好公司</h2>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '4px 0 0' }}>巴菲特的核心选股标准</p>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '16px' }}>
            巴菲特说：<strong>"如果只能选一个指标来选股，我会选ROE。"</strong>
            ROE（净资产收益率）是衡量公司为股东创造利润能力的核心指标。
            一家持续高ROE的公司，说明管理层善于运用股东资金，具有强大的竞争优势。
          </p>

          {/* ROE指标 */}
          <div style={{
            background: 'rgba(74, 144, 217, 0.08)',
            border: '1px solid rgba(74, 144, 217, 0.2)',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#4A90D9', marginBottom: '12px' }}>
              📊 ROE（净资产收益率）= 净利润 ÷ 净资产
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
              <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px' }}>
                <div style={{ fontSize: '20px', fontWeight: 700, color: '#E74C3C' }}>&lt; 10%</div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>一般公司<br/>资本回报低</div>
              </div>
              <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px' }}>
                <div style={{ fontSize: '20px', fontWeight: 700, color: '#F39C12' }}>10-15%</div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>良好公司<br/>值得关注</div>
              </div>
              <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px' }}>
                <div style={{ fontSize: '20px', fontWeight: 700, color: '#2ECC71' }}>&gt; 15%</div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>优秀公司<br/>巴菲特首选</div>
              </div>
            </div>
          </div>

          {/* 好公司标准清单 */}
          <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
            ✅ 巴菲特的好公司标准：
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { icon: '🏰', title: '经济护城河', desc: '品牌、专利、规模效应、网络效应——让竞争对手难以进入' },
              { icon: '💰', title: 'ROE持续高于15%', desc: '连续5年以上ROE大于15%，证明公司持续为股东创造价值' },
              { icon: '📈', title: '净利润稳定增长', desc: '不需要暴增，但要稳定增长，避免大起大落' },
              { icon: '🧾', title: '自由现金流充裕', desc: '赚的是真金白银，不是纸面利润，能持续分红或回购' },
              { icon: '👨‍💼', title: '优秀的管理层', desc: '诚实、理性、以股东利益为先，能合理配置资本' },
              { icon: '🎯', title: '简单易懂的商业模式', desc: '巴菲特只投自己能看懂的公司，能力圈内做决策' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '12px',
                padding: '12px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '8px',
                borderLeft: '3px solid #4A90D9',
              }}>
                <span style={{ fontSize: '18px', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 要素二：好价格 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>🏷️</span>
            <div>
              <h2 style={{ fontSize: '18px', color: '#2ECC71', margin: 0 }}>要素二：好价格</h2>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '4px 0 0' }}>安全边际是投资的核心</p>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '16px' }}>
            巴菲特的老师格雷厄姆说：<strong>"价格是你付出的，价值是你得到的。"</strong>
            即使是好公司，如果买入价格太高，也不是一笔好投资。
            PE（市盈率）是判断价格是否合理的重要参考指标。
          </p>

          {/* PE指标 */}
          <div style={{
            background: 'rgba(46, 204, 113, 0.08)',
            border: '1px solid rgba(46, 204, 113, 0.2)',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#2ECC71', marginBottom: '12px' }}>
              📊 PE（市盈率）= 股价 ÷ 每股收益 = 总市值 ÷ 净利润
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '12px' }}>
              PE代表你愿意为公司的每1元利润支付多少钱。PE越低，回本越快。
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '8px' }}>
              <div style={{ textAlign: 'center', padding: '10px 6px', background: 'rgba(46, 204, 113, 0.15)', borderRadius: '8px' }}>
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#2ECC71' }}>&lt; 10</div>
                <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginTop: '4px' }}>严重低估<br/>绝佳机会</div>
              </div>
              <div style={{ textAlign: 'center', padding: '10px 6px', background: 'rgba(74, 144, 217, 0.1)', borderRadius: '8px' }}>
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#4A90D9' }}>10-20</div>
                <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginTop: '4px' }}>合理偏低<br/>可以考虑</div>
              </div>
              <div style={{ textAlign: 'center', padding: '10px 6px', background: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px' }}>
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#F39C12' }}>20-30</div>
                <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginTop: '4px' }}>合理偏高<br/>谨慎买入</div>
              </div>
              <div style={{ textAlign: 'center', padding: '10px 6px', background: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px' }}>
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#E74C3C' }}>&gt; 30</div>
                <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginTop: '4px' }}>高估<br/>远离为好</div>
              </div>
            </div>
          </div>

          {/* 安全边际 */}
          <div style={{
            background: 'rgba(243, 156, 18, 0.08)',
            border: '1px solid rgba(243, 156, 18, 0.2)',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#F39C12', marginBottom: '8px' }}>
              🛡️ 安全边际
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              巴菲特强调，买入价格要<strong style={{ color: 'var(--text-primary)' }}>远低于内在价值</strong>，
              中间的差价就是"安全边际"。比如公司价值100元，你用60元买入，
              就有40元的安全边际，即使判断有误差，也不容易亏大钱。
            </p>
          </div>

          {/* 好价格注意事项 */}
          <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
            ⚠️ PE使用注意事项：
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              'PE要和同行业公司对比，不同行业PE差异很大（银行8倍 vs 科技30倍）',
              'PE要和公司历史PE对比，看当前处于什么分位',
              '周期股在利润高峰时PE最低，反而是危险信号',
              '亏损公司没有PE，需要用其他方式估值（如PB、PS）',
              '高增长公司可以给更高PE，但要确保增长可持续',
            ].map((tip, i) => (
              <div key={i} style={{
                fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6,
                padding: '8px 12px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '6px',
                borderLeft: '2px solid rgba(243, 156, 18, 0.3)',
              }}>
                {i + 1}. {tip}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 要素三：长期持有 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>⏳</span>
            <div>
              <h2 style={{ fontSize: '18px', color: '#F39C12', margin: 0 }}>要素三：长期持有</h2>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '4px 0 0' }}>时间是好公司的朋友</p>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '16px' }}>
            巴菲特说：<strong>"如果你不愿意拥有一只股票10年，那就不要考虑拥有它10分钟。"</strong>
            长期持有并不是永远不卖，而是只要公司的基本面没有发生根本变化，
            就忽略日常的价格波动，让复利发挥作用。
          </p>

          {/* 长期持有的逻辑 */}
          <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
            🧠 长期持有的底层逻辑：
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
            {[
              { icon: '🌱', title: '企业成长', desc: '好公司的利润会持续增长，推动股价长期上涨' },
              { icon: '🔄', title: '复利效应', desc: '利润再投资 → 更多利润 → 股价复利增长，时间越长效果越惊人' },
              { icon: '💰', title: '分红回报', desc: '持有期间持续获得现金分红，增加总回报' },
              { icon: '📉', title: '避免摩擦成本', desc: '减少交易频率，节省手续费和印花税' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '12px',
                padding: '12px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '8px',
                borderLeft: '3px solid #F39C12',
              }}>
                <span style={{ fontSize: '18px', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* 什么时候该卖 */}
          <div style={{
            background: 'rgba(231, 76, 60, 0.08)',
            border: '1px solid rgba(231, 76, 60, 0.2)',
            borderRadius: '12px',
            padding: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#E74C3C', marginBottom: '10px' }}>
              🚨 什么时候应该卖出？
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '10px', margin: '0 0 10px 0' }}>
              长期持有 ≠ 永远不卖。巴菲特卖出股票的三个条件：
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                '基本面恶化：公司的护城河被破坏，ROE持续下滑',
                '价格严重高估：PE远超历史高位，远高于内在价值',
                '发现更好的机会：有更便宜、更优秀的公司可以买入',
              ].map((reason, i) => (
                <div key={i} style={{
                  fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6,
                  padding: '8px 12px',
                  background: 'rgba(231, 76, 60, 0.05)',
                  borderRadius: '6px',
                }}>
                  <strong style={{ color: '#E74C3C' }}>{i + 1}.</strong> {reason}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 价值股案例 */}
      <div style={{ padding: '0 20px 40px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', margin: '0 0 20px', textAlign: 'center' }}>
            📋 价值投资经典案例
          </h2>

          {/* 美股案例 */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '15px', fontWeight: 600, color: '#4A90D9', marginBottom: '12px' }}>
              🇺🇸 美股价值股代表
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                {
                  name: '可口可乐 (KO)',
                  reason: '巴菲特1988年买入，持有至今超35年',
                  roe: '~30%',
                  pe: '~25倍',
                  highlight: '品牌护城河极深，全球分销网络，持续分红超60年',
                  color: '#E74C3C',
                },
                {
                  name: '苹果 (AAPL)',
                  reason: '巴菲特2016年开始买入，成为第一大重仓股',
                  roe: '~150%',
                  pe: '~30倍',
                  highlight: '生态系统护城河，高利润率，大规模回购+分红',
                  color: '#555',
                },
                {
                  name: '美国运通 (AXP)',
                  reason: '巴菲特持有超30年，经典价值投资案例',
                  roe: '~30%',
                  pe: '~15倍',
                  highlight: '品牌价值高，客户粘性强，金融网络效应',
                  color: '#4A90D9',
                },
                {
                  name: '穆迪 (MCO)',
                  reason: '巴菲特2000年买入，持有至今',
                  roe: '~25%',
                  pe: '~28倍',
                  highlight: '评级市场双寡头垄断，高利润率，轻资产运营',
                  color: '#2ECC71',
                },
              ].map((stock, i) => (
                <div key={i} style={{
                  padding: '16px',
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid rgba(255,255,255,0.04)`,
                  borderRadius: '12px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>{stock.name}</strong>
                    <span style={{ fontSize: '11px', color: 'var(--text-dim)' }}>{stock.reason}</span>
                  </div>
                  <p style={{ fontSize: '12px', color: stock.color, fontWeight: 500, marginBottom: '8px', margin: '0 0 8px 0' }}>
                    {stock.highlight}
                  </p>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>ROE: <strong style={{ color: '#4A90D9' }}>{stock.roe}</strong></span>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>PE: <strong style={{ color: '#2ECC71' }}>{stock.pe}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* A股案例 */}
          <div>
            <div style={{ fontSize: '15px', fontWeight: 600, color: '#E74C3C', marginBottom: '12px' }}>
              🇨🇳 A股价值股代表
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                {
                  name: '贵州茅台 (600519)',
                  reason: 'A股价值投资标杆，品牌护城河极深',
                  roe: '~30%',
                  pe: '~25倍',
                  highlight: '白酒龙头，定价权极强，毛利率90%+，持续高分红',
                  color: '#E74C3C',
                },
                {
                  name: '长江电力 (600900)',
                  reason: '巴菲特式投资：稳定现金流+高分红',
                  roe: '~16%',
                  pe: '~20倍',
                  highlight: '水电龙头，现金流稳定，股息率4%+，类债券资产',
                  color: '#4A90D9',
                },
                {
                  name: '招商银行 (600036)',
                  reason: '银行股中的优质标的',
                  roe: '~15%',
                  pe: '~6倍',
                  highlight: '零售银行龙头，ROE在银行中领先，分红稳定',
                  color: '#2ECC71',
                },
                {
                  name: '中国神华 (601088)',
                  reason: '高股息价值股代表',
                  roe: '~13%',
                  pe: '~10倍',
                  highlight: '煤炭龙头，高现金流，股息率6%+，低估值',
                  color: '#F39C12',
                },
                {
                  name: '美的集团 (000333)',
                  reason: '制造业价值投资典范',
                  roe: '~25%',
                  pe: '~15倍',
                  highlight: '家电龙头，管理层优秀，全球化布局，持续回购',
                  color: '#9B59B6',
                },
              ].map((stock, i) => (
                <div key={i} style={{
                  padding: '16px',
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid rgba(255,255,255,0.04)`,
                  borderRadius: '12px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>{stock.name}</strong>
                    <span style={{ fontSize: '11px', color: 'var(--text-dim)' }}>{stock.reason}</span>
                  </div>
                  <p style={{ fontSize: '12px', color: stock.color, fontWeight: 500, marginBottom: '8px', margin: '0 0 8px 0' }}>
                    {stock.highlight}
                  </p>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>ROE: <strong style={{ color: '#4A90D9' }}>{stock.roe}</strong></span>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>PE: <strong style={{ color: '#2ECC71' }}>{stock.pe}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 免责声明 */}
          <div style={{
            marginTop: '20px',
            padding: '12px',
            background: 'rgba(243, 156, 18, 0.08)',
            border: '1px solid rgba(243, 156, 18, 0.15)',
            borderRadius: '8px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '11px', color: 'var(--text-dim)', margin: 0 }}>
              ⚠️ 以上案例仅供学习参考，不构成投资建议。投资有风险，入市需谨慎。
              <br />
              ROE和PE数据为近似值，实际数据请以公司最新财报为准。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ValueInvesting
