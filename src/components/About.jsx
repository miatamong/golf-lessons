import { useLang } from '../LanguageContext'
import { translations } from '../translations'

export default function About() {
  const { lang } = useLang()
  const t = translations[lang].about

  return (
    <section id="about" className="bg-white pt-16 sm:pt-24 pb-8 sm:pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#7A6A2E] text-sm font-semibold tracking-widest uppercase">{t.subtitle}</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-[#1e3a5f]">{t.title}</h2>
          <div className="mt-4 w-16 h-1 bg-[#c9a84c] mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative mb-8 grid grid-cols-3 gap-2 sm:gap-3">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#e8dcc8] rounded-full opacity-50 z-0" />
            <img src="/images/aesthetic-3.jpg" alt="Willis Lee Golf Pro" loading="lazy" className="relative z-10 rounded-2xl w-full object-cover aspect-[3/4] shadow-2xl" />
            <img src="/images/aesthetic-4.jpg" alt="Willis Lee on the course" loading="lazy" className="relative z-10 rounded-2xl w-full object-cover aspect-[3/4] shadow-2xl" />
            <img src="/images/aesthetic-1.jpg" alt="Willis Lee sunset swing" loading="lazy" className="relative z-10 rounded-2xl w-full object-cover aspect-[3/4] shadow-2xl" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

            {/* Experience */}
            <div className="bg-[#f5f0e8] rounded-2xl p-5 border border-[#e8dcc8]">
              <div className="text-[#c9a84c] font-bold text-sm uppercase tracking-widest mb-3">{t.exp_title}</div>
              <ul className="space-y-2">
                {t.experience.map((item) => (
                  <li key={item.year} className="flex flex-col">
                    <span className="text-xs font-semibold text-[#1e3a5f]">{item.place}</span>
                    <span className="text-xs text-[#1e3a5f]/70">{item.role}</span>
                    <span className="text-xs text-[#c9a84c]/80">{item.year}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Philosophy */}
            <div className="bg-[#f5f0e8] rounded-2xl p-5 border border-[#e8dcc8]">
              <div className="text-[#c9a84c] font-bold text-sm uppercase tracking-widest mb-3">{t.phil_title}</div>
              <p className="text-sm text-[#1e3a5f]/80 leading-relaxed">
                {t.phil_line1_pre}
                <strong className="text-[#1e3a5f]">{t.phil_line1_bold1}</strong>
                {t.phil_line1_mid}
                <strong className="text-[#1e3a5f]">{t.phil_line1_bold2}</strong>
                {t.phil_line1_end}
                <br /><br />
                {t.phil_line2}
              </p>
            </div>

            {/* Achievement */}
            <div className="bg-[#f5f0e8] rounded-2xl p-5 border border-[#e8dcc8]">
              <div className="text-[#c9a84c] font-bold text-sm uppercase tracking-widest mb-3">{t.ach_title}</div>
              <ul className="space-y-3">
                <li className="flex flex-col">
                  <span className="text-sm font-semibold text-[#1e3a5f]">PGA of Canada</span>
                  <span className="text-xs text-[#1e3a5f]/70">{t.pga_role}</span>
                </li>
                <li className="pt-2 border-t border-[#e8dcc8] flex flex-col">
                  <span className="text-sm font-semibold text-[#1e3a5f]">{t.top10}</span>
                  <span className="text-xs text-[#1e3a5f]/70">{t.comp}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm font-semibold text-[#1e3a5f]">{t.second}</span>
                  <span className="text-xs text-[#1e3a5f]/70">{t.comp}</span>
                </li>
                <li className="pt-2 border-t border-[#e8dcc8] flex flex-col">
                  <span className="text-xs font-semibold text-[#1e3a5f]">Univ. of Hawaii at Hilo</span>
                  <span className="text-xs text-[#1e3a5f]/70">{lang === 'ko' ? '커뮤니케이션' : 'Communication'}</span>
                  <span className="text-xs text-[#c9a84c]/80">2020–22</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs font-semibold text-[#1e3a5f]">SW Oklahoma State Univ.</span>
                  <span className="text-xs text-[#1e3a5f]/70">{lang === 'ko' ? '경영학' : 'Business Management'}</span>
                  <span className="text-xs text-[#c9a84c]/80">2018–19</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Teaching specialties */}
          <div className="mt-6 p-6 bg-[#1e3a5f] rounded-2xl text-white">
            <h3 className="font-bold text-lg mb-5">{t.specialties_title}</h3>
            <div className="grid grid-cols-2 gap-3">
              {t.specialties.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full flex-shrink-0" />
                  <span className="text-sm text-white/80">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-[#1e3a5f]/60 text-sm mb-3">{t.ready}</p>
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
