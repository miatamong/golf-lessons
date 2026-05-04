import { useState } from 'react'
import { useLang } from '../LanguageContext'
import { translations } from '../translations'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const { lang } = useLang()
  const t = translations[lang].faq

  return (
    <section id="faq" className="bg-white pt-8 sm:pt-12 pb-16 sm:pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#7A6A2E] text-sm font-semibold tracking-widest uppercase">{t.subtitle}</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-[#1e3a5f]">{t.title}</h2>
          <div className="mt-4 w-16 h-1 bg-[#c9a84c] mx-auto rounded-full" />
        </div>

        <div className="space-y-3">
          {t.items.map((item, i) => (
            <div key={i} className="rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className={`w-full flex items-center justify-between gap-3 px-4 sm:px-6 py-4 sm:py-5 text-left transition-colors duration-150 ${
                  open === i ? 'bg-[#1e3a5f]' : 'bg-[#f5f0e8] hover:bg-[#e8dcc8]'
                }`}
              >
                <span className={`font-semibold ${open === i ? 'text-white' : 'text-[#1e3a5f]'}`}>
                  <span className={`font-bold mr-2 ${open === i ? 'text-[#c9a84c]' : 'text-[#7A6A2E]'}`}>Q.</span>
                  {item.q}
                </span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform duration-200 ${
                  open === i ? 'border-[#c9a84c] rotate-45' : 'border-[#1e3a5f]'
                }`}>
                  <svg className={`w-3 h-3 ${open === i ? 'text-[#c9a84c]' : 'text-[#1e3a5f]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="bg-[#f5f0e8] px-4 sm:px-6 py-4 sm:py-5 text-sm leading-relaxed text-[#1e3a5f]/80">
                  <span className="font-bold text-[#1e3a5f] mr-2">A.</span>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-[#1e3a5f]/60 text-sm mb-3">
            {t.footer_q}{' '}
            <a href="#contact" className="text-[#c9a84c] font-semibold hover:underline">{t.footer_link}</a>
          </p>
          <a
            href="#booking"
            className="inline-block bg-[#1e3a5f] hover:bg-[#16304f] text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
