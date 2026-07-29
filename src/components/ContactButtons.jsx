import { chatLinks } from '../contact'
import { useLang } from '../i18n.jsx'

function KakaoIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3.2c-5.4 0-9.8 3.5-9.8 7.8 0 2.8 1.9 5.2 4.7 6.6-.2.7-.7 2.5-.8 2.9-.1.5.2.5.4.4.2-.1 2.5-1.7 3.5-2.4.6.1 1.3.1 2 .1 5.4 0 9.8-3.5 9.8-7.8S17.4 3.2 12 3.2z" />
    </svg>
  )
}

// 상담 채널 버튼. 카카오톡은 카카오 브랜드 컬러(옐로우)+아이콘으로 확실히 드러냄.
export default function ContactButtons({ message, dark = false, className = '' }) {
  const { t } = useLang()
  const links = chatLinks(message)

  const base =
    'inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200'
  const kakao = `${base} bg-[#FEE500] hover:bg-[#f5dc00] text-[#3C1E1E] shadow-lg hover:-translate-y-0.5`
  const secondary = dark
    ? `${base} bg-white/10 hover:bg-white/20 border border-white/30 text-white`
    : `${base} bg-white hover:bg-[#f5f0e8] border border-[#1e3a5f]/20 text-[#1e3a5f]`

  return (
    <div className={`flex flex-col sm:flex-row gap-3 justify-center ${className}`}>
      <a href={links.kakao} target="_blank" rel="noopener noreferrer" className={kakao}>
        <KakaoIcon />
        {t.buttons.kakao}
      </a>
      <a href={links.instagram} target="_blank" rel="noopener noreferrer" className={secondary}>
        {t.buttons.instagram}
      </a>
      <a href={links.sms} className={secondary}>
        {t.buttons.text}
      </a>
    </div>
  )
}
