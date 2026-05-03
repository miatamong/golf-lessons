import { useLang } from '../LanguageContext'
import { translations } from '../translations'

export default function Hero() {
  const { lang } = useLang()
  const t = translations[lang].hero

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        role="img"
        aria-label="Golf course background"
        style={{ backgroundImage: `url('/images/aesthetic-2.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#f5f0e8]/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">
          Willis <span className="text-[#c9a84c]">Lee</span>
        </h1>

        <p className="text-lg sm:text-2xl text-white font-medium mb-4">
          {t.tagline}
        </p>

        <p className="text-sm sm:text-base text-white/70 max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed">
          {t.bio}
        </p>

        <a
          href="#booking"
          className="inline-block bg-[#c9a84c] hover:bg-[#b8963e] text-white font-semibold px-8 py-4 rounded-full text-sm sm:text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
        >
          {t.cta}
        </a>

        {/* Stats */}
        <div className="mt-10 sm:mt-16 grid grid-cols-3 gap-6 sm:gap-8 max-w-md mx-auto">
          {t.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-3xl font-bold text-[#c9a84c]">{stat.value}</div>
              <div className="text-white/80 text-sm sm:text-xs mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
