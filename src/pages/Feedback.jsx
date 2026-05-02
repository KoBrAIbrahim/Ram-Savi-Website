import { useState } from 'react'
import { getPageTranslations } from '../locales'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Feedback({ language }) {
    const [formData, setFormData] = useState({ name: '', email: '', type: 'suggestion', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [loading,   setLoading]   = useState(false)
    const [error,     setError]     = useState(null)
    const t = getPageTranslations(language, 'feedback')
    useScrollReveal()

    const typeMapping = { suggestion: 'SUGGESTION', complaint: 'COMPLAINT', question: 'QUESTION', other: 'OTHER' }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true); setError(null)
        try {
            const res = await fetch('/api/complaints', {
                method: 'POST',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    complaintType: typeMapping[formData.type] || 'COMPLAINT',
                    message: formData.message,
                }),
            })
            if (!res.ok) throw new Error(`Server error ${res.status}`)
            setSubmitted(true)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
    const resetForm = () => { setFormData({ name: '', email: '', type: 'suggestion', message: '' }); setSubmitted(false); setError(null) }

    const reasons = [t.reason1, t.reason2, t.reason3, t.reason4]

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">

            {/* ── HERO ── */}
            <section className="relative bg-[#8B0000] py-32 md:py-40 overflow-hidden">
                <div className="blob blob-red w-[500px] h-[500px] -top-28 -right-20 opacity-50 animate-float-blob" />
                <div className="grid-overlay" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up pt-10">

                    <h1 className="text-5xl md:text-7xl font-black text-white mb-4">{t.title}</h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">{t.subtitle}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </section>

            {/* ── INTRO ── */}
            <section className="py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                    <p className="text-gray-500 text-lg leading-relaxed">{t.intro}</p>
                </div>
            </section>

            {/* ── FORM ── */}
            <section className="pb-24">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="reveal bg-white rounded-[1.6rem] shadow-card-lg border border-gray-100 p-8 md:p-12">
                        {!submitted ? (
                            <>
                                <h2 className="text-2xl font-black text-[#07080F] mb-8 text-center">{t.formTitle}</h2>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-[0.85rem] font-bold text-gray-700 mb-2">{t.nameLabel}</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} required
                                               placeholder={t.namePlaceholder} className="input-field" />
                                    </div>

                                    <div>
                                        <label className="block text-[0.85rem] font-bold text-gray-700 mb-2">{t.emailLabel}</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} required
                                               placeholder={t.emailPlaceholder} className="input-field" />
                                    </div>

                                    <div>
                                        <label className="block text-[0.85rem] font-bold text-gray-700 mb-2">{t.typeLabel}</label>
                                        <select name="type" value={formData.type} onChange={handleChange} className="input-field">
                                            <option value="suggestion">{t.suggestion}</option>
                                            <option value="complaint">{t.complaint}</option>
                                            <option value="question">{t.question}</option>
                                            <option value="other">{t.other}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-[0.85rem] font-bold text-gray-700 mb-2">{t.messageLabel}</label>
                                        <textarea name="message" value={formData.message} onChange={handleChange} required
                                                  rows={5} placeholder={t.messagePlaceholder}
                                                  className="input-field resize-none" />
                                    </div>

                                    <button type="submit" disabled={loading}
                                            className="btn-primary w-full justify-center py-4 text-[1rem] disabled:opacity-50 disabled:cursor-not-allowed">
                                        {loading ? (
                                            <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={3}/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                                                {t.submitting}
                      </span>
                                        ) : t.submit}
                                    </button>

                                    {error && (
                                        <div className="flex gap-3 items-start p-4 bg-red-50 border border-red-200 rounded-xl">
                                            <span className="text-[#E80010] text-lg">⚠</span>
                                            <div>
                                                <p className="font-bold text-[#A3000B] text-sm">{t.errorTitle}</p>
                                                <p className="text-red-700 text-sm">{t.errorMessage}</p>
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-10">
                                <div className="w-16 h-16 rounded-full bg-[#E80010]/10 border-2 border-[#E80010]/30 flex items-center justify-center mx-auto mb-5">
                                    <svg className="w-8 h-8 text-[#E80010]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-black text-[#07080F] mb-3">{t.successTitle}</h2>
                                <p className="text-gray-500 mb-8 leading-relaxed">{t.successMessage}</p>
                                <button onClick={resetForm} className="btn-primary mx-auto">{t.sendAnother}</button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ── WHY FEEDBACK ── */}
            <section className="py-20 bg-[#f8f8fb]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 reveal">
                        <div className="badge-red mx-auto mb-4 w-fit">{t.whyFeedback}</div>
                        <h2 className="text-3xl font-black text-[#07080F]">{t.whyFeedback}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {reasons.map((reason, i) => (
                            <div key={i} className={`p-6 text-center reveal delay-${(i + 1) * 100} rounded-[22px]`}
                                 style={{ background: '#8B0000' }}>
                                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-black">{i + 1}</span>
                                </div>
                                <p className="text-white font-semibold text-sm">{reason}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CONTACT ── */}
            <section className="py-20">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-[1.6rem] bg-[#8B0000] p-10 text-center reveal">
                        <div className="blob blob-red w-[300px] h-[300px] -top-16 -right-16 opacity-35 animate-float-blob" />
                        <div className="grid-overlay" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-6">{t.contactInfo}</h3>
                            <div className="space-y-3">
                                <p className="text-white/65 text-sm">
                                    <span className="font-semibold text-white/90">{t.email}:</span>{' '}
                                    <a href="mailto:savi-info@savi.ps" className="text-[#E80010] hover:underline">savi-info@savi.ps</a>
                                </p>
                                <p className="text-white/65 text-sm">
                                    <span className="font-semibold text-white/90">{t.phone}:</span>{' '}
                                    <a href="tel:+970569432423" className="text-[#E80010] hover:underline">+970569432423</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Feedback