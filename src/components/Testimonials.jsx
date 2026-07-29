import { useLang } from '../i18n.jsx'

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className="w-4 h-4 text-[#c9a84c]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.366 2.446c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.363-1.118L2.98 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  )
}

// TODO: 후기가 더 생기면 src/i18n.jsx 의 testimonials.items 에 추가.
// 실제 학부모 후기만 익명화해서 사용합니다.
export default function Testimonials() {
  const { t } = useLang()
  const T = t.testimonials

  return (
    <section id="testimonials" className="bg-[#f5f0e8] py-16 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#7A6A2E] text-sm font-semibold tracking-widest uppercase">{T.eyebrow}</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-[#1e3a5f]">{T.title}</h2>
          <div className="mt-4 w-16 h-1 bg-[#c9a84c] mx-auto rounded-full" />
        </div>

        <div className={`grid gap-4 ${T.items.length > 1 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'max-w-2xl mx-auto'}`}>
          {T.items.map((item, i) => (
            <figure key={i} className="bg-white rounded-3xl border border-[#e8dcc8] shadow-lg p-6 sm:p-8 flex flex-col">
              <Stars />
              <blockquote className="text-[#1e3a5f]/85 leading-relaxed flex-1">
                {item.quote}
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-[#7A6A2E]">
                {item.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
