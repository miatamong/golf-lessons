import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Credentials from './components/Credentials'
import About from './components/About'
import Lessons from './components/Lessons'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

export default function App() {
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
      <FloatingActions />
    </>
  )
}
