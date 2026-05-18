import { useNavigate } from 'react-router-dom'

function GrowthInvesting() {
  const navigate = useNavigate()

  return (
    <div className="sub-page">
      <div className="page-header">
        <button className="page-back" onClick={() => navigate('/heng')}>
          <span>←</span> 返回体系篇
        </button>
        <div className="page-badge" style={{ background: 'linear-gradient(145deg, #e74c3c, #c0392b)' }}>
          🚀
        </div>
        <h1>成长股精髓</h1>
        <p>菲利普·费雪的成长投资哲学：寻找未来的十倍股</p>
      </div>

      {/* 核心要素 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
        }}>
          {[
            { icon: '🛤️', title: '赛道广阔', desc: '市场空间大', color: '#9B59B6' },
            { icon: '📈', title: '收入高增长', desc: '业绩持续爆发', color: '#E74C3C' },
            { icon: '👨‍💼', title: '优秀管理层', desc: '战略执行力强', color: '#F39C12' },
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

      {/* 费雪名言 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(231, 76, 60, 0.1), rgba(192, 57, 43, 0.05))',
          border: '1px solid rgba(231, 76, 60, 0.2)',
          borderRadius: '12px',
          padding: '20px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '15px', color: 'var(--text-primary)', fontStyle: 'italic', lineHeight: 1.8, margin: 0 }}>
            "我宁可投资一家有优秀管理层的普通公司，<br />
            也不愿投资一家管理层平庸的优秀公司。"
          </p>
          <p style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '10px', marginBottom: 0 }}>—— 菲利普·费雪</p>
        </div>
      </div>

      {/* 要素一：赛道广阔 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>🛤️</span>
            <div>
              <h2 style={{ fontSize: '18px', color: '#9B59B6', margin: 0 }}>要素一：赛道广阔</h2>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '4px 0 0' }}>选择比努力更重要</p>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '16px' }}>
            费雪强调，投资成长股首先要看<strong>行业空间</strong>。一个天花板很高的行业，
            才能孕育出持续高增长的公司。正如巴菲特所说："找到一条湿湿的雪道，雪球会越滚越大。"
          </p>

          <div style={{
            background: 'rgba(155, 89, 182, 0.08)',
            border: '1px solid rgba(155, 89, 182, 0.2)',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#9B59B6', marginBottom: '12px' }}>
              🎯 评估赛道空间的维度
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { icon: '🌍', title: '市场规模（TAM）', desc: 'Total Addressable Market，可触达市场总量越大越好' },
                { icon: '📊', title: '渗透率', desc: '当前渗透率越低，未来增长空间越大（如新能源车vs燃油车）' },
                { icon: '⚡', title: '行业增速', desc: '行业整体增速>15%为佳，处于成长期而非成熟期' },
                { icon: '🏗️', title: '政策环境', desc: '符合国家战略方向，政策支持力度大' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '10px',
                  padding: '10px',
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '8px',
                }}>
                  <span style={{ fontSize: '16px' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>{item.title}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'rgba(46, 204, 113, 0.08)',
            border: '1px solid rgba(46, 204, 113, 0.2)',
            borderRadius: '12px',
            padding: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#2ECC71', marginBottom: '10px' }}>
              ✅ 优质赛道案例
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['新能源汽车', '人工智能', '生物医药', '半导体', '云计算', '消费升级'].map((tag, i) => (
                <span key={i} style={{
                  padding: '6px 12px',
                  background: 'rgba(46, 204, 113, 0.15)',
                  borderRadius: '16px',
                  fontSize: '12px',
                  color: '#2ECC71',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 要素二：收入高速增长 */}
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
              <h2 style={{ fontSize: '18px', color: '#E74C3C', margin: 0 }}>要素二：收入高速增长</h2>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '4px 0 0' }}>业绩是股价的基石</p>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '16px' }}>
            费雪认为，成长股的本质是<strong>收入和利润的持续高增长</strong>。
            不同于价值股看PE，成长股的核心是看成长性。
            一家收入年增长30%的公司，即使PE=50，也比一家收入停滞、PE=10的公司更有投资价值。
          </p>

          <div style={{
            background: 'rgba(231, 76, 60, 0.08)',
            border: '1px solid rgba(231, 76, 60, 0.2)',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#E74C3C', marginBottom: '12px' }}>
              📊 成长股收入增速标准
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
              <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px' }}>
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#F39C12' }}>10-20%</div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>稳健增长<br/>成熟期公司</div>
              </div>
              <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(74, 144, 217, 0.1)', borderRadius: '8px' }}>
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#4A90D9' }}>20-30%</div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>快速增长<br/>成长期公司</div>
              </div>
              <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(231, 76, 60, 0.15)', borderRadius: '8px' }}>
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#E74C3C' }}>&gt; 30%</div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>高速增长<br/>优质成长股</div>
              </div>
            </div>
          </div>

          <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
            🔍 评估成长质量的维度
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { icon: '💰', title: '收入增长质量', desc: '收入增长是否带来利润增长？毛利率是否稳定？' },
              { icon: '🔄', title: '增长持续性', desc: '连续3-5年保持高增长，而非单年爆发' },
              { icon: '📊', title: '季度环比', desc: '季度业绩是否持续超预期，指引是否上调' },
              { icon: '🎯', title: '增长来源', desc: '增长来自主业扩张还是并购？内生增长更健康' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '12px',
                padding: '12px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '8px',
                borderLeft: '3px solid #E74C3C',
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

      {/* 要素三：优秀管理层 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>👨‍💼</span>
            <div>
              <h2 style={{ fontSize: '18px', color: '#F39C12', margin: 0 }}>要素三：优秀管理层</h2>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '4px 0 0' }}>人对了，事就成了</p>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '16px' }}>
            费雪最看重的就是<strong>管理层</strong>。他认为，好的赛道和好的产品，
            如果没有优秀的管理层执行，最终也会失败。
            费雪甚至会通过"闲聊法"（Scuttlebutt）去调研公司，从供应商、客户、竞争对手处了解管理层口碑。
          </p>

          <div style={{
            background: 'rgba(243, 156, 18, 0.08)',
            border: '1px solid rgba(243, 156, 18, 0.2)',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#F39C12', marginBottom: '12px' }}>
              ⭐ 费雪眼中的优秀管理层特质
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { icon: '🔬', title: '研发创新能力', desc: '持续投入研发，保持产品竞争力，引领行业变革' },
                { icon: '📢', title: '坦诚沟通', desc: '对股东诚实，不隐瞒问题，财报清晰易懂' },
                { icon: '🎯', title: '战略眼光', desc: '能看清行业趋势，提前布局，抓住关键机会' },
                { icon: '⚡', title: '执行力强', desc: '说到做到，战略能落地，目标能实现' },
                { icon: '💎', title: '诚信正直', desc: '不财务造假，不掏空公司，以股东利益为先' },
                { icon: '🧠', title: '学习能力', desc: '保持开放心态，能从失败中学习，持续进化' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '10px',
                  padding: '10px',
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '8px',
                }}>
                  <span style={{ fontSize: '16px' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>{item.title}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'rgba(231, 76, 60, 0.08)',
            border: '1px solid rgba(231, 76, 60, 0.2)',
            borderRadius: '12px',
            padding: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#E74C3C', marginBottom: '10px' }}>
              🚩 管理层危险信号
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['频繁更换高管', '大额减持', '关联交易', '财务造假', '盲目多元化', '过度承诺'].map((tag, i) => (
                <span key={i} style={{
                  padding: '6px 12px',
                  background: 'rgba(231, 76, 60, 0.15)',
                  borderRadius: '16px',
                  fontSize: '12px',
                  color: '#E74C3C',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 成长股估值：不看PE看成长 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>🧮</span>
            <div>
              <h2 style={{ fontSize: '18px', color: '#1ABC9C', margin: 0 }}>成长股估值：不看PE看成长</h2>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '4px 0 0' }}>PEG指标的应用</p>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '16px' }}>
            成长股不能用传统的PE估值，因为高成长值得高溢价。
            费雪和彼得·林奇推崇的<strong>PEG指标</strong>（市盈率相对盈利增长比率），
            将PE与增长率结合，是评估成长股估值的利器。
          </p>

          <div style={{
            background: 'rgba(26, 188, 156, 0.08)',
            border: '1px solid rgba(26, 188, 156, 0.2)',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#1ABC9C', marginBottom: '12px' }}>
              📐 PEG = PE ÷ 盈利增长率（%）
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '12px' }}>
              例如：PE=40倍，年增长率为30%，则PEG = 40 ÷ 30 = 1.33
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
              <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(46, 204, 113, 0.15)', borderRadius: '8px' }}>
                <div style={{ fontSize: '20px', fontWeight: 700, color: '#2ECC71' }}>&lt; 1</div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>低估<br/>值得买入</div>
              </div>
              <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px' }}>
                <div style={{ fontSize: '20px', fontWeight: 700, color: '#F39C12' }}>1-2</div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>合理<br/>可以持有</div>
              </div>
              <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px' }}>
                <div style={{ fontSize: '20px', fontWeight: 700, color: '#E74C3C' }}>&gt; 2</div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>高估<br/>谨慎买入</div>
              </div>
            </div>
          </div>

          <div style={{
            background: 'rgba(243, 156, 18, 0.08)',
            border: '1px solid rgba(243, 156, 18, 0.2)',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#F39C12', marginBottom: '10px' }}>
              ⚠️ 成长股投资的本质局限
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              <strong>成长股不可能永远快速增长。</strong>任何公司都会经历导入期→成长期→成熟期→衰退期的生命周期。
              当行业渗透率见顶、竞争加剧、增速放缓时，高估值难以为继，股价可能面临"戴维斯双杀"（业绩和估值同时下降）。
              <br /><br />
              因此，成长股投资需要<strong>持续跟踪</strong>，一旦发现增长放缓信号，要及时调整预期。
            </p>
          </div>

          <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
            📉 成长股转价值股的信号
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['收入增速跌破20%', '市场份额见顶', '行业竞争白热化', 'CAPEX大幅下降', '开始大额分红', 'PE向价值股靠拢'].map((tag, i) => (
              <span key={i} style={{
                padding: '8px 14px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                fontSize: '12px',
                color: 'var(--text-secondary)',
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 成长股评估维度总结 */}
      <div style={{ padding: '0 20px 40px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', margin: '0 0 20px', textAlign: 'center' }}>
            📋 成长股评估清单
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { title: '行业维度', items: ['市场空间>1000亿', '渗透率<50%', '政策支持', '竞争格局清晰'] },
              { title: '公司维度', items: ['收入增速>30%', '毛利率稳定或提升', '净利润现金含量高', 'ROE>15%'] },
              { title: '管理维度', items: ['创始人/管理层持股', '战略清晰可执行', '诚信记录良好', '研发投入持续'] },
              { title: '估值维度', items: ['PEG<1.5', 'PS<10倍', '相对历史估值合理', '相对同行估值合理'] },
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
                      background: 'rgba(74, 144, 217, 0.1)',
                      borderRadius: '6px',
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                    }}>☑️ {item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '20px',
            padding: '16px',
            background: 'rgba(231, 76, 60, 0.08)',
            border: '1px solid rgba(231, 76, 60, 0.15)',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '13px', color: 'var(--text-primary)', margin: '0 0 8px', fontWeight: 500 }}>
              💡 成长股投资的核心心法
            </p>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.7 }}>
              在鱼多的地方钓鱼，选最会钓鱼的船长，<br />
              在船速最快的时候上船，在船速减慢前下船。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrowthInvesting
