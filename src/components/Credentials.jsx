import { useLang } from '../i18n.jsx'
import { activeVenue } from '../contact'

// 히어로 바로 아래 신뢰 로고 바 (자격 / 활동 골프장)
export default function Credentials() {
  const { t } = useLang()
  const A = t.about
  const venue = activeVenue()
  return (
    <section className="bg-white py-8 sm:py-10 px-4 border-b border-[#e8dcc8]">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-8 sm:gap-14">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#1e3a5f]/40">{A.certifiedLabel}</span>
          <img src="/images/pga-canada.webp" alt="PGA of Canada" loading="lazy" className="h-10 sm:h-12 w-auto" />
        </div>
        <div className="hidden sm:block w-px h-12 bg-[#e8dcc8]" />
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#1e3a5f]/40">{A.collegeLabel}</span>
          <div className="flex items-center gap-5 sm:gap-7">
            <img src="/images/hawaii-hilo.png" alt="University of Hawaii at Hilo" loading="lazy" className="h-9 sm:h-11 w-auto" />
            <img src="/images/swosu.png" alt="Southwestern Oklahoma State University" loading="lazy" className="h-8 sm:h-10 w-auto" />
          </div>
        </div>
        <div className="hidden sm:block w-px h-12 bg-[#e8dcc8]" />
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#1e3a5f]/40">{A.coachingLabel}</span>
          <div className="flex items-center gap-6 sm:gap-8">
            {venue !== 'swaneset' && (
              <img src="/images/greentee.webp" alt="Greentee Golf Academy" loading="lazy" className="h-10 sm:h-12 w-auto" />
            )}
            {venue !== 'westwood' && (
              <img src="/images/golf-mecca.png" alt="Golf Mecca Center" loading="lazy" className="h-10 sm:h-12 w-auto" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
