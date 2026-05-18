import { useNavigate } from 'react-router-dom'

function PositionControl() {
  const navigate = useNavigate()

  return (
    <div className="sub-page">
      <div className="page-header">
        <button className="page-back" onClick={() => navigate('/heng')}>
          <span>←</span> 返回体系篇
        </button>
        <div className="page-badge" style={{ background: 'linear-gradient(145deg, #e67e22, #d35400)' }}>
          🎯
        </div>
        <h1>仓位控制</h1>
        <p>风险控制的第一道防线</p>
      </div>

      {/* 开篇 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(230, 126, 34, 0.12), rgba(211, 84, 0, 0.06))',
          border: '1px solid rgba(230, 126, 34, 0.25)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <p style={{ fontSize: '15px', color: 'var(--text-primary)', lineHeight: 1.8, margin: '0 0 16px' }}>
            仓位控制是投资中<strong>最重要但最容易被忽视</strong>的环节。
            选对了股票，仓位控制不好，一样会亏钱。
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
            合理的仓位管理，能让你在市场波动中保持从容，在机会来临时敢于出击。
          </p>
        </div>
      </div>

      {/* 1. 应该买入几只股票 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>📊</span>
            <div>
              <h2 style={{ fontSize: '18px', color: '#3498DB', margin: 0 }}>应该买入几只股票？</h2>
            </div>
          </div>

          <div style={{
            padding: '16px',
            background: 'rgba(52, 152, 219, 0.08)',
            border: '1px solid rgba(52, 152, 219, 0.2)',
            borderRadius: '12px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#3498DB', marginBottom: '10px' }}>
              建议：5-10只，一揽子公司
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              构建一个包含5-10只股票的组合，既能分散风险，又不会过度分散精力。
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{
              padding: '14px',
              background: 'rgba(46, 204, 113, 0.08)',
              borderRadius: '10px',
            }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#2ECC71', marginBottom: '6px' }}>✓ 分散风险</div>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                不要把鸡蛋放在一个篮子里。单只股票可能遇到黑天鹅，
                5-10只的组合能有效降低个股风险对整体资产的影响。
              </p>
            </div>
            <div style={{
              padding: '14px',
              background: 'rgba(243, 156, 18, 0.08)',
              borderRadius: '10px',
            }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#F39C12', marginBottom: '6px' }}>⚠️ 取决于跟踪能力</div>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                持股数量取决于你能深入研究多少家公司。如果只有3家研究透彻，
                那就只买3家。质量比数量更重要。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 股票的仓位占比 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>⚖️</span>
            <div>
              <h2 style={{ fontSize: '18px', color: '#E74C3C', margin: 0 }}>单只股票的仓位占比</h2>
            </div>
          </div>

          <div style={{
            padding: '16px',
            background: 'rgba(231, 76, 60, 0.08)',
            border: '1px solid rgba(231, 76, 60, 0.2)',
            borderRadius: '12px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#E74C3C', marginBottom: '10px' }}>
              红线：单只股票不超过50%
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              即使是再看好、研究再深入的公司，单只仓位也不要超过总资产的50%。
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>为什么？</div>
            {[
              '黑天鹅无法预测：再好的公司也可能遭遇意外，集中度过高风险巨大',
              '判断可能出错：即使深入研究，也可能看错，分散是容错机制',
              '心态容易失衡：单只占比过高，股价波动会严重影响情绪和决策',
              '流动性风险：需要资金时，重仓股可能正好在低位，被迫割肉',
              '机会成本：资金过度集中，错过其他好机会时无法调整',
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                padding: '10px 12px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '8px',
              }}>
                <span style={{ color: '#E74C3C', fontSize: '14px' }}>•</span>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '16px',
            padding: '14px',
            background: 'rgba(46, 204, 113, 0.08)',
            border: '1px solid rgba(46, 204, 113, 0.15)',
            borderRadius: '10px',
          }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#2ECC71', marginBottom: '6px' }}>💡 建议配置</div>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              重仓股（最有信心）：30-40%<br/>
              中等仓位（比较有信心）：15-25%<br/>
              观察仓（试探性）：5-10%
            </p>
          </div>
        </div>
      </div>

      {/* 3. 股票占资产的比例 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>💰</span>
            <div>
              <h2 style={{ fontSize: '18px', color: '#9B59B6', margin: 0 }}>股票占资产的比例</h2>
            </div>
          </div>

          <div style={{
            padding: '16px',
            background: 'rgba(155, 89, 182, 0.08)',
            border: '1px solid rgba(155, 89, 182, 0.2)',
            borderRadius: '12px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#9B59B6', marginBottom: '10px' }}>
              建议：股票投资资金单独管理
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              用于股票投资的资金应该<strong>单独划分</strong>出来，
              是"即使全部亏光也不影响生活"的钱。
            </p>
          </div>

          <div style={{
            padding: '16px',
            background: 'rgba(231, 76, 60, 0.08)',
            border: '1px solid rgba(231, 76, 60, 0.15)',
            borderRadius: '12px',
          }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#E74C3C', marginBottom: '10px' }}>
              ⚠️ 为什么不能用生活资金炒股？
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                '股价涨跌会影响你的情绪，进而影响生活质量',
                '需要用钱时被迫在低位卖出，造成实际亏损',
                '心态不稳导致决策失误，追涨杀跌',
                '家庭矛盾：亏损影响家庭财务，引发争吵',
                '无法坚持长期持有，因为等不起',
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}>
                  <span style={{ color: '#E74C3C' }}>✗</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{
            marginTop: '16px',
            padding: '14px',
            background: 'rgba(46, 204, 113, 0.08)',
            border: '1px solid rgba(46, 204, 113, 0.15)',
            borderRadius: '10px',
          }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#2ECC71', marginBottom: '6px' }}>✓ 正确的资金规划</div>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              预留6-12个月生活费 → 购买保险 → 应急资金 → <strong>剩余资金才用于投资</strong>
            </p>
          </div>
        </div>
      </div>

      {/* 4. 满仓么？ */}
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
              <h2 style={{ fontSize: '18px', color: '#2ECC71', margin: 0 }}>满仓么？</h2>
            </div>
          </div>

          <div style={{
            padding: '16px',
            background: 'rgba(46, 204, 113, 0.08)',
            border: '1px solid rgba(46, 204, 113, 0.2)',
            borderRadius: '12px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#2ECC71', marginBottom: '10px' }}>
              不建议满仓
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              永远保留一定比例的现金，随着市场热度动态调整仓位。
            </p>
          </div>

          {/* 市场热度与仓位 */}
          <div style={{
            padding: '16px',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: '12px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
              根据市场热度调整仓位
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* 牛市 */}
              <div style={{
                padding: '14px',
                background: 'rgba(231, 76, 60, 0.08)',
                borderRadius: '10px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '18px' }}>🔥</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#E74C3C' }}>股市越热、越牛</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 8px' }}>
                  公司价格可能<strong>超过</strong>内在价值，可以逐步变现。
                </p>
                <div style={{
                  padding: '8px 12px',
                  background: 'rgba(231, 76, 60, 0.1)',
                  borderRadius: '6px',
                  fontSize: '12px',
                  color: '#E74C3C',
                }}>
                  结果：股票仓位↓ 现金比例↑
                </div>
              </div>
              {/* 熊市 */}
              <div style={{
                padding: '14px',
                background: 'rgba(46, 204, 113, 0.08)',
                borderRadius: '10px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '18px' }}>❄️</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#2ECC71' }}>股市越冷、越熊</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 8px' }}>
                  公司价格可能<strong>远低于</strong>内在价值，可以逐步买入。
                </p>
                <div style={{
                  padding: '8px 12px',
                  background: 'rgba(46, 204, 113, 0.1)',
                  borderRadius: '6px',
                  fontSize: '12px',
                  color: '#2ECC71',
                }}>
                  结果：股票仓位↑ 现金比例↓
                </div>
              </div>
            </div>
          </div>

          {/* 满仓的风险 */}
          <div style={{
            padding: '16px',
            background: 'rgba(243, 156, 18, 0.08)',
            border: '1px solid rgba(243, 156, 18, 0.15)',
            borderRadius: '12px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#F39C12', marginBottom: '10px' }}>
              ⚠️ 满仓的风险
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 12px' }}>
              满仓后，当更好的机会来临时，你很难继续买入。
            </p>
            <div style={{
              padding: '12px',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '8px',
            }}>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                <strong>例外情况：</strong>如果你有持续的现金流（如每月工资结余）不断进入股市，
                那么满仓的约束可以适当放宽。但即便如此，也建议保留10-20%的现金应对极端情况。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 仓位控制检查清单 */}
      <div style={{ padding: '0 20px 40px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', margin: '0 0 20px', textAlign: 'center' }}>
            📋 仓位控制检查清单
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { title: '持股数量', items: ['5-10只股票', '根据研究能力调整', '质量优于数量'] },
              { title: '单只上限', items: ['单只股票≤50%', '重仓股30-40%', '观察仓5-10%'] },
              { title: '资金规划', items: ['股票资金单独管理', '不影响日常生活', '是"亏光也无所谓"的钱'] },
              { title: '现金管理', items: ['不建议满仓', '牛市减仓、熊市加仓', '保留应对极端情况的现金'] },
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
            background: 'linear-gradient(135deg, rgba(230, 126, 34, 0.1), rgba(211, 84, 0, 0.05))',
            border: '1px solid rgba(230, 126, 34, 0.2)',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '13px', color: 'var(--text-primary)', margin: '0 0 8px', fontWeight: 500 }}>
              💡 仓位控制的核心心法
            </p>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.7 }}>
              仓位控制不是预测市场，而是<strong>管理风险</strong>。<br/>
              让自己在任何市场环境下都能睡个好觉，才是好的仓位。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PositionControl
