import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import SaviApp from './pages/SaviApp'
import SaviDetails from './pages/SaviDetails'
import Feedback from './pages/Feedback'
import Join from './pages/Join'
import Stores from './pages/Stores'

function App() {
  const [language, setLanguage] = useState('ar')

  return (
    <div className="app" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar language={language} setLanguage={setLanguage} />
      
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home language={language} />} />
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
