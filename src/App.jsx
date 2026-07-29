import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Credentials from './components/Credentials'
import About from './components/About'
import Lessons from './components/Lessons'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useLang } from './i18n.jsx'

export default function App() {
  const { t } = useLang()
  return (
    <>
      <Navbar />
      <Hero />
      <Credentials />
      <Lessons />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />

      {/* Sticky mobile CTA into the pricing finder */}
      <a
        href="#lessons"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex sm:hidden items-center gap-2 bg-[#1e3a5f] hover:bg-[#16304f] text-white font-semibold px-6 py-3.5 rounded-full shadow-2xl transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
      >
        <span>💬</span> {t.nav.cta}
      </a>
    </>
  )
}
