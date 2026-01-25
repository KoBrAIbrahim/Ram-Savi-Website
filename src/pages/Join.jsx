import { useState } from 'react'
import { API_BASE } from '../config'

function Join({ language }) {
  const [joinType, setJoinType] = useState('savi') // 'savi' or 'development'
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: 'FOODANDDRINK',
    businessName: '',
    city: '',
    message: ''
  })

  const [devFormData, setDevFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    serviceType: 'WEBSITE',
    projectDetails: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const content = {
    ar: {
      // Tab headers
      saviTab: 'الانضمام لتطبيق Savi',
      developmentTab: 'طلب تطوير تطبيق أو موقع',
      
      // Savi form
      title: 'انضم إلى تطبيق Savi',
      subtitle: 'كن جزءاً من شبكة العروض الحصرية',
      intro: 'انضم إلى تطبيق Savi وابدأ في الاستفادة من العروض الحصرية. سواء كنت تملك مطعماً، متجراً، أو أي نشاط تجاري آخر، نحن هنا لمساعدتك.',
      formTitle: 'سجل الآن',
      nameLabel: 'الاسم الكامل',
      namePlaceholder: 'أدخل اسمك الكامل',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'example@email.com',
      phoneLabel: 'رقم الهاتف',
      phonePlaceholder: '+970569432423',
      businessTypeLabel: 'نوع النشاط التجاري',
      restaurant: 'مطعم',
      cafe: 'مقهى',
      store: 'متجر',
      supermarket: 'سوبرماركت',
      other: 'أخرى',
      foodAndDrink: 'طعام ومشروبات',
      fashion: 'أزياء',
      furniture: 'أثاث',
      beautyAndHealth: 'الجمال والصحة',
      fun: 'ترفيه',
      businessNameLabel: 'اسم النشاط التجاري',
      businessNamePlaceholder: 'اسم مطعمك أو محلك',
      cityLabel: 'المدينة',
      cityPlaceholder: 'رام الله، نابلس، الخليل...',
      messageLabel: 'رسالة إضافية (اختياري)',
      messagePlaceholder: 'أخبرنا المزيد عن نشاطك التجاري...',
      submit: 'إرسال الطلب',
      submitting: 'جاري الإرسال...',
      successTitle: 'تم استلام طلبك!',
      successMessage: 'شكراً لانضمامك إلى Savi. سيتواصل معك فريقنا قريباً لإكمال عملية التسجيل وبدء رحلتك معنا.',
      errorTitle: 'حدث خطأ!',
      errorMessage: 'عذراً، حدث خطأ أثناء إرسال طلبك. يرجى المحاولة مرة أخرى.',
      backHome: 'العودة للرئيسية',
      whyJoin: 'لماذا تنضم إلينا؟',
      benefit1: 'انضمام مجاني 100%',
      benefit1Text: 'لا توجد رسوم اشتراك للمتاجر نهائياً',
      benefit2: 'زيادة المبيعات',
      benefit2Text: 'جذب عملاء جدد وزيادة الإيرادات',
      benefit3: 'سهولة الاستخدام',
      benefit3Text: 'نظام بسيط وسهل الإدارة',
      benefit4: 'دعم مستمر',
      benefit4Text: 'فريق دعم متواجد لمساعدتك دائماً',
      
      // Development form
      devTitle: 'طلب تطوير تطبيق أو موقع',
      devSubtitle: 'نحول أفكارك إلى واقع رقمي',
      devIntro: 'هل تحتاج لتطبيق جوال أو موقع إلكتروني احترافي؟ فريقنا من المطورين جاهز لتحويل فكرتك إلى منتج رقمي متكامل.',
      devFormTitle: 'أخبرنا عن مشروعك',
      companyNameLabel: 'اسم الشركة',
      companyNamePlaceholder: 'اسم شركتك أو نشاطك التجاري',
      serviceTypeLabel: 'نوع الخدمة المطلوبة',
      website: 'موقع إلكتروني',
      application: 'تطبيق جوال (iOS & Android)',
      appAndWebsite: 'تطبيق وموقع',
      projectDetailsLabel: 'تفاصيل المشروع',
      projectDetailsPlaceholder: 'اشرح لنا فكرتك، المميزات المطلوبة، والهدف من التطبيق/الموقع...',
      devSubmit: 'إرسال الطلب',
      devSuccessTitle: 'تم استلام طلبك!',
      devSuccessMessage: 'شكراً لثقتك بنا. سيتواصل معك فريق التطوير قريباً لمناقشة تفاصيل مشروعك وتقديم عرض سعر مناسب.',
      whyChooseUs: 'لماذا تختارنا؟',
      devBenefit1: 'خبرة محلية',
      devBenefit1Text: 'فهم عميق للسوق الفلسطيني',
      devBenefit2: 'تقنيات حديثة',
      devBenefit2Text: 'نستخدم أحدث التقنيات والأدوات',
      devBenefit3: 'أسعار منافسة',
      devBenefit3Text: 'جودة عالية بأسعار معقولة',
      devBenefit4: 'دعم شامل',
      devBenefit4Text: 'دعم فني ومتابعة بعد التسليم'
    },
    en: {
      // Tab headers
      saviTab: 'Join Savi App',
      developmentTab: 'Request App/Website Development',
      
      // Savi form
      title: 'Join Savi App',
      subtitle: 'Be Part of Exclusive Offers Network',
      intro: 'Join Savi app and start benefiting from exclusive offers. Whether you own a restaurant, store, or any other business, we\'re here to help.',
      formTitle: 'Register Now',
      nameLabel: 'Full Name',
      namePlaceholder: 'Enter your full name',
      emailLabel: 'Email',
      emailPlaceholder: 'example@email.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+970569432423',
      businessTypeLabel: 'Business Type',
      restaurant: 'Restaurant',
      cafe: 'Cafe',
      store: 'Store',
      supermarket: 'Supermarket',
      other: 'Other',
      foodAndDrink: 'Food & Drink',
      fashion: 'Fashion',
      furniture: 'Furniture',
      beautyAndHealth: 'Beauty & Health',
      fun: 'Entertainment',
      businessNameLabel: 'Business Name',
      businessNamePlaceholder: 'Your restaurant or store name',
      cityLabel: 'City',
      cityPlaceholder: 'Ramallah, Nablus, Hebron...',
      messageLabel: 'Additional Message (Optional)',
      messagePlaceholder: 'Tell us more about your business...',
      submit: 'Submit Request',
      submitting: 'Submitting...',
      successTitle: 'Request Received!',
      successMessage: 'Thank you for joining Savi. Our team will contact you soon to complete the registration process and start your journey with us.',
      errorTitle: 'Error Occurred!',
      errorMessage: 'Sorry, an error occurred while submitting your request. Please try again.',
      backHome: 'Back to Home',
      whyJoin: 'Why Join Us?',
      benefit1: '100% Free Joining',
      benefit1Text: 'Absolutely no subscription fees for stores',
      benefit2: 'Increase Sales',
      benefit2Text: 'Attract new customers and boost revenue',
      benefit3: 'Easy to Use',
      benefit3Text: 'Simple and easy management system',
      benefit4: 'Continuous Support',
      benefit4Text: 'Support team always ready to help',
      
      // Development form
      devTitle: 'Request App or Website Development',
      devSubtitle: 'We Turn Your Ideas Into Digital Reality',
      devIntro: 'Need a professional mobile app or website? Our development team is ready to transform your idea into a complete digital product.',
      devFormTitle: 'Tell Us About Your Project',
      companyNameLabel: 'Company Name',
      companyNamePlaceholder: 'Your company or business name',
      serviceTypeLabel: 'Service Type',
      website: 'Website',
      application: 'Mobile App (iOS & Android)',
      appAndWebsite: 'App and Website',
      projectDetailsLabel: 'Project Details',
      projectDetailsPlaceholder: 'Explain your idea, required features, and the goal of the app/website...',
      devSubmit: 'Submit Request',
      devSuccessTitle: 'Request Received!',
      devSuccessMessage: 'Thank you for trusting us. Our development team will contact you soon to discuss your project details and provide a suitable quote.',
      whyChooseUs: 'Why Choose Us?',
      devBenefit1: 'Local Expertise',
      devBenefit1Text: 'Deep understanding of Palestinian market',
      devBenefit2: 'Modern Tech',
      devBenefit2Text: 'Using latest technologies and tools',
      devBenefit3: 'Competitive Prices',
      devBenefit3Text: 'High quality at reasonable prices',
      devBenefit4: 'Full Support',
      devBenefit4Text: 'Technical support and follow-up after delivery'
    }
  }

  const t = content[language]

  const handleSaviSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // نرسل قيمة الـ select مباشرة كـ companyType لأننا نستخدم قيم enum صحيحة

    try {
      const response = await fetch(`${API_BASE}/request-join-savi`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          companyType: formData.businessType,
          companyName: formData.businessName,
          city: formData.city,
          message: formData.message
        })
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Error response:', errorText)
        throw new Error(`Server returned ${response.status}: ${errorText}`)
      }

      const data = await response.json()
      console.log('Savi join request submitted successfully:', data)
      setSubmitted(true)
    } catch (err) {
      console.error('Error submitting join request:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDevSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // نرسل قيمة الخدمة مباشرة كـ serviceType باستخدام القيم المطلوبة: WEBSITE, APPLICATION, APPANDWEBSITE

    try {
      const response = await fetch(`${API_BASE}/request-service`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: devFormData.name,
          email: devFormData.email,
          phone: devFormData.phone,
          serviceType: devFormData.serviceType,
          companyName: devFormData.companyName,
          message: devFormData.projectDetails
        })
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Error response:', errorText)
        throw new Error(`Server returned ${response.status}: ${errorText}`)
      }

      const data = await response.json()
      console.log('Development request submitted successfully:', data)
      setSubmitted(true)
    } catch (err) {
      console.error('Error submitting request:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleDevChange = (e) => {
    setDevFormData({
      ...devFormData,
      [e.target.name]: e.target.value
    })
  }

  const resetForm = () => {
    setSubmitted(false)
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
    setDevFormData({
      name: '',
      email: '',
      phone: '',
      companyName: '',
      serviceType: 'WEBSITE',
      projectDetails: ''
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-red-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {joinType === 'savi' ? t.title : t.devTitle}
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            {joinType === 'savi' ? t.subtitle : t.devSubtitle}
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => { setJoinType('savi'); resetForm(); }}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
                joinType === 'savi'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t.saviTab}
            </button>
            <button
              onClick={() => { setJoinType('development'); resetForm(); }}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
                joinType === 'development'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t.developmentTab}
            </button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            {joinType === 'savi' ? t.intro : t.devIntro}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            {joinType === 'savi' ? t.whyJoin : t.whyChooseUs}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {joinType === 'savi' ? t.benefit1 : t.devBenefit1}
              </h3>
              <p className="text-gray-600">
                {joinType === 'savi' ? t.benefit1Text : t.devBenefit1Text}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {joinType === 'savi' ? t.benefit2 : t.devBenefit2}
              </h3>
              <p className="text-gray-600">
                {joinType === 'savi' ? t.benefit2Text : t.devBenefit2Text}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {joinType === 'savi' ? t.benefit3 : t.devBenefit3}
              </h3>
              <p className="text-gray-600">
                {joinType === 'savi' ? t.benefit3Text : t.devBenefit3Text}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {joinType === 'savi' ? t.benefit4 : t.devBenefit4}
              </h3>
              <p className="text-gray-600">
                {joinType === 'savi' ? t.benefit4Text : t.devBenefit4Text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {!submitted ? (
              <>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  {joinType === 'savi' ? t.formTitle : t.devFormTitle}
                </h2>
                
                {joinType === 'savi' ? (
                  <form onSubmit={handleSaviSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t.nameLabel}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t.namePlaceholder}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t.emailLabel}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t.emailPlaceholder}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder={t.phonePlaceholder}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t.businessTypeLabel}
                      </label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      >
                        <option value="FOODANDDRINK">{t.foodAndDrink}</option>
                        <option value="FASHION">{t.fashion}</option>
                        <option value="FURNITURE">{t.furniture}</option>
                        <option value="BEAUTYANDHELTH">{t.beautyAndHealth}</option>
                        <option value="FUN">{t.fun}</option>
                        <option value="OTHER">{t.other}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t.businessNameLabel}
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                        placeholder={t.businessNamePlaceholder}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t.cityLabel}
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        placeholder={t.cityPlaceholder}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t.messageLabel}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder={t.messagePlaceholder}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? t.submitting : t.submit}
                    </button>

                    {/* Error Message */}
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                        <p className="font-semibold">{t.errorTitle}</p>
                        <p>{t.errorMessage}</p>
                      </div>
                    )}
                  </form>
                ) : (
                  <form onSubmit={handleDevSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t.nameLabel}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={devFormData.name}
                        onChange={handleDevChange}
                        required
                        placeholder={t.namePlaceholder}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t.emailLabel}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={devFormData.email}
                        onChange={handleDevChange}
                        required
                        placeholder={t.emailPlaceholder}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={devFormData.phone}
                        onChange={handleDevChange}
                        required
                        placeholder={t.phonePlaceholder}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t.companyNameLabel}
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={devFormData.companyName}
                        onChange={handleDevChange}
                        required
                        placeholder={t.companyNamePlaceholder}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t.serviceTypeLabel}
                      </label>
                      <select
                        name="serviceType"
                        value={devFormData.serviceType}
                        onChange={handleDevChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      >
                        <option value="WEBSITE">{t.website}</option>
                        <option value="APPLICATION">{t.application}</option>
                        <option value="APPANDWEBSITE">{t.appAndWebsite}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t.projectDetailsLabel}
                      </label>
                      <textarea
                        name="projectDetails"
                        value={devFormData.projectDetails}
                        onChange={handleDevChange}
                        required
                        rows="6"
                        placeholder={t.projectDetailsPlaceholder}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? t.submitting : t.devSubmit}
                    </button>

                    {/* Error Message */}
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                        <p className="font-semibold">{t.errorTitle}</p>
                        <p>{t.errorMessage}</p>
                      </div>
                    )}
                  </form>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {joinType === 'savi' ? t.successTitle : t.devSuccessTitle}
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  {joinType === 'savi' ? t.successMessage : t.devSuccessMessage}
                </p>
                <a
                  href="/"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  {t.backHome}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Join
