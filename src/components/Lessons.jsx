const packages = [
  {
    name: 'Free Trial Class',
    price: 'Free',
    duration: '45 min',
    tag: 'New students only',
    desc: 'Not sure where to start? Try a free class with no commitment and no pressure.',
  },
  {
    name: 'Intro 1:1 Lesson',
    price: '$80',
    duration: '60 min',
    tag: 'First-time only',
    desc: 'Your first official session - includes a full swing assessment to identify your strengths and areas for improvement.',
  },
  {
    name: 'Putting',
    price: '$65',
    duration: '45 min',
    tag: 'Recommended',
    desc: 'Stroke mechanics, green reading & distance control.',
  },
  {
    name: '1:1 Lesson',
    price: '$100',
    duration: '45 min',
    tag: null,
    desc: 'Private lesson tailored entirely to your game.',
  },
  {
    name: '1:1 - 5 Pack',
    price: '$450',
    duration: '5 × 45 min',
    tag: 'Save $50',
    desc: 'Five private lessons with progress tracking and text support between sessions.',
  },
  {
    name: 'Rounding - 9 Holes',
    price: '$120',
    duration: '9 holes',
    tag: null,
    desc: 'On-course coaching - strategy, shot selection & course management.',
  },
  {
    name: 'Rounding - Full Course',
    price: '$200',
    duration: '18 holes',
    tag: null,
    desc: 'Full round of on-course coaching - complete game strategy and feedback.',
  },
]

export default function Lessons() {
  return (
    <section id="lessons" className="relative py-24 px-4">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/aesthetic-4.jpg')" }} />
      <div className="absolute inset-0 bg-[#f5f0e8]/92" />
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">Lesson Packages</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-[#1e3a5f]">Invest in Your Game</h2>
          <div className="mt-4 w-16 h-1 bg-[#c9a84c] mx-auto rounded-full" />
          <p className="mt-6 text-[#1e3a5f]/60">
            All sessions held in <strong className="text-[#1e3a5f]">Surrey, BC</strong>. Private bookings available at your home course upon request.
          </p>
        </div>

        {/* Menu */}
        <div className="bg-white rounded-3xl shadow-lg border border-[#e8dcc8] overflow-hidden">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`flex items-center gap-4 px-7 py-5 hover:bg-[#f5f0e8] transition-colors duration-150 ${
                i !== packages.length - 1 ? 'border-b border-[#e8dcc8]' : ''
              }`}
            >
              {/* Left */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-[#1e3a5f]">{pkg.name}</span>
                  <span className="text-xs text-[#1e3a5f]/40">{pkg.duration}</span>
                  {pkg.tag && (
                    <span className="text-xs font-bold text-[#c9a84c] bg-[#c9a84c]/10 px-2 py-0.5 rounded-full">
                      {pkg.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#1e3a5f]/50 mt-0.5">{pkg.desc}</p>
              </div>

              {/* Price */}
              <div className="text-right flex-shrink-0">
                <div className={`text-xl font-bold ${pkg.price === 'Free' ? 'text-[#c9a84c]' : 'text-[#1e3a5f]'}`}>{pkg.price}</div>
                {pkg.price !== 'Free' && <div className="text-xs text-[#1e3a5f]/30">CAD</div>}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#booking"
            className="inline-block bg-[#1e3a5f] hover:bg-[#1d4ed8] text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            Book a Session
          </a>
        </div>
      </div>
    </section>
  )
}
