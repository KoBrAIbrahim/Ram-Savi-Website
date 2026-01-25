import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Stores({ language }) {
  const [stores, setStores] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const content = {
    ar: {
      title: 'المحلات المشتركة',
      loading: 'جاري التحميل...',
      error: 'حدث خطأ في تحميل المحلات',
      noStores: 'لا توجد محلات متاحة حالياً',
      previousPage: 'السابق',
      nextPage: 'التالي',
      backToApp: 'العودة إلى التطبيق'
    },
    en: {
      title: 'Partner Stores',
      loading: 'Loading...',
      error: 'Error loading stores',
      noStores: 'No stores available',
      previousPage: 'Previous',
      nextPage: 'Next',
      backToApp: 'Back to App'
    }
  }

  const t = content[language]

  useEffect(() => {
    console.log('Current Page changed to:', currentPage)
    fetchStores()
  }, [currentPage])

  const fetchStores = async () => {
    try {
      setLoading(true)
      const apiUrl = import.meta.env.VITE_API_COMPANIES_URL
      console.log('API URL:', apiUrl)
      const response = await fetch(`${apiUrl}?page=${currentPage}&limit=10`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch stores')
      }
      
      const data = await response.json()
      console.log('API Response:', data)
      console.log('Pagination:', data.pagination)
      
      // Get companies from data.data
      const companies = data.data || []
      setStores(Array.isArray(companies) ? companies : [])
      
      // Get pagination info
      if (data.pagination) {
        const totalPages = data.pagination.totalPages || data.pagination.total_pages || 1
        const totalCount = data.pagination.total || data.pagination.totalCount || 0
        console.log('Total Count:', totalCount)
        console.log('Total Pages:', totalPages)
        setTotalPages(totalPages)
      } else {
        setTotalPages(1)
      }
      setError(null)
    } catch (err) {
      setError(err.message)
      console.error('Error fetching stores:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mb-4"></div>
          <p className="text-xl text-gray-600">{t.loading}</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">{t.error}</p>
          <Link
            to="/savi-app"
            className="text-red-600 hover:text-red-700 underline"
          >
            {t.backToApp}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t.title}</h1>
          <Link
            to="/savi-app"
            className="inline-block text-red-600 hover:text-red-700 transition-colors"
          >
            ← {t.backToApp}
          </Link>
        </div>

        {/* Stores Grid */}
        {stores.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">{t.noStores}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {stores.map((store) => (
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    currentPage === 1
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-red-600 text-white hover:bg-red-700'
                  }`}
                >
                  {t.previousPage}
                </button>
                
                <span className="text-gray-600 font-semibold">
                  {currentPage} / {totalPages}
                </span>
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    currentPage === totalPages
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-red-600 text-white hover:bg-red-700'
                  }`}
                >
                  {t.nextPage}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Stores
