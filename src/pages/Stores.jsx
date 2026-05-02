import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPageTranslations } from '../locales'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Stores({ language }) {
    const [stores,      setStores]      = useState([])
    const [loading,     setLoading]     = useState(true)
    const [error,       setError]       = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages,  setTotalPages]  = useState(1)
    const [pageCursors, setPageCursors] = useState([null])
    const t = getPageTranslations(language, 'stores')
    useScrollReveal()

    useEffect(() => { fetchStores() }, [currentPage])

    const fetchStores = async () => {
        try {
            setLoading(true)
            const apiUrl = import.meta.env.VITE_API_COMPANIES_URL
            const cursor = pageCursors[currentPage - 1]
            const query  = cursor ? `?limit=20&startAfter=${cursor}` : '?limit=20'
            const res    = await fetch(`${apiUrl}${query}`)
            if (!res.ok) throw new Error('Failed to fetch stores')
            const data   = await res.json()
            const comps  = data.data || []
            setStores(Array.isArray(comps) ? comps : [])
            if (data.pagination) {
                if (data.pagination.totalCount !== undefined) {
                    const limit = data.pagination.limit || 10;
                    setTotalPages(Math.ceil(data.pagination.totalCount / limit) || 1);
                }
                if (data.pagination.nextStartAfter) {
                    setPageCursors(prev => {
                        const newCursors = [...prev]
                        newCursors[currentPage] = data.pagination.nextStartAfter
                        return newCursors
                    })
                }
            }
            setError(null)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-2 border-[#E80010] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-gray-500">{t.loading}</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center max-w-sm p-8 bg-white rounded-2xl shadow-card border border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-[#E80010]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                        </svg>
                    </div>
                    <p className="text-gray-700 font-semibold mb-4">{t.error}</p>
                    <Link to="/savi-app" className="btn-primary mx-auto inline-flex text-sm">{t.backToApp}</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">

            {/* ── HERO ── */}
            <section className="relative bg-[#8B0000] py-32 md:py-40 overflow-hidden">
                <div className="blob blob-red w-[500px] h-[500px] -top-24 -right-20 opacity-50 animate-float-blob" />
                <div className="grid-overlay" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up pt-10">

                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6">{t.title}</h1>
                    <Link to="/savi-app" className="btn-ghost text-sm mx-auto inline-flex">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        {t.backToApp}
                    </Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </section>

            {/* ── GRID ── */}
            <section className="py-20 pb-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Page indicator */}
                    <div className="flex items-center justify-between mb-10 reveal">
                        <div className="badge-red">
                            {language === 'ar' ? `الصفحة ${currentPage} من ${totalPages}` : `Page ${currentPage} of ${totalPages}`}
                        </div>
                        <p className="text-gray-400 text-sm">{currentPage} / {totalPages}</p>
                    </div>

                    {stores.length === 0 ? (
                        <div className="text-center py-20 text-gray-400">{t.noStores}</div>
                    ) : (
                        <>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                                {stores.map((store) => (
                                    <div key={store.id}
                                         className="group flex flex-col items-center bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#E80010]/20 hover:shadow-card-lg transition-all duration-300">
                                        <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-gray-100 group-hover:ring-[#E80010]/30 transition-all mb-3">
                                            <img
                                                src={store.logoUrl || '/saviIconBG3.jpg'}
                                                alt={store.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-350"
                                                onError={(e) => { e.target.src = '/saviIconBG3.jpg' }}
                                            />
                                        </div>
                                        <h3 className="font-bold text-[#07080F] text-xs text-center line-clamp-2">{store.name}</h3>
                                        {store.address && (
                                            <p className="text-gray-400 text-[0.68rem] mt-1 text-center line-clamp-1">{store.address}</p>
                                        )}
                                        {store.averageRating > 0 && (
                                            <div className="flex items-center gap-0.5 mt-2">
                                                <span className="text-yellow-400 text-xs">★</span>
                                                <span className="text-gray-500 text-[0.72rem] font-medium">
                          {store.formattedRating || store.averageRating.toFixed(1)}
                        </span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex items-center justify-center gap-4 mt-14">
                                    {/* Previous — outlined ghost style */}
                                    <button
                                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all border disabled:opacity-40 disabled:cursor-not-allowed border-gray-300 bg-white text-[#07080F] hover:border-[#E80010] hover:text-[#E80010]"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                        {t.previousPage}
                                    </button>

                                    {/* Page numbers */}
                                    <div className="flex items-center gap-1">
                                        {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                                            const page = i + 1
                                            const hasCursor = page === 1 || pageCursors[page - 1] !== undefined
                                            return (
                                                <button
                                                    key={page}
                                                    onClick={() => hasCursor && setCurrentPage(page)}
                                                    disabled={!hasCursor && page !== currentPage}
                                                    className={`w-9 h-9 rounded-lg text-sm font-bold transition-all ${
                                                        currentPage === page
                                                            ? 'bg-[#E80010] text-white'
                                                            : !hasCursor
                                                                ? 'text-gray-300 cursor-not-allowed'
                                                                : 'text-gray-500 hover:bg-gray-100'
                                                    }`}
                                                >
                                                    {page}
                                                </button>
                                            )
                                        })}
                                    </div>

                                    {/* Next — solid red filled style */}
                                    <button
                                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                                        disabled={currentPage === totalPages || pageCursors[currentPage] === undefined}
                                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                                        style={{ backgroundColor: '#E80010', color: '#ffffff' }}
                                    >
                                        {t.nextPage}
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

        </div>
    )
}

export default Stores

