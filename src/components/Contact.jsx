import { useLang } from '../LanguageContext'
import { translations } from '../translations'

export default function Contact() {
  const { lang } = useLang()
  const t = translations[lang].contact

  const items = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: t.phone,
      value: '778-988-9921',
    },
  ]

  return (
    <section id="contact" className="bg-[#1e3a5f] py-16 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">{t.subtitle}</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-white">{t.title}</h2>
          <div className="mt-4 w-16 h-1 bg-[#c9a84c] mx-auto rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="text-white space-y-8">
            <p className="text-white/70 leading-relaxed text-lg">{t.desc}</p>

            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-xl flex items-center justify-center flex-shrink-0 text-[#c9a84c]">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white/60 text-xs font-medium uppercase tracking-wide">{item.label}</div>
                    <div className="text-white mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <div className="text-white/60 text-xs font-medium uppercase tracking-wide mb-3">Follow Willis</div>
              <div className="flex gap-3">
                {[
                  { name: 'Instagram', href: 'https://instagram.com/willisleegolf' },
                  { name: 'KakaoTalk', href: 'https://open.kakao.com/o/s8THCgni' },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 hover:bg-[#c9a84c]/20 border border-white/20 hover:border-[#c9a84c]/50 rounded-full text-sm text-white/70 hover:text-[#c9a84c] font-semibold transition-all duration-200"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
