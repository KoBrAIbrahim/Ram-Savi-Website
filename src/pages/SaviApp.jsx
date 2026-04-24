import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getPageTranslations } from '../locales'
import { useScrollReveal } from '../hooks/useScrollReveal'

const IOS_APP_STORE_URL    = 'https://apps.apple.com/app/id6755399456'
const ANDROID_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.savi.vouchers'

function AppleIcon() {
    return (
        <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
    )
}

function AndroidIcon() {
    return (
        <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
        </svg>
    )
}

function SaviApp({ language }) {
    const [stores,        setStores]        = useState([])
    const [loadingStores, setLoadingStores] = useState(true)
    const t = getPageTranslations(language, 'saviApp')
    useScrollReveal()

    useEffect(() => {
        ;(async () => {
            try {
                setLoadingStores(true)
                const apiUrl = import.meta.env.VITE_API_COMPANIES_URL
                const res    = await fetch(`${apiUrl}?page=1&limit=10`)
                if (!res.ok) throw new Error()
                const data   = await res.json()
                const comps  = data.data || []
                setStores(Array.isArray(comps) ? comps : [])
            } catch { /* silent */ } finally { setLoadingStores(false) }
        })()
    }, [])

    const merchantBenefits  = [t.benefit1, t.benefit2, t.benefit3, t.benefit4, t.benefit5, t.benefit6]
    const customerBenefits  = [t.benefit7, t.benefit8, t.benefit9, t.benefit10, t.benefit11, t.benefit12]
    const reasons = [
        { title: t.reason1Title, text: t.reason1Text },
        { title: t.reason2Title, text: t.reason2Text },
        { title: t.reason3Title, text: t.reason3Text },
        { title: t.reason4Title, text: t.reason4Text },
    ]
    const steps = [
        { n: 1, title: t.step1Title, text: t.step1Text },
        { n: 2, title: t.step2Title, text: t.step2Text },
        { n: 3, title: t.step3Title, text: t.step3Text },
    ]

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">

            {/* ── HERO ── */}
            <section className="relative bg-[#07080F] pt-36 pb-24 overflow-hidden">
                <div className="blob blob-red w-[600px] h-[600px] -top-40 -right-28 opacity-55 animate-float-blob" />
                <div className="blob blob-red-soft w-[350px] h-[350px] bottom-[-60px] left-[6%] opacity-28 animate-float-blob" style={{ animationDelay: '2.5s' }} />
                <div className="grid-overlay" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="animate-float-slow mb-6 inline-block">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#E80010] rounded-full blur-2xl opacity-50" />
                            <img src="/saviIconBG3.jpg" alt="Savi" className="relative w-28 h-28 md:w-36 md:h-36 rounded-full ring-4 ring-[#E80010]/30 mx-auto" />
                        </div>
                    </div>

                    <div className="badge-white mx-auto mb-5 w-fit animate-fade-up">
                        <span className="w-2 h-2 rounded-full bg-[#E80010] inline-block animate-pulse" />
                        Palestine's #1 Deals App
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-4 animate-fade-up anim-delay-100">{t.title}</h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto mb-4 animate-fade-up anim-delay-200">{t.subtitle}</p>
                    <p className="text-white/45 max-w-xl mx-auto mb-10 text-sm leading-relaxed animate-fade-up anim-delay-300">{t.intro}</p>

                    {/* Download buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-up anim-delay-400">
                        <a href={IOS_APP_STORE_URL} target="_blank" rel="noopener noreferrer"
                           className="group flex items-center gap-3 px-6 py-3.5 bg-white/[0.09] hover:bg-white/[0.15] border border-white/[0.15] hover:border-[#E80010]/40 text-white rounded-xl transition-all min-w-[210px] justify-center font-semibold">
                            <AppleIcon />
                            <span className="text-sm">{t.downloadIOS}</span>
                        </a>
                        <a href={ANDROID_PLAY_STORE_URL} target="_blank" rel="noopener noreferrer"
                           className="group flex items-center gap-3 px-6 py-3.5 bg-white/[0.09] hover:bg-white/[0.15] border border-white/[0.15] hover:border-[#E80010]/40 text-white rounded-xl transition-all min-w-[210px] justify-center font-semibold">
                            <AndroidIcon />
                            <span className="text-sm">{t.downloadAndroid}</span>
                        </a>
                    </div>

                    <Link to="/savi-details"
                          className="btn-primary mx-auto inline-flex animate-fade-up anim-delay-500 text-sm">
                        {t.howToUseSavi}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </section>

            {/* ── WHAT IS SAVI ── */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 text-center reveal">
                    <div className="badge-red mx-auto mb-5 w-fit">{t.whatIsSavi}</div>
                    <h2 className="text-3xl md:text-4xl font-black text-[#07080F] mb-5">{t.whatIsSavi}</h2>
                    <p className="text-gray-500 text-lg leading-relaxed">{t.whatIsSaviText}</p>
                </div>
            </section>

            {/* ── HOW IT WORKS ── */}
            <section className="py-20 bg-[#07080F] relative overflow-hidden">
                <div className="blob blob-red w-[400px] h-[400px] -top-16 -left-16 opacity-28 animate-float-blob" />
                <div className="grid-overlay" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 reveal">
                        <h2 className="text-3xl md:text-4xl font-black text-white">{t.howItWorks}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                        {steps.map((s, i) => (
                            <div key={i} className={`glass-card p-8 reveal delay-${(i+1)*150} hover:border-[#E80010]/30 transition-colors`}>
                                <div className="w-14 h-14 rounded-2xl bg-[#E80010] flex items-center justify-center mb-5 text-2xl font-black text-white">{s.n}</div>
                                <h3 className="text-[1rem] font-bold text-white mb-3">{s.title}</h3>
                                <p className="text-white/55 text-sm leading-relaxed">{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BENEFITS ── */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 reveal">
                        <div className="badge-red mx-auto mb-4 w-fit">{t.benefits}</div>
                        <h2 className="text-3xl md:text-4xl font-black text-[#07080F]">{t.benefits}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        {/* Merchants */}
                        <div className="feature-card p-8 reveal">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-[#E80010] flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-[#07080F]">{t.forMerchants}</h3>
                            </div>
                            <ul className="space-y-3">
                                {merchantBenefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-2.5">
                                        <span className="w-5 h-5 rounded-full bg-[#E80010]/10 text-[#E80010] text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">✓</span>
                                        <span className="text-gray-600 text-sm">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Customers */}
                        <div className="feature-card p-8 reveal delay-150">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-[#E80010] flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-[#07080F]">{t.forCustomers}</h3>
                            </div>
                            <ul className="space-y-3">
                                {customerBenefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-2.5">
                                        <span className="w-5 h-5 rounded-full bg-[#E80010]/10 text-[#E80010] text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">✓</span>
                                        <span className="text-gray-600 text-sm">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY DIFFERENT ── */}
            <section className="py-20 bg-[#f8f8fb]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 reveal">
                        <h2 className="text-3xl md:text-4xl font-black text-[#07080F]">{t.whyDifferent}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {reasons.map((r, i) => (
                            <div key={i} className={`feature-card p-7 text-center reveal delay-${(i+1)*100}`}>
                                <div className="w-11 h-11 rounded-2xl bg-[#E80010]/10 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-[#E80010] font-black">{i + 1}</span>
                                </div>
                                <h4 className="font-bold text-[#07080F] text-sm mb-2">{r.title}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{r.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PARTNER STORES ── */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 reveal">
                        <div className="badge-red mx-auto mb-4 w-fit">{t.partnerStores}</div>
                        <h2 className="text-3xl md:text-4xl font-black text-[#07080F] mb-3">{t.partnerStores}</h2>
                        <p className="text-gray-500">{t.partnerStoresSubtitle}</p>
                    </div>

                    {loadingStores ? (
                        <div className="flex justify-center py-12">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-10 h-10 border-2 border-[#E80010] border-t-transparent rounded-full animate-spin" />
                                <p className="text-gray-400 text-sm">{t.loadingStores}</p>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 mb-10">
                                {stores.slice(0, 5).map((store) => (
                                    <div key={store.id}
                                         className="flex flex-col items-center bg-white rounded-2xl p-4 border border-gray-100 hover:border-[#E80010]/20 hover:shadow-card-lg transition-all group">
                                        <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-gray-100 group-hover:ring-[#E80010]/25 transition-all mb-3">
                                            <img src={store.logoUrl || '/saviIconBG3.jpg'} alt={store.name}
                                                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                 onError={(e) => { e.target.src = '/saviIconBG3.jpg' }} />
                                        </div>
                                        <h3 className="font-bold text-[#07080F] text-xs text-center line-clamp-2">{store.name}</h3>
                                        {store.address && <p className="text-gray-400 text-[0.7rem] mt-1 text-center">{store.address}</p>}
                                        {store.averageRating > 0 && (
                                            <div className="flex items-center gap-0.5 mt-1.5">
                                                <span className="text-yellow-400 text-xs">★</span>
                                                <span className="text-gray-500 text-xs">{store.formattedRating || store.averageRating.toFixed(1)}</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="text-center">
                                <Link to="/stores" className="btn-primary mx-auto inline-flex">
                                    {t.viewAllStores}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="relative overflow-hidden rounded-[1.8rem] bg-[#07080F] p-12 text-center reveal">
                        <div className="blob blob-red w-[350px] h-[350px] -top-20 -right-20 opacity-45 animate-float-blob" />
                        <div className="grid-overlay" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{t.learnMore}</h2>
                            <p className="text-white/55 mb-8">{t.learnMoreText}</p>
                            <Link to="/savi-details" className="btn-primary mx-auto inline-flex">{t.learnMoreAboutApp}</Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default SaviApp