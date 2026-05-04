import { useLang } from '../LanguageContext'
import { translations } from '../translations'

const GolfShotScene = () => (
  <div className="w-full max-w-lg mx-auto mb-1">
    <svg viewBox="0 0 500 130" className="w-full" style={{ overflow: 'visible' }}>

      {/* Ground */}
      <line x1="20" y1="112" x2="480" y2="112"
        stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

      {/* Tee */}
      <line x1="70" y1="112" x2="70" y2="104"
        stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
      <line x1="64" y1="104" x2="76" y2="104"
        stroke="rgba(255,255,255,0.55)" strokeWidth="2" />

      {/* Golf Club — pivot at grip (48, 68) */}
      <g className="golf-club-swing">
        {/* Grip cap */}
        <circle cx="48" cy="68" r="3.5" fill="rgba(255,255,255,0.55)" />
        {/* Shaft */}
        <line x1="48" y1="68" x2="70" y2="112"
          stroke="rgba(255,255,255,0.88)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Iron club head — flat bottom face */}
        <rect x="62" y="108" width="18" height="7" rx="1.5" fill="#c9a84c" />
        <rect x="62" y="114" width="18" height="3" rx="1" fill="#b8963e" />
      </g>

      {/* Ball on tee — disappears just before swing */}
      <circle cx="70" cy="103" r="5.5" fill="white" opacity="0.92">
        <animate attributeName="opacity"
          values="0.92;0" dur="0.05s" begin="0s" fill="freeze" />
      </circle>

      {/* Flying ball — launches 80ms before swing */}
      <circle cx="0" cy="0" r="5.5" fill="white" opacity="0">
        <animate attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.01;0.85;1"
          dur="1.0s" begin="0s" fill="freeze" />
        <animateMotion
          path="M70,103 Q258,-8 433,111"
          dur="1.0s"
          begin="0s"
          fill="freeze"
        />
      </circle>

      {/* Hole */}
      <ellipse cx="435" cy="114" rx="12" ry="5"
        fill="rgba(0,0,0,0.88)" />

      {/* Flag pole */}
      <line x1="435" y1="114" x2="435" y2="68"
        stroke="rgba(255,255,255,0.72)" strokeWidth="1.5" />

      {/* Flag */}
      <polygon className="flag-anim"
        points="435,68 463,78 435,88" fill="#c9a84c" />

      {/* Ripple on landing */}
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
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        role="img"
        aria-label="Golf course background"
        style={{ backgroundImage: `url('/images/aesthetic-2.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto flex flex-col items-center">

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
