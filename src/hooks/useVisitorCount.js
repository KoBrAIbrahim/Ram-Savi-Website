import { useState, useEffect } from 'react'

const COUNTER_URL = import.meta.env.VITE_VISITOR_COUNTER_URL
const SESSION_KEY = 'savi_visited'

export function useVisitorCount() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    const cached = sessionStorage.getItem(SESSION_KEY)
    if (cached) {
      setCount(parseInt(cached, 10))
      return
    }

    if (!COUNTER_URL) return

    fetch(COUNTER_URL, { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        setCount(data.count)
        sessionStorage.setItem(SESSION_KEY, String(data.count))
      })
      .catch(() => {})
  }, [])

  return count
}
