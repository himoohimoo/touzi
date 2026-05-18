import { useNavigate } from 'react-router-dom'

function TradingRules() {
  const navigate = useNavigate()

  const rules = [
    {
      number: '01',
      title: '资金来源',
      icon: '💰',
      color: '#E74C3C',
      items: [
        { title: '坚决不碰杠杆', desc: '融资、配资、借贷炒股是投资自杀行为。杠杆会放大亏损，一次黑天鹅就可能爆仓归零。' },
        { title: '用自己的闲钱投资', desc: '投资资金必须是"亏光也不影响生活"的钱。不要用生活费、教育费、医疗费炒股。' },
        { title: '追求稳步增值', desc: '投资目标是资产长期稳健增长，不是一夜暴富。年化15-20%已是顶尖水平。' },
      ]
    },
    {
      number: '02',
      title: '资金分配',
      icon: '⚖️',
      color: '#F39C12',
      items: [
        { title: '个股比例小于50%', desc: '即使是最看好的公司，单只仓位也不超过总资产50%。留有余地应对黑天鹅。' },
        { title: '不单调', desc: '不要把所有资金押注在一只股票上。5-10只不同行业的股票组合更稳健。' },
        { title: '鸡蛋不放在一个篮子里', desc: '分散投资降低个股风险。行业、公司、估值都要分散。' },
      ]
    },
    {
      number: '03',
      title: '资金仓位',
      icon: '📊',
      color: '#3498DB',
      items: [
        { title: '类现金支持3年生活', desc: '保留足够现金或类现金资产，确保未来3年生活无忧，包括孩子教育、家庭开支等。' },
        { title: '不满仓', desc: '永远保留一定比例的现金。满仓意味着失去灵活性，机会来临时无法出手。' },
        { title: '根据指数高低调仓', desc: '市场越热仓位越低，市场越冷仓位越高。逆向操作，人弃我取。' },
      ]
    },
    {
      number: '04',
      title: '投资周期',
      icon: '⏳',
      color: '#2ECC71',
      items: [
        { title: '聚焦长期投资', desc: '短期波动无法预测，长期价值可以判断。用时间换空间，让复利发挥作用。' },
        { title: '至少拿股3年', desc: '买入前问自己：这只股票我能拿3年吗？如果答案是否定的，就不要买。' },
        { title: '追求10年持有', desc: '寻找能持有10年的好公司。时间是优秀企业的朋友，是平庸企业的敌人。' },
      ]
    },
  ]

  const prohibitions = [
    '不用杠杆（融资、配资、借贷）',
    '不追热点、不炒概念',
    '不听消息、不跟风',
    '不频繁交易、不做T',
    '不预测短期涨跌',
    '不因为跌而卖、不因为涨而买',
    '不把全部资金投入股市',
    '不投资看不懂的公司',
  ]

  return (
    <div className="sub-page">
      <div className="page-header">
        <button className="page-back" onClick={() => navigate('/heng')}>
          <span>←</span> 返回体系篇
        </button>
        <div className="page-badge" style={{ background: 'linear-gradient(145deg, #9b59b6, #8e44ad)' }}>
          📏
        </div>
        <h1>交易军规</h1>
        <p>铁的纪律，钢的执行力</p>
      </div>

      {/* 开篇 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(155, 89, 182, 0.12), rgba(142, 68, 173, 0.06))',
          border: '1px solid rgba(155, 89, 182, 0.25)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <p style={{ fontSize: '15px', color: 'var(--text-primary)', lineHeight: 1.8, margin: '0 0 16px' }}>
            投资最大的敌人是<strong>人性</strong>——贪婪、恐惧、从众、侥幸心理。
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
            交易军规是用纪律约束人性，用规则战胜情绪。
            知道不等于做到，唯有铁的纪律才能保你穿越牛熊。
          </p>
        </div>
      </div>

      {/* 四大军规 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {rules.map((rule, idx) => (
            <div key={idx} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '16px',
              padding: '24px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ fontSize: '32px' }}>{rule.icon}</span>
                <div>
                  <div style={{ fontSize: '12px', color: rule.color, fontWeight: 600, marginBottom: '2px' }}>军规 {rule.number}</div>
                  <h2 style={{ fontSize: '18px', color: rule.color, margin: 0 }}>{rule.title}</h2>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {rule.items.map((item, i) => (
                  <div key={i} style={{
                    padding: '14px',
                    background: `${rule.color}08`,
                    border: `1px solid ${rule.color}15`,
                    borderRadius: '10px',
                  }}>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: rule.color, marginBottom: '6px' }}>
                      {item.title}
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 禁止清单 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(231, 76, 60, 0.08)',
          border: '1px solid rgba(231, 76, 60, 0.15)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>🚫</span>
            <h2 style={{ fontSize: '18px', color: '#E74C3C', margin: 0 }}>禁止操作清单</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {prohibitions.map((item, i) => (
              <div key={i} style={{
                padding: '12px',
                background: 'rgba(231, 76, 60, 0.1)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span style={{ color: '#E74C3C', fontSize: '14px' }}>✗</span>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 买入前 Checklist */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(46, 204, 113, 0.08)',
          border: '1px solid rgba(46, 204, 113, 0.15)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>✓</span>
            <h2 style={{ fontSize: '18px', color: '#2ECC71', margin: 0 }}>买入前 Checklist</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              '这是闲钱吗？（亏光不影响生活）',
              '我研究这家公司超过3个月了吗？',
              '我能说出它的商业模式和护城河吗？',
              '我能持有它至少3年吗？',
              '当前估值合理吗？（PE<30，PEG<2）',
              '单只仓位会超过50%吗？',
              '这是追热点还是真价值？',
              '我有足够的现金储备吗？',
            ].map((item, i) => (
              <div key={i} style={{
                padding: '12px',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <span style={{
                  width: '20px',
                  height: '20px',
                  border: '2px solid rgba(46, 204, 113, 0.5)',
                  borderRadius: '4px',
                  flexShrink: 0,
                }}></span>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '16px',
            padding: '14px',
            background: 'rgba(46, 204, 113, 0.1)',
            borderRadius: '10px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '13px', color: '#2ECC71', fontWeight: 600, margin: 0 }}>
              以上8条全部通过，才能买入！
            </p>
          </div>
        </div>
      </div>

      {/* 卖出信号 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(243, 156, 18, 0.08)',
          border: '1px solid rgba(243, 156, 18, 0.15)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>💰</span>
            <h2 style={{ fontSize: '18px', color: '#F39C12', margin: 0 }}>卖出信号</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { title: '基本面恶化', desc: '护城河被侵蚀、行业格局恶化、管理层变质' },
              { title: '严重高估', desc: 'PE>50，市值远超合理估值区间' },
              { title: '发现明显更好的机会', desc: '新标的估值低50%以上，质地相当' },
              { title: '当初买入的理由不再成立', desc: '投资逻辑被破坏，公司不再是原来的公司' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '12px',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '8px',
              }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#F39C12', marginBottom: '4px' }}>{item.title}</div>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '16px',
            padding: '14px',
            background: 'rgba(231, 76, 60, 0.08)',
            borderRadius: '10px',
          }}>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: '#E74C3C' }}>不是因为跌而卖，不是因为涨而买。</strong><br/>
              卖出的唯一理由是：持有它的逻辑不再成立。
            </p>
          </div>
        </div>
      </div>

      {/* 核心心法 */}
      <div style={{ padding: '0 20px 40px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(155, 89, 182, 0.1), rgba(142, 68, 173, 0.05))',
          border: '1px solid rgba(155, 89, 182, 0.2)',
          borderRadius: '16px',
          padding: '24px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '16px', color: 'var(--text-primary)', margin: '0 0 16px', fontWeight: 500 }}>
            "计划你的交易，交易你的计划"
          </p>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
            军规不是束缚，而是保护。<br/>
            在市场中活得久，比赚得快更重要。<br/>
            <strong style={{ color: '#9B59B6' }}>纪律，是投资者最好的护城河。</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default TradingRules
