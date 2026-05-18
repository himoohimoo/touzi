import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function MarketVolatility() {
  const navigate = useNavigate()
  const [showTModal, setShowTModal] = useState(false)

  return (
    <div className="sub-page">
      <div className="page-header">
        <button className="page-back" onClick={() => navigate('/xing')}>
          <span>←</span> 返回实践篇
        </button>
        <div className="page-badge" style={{ background: 'linear-gradient(145deg, #3498db, #2980b9)' }}>
          🌊
        </div>
        <h1>如何对待波动</h1>
        <p>股市唯一不变的就是剧烈波动</p>
      </div>

      {/* 开篇引言 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.12), rgba(41, 128, 185, 0.06))',
          border: '1px solid rgba(52, 152, 219, 0.25)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <p style={{ fontSize: '16px', color: 'var(--text-primary)', lineHeight: 1.8, margin: '0 0 16px', fontWeight: 500 }}>
            "股市唯一不变的就是剧烈波动"
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
            很多投资者被波动吓出局，在恐慌中卖出，在贪婪中追高。
            理解波动的来源和本质，是穿越牛熊的必修课。
          </p>
        </div>
      </div>

      {/* 做T按钮 */}
      <div style={{ padding: '0 20px 24px' }}>
        <button 
          onClick={() => setShowTModal(true)}
          style={{
            width: '100%',
            padding: '16px 24px',
            background: 'linear-gradient(135deg, rgba(155, 89, 182, 0.15), rgba(142, 68, 173, 0.1))',
            border: '1px solid rgba(155, 89, 182, 0.3)',
            borderRadius: '12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            transition: 'all 0.2s ease',
          }}
        >
          <span style={{ fontSize: '20px' }}>❓</span>
          <span style={{ fontSize: '15px', fontWeight: 600, color: '#9B59B6' }}>波动中能做T么？</span>
        </button>
      </div>

      {/* 一、波动的来源 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>📈</span>
            <div>
              <h2 style={{ fontSize: '18px', color: '#3498DB', margin: 0 }}>一、波动的来源</h2>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '4px 0 0' }}>理解波动，才能不被波动左右</p>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '16px' }}>
            波动提供<strong>流动性</strong>，成交量越大，说明市场越热闹。
            但热闹的背后，是各种力量的博弈：
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              {
                icon: '🤖',
                title: '量化资本频繁买卖',
                desc: '程序化交易、高频交易、算法交易，毫秒级的买卖创造了巨大的成交量，也带来了短期波动。',
                color: '#9B59B6'
              },
              {
                icon: '📰',
                title: '消息满天飞导致买卖',
                desc: '利好消息刺激买入，利空消息引发抛售。但大部分消息只是噪音，对公司的长期价值没有影响。',
                color: '#E67E22'
              },
              {
                icon: '😰',
                title: '小赚就跑，小亏死扛',
                desc: '散户的典型行为：赚了一点就急着落袋为安，亏了却抱着"回本再卖"的执念，导致追涨杀跌。',
                color: '#E74C3C'
              },
              {
                icon: '🏦',
                title: '基金的被动买入卖出',
                desc: '公募基金面临申购赎回压力，被迫买卖；指数基金调仓、ETF申赎，都会带来被动交易量。',
                color: '#2ECC71'
              },
              {
                icon: '💸',
                title: '杠杆资金的平仓',
                desc: '融资盘、质押盘触及平仓线时，会触发强制卖出，造成"下跌→平仓→更多下跌"的负反馈。',
                color: '#E74C3C'
              },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '16px',
                background: `${item.color}08`,
                border: `1px solid ${item.color}20`,
                borderRadius: '12px',
                display: 'flex',
                gap: '12px',
              }}>
                <span style={{ fontSize: '24px' }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: item.color, marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 二、波动背后的本质 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>🔬</span>
            <div>
              <h2 style={{ fontSize: '18px', color: '#27AE60', margin: 0 }}>二、波动背后的本质</h2>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '4px 0 0' }}>看透本质，才能从容应对</p>
            </div>
          </div>

          {/* 价值变化 vs 情绪变化 */}
          <div style={{
            padding: '16px',
            background: 'rgba(46, 204, 113, 0.08)',
            border: '1px solid rgba(46, 204, 113, 0.2)',
            borderRadius: '12px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#2ECC71', marginBottom: '12px' }}>
              💰 公司价值的变化
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 12px' }}>
              公司的内在价值不会天天变化，往往在<strong>定期财报发布</strong>时才会呈现明显变化。
              一份超预期的财报可能让价值提升，一份不及预期的财报可能让价值下降。
            </p>
            <div style={{
              padding: '12px',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '8px',
              fontSize: '12px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}>
              <strong style={{ color: '#2ECC71' }}>关键认知：</strong>股价每天波动，但公司价值不会每天变化。
              大部分波动与价值无关，只是情绪的起伏。
            </div>
          </div>

          <div style={{
            padding: '16px',
            background: 'rgba(231, 76, 60, 0.08)',
            border: '1px solid rgba(231, 76, 60, 0.2)',
            borderRadius: '12px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#E74C3C', marginBottom: '12px' }}>
              😰 情绪的变化造成巨大波动
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              恐惧和贪婪是波动的放大器。当市场恐慌时，好公司也会被错杀；
              当市场疯狂时，垃圾股也能飞天。<strong>情绪波动远大于价值波动</strong>，
              这就是为什么股价经常涨过头、跌过头。
            </p>
          </div>

          <div style={{
            padding: '16px',
            background: 'rgba(243, 156, 18, 0.08)',
            border: '1px solid rgba(243, 156, 18, 0.2)',
            borderRadius: '12px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#F39C12', marginBottom: '12px' }}>
              📢 大部分的消息都是假消息
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 12px' }}>
              市场上充斥着各种消息：传闻、谣言、分析师观点、大V言论……
              但真正影响公司长期价值的消息<strong>少之又少</strong>。
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['行业政策', '财报数据', '重大并购', '核心产品'].map((tag, i) => (
                <span key={i} style={{
                  padding: '6px 12px',
                  background: 'rgba(46, 204, 113, 0.15)',
                  borderRadius: '16px',
                  fontSize: '12px',
                  color: '#2ECC71',
                }}>✓ {tag}</span>
              ))}
              {['小道传闻', '分析师评级', '大V观点', '短期利好'].map((tag, i) => (
                <span key={i} style={{
                  padding: '6px 12px',
                  background: 'rgba(231, 76, 60, 0.15)',
                  borderRadius: '16px',
                  fontSize: '12px',
                  color: '#E74C3C',
                }}>✗ {tag}</span>
              ))}
            </div>
          </div>

          <div style={{
            padding: '16px',
            background: 'rgba(155, 89, 182, 0.08)',
            border: '1px solid rgba(155, 89, 182, 0.2)',
            borderRadius: '12px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#9B59B6', marginBottom: '12px' }}>
              🧠 独立思考非常重要
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              不要被消息牵着鼻子走。每一条消息，都要问自己：
              <strong style={{ color: '#9B59B6' }}>这对公司的长期价值有影响吗？</strong>
              如果没有，那就只是噪音，不值得为此交易。
            </p>
          </div>
        </div>
      </div>

      {/* 三、懂价值，跌应该兴奋 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>💎</span>
            <div>
              <h2 style={{ fontSize: '18px', color: '#E74C3C', margin: 0 }}>三、你懂公司价值，股价跌应该兴奋</h2>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '4px 0 0' }}>逆向思维，是超额收益的来源</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* 步骤1 */}
            <div style={{
              padding: '20px',
              background: 'rgba(52, 152, 219, 0.08)',
              border: '1px solid rgba(52, 152, 219, 0.2)',
              borderRadius: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{
                  width: '28px', height: '28px',
                  background: '#3498DB',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: 700, color: '#fff',
                }}>1</span>
                <strong style={{ fontSize: '16px', color: '#3498DB' }}>你要真正懂公司的价值</strong>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                这是前提。如果你只是道听途说买入，根本不知道公司值多少钱，
                那股价下跌时你只会恐慌，而不是兴奋。<strong>深入研究</strong>是逆向投资的底气。
              </p>
            </div>

            {/* 步骤2 */}
            <div style={{
              padding: '20px',
              background: 'rgba(243, 156, 18, 0.08)',
              border: '1px solid rgba(243, 156, 18, 0.2)',
              borderRadius: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{
                  width: '28px', height: '28px',
                  background: '#F39C12',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: 700, color: '#fff',
                }}>2</span>
                <strong style={{ fontSize: '16px', color: '#F39C12' }}>面对市场对股价的错估</strong>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                市场经常犯错。有时过度乐观，把垃圾股捧上天；有时过度悲观，把好公司打入地狱。
                <strong>你的机会，就来自于市场的错误</strong>——但前提是你能识别这是错误。
              </p>
            </div>

            {/* 步骤3 */}
            <div style={{
              padding: '20px',
              background: 'rgba(46, 204, 113, 0.08)',
              border: '1px solid rgba(46, 204, 113, 0.2)',
              borderRadius: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{
                  width: '28px', height: '28px',
                  background: '#2ECC71',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: 700, color: '#fff',
                }}>3</span>
                <strong style={{ fontSize: '16px', color: '#2ECC71' }}>应该继续买入——这点最难做到</strong>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '12px' }}>
                知道是机会，和敢于行动，是两回事。当股价暴跌、舆论唱衰、账户浮亏时，
                继续买入需要<strong>极大的勇气和定力</strong>。但这也正是最好的盈利机会。
              </p>
              <div style={{
                padding: '12px',
                background: 'rgba(46, 204, 113, 0.1)',
                borderRadius: '8px',
                fontSize: '12px',
                color: '#2ECC71',
                lineHeight: 1.6,
              }}>
                <strong>利用市场错估来赚取超额利润</strong><br/>
                别人恐慌时你贪婪，别人贪婪时你恐慌——这话说起来容易，做起来极难。
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 巴菲特案例 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(243, 156, 18, 0.1), rgba(230, 126, 34, 0.05))',
          border: '1px solid rgba(243, 156, 18, 0.25)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>📖</span>
            <div>
              <h2 style={{ fontSize: '18px', color: '#F39C12', margin: 0 }}>经典案例：巴菲特逆势买入苹果</h2>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '4px 0 0' }}>大师如何利用市场恐慌</p>
            </div>
          </div>

          <div style={{
            padding: '16px',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '12px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '10px' }}>
              📅 背景：2016年的苹果
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              2016年，苹果公司面临诸多质疑：iPhone销量增长放缓、中国市场担忧、
              与FBI的解锁争议……市场情绪低迷，股价在90-100美元区间徘徊，
              PE仅约10倍，被市场视为"增长故事已结束"的成熟公司。
            </p>
          </div>

          <div style={{
            padding: '16px',
            background: 'rgba(46, 204, 113, 0.08)',
            borderRadius: '12px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#2ECC71', marginBottom: '10px' }}>
              🧠 巴菲特的独立判断
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              <p style={{ margin: '0 0 10px' }}>
                巴菲特此前一直回避科技股，认为"看不懂"。但在深入研究苹果后，他改变了看法：
              </p>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li style={{ marginBottom: '6px' }}><strong>强大的品牌护城河</strong>：iPhone用户忠诚度极高，形成生态锁定</li>
                <li style={{ marginBottom: '6px' }}><strong>惊人的盈利能力</strong>：ROE超过100%，现金流充沛</li>
                <li style={{ marginBottom: '6px' }}><strong>估值极具吸引力</strong>：PE仅10倍，远低于市场平均</li>
                <li><strong>回购和分红</strong>：公司积极回购股票、发放股息，回馈股东</li>
              </ul>
            </div>
          </div>

          <div style={{
            padding: '16px',
            background: 'rgba(52, 152, 219, 0.08)',
            borderRadius: '12px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#3498DB', marginBottom: '10px' }}>
              💰 逆势买入，重仓持有
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              2016年5月起，巴菲特开始大举买入苹果。到2018年，伯克希尔持有约5%的苹果股份，
              成本约360亿美元。此后几年，苹果股价一路上涨，这笔投资增值至<strong>超过1500亿美元</strong>，
              成为巴菲特最成功的投资之一。
            </p>
          </div>

          <div style={{
            padding: '16px',
            background: 'rgba(155, 89, 182, 0.08)',
            borderRadius: '12px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#9B59B6', marginBottom: '10px' }}>
              💡 案例启示
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                '市场悲观时，好公司可能被严重低估',
                '独立研究让你看到市场看不到的价值',
                '敢于逆势买入，才能获得超额收益',
                '长期持有，让时间放大你的正确',
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                }}>
                  <span style={{ color: '#9B59B6', fontSize: '14px' }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 做T弹窗 */}
      {showTModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
          }}
          onClick={() => setShowTModal(false)}
        >
          <div 
            style={{
              background: 'var(--card-bg)',
              borderRadius: '20px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '80vh',
              overflowY: 'auto',
              padding: '28px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span style={{ fontSize: '28px' }}>❓</span>
              <h2 style={{ fontSize: '20px', color: 'var(--text-primary)', margin: 0 }}>波动中能做T么？</h2>
            </div>

            {/* 争议 */}
            <div style={{
              padding: '16px',
              background: 'rgba(243, 156, 18, 0.08)',
              border: '1px solid rgba(243, 156, 18, 0.2)',
              borderRadius: '12px',
              marginBottom: '16px',
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#F39C12', marginBottom: '12px' }}>
                🗣️ 做T的争议
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{
                  padding: '12px',
                  background: 'rgba(231, 76, 60, 0.08)',
                  borderRadius: '8px',
                }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#E74C3C', marginBottom: '6px' }}>反对观点：</div>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    做T就不是价值投资，做T就是投机的表现。
                    频繁交易会增加成本，还可能卖飞好股票。
                  </p>
                </div>
                <div style={{
                  padding: '12px',
                  background: 'rgba(46, 204, 113, 0.08)',
                  borderRadius: '8px',
                }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#2ECC71', marginBottom: '6px' }}>支持观点：</div>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    股价波动剧烈，我的资金量不够，做T来平滑一下波动，
                    增加一下短期收益，自己心理更舒服。
                  </p>
                </div>
              </div>
            </div>

            {/* 总结 */}
            <div style={{
              padding: '20px',
              background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.12), rgba(41, 128, 185, 0.06))',
              border: '1px solid rgba(52, 152, 219, 0.25)',
              borderRadius: '12px',
              marginBottom: '16px',
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#3498DB', marginBottom: '12px' }}>
                💡 总结
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.8, margin: '0 0 16px' }}>
                市场没有<strong>唯一</strong>的赚钱方法，也没有唯一的价值投资方法。
              </p>
              <div style={{
                padding: '16px',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '10px',
              }}>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
                  就像你乘船驶向彼岸：
                </p>
                <ul style={{ margin: '12px 0 0', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  <li>如果船特别大，你小规模做T就像划桨，收益可以忽略</li>
                  <li>如果你是艘小船，划桨会增加你的安全感</li>
                </ul>
                <p style={{ fontSize: '14px', color: '#3498DB', fontWeight: 600, marginTop: '12px', marginBottom: 0 }}>
                  最关键的是驶往的方向——盯着公司的价值。
                </p>
              </div>
            </div>

            {/* 建议 */}
            <div style={{
              padding: '16px',
              background: 'rgba(155, 89, 182, 0.08)',
              border: '1px solid rgba(155, 89, 182, 0.2)',
              borderRadius: '12px',
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#9B59B6', marginBottom: '12px' }}>
                📝 实操建议
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  '做T仓位不超过总仓位的20%，保留底仓不动',
                  '设定明确的买卖规则，避免情绪化交易',
                  '做T收益预期要合理，年化10%-20%即可',
                  '如果做T让你焦虑、睡不好，就别做',
                  '永远记住：方向比划桨更重要',
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}>
                    <span style={{ color: '#9B59B6' }}>•</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setShowTModal(false)}
              style={{
                marginTop: '20px',
                width: '100%',
                padding: '12px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                color: 'var(--text-secondary)',
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              关闭
            </button>
          </div>
        </div>
      )}

      {/* 应对波动的原则 */}
      <div style={{ padding: '0 20px 40px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', margin: '0 0 20px', textAlign: 'center' }}>
            📋 应对波动的核心原则
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { title: '认知层面', items: ['理解波动是常态，不是风险', '区分价格波动与价值变化', '大部分消息是噪音，学会过滤', '独立思考，不人云亦云'] },
              { title: '操作层面', items: ['深入研究，建立估值锚', '低估时敢于加仓', '高估时理性减仓', '不做短线，不追涨杀跌'] },
              { title: '心态层面', items: ['接受浮亏是投资的一部分', '用闲钱投资，不影响生活', '建立自己的投资体系', '与优秀投资者为伍'] },
            ].map((section, i) => (
              <div key={i} style={{
                padding: '16px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '12px',
              }}>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '10px' }}>
                  {section.title}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {section.items.map((item, j) => (
                    <span key={j} style={{
                      padding: '6px 12px',
                      background: 'rgba(52, 152, 219, 0.1)',
                      borderRadius: '6px',
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                    }}>☐ {item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '20px',
            padding: '16px',
            background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(41, 128, 185, 0.05))',
            border: '1px solid rgba(52, 152, 219, 0.2)',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '13px', color: 'var(--text-primary)', margin: '0 0 8px', fontWeight: 500 }}>
              💡 波动的终极心法
            </p>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.7 }}>
              波动不是风险，<strong>被波动左右才是风险</strong>。<br/>
              当你真正理解了公司价值，波动就不再是威胁，而是机会。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketVolatility
