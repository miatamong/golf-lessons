import { useEffect } from 'react'
import ContactButtons from './ContactButtons'
import { useLang } from '../i18n.jsx'
import { CONTACT, LOCATIONS } from '../contact'

export default function Contact() {
  const { t } = useLang()
  const C = t.contact

  // Instagram feed widget (Behold)
  useEffect(() => {
    if (document.querySelector('script[src="https://w.behold.so/widget.js"]')) return
    const s = document.createElement('script')
    s.type = 'module'
    s.src = 'https://w.behold.so/widget.js'
    document.head.append(s)
  }, [])

  const infoItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: C.phoneLabel,
      value: CONTACT.phone,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: C.locationLabel,
      value: (
        <span className="block space-y-1">
          {LOCATIONS.map((l) => (
            <span key={l.id} className="block">
              <span className="font-medium">{l.name}</span> · {l.address}
            </span>
          ))}
        </span>
      ),
    },
  ]

  return (
    <section id="contact" className="bg-[#1e3a5f] py-16 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">{C.eyebrow}</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-white">{C.title}</h2>
          <div className="mt-4 w-16 h-1 bg-[#c9a84c] mx-auto rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="text-white space-y-8">
            <p className="text-white/70 leading-relaxed text-lg">{C.intro}</p>

            <ContactButtons message={C.prefill} dark className="!justify-start" />

            <div className="space-y-5">
              {infoItems.map((item) => (
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
              <div className="text-white/60 text-xs font-medium uppercase tracking-wide mb-3">{C.followTitle}</div>
              <div className="flex gap-3">
                {[
                  { name: 'Instagram', href: CONTACT.instagramProfile },
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

        {/* Instagram Feed */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-white/50 text-xs font-semibold uppercase tracking-widest">@willisleegolf</span>
          </div>
          <behold-widget feed-id="3AtyjX0tzQvTy9882XvS"></behold-widget>
        </div>
      </div>
    </section>
  )
}
