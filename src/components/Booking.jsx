import { useLang } from '../LanguageContext'
import { translations } from '../translations'

export default function Booking() {
  const { lang } = useLang()
  const t = translations[lang].booking

  return (
    <section id="booking" className="bg-[#f5f0e8] py-16 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-[#7A6A2E] text-sm font-semibold tracking-widest uppercase">{t.subtitle}</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-[#1e3a5f]">{t.title}</h2>
          <div className="mt-3 w-16 h-1 bg-[#c9a84c] mx-auto rounded-full" />
          <p className="mt-4 text-[#1e3a5f]/80 max-w-lg mx-auto text-sm">{t.desc}</p>
        </div>

        {/* Iframe card */}
        <div className="bg-[#f5f0e8] rounded-3xl border border-[#e8dcc8] shadow-xl overflow-hidden">
          <iframe
            src="https://cal.com/willisleegolf/?brandColor=%231e3a5f"
            loading="lazy"
            className="w-full border-none h-[500px] sm:h-[650px] lg:h-[700px]"
            title="Book a Lesson"
          />
        </div>

      </div>
    </section>
  )
}
