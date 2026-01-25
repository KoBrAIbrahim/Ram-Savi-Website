import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const IOS_APP_STORE_URL = "https://apps.apple.com/app/id6755399456";
const ANDROID_PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.savi.vouchers";

function SaviApp({ language }) {
  const [stores, setStores] = useState([])
  const [loadingStores, setLoadingStores] = useState(true)

  useEffect(() => {
    fetchStores()
  }, [])

  const fetchStores = async () => {
    try {
      setLoadingStores(true)
      const apiUrl = import.meta.env.VITE_API_COMPANIES_URL
      console.log('API URL:', apiUrl)
      const response = await fetch(`${apiUrl}?page=1&limit=10`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch stores')
      }
      
      const data = await response.json()
      console.log('SaviApp API Response:', data)
      
      // Get companies from data.data
      const companies = data.data || []
      setStores(Array.isArray(companies) ? companies : [])
    } catch (err) {
      console.error('Error fetching stores:', err)
    } finally {
      setLoadingStores(false)
    }
  }

  const content = {
    ar: {
      title: 'تطبيق Savi',
      subtitle: 'الحل الأمثل للتسويق الرقمي في فلسطين',
      intro: 'تطبيق Savi هو منصة رقمية مبتكرة تربط المطاعم والمحلات التجارية بالعملاء من خلال عروض ذكية قائمة على الأداء. نحن نساعد الأعمال على النمو دون أي تكاليف مقدمة.',
      whatIsSavi: 'ما هو Savi؟',
      whatIsSaviText: 'Savi هو تطبيق تسويقي فلسطيني يوفر منصة سهلة الاستخدام تمكن المطاعم والمتاجر من عرض خصومات وعروض خاصة للعملاء الباحثين عن القيمة والجودة. التطبيق يعمل على نموذج قائم على الأداء، مما يعني أن التجار يدفعون فقط عندما يحصلون على نتائج حقيقية.',
      howItWorks: 'كيف يعمل التطبيق؟',
      step1Title: 'للتجار: انضمام حصري مجاني',
      step1Text: 'سجل محلك أو مطعمك في التطبيق مجاناً بالكامل - بدون أي رسوم اشتراك أو تكاليف مقدمة. حدد العروض والخصومات التي تريد تقديمها.',
      step2Title: 'للعملاء: اشتراك شهري للعروض',
      step2Text: 'يشترك العملاء شهرياً للحصول على العروض الحصرية. يتصفحون العروض المتاحة ويختارون ما يناسبهم من مطاعم ومحلات.',
      step3Title: 'زيارات حقيقية',
      step3Text: 'عندما يزور العميل المحل ويستخدم العرض، يحصل التاجر على زبون جديد ويدفع فقط نسبة بسيطة من قيمة المبيعات.',
      benefits: 'الفوائد والمزايا',
      forMerchants: 'للتجار والمطاعم',
      benefit1: 'انضمام مجاني 100% - لا توجد رسوم اشتراك نهائياً',
      benefit2: 'زيادة الحركة في الأيام الهادئة',
      benefit3: 'جذب عملاء جدد بشكل مستمر',
      benefit4: 'تحكم كامل في العروض والخصومات',
      benefit5: 'تقارير وإحصائيات مفصلة',
      benefit6: 'دعم فني مستمر',
      forCustomers: 'للعملاء',
      benefit7: 'اكتشف أفضل العروض في منطقتك',
      benefit8: 'وفر المال مع الحفاظ على الجودة',
      benefit9: 'تجربة سهلة وسريعة',
      benefit10: 'اكتشف أماكن جديدة',
      benefit11: 'عروض محدثة يومياً',
      benefit12: 'اشتراك شهري بسيط للوصول لكل العروض',
      whyDifferent: 'لماذا Savi مختلف؟',
      reason1Title: 'مجاني للمتاجر',
      reason1Text: 'انضمام مجاني تماماً للمتاجر والمطاعم - لا توجد رسوم اشتراك أو تكاليف خفية. نموذج عمل يخدم الجميع.',
      reason2Title: 'مصمم محلياً',
      reason2Text: 'فهم عميق للسوق الفلسطيني واحتياجات الأعمال المحلية.',
      reason3Title: 'سهل الاستخدام',
      reason3Text: 'واجهة بسيطة وسهلة للتجار والعملاء على حد سواء.',
      reason4Title: 'نتائج قابلة للقياس',
      reason4Text: 'تقارير مفصلة تظهر بالضبط كم عميل جديد حصلت عليه ومقدار المبيعات.',
      learnMore: 'تعرف على المزيد',
      learnMoreText: 'اكتشف كل تفاصيل تطبيق Savi وكيف يمكن أن يساعد عملك على النمو',
      downloadApp: 'حمل التطبيق الآن',
      downloadIOS: 'حمل من App Store',
      downloadAndroid: 'حمل من Google Play',
      partnerStores: 'المحلات المشتركة',
      partnerStoresSubtitle: 'اكتشف المحلات والمطاعم المشتركة معنا',
      viewAllStores: 'عرض جميع المحلات',
      loadingStores: 'جاري تحميل المحلات...'
    },
    en: {
      title: 'Savi App',
      subtitle: 'The Ultimate Digital Marketing Solution in Palestine',
      intro: 'Savi app is an innovative digital platform connecting restaurants and stores with customers through smart performance-based offers. We help businesses grow without any upfront costs.',
      whatIsSavi: 'What is Savi?',
      whatIsSaviText: 'Savi is a Palestinian marketing app that provides an easy-to-use platform enabling restaurants and stores to display discounts and special offers to customers looking for value and quality. The app works on a performance-based model, meaning merchants only pay when they get real results.',
      howItWorks: 'How Does It Work?',
      step1Title: 'For Merchants: Free Exclusive Joining',
      step1Text: 'Register your store or restaurant completely free - no subscription fees or upfront costs. Set the offers and discounts you want to provide.',
      step2Title: 'For Customers: Monthly Subscription for Offers',
      step2Text: 'Customers subscribe monthly to get exclusive offers. They browse available offers and choose suitable restaurants and stores.',
      step3Title: 'Real Visits',
      step3Text: 'When a customer visits the store and uses the offer, the merchant gets a new customer and pays only a small percentage of sales value.',
      benefits: 'Benefits and Features',
      forMerchants: 'For Merchants and Restaurants',
      benefit1: '100% free joining - absolutely no subscription fees',
      benefit2: 'Increase traffic on quiet days',
      benefit3: 'Attract new customers continuously',
      benefit4: 'Full control over offers and discounts',
      benefit5: 'Detailed reports and statistics',
      benefit6: 'Continuous technical support',
      forCustomers: 'For Customers',
      benefit7: 'Discover the best offers in your area',
      benefit8: 'Save money while maintaining quality',
      benefit9: 'Easy and fast experience',
      benefit10: 'Discover new places',
      benefit11: 'Daily updated offers',
      benefit12: 'Simple monthly subscription to access all offers',
      whyDifferent: 'Why is Savi Different?',
      reason1Title: 'Free for Merchants',
      reason1Text: 'Completely free joining for stores and restaurants - no subscription fees or hidden costs. A business model that serves everyone.',
      reason2Title: 'Locally Designed',
      reason2Text: 'Deep understanding of the Palestinian market and local business needs.',
      reason3Title: 'Easy to Use',
      reason3Text: 'Simple and easy interface for both merchants and customers.',
      reason4Title: 'Measurable Results',
      reason4Text: 'Detailed reports showing exactly how many new customers you got and sales amount.',
      learnMore: 'Learn More',
      learnMoreText: 'Discover all the details of Savi app and how it can help your business grow',
      downloadApp: 'Download the App Now',
      downloadIOS: 'Download from App Store',
      downloadAndroid: 'Download from Google Play',
      partnerStores: 'Partner Stores',
      partnerStoresSubtitle: 'Discover our partner stores and restaurants',
      viewAllStores: 'View All Stores',
      loadingStores: 'Loading stores...'
    }
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-red-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="/app_icon.png" 
              alt="Savi" 
              className="mx-auto mb-6 w-32 h-32 md:w-40 md:h-40 rounded-full"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              {t.subtitle}
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
              {t.intro}
            </p>
            
            {/* App Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href={IOS_APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-xl flex items-center gap-3 min-w-[250px] justify-center"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span>{t.downloadIOS}</span>
              </a>
              
              <a
                href={ANDROID_PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-xl flex items-center gap-3 min-w-[250px] justify-center"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span>{t.downloadAndroid}</span>
              </a>
            </div>
            
            <Link
              to="/savi-details"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              {language === 'ar' ? 'كيف تستخدم SAVI' : 'How to Use SAVI'}
            </Link>
          </div>
        </div>
      </section>

      {/* What is Savi */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
              {t.whatIsSavi}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
              {t.whatIsSaviText}
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            {t.howItWorks}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-primary/10 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {t.step1Title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {t.step1Text}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-primary/10 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {t.step2Title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {t.step2Text}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-primary/10 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {t.step3Title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {t.step3Text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            {t.benefits}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* For Merchants */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                {t.forMerchants}
              </h3>
              <ul className="space-y-4">
                {[t.benefit1, t.benefit2, t.benefit3, t.benefit4, t.benefit5, t.benefit6].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary text-xl ml-3 mr-3">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Customers */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                {t.forCustomers}
              </h3>
              <ul className="space-y-4">
                {[t.benefit7, t.benefit8, t.benefit9, t.benefit10, t.benefit11, t.benefit12].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary text-xl ml-3 mr-3">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            {t.whyDifferent}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-3">
                {t.reason1Title}
              </h4>
              <p className="text-gray-600 text-sm">
                {t.reason1Text}
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-3">
                {t.reason2Title}
              </h4>
              <p className="text-gray-600 text-sm">
                {t.reason2Text}
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-3">
                {t.reason3Title}
              </h4>
              <p className="text-gray-600 text-sm">
                {t.reason3Text}
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-3">
                {t.reason4Title}
              </h4>
              <p className="text-gray-600 text-sm">
                {t.reason4Text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Stores Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.partnerStores}
            </h2>
            <p className="text-lg text-gray-600">
              {t.partnerStoresSubtitle}
            </p>
          </div>

          {loadingStores ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mb-4"></div>
              <p className="text-gray-600">{t.loadingStores}</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
                {stores.slice(0, 5).map((store) => (
                  <div
                    key={store.id}
                    className="flex flex-col items-center"
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-3">
                      <img
                        src={store.logoUrl || '/app_icon.png'}
                        alt={store.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = '/app_icon.png'
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">
                        {store.name}
                      </h3>
                      {store.address && (
                        <p className="text-xs text-gray-500 mt-1">
                          {store.address}
                        </p>
                      )}
                      {store.averageRating > 0 && (
                        <div className="flex items-center justify-center mt-2">
                          <span className="text-yellow-500">★</span>
                          <span className="text-sm text-gray-600 mr-1">
                            {store.formattedRating || store.averageRating.toFixed(1)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  to="/stores"
                  className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl"
                >
                  {t.viewAllStores}
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.learnMore}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t.learnMoreText}
            </p>
            <Link
              to="/savi-details"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              {language === 'ar' ? 'اعرف المزيد عن التطبيق' : 'Learn More About the App'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SaviApp


