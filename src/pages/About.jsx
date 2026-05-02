import { getPageTranslations } from '../locales'
import { useScrollReveal } from '../hooks/useScrollReveal'

function About({ language }) {
    const t = getPageTranslations(language, 'about')
    useScrollReveal()

    const DiffIcon = ({ n }) => (
        <div className="w-12 h-12 rounded-2xl bg-[#E80010]/10 flex items-center justify-center flex-shrink-0">
            <span className="text-[#E80010] font-black text-lg">{n}</span>
        </div>
    )

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">

            {/* ── HERO ── */}
            <section className="relative bg-[#8B0000] py-32 md:py-40 overflow-hidden">
                <div className="blob blob-red w-[520px] h-[520px] -top-32 -right-24 opacity-50 animate-float-blob" />
                <div className="blob blob-red-soft w-[320px] h-[320px] bottom-[-60px] left-[10%] opacity-25 animate-float-blob" style={{ animationDelay: '2s' }} />
                <div className="grid-overlay" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up pt-10">
                    <div className="badge-white mx-auto mb-6 w-fit">
                        <span className="w-2 h-2 rounded-full bg-[#E80010] inline-block" />
                        {language === 'ar' ? 'تعرّف علينا' : 'About Us'}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-4">{t.title}</h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">{t.subtitle}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </section>

            {/* ── WHO WE ARE ── */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center reveal">
                        <div className="badge-red mx-auto mb-5 w-fit">{t.whoWeAre}</div>
                        <h2 className="text-3xl md:text-4xl font-black text-[#07080F] mb-6">{t.whoWeAre}</h2>
                        <p className="text-gray-500 text-lg leading-relaxed">{t.whoWeAreText}</p>
                    </div>
                </div>
            </section>

            {/* ── MISSION + VISION ── */}
            <section className="py-16 pb-24 bg-[#f8f8fb]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                        <div className="relative overflow-hidden rounded-[1.4rem] bg-[#8B0000] p-10 reveal">
                            <div className="blob blob-red w-[280px] h-[280px] -top-16 -right-16 opacity-40 animate-float-blob" />
                            <div className="grid-overlay" />
                            <div className="relative z-10">
                                <div className="w-11 h-11 rounded-xl bg-[#E80010] flex items-center justify-center mb-5">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{t.ourMission}</h3>
                                <p className="text-white/60 leading-relaxed">{t.ourMissionText}</p>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-[1.4rem] bg-white border-2 border-[#E80010]/12 p-10 reveal delay-150">
                            <div className="w-11 h-11 rounded-xl bg-[#E80010]/10 flex items-center justify-center mb-5">
                                <svg className="w-5 h-5 text-[#E80010]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#07080F] mb-4">{t.ourVision}</h3>
                            <p className="text-gray-500 leading-relaxed">{t.ourVisionText}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT MAKES US DIFFERENT ── */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 reveal">
                        <div className="badge-red mx-auto mb-4 w-fit">{t.whatMakesUsDifferent}</div>
                        <h2 className="text-3xl md:text-4xl font-black text-[#07080F]">{t.whatMakesUsDifferent}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: t.feature1Title, text: t.feature1Text },
                            { title: t.feature2Title, text: t.feature2Text },
                            { title: t.feature3Title, text: t.feature3Text },
                            { title: t.feature4Title, text: t.feature4Text },
                        ].map((item, i) => (
                            <div key={i} className={`feature-card p-8 flex gap-5 reveal delay-${(i + 1) * 100}`}>
                                <DiffIcon n={i + 1} />
                                <div>
                                    <h4 className="text-[1rem] font-bold text-[#07080F] mb-2">{item.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── OUR STORY ── */}
            <section className="py-16 pb-24 bg-[#8B0000] relative overflow-hidden">
                <div className="blob blob-red w-[450px] h-[450px] -top-24 -left-24 opacity-28 animate-float-blob" />
                <div className="grid-overlay" />
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                    <div className="badge-white mx-auto mb-6 w-fit">
                        <span className="w-2 h-2 rounded-full bg-[#E80010] inline-block" />
                        {t.ourStory}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-6">{t.ourStory}</h2>
                    <p className="text-white/60 text-lg leading-relaxed">{t.ourStoryText}</p>
                </div>
            </section>

            {/* ── VALUES ── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 reveal">
                        <div className="badge-red mx-auto mb-4 w-fit">{t.ourValues}</div>
                        <h2 className="text-3xl md:text-4xl font-black text-[#07080F]">{t.ourValues}</h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                        {t.values.map((value, i) => (
                            <div
                                key={i}
                                className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 text-center hover:border-[#E80010]/20 hover:shadow-card transition-all duration-300 reveal delay-${(i % 4) * 100 + 100}`}
                            >
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E80010] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
                                <p className="font-bold text-[#07080F] text-sm">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About