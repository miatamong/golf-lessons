import './App.css'
import { LanguageProvider } from './LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Lessons from './components/Lessons'
import Booking from './components/Booking'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useLang } from './LanguageContext'
import { translations } from './translations'

function MobileCTA() {
  const { lang } = useLang()
  const t = translations[lang]
  return (
    <a
      href="#booking"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex sm:hidden items-center gap-2 bg-[#1e3a5f] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3.5 rounded-full shadow-2xl transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
    >
      <span>📅</span> {t.mobile_cta}
    </a>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <Lessons />
      <Booking />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCTA />
    </LanguageProvider>
  )
}
