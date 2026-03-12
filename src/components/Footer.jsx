export default function Footer() {
  return (
    <footer className="bg-[#0f2440] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#c9a84c] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">WL</span>
              </div>
              <div>
                <span className="font-bold text-lg leading-tight block">Willis Lee</span>
                <span className="text-[#c9a84c] text-xs tracking-widest uppercase">Golf Pro</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Helping golfers reach their full potential since 2009.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-[#c9a84c] text-sm uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                ['Home', '#home'],
                ['About', '#about'],
                ['Lessons', '#lessons'],
                ['Booking', '#booking'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#c9a84c] text-sm uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>slowfastmedium@gmail.com</li>
              <li>778-988-9921</li>
              <li>Surrey, BC</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/30">
          <span>© {new Date().getFullYear()} Willis Lee Golf. All rights reserved.</span>
          <span>Private Golf Instructor · Surrey, BC</span>
        </div>
      </div>
    </footer>
  )
}
