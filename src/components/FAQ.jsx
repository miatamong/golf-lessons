import { useState } from 'react'

const faqs = [
  {
    q: 'Where do I start?',
    a: 'Book an Intro 1:1 lesson to get a full swing assessment and understand where to focus your practice.',
  },
  {
    q: "I'm a complete beginner - is that okay?",
    a: 'Absolutely. Lessons are tailored to every skill level, from first-timers to competitive players.',
  },
  {
    q: 'Where are lessons held?',
    a: 'Putting lessons are held in Surrey, BC. All other sessions can be arranged at your home course upon request.',
  },
  {
    q: 'How long is a session?',
    a: 'Sessions range from 45 minutes for putting and 1:1 lessons, to approximately 90 minutes for 9 holes or 3 hours for a full round.',
  },
  {
    q: 'What should I bring?',
    a: 'Just your clubs and comfortable golf attire.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="bg-white pt-8 sm:pt-12 pb-16 sm:pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#7A6A2E] text-sm font-semibold tracking-widest uppercase">FAQ</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-[#1e3a5f]">Common Questions</h2>
          <div className="mt-4 w-16 h-1 bg-[#c9a84c] mx-auto rounded-full" />
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div key={i} className="rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-150 ${
                  open === i ? 'bg-[#1e3a5f]' : 'bg-[#f5f0e8] hover:bg-[#e8dcc8]'
                }`}
              >
                <span className={`font-semibold ${open === i ? 'text-white' : 'text-[#1e3a5f]'}`}>
                  <span className={`font-bold mr-2 ${open === i ? 'text-[#c9a84c]' : 'text-[#7A6A2E]'}`}>Q.</span>
                  {item.q}
                </span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform duration-200 ${
                  open === i ? 'border-[#c9a84c] rotate-45' : 'border-[#1e3a5f]'
                }`}>
                  <svg className={`w-3 h-3 ${open === i ? 'text-[#c9a84c]' : 'text-[#1e3a5f]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="bg-[#f5f0e8] px-6 py-5 text-sm leading-relaxed text-[#1e3a5f]/80">
                  <span className="font-bold text-[#1e3a5f] mr-2">A.</span>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-[#1e3a5f]/60 text-sm mb-3">
            Still have questions? <a href="#contact" className="text-[#c9a84c] font-semibold hover:underline">Reach out.</a> Ready to go?
          </p>
          <a
            href="#booking"
            className="inline-block bg-[#1e3a5f] hover:bg-[#16304f] text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            Book a Lesson
          </a>
        </div>
      </div>
    </section>
  )
}
