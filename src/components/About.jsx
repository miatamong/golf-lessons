import { useLang } from '../i18n.jsx'

export default function About() {
  const { t } = useLang()
  const A = t.about
  return (
    <section id="about" className="bg-white pt-16 sm:pt-24 pb-8 sm:pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#7A6A2E] text-sm font-semibold tracking-widest uppercase">{A.eyebrow}</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-[#1e3a5f]">{A.title}</h2>
          <div className="mt-4 w-16 h-1 bg-[#c9a84c] mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Photos */}
          <div className="relative mb-8 grid grid-cols-3 gap-2 sm:gap-3">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#e8dcc8] rounded-full opacity-50 z-0" />
            <img src="/images/aesthetic-2.jpg" alt="Willis Lee Golf Pro" loading="lazy" className="relative z-10 rounded-2xl w-full object-cover aspect-[3/4] shadow-2xl" />
            <img src="/images/aesthetic-4.jpg" alt="Willis Lee on the course" loading="lazy" className="relative z-10 rounded-2xl w-full object-cover aspect-[3/4] shadow-2xl" />
            <img src="/images/aesthetic-1.jpg" alt="Willis Lee sunset swing" loading="lazy" className="relative z-10 rounded-2xl w-full object-cover aspect-[3/4] shadow-2xl" />
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {A.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 bg-[#f5f0e8] border border-[#e8dcc8] rounded-full px-4 py-1.5 text-xs font-semibold text-[#1e3a5f]"
              >
                <span className="text-[#c9a84c]">✓</span>
                {badge}
              </span>
            ))}
          </div>

          {/* Bio */}
          <p className="text-center text-[#1e3a5f]/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            {A.bio}
          </p>

          {/* 카드 3개 - Experience / Philosophy / Achievement */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Experience */}
            <div className="bg-[#f5f0e8] rounded-2xl p-5 border border-[#e8dcc8]">
              <div className="text-[#c9a84c] font-bold text-sm uppercase tracking-widest mb-3">{A.experienceTitle}</div>
              <ul className="space-y-2">
                {A.experience.map((item, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="text-xs font-semibold text-[#1e3a5f]">{item.place}</span>
                    <span className="text-xs text-[#1e3a5f]/70">{item.role}</span>
                    <span className="text-xs text-[#c9a84c]/80">{item.year}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Philosophy */}
            <div className="bg-[#f5f0e8] rounded-2xl p-5 border border-[#e8dcc8]">
              <div className="text-[#c9a84c] font-bold text-sm uppercase tracking-widest mb-3">{A.philosophyTitle}</div>
              <div className="text-sm text-[#1e3a5f]/80 leading-relaxed space-y-3">
                {A.philosophy.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Achievement */}
            <div className="bg-[#f5f0e8] rounded-2xl p-5 border border-[#e8dcc8]">
              <div className="text-[#c9a84c] font-bold text-sm uppercase tracking-widest mb-3">{A.achievementTitle}</div>
              <ul className="space-y-3">
                {A.achievements.map((item, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="text-sm font-semibold text-[#1e3a5f]">{item.title}</span>
                    <span className="text-xs text-[#1e3a5f]/70">{item.sub}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Teaching specialties */}
          <div className="mt-6 p-6 bg-[#1e3a5f] rounded-2xl text-white">
            <h3 className="font-bold text-lg mb-5">{A.specialtiesTitle}</h3>
            <div className="grid grid-cols-2 gap-3">
              {A.specialties.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full flex-shrink-0" />
                  <span className="text-sm text-white/80">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-[#1e3a5f]/60 text-sm mb-3">{A.ctaText}</p>
          <a
            href="#lessons"
            className="inline-block bg-[#1e3a5f] hover:bg-[#16304f] text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            {A.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
