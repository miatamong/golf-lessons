import { useLang } from '../LanguageContext'
import { translations } from '../translations'

export default function Footer() {
  const { lang } = useLang()
  const t = translations[lang].footer

  return (
    <footer className="bg-[#0f2440] text-white py-12 pb-24 sm:pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#1e3a5f] rounded-full flex items-center justify-center border border-white/20">
                <span className="text-[#c9a84c] font-bold text-sm">WL</span>
              </div>
              <div>
                <span className="font-bold text-lg leading-tight block">Willis Lee</span>
                <span className="text-[#c9a84c] text-xs tracking-widest uppercase">Golf Pro</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">{t.tagline}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-[#c9a84c] text-sm uppercase tracking-widest mb-4">{t.links_title}</h4>
            <ul className="space-y-2">
              {t.links.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-white/50 hover:text-white text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#c9a84c] text-sm uppercase tracking-widest mb-4">{t.contact_title}</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>778-988-9921</li>
            </ul>
            <div className="flex gap-3 mt-4">
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

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <span>© {new Date().getFullYear()} Willis Lee Golf. All rights reserved.</span>
          <span>{t.role}</span>
        </div>
      </div>
    </footer>
  )
}
