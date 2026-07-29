import { useState, useEffect } from 'react'
import { useLang, LangToggle } from '../i18n.jsx'

const sectionIds = ['home', 'lessons', 'about', 'faq', 'contact']

export default function Navbar() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.lessons, href: '#lessons' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const offset = window.scrollY + 100
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.offsetTop <= offset) {
          setActiveSection(sectionIds[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1e3a5f]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <span className="text-white font-bold text-xl tracking-tight">
              Willis <span className="text-[#c9a84c]">Lee</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-[#c9a84c]' : 'text-white/80 hover:text-[#c9a84c]'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
            <LangToggle />
            <a
              href="#lessons"
              className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg ${
                scrolled
                  ? 'bg-[#c9a84c] hover:bg-[#b8963e] text-white'
                  : 'bg-[#1e3a5f] hover:bg-[#16304f] text-white border border-white/30'
              }`}
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile: language toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <LangToggle />
            <button
              className="text-white p-2"
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
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1e3a5f]/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3 px-2 text-base font-medium border-b border-white/10 last:border-0 transition-colors ${
                    isActive ? 'text-[#c9a84c]' : 'text-white/80 hover:text-[#c9a84c]'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
            <a
              href="#lessons"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-white text-[#1e3a5f] text-center font-semibold py-3 rounded-full"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
