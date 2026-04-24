import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getPageTranslations } from '../locales'

function Navbar({ language, setLanguage }) {
    const [mobileOpen, setMobileOpen] = useState(false)
    const location = useLocation()
    const t = getPageTranslations(language, 'navbar')

    useEffect(() => { setMobileOpen(false) }, [location.pathname])

    const isActive = (path) => location.pathname === path

    const navLinks = [
        { path: '/',         label: t.home },
        { path: '/about',    label: t.about },
        { path: '/savi-app', label: t.savi },
        { path: '/feedback', label: t.feedback },
    ]

    return (
        <nav style={{ backgroundColor: '#07080F' }} className="fixed w-full top-0 z-50 border-b border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[70px]">

                    {/* ── Logo ── */}
                    <Link to="/" className="flex items-center gap-3 group select-none">
                        <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-[#E80010] rounded-full blur-[10px] opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                            <img
                                src="/saviIconBG3.jpg"
                                alt="Ram-Savi"
                                className="relative h-10 w-10 rounded-full ring-2 ring-[#E80010]/30 group-hover:ring-[#E80010]/60 transition-all"
                            />
                        </div>
                        <span className="text-[1.2rem] font-black text-white tracking-tight">
              Ram<span className="text-[#E80010]">‑Savi</span>
            </span>
                    </Link>

                    {/* ── Desktop Links ── */}
                    <div className="hidden md:flex items-center gap-0.5">
                        {navLinks.map(({ path, label }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`relative px-4 py-2 text-[0.875rem] font-semibold rounded-lg transition-all duration-200 ${
                                    isActive(path)
                                        ? 'text-white'
                                        : 'text-white/60 hover:text-white hover:bg-white/[0.07]'
                                }`}
                            >
                                {label}
                                {isActive(path) && (
                                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[2.5px] rounded-full bg-[#E80010]" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* ── Desktop Actions ── */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                            className="px-3 py-1.5 text-[0.8rem] font-bold text-white/70 hover:text-white border border-white/[0.14] hover:border-white/30 rounded-lg transition-all duration-200"
                        >
                            {language === 'ar' ? 'EN' : 'ع'}
                        </button>
                        <Link to="/join" className="btn-primary text-[0.875rem]">
                            {t.join}
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* ── Mobile Controls ── */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                            className="px-3 py-1.5 text-[0.8rem] font-bold text-white/70 border border-white/[0.14] rounded-lg"
                        >
                            {language === 'ar' ? 'EN' : 'ع'}
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                            className="p-2 text-white/80 hover:text-white transition-colors"
                        >
                            <div className="w-5 h-4 flex flex-col justify-between">
                                <span className={`block h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                                <span className={`block h-[2px] bg-current rounded-full transition-all duration-200 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
                                <span className={`block h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Mobile Menu ── */}
            <div
                className={`md:hidden transition-all duration-400 overflow-hidden ${
                    mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="bg-[#0F1018]/98 backdrop-blur-2xl border-t border-white/[0.06] px-4 pt-3 pb-5 space-y-1">
                    {navLinks.map(({ path, label }) => (
                        <Link
                            key={path}
                            to={path}
                            className={`flex items-center px-4 py-3 rounded-xl text-[0.9rem] font-semibold transition-all ${
                                isActive(path)
                                    ? 'bg-[#E80010]/14 text-[#E80010]'
                                    : 'text-white/65 hover:bg-white/[0.06] hover:text-white'
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                    <div className="pt-2">
                        <Link
                            to="/join"
                            className="btn-primary w-full justify-center text-[0.9rem] block text-center"
                        >
                            {t.join}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar