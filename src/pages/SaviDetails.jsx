import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function SaviDetails({ language }) {
  const [loadedImages, setLoadedImages] = useState({})
  const [selectedScreen, setSelectedScreen] = useState(null)

  // Screen definitions with detailed information
  const screens = [
    { 
      file: 'login_screen.jpeg', 
      ar: 'شاشة تسجيل الدخول', 
      en: 'Login Screen',
      purpose_ar: 'تسمح للمستخدمين بالدخول إلى حساباتهم الشخصية للوصول إلى العروض الحصرية',
      purpose_en: 'Allows users to log into their personal accounts to access exclusive offers',
      features_ar: ['إدخال البريد الإلكتروني', 'كلمة مرور آمنة', 'خيار تذكر معلومات الدخول', 'استعادة كلمة المرور'],
      features_en: ['Email input', 'Secure password', 'Remember login option', 'Password recovery'],
      usage_ar: 'أدخل بريدك الإلكتروني وكلمة المرور للوصول إلى حسابك',
      usage_en: 'Enter your email and password to access your account'
    },
    { 
      file: 'signup_step_1.jpeg', 
      ar: 'التسجيل - الخطوة 1', 
      en: 'Sign Up - Step 1',
      purpose_ar: 'بداية رحلة التسجيل في التطبيق - إدخال المعلومات الأساسية',
      purpose_en: 'Start of registration journey - entering basic information',
      features_ar: ['إدخال الاسم الكامل', 'رقم الهاتف', 'البريد الإلكتروني', 'التحقق من صحة البيانات'],
      features_en: ['Full name input', 'Phone number', 'Email address', 'Data validation'],
      usage_ar: 'املأ البيانات الأساسية للبدء في إنشاء حسابك',
      usage_en: 'Fill in basic information to start creating your account'
    },
    { 
      file: 'signup_step_2.jpeg.jpeg', 
      ar: 'التسجيل - الخطوة 2', 
      en: 'Sign Up - Step 2',
      purpose_ar: 'إنشاء كلمة مرور قوية وآمنة لحماية الحساب',
      purpose_en: 'Create a strong and secure password to protect your account',
      features_ar: ['إنشاء كلمة مرور', 'تأكيد كلمة المرور', 'متطلبات الأمان', 'مؤشر قوة كلمة المرور'],
      features_en: ['Password creation', 'Password confirmation', 'Security requirements', 'Password strength indicator'],
      usage_ar: 'أنشئ كلمة مرور قوية تحتوي على أحرف وأرقام ورموز',
      usage_en: 'Create a strong password containing letters, numbers and symbols'
    },
    { 
      file: 'signup_step_3.jpeg.jpeg', 
      ar: 'التسجيل - الخطوة 3', 
      en: 'Sign Up - Step 3',
      purpose_ar: 'إكمال عملية التسجيل والموافقة على الشروط والأحكام',
      purpose_en: 'Complete registration and accept terms and conditions',
      features_ar: ['قراءة الشروط والأحكام', 'سياسة الخصوصية', 'الموافقة النهائية', 'إنهاء التسجيل'],
      features_en: ['Terms and conditions review', 'Privacy policy', 'Final approval', 'Complete registration'],
      usage_ar: 'اقرأ ووافق على الشروط لإكمال التسجيل',
      usage_en: 'Read and accept terms to complete registration'
    },
    { 
      file: 'verification_screen.jpeg', 
      ar: 'شاشة التحقق', 
      en: 'Verification Screen',
      purpose_ar: 'التحقق من ملكية رقم الهاتف لضمان أمان الحساب',
      purpose_en: 'Verify phone number ownership to ensure account security',
      features_ar: ['إدخال رمز التحقق', 'إعادة إرسال الرمز', 'مؤقت العد التنازلي'],
      features_en: ['Verification code input', 'Resend code', 'Countdown timer'],
      usage_ar: 'أدخل الرمز المرسل إلى هاتفك للتحقق من حسابك',
      usage_en: 'Enter the code sent to your phone to verify your account'
    },
    { 
      file: 'your_city.jpeg', 
      ar: 'اختيار المدينة', 
      en: 'City Selection',
      purpose_ar: 'تحديد موقعك للحصول على عروض محلية مناسبة لمنطقتك',
      purpose_en: 'Set your location to get local offers suitable for your area',
      features_ar: ['قائمة المدن المتاحة', 'بحث سريع', 'تحديد تلقائي للموقع', 'حفظ التفضيلات'],
      features_en: ['Available cities list', 'Quick search', 'Auto-location', 'Save preferences'],
      usage_ar: 'اختر مدينتك لعرض العروض القريبة منك',
      usage_en: 'Choose your city to see offers near you'
    },
    { 
      file: 'Home_screen.jpeg', 
      ar: 'الشاشة الرئيسية', 
      en: 'Home Screen',
      purpose_ar: 'نقطة البداية للتصفح واكتشاف العروض المتاحة',
      purpose_en: 'Starting point for browsing and discovering available offers',
      features_ar: ['عروض مميزة', 'فئات الشركات', 'بحث سريع', 'شريط التنقل السفلي'],
      features_en: ['Featured offers', 'Company categories', 'Quick search', 'Bottom navigation'],
      usage_ar: 'تصفح العروض المتاحة واختر ما يناسبك',
      usage_en: 'Browse available offers and choose what suits you'
    },
    { 
      file: 'Home_screen_2.jpeg', 
      ar: 'الشاشة الرئيسية 2', 
      en: 'Home Screen 2',
      purpose_ar: 'عرض المزيد من العروض والشركات المشاركة',
      purpose_en: 'Display more offers and participating companies',
      features_ar: ['قائمة الشركات', 'تصنيفات متعددة', 'تقييمات المستخدمين', 'المسافة من الموقع'],
      features_en: ['Company list', 'Multiple categories', 'User ratings', 'Distance from location'],
      usage_ar: 'استكشف المزيد من الشركات والعروض الحصرية',
      usage_en: 'Explore more companies and exclusive offers'
    },
    { 
      file: 'Have_Subsicription.jpeg', 
      ar: 'حالة الاشتراك', 
      en: 'Subscription Status',
      purpose_ar: 'عرض معلومات الاشتراك الشهري والمزايا المتاحة',
      purpose_en: 'Display monthly subscription information and available benefits',
      features_ar: ['تاريخ انتهاء الاشتراك', 'المزايا المتاحة', 'تفاصيل الباقة', 'خيارات التجديد'],
      features_en: ['Subscription expiry', 'Available benefits', 'Package details', 'Renewal options'],
      usage_ar: 'تحقق من حالة اشتراكك والمزايا المتاحة لك',
      usage_en: 'Check your subscription status and available benefits'
    },
    { 
      file: 'unSubsicription_screen.jpeg', 
      ar: 'تسجيل اشتراك شهري', 
      en: 'Subscribe Monthly',
      purpose_ar: 'التسجيل في الاشتراك الشهري للحصول على العروض الحصرية',
      purpose_en: 'Subscribe monthly to get exclusive offers',
      features_ar: ['اختيار الباقة الشهرية', 'بوابة دفع آمنة', 'دفع بالفيزا أو طرق أخرى', 'تفعيل فوري للاشتراك'],
      features_en: ['Choose monthly package', 'Secure payment gateway', 'Visa or other payment methods', 'Instant activation'],
      usage_ar: 'اضغط على زر الاشتراك وأدخل بيانات الدفع لتفعيل العضوية',
      usage_en: 'Press subscribe button and enter payment details to activate membership'
    },
    { 
      file: 'category_Companies.jpeg', 
      ar: 'فئات الشركات', 
      en: 'Company Categories',
      purpose_ar: 'عرض جميع المحلات من نفس الفئة المختارة',
      purpose_en: 'Display all stores from the same selected category',
      features_ar: ['قائمة المحلات حسب الفئة', 'رؤية العروض مباشرة', 'فتح صفحة المحل والتعرف عليه', 'تصفية بحسب التقييم', 'عدد الشركات في كل فئة'],
      features_en: ['Store list by category', 'View offers directly', 'Open store page and explore', 'Filter by rating', 'Company count per category'],
      usage_ar: 'اختر الفئة لعرض جميع المحلات المتاحة وعروضها',
      usage_en: 'Choose category to display all available stores and their offers'
    },
    { 
      file: 'Company_Deatils.jpeg', 
      ar: 'تفاصيل الشركة', 
      en: 'Company Details',
      purpose_ar: 'معرفة كل شيء عن المحل - المينو، التقييم، المشاركة وكل التفاصيل',
      purpose_en: 'Learn everything about the store - menu, ratings, sharing and all details',
      features_ar: ['عرض المينو الكامل', 'التقييمات والمراجعات', 'مشاركة المحل', 'العنوان والموقع', 'أوقات العمل', 'صور المحل'],
      features_en: ['Full menu display', 'Ratings and reviews', 'Share store', 'Address and location', 'Working hours', 'Store photos'],
      usage_ar: 'استعرض المينو، اقرأ التقييمات، وشارك المحل مع أصدقائك',
      usage_en: 'Browse menu, read ratings, and share the store with friends'
    },
    { 
      file: 'offer_company_Screen.jpeg', 
      ar: 'عروض الشركة', 
      en: 'Company Offers',
      purpose_ar: 'عرض جميع العروض والخصومات المتاحة من الشركة',
      purpose_en: 'Display all available offers and discounts from the company',
      features_ar: ['قائمة العروض', 'نسبة الخصم', 'تاريخ الانتهاء', 'شروط الاستخدام', 'حفظ العروض'],
      features_en: ['Offers list', 'Discount percentage', 'Expiry date', 'Terms of use', 'Save offers'],
      usage_ar: 'اختر العرض المناسب واستخدمه عند الزيارة',
      usage_en: 'Choose suitable offer and use it when visiting'
    },
    { 
      file: 'voucher_details.jpeg', 
      ar: 'تفاصيل القسيمة', 
      en: 'Voucher Details',
      purpose_ar: 'عرض تفاصيل القسيمة وإدخال كلمة مرور من صاحب المحل لأخذ القسيمة',
      purpose_en: 'Display voucher details and enter password from store owner to claim voucher',
      features_ar: ['رمز القسيمة', 'قيمة الخصم', 'إدخال كلمة مرور من صاحب المحل', 'تاريخ الصلاحية', 'شروط الاستخدام'],
      features_en: ['Voucher code', 'Discount value', 'Enter password from store owner', 'Validity date', 'Usage terms'],
      usage_ar: 'اعرض القسيمة للبائع وأدخل كلمة المرور التي يعطيك إياها لأخذ الخصم',
      usage_en: 'Show voucher to seller and enter password they give you to claim discount'
    },
    { 
      file: 'saving_company_or_vouchers.jpeg', 
      ar: 'الحفظ والمفضلة', 
      en: 'Saved & Favorites',
      purpose_ar: 'حفظ الشركات والعروض المفضلة للوصول السريع',
      purpose_en: 'Save favorite companies and offers for quick access',
      features_ar: ['قائمة المحفوظات', 'الشركات المفضلة', 'العروض المحفوظة', 'إزالة من المفضلة'],
      features_en: ['Saved list', 'Favorite companies', 'Saved offers', 'Remove from favorites'],
      usage_ar: 'احفظ العروض المفضلة لديك للعودة إليها لاحقاً',
      usage_en: 'Save your favorite offers to return to them later'
    },
    { 
      file: 'map_screen.jpeg', 
      ar: 'خريطة المواقع', 
      en: 'Map View',
      purpose_ar: 'عرض مواقع الشركات على الخريطة للوصول السهل',
      purpose_en: 'Display company locations on map for easy navigation',
      features_ar: ['خريطة تفاعلية', 'موقع الشركات', 'المسافة منك', 'التوجيه بالخرائط', 'تصفية النتائج'],
      features_en: ['Interactive map', 'Company locations', 'Distance from you', 'Navigation', 'Filter results'],
      usage_ar: 'اضغط على أي شركة للحصول على الاتجاهات',
      usage_en: 'Tap any company to get directions'
    },
    { 
      file: 'profile_screen.jpeg', 
      ar: 'الملف الشخصي', 
      en: 'Profile Screen',
      purpose_ar: 'إدارة معلوماتك الشخصية وإعدادات الحساب',
      purpose_en: 'Manage your personal information and account settings',
      features_ar: ['تعديل المعلومات', 'تغيير الصورة', 'إعدادات الحساب', 'الخصوصية', 'تسجيل الخروج'],
      features_en: ['Edit information', 'Change photo', 'Account settings', 'Privacy', 'Logout'],
      usage_ar: 'حدّث معلوماتك الشخصية وإعدادات حسابك',
      usage_en: 'Update your personal information and account settings'
    },
    { 
      file: 'history.jpeg', 
      ar: 'السجل', 
      en: 'History',
      purpose_ar: 'عرض سجل استخدام العروض والزيارات السابقة',
      purpose_en: 'Display history of offer usage and previous visits',
      features_ar: ['العروض المستخدمة', 'تاريخ الاستخدام', 'الشركات المزارة', 'المدخرات الإجمالية'],
      features_en: ['Used offers', 'Usage date', 'Visited companies', 'Total savings'],
      usage_ar: 'تتبع استخدامك للعروض والمدخرات المحققة',
      usage_en: 'Track your offer usage and achieved savings'
    },
    { 
      file: 'notification_screen.jpeg', 
      ar: 'الإشعارات', 
      en: 'Notifications',
      purpose_ar: 'استقبال التنبيهات حول العروض الجديدة والتحديثات',
      purpose_en: 'Receive alerts about new offers and updates',
      features_ar: ['عروض جديدة', 'تذكيرات', 'تحديثات النظام', 'علامات القراءة', 'إعدادات الإشعارات'],
      features_en: ['New offers', 'Reminders', 'System updates', 'Read marks', 'Notification settings'],
      usage_ar: 'ابقَ على اطلاع بأحدث العروض والتحديثات',
      usage_en: 'Stay updated with latest offers and updates'
    },
    { 
      file: 'invite_screen.jpeg', 
      ar: 'دعوة الأصدقاء', 
      en: 'Invite Friends',
      purpose_ar: 'مشاركة كود الدعوة مع أصدقائك ليستخدموه وقت الاشتراك لأخذ شهر مجاني',
      purpose_en: 'Share invite code with friends to use during subscription for free month',
      features_ar: ['رمز الدعوة الخاص', 'مشاركة عبر وسائل التواصل', 'شهر مجاني للصديق', 'تتبع عدد الدعوات'],
      features_en: ['Personal invite code', 'Share via social media', 'Free month for friend', 'Track invitation count'],
      usage_ar: 'شارك الكود مع أصدقائك ليستخدموه عند التسجيل ويحصلون على شهر مجاني',
      usage_en: 'Share code with friends to use during registration and get free month'
    }
  ]

  // Preload images and cache them
  useEffect(() => {
    const preloadImages = async () => {
      const loaded = {}
      
      for (const screen of screens) {
        const img = new Image()
        img.src = `/screens/${screen.file}`
        
        // Wait for image to load
        await new Promise((resolve) => {
          img.onload = () => {
            loaded[screen.file] = true
            resolve()
          }
          img.onerror = () => {
            loaded[screen.file] = false
            resolve()
          }
        })
      }
      
      setLoadedImages(loaded)
    }

    preloadImages()
  }, [])

  const content = {
    ar: {
      title: 'كيف تستخدم تطبيق Savi',
      subtitle: 'شاهد جميع شاشات التطبيق بالتفصيل',
      screenGallery: 'معرض الشاشات',
      clickToView: 'اضغط على أي صورة لمشاهدة التفاصيل',
      backToSavi: 'العودة إلى صفحة Savi',
      backToGallery: 'العودة إلى المعرض',
      purpose: 'الهدف من الشاشة',
      features: 'المميزات',
      howToUse: 'كيفية الاستخدام'
    },
    en: {
      title: 'How to Use Savi App',
      subtitle: 'View All App Screens in Detail',
      screenGallery: 'Screen Gallery',
      clickToView: 'Click any image to view details',
      backToSavi: 'Back to Savi Page',
      backToGallery: 'Back to Gallery',
      purpose: 'Screen Purpose',
      features: 'Features',
      howToUse: 'How to Use'
    }
  }

  const t = content[language]

  // If a screen is selected, show detail view
  if (selectedScreen) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-red-600 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedScreen(null)}
              className="text-white hover:text-gray-200 mb-6 flex items-center gap-2 transition"
            >
              <span className="text-2xl">←</span>
              <span className="text-lg">{t.backToGallery}</span>
            </button>
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
              {language === 'ar' ? selectedScreen.ar : selectedScreen.en}
            </h1>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Screen Image - Order changed for mobile */}
              <div className="flex justify-center items-start lg:sticky lg:top-24 order-1 lg:order-none">
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl max-w-sm">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
                  <div className="relative aspect-[9/16] bg-white rounded-[2.5rem] overflow-hidden border-4 border-gray-900">
                    <img
                      src={`/screens/${selectedScreen.file}`}
                      alt={language === 'ar' ? selectedScreen.ar : selectedScreen.en}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-700 rounded-full"></div>
                </div>
              </div>

              {/* Screen Details - Order changed for mobile */}
              <div className="space-y-8 order-2 lg:order-none">
                {/* Purpose */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {t.purpose}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {language === 'ar' ? selectedScreen.purpose_ar : selectedScreen.purpose_en}
                  </p>
                </div>

                {/* Features */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {t.features}
                  </h2>
                  <ul className="space-y-3">
                    {(language === 'ar' ? selectedScreen.features_ar : selectedScreen.features_en).map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary text-xl mt-1">•</span>
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How to Use */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {t.howToUse}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {language === 'ar' ? selectedScreen.usage_ar : selectedScreen.usage_en}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

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

      {/* Screen Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.screenGallery}
            </h2>
            <p className="text-lg text-gray-600">
              {t.clickToView}
            </p>
          </div>

          {/* Screens Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {screens.map((screen, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setSelectedScreen(screen)}
              >
                {/* Phone Frame */}
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-3 shadow-2xl hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10"></div>
                  
                  {/* Screen Container */}
                  <div className="relative aspect-[9/16] bg-gray-100 rounded-[2rem] overflow-hidden border-4 border-gray-900">
                    {loadedImages[screen.file] !== false ? (
                      <img
                        src={`/screens/${screen.file}`}
                        alt={language === 'ar' ? screen.ar : screen.en}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <span>صورة غير متوفرة</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Phone Bottom Bar */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-700 rounded-full"></div>
                </div>
                
                {/* Screen Title */}
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                    {language === 'ar' ? screen.ar : screen.en}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/savi-app"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl"
          >
            {t.backToSavi}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default SaviDetails


