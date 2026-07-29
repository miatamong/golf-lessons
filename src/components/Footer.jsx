import { useLang } from '../i18n.jsx'
import { CONTACT, LOCATIONS } from '../contact'

export default function Footer() {
  const { t } = useLang()
  const F = t.footer
  const year = new Date().getFullYear()

  const quickLinks = [
    [t.nav.home, '#home'],
    [t.nav.about, '#about'],
    [t.nav.lessons, '#lessons'],
    [t.nav.contact, '#contact'],
  ]

  return (
    <footer className="bg-[#0f2440] text-white py-12 pb-24 sm:pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-white font-bold text-xl tracking-tight">
                Willis <span className="text-[#c9a84c]">Lee</span>
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-[#c9a84c] text-sm uppercase tracking-widest mb-4">{F.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#c9a84c] text-sm uppercase tracking-widest mb-4">{F.contact}</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>{CONTACT.email}</li>
              <li>{CONTACT.phone}</li>
              {LOCATIONS.map((l) => (
                <li key={l.id}>
                  <span className="block text-white/70">{l.name}</span>
                  <span className="block">{l.address}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 mt-4">
              {[
                { name: 'Instagram', href: CONTACT.instagramProfile },
                { name: 'KakaoTalk', href: CONTACT.kakao },
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
          <span>{F.rights(year)}</span>
          <span>{F.role}</span>
        </div>
      </div>
    </footer>
  )
}
