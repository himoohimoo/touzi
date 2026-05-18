import { useNavigate } from 'react-router-dom'

function InvestmentMindset() {
  const navigate = useNavigate()

  return (
    <div className="sub-page">
      <div className="page-header">
        <button className="page-back" onClick={() => navigate('/heng')}>
          <span>←</span> 返回体系篇
        </button>
        <div className="page-badge" style={{ background: 'linear-gradient(145deg, #8e44ad, #6c3483)' }}>
          🧘
        </div>
        <h1>投资心法</h1>
        <p>回归投资本心，修炼内心的平静</p>
      </div>

      {/* 开篇 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(142, 68, 173, 0.12), rgba(108, 52, 131, 0.06))',
          border: '1px solid rgba(142, 68, 173, 0.25)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <p style={{ fontSize: '15px', color: 'var(--text-primary)', lineHeight: 2, margin: '0 0 16px' }}>
            股市是<strong style={{ color: '#E74C3C' }}>人性的放大镜</strong>。
            贪婪、恐惧、妒忌、傲慢——所有在日常生活中被压抑的情绪，
            在股市中会被成倍放大。
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text-primary)', lineHeight: 2, margin: '0 0 16px' }}>
            对短线投机者来说，股市是<strong style={{ color: '#E74C3C' }}>赌场</strong>；
            对价值投资者来说，股市是<strong style={{ color: '#2ECC71' }}>市场</strong>。
            你选择以什么身份参与，决定了你的命运。
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
            当你进入投资领域后，唯一不变的就是<strong>快速变化</strong>。
            市场的波动会对人的心态造成巨大的冲击。
            因此，修炼投资心法，是每个投资者的必修课。
          </p>
        </div>
      </div>

      {/* 知行合一 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>📖</span>
            <div>
              <h2 style={{ fontSize: '18px', color: '#8E44AD', margin: 0 }}>投资心法首推：王阳明</h2>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '4px 0 0' }}>知行合一，致良知</p>
            </div>
          </div>

          <div style={{
            background: 'rgba(142, 68, 173, 0.08)',
            border: '1px solid rgba(142, 68, 173, 0.2)',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '16px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '18px', color: 'var(--text-primary)', fontWeight: 600, lineHeight: 1.8, margin: '0 0 8px' }}>
              "知是行的主意，行是知的功夫。"
            </p>
            <p style={{ fontSize: '18px', color: 'var(--text-primary)', fontWeight: 600, lineHeight: 1.8, margin: '0 0 12px' }}>
              "知是行之始，行是知之成。"
            </p>
            <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: 0 }}>—— 王阳明《传习录》</p>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '16px' }}>
            王阳明的"知行合一"是投资心法的最高境界。
            <strong>你买入一只股票时的理由，就是你卖出时的唯一判断标准。</strong>
            当面临纷杂多变的外界时，回归本心——
          </p>

          {/* 回归本心的三个问题 */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#8E44AD', marginBottom: '16px', textAlign: 'center' }}>
              🧘 当市场剧烈波动时，问自己三个问题：
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                {
                  q: '我为什么买股票？',
                  desc: '是为了短期赚快钱，还是为了长期持有优质公司？回归你进入市场的初心。',
                  icon: '🎯',
                  color: '#4A90D9',
                },
                {
                  q: '我为什么买这只股票？',
                  desc: '是因为它的基本面优秀、估值合理，还是因为别人推荐、消息刺激？如果是后者，你从一开始就错了。',
                  icon: '🔍',
                  color: '#2ECC71',
                },
                {
                  q: '基本面变了吗？',
                  desc: '公司的核心竞争力还在吗？行业趋势变了吗？管理层出问题了吗？如果都没有，你为什么要害怕？',
                  icon: '🔬',
                  color: '#F39C12',
                },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '16px',
                  background: `${item.color}08`,
                  border: `1px solid ${item.color}25`,
                  borderRadius: '12px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '20px' }}>{item.icon}</span>
                    <strong style={{ fontSize: '15px', color: item.color }}>{item.q}</strong>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'rgba(46, 204, 113, 0.08)',
            border: '1px solid rgba(46, 204, 113, 0.2)',
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '14px', color: '#2ECC71', fontWeight: 600, margin: '0 0 6px' }}>
              ✨ 知行合一的投资诠释
            </p>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              "我买它是因为它值这个价。如果它仍然值这个价，我就不卖。<br />
              如果它不值了，不管亏多少，我都卖。"
            </p>
          </div>
        </div>
      </div>

      {/* 人性三关 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>😈</span>
            <div>
              <h2 style={{ fontSize: '18px', color: '#E74C3C', margin: 0 }}>人性三关</h2>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '4px 0 0' }}>投资路上必须跨越的三道坎</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* 贪婪 */}
            <div style={{
              padding: '20px',
              background: 'rgba(231, 76, 60, 0.06)',
              border: '1px solid rgba(231, 76, 60, 0.15)',
              borderRadius: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '24px' }}>🤑</span>
                <strong style={{ fontSize: '16px', color: '#E74C3C' }}>第一关：贪婪</strong>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '10px' }}>
                牛市中，人人都是股神。看到别人赚钱，你觉得自己也能赚更多，
                于是加杠杆、追热点、满仓干……结果往往是被收割。
              </p>
              <div style={{ padding: '10px 14px', background: 'rgba(46, 204, 113, 0.08)', borderRadius: '8px' }}>
                <span style={{ fontSize: '12px', color: '#2ECC71', fontWeight: 600 }}>💡 破解：</span>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>设定止盈目标，达到就减仓。记住：会卖的是师傅。</span>
              </div>
            </div>

            {/* 恐惧 */}
            <div style={{
              padding: '20px',
              background: 'rgba(74, 144, 217, 0.06)',
              border: '1px solid rgba(74, 144, 217, 0.15)',
              borderRadius: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '24px' }}>😨</span>
                <strong style={{ fontSize: '16px', color: '#4A90D9' }}>第二关：恐惧</strong>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '10px' }}>
                熊市中，恐慌蔓延。账面浮亏让你夜不能寐，
                最终在最低点割肉出局——恰恰卖在了最不该卖的时候。
              </p>
              <div style={{ padding: '10px 14px', background: 'rgba(46, 204, 113, 0.08)', borderRadius: '8px' }}>
                <span style={{ fontSize: '12px', color: '#2ECC71', fontWeight: 600 }}>💡 破解：</span>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>回归本心——基本面变了吗？没变就拿着。暴跌往往是买入机会。</span>
              </div>
            </div>

            {/* 妒忌 */}
            <div style={{
              padding: '20px',
              background: 'rgba(243, 156, 18, 0.06)',
              border: '1px solid rgba(243, 156, 18, 0.15)',
              borderRadius: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '24px' }}>😤</span>
                <strong style={{ fontSize: '16px', color: '#F39C12' }}>第三关：妒忌</strong>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '10px' }}>
                看到别人买的股票涨了10倍，自己手里的却纹丝不动，
                于是忍无可忍换股追高——结果买在了山顶，卖在了山脚。
              </p>
              <div style={{ padding: '10px 14px', background: 'rgba(46, 204, 113, 0.08)', borderRadius: '8px' }}>
                <span style={{ fontSize: '12px', color: '#2ECC71', fontWeight: 600 }}>💡 破解：</span>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>只和自己的过去比，不和别人比。每棵树的花期不同，耐心等你的花开。</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 人皆有错 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>🔄</span>
            <div>
              <h2 style={{ fontSize: '18px', color: '#1ABC9C', margin: 0 }}>人皆有错，快速修正</h2>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '4px 0 0' }}>承认错误是智慧的开始</p>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '16px' }}>
            投资中犯错是必然的，没有人能100%正确。
            <strong>关键不是不犯错，而是犯错后如何应对。</strong>
            巴菲特、芒格这样的投资大师，也会犯错，但他们能快速认错、快速修正。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              {
                step: '01',
                title: '承认错误',
                desc: '不要自我欺骗，不要死扛。亏损就是亏损，判断错了就是错了。',
                color: '#E74C3C',
              },
              {
                step: '02',
                title: '分析原因',
                desc: '是研究不够深入？是情绪化决策？是认知有偏差？找到根本原因。',
                color: '#F39C12',
              },
              {
                step: '03',
                title: '快速修正',
                desc: '发现错误后立即行动，止损或调仓。小亏比大亏好，早改比晚改好。',
                color: '#4A90D9',
              },
              {
                step: '04',
                title: '总结经验',
                desc: '记录每次错误和修正过程，形成自己的"错误清单"，避免重复犯错。',
                color: '#2ECC71',
              },
              {
                step: '05',
                title: '优化体系',
                desc: '将教训融入投资体系，完善买入规则、卖出规则、风控规则。',
                color: '#9B59B6',
              },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '14px',
                padding: '14px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '10px',
                borderLeft: `4px solid ${item.color}`,
              }}>
                <span style={{
                  fontSize: '18px', fontWeight: 700, color: item.color,
                  flexShrink: 0, width: '30px', textAlign: 'center',
                }}>{item.step}</span>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '16px',
            padding: '16px',
            background: 'rgba(142, 68, 173, 0.08)',
            border: '1px solid rgba(142, 68, 173, 0.2)',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '14px', color: '#8E44AD', fontWeight: 600, margin: '0 0 6px' }}>
              芒格说：
            </p>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              "如果知道自己会死在哪里，我就永远不去那个地方。"<br />
              <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>—— 投资就是不断排除错误选项的过程。</span>
            </p>
          </div>
        </div>
      </div>

      {/* 日常修炼建议 */}
      <div style={{ padding: '0 20px 40px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', margin: '0 0 20px', textAlign: 'center' }}>
            📋 投资心法日常修炼清单
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* 每日 */}
            <div style={{
              padding: '18px',
              background: 'rgba(74, 144, 217, 0.06)',
              border: '1px solid rgba(74, 144, 217, 0.15)',
              borderRadius: '12px',
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#4A90D9', marginBottom: '12px' }}>
                📅 每日修炼
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  '不看盘超过3次——减少噪音输入，避免情绪波动',
                  '不看股吧、论坛——远离情绪传染源',
                  '记录当日情绪状态——觉察是改变的第一步',
                  '睡前回顾：今天的操作是基于理性还是情绪？',
                ].map((item, i) => (
                  <div key={i} style={{
                    fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6,
                    padding: '8px 12px',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '6px',
                  }}>
                    ☑️ {item}
                  </div>
                ))}
              </div>
            </div>

            {/* 每周 */}
            <div style={{
              padding: '18px',
              background: 'rgba(46, 204, 113, 0.06)',
              border: '1px solid rgba(46, 204, 113, 0.15)',
              borderRadius: '12px',
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#2ECC71', marginBottom: '12px' }}>
                📆 每周修炼
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  '回顾持仓：每只股票的基本面有变化吗？',
                  '检查情绪日记：本周有几次情绪化操作？',
                  '阅读一篇深度研报或经典投资文章',
                  '和理性投资者交流，远离抱怨型股民',
                ].map((item, i) => (
                  <div key={i} style={{
                    fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6,
                    padding: '8px 12px',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '6px',
                  }}>
                    ☑️ {item}
                  </div>
                ))}
              </div>
            </div>

            {/* 每月 */}
            <div style={{
              padding: '18px',
              background: 'rgba(243, 156, 18, 0.06)',
              border: '1px solid rgba(243, 156, 18, 0.15)',
              borderRadius: '12px',
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#F39C12', marginBottom: '12px' }}>
                🗓️ 每月修炼
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  '做一次完整的投资复盘（交易记录+盈亏归因）',
                  '更新投资笔记：学到了什么？犯了什么错？',
                  '评估持仓组合：是否需要再平衡？',
                  '阅读一本投资经典书籍的一个章节',
                ].map((item, i) => (
                  <div key={i} style={{
                    fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6,
                    padding: '8px 12px',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '6px',
                  }}>
                    ☑️ {item}
                  </div>
                ))}
              </div>
            </div>

            {/* 长期 */}
            <div style={{
              padding: '18px',
              background: 'rgba(142, 68, 173, 0.06)',
              border: '1px solid rgba(142, 68, 173, 0.15)',
              borderRadius: '12px',
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#8E44AD', marginBottom: '12px' }}>
                🏔️ 长期修炼
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  '建立并持续完善自己的投资体系',
                  '培养独立思考能力，不盲从任何"大V"',
                  '修炼延迟满足——好公司值得等待',
                  '保持学习：市场在变，认知也要不断进化',
                  '定期重测"认知自己"，了解自己的心理变化',
                ].map((item, i) => (
                  <div key={i} style={{
                    fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6,
                    padding: '8px 12px',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '6px',
                  }}>
                    ☑️ {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 结语 */}
          <div style={{
            marginTop: '24px',
            padding: '20px',
            background: 'linear-gradient(135deg, rgba(142, 68, 173, 0.1), rgba(46, 204, 113, 0.05))',
            border: '1px solid rgba(142, 68, 173, 0.2)',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '16px', color: 'var(--text-primary)', fontWeight: 600, lineHeight: 1.8, margin: '0 0 12px' }}>
              投资是一场修行
            </p>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
              市场考验的不是你的智商，而是你的心性。<br />
              知行合一，回归本心，修炼内心。<br />
              <strong style={{ color: '#8E44AD' }}>当你不再被市场情绪左右的时候，<br />你就真正踏上了投资之路。</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestmentMindset
