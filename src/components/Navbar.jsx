import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar({ language, setLanguage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const content = {
    ar: {
      home: 'الرئيسية',
      about: 'عن الشركة',
      savi: 'تطبيق Savi',
      feedback: 'النصائح والشكاوى',
      join: 'انضم إلينا'
    },
    en: {
      home: 'Home',
      about: 'About',
      savi: 'Savi App',
      feedback: 'Feedback',
      join: 'Join Us'
    }
  }

  const t = content[language]

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <img src="/app_icon.png" alt="Savi" className="h-10 w-10 rounded-full" />
            <span className="text-2xl font-bold text-primary">Ram-Savi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <Link to="/" className={`text-gray-700 hover:text-primary transition-colors pb-1 ${location.pathname === '/' ? 'border-b-2 border-primary text-primary' : ''}`}>
              {t.home}
            </Link>
            <Link to="/about" className={`text-gray-700 hover:text-primary transition-colors pb-1 ${location.pathname === '/about' ? 'border-b-2 border-primary text-primary' : ''}`}>
              {t.about}
            </Link>
            <Link to="/savi-app" className={`text-gray-700 hover:text-primary transition-colors pb-1 ${location.pathname === '/savi-app' ? 'border-b-2 border-primary text-primary' : ''}`}>
              {t.savi}
            </Link>
            <Link to="/feedback" className={`text-gray-700 hover:text-primary transition-colors pb-1 ${location.pathname === '/feedback' ? 'border-b-2 border-primary text-primary' : ''}`}>
              {t.feedback}
            </Link>
            <Link to="/join" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
              {t.join}
            </Link>
            
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
            >
              {language === 'ar' ? 'EN' : 'ع'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
            >
              {language === 'ar' ? 'EN' : 'ع'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              {t.home}
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              {t.about}
            </Link>
            <Link
              to="/savi-app"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              {t.savi}
            </Link>
            <Link
              to="/feedback"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              {t.feedback}
            </Link>
            <Link
              to="/join"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
            >
              {t.join}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar


