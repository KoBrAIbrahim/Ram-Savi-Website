function Home({ language }) {
  const content = {
    ar: {
      title: 'Ram-Savi',
      subtitle: 'شركة فلسطينية رائدة في التطبيقات الإلكترونية والتسويق الرقمي',
      description: 'نسعى لتطوير تطبيقات إلكترونية مبتكرة تخدم السوق الفلسطيني وتدعم نمو الأعمال المحلية من خلال حلول تسويقية رقمية متقدمة.',
      cta: 'اكتشف المزيد'
    },
    en: {
      title: 'Ram-Savi',
      subtitle: 'Leading Palestinian Company in Digital Applications and Marketing',
      description: 'We strive to develop innovative electronic applications that serve the Palestinian market and support local business growth through advanced digital marketing solutions.',
      cta: 'Discover More'
    }
  }

  const t = content[language]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-red-600 min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
            {t.subtitle}
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            {t.description}
          </p>
          <a 
            href="#features" 
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            {t.cta}
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {language === 'ar' ? 'تطبيقات مبتكرة' : 'Innovative Apps'}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {language === 'ar' 
                  ? 'نطور تطبيقات إلكترونية متطورة تلبي احتياجات السوق الفلسطيني وتساعد الأعمال على النمو'
                  : 'We develop advanced electronic applications that meet the needs of the Palestinian market and help businesses grow'}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {language === 'ar' ? 'تسويق رقمي فعال' : 'Effective Digital Marketing'}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {language === 'ar' 
                  ? 'حلول تسويقية ذكية قائمة على الأداء تحقق نتائج حقيقية وتجلب عملاء فعليين'
                  : 'Smart performance-based marketing solutions that achieve real results and bring actual customers'}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {language === 'ar' ? 'دعم محلي' : 'Local Support'}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {language === 'ar' 
                  ? 'شركة فلسطينية تدعم الأعمال المحلية وتساهم في تطوير الاقتصاد الوطني'
                  : 'A Palestinian company supporting local businesses and contributing to national economic development'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

