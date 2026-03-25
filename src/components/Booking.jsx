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
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-[#7A6A2E] text-sm font-semibold tracking-widest uppercase">Schedule</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-[#1e3a5f]">Book a Private Lesson</h2>
          <div className="mt-3 w-16 h-1 bg-[#c9a84c] mx-auto rounded-full" />
          <p className="mt-4 text-[#1e3a5f]/80 max-w-lg mx-auto text-sm">
            Pick a time. <span className="text-[#c9a84c] font-semibold">First class is on us.</span>
          </p>
          <p className="mt-2 text-[#c9a84c] font-semibold text-sm">
            Spring schedule now open · Limited spots available this week
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-4 justify-center">
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
                <span className={`text-xs font-semibold ${
                  active === tab.id ? 'text-[#c9a84c]' : 'text-[#c9a84c]/80'
                }`}>
                  · {tab.tag}
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
            loading="lazy"
            className="w-full border-none h-[500px] sm:h-[650px] lg:h-[700px]"
            title={current.label}
          />
        </div>

        {/* What happens next */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm text-[#1e3a5f]/70">
          <div>
            <span className="block text-[#c9a84c] font-bold text-base mb-1">1. Book</span>
            Pick a date - your first class is free.
          </div>
          <div>
            <span className="block text-[#c9a84c] font-bold text-base mb-1">2. Show up</span>
            Bring your clubs and comfortable golf attire. That's it.
          </div>
          <div>
            <span className="block text-[#c9a84c] font-bold text-base mb-1">3. Improve</span>
            Get personalized feedback and a plan to level up your game.
          </div>
        </div>
      </div>
    </section>
  )
}
