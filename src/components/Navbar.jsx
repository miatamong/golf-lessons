import { useState, useEffect } from 'react'
import { useLang } from '../LanguageContext'
import { translations } from '../translations'

const sectionIds = ['home', 'lessons', 'booking', 'about', 'faq', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { lang, toggle } = useLang()
  const t = translations[lang].navbar

  const navLinks = [
    { label: t.home, href: '#home' },
    { label: t.lessons, href: '#lessons' },
    { label: t.about, href: '#about' },
    { label: t.faq, href: '#faq' },
    { label: t.contact, href: '#contact' },
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
          <a href="#home" className="flex items-center gap-2">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              scrolled ? 'bg-[#c9a84c]' : 'bg-[#1e3a5f]'
            }`}>
              <span className={`font-bold text-sm transition-all duration-300 ${scrolled ? 'text-white' : 'text-[#c9a84c]'}`}>WL</span>
            </div>
            <div>
              <span className="text-white font-bold text-lg leading-tight block">Willis Lee</span>
              <span className="text-[#c9a84c] text-[10px] tracking-widest uppercase">PGA of Canada Certified Pro</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
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

            {/* Language toggle */}
            <button
              onClick={toggle}
              className="flex items-center gap-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-3 py-1 text-xs font-bold text-white transition-all duration-200"
            >
              <span className={lang === 'ko' ? 'text-[#c9a84c]' : 'text-white/50'}>KO</span>
              <span className="text-white/30">|</span>
              <span className={lang === 'en' ? 'text-[#c9a84c]' : 'text-white/50'}>EN</span>
            </button>

            <a
              href="#booking"
              className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg ${
                scrolled
                  ? 'bg-[#c9a84c] hover:bg-[#b8963e] text-white'
                  : 'bg-[#1e3a5f] hover:bg-[#16304f] text-white border border-white/30'
              }`}
            >
              {t.cta}
            </a>
          </div>

          {/* Mobile: language toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggle}
              className="flex items-center gap-1 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-bold text-white"
            >
              <span className={lang === 'ko' ? 'text-[#c9a84c]' : 'text-white/50'}>KO</span>
              <span className="text-white/30">|</span>
              <span className={lang === 'en' ? 'text-[#c9a84c]' : 'text-white/50'}>EN</span>
            </button>
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
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-white text-[#1e3a5f] text-center font-semibold py-3 rounded-full"
            >
              {t.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
