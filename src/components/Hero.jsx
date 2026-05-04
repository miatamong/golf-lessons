import { useLang } from '../LanguageContext'
import { translations } from '../translations'

/* ── Golf Shot SVG Animation ── */
const GolfShotScene = () => (
  <div className="w-full max-w-lg mx-auto mb-2">
    <svg viewBox="0 0 500 130" className="w-full" style={{ overflow: 'visible' }}>

      {/* Ground */}
      <line x1="20" y1="113" x2="480" y2="113"
        stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

      {/* Tee */}
      <line x1="70" y1="113" x2="70" y2="104"
        stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
      <line x1="64" y1="104" x2="76" y2="104"
        stroke="rgba(255,255,255,0.55)" strokeWidth="2" />

      {/* Golf Club — swings from grip pivot (52, 52) */}
      <g>
        {/* Grip cap */}
        <circle cx="52" cy="52" r="3.5" fill="rgba(255,255,255,0.6)" />
        {/* Shaft */}
        <line x1="52" y1="52" x2="73" y2="111"
          stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Club head */}
        <rect x="66" y="106" width="16" height="8" rx="2" fill="#c9a84c"
          transform="rotate(-20 74 110)" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="-28 52 52"
          to="22 52 52"
          dur="0.38s"
          begin="0.15s"
          fill="freeze"
        />
      </g>

      {/* Ball sitting on tee — disappears when flight starts */}
      <circle cx="70" cy="103" r="5.5" fill="white" opacity="0.9">
        <animate attributeName="opacity"
          values="0.9;0" dur="0.05s" begin="0.52s" fill="freeze" />
      </circle>

      {/* Flying golf ball — arc from tee to hole */}
      <circle cx="0" cy="0" r="6" fill="white">
        <animate attributeName="opacity"
          values="0;1;1;1;0"
          keyTimes="0;0.01;0.8;0.95;1"
          dur="1.4s" begin="0.52s" fill="freeze" />
        <animateMotion
          path="M70,103 Q255,0 433,111"
          dur="1.4s"
          begin="0.52s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.3 0 0.7 1"
        />
      </circle>

      {/* Hole */}
      <ellipse cx="435" cy="114" rx="12" ry="5"
        fill="rgba(0,0,0,0.9)" />

      {/* Flag pole */}
      <line x1="435" y1="114" x2="435" y2="68"
        stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" />

      {/* Flag */}
      <polygon className="flag-anim"
        points="435,68 464,78 435,88" fill="#c9a84c" />

      {/* Ripple when ball lands */}
      <circle className="hole-ripple"
        cx="435" cy="114" r="14"
        fill="none" stroke="#c9a84c" strokeWidth="2.5" />

    </svg>
  </div>
)

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
        <div className="hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#c9a84c]/50 rounded-full px-4 py-1.5 mb-6">
          <div className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full" />
          <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">
            {t.tagline}
          </span>
        </div>

        {/* Golf shot animation */}
        <GolfShotScene />

        {/* Willis Lee — appears after ball lands */}
        <h1 className="hero-name text-6xl sm:text-8xl text-white leading-none mb-5">
          Willis <span className="text-[#c9a84c]">Lee</span>
        </h1>

        {/* Bio */}
        <p className="hero-bio text-sm sm:text-base text-white/75 max-w-lg mx-auto mb-6 leading-relaxed">
          {firstPara}
        </p>

        {/* CTA */}
        <a
          href="#booking"
          className="hero-cta inline-block bg-[#c9a84c] hover:bg-[#b8963e] text-white font-semibold px-9 py-4 rounded-full text-sm sm:text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
        >
          {t.cta}
        </a>

        {/* Stats */}
        <div className="hero-stats mt-8 w-full max-w-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 sm:px-6 py-4 sm:py-5 grid grid-cols-3 gap-4">
          {t.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#c9a84c]">{stat.value}</div>
              <div className="text-white/70 text-xs mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
