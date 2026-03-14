import {useState} from 'react'
import {getPageTranslations} from '../locales'
import {useScrollReveal} from '../hooks/useScrollReveal'

function Join({language}) {
    const [joinType, setJoinType] = useState('savi')
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', businessType: 'FOODANDDRINK',
        businessName: '', city: '', message: '',
    })
    const [devFormData, setDevFormData] = useState({
        name: '', email: '', phone: '', companyName: '', serviceType: 'WEBSITE', projectDetails: '',
    })

    const t = getPageTranslations(language, 'join')
    useScrollReveal()

    const handleSaviSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null)
        try {
            const res = await fetch('/api/request-join-savi', {
                method: 'POST',
                headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: formData.name, email: formData.email, phone: formData.phone,
                    companyType: formData.businessType, companyName: formData.businessName,
                    city: formData.city, message: formData.message,
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

    const handleDevSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null)
        try {
            const res = await fetch('/api/request-service', {
                method: 'POST',
                headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: devFormData.name, email: devFormData.email, phone: devFormData.phone,
                    serviceType: devFormData.serviceType, companyName: devFormData.companyName,
                    message: devFormData.projectDetails,
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

    const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})
    const handleDevChange = (e) => setDevFormData({...devFormData, [e.target.name]: e.target.value})
    const resetAll = () => {
        setSubmitted(false);
        setError(null)
        setFormData({
            name: '',
            email: '',
            phone: '',
            businessType: 'FOODANDDRINK',
            businessName: '',
            city: '',
            message: ''
        })
        setDevFormData({name: '', email: '', phone: '', companyName: '', serviceType: 'WEBSITE', projectDetails: ''})
    }

    const switchTab = (type) => {
        setJoinType(type);
        resetAll()
    }

    const benefits = joinType === 'savi'
        ? [{h: t.benefit1, p: t.benefit1Text}, {h: t.benefit2, p: t.benefit2Text}, {
            h: t.benefit3,
            p: t.benefit3Text
        }, {h: t.benefit4, p: t.benefit4Text}]
        : [{h: t.devBenefit1, p: t.devBenefit1Text}, {h: t.devBenefit2, p: t.devBenefit2Text}, {
            h: t.devBenefit3,
            p: t.devBenefit3Text
        }, {h: t.devBenefit4, p: t.devBenefit4Text}]

    const InputRow = ({label, children}) => (
        <div>
            <label className="block text-[0.82rem] font-bold text-gray-700 mb-1.5">{label}</label>
            {children}
        </div>
    )

    const SpinBtn = ({label, disabled}) => (
        <button type="submit" disabled={disabled || loading}
                className="btn-primary w-full justify-center py-4 text-[1rem] disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? (
                <span className="flex items-center gap-2">
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={3}/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
                    {t.submitting}
        </span>
            ) : label}
        </button>
    )

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">

            {/* ── HERO ── */}
            <section className="relative bg-[#07080F] py-32 md:py-40 overflow-hidden">
                <div className="blob blob-red w-[520px] h-[520px] -top-28 -right-20 opacity-50 animate-float-blob"/>
                <div className="grid-overlay"/>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up pt-10">
                    <div className="badge-white mx-auto mb-6 w-fit">
                        <span className="w-2 h-2 rounded-full bg-[#E80010] animate-pulse inline-block"/>
                        {joinType === 'savi' ? t.subtitle : t.devSubtitle}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
                        {joinType === 'savi' ? t.title : t.devTitle}
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        {joinType === 'savi' ? t.subtitle : t.devSubtitle}
                    </p>
                </div>
                <div
                    className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"/>
            </section>

            {/* ── TABS ── */}
            <section className="py-10 bg-white border-b border-gray-100">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="flex gap-2 p-2 bg-gray-100 rounded-2xl">
                        {[
                            {key: 'savi', label: t.saviTab},
                            {key: 'development', label: t.developmentTab},
                        ].map(({key, label}) => (
                            <button key={key} onClick={() => switchTab(key)}
                                    className={`flex-1 py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-250 ${
                                        joinType === key
                                            ? 'bg-[#E80010] text-white shadow-glow-sm'
                                            : 'text-gray-600 hover:bg-gray-200/60'
                                    }`}>
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="py-14">
                <div className="max-w-3xl mx-auto px-4 text-center reveal">
                    <p className="text-gray-500 text-lg leading-relaxed">
                        {joinType === 'savi' ? t.intro : t.devIntro}
                    </p>
                </div>
            </section>

            {/* ── BENEFITS ── */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 reveal">
                        <h2 className="text-2xl font-black text-[#07080F]">
                            {joinType === 'savi' ? t.whyJoin : t.whyChooseUs}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {benefits.map((b, i) => (
                            <div key={i} className={`feature-card p-7 text-center reveal delay-${(i + 1) * 100}`}>
                                <div
                                    className="w-10 h-10 rounded-xl bg-[#E80010]/10 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-[#E80010] font-black">{i + 1}</span>
                                </div>
                                <h3 className="font-bold text-[#07080F] text-sm mb-1.5">{b.h}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{b.p}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FORM ── */}
            <section className="pb-28 bg-[#f8f8fb]">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                    <div className="reveal bg-white rounded-[1.6rem] shadow-card-lg border border-gray-100 p-8 md:p-12">
                        {!submitted ? (
                            <>
                                <h2 className="text-2xl font-black text-[#07080F] mb-8 text-center">
                                    {joinType === 'savi' ? t.formTitle : t.devFormTitle}
                                </h2>

                                {joinType === 'savi' ? (
                                    <form onSubmit={handleSaviSubmit} className="space-y-5">
                                        <InputRow label={t.nameLabel}>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange}
                                                   required placeholder={t.namePlaceholder} className="input-field"/>
                                        </InputRow>
                                        <InputRow label={t.emailLabel}>
                                            <input type="email" name="email" value={formData.email}
                                                   onChange={handleChange} required placeholder={t.emailPlaceholder}
                                                   className="input-field"/>
                                        </InputRow>
                                        <InputRow label={t.phoneLabel}>
                                            <input type="tel" name="phone" value={formData.phone}
                                                   onChange={handleChange} required placeholder={t.phonePlaceholder}
                                                   className="input-field"/>
                                        </InputRow>
                                        <InputRow label={t.businessTypeLabel}>
                                            <select name="businessType" value={formData.businessType}
                                                    onChange={handleChange} className="input-field">
                                                <option value="FOODANDDRINK">{t.foodAndDrink}</option>
                                                <option value="FASHION">{t.fashion}</option>
                                                <option value="FURNITURE">{t.furniture}</option>
                                                <option value="BEAUTYANDHELTH">{t.beautyAndHealth}</option>
                                                <option value="FUN">{t.fun}</option>
                                                <option value="OTHER">{t.other}</option>
                                            </select>
                                        </InputRow>
                                        <InputRow label={t.businessNameLabel}>
                                            <input type="text" name="businessName" value={formData.businessName}
                                                   onChange={handleChange} required
                                                   placeholder={t.businessNamePlaceholder} className="input-field"/>
                                        </InputRow>
                                        <InputRow label={t.cityLabel}>
                                            <input type="text" name="city" value={formData.city} onChange={handleChange}
                                                   required placeholder={t.cityPlaceholder} className="input-field"/>
                                        </InputRow>
                                        <InputRow label={t.messageLabel}>
                                            <textarea name="message" value={formData.message} onChange={handleChange}
                                                      rows={3} placeholder={t.messagePlaceholder}
                                                      className="input-field resize-none"/>
                                        </InputRow>
                                        <SpinBtn label={t.submit}/>
                                        {error && <p className="text-red-600 text-sm text-center">{t.errorMessage}</p>}
                                    </form>
                                ) : (
                                    <form onSubmit={handleDevSubmit} className="space-y-5">
                                        <InputRow label={t.nameLabel}>
                                            <input type="text" name="name" value={devFormData.name}
                                                   onChange={handleDevChange} required placeholder={t.namePlaceholder}
                                                   className="input-field"/>
                                        </InputRow>
                                        <InputRow label={t.emailLabel}>
                                            <input type="email" name="email" value={devFormData.email}
                                                   onChange={handleDevChange} required placeholder={t.emailPlaceholder}
                                                   className="input-field"/>
                                        </InputRow>
                                        <InputRow label={t.phoneLabel}>
                                            <input type="tel" name="phone" value={devFormData.phone}
                                                   onChange={handleDevChange} required placeholder={t.phonePlaceholder}
                                                   className="input-field"/>
                                        </InputRow>
                                        <InputRow label={t.companyNameLabel}>
                                            <input type="text" name="companyName" value={devFormData.companyName}
                                                   onChange={handleDevChange} required
                                                   placeholder={t.companyNamePlaceholder} className="input-field"/>
                                        </InputRow>
                                        <InputRow label={t.serviceTypeLabel}>
                                            <select name="serviceType" value={devFormData.serviceType}
                                                    onChange={handleDevChange} className="input-field">
                                                <option value="WEBSITE">{t.website}</option>
                                                <option value="APPLICATION">{t.application}</option>
                                                <option value="APPANDWEBSITE">{t.appAndWebsite}</option>
                                            </select>
                                        </InputRow>
                                        <InputRow label={t.projectDetailsLabel}>
                                            <textarea name="projectDetails" value={devFormData.projectDetails}
                                                      onChange={handleDevChange} required rows={5}
                                                      placeholder={t.projectDetailsPlaceholder}
                                                      className="input-field resize-none"/>
                                        </InputRow>
                                        <SpinBtn label={t.devSubmit}/>
                                        {error && <p className="text-red-600 text-sm text-center">{t.errorMessage}</p>}
                                    </form>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-10">
                                <div
                                    className="w-16 h-16 rounded-full bg-[#E80010]/10 border-2 border-[#E80010]/30 flex items-center justify-center mx-auto mb-5">
                                    <svg className="w-8 h-8 text-[#E80010]" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-black text-[#07080F] mb-3">
                                    {joinType === 'savi' ? t.successTitle : t.devSuccessTitle}
                                </h2>
                                <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
                                    {joinType === 'savi' ? t.successMessage : t.devSuccessMessage}
                                </p>
                                <a href="/" className="btn-primary mx-auto inline-flex">{t.backHome}</a>
                            </div>
                        )}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Join