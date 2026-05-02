import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import SaviApp from './pages/SaviApp'
import SaviDetails from './pages/SaviDetails'
import Feedback from './pages/Feedback'
import Join from './pages/Join'
import Stores from './pages/Stores'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  const [language, setLanguage] = useState('ar')

  return (
    <div className="app" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <ScrollToTop />
      <Navbar language={language} setLanguage={setLanguage} />
      
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Navigate to="/savi-app" replace />} />
          <Route path="/home" element={<Home language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/savi-app" element={<SaviApp language={language} />} />
          <Route path="/savi-details" element={<SaviDetails language={language} />} />
          <Route path="/stores" element={<Stores language={language} />} />
          <Route path="/feedback" element={<Feedback language={language} />} />
          <Route path="/join" element={<Join language={language} />} />
        </Routes>
      </div>

      <Footer language={language} />
    </div>
  )
}

export default App
