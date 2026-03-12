import { useState } from 'react'

const tabs = [
  {
    id: 'trial',
    label: 'Free Trial Class',
    tag: 'New students',
    src: 'https://cal.com/willisleegolf/free-trial-class?overlayCalendar=true&brandColor=%231e3a5f',
  },
  {
    id: 'all',
    label: 'All Lessons',
    tag: null,
    src: 'https://cal.com/willisleegolf/?brandColor=%231e3a5f',
  },
]

export default function Booking() {
  const [active, setActive] = useState('trial')
  const current = tabs.find((t) => t.id === active)

  return (
    <section id="booking" className="bg-[#f5f0e8] py-16 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">Schedule</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-[#1e3a5f]">Book a Private Lesson</h2>
          <div className="mt-4 w-16 h-1 bg-[#c9a84c] mx-auto rounded-full" />
          <p className="mt-6 text-[#1e3a5f]/60 max-w-lg mx-auto text-sm">
            Pick a date and time below. Confirmation is sent to your email instantly.
          </p>
        </div>

        {/* Free Trial Callout */}
        <div className="mb-8 sm:mb-10 bg-[#1e3a5f] rounded-2xl px-5 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div>
            <p className="text-white font-semibold text-lg leading-snug">
              First time? Start with a free class -{' '}
              <span className="text-[#c9a84c]">no commitment, no pressure.</span>
            </p>
            <p className="text-white/50 text-sm mt-1 flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Book your free spot below
            </p>
          </div>
          <button
            onClick={() => setActive('trial')}
            className="flex-shrink-0 bg-[#c9a84c] hover:bg-[#b8963e] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200 shadow hover:-translate-y-0.5"
          >
            Claim Free Class
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-6 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                active === tab.id
                  ? 'bg-[#1e3a5f] text-white shadow-lg'
                  : 'bg-white text-[#1e3a5f] border border-[#e8dcc8] hover:border-[#1e3a5f]'
              }`}
            >
              {tab.label}
              {tab.tag && (
                <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                  active === tab.id ? 'bg-[#c9a84c] text-white' : 'bg-[#c9a84c]/15 text-[#c9a84c]'
                }`}>
                  {tab.tag}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Iframe card */}
        <div className="bg-[#f5f0e8] rounded-3xl border border-[#e8dcc8] shadow-xl overflow-hidden">
          <iframe
            key={current.src}
            src={current.src}
            style={{ width: '100%', height: '700px', border: 'none' }}
            title={current.label}
          />
        </div>
      </div>
    </section>
  )
}
