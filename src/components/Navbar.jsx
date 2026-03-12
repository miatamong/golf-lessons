import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Lessons', href: '#lessons' },
  { label: 'Booking', href: '#booking' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1e3a5f]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#c9a84c] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">WL</span>
            </div>
            <div>
              <span className="text-white font-bold text-lg leading-tight block">Willis Lee</span>
              <span className="text-[#c9a84c] text-xs tracking-widest uppercase">Golf Pro</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-[#c9a84c] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="bg-[#c9a84c] hover:bg-[#b8963e] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Book a Lesson
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1e3a5f]/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-[#c9a84c] py-3 px-2 text-base font-medium border-b border-white/10 last:border-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-[#c9a84c] text-white text-center font-semibold py-3 rounded-full"
            >
              Book a Lesson
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
