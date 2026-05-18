import { useNavigate } from 'react-router-dom'

function SellStock() {
  const navigate = useNavigate()

  return (
    <div className="sub-page">
      <div className="page-header">
        <button className="page-back" onClick={() => navigate('/xing')}>
          <span>←</span> 返回实践篇
        </button>
        <div className="page-badge" style={{ background: 'linear-gradient(145deg, #e74c3c, #c0392b)' }}>
          💰
        </div>
        <h1>如何卖股</h1>
        <p>会买的是徒弟，会卖的是师傅</p>
      </div>

      {/* 开篇引言 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(231, 76, 60, 0.12), rgba(192, 57, 43, 0.06))',
          border: '1px solid rgba(231, 76, 60, 0.25)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <p style={{ fontSize: '16px', color: 'var(--text-primary)', lineHeight: 1.8, margin: '0 0 16px', fontWeight: 500 }}>
            "会买的是徒弟，会卖的是师傅"
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
            买入决定你的成本，卖出决定你的利润。<strong>卖出时机的判断</strong>，往往是投资中最难的一环。
            很多人能选出好公司，却因为在错误的时间卖出，导致收益大打折扣。
          </p>
        </div>
      </div>

      {/* 为什么要卖出 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>🤔</span>
            <div>
              <h2 style={{ fontSize: '18px', color: '#E74C3C', margin: 0 }}>不是要长期持有吗，为什么要卖出？</h2>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '16px' }}>
            长期持有是<strong>手段</strong>，不是目的。我们的目的是让资本增值。
            当某些条件出现时，卖出是更明智的选择：
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { 
                icon: '📈', 
                title: '当股价严重超出内在价值时', 
                desc: '市场疯狂时，股价可能远超公司实际价值，此时持有风险大于收益',
                color: '#E74C3C'
              },
              { 
                icon: '⚠️', 
                title: '当基本面出现严重问题时', 
                desc: '公司护城河被侵蚀、行业格局恶化、管理层变质，好公司可能变成坏公司',
                color: '#F39C12'
              },
              { 
                icon: '💎', 
                title: '当更好的机会出现时', 
                desc: '发现明显更优质、更低估的投资标的，换仓是理性的选择',
                color: '#2ECC71'
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

      {/* 判断股价超出内在价值 */}
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
              <h2 style={{ fontSize: '18px', color: '#9B59B6', margin: 0 }}>怎么判断股价严重超出内在价值？</h2>
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
              典型信号：估值快速膨胀
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 12px' }}>
              当公司PE（市盈率）从<strong>20倍快速拉升到50倍以上</strong>，往往是短期情绪推动，而非基本面支撑。
              这意味着股价已经透支了未来3-5年的增长预期。
            </p>
            <div style={{
              padding: '12px',
              background: 'rgba(231, 76, 60, 0.1)',
              borderRadius: '8px',
              fontSize: '12px',
              color: '#E74C3C',
              lineHeight: 1.6,
            }}>
              <strong>举例：</strong>一家年利润10亿、合理估值200亿的公司，如果因为概念炒作市值涨到500亿，
              相当于提前兑现了未来多年的增长。即使公司继续成长，股价也可能长期横盘甚至回调。
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>其他高估信号：</div>
            {[
              '市场充斥着"这次不一样"、"XX元年"等乐观言论',
              '身边不炒股的人开始推荐股票',
              '分析师目标价不断上调，理由越来越牵强',
              '成交量异常放大，换手率超过10%',
              '公司开始频繁发布"利好"消息配合股价',
              'PEG（市盈增长比率）> 3，甚至为负（利润下滑但股价上涨）',
              '市净率PB > 10（非科技/轻资产行业）',
              '股息率低于1%，甚至停止分红',
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
            background: 'rgba(243, 156, 18, 0.08)',
            border: '1px solid rgba(243, 156, 18, 0.15)',
            borderRadius: '10px',
          }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#F39C12', marginBottom: '6px' }}>💡 操作建议</div>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              高估不一定要全卖，可以<strong>分批减仓</strong>。比如PE&gt;40卖1/3，PE&gt;50再卖1/3，
              既锁定利润，又保留部分仓位享受可能的继续上涨。
            </p>
          </div>
        </div>
      </div>

      {/* 判断基本面出现问题 */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>⚠️</span>
            <div>
              <h2 style={{ fontSize: '18px', color: '#E74C3C', margin: 0 }}>怎么判断基本面出现问题？</h2>
            </div>
          </div>

          {/* 管理层问题 */}
          <div style={{
            padding: '16px',
            background: 'rgba(231, 76, 60, 0.08)',
            border: '1px solid rgba(231, 76, 60, 0.2)',
            borderRadius: '12px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#E74C3C', marginBottom: '12px' }}>
              🏢 管理层出现大问题
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                '创始人/核心高管频繁减持套现，且金额巨大',
                '管理层诚信问题：财务造假、信披违规、关联交易利益输送',
                '战略摇摆不定：今年说做A，明年改做B，缺乏定力',
                '盲目多元化：进入完全不懂的领域，烧钱扩张',
                '内部权力斗争：高管频繁离职，核心团队动荡',
                '对股东态度恶劣：漠视小股东权益，分红吝啬却给自己发高薪',
                '过度自信：盲目加杠杆、过度扩张，忽视风险',
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  padding: '8px 10px',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '6px',
                }}>
                  <span style={{ color: '#E74C3C', fontSize: '12px' }}>✗</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 重大风险事件 */}
          <div style={{
            padding: '16px',
            background: 'rgba(243, 156, 18, 0.08)',
            border: '1px solid rgba(243, 156, 18, 0.2)',
            borderRadius: '12px',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#F39C12', marginBottom: '12px' }}>
              🚨 公司出现重大风险
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { title: '政策/监管风险', desc: '如教培行业"双减"、互联网反垄断、医药集采、关税制裁等' },
                { title: '行业格局恶化', desc: '新进入者疯狂烧钱抢市场，价格战导致全行业利润下滑' },
                { title: '技术路线被颠覆', desc: '如诺基亚被智能手机淘汰、传统燃油车被新能源冲击' },
                { title: '核心资产受损', desc: '矿山资源枯竭、专利到期、核心客户流失、关键人才出走' },
                { title: '财务危机', desc: '现金流断裂、债务违约、大额坏账、商誉暴雷' },
                { title: '安全事故/法律诉讼', desc: '重大生产事故、环保处罚、巨额赔偿诉讼' },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '10px',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '8px',
                }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#F39C12', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 财务指标恶化 */}
          <div style={{
            padding: '16px',
            background: 'rgba(155, 89, 182, 0.08)',
            border: '1px solid rgba(155, 89, 182, 0.2)',
            borderRadius: '12px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#9B59B6', marginBottom: '12px' }}>
              📉 财务指标持续恶化
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { metric: '收入增速', trend: '连续2季度下滑', warning: '需求萎缩或竞争失利' },
                { metric: '毛利率', trend: '持续下降', warning: '定价权丧失或成本失控' },
                { metric: 'ROE', trend: '跌破15%且持续走低', warning: '盈利能力下降' },
                { metric: '经营现金流', trend: '连续为负', warning: '利润未转化为现金' },
                { metric: '应收账款', trend: '增速>收入增速', warning: '赊销激进，回款困难' },
                { metric: '负债率', trend: '快速攀升>70%', warning: '财务风险加大' },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '10px',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '8px',
                }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#9B59B6' }}>{item.metric}</div>
                  <div style={{ fontSize: '11px', color: '#E74C3C', margin: '2px 0' }}>{item.trend}</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-dim)' }}>{item.warning}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 更好的机会 */}
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
              <h2 style={{ fontSize: '18px', color: '#2ECC71', margin: 0 }}>当更好的机会出现时</h2>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '16px' }}>
            投资是<strong>比较</strong>的艺术。当你发现一只明显更优质、更低估的股票时，
            换仓是理性的选择。但注意：不要频繁换仓，交易是有成本的。
          </p>

          <div style={{
            padding: '16px',
            background: 'rgba(46, 204, 113, 0.08)',
            border: '1px solid rgba(46, 204, 113, 0.2)',
            borderRadius: '12px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#2ECC71', marginBottom: '12px' }}>
              换仓的判断标准
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { condition: '新标的估值显著更低', example: 'PE相差一倍以上（如15倍 vs 35倍），且质地相当' },
                { condition: '新标的成长性明显更好', example: '同样估值下，利润增速相差2倍以上' },
                { condition: '行业景气度差异', example: '原持仓行业进入衰退期，新标的是高景气行业' },
                { condition: '护城河差距', example: '新标的具有更宽、更深的竞争壁垒' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '10px',
                  padding: '10px',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '8px',
                }}>
                  <span style={{ fontSize: '16px', color: '#2ECC71' }}>✓</span>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)' }}>{item.condition}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.example}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            marginTop: '16px',
            padding: '14px',
            background: 'rgba(231, 76, 60, 0.08)',
            border: '1px solid rgba(231, 76, 60, 0.15)',
            borderRadius: '10px',
          }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#E74C3C', marginBottom: '6px' }}>⚠️ 换仓的陷阱</div>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              不要因为"涨得慢"就换仓，不要因为"别人推荐"就换仓。<br/>
              频繁换仓往往源于<strong>缺乏耐心</strong>，而非真正的机会发现。
            </p>
          </div>
        </div>
      </div>

      {/* 卖出检查清单 */}
      <div style={{ padding: '0 20px 40px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', margin: '0 0 20px', textAlign: 'center' }}>
            📋 卖出决策检查清单
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { title: '估值检查', items: ['PE > 50倍（成长股）或 > 30倍（价值股）', 'PEG > 3', '市值远超合理估值区间', '市场情绪极度乐观'] },
              { title: '基本面检查', items: ['收入/利润连续下滑', '毛利率持续下降', 'ROE跌破15%', '经营现金流恶化'] },
              { title: '管理层检查', items: ['核心高管大额减持', '战略方向频繁变动', '诚信问题（造假/违规）', '漠视股东权益'] },
              { title: '风险事件', items: ['政策重大不利变化', '行业格局恶化', '核心技术/客户流失', '财务危机信号'] },
              { title: '机会成本', items: ['发现明显更优质标的', '新标的估值低50%以上', '行业景气度差异显著'] },
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
                      background: 'rgba(231, 76, 60, 0.1)',
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
            background: 'linear-gradient(135deg, rgba(231, 76, 60, 0.1), rgba(192, 57, 43, 0.05))',
            border: '1px solid rgba(231, 76, 60, 0.2)',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '13px', color: 'var(--text-primary)', margin: '0 0 8px', fontWeight: 500 }}>
              💡 卖出的核心心法
            </p>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.7 }}>
              卖出不是"止盈"，而是<strong>风险收益比变差了</strong>。<br/>
              当你持有某只股票的理由不再成立，就是离开的时候。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellStock
