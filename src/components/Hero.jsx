import { useLang } from '../i18n.jsx'
import { CONTACT } from '../contact'

export default function Hero() {
  const { t } = useLang()
  const journey = t.hero.journey

  return (
    <section id="home" className="relative">
      <div className="grid md:grid-cols-2 md:min-h-screen">
        {/* Photo (top on mobile, right on desktop) */}
        <div className="order-1 md:order-2 relative h-72 sm:h-96 md:h-auto">
          <img
            src="/images/aesthetic-3.jpg"
            alt="Willis Lee golf swing"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* top darken for navbar readability */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />
          {/* subtle blend into the navy panel on desktop */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#1e3a5f] to-transparent" />
        </div>

        {/* Text (below photo on mobile, left on desktop) */}
        <div className="order-2 md:order-1 bg-[#1e3a5f] flex items-center px-6 sm:px-10 lg:px-16 py-12 md:py-0">
          <div className="max-w-lg mx-auto md:mx-0 w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Willis <span className="text-[#c9a84c]">Lee</span>
            </h1>

            {/* Journey with moving arrows: junior golf -> college golf -> golf pro */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2 mb-6">
              {journey.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span
                    className={`text-xs sm:text-sm font-semibold border border-[#c9a84c]/40 rounded-full px-3 py-1 ${
                      i === journey.length - 1 ? 'text-[#c9a84c]' : 'text-white/90'
                    }`}
                  >
                    {step}
                  </span>
                  {i < journey.length - 1 && (
                    <svg className="w-4 h-4 text-[#c9a84c] flex-shrink-0 animate-nudge-x" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5-5 5M5 12h13" />
                    </svg>
                  )}
                </span>
              ))}
            </div>

            <p className="text-xl sm:text-2xl font-semibold text-white mb-3 leading-snug">
              {t.hero.subtitle}
            </p>

            <p className="text-sm sm:text-base text-white/75 mb-8 leading-relaxed">
              {t.hero.body}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#lessons"
                className="inline-block text-center bg-white hover:bg-white/90 text-[#1e3a5f] font-semibold px-7 py-3.5 rounded-full text-sm sm:text-base transition-all duration-200 shadow-lg hover:-translate-y-0.5"
              >
                {t.hero.cta}
              </a>
              <a
                href={CONTACT.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#FEE500] hover:bg-[#f5dc00] text-[#3C1E1E] font-semibold px-7 py-3.5 rounded-full text-sm sm:text-base transition-all duration-200 shadow-lg hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 3.2c-5.4 0-9.8 3.5-9.8 7.8 0 2.8 1.9 5.2 4.7 6.6-.2.7-.7 2.5-.8 2.9-.1.5.2.5.4.4.2-.1 2.5-1.7 3.5-2.4.6.1 1.3.1 2 .1 5.4 0 9.8-3.5 9.8-7.8S17.4 3.2 12 3.2z" />
                </svg>
                {t.hero.cta2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
