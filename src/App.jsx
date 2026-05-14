import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import AuthModal from './components/AuthModal'
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

function App() {
  return (
    <AuthProvider>
      <div className="app">
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
        </Routes>
        <AuthModal />
      </div>
    </AuthProvider>
  )
}

export default App
