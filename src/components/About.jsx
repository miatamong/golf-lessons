export default function About() {
  return (
    <section id="about" className="bg-white pt-16 sm:pt-24 pb-8 sm:pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#7A6A2E] text-sm font-semibold tracking-widest uppercase">About the Pro</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-[#1e3a5f]">Meet Willis Lee</h2>
          <div className="mt-4 w-16 h-1 bg-[#c9a84c] mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
            <div className="relative mb-8 grid grid-cols-3 gap-2 sm:gap-3">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#e8dcc8] rounded-full opacity-50 z-0" />
              <img
                src="/images/aesthetic-3.jpg"
                alt="Willis Lee Golf Pro"
                loading="lazy"
                className="relative z-10 rounded-2xl w-full object-cover aspect-[3/4] shadow-2xl"
              />
              <img
                src="/images/aesthetic-4.jpg"
                alt="Willis Lee on the course"
                loading="lazy"
                className="relative z-10 rounded-2xl w-full object-cover aspect-[3/4] shadow-2xl"
              />
              <img
                src="/images/aesthetic-1.jpg"
                alt="Willis Lee sunset swing"
                loading="lazy"
                className="relative z-10 rounded-2xl w-full object-cover aspect-[3/4] shadow-2xl"
              />
            </div>

            {/* 카드 3개 -Experience / Philosophy / Achievement */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

              {/* Experience */}
              <div className="bg-[#f5f0e8] rounded-2xl p-5 border border-[#e8dcc8]">
                <div className="text-[#c9a84c] font-bold text-sm uppercase tracking-widest mb-3">10+ Golf Experience</div>
                <ul className="space-y-2">
                  {[
                    { place: 'Golf Town', role: 'Customer Sales Associate', year: '2025' },
                    { place: 'Golf Mecca', role: 'Asst. Coach, Swan E Set GC', year: '2022–26' },
                    { place: 'Redwoods GC', role: 'Proshop & Operations', year: '2018–19' },
                    { place: 'Special Olympics', role: 'Golf Volunteer', year: '2014' },
                  ].map((item) => (
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
                <div className="text-[#c9a84c] font-bold text-sm uppercase tracking-widest mb-3">Philosophy</div>
                <p className="text-sm text-[#1e3a5f]/80 leading-relaxed">
                  Golf is for <strong className="text-[#1e3a5f]">everyone</strong> - tall, short, <strong className="text-[#1e3a5f]">big budget</strong> or <strong className="text-[#1e3a5f]">no budget</strong>.
                  <br /><br />
                  Golf is a game of life.
                </p>
              </div>

              {/* Achievement */}
              <div className="bg-[#f5f0e8] rounded-2xl p-5 border border-[#e8dcc8]">
                <div className="text-[#c9a84c] font-bold text-sm uppercase tracking-widest mb-3">Achievement</div>
                <ul className="space-y-3">
                  <li className="flex flex-col">
                    <span className="text-sm font-semibold text-[#1e3a5f]">Top 10 Individual</span>
                    <span className="text-xs text-[#1e3a5f]/70">PacWest MG Championship</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-sm font-semibold text-[#1e3a5f]">Team 2nd Place</span>
                    <span className="text-xs text-[#1e3a5f]/70">PacWest MG Championship</span>
                  </li>
                  <li className="pt-2 border-t border-[#e8dcc8] flex flex-col">
                    <span className="text-xs font-semibold text-[#1e3a5f]">Univ. of Hawaii at Hilo</span>
                    <span className="text-xs text-[#1e3a5f]/70">Communication</span>
                    <span className="text-xs text-[#c9a84c]/80">2020–22</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-xs font-semibold text-[#1e3a5f]">SW Oklahoma State Univ.</span>
                    <span className="text-xs text-[#1e3a5f]/70">Business Management</span>
                    <span className="text-xs text-[#c9a84c]/80">2018–19</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Teaching specialties */}
            <div className="mt-6 p-6 bg-[#1e3a5f] rounded-2xl text-white">
              <h3 className="font-bold text-lg mb-5">Teaching Specialties</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Private 1:1 Coaching', 'Putting Technique', 'Swing Mechanics', 'Video Analysis',
                  'On-Course Strategy', 'Course Management', 'Short Game', 'Beginner Programs',
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full flex-shrink-0" />
                    <span className="text-sm text-white/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-[#1e3a5f]/60 text-sm mb-3">Ready to start?</p>
          <a
            href="#booking"
            className="inline-block bg-[#1e3a5f] hover:bg-[#16304f] text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            Book a Free Class
          </a>
        </div>
      </div>
    </section>
  )
}
