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
        { path: '/savi-app',     label: t.savi },
        { path: '/savi-details', label: t.howToUse },
        { path: '/stores',       label: t.stores },
        { path: '/feedback',     label: t.feedback },
    ]

    return (
        <nav style={{ backgroundColor: '#8B0000' }} className="fixed w-full top-0 z-50 border-b border-white/20 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[70px]">

                    {/* ── Logo ── */}
                    <Link to="/savi-app" className="flex items-center gap-3 group select-none">
                        <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-white rounded-full blur-[10px] opacity-20 group-hover:opacity-35 transition-opacity duration-300" />
                            <img
                                src="/saviIconBG3.jpg"
                                alt="Savi"
                                className="relative h-10 w-10 rounded-full ring-2 ring-white/30 group-hover:ring-white/60 transition-all"
                            />
                        </div>
                        <span className="text-[1.2rem] font-black text-white tracking-tight">
                            <span className="text-white/90">Savi</span>
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
                                        ? 'text-white bg-[#8B0000]/60'
                                        : 'text-white/70 hover:text-white hover:bg-white/[0.12]'
                                }`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* ── Desktop Actions ── */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                            className="px-3 py-1.5 text-[0.8rem] font-bold text-white/80 hover:text-white border border-white/30 hover:border-white/60 rounded-lg transition-all duration-200"
                        >
                            {language === 'ar' ? 'EN' : 'ع'}
                        </button>
                        <Link
                            to="/join"
                            className="inline-flex items-center gap-2 px-4 py-2 text-[0.875rem] font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                            style={{ background: 'rgba(255,255,255,0.95)', color: '#FF0000' }}
                        >
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
                            className="px-3 py-1.5 text-[0.8rem] font-bold text-white/80 border border-white/30 rounded-lg"
                        >
                            {language === 'ar' ? 'EN' : 'ع'}
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                            className="p-2 text-white/90 hover:text-white transition-colors"
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
                <div style={{ backgroundColor: 'rgba(204,0,0,0.97)' }} className="backdrop-blur-2xl border-t border-white/10 px-4 pt-3 pb-5 space-y-1">
                    {navLinks.map(({ path, label }) => (
                        <Link
                            key={path}
                            to={path}
                            className={`flex items-center px-4 py-3 rounded-xl text-[0.9rem] font-semibold transition-all ${
                                isActive(path)
                                    ? 'bg-[#8B0000]/60 text-white'
                                    : 'text-white/75 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                    <div className="pt-2">
                        <Link
                            to="/join"
                            className="w-full block text-center text-[0.9rem] font-bold py-3 rounded-xl transition-all"
                            style={{ background: 'rgba(255,255,255,0.95)', color: '#FF0000' }}
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
