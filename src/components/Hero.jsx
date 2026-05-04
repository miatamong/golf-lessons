import { useLang } from '../LanguageContext'
import { translations } from '../translations'

export default function Hero() {
  const { lang } = useLang()
  const t = translations[lang].hero

  const firstPara = t.bio.split('\n\n')[0]

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
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto flex flex-col items-center">

        {/* PGA Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#c9a84c]/50 rounded-full px-4 py-1.5 mb-6">
          <div className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full" />
          <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">
            {t.tagline}
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5">
          Willis <span className="text-[#c9a84c]">Lee</span>
        </h1>

        {/* Bio — first paragraph only */}
        <p className="text-sm sm:text-base text-white/75 max-w-lg mx-auto mb-8 leading-relaxed">
          {firstPara}
        </p>

        {/* CTA */}
        <a
          href="#booking"
          className="inline-block bg-[#c9a84c] hover:bg-[#b8963e] text-white font-semibold px-9 py-4 rounded-full text-sm sm:text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
        >
          {t.cta}
        </a>

        {/* Stats — frosted glass card */}
        <div className="mt-14 w-full max-w-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-5 grid grid-cols-3 gap-4">
          {t.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#c9a84c]">{stat.value}</div>
              <div className="text-white/70 text-xs mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
