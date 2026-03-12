export default function Contact() {
  return (
    <section id="contact" className="bg-[#1e3a5f] py-16 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-white">Contact Willis</h2>
          <div className="mt-4 w-16 h-1 bg-[#c9a84c] mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left — contact info */}
          <div className="text-white space-y-8">
            <p className="text-white/70 leading-relaxed text-lg">
              Have questions about lessons, pricing, or availability? Reach out directly and Willis will get back to you within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: 'Email',
                  value: 'slowfastmedium@gmail.com',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: 'Phone',
                  value: '778-988-9921',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: 'Location',
                  value: 'Surrey, BC',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-xl flex items-center justify-center flex-shrink-0 text-[#c9a84c]">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-medium uppercase tracking-wide">{item.label}</div>
                    <div className="text-white mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <div className="text-white/40 text-xs font-medium uppercase tracking-wide mb-3">Follow Willis</div>
              <div className="flex gap-3">
                {[
                  { name: 'Instagram', href: 'http://instagram.com/willisleegolf' },
                  { name: 'KakaoTalk', href: '#' },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    className="px-4 py-2 bg-white/10 hover:bg-[#c9a84c]/20 border border-white/20 hover:border-[#c9a84c]/50 rounded-lg text-sm text-white/70 hover:text-[#c9a84c] transition-all duration-200"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — photo */}
          <img
            src="/images/aesthetic-1.jpg"
            alt="Willis Lee on the course"
            className="rounded-2xl w-full object-cover aspect-square shadow-2xl"
          />

        </div>
      </div>
    </section>
  )
}
