import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: '首页' },
  { path: '/zhi', label: '知', sublabel: '认知', color: '#3498db' },
  { path: '/heng', label: '恒', sublabel: '体系', color: '#27ae60' },
  { path: '/xing', label: '行', sublabel: '实践', color: '#e74c3c' },
  { path: '/sheng', label: '省', sublabel: '复盘', color: '#9b59b6' },
]

function Navbar() {
  const location = useLocation()
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🏠</span>
          <span className="logo-text">投资养家</span>
        </Link>
        <ul className="nav-menu">
          {navItems.map(item => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                style={item.color ? {
                  '--dim-color': item.color,
                } : {}}
              >
                {item.sublabel ? (
                  <span className="nav-dim">
                    <span className="nav-dim-label">{item.label}</span>
                    <span className="nav-dim-sub">{item.sublabel}</span>
                  </span>
                ) : item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
