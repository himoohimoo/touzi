import { useNavigate } from 'react-router-dom'

function StockPicking() {
  const navigate = useNavigate()

  return (
    <div className="sub-page">
      <div className="page-header">
        <button className="page-back" onClick={() => navigate('/xing')}>
          <span>←</span> 返回实践篇
        </button>
        <div className="page-badge" style={{ background: 'linear-gradient(145deg, #e67e22, #d35400)' }}>
          🔍
        </div>
        <h1>如何选股</h1>
        <p>找到好公司，是投资成功的第一步</p>
      </div>

      {/* 开篇 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(230, 126, 34, 0.12), rgba(211, 84, 0, 0.06))',
          border: '1px solid rgba(230, 126, 34, 0.25)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <p style={{ fontSize: '15px', color: 'var(--text-primary)', lineHeight: 2, margin: '0 0 16px' }}>
            A股有<strong>5000多家</strong>上市公司，如何从中选出值得重仓的好公司？
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
            选股没有标准答案，但有科学的方法。以下介绍两种实用的选股路径：
            <strong style={{ color: '#E67E22' }}>抄作业</strong>（快速入门）和
            <strong style={{ color: '#27AE60' }}>价值选股</strong>（独立研究）。
          </p>
        </div>
      </div>

      {/* 方式一：抄作业 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>📝</span>
            <div>
              <h2 style={{ fontSize: '18px', color: '#E67E22', margin: 0 }}>方式一：抄作业</h2>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '4px 0 0' }}>看你会抄不会抄</p>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '16px' }}>
            "抄作业"是指参考优秀投资者（如知名基金经理、投资大佬）的持仓，
            快速建立自己的股票池。这是新手的捷径，但<strong>抄准很难</strong>。
          </p>

          <div style={{
            background: 'rgba(231, 76, 60, 0.08)',
            border: '1px solid rgba(231, 76, 60, 0.2)',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#E74C3C', marginBottom: '10px' }}>
              ⚠️ 抄作业的难点
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                '你不知道他的完整持仓——你只看到前十大重仓，不知道他买了多少只',
                '你不知道他的仓位比例——他买10%，你买50%，风险完全不同',
                '你不知道他的买入成本——他30元买的，你60元追的，安全边际没了',
                '你不知道他的卖出时机——他调仓了你不知道，你还在死守',
                '你不知道他的投资逻辑——他为什么买？为什么卖？你不理解',
              ].map((item, i) => (
                <div key={i} style={{
                  fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6,
                  padding: '8px 12px',
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '6px',
                }}>
                  {i + 1}. {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'rgba(46, 204, 113, 0.08)',
            border: '1px solid rgba(46, 204, 113, 0.2)',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#2ECC71', marginBottom: '10px' }}>
              ✅ 正确的抄作业姿势
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { title: '选对人', desc: '选择投资理念与你相近的牛人，如价值投资选巴菲特、段永平；成长股选费雪风格' },
                { title: '看长期持仓', desc: '关注他持有3年以上的股票，而非短期调仓，长期持仓才是他的真爱' },
                { title: '理解逻辑', desc: '不要只看买了什么，要理解为什么买——行业、公司、估值、时机' },
                { title: '独立验证', desc: '把他的股票作为研究起点，自己做功课验证，而不是盲目跟风' },
                { title: '控制仓位', desc: '即使抄，也要分散，单只股票不超过总资产的20%' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '10px',
                  padding: '10px',
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '8px',
                }}>
                  <span style={{ fontSize: '16px' }}>✓</span>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>{item.title}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'rgba(243, 156, 18, 0.08)',
            border: '1px solid rgba(243, 156, 18, 0.2)',
            borderRadius: '12px',
            padding: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#F39C12', marginBottom: '10px' }}>
              💡 适合抄作业的对象
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['公募基金季报', '私募基金月报', '巴菲特13F持仓', '段永平持仓', '高瓴资本', '景林资产'].map((tag, i) => (
                <span key={i} style={{
                  padding: '6px 12px',
                  background: 'rgba(243, 156, 18, 0.15)',
                  borderRadius: '16px',
                  fontSize: '12px',
                  color: '#F39C12',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 方式二：价值选股 */}
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
              <h2 style={{ fontSize: '18px', color: '#27AE60', margin: 0 }}>方式二：价值选股</h2>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '4px 0 0' }}>独立研究，建立自己的股票池</p>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '20px' }}>
            5000多家公司怎么选？选银行、电力，还是科技、矿业？
            以下是一套系统的选股流程，帮助你从茫茫股海中找到值得深入研究的公司。
          </p>

          {/* 选股五步流程 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Step 1 */}
            <div style={{
              padding: '20px',
              background: 'rgba(155, 89, 182, 0.08)',
              border: '1px solid rgba(155, 89, 182, 0.2)',
              borderRadius: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{
                  width: '28px', height: '28px',
                  background: '#9B59B6',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: 700, color: '#fff',
                }}>1</span>
                <strong style={{ fontSize: '16px', color: '#9B59B6' }}>看大方向：选行业</strong>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '12px' }}>
                <strong>确保行业属于景气期，不能逆大势而行。</strong>
                即使是好公司，如果行业在走下坡路，也很难有好的表现。
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {[
                  { label: '高景气', color: '#2ECC71', examples: '新能源、AI、半导体、创新药' },
                  { label: '稳定期', color: '#4A90D9', examples: '银行、电力、消费、医药' },
                  { label: '衰退期', color: '#E74C3C', examples: '传统地产、教培（政策打压）' },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: '10px 14px',
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                    borderRadius: '8px',
                  }}>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: item.color }}>{item.label}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-dim)', marginLeft: '8px' }}>{item.examples}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div style={{
              padding: '20px',
              background: 'rgba(74, 144, 217, 0.08)',
              border: '1px solid rgba(74, 144, 217, 0.2)',
              borderRadius: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{
                  width: '28px', height: '28px',
                  background: '#4A90D9',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: 700, color: '#fff',
                }}>2</span>
                <strong style={{ fontSize: '16px', color: '#4A90D9' }}>行业内筛选：定短名单</strong>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '12px' }}>
                在选定行业内，找出<strong>盈利能力最强</strong>和<strong>增长最快</strong>的公司，形成短名单（5-10只）。
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div style={{
                  padding: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '8px',
                }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#4A90D9', marginBottom: '6px' }}>盈利能力指标</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    ROE &gt; 15%<br />
                    毛利率 &gt; 30%<br />
                    净利率行业领先
                  </div>
                </div>
                <div style={{
                  padding: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '8px',
                }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#E67E22', marginBottom: '6px' }}>成长能力指标</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    收入增速 &gt; 20%<br />
                    利润增速 &gt; 20%<br />
                    连续3年增长
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
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
                <strong style={{ fontSize: '16px', color: '#2ECC71' }}>分析公司质地：为什么它能赢？</strong>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '12px' }}>
                深入研究短名单中的公司，回答三个核心问题：
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { q: '为什么公司会赚钱？', a: '商业模式是什么？靠什么赚钱？护城河在哪里？' },
                  { q: '为什么它在竞争中能胜出？', a: '相比竞争对手，它的核心优势是什么？品牌？技术？成本？' },
                  { q: '为什么它增长最快？', a: '是行业红利还是公司能力？增长是否可持续？' },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: '12px',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '8px',
                  }}>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#2ECC71', marginBottom: '4px' }}>{item.q}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{item.a}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4 */}
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
                }}>4</span>
                <strong style={{ fontSize: '16px', color: '#F39C12' }}>看估值：好公司是否是好价格？</strong>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '12px' }}>
                再好的公司，如果买贵了，也不是好投资。估值判断是选股的关键一步。
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#2ECC71', marginBottom: '4px' }}>PE &lt; 20</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>合理偏低<br/>可以考虑</div>
                </div>
                <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#F39C12', marginBottom: '4px' }}>PE 20-40</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>合理偏高<br/>谨慎买入</div>
                </div>
                <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#E74C3C', marginBottom: '4px' }}>PE &gt; 40</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>高估<br/>等待回调</div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div style={{
              padding: '20px',
              background: 'rgba(231, 76, 60, 0.08)',
              border: '1px solid rgba(231, 76, 60, 0.2)',
              borderRadius: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{
                  width: '28px', height: '28px',
                  background: '#E74C3C',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: 700, color: '#fff',
                }}>5</span>
                <strong style={{ fontSize: '16px', color: '#E74C3C' }}>深入研究报表：财务健康检查</strong>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '12px' }}>
                通过财务报表，验证公司的财务健康状况，排除"财务地雷"。
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { item: '资产负债表', check: '负债率是否合理？（一般<60%）有无大额商誉？' },
                  { item: '现金流量表', check: '经营现金流是否为正？是否持续？利润是否变成现金？' },
                  { item: '利润表', check: '收入增长是否带来利润增长？毛利率是否稳定？' },
                  { item: '异常信号', check: '应收账款激增？存货积压？关联交易过多？' },
                ].map((row, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '12px',
                    padding: '10px',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '6px',
                  }}>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#E74C3C', flexShrink: 0, width: '80px' }}>{row.item}</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{row.check}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 都通过了，买入 */}
          <div style={{
            marginTop: '20px',
            padding: '20px',
            background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.15), rgba(39, 174, 96, 0.1))',
            border: '2px solid rgba(46, 204, 113, 0.3)',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '20px', marginBottom: '8px' }}>✅</div>
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#2ECC71', marginBottom: '8px' }}>
              都通过了，买入！
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              行业景气 ✓ 公司优质 ✓ 估值合理 ✓ 财务健康 ✓<br />
              恭喜你，找到了一只值得深入研究的好股票！
            </p>
          </div>
        </div>
      </div>

      {/* 选股检查清单 */}
      <div style={{ padding: '0 20px 40px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', margin: '0 0 20px', textAlign: 'center' }}>
            📋 选股检查清单
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { title: '行业筛选', items: ['行业处于成长期或稳定期', '政策支持或中性', '行业规模>1000亿', '竞争格局清晰（非红海）'] },
              { title: '公司基本面', items: ['ROE > 15%（连续3年）', '收入增速 > 15%', '毛利率行业领先', '有护城河（品牌/技术/成本）'] },
              { title: '管理层评估', items: ['创始人/管理层诚信', '战略清晰可执行', '无大额减持或质押', '重视股东回报（分红/回购）'] },
              { title: '估值判断', items: ['PE < 30（成长股<50）', 'PEG < 2', 'PB < 行业平均', '相对历史估值合理'] },
              { title: '财务健康', items: ['负债率 < 60%', '经营现金流为正', '应收账款占比低', '无大额商誉减值风险'] },
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
                      background: 'rgba(230, 126, 34, 0.1)',
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
            background: 'rgba(243, 156, 18, 0.08)',
            border: '1px solid rgba(243, 156, 18, 0.15)',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '13px', color: 'var(--text-primary)', margin: '0 0 8px', fontWeight: 500 }}>
              💡 选股的核心心法
            </p>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.7 }}>
              选股不是找"会涨的股票"，而是找"值得拥有的公司"。<br />
              当你把股票当作公司的一部分来选，你就已经超越了90%的投资者。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StockPicking
