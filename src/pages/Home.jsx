import { Link } from 'react-router-dom'
import { getPageTranslations } from '../locales'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ArrowRight() {
    return (
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    )
}

function Home({ language }) {
    const t = getPageTranslations(language, 'home')
    useScrollReveal()

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">

            {/* ══════════════════════════════════════
          HERO  (dark, full-screen)
      ══════════════════════════════════════ */}
            <section className="relative min-h-screen flex items-center bg-[#8B0000] overflow-hidden">
                {/* Animated blobs */}
                <div className="blob blob-red w-[640px] h-[640px] -top-40 -right-32 opacity-55 animate-float-blob" />
                <div className="blob blob-red w-[380px] h-[380px] bottom-[-80px] left-[8%] opacity-28 animate-float-blob" style={{ animationDelay: '3.5s' }} />
                <div className="blob blob-red-soft w-[280px] h-[280px] top-[45%] left-[55%] opacity-35 animate-float-blob" style={{ animationDelay: '1.8s' }} />

                {/* Grid + noise */}
                <div className="grid-overlay" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                        {/* Left — copy */}
                        <div>
                            <div className="badge-white animate-fade-up mb-7 w-fit">
                                <span className="w-2 h-2 rounded-full bg-[#E80010] inline-block animate-pulse" />
                                {t.heroBadge}
                            </div>

                            <h1 className="text-5xl md:text-[4.5rem] font-black text-white leading-[1.06] mb-5 animate-fade-up anim-delay-100">
                                {t.title}
                                <br />
                                <span className="gradient-text text-4xl md:text-5xl font-bold">{t.subtitle}</span>
                            </h1>

                            <p className="text-white/55 text-[1.05rem] leading-relaxed mb-10 max-w-[480px] animate-fade-up anim-delay-200">
                                {t.description}
                            </p>

                            <div className="flex flex-wrap gap-4 animate-fade-up anim-delay-300">
                                <Link to="/savi-app" className="btn-primary group text-[0.9rem]">
                                    {t.primaryCta} <ArrowRight />
                                </Link>
                                <Link to="/about" className="btn-ghost text-[0.9rem]">
                                    {t.secondaryCta}
                                </Link>
                            </div>
                        </div>

                        {/* Right — stats glass card */}
                        <div className="glass-card p-8 animate-scale-in anim-delay-200">
                            <h3 className="text-[1.35rem] font-bold text-white mb-6">{t.statsTitle}</h3>
                            <div className="space-y-3">
                                {t.stats.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between p-4 rounded-xl bg-white/[0.05] border border-white/[0.07] hover:bg-white/[0.10] hover:border-[#E80010]/25 transition-all duration-250 group cursor-default"
                                    >
                                        <span className="text-white/65 text-sm font-medium">{item.label}</span>
                                        <span className="text-2xl font-black text-white group-hover:text-[#E80010] transition-colors">
                      {item.value}
                    </span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 h-px bg-gradient-to-r from-transparent via-[#E80010]/35 to-transparent" />
                            <p className="text-white/30 text-xs text-center mt-4">🇵🇸 Made in Palestine</p>
                        </div>
                    </div>
                </div>

                {/* Bottom fade-to-white */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </section>

            {/* ══════════════════════════════════════
          FEATURES  (light)
      ══════════════════════════════════════ */}
            <section className="py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 reveal">
                        <div className="badge-red mx-auto mb-4 w-fit">{t.featureSectionTitle}</div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#07080F] mb-4 leading-tight">
                            {t.featureSectionTitle}
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">{t.featureSectionSubtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                        {t.features.map((feature, i) => (
                            <div key={i} className={`feature-card p-8 reveal delay-${(i + 1) * 150}`}>
                                <div className="w-12 h-12 rounded-2xl bg-[#E80010]/10 flex items-center justify-center mb-6">
                                    <span className="text-xl font-black text-[#E80010]">{i + 1}</span>
                                </div>
                                <h3 className="text-[1.1rem] font-bold text-[#07080F] mb-3">{feature.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          HOW IT WORKS  (dark)
      ══════════════════════════════════════ */}
            <section className="py-28 bg-[#8B0000] relative overflow-hidden">
                <div className="blob blob-red w-[420px] h-[420px] -top-20 -right-20 opacity-30 animate-float-blob" />
                <div className="blob blob-red-soft w-[300px] h-[300px] bottom-0 left-[5%] opacity-20 animate-float-blob" style={{ animationDelay: '2s' }} />
                <div className="grid-overlay" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{t.howItWorksTitle}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                        {t.howItWorksSteps.map((step, i) => (
                            <div key={i} className={`glass-card p-8 reveal delay-${(i + 1) * 150} group hover:border-[#E80010]/25 transition-colors`}>
                                <div className="w-14 h-14 rounded-2xl bg-[#E80010] flex items-center justify-center mb-6 group-hover:shadow-glow-sm transition-all">
                                    <span className="text-2xl font-black text-white">{i + 1}</span>
                                </div>
                                <h3 className="text-[1.05rem] font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-white/55 text-sm leading-relaxed">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          FINAL CTA  (dark card on white)
      ══════════════════════════════════════ */}
            <section className="py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-[2rem] bg-[#8B0000] p-12 md:p-16 reveal">
                        <div className="blob blob-red w-[500px] h-[500px] -top-32 -right-24 opacity-45 animate-float-blob" />
                        <div className="grid-overlay" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="badge-white mb-6 w-fit">
                                    <span className="w-2 h-2 rounded-full bg-[#E80010] inline-block animate-pulse" />
                                    {t.showcaseTitle}
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                                    {t.showcaseTitle}
                                </h2>
                                <p className="text-white/55 text-[1.05rem] leading-relaxed">{t.showcaseText}</p>
                            </div>

                            <div className="glass-card p-8">
                                <h3 className="text-[1.4rem] font-bold text-white mb-3">{t.finalCtaTitle}</h3>
                                <p className="text-white/55 mb-7 text-sm leading-relaxed">{t.finalCtaText}</p>
                                <Link to="/join" className="btn-primary group text-[0.9rem]">
                                    {t.finalCtaButton} <ArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home