import { useState, useEffect } from 'react'
import { useLang } from '../i18n.jsx'
import { CONTACT } from '../contact'

function GolfShotScene() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <svg viewBox="0 0 500 130" className="w-full" style={{ overflow: 'visible' }}>
        {/* Ground */}
        <line x1="20" y1="112" x2="480" y2="112" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        {/* Tee */}
        <line x1="70" y1="112" x2="70" y2="104" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
        <line x1="64" y1="104" x2="76" y2="104" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
        {/* Golf Club — pivot at grip (48, 68) */}
        <g className="golf-club-swing">
          <circle cx="48" cy="68" r="3.5" fill="rgba(255,255,255,0.55)" />
          <line x1="48" y1="68" x2="70" y2="112" stroke="rgba(255,255,255,0.88)" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="62" y="108" width="18" height="7" rx="1.5" fill="#c9a84c" />
          <rect x="62" y="114" width="18" height="3" rx="1" fill="#b8963e" />
        </g>
        {/* Ball on tee — disappears just before swing */}
        <circle cx="70" cy="103" r="5.5" fill="white" opacity="0.92">
          <animate attributeName="opacity" values="0.92;0" dur="0.05s" begin="0s" fill="freeze" />
        </circle>
        {/* Flying ball */}
        <circle cx="0" cy="0" r="5.5" fill="white" opacity="0">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.01;0.85;1" dur="1.0s" begin="0s" fill="freeze" />
          <animateMotion path="M70,103 Q258,-8 433,111" dur="0.8s" begin="0s" fill="freeze" />
        </circle>
        {/* Hole */}
        <ellipse cx="435" cy="114" rx="12" ry="5" fill="rgba(0,0,0,0.88)" />
        {/* Flag pole */}
        <line x1="435" y1="114" x2="435" y2="68" stroke="rgba(255,255,255,0.72)" strokeWidth="1.5" />
        {/* Flag */}
        <polygon className="flag-anim" points="435,68 463,78 435,88" fill="#c9a84c" />
        {/* Ripple on landing */}
        <circle className="hole-ripple" cx="435" cy="114" r="14" fill="none" stroke="#c9a84c" strokeWidth="2.5" />
      </svg>
    </div>
  )
}

export default function Hero() {
  const { t } = useLang()
  const journey = t.hero.journey
  const [shotKey, setShotKey] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setShotKey((k) => k + 1), 6800)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="relative">
      <div className="grid md:grid-cols-2 md:min-h-screen">
        {/* Photo + swing animation (top on mobile, right on desktop) */}
        <div className="order-1 md:order-2 relative overflow-hidden min-h-[18rem] sm:min-h-[24rem] md:min-h-0">
          <img
            src="/images/aesthetic-3.jpg"
            alt="Willis Lee golf swing"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* darken bottom for animation legibility + blend to navy */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f] via-black/25 to-black/35" />
          {/* top darken for navbar readability */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />
          {/* swing animation overlaid near the bottom */}
          <div className="absolute inset-x-0 bottom-8 px-6">
            <GolfShotScene key={shotKey} />
          </div>
        </div>

        {/* Text (below animation on mobile, left on desktop) */}
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
