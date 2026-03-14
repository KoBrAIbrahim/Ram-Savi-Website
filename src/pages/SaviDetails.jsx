import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPageTranslations } from '../locales'
import { useScrollReveal } from '../hooks/useScrollReveal'

function SaviDetails({ language }) {
    const [loadedImages,   setLoadedImages]   = useState({})
    const [selectedScreen, setSelectedScreen] = useState(null)
    const t = getPageTranslations(language, 'saviDetails')

    const screens = [
        { file:'login_screen.jpeg', ar:'شاشة تسجيل الدخول', en:'Login Screen', purpose_ar:'تسمح للمستخدمين بالدخول إلى حساباتهم الشخصية للوصول إلى العروض الحصرية', purpose_en:'Allows users to log into their personal accounts to access exclusive offers', features_ar:['إدخال البريد الإلكتروني','كلمة مرور آمنة','خيار تذكر معلومات الدخول','استعادة كلمة المرور'], features_en:['Email input','Secure password','Remember login option','Password recovery'], usage_ar:'أدخل بريدك الإلكتروني وكلمة المرور للوصول إلى حسابك', usage_en:'Enter your email and password to access your account' },
        { file:'signup_step_1.jpeg', ar:'التسجيل - الخطوة 1', en:'Sign Up - Step 1', purpose_ar:'بداية رحلة التسجيل في التطبيق - إدخال المعلومات الأساسية', purpose_en:'Start of registration journey - entering basic information', features_ar:['إدخال الاسم الكامل','رقم الهاتف','البريد الإلكتروني','التحقق من صحة البيانات'], features_en:['Full name input','Phone number','Email address','Data validation'], usage_ar:'املأ البيانات الأساسية للبدء في إنشاء حسابك', usage_en:'Fill in basic information to start creating your account' },
        { file:'signup_step_2.jpeg.jpeg', ar:'التسجيل - الخطوة 2', en:'Sign Up - Step 2', purpose_ar:'إنشاء كلمة مرور قوية وآمنة لحماية الحساب', purpose_en:'Create a strong and secure password to protect your account', features_ar:['إنشاء كلمة مرور','تأكيد كلمة المرور','متطلبات الأمان','مؤشر قوة كلمة المرور'], features_en:['Password creation','Password confirmation','Security requirements','Password strength indicator'], usage_ar:'أنشئ كلمة مرور قوية تحتوي على أحرف وأرقام ورموز', usage_en:'Create a strong password containing letters, numbers and symbols' },
        { file:'signup_step_3.jpeg.jpeg', ar:'التسجيل - الخطوة 3', en:'Sign Up - Step 3', purpose_ar:'إكمال عملية التسجيل والموافقة على الشروط والأحكام', purpose_en:'Complete registration and accept terms and conditions', features_ar:['قراءة الشروط والأحكام','سياسة الخصوصية','الموافقة النهائية','إنهاء التسجيل'], features_en:['Terms and conditions review','Privacy policy','Final approval','Complete registration'], usage_ar:'اقرأ ووافق على الشروط لإكمال التسجيل', usage_en:'Read and accept terms to complete registration' },
        { file:'verification_screen.jpeg', ar:'شاشة التحقق', en:'Verification Screen', purpose_ar:'التحقق من ملكية رقم الهاتف لضمان أمان الحساب', purpose_en:'Verify phone number ownership to ensure account security', features_ar:['إدخال رمز التحقق','إعادة إرسال الرمز','مؤقت العد التنازلي'], features_en:['Verification code input','Resend code','Countdown timer'], usage_ar:'أدخل الرمز المرسل إلى هاتفك للتحقق من حسابك', usage_en:'Enter the code sent to your phone to verify your account' },
        { file:'your_city.jpeg', ar:'اختيار المدينة', en:'City Selection', purpose_ar:'تحديد موقعك للحصول على عروض محلية مناسبة لمنطقتك', purpose_en:'Set your location to get local offers suitable for your area', features_ar:['قائمة المدن المتاحة','بحث سريع','تحديد تلقائي للموقع','حفظ التفضيلات'], features_en:['Available cities list','Quick search','Auto-location','Save preferences'], usage_ar:'اختر مدينتك لعرض العروض القريبة منك', usage_en:'Choose your city to see offers near you' },
        { file:'Home_screen.jpeg', ar:'الشاشة الرئيسية', en:'Home Screen', purpose_ar:'نقطة البداية للتصفح واكتشاف العروض المتاحة', purpose_en:'Starting point for browsing and discovering available offers', features_ar:['عروض مميزة','فئات الشركات','بحث سريع','شريط التنقل السفلي'], features_en:['Featured offers','Company categories','Quick search','Bottom navigation'], usage_ar:'تصفح العروض المتاحة واختر ما يناسبك', usage_en:'Browse available offers and choose what suits you' },
        { file:'Home_screen_2.jpeg', ar:'الشاشة الرئيسية 2', en:'Home Screen 2', purpose_ar:'عرض المزيد من العروض والشركات المشاركة', purpose_en:'Display more offers and participating companies', features_ar:['قائمة الشركات','تصنيفات متعددة','تقييمات المستخدمين','المسافة من الموقع'], features_en:['Company list','Multiple categories','User ratings','Distance from location'], usage_ar:'استكشف المزيد من الشركات والعروض الحصرية', usage_en:'Explore more companies and exclusive offers' },
        { file:'Have_Subsicription.jpeg', ar:'حالة الاشتراك', en:'Subscription Status', purpose_ar:'عرض معلومات الاشتراك الشهري والمزايا المتاحة', purpose_en:'Display monthly subscription information and available benefits', features_ar:['تاريخ انتهاء الاشتراك','المزايا المتاحة','تفاصيل الباقة','خيارات التجديد'], features_en:['Subscription expiry','Available benefits','Package details','Renewal options'], usage_ar:'تحقق من حالة اشتراكك والمزايا المتاحة لك', usage_en:'Check your subscription status and available benefits' },
        { file:'unSubsicription_screen.jpeg', ar:'تسجيل اشتراك شهري', en:'Subscribe Monthly', purpose_ar:'التسجيل في الاشتراك الشهري للحصول على العروض الحصرية', purpose_en:'Subscribe monthly to get exclusive offers', features_ar:['اختيار الباقة الشهرية','بوابة دفع آمنة','دفع بالفيزا أو طرق أخرى','تفعيل فوري للاشتراك'], features_en:['Choose monthly package','Secure payment gateway','Visa or other payment methods','Instant activation'], usage_ar:'اضغط على زر الاشتراك وأدخل بيانات الدفع لتفعيل العضوية', usage_en:'Press subscribe button and enter payment details to activate membership' },
        { file:'category_Companies.jpeg', ar:'فئات الشركات', en:'Company Categories', purpose_ar:'عرض جميع المحلات من نفس الفئة المختارة', purpose_en:'Display all stores from the same selected category', features_ar:['قائمة المحلات حسب الفئة','رؤية العروض مباشرة','فتح صفحة المحل والتعرف عليه','تصفية بحسب التقييم','عدد الشركات في كل فئة'], features_en:['Store list by category','View offers directly','Open store page and explore','Filter by rating','Company count per category'], usage_ar:'اختر الفئة لعرض جميع المحلات المتاحة وعروضها', usage_en:'Choose category to display all available stores and their offers' },
        { file:'Company_Deatils.jpeg', ar:'تفاصيل الشركة', en:'Company Details', purpose_ar:'معرفة كل شيء عن المحل - المينو، التقييم، المشاركة وكل التفاصيل', purpose_en:'Learn everything about the store - menu, ratings, sharing and all details', features_ar:['عرض المينو الكامل','التقييمات والمراجعات','مشاركة المحل','العنوان والموقع','أوقات العمل','صور المحل'], features_en:['Full menu display','Ratings and reviews','Share store','Address and location','Working hours','Store photos'], usage_ar:'استعرض المينو، اقرأ التقييمات، وشارك المحل مع أصدقائك', usage_en:'Browse menu, read ratings, and share the store with friends' },
        { file:'offer_company_Screen.jpeg', ar:'عروض الشركة', en:'Company Offers', purpose_ar:'عرض جميع العروض والخصومات المتاحة من الشركة', purpose_en:'Display all available offers and discounts from the company', features_ar:['قائمة العروض','نسبة الخصم','تاريخ الانتهاء','شروط الاستخدام','حفظ العروض'], features_en:['Offers list','Discount percentage','Expiry date','Terms of use','Save offers'], usage_ar:'اختر العرض المناسب واستخدمه عند الزيارة', usage_en:'Choose suitable offer and use it when visiting' },
        { file:'voucher_details.jpeg', ar:'تفاصيل القسيمة', en:'Voucher Details', purpose_ar:'عرض تفاصيل القسيمة وإدخال كلمة مرور من صاحب المحل لأخذ القسيمة', purpose_en:'Display voucher details and enter password from store owner to claim voucher', features_ar:['رمز القسيمة','قيمة الخصم','إدخال كلمة مرور من صاحب المحل','تاريخ الصلاحية','شروط الاستخدام'], features_en:['Voucher code','Discount value','Enter password from store owner','Validity date','Usage terms'], usage_ar:'اعرض القسيمة للبائع وأدخل كلمة المرور التي يعطيك إياها لأخذ الخصم', usage_en:'Show voucher to seller and enter password they give you to claim discount' },
        { file:'saving_company_or_vouchers.jpeg', ar:'الحفظ والمفضلة', en:'Saved & Favorites', purpose_ar:'حفظ الشركات والعروض المفضلة للوصول السريع', purpose_en:'Save favorite companies and offers for quick access', features_ar:['قائمة المحفوظات','الشركات المفضلة','العروض المحفوظة','إزالة من المفضلة'], features_en:['Saved list','Favorite companies','Saved offers','Remove from favorites'], usage_ar:'احفظ العروض المفضلة لديك للعودة إليها لاحقاً', usage_en:'Save your favorite offers to return to them later' },
        { file:'map_screen.jpeg', ar:'خريطة المواقع', en:'Map View', purpose_ar:'عرض مواقع الشركات على الخريطة للوصول السهل', purpose_en:'Display company locations on map for easy navigation', features_ar:['خريطة تفاعلية','موقع الشركات','المسافة منك','التوجيه بالخرائط','تصفية النتائج'], features_en:['Interactive map','Company locations','Distance from you','Navigation','Filter results'], usage_ar:'اضغط على أي شركة للحصول على الاتجاهات', usage_en:'Tap any company to get directions' },
        { file:'profile_screen.jpeg', ar:'الملف الشخصي', en:'Profile Screen', purpose_ar:'إدارة معلوماتك الشخصية وإعدادات الحساب', purpose_en:'Manage your personal information and account settings', features_ar:['تعديل المعلومات','تغيير الصورة','إعدادات الحساب','الخصوصية','تسجيل الخروج'], features_en:['Edit information','Change photo','Account settings','Privacy','Logout'], usage_ar:'حدّث معلوماتك الشخصية وإعدادات حسابك', usage_en:'Update your personal information and account settings' },
        { file:'history.jpeg', ar:'السجل', en:'History', purpose_ar:'عرض سجل استخدام العروض والزيارات السابقة', purpose_en:'Display history of offer usage and previous visits', features_ar:['العروض المستخدمة','تاريخ الاستخدام','الشركات المزارة','المدخرات الإجمالية'], features_en:['Used offers','Usage date','Visited companies','Total savings'], usage_ar:'تتبع استخدامك للعروض والمدخرات المحققة', usage_en:'Track your offer usage and achieved savings' },
        { file:'notification_screen.jpeg', ar:'الإشعارات', en:'Notifications', purpose_ar:'استقبال التنبيهات حول العروض الجديدة والتحديثات', purpose_en:'Receive alerts about new offers and updates', features_ar:['عروض جديدة','تذكيرات','تحديثات النظام','علامات القراءة','إعدادات الإشعارات'], features_en:['New offers','Reminders','System updates','Read marks','Notification settings'], usage_ar:'ابقَ على اطلاع بأحدث العروض والتحديثات', usage_en:'Stay updated with latest offers and updates' },
        { file:'invite_screen.jpeg', ar:'دعوة الأصدقاء', en:'Invite Friends', purpose_ar:'مشاركة كود الدعوة مع أصدقائك ليستخدموه وقت الاشتراك لأخذ شهر مجاني', purpose_en:'Share invite code with friends to use during subscription for free month', features_ar:['رمز الدعوة الخاص','مشاركة عبر وسائل التواصل','شهر مجاني للصديق','تتبع عدد الدعوات'], features_en:['Personal invite code','Share via social media','Free month for friend','Track invitation count'], usage_ar:'شارك الكود مع أصدقائك ليستخدموه عند التسجيل ويحصلون على شهر مجاني', usage_en:'Share code with friends to use during registration and get free month' },
    ]

    useEffect(() => {
        const preload = async () => {
            const map = {}
            for (const s of screens) {
                await new Promise((res) => {
                    const img = new Image(); img.src = `/screens/${s.file}`
                    img.onload  = () => { map[s.file] = true;  res() }
                    img.onerror = () => { map[s.file] = false; res() }
                })
            }
            setLoadedImages(map)
        }
        preload()
    }, [])

    useScrollReveal()

    /* ── DETAIL VIEW ── */
    if (selectedScreen) {
        const sc = selectedScreen
        return (
            <div className="min-h-screen bg-white">
                {/* Header */}
                <section className="relative bg-[#07080F] py-24 overflow-hidden">
                    <div className="blob blob-red w-[400px] h-[400px] -top-20 -right-20 opacity-40 animate-float-blob" />
                    <div className="grid-overlay" />
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button onClick={() => setSelectedScreen(null)}
                                className="text-white/70 hover:text-white flex items-center gap-2 mb-8 transition-colors group pt-8">
                            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            {t.backToGallery}
                        </button>
                        <h1 className="text-4xl md:text-5xl font-black text-white text-center animate-fade-up">
                            {language === 'ar' ? sc.ar : sc.en}
                        </h1>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                </section>

                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                            {/* Phone mockup */}
                            <div className="flex justify-center items-start lg:sticky lg:top-24">
                                <div className="relative bg-gradient-to-b from-[#1a1a2e] to-[#07080F] rounded-[2.8rem] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.5)] max-w-[280px] border border-white/[0.08]">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-6 bg-[#07080F] rounded-b-3xl z-10" />
                                    <div className="relative aspect-[9/16] bg-gray-100 rounded-[2.2rem] overflow-hidden border-4 border-[#0d0d1a]">
                                        <img src={`/screens/${sc.file}`} alt={language === 'ar' ? sc.ar : sc.en}
                                             className="w-full h-full object-contain" />
                                    </div>
                                    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/20 rounded-full" />
                                </div>
                            </div>

                            {/* Details */}
                            <div className="space-y-6">
                                <div className="feature-card p-7">
                                    <h2 className="text-lg font-bold text-[#E80010] mb-3">{t.purpose}</h2>
                                    <p className="text-gray-600 leading-relaxed">{language === 'ar' ? sc.purpose_ar : sc.purpose_en}</p>
                                </div>
                                <div className="feature-card p-7">
                                    <h2 className="text-lg font-bold text-[#E80010] mb-4">{t.features}</h2>
                                    <ul className="space-y-2.5">
                                        {(language === 'ar' ? sc.features_ar : sc.features_en).map((f, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <span className="w-5 h-5 rounded-full bg-[#E80010]/10 text-[#E80010] text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">•</span>
                                                <span className="text-gray-600 text-sm">{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="feature-card p-7">
                                    <h2 className="text-lg font-bold text-[#E80010] mb-3">{t.howToUse}</h2>
                                    <p className="text-gray-600 leading-relaxed">{language === 'ar' ? sc.usage_ar : sc.usage_en}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    /* ── GALLERY ── */
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <section className="relative bg-[#07080F] py-32 md:py-40 overflow-hidden">
                <div className="blob blob-red w-[520px] h-[520px] -top-28 -right-20 opacity-50 animate-float-blob" />
                <div className="grid-overlay" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center animate-fade-up pt-10">
                    <div className="badge-white mx-auto mb-6 w-fit">
                        <span className="w-2 h-2 rounded-full bg-[#E80010] inline-block" />
                        {t.screenGallery}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-4">{t.title}</h1>
                    <p className="text-white/60 max-w-2xl mx-auto">{t.subtitle}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 reveal">
                        <p className="text-gray-400 text-sm">{t.clickToView}</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {screens.map((sc, i) => (
                            <div key={i} className="group cursor-pointer reveal" onClick={() => setSelectedScreen(sc)}>
                                {/* Phone frame */}
                                <div className="relative bg-gradient-to-b from-[#1a1a2e] to-[#07080F] rounded-[2.4rem] p-3 border border-white/[0.08] shadow-xl hover:shadow-[0_20px_50px_rgba(232,0,16,0.2)] hover:border-[#E80010]/25 hover:-translate-y-2 transition-all duration-300">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#07080F] rounded-b-3xl z-10" />
                                    <div className="relative aspect-[9/16] bg-gray-100 rounded-[2rem] overflow-hidden border-4 border-[#0d0d1a]">
                                        {loadedImages[sc.file] !== false ? (
                                            <img src={`/screens/${sc.file}`} alt={language === 'ar' ? sc.ar : sc.en}
                                                 className="w-full h-full object-contain" loading="lazy" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs p-2 text-center">
                                                {t.imageUnavailable}
                                            </div>
                                        )}
                                    </div>
                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/15 rounded-full" />
                                </div>
                                <p className="mt-3 text-center text-xs font-semibold text-gray-600 group-hover:text-[#E80010] transition-colors">
                                    {language === 'ar' ? sc.ar : sc.en}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Link to="/savi-app" className="btn-primary mx-auto inline-flex">{t.backToSavi}</Link>
                </div>
            </section>
        </div>
    )
}

export default SaviDetails