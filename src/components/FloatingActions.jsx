import { useState, useEffect } from 'react'
import { useLang } from '../i18n.jsx'
import { CONTACT } from '../contact'

// 항상 떠 있는 카카오톡 상담 버튼 + 스크롤 시 나타나는 "맨 위로" 버튼
export default function FloatingActions() {
  const { t } = useLang()
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-5 left-5 z-50 w-11 h-11 rounded-full bg-[#1e3a5f] text-white shadow-xl flex items-center justify-center hover:-translate-y-0.5 transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}

      {/* KakaoTalk chat (always visible) */}
      <a
        href={CONTACT.kakao}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="KakaoTalk"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 bg-[#FEE500] hover:bg-[#f5dc00] text-[#3C1E1E] font-semibold pl-3.5 pr-4 py-3 rounded-full shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3.2c-5.4 0-9.8 3.5-9.8 7.8 0 2.8 1.9 5.2 4.7 6.6-.2.7-.7 2.5-.8 2.9-.1.5.2.5.4.4.2-.1 2.5-1.7 3.5-2.4.6.1 1.3.1 2 .1 5.4 0 9.8-3.5 9.8-7.8S17.4 3.2 12 3.2z" />
        </svg>
        <span className="text-sm">{t.hero.cta2}</span>
      </a>
    </>
  )
}
