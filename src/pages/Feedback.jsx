import { useState } from 'react'
import { API_BASE } from '../config'

function Feedback({ language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'suggestion',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const content = {
    ar: {
      title: 'النصائح والشكاوى',
      subtitle: 'نحن نهتم بآرائكم وملاحظاتكم',
      intro: 'رأيك يهمنا! سواء كانت لديك اقتراحات لتحسين خدماتنا أو شكاوى تود مشاركتها، نحن هنا للاستماع إليك والعمل على تحسين تجربتك.',
      formTitle: 'أرسل ملاحظاتك',
      nameLabel: 'الاسم',
      namePlaceholder: 'أدخل اسمك',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'example@email.com',
      typeLabel: 'نوع الملاحظة',
      suggestion: 'اقتراح',
      complaint: 'شكوى',
      question: 'استفسار',
      other: 'أخرى',
      messageLabel: 'رسالتك',
      messagePlaceholder: 'اكتب ملاحظاتك أو شكواك هنا...',
      submit: 'إرسال',
      submitting: 'جاري الإرسال...',
      successTitle: 'شكراً لك!',
      successMessage: 'تم استلام رسالتك بنجاح. سنقوم بمراجعتها والرد عليك في أقرب وقت ممكن.',
      errorTitle: 'حدث خطأ!',
      errorMessage: 'عذراً، حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.',
      sendAnother: 'إرسال ملاحظة أخرى',
      contactInfo: 'معلومات التواصل',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      whyFeedback: 'لماذا ملاحظاتك مهمة؟',
      reason1: 'تساعدنا على تحسين خدماتنا',
      reason2: 'تمكننا من فهم احتياجاتك بشكل أفضل',
      reason3: 'تساهم في تطوير منتجات أفضل',
      reason4: 'نقدر وقتك وآرائك'
    },
    en: {
      title: 'Feedback and Complaints',
      subtitle: 'We Care About Your Opinions and Feedback',
      intro: 'Your opinion matters to us! Whether you have suggestions to improve our services or complaints you\'d like to share, we\'re here to listen and work on improving your experience.',
      formTitle: 'Send Your Feedback',
      nameLabel: 'Name',
      namePlaceholder: 'Enter your name',
      emailLabel: 'Email',
      emailPlaceholder: 'example@email.com',
      typeLabel: 'Feedback Type',
      suggestion: 'Suggestion',
      complaint: 'Complaint',
      question: 'Question',
      other: 'Other',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Write your feedback or complaint here...',
      submit: 'Submit',
      submitting: 'Submitting...',
      successTitle: 'Thank You!',
      successMessage: 'Your message has been received successfully. We will review it and respond to you as soon as possible.',
      errorTitle: 'Error Occurred!',
      errorMessage: 'Sorry, an error occurred while sending your message. Please try again.',
      sendAnother: 'Send Another Feedback',
      contactInfo: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      whyFeedback: 'Why Your Feedback Matters?',
      reason1: 'Helps us improve our services',
      reason2: 'Enables us to better understand your needs',
      reason3: 'Contributes to developing better products',
      reason4: 'We value your time and opinions'
    }
  }

  const t = content[language]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // تحويل نوع الملاحظة إلى complaintType
    const typeMapping = {
      'suggestion': 'SUGGESTION',
      'complaint': 'COMPLAINT',
      'question': 'QUESTION',
      'other': 'OTHER'
    }

    try {
      console.log('Sending feedback:', {
        name: formData.name,
        email: formData.email,
        complaintType: typeMapping[formData.type] || 'COMPLAINT',
        message: formData.message
      });

      const response = await fetch(`/api/complaints`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          complaintType: typeMapping[formData.type] || 'COMPLAINT',
          message: formData.message
        })
      })

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`Server returned ${response.status}: ${errorText}`)
      }

      const data = await response.json()
      console.log('Feedback submitted successfully:', data)
      setSubmitted(true)
    } catch (err) {
      console.error('Error submitting feedback:', err)
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

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      type: 'suggestion',
      message: ''
    })
    setSubmitted(false)
    setError(null)
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

      {/* Intro */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            {t.intro}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {!submitted ? (
              <>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  {t.formTitle}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
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

                  {/* Email */}
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

                  {/* Type */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      {t.typeLabel}
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    >
                      <option value="suggestion">{t.suggestion}</option>
                      <option value="complaint">{t.complaint}</option>
                      <option value="question">{t.question}</option>
                      <option value="other">{t.other}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      {t.messageLabel}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder={t.messagePlaceholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
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
              </>
            ) : (
              <div className="text-center py-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {t.successTitle}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {t.successMessage}
                </p>
                <button
                  onClick={resetForm}
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  {t.sendAnother}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Feedback Matters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            {t.whyFeedback}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[t.reason1, t.reason2, t.reason3, t.reason4].map((reason, index) => (
              <div key={index} className="bg-primary/10 rounded-xl p-6 text-center">
                <p className="text-gray-700 font-semibold">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {t.contactInfo}
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700">
                <span className="font-semibold">{t.email}:</span>{' '}
                <a 
                  href="mailto:savivoucher@gmail.com" 
                  className="text-primary hover:underline hover:text-primary-dark transition-colors"
                >
                  savivoucher@gmail.com
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">{t.phone}:</span>{' '}
                <a 
                  href="tel:+970569432423" 
                  className="text-primary hover:underline hover:text-primary-dark transition-colors"
                >
                  +970569432423
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Feedback


