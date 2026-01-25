function About({ language }) {
  const content = {
    ar: {
      title: 'عن شركة Ram-Savi',
      subtitle: 'رؤية فلسطينية.. إبداع رقمي',
      whoWeAre: 'من نحن',
      whoWeAreText: 'Ram-Savi هي شركة فلسطينية ناشئة متخصصة في تطوير التطبيقات الإلكترونية والحلول التسويقية الرقمية. تأسست الشركة برؤية واضحة: دعم الأعمال المحلية الفلسطينية من خلال التكنولوجيا الحديثة والابتكار الرقمي.',
      ourMission: 'مهمتنا',
      ourMissionText: 'نسعى لتطوير تطبيقات إلكترونية مبتكرة تخدم السوق الفلسطيني وتدعم نمو الأعمال المحلية من خلال حلول تسويقية رقمية متقدمة. نؤمن بأن التكنولوجيا يمكن أن تكون جسراً لنجاح الأعمال وتحقيق النمو الاقتصادي.',
      ourVision: 'رؤيتنا',
      ourVisionText: 'أن نكون الشركة الرائدة في تطوير الحلول الرقمية في فلسطين، ونساهم في بناء اقتصاد رقمي قوي يدعم الأعمال المحلية ويفتح آفاقاً جديدة للنمو والازدهار.',
      whatMakesUsDifferent: 'ما يميزنا',
      feature1Title: 'فهم عميق للسوق المحلي',
      feature1Text: 'نحن جزء من المجتمع الفلسطيني ونفهم احتياجاته وتحدياته بشكل عميق، مما يمكننا من تقديم حلول مناسبة وفعالة.',
      feature2Title: 'نموذج قائم على الأداء',
      feature2Text: 'لا نفرض تكاليف مقدمة على عملائنا. نحن نؤمن بالنتائج الحقيقية ونعمل على نموذج يربط نجاحنا بنجاح عملائنا.',
      feature3Title: 'تكنولوجيا متطورة',
      feature3Text: 'نستخدم أحدث التقنيات والأدوات لتطوير تطبيقات سريعة، آمنة، وسهلة الاستخدام.',
      feature4Title: 'دعم مستمر',
      feature4Text: 'نقدم دعماً فنياً مستمراً وتحديثات دورية لضمان أفضل أداء لتطبيقاتنا.',
      ourStory: 'قصتنا',
      ourStoryText: 'بدأت Ram-Savi كفكرة بسيطة: كيف يمكننا مساعدة المطاعم والمحلات التجارية المحلية على مواجهة التحديات الاقتصادية وزيادة مبيعاتها؟ ومن هذا السؤال، ولد تطبيق Savi - منصة رقمية تربط التجار بالعملاء من خلال عروض ذكية قائمة على الأداء.',
      ourValues: 'قيمنا',
      value1: 'الابتكار والإبداع',
      value2: 'الشفافية والمصداقية',
      value3: 'دعم المجتمع المحلي',
      value4: 'الجودة والتميز',
      value5: 'التطوير المستمر',
      value6: 'النجاح المشترك'
    },
    en: {
      title: 'About Ram-Savi',
      subtitle: 'Palestinian Vision.. Digital Innovation',
      whoWeAre: 'Who We Are',
      whoWeAreText: 'Ram-Savi is a Palestinian startup specialized in developing electronic applications and digital marketing solutions. The company was founded with a clear vision: supporting local Palestinian businesses through modern technology and digital innovation.',
      ourMission: 'Our Mission',
      ourMissionText: 'We strive to develop innovative electronic applications that serve the Palestinian market and support local business growth through advanced digital marketing solutions. We believe that technology can be a bridge to business success and economic growth.',
      ourVision: 'Our Vision',
      ourVisionText: 'To be the leading company in developing digital solutions in Palestine, and contribute to building a strong digital economy that supports local businesses and opens new horizons for growth and prosperity.',
      whatMakesUsDifferent: 'What Makes Us Different',
      feature1Title: 'Deep Understanding of Local Market',
      feature1Text: 'We are part of the Palestinian community and deeply understand its needs and challenges, enabling us to provide suitable and effective solutions.',
      feature2Title: 'Performance-Based Model',
      feature2Text: 'We don\'t charge upfront costs to our clients. We believe in real results and work on a model that ties our success to our clients\' success.',
      feature3Title: 'Advanced Technology',
      feature3Text: 'We use the latest technologies and tools to develop fast, secure, and user-friendly applications.',
      feature4Title: 'Continuous Support',
      feature4Text: 'We provide continuous technical support and regular updates to ensure the best performance of our applications.',
      ourStory: 'Our Story',
      ourStoryText: 'Ram-Savi started as a simple idea: How can we help local restaurants and stores face economic challenges and increase their sales? From this question, the Savi app was born - a digital platform connecting merchants with customers through smart performance-based offers.',
      ourValues: 'Our Values',
      value1: 'Innovation and Creativity',
      value2: 'Transparency and Credibility',
      value3: 'Supporting Local Community',
      value4: 'Quality and Excellence',
      value5: 'Continuous Development',
      value6: 'Mutual Success'
    }
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-red-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
              {t.whoWeAre}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
              {t.whoWeAreText}
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-light/20 to-primary/20 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                {t.ourMission}
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.ourMissionText}
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">
                {t.ourVision}
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.ourVisionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            {t.whatMakesUsDifferent}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                {t.feature1Title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {t.feature1Text}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                {t.feature2Title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {t.feature2Text}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                {t.feature3Title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {t.feature3Text}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                {t.feature4Title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {t.feature4Text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-light/10 to-primary/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
              {t.ourStory}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              {t.ourStoryText}
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            {t.ourValues}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[t.value1, t.value2, t.value3, t.value4, t.value5, t.value6].map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-primary"
              >
                <p className="text-lg font-semibold text-gray-800">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About


