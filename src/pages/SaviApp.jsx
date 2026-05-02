import { Link } from 'react-router-dom'
import { getPageTranslations } from '../locales'
import { useScrollReveal } from '../hooks/useScrollReveal'

const IOS_APP_STORE_URL     = 'https://apps.apple.com/app/id6755399456'
const ANDROID_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.savi.vouchers'

function AppleIcon() {
    return (
        <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
    )
}

function GooglePlayIcon() {
    return (
        <svg viewBox="0 0 24 24" width="26" height="26" className="flex-shrink-0">
            <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#EA4335"/>
            <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#FBBC04"/>
            <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81Z" fill="#4285F4"/>
            <path d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="#34A853"/>
        </svg>
    )
}

// Benefit icons — each maps to one of the 8 customer benefits
const BENEFIT_ICONS = [
    // Save money
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
    // Discover
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
    // Daily deals
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>,
    // One subscription
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>,
    // Verified
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>,
    // Instant
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
    // Browse/Filter
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>,
    // Exclusive
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>,
]

function SaviApp({ language }) {
    const t = getPageTranslations(language, 'saviApp')
    useScrollReveal()

    // ── Data arrays ──────────────────────────────────────────────────
    const benefits = [
        t.benefit1, t.benefit2, t.benefit3, t.benefit4,
        t.benefit5, t.benefit6, t.benefit7, t.benefit8,
    ]

    const steps = [
        { n: 1, title: t.step1Title, text: t.step1Text,
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg> },
        { n: 2, title: t.step2Title, text: t.step2Text,
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg> },
        { n: 3, title: t.step3Title, text: t.step3Text,
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> },
    ]

    const reasons = [
        { title: t.reason1Title, text: t.reason1Text },
        { title: t.reason2Title, text: t.reason2Text },
        { title: t.reason3Title, text: t.reason3Text },
        { title: t.reason4Title, text: t.reason4Text },
    ]

    // ── Download buttons — App Store / Google Play badge style ────────
    const DownloadButtons = () => (
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={IOS_APP_STORE_URL} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5 min-w-[185px]"
               style={{ background: '#000000', color: '#ffffff' }}>
                <AppleIcon />
                <div className="text-left">
                    <div className="text-[0.62rem] leading-none opacity-80 tracking-wide">Download on the</div>
                    <div className="text-[1.1rem] font-bold leading-tight mt-0.5">App Store</div>
                </div>
            </a>
            <a href={ANDROID_PLAY_STORE_URL} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5 min-w-[185px]"
               style={{ background: '#000000', color: '#ffffff' }}>
                <GooglePlayIcon />
                <div className="text-left">
                    <div className="text-[0.62rem] leading-none opacity-80 tracking-widest uppercase">Get it on</div>
                    <div className="text-[1.1rem] font-semibold leading-tight mt-0.5">Google Play</div>
                </div>
            </a>
        </div>
    )

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">

            {/* ── HERO ── */}
            <section className="relative bg-[#8B0000] pt-36 pb-28 overflow-hidden">
                <div className="blob blob-red w-[600px] h-[600px] -top-40 -right-28 opacity-55 animate-float-blob" />
                <div className="blob blob-red-soft w-[350px] h-[350px] bottom-[-60px] left-[6%] opacity-28 animate-float-blob" style={{ animationDelay: '2.5s' }} />
                <div className="grid-overlay" />

                {/* Watermark logo — left for EN, right for AR */}
                <div
                    className={`absolute top-0 bottom-0 flex items-center pointer-events-none select-none hidden lg:flex ${language === 'ar' ? 'right-0' : 'left-0'}`}
                    style={{ opacity: 0.80 }}
                >
                    <img src="/saviIcon3.png" alt="" className="w-[580px] h-[580px] object-contain" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="badge-white mx-auto mb-5 w-fit animate-fade-up">
                        <span className="w-2 h-2 rounded-full bg-[#FF0000] inline-block animate-pulse" />
                        Palestine's #1 Deals App
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white mb-4 animate-fade-up anim-delay-100">
                        {t.title}
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto mb-4 animate-fade-up anim-delay-200">
                        {t.subtitle}
                    </p>
                    <p className="text-white/45 max-w-xl mx-auto mb-10 text-sm leading-relaxed animate-fade-up anim-delay-300">
                        {t.intro}
                    </p>

                    {/* Download CTAs */}
                    <div className="mb-8 animate-fade-up anim-delay-400">
                        {/* eslint-disable-next-line react-hooks/static-components */}
                        <DownloadButtons />
                    </div>

                    <Link to="/savi-details"
                          className="text-white/50 hover:text-white/80 text-sm underline underline-offset-4 transition-colors animate-fade-up anim-delay-500">
                        {t.howToUseSavi}
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

            {/* ── HOW IT WORKS — customer journey ── */}
            <section className="py-20 bg-[#8B0000] relative overflow-hidden">
                <div className="blob blob-red w-[400px] h-[400px] -top-16 -left-16 opacity-28 animate-float-blob" />
                <div className="grid-overlay" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 reveal">
                        <h2 className="text-3xl md:text-4xl font-black text-white">{t.howItWorks}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                        {steps.map((s, i) => (
                            <div key={i} className={`glass-card p-8 reveal delay-${(i+1)*150} hover:border-[#FF0000]/30 transition-colors`}>
                                {/* Step number + icon */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-14 h-14 rounded-2xl text-white flex items-center justify-center flex-shrink-0">
                                        {s.icon}
                                    </div>
                                    <span className="text-white/20 text-5xl font-black leading-none">{s.n}</span>
                                </div>
                                <h3 className="text-[1rem] font-bold text-white mb-3">{s.title}</h3>
                                <p className="text-white/55 text-sm leading-relaxed">{s.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Inline download nudge */}
                    <div className="mt-12 text-center reveal">
                        <p className="text-white/40 text-sm mb-6">Ready to start?</p>
                        {/* eslint-disable-next-line react-hooks/static-components */}
                        <DownloadButtons />
                    </div>
                </div>
            </section>

            {/* ── BENEFITS — customer only, 2×4 grid ── */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 reveal">
                        <div className="badge-red mx-auto mb-4 w-fit">{t.benefits}</div>
                        <h2 className="text-3xl md:text-4xl font-black text-[#07080F]">{t.benefits}</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {benefits.map((b, i) => (
                            <div key={i} className={`feature-card p-6 reveal delay-${((i % 4) + 1) * 100} hover:border-[#FF0000]/20 transition-colors`}>
                                <div className="w-10 h-10 rounded-xl bg-[#FF0000]/10 flex items-center justify-center mb-4 text-[#FF0000]">
                                    {BENEFIT_ICONS[i]}
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed font-medium">{b}</p>
                            </div>
                        ))}
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
                                <div className="w-11 h-11 rounded-2xl bg-[#FF0000]/10 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-[#FF0000] font-black">{i + 1}</span>
                                </div>
                                <h4 className="font-bold text-[#07080F] text-sm mb-2">{r.title}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{r.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="relative overflow-hidden rounded-[1.8rem] bg-[#8B0000] p-12 text-center reveal">
                        <div className="blob blob-red w-[350px] h-[350px] -top-20 -right-20 opacity-45 animate-float-blob" />
                        <div className="grid-overlay" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{t.learnMore}</h2>
                            <p className="text-white/55 mb-8 max-w-md mx-auto">{t.learnMoreText}</p>
                            {/* Primary: download buttons */}
                            <div className="mb-6">
                                {/* eslint-disable-next-line react-hooks/static-components */}
                                <DownloadButtons />
                            </div>
                            {/* Secondary: learn more link */}
                            <Link to="/savi-details"
                                  className="text-white/40 hover:text-white/70 text-sm underline underline-offset-4 transition-colors">
                                {t.learnMoreAboutApp}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default SaviApp
