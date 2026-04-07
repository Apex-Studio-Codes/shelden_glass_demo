import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STORAGE_KEY = 'sg_banner_dismissed'

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (!dismissed) setVisible(true)
  }, [])

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, 'true')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="bg-sage text-cream py-2.5 px-4 text-center relative">
            <p className="font-body text-sm tracking-wide">
              ✦ Now open at Clarks Village, Street — visit us this season ✦
            </p>
            <button
              onClick={dismiss}
              aria-label="Dismiss announcement"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream transition-colors text-lg leading-none cursor-pointer"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
