import { useLang } from '../LanguageContext'
import { translations } from '../translations'

export default function Lessons() {
  const { lang } = useLang()
  const t = translations[lang].lessons

  return (
    <section id="lessons" className="relative py-16 sm:py-24 px-4">
      <div className="absolute inset-0 bg-white" />
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#7A6A2E] text-sm font-semibold tracking-widest uppercase">{t.subtitle}</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-[#1e3a5f]">{t.title}</h2>
          <div className="mt-4 w-16 h-1 bg-[#c9a84c] mx-auto rounded-full" />
          {/* Venue photos */}
          <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-3 mb-6">
            <img
              src="/images/swaneset-3.jpg"
              alt="Swan-E-Set Golf Course"
              loading="lazy"
              className="rounded-xl w-full object-cover aspect-[4/3] shadow-md"
            />
            <img
              src="/images/swaneset-1.jpg"
              alt="Swan-E-Set Driving Range"
              loading="lazy"
              className="rounded-xl w-full object-cover aspect-[4/3] shadow-md"
            />
          </div>

          <div className="text-left inline-block text-sm text-[#1e3a5f]/80 space-y-2">
            <p>Pricing is for <strong className="text-[#1e3a5f]">Swan-E-Set (Golf Mecca)</strong></p>
            <p className="text-[#1e3a5f]/60">{t.address}</p>
            <a
              href="https://maps.app.goo.gl/tmfLRiHjkzKEDNyR7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#7A6A2E] font-semibold hover:underline"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {lang === 'ko' ? '구글맵으로 보기' : 'View on Google Maps'}
            </a>
          </div>
        </div>

        {/* Private (1:1) */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">{t.private_title}</h3>
          <div className="bg-white rounded-3xl shadow-lg border border-[#e8dcc8] overflow-hidden">
            {/* Column headers */}
            <div className="flex px-4 sm:px-7 py-3 border-b border-[#e8dcc8] bg-[#f5f0e8]">
              <div className="flex-1" />
              <div className="w-28 sm:w-36 text-right text-xs font-semibold text-[#1e3a5f]/50 uppercase tracking-widest">{t.col_1hr}</div>
              <div className="w-28 sm:w-36 text-right text-xs font-semibold text-[#1e3a5f]/50 uppercase tracking-widest">{t.col_45}</div>
            </div>

            {/* Single */}
            <div className="flex items-center px-4 sm:px-7 py-4 sm:py-5 border-b border-[#e8dcc8]">
              <div className="flex-1">
                <div className="font-semibold text-[#1e3a5f]">{t.single}</div>
              </div>
              <div className="w-28 sm:w-36 text-right">
                <div className="text-xl font-bold text-[#1e3a5f]">$160</div>
              </div>
              <div className="w-28 sm:w-36 text-right">
                <div className="text-xl font-bold text-[#1e3a5f]">$130</div>
              </div>
            </div>

            {/* 5-Pack */}
            <div className="flex items-center px-4 sm:px-7 py-4 sm:py-5 border-b border-[#e8dcc8]">
              <div className="flex-1">
                <div className="font-semibold text-[#1e3a5f]">{t.pack5}</div>
                <div className="text-xs text-[#1e3a5f]/50 mt-0.5">{t.pack5_total}</div>
              </div>
              <div className="w-28 sm:w-36 text-right">
                <div className="text-xl font-bold text-[#1e3a5f]">$152</div>
                <div className="text-xs text-[#7A6A2E]">{t.pack5_save_1hr}</div>
              </div>
              <div className="w-28 sm:w-36 text-right">
                <div className="text-xl font-bold text-[#1e3a5f]">$124</div>
                <div className="text-xs text-[#7A6A2E]">{t.pack5_save_45}</div>
              </div>
            </div>

            {/* 10-Pack */}
            <div className="flex items-center px-4 sm:px-7 py-4 sm:py-5">
              <div className="flex-1">
                <div className="font-semibold text-[#1e3a5f]">{t.pack10}</div>
                <div className="text-xs text-[#1e3a5f]/50 mt-0.5">{t.pack10_total}</div>
              </div>
              <div className="w-28 sm:w-36 text-right">
                <div className="text-xl font-bold text-[#1e3a5f]">$144</div>
                <div className="text-xs text-[#7A6A2E]">{t.pack10_save_1hr}</div>
              </div>
              <div className="w-28 sm:w-36 text-right">
                <div className="text-xl font-bold text-[#1e3a5f]">$120</div>
                <div className="text-xs text-[#7A6A2E]">{t.pack10_save_45}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Semi-Private */}
        <div>
          <div className="flex items-baseline gap-3 mb-4">
            <h3 className="text-lg font-bold text-[#1e3a5f]">{t.semi_title}</h3>
            <span className="text-xs text-[#1e3a5f]/40 font-semibold uppercase tracking-widest">{t.semi_only}</span>
          </div>
          <div className="bg-white rounded-3xl shadow-lg border border-[#e8dcc8] overflow-hidden">
            {/* Column headers */}
            <div className="flex px-4 sm:px-7 py-3 border-b border-[#e8dcc8] bg-[#f5f0e8]">
              <div className="flex-1" />
              <div className="w-28 sm:w-36 text-right text-xs font-semibold text-[#1e3a5f]/50 uppercase tracking-widest">{t.col_per_person}</div>
            </div>

            {/* Single */}
            <div className="flex items-center px-4 sm:px-7 py-4 sm:py-5 border-b border-[#e8dcc8]">
              <div className="flex-1">
                <div className="font-semibold text-[#1e3a5f]">{t.single}</div>
              </div>
              <div className="w-28 sm:w-36 text-right">
                <div className="text-xl font-bold text-[#1e3a5f]">$100</div>
              </div>
            </div>

            {/* 5-Pack */}
            <div className="flex items-center px-4 sm:px-7 py-4 sm:py-5 border-b border-[#e8dcc8]">
              <div className="flex-1">
                <div className="font-semibold text-[#1e3a5f]">{t.pack5}</div>
                <div className="text-xs text-[#1e3a5f]/50 mt-0.5">{t.semi_pack5_total}</div>
              </div>
              <div className="w-28 sm:w-36 text-right">
                <div className="text-xl font-bold text-[#1e3a5f]">$90</div>
                <div className="text-xs text-[#7A6A2E]">{t.semi_pack5_save}</div>
              </div>
            </div>

            {/* 10-Pack */}
            <div className="flex items-center px-4 sm:px-7 py-4 sm:py-5">
              <div className="flex-1">
                <div className="font-semibold text-[#1e3a5f]">{t.pack10}</div>
                <div className="text-xs text-[#1e3a5f]/50 mt-0.5">{t.semi_pack10_total}</div>
              </div>
              <div className="w-28 sm:w-36 text-right">
                <div className="text-xl font-bold text-[#1e3a5f]">$85</div>
                <div className="text-xs text-[#7A6A2E]">{t.semi_pack10_save}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
