export default function Lessons() {
  return (
    <section id="lessons" className="relative py-16 sm:py-24 px-4">
      <div className="absolute inset-0 bg-white" />
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#7A6A2E] text-sm font-semibold tracking-widest uppercase">Lesson Packages</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-[#1e3a5f]">Lessons & Pricing</h2>
          <div className="mt-4 w-16 h-1 bg-[#c9a84c] mx-auto rounded-full" />
          <div className="mt-6 text-left inline-block text-sm text-[#1e3a5f]/80 space-y-1">
            <p>Pricing is for <strong className="text-[#1e3a5f]">Swan-E-Set (Golf Mecca)</strong></p>
            <p className="text-[#1e3a5f]/60">16651 Rannie Rd, Pitt Meadows, BC V3Y 1Z1</p>
            <p>45 min · 60 min · 1:1 · 1:2+ — <span className="text-[#7A6A2E] font-semibold">DM for specific day inquiry</span></p>
          </div>
        </div>

        {/* Private (1:1) */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">Private (1:1)</h3>
          <div className="bg-white rounded-3xl shadow-lg border border-[#e8dcc8] overflow-hidden">
            {/* Column headers */}
            <div className="flex px-4 sm:px-7 py-3 border-b border-[#e8dcc8] bg-[#f5f0e8]">
              <div className="flex-1" />
              <div className="w-28 sm:w-36 text-right text-xs font-semibold text-[#1e3a5f]/50 uppercase tracking-widest">1 hr</div>
              <div className="w-28 sm:w-36 text-right text-xs font-semibold text-[#1e3a5f]/50 uppercase tracking-widest">45 min</div>
            </div>

            {/* Single */}
            <div className="flex items-center px-4 sm:px-7 py-4 sm:py-5 border-b border-[#e8dcc8]">
              <div className="flex-1">
                <div className="font-semibold text-[#1e3a5f]">Single</div>
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
                <div className="font-semibold text-[#1e3a5f]">5-Session Pack</div>
                <div className="text-xs text-[#1e3a5f]/50 mt-0.5">Total $760 · $620</div>
              </div>
              <div className="w-28 sm:w-36 text-right">
                <div className="text-xl font-bold text-[#1e3a5f]">$152</div>
                <div className="text-xs text-[#7A6A2E]">Save $8/session</div>
              </div>
              <div className="w-28 sm:w-36 text-right">
                <div className="text-xl font-bold text-[#1e3a5f]">$124</div>
                <div className="text-xs text-[#7A6A2E]">Save $6/session</div>
              </div>
            </div>

            {/* 10-Pack */}
            <div className="flex items-center px-4 sm:px-7 py-4 sm:py-5">
              <div className="flex-1">
                <div className="font-semibold text-[#1e3a5f]">10-Session Pack</div>
                <div className="text-xs text-[#1e3a5f]/50 mt-0.5">Total $1,440 · $1,200</div>
              </div>
              <div className="w-28 sm:w-36 text-right">
                <div className="text-xl font-bold text-[#1e3a5f]">$144</div>
                <div className="text-xs text-[#7A6A2E]">Save $16/session</div>
              </div>
              <div className="w-28 sm:w-36 text-right">
                <div className="text-xl font-bold text-[#1e3a5f]">$120</div>
                <div className="text-xs text-[#7A6A2E]">Save $10/session</div>
              </div>
            </div>
          </div>
        </div>

        {/* Semi-Private */}
        <div>
          <div className="flex items-baseline gap-3 mb-4">
            <h3 className="text-lg font-bold text-[#1e3a5f]">Semi-Private (2+ people, per person)</h3>
            <span className="text-xs text-[#1e3a5f]/40 font-semibold uppercase tracking-widest">1 hr only</span>
          </div>
          <div className="bg-white rounded-3xl shadow-lg border border-[#e8dcc8] overflow-hidden">
            {/* Column headers */}
            <div className="flex px-4 sm:px-7 py-3 border-b border-[#e8dcc8] bg-[#f5f0e8]">
              <div className="flex-1" />
              <div className="w-28 sm:w-36 text-right text-xs font-semibold text-[#1e3a5f]/50 uppercase tracking-widest">Per person</div>
            </div>

            {/* Single */}
            <div className="flex items-center px-4 sm:px-7 py-4 sm:py-5 border-b border-[#e8dcc8]">
              <div className="flex-1">
                <div className="font-semibold text-[#1e3a5f]">Single</div>
              </div>
              <div className="w-28 sm:w-36 text-right">
                <div className="text-xl font-bold text-[#1e3a5f]">$100</div>
              </div>
            </div>

            {/* 5-Pack */}
            <div className="flex items-center px-4 sm:px-7 py-4 sm:py-5 border-b border-[#e8dcc8]">
              <div className="flex-1">
                <div className="font-semibold text-[#1e3a5f]">5-Session Pack</div>
                <div className="text-xs text-[#1e3a5f]/50 mt-0.5">Total $450/person</div>
              </div>
              <div className="w-28 sm:w-36 text-right">
                <div className="text-xl font-bold text-[#1e3a5f]">$90</div>
                <div className="text-xs text-[#7A6A2E]">Save $10/session</div>
              </div>
            </div>

            {/* 10-Pack */}
            <div className="flex items-center px-4 sm:px-7 py-4 sm:py-5">
              <div className="flex-1">
                <div className="font-semibold text-[#1e3a5f]">10-Session Pack</div>
                <div className="text-xs text-[#1e3a5f]/50 mt-0.5">Total $850/person</div>
              </div>
              <div className="w-28 sm:w-36 text-right">
                <div className="text-xl font-bold text-[#1e3a5f]">$85</div>
                <div className="text-xs text-[#7A6A2E]">Save $15/session</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
