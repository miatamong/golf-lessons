const workExperience = [
  {
    year: '2025',
    title: 'Golf Town - Customer Sales Associate',
    desc: 'Advising golfers of all skill levels on equipment; performing club regripping and basic servicing to manufacturer and safety standards.',
  },
  {
    year: '2022–24',
    title: 'Assistant Golf Coach - Golf Mecca',
    desc: 'Swan E Set Golf Course · Conducted individual and group lessons; coordinated and managed summer and spring golf camps including scheduling and participant engagement.',
  },
  {
    year: '2018–19',
    title: 'Redwoods Golf Course',
    desc: 'Proshop, Starter & Cart Wash - managed golfer check-ins and maintained course operations across two summer seasons.',
  },
  {
    year: '2014',
    title: 'Special Olympics Golf Volunteer',
    desc: 'Guided participants at Redwoods Golf Course & Walnut Grove Secondary - taught rules, etiquette, and course navigation in an inclusive setting.',
  },
]

const awards = [
  {
    title: 'PacWest MG Championship',
    desc: 'Top 10 individual finish · Team Overall 2nd Place.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">About the Pro</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-[#1e3a5f]">Meet Willis Lee</h2>
          <div className="mt-4 w-16 h-1 bg-[#c9a84c] mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — photo + bio */}
          <div>
            <div className="relative mb-8">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#e8dcc8] rounded-full opacity-50" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#1d4ed8]/10 rounded-full" />
              <img
                src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=600&q=80"
                alt="Willis Lee Golf Pro"
                className="relative rounded-2xl w-full object-cover aspect-square shadow-2xl"
              />
              {/* Badge */}
              <div className="absolute bottom-6 -right-4 bg-[#1e3a5f] text-white rounded-xl px-4 py-3 shadow-xl">
                <div className="text-2xl font-bold text-[#c9a84c]">10+</div>
                <div className="text-xs text-white/70">Years in Golf</div>
              </div>
            </div>

            <div className="space-y-4 text-[#1e3a5f]/80 leading-relaxed">
              <p>
                Willis Lee is a golf coach and equipment specialist based in <strong className="text-[#1e3a5f]">Surrey, BC</strong> - with over a decade in the game, starting as a Special Olympics volunteer and growing through hands-on experience at courses across BC.
              </p>
              <p>
                He developed his coaching approach as an <strong className="text-[#1e3a5f]">Assistant Golf Coach at Golf Mecca (Swan E Set Golf Course)</strong>, leading private lessons and seasonal camps. He also brings competitive experience, earning a Top 10 individual finish and Team Overall 2nd at the <strong className="text-[#1e3a5f]">PacWest MG Championship</strong>.
              </p>
              <p>
                Willis offers private 1:1 lessons, dedicated putting sessions, and on-course rounding coaching - meeting each student where they are and building from there.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8 p-6 bg-[#f5f0e8] rounded-2xl border border-[#e8dcc8]">
              <h3 className="font-bold text-[#1e3a5f] mb-4 text-lg">Education</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#1e3a5f] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#c9a84c]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1e3a5f]">University of Hawaii at Hilo</div>
                    <div className="text-sm text-[#1e3a5f]/60">Communication · 2020–2022</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#c9a84c] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1e3a5f]">Southwestern Oklahoma State University</div>
                    <div className="text-sm text-[#1e3a5f]/60">Business Management · 2018–2019</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — timeline + awards */}
          <div>
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-8">Work Experience</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#e8dcc8]" />

              <div className="space-y-6">
                {workExperience.map((item, i) => (
                  <div key={i} className="relative flex gap-6 items-start">
                    {/* Dot */}
                    <div className="relative z-10 w-10 h-10 bg-[#1e3a5f] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <div className="w-2.5 h-2.5 bg-[#c9a84c] rounded-full" />
                    </div>
                    {/* Card */}
                    <div className="flex-1 bg-[#f5f0e8] border border-[#e8dcc8] rounded-xl p-4 hover:border-[#c9a84c] hover:shadow-md transition-all duration-200">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-[#1e3a5f] leading-tight">{item.title}</h4>
                        <span className="text-xs font-bold text-[#c9a84c] bg-[#c9a84c]/10 px-2 py-0.5 rounded-full whitespace-nowrap">{item.year}</span>
                      </div>
                      <p className="text-sm text-[#1e3a5f]/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Awards</h3>
              <div className="space-y-3">
                {awards.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-[#c9a84c]/10 border border-[#c9a84c]/40 rounded-xl p-4">
                    <div className="w-10 h-10 bg-[#c9a84c] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0l7 7a1 1 0 010 1.414l-7 7A1 1 0 0110 18zm0-2.414L16.586 9 10 2.414 3.414 9 10 15.586z" clipRule="evenodd" />
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1e3a5f]">{item.title}</h4>
                      <p className="text-sm text-[#1e3a5f]/60 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mt-10 p-6 bg-[#1e3a5f] rounded-2xl text-white">
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
        </div>
      </div>
    </section>
  )
}
