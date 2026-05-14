import { useNavigate } from 'react-router-dom'

function AssetAlloc() {
  const navigate = useNavigate()

  return (
    <div className="sub-page asset-page">
      <button className="page-back" onClick={() => navigate('/heng')}>
        <span>←</span> 返回体系篇
      </button>

      <div className="asset-header">
        <div className="page-badge" style={{ background: 'linear-gradient(145deg, #2ECC71, #1ABC9C)' }}>
          🎯
        </div>
        <h1>资产配置</h1>
        <p>科学分配你的资产，在风险和收益之间找到平衡</p>
      </div>

      {/* 禁止项 - 醒目提醒 */}
      <div className="asset-warning">
        <div className="warning-item danger">
          <span className="warning-icon">🚫</span>
          <div>
            <h4>禁止：借钱炒股</h4>
            <p>融资、配资、贷款炒股是投资大忌。杠杆会放大亏损，一旦市场不利，可能血本无归甚至负债。永远只用闲钱投资。</p>
          </div>
        </div>
        <div className="warning-item danger">
          <span className="warning-icon">🚫</span>
          <div>
            <h4>禁止：全部投入股票</h4>
            <p>必须留足12个月的必须消费资金（如孩子学费、房贷月供、医疗保险、家庭生活费等）。这些钱绝不能投入股市。</p>
          </div>
        </div>
      </div>

      {/* 中美中产资产配置对比 */}
      <div className="asset-section">
        <h2>🇨🇳 vs 🇺🇸 中产家庭资产配置对比</h2>
        <p className="asset-section-desc">中国中产家庭资产过度集中在房产（约70%），而美国中产家庭股票/基金配置占比约35%。建议逐步提高金融资产配置比例。</p>

        <div className="asset-compare">
          <div className="asset-compare-card">
            <h3>🇨🇳 中国中产（现状）</h3>
            <div className="asset-bar-chart">
              <div className="asset-bar-item">
                <span className="asset-bar-label">房产</span>
                <div className="asset-bar-track">
                  <div className="asset-bar-fill" style={{ width: '70%', background: '#E74C3C' }} />
                </div>
                <span className="asset-bar-value">~70%</span>
              </div>
              <div className="asset-bar-item">
                <span className="asset-bar-label">现金/存款</span>
                <div className="asset-bar-track">
                  <div className="asset-bar-fill" style={{ width: '15%', background: '#F39C12' }} />
                </div>
                <span className="asset-bar-value">~15%</span>
              </div>
              <div className="asset-bar-item">
                <span className="asset-bar-label">股票/基金</span>
                <div className="asset-bar-track">
                  <div className="asset-bar-fill" style={{ width: '10%', background: '#3498DB' }} />
                </div>
                <span className="asset-bar-value">~10%</span>
              </div>
              <div className="asset-bar-item">
                <span className="asset-bar-label">其他</span>
                <div className="asset-bar-track">
                  <div className="asset-bar-fill" style={{ width: '5%', background: '#95A5A6' }} />
                </div>
                <span className="asset-bar-value">~5%</span>
              </div>
            </div>
            <p className="asset-compare-note" style={{ color: '#E74C3C' }}>
              ⚠️ 房产占比过高，流动性差，抗风险能力弱
            </p>
          </div>

          <div className="asset-compare-card">
            <h3>🇺🇸 美国中产（参考）</h3>
            <div className="asset-bar-chart">
              <div className="asset-bar-item">
                <span className="asset-bar-label">股票/基金</span>
                <div className="asset-bar-track">
                  <div className="asset-bar-fill" style={{ width: '35%', background: '#2ECC71' }} />
                </div>
                <span className="asset-bar-value">~35%</span>
              </div>
              <div className="asset-bar-item">
                <span className="asset-bar-label">房产</span>
                <div className="asset-bar-track">
                  <div className="asset-bar-fill" style={{ width: '25%', background: '#3498DB' }} />
                </div>
                <span className="asset-bar-value">~25%</span>
              </div>
              <div className="asset-bar-item">
                <span className="asset-bar-label">养老金/保险</span>
                <div className="asset-bar-track">
                  <div className="asset-bar-fill" style={{ width: '20%', background: '#9B59B6' }} />
                </div>
                <span className="asset-bar-value">~20%</span>
              </div>
              <div className="asset-bar-item">
                <span className="asset-bar-label">债券</span>
                <div className="asset-bar-track">
                  <div className="asset-bar-fill" style={{ width: '10%', background: '#1ABC9C' }} />
                </div>
                <span className="asset-bar-value">~10%</span>
              </div>
              <div className="asset-bar-item">
                <span className="asset-bar-label">现金</span>
                <div className="asset-bar-track">
                  <div className="asset-bar-fill" style={{ width: '10%', background: '#F39C12' }} />
                </div>
                <span className="asset-bar-value">~10%</span>
              </div>
            </div>
            <p className="asset-compare-note" style={{ color: '#2ECC71' }}>
              ✅ 金融资产占比高，资产结构更健康
            </p>
          </div>
        </div>
      </div>

      {/* 45岁中产配置建议 */}
      <div className="asset-section">
        <h2>📋 45岁中产家庭资产配置建议</h2>
        <p className="asset-section-desc">45岁是"上有老下有小"的阶段，收入处于高峰期但退休在即。核心原则：稳字当头，逐步降低风险资产比例。</p>

        <div className="asset-advice-card">
          <div className="asset-advice-grid">
            <div className="asset-advice-item">
              <div className="advice-icon" style={{ background: '#E74C3C' }}>🏠</div>
              <div className="advice-info">
                <h4>自住房产 <span className="advice-pct">25-30%</span></h4>
                <p>一套自住房即可，不建议投资多套房产。房产流动性差，维护成本高。如果已有两套以上，建议逐步减持。</p>
              </div>
            </div>
            <div className="asset-advice-item">
              <div className="advice-icon" style={{ background: '#2ECC71' }}>📈</div>
              <div className="advice-info">
                <h4>股票/指数基金 <span className="advice-pct">25-30%</span></h4>
                <p>以宽基指数基金（沪深300、中证500）为主，可搭配少量优质个股。建议通过定投方式逐步建仓，降低择时风险。</p>
              </div>
            </div>
            <div className="asset-advice-item">
              <div className="advice-icon" style={{ background: '#3498DB' }}>🏦</div>
              <div className="advice-info">
                <h4>债券/固收 <span className="advice-pct">15-20%</span></h4>
                <p>国债、高等级信用债、债券基金。提供稳定收益，在股市下跌时起到"减震器"作用。</p>
              </div>
            </div>
            <div className="asset-advice-item">
              <div className="advice-icon" style={{ background: '#9B59B6' }}>🛡️</div>
              <div className="advice-info">
                <h4>保险/养老金 <span className="advice-pct">10-15%</span></h4>
                <p>重疾险、医疗险、意外险必须配齐。有条件可配置商业养老金，为退休做准备。</p>
              </div>
            </div>
            <div className="asset-advice-item">
              <div className="advice-icon" style={{ background: '#F39C12' }}>💰</div>
              <div className="advice-info">
                <h4>现金/货币基金 <span className="advice-pct">5-10%</span></h4>
                <p>保留3-6个月家庭支出的现金等价物，应对突发情况。货币基金（余额宝等）是不错的选择。</p>
              </div>
            </div>
            <div className="asset-advice-item">
              <div className="advice-icon" style={{ background: '#1ABC9C' }}>🌍</div>
              <div className="advice-info">
                <h4>黄金/其他 <span className="advice-pct">0-5%</span></h4>
                <p>少量黄金作为避险资产，对冲通胀和地缘风险。不建议超过总资产的5%。</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 配置原则 */}
      <div className="asset-section">
        <h2>📐 资产配置核心原则</h2>
        <div className="asset-principles">
          <div className="principle-card">
            <span className="principle-num">1</span>
            <h4>先留足"保命钱"</h4>
            <p>12个月必须消费的资金（学费、房贷、保险、生活费）必须放在安全的地方，绝不能投入股市。</p>
          </div>
          <div className="principle-card">
            <span className="principle-num">2</span>
            <h4>分散投资</h4>
            <p>不要把所有鸡蛋放在一个篮子里。跨资产类别（股票、债券、现金）、跨市场（A股、港股、美股）分散。</p>
          </div>
          <div className="principle-card">
            <span className="principle-num">3</span>
            <h4>定期再平衡</h4>
            <p>每半年或一年检查一次资产配比，偏离目标超过5%时进行调整，实现"低买高卖"。</p>
          </div>
          <div className="principle-card">
            <span className="principle-num">4</span>
            <h4>年龄法则</h4>
            <p>股票配置比例参考"100-年龄"法则。45岁建议股票不超过55%，随着年龄增长逐步降低。</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetAlloc
