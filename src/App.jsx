import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import AuthModal from './components/AuthModal'
import VisitTracker from './components/VisitTracker'
import Home from './pages/Home'
import Zhi from './pages/Zhi'
import Heng from './pages/Heng'
import Xing from './pages/Xing'
import Sheng from './pages/Sheng'
import ZhiTest from './pages/ZhiTest'
import ZhiResult from './pages/ZhiResult'
import MarketQuiz from './pages/MarketQuiz'
import MyProfile from './pages/MyProfile'
import AdminPanel from './pages/AdminPanel'
import InvestSect from './pages/InvestSect'
import AssetAlloc from './pages/AssetAlloc'
import ValueInvesting from './pages/ValueInvesting'
import GrowthInvesting from './pages/GrowthInvesting'
import InvestmentMindset from './pages/InvestmentMindset'
import StockPicking from './pages/StockPicking'
import SellStock from './pages/SellStock'
import MarketVolatility from './pages/MarketVolatility'
import Tools from './pages/Tools'
import PositionControl from './pages/PositionControl'
import TradingRules from './pages/TradingRules'
import History from './pages/History'
import Contact from './pages/Contact'

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <VisitTracker />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zhi" element={<Zhi />} />
          <Route path="/heng" element={<Heng />} />
          <Route path="/xing" element={<Xing />} />
          <Route path="/sheng" element={<Sheng />} />
          <Route path="/zhi/test/:moduleId" element={<ZhiTest />} />
          <Route path="/zhi/result" element={<ZhiResult />} />
          <Route path="/zhi/market" element={<MarketQuiz />} />
          <Route path="/my" element={<MyProfile />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/heng/sect" element={<InvestSect />} />
          <Route path="/heng/asset" element={<AssetAlloc />} />
          <Route path="/heng/value" element={<ValueInvesting />} />
          <Route path="/heng/growth" element={<GrowthInvesting />} />
          <Route path="/heng/mindset" element={<InvestmentMindset />} />
          <Route path="/xing/stock-picking" element={<StockPicking />} />
          <Route path="/xing/sell-stock" element={<SellStock />} />
          <Route path="/xing/volatility" element={<MarketVolatility />} />
          <Route path="/qi" element={<Tools />} />
          <Route path="/heng/position" element={<PositionControl />} />
          <Route path="/heng/rules" element={<TradingRules />} />
          <Route path="/sheng/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <AuthModal />
      </div>
    </AuthProvider>
  )
}

export default App
