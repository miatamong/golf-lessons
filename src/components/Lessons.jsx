import { useState } from 'react'
import ContactButtons from './ContactButtons'
import { useLang } from '../i18n.jsx'
import { LOCATIONS, mapsUrl } from '../contact'

// 가격 데이터 (언어 무관 숫자). 라벨은 src/i18n.jsx 의 lessons.pricing 에서 관리.
const PRICING = {
  swaneset: {
    kind: 'swaneset',
    private: [
      // 시간대별 열: dur60(1시간), dur45(45분). total = 내는 금액, per = 회당
      { key: 'dur60', single: 160, pack5: { per: 152, total: 760 }, pack10: { per: 144, total: 1440 } },
      { key: 'dur45', single: 130, pack5: { per: 124, total: 620 }, pack10: { per: 120, total: 1200 } },
    ],
    group: {
      single: 100,
      pack5: { per: 90, total: 450 },
      pack10: { per: 85, total: 850 },
    },
    playing: {
      // 그룹 크기별 (1:1 총액, 1:2/1:3 인당)
      rows: [
        { label: '1:1', h9: 250, h18: 400, perPerson: false },
        { label: '1:2', h9: 200, h18: 250, perPerson: true },
        { label: '1:3', h9: 150, h18: 200, perPerson: true },
      ],
    },
  },
  westwood: {
    // Greentee Academy PGA INSTRUCTOR 기준 (세전). CGTF/OTHER 등급은 제외.
    kind: 'westwood',
    private: {
      counts: [1, 5, 10, 20, 40],
      junior: { 1: 130, 5: 600, 10: 1100, 20: 2000, 40: 3600 },
      juniorPer: { 5: 120, 10: 110, 20: 100, 40: 90 },
      adult: { 1: 150, 5: 700, 10: 1300, 20: 2400, 40: 4400 },
      adultPer: { 5: 140, 10: 130, 20: 120, 40: 110 },
    },
    semi: {
      // 성인, 인당·회당 요율
      counts: [1, 5, 10],
      two: { 1: 90, 5: 84, 10: 78 },
      three: { 1: 66.66, 5: 62, 10: 57.66 },
    },
    playing: {
      adult: { h9: 300, h18: 600 },
      junior: { h9: 260, h18: 520 },
    },
  },
}

const COURSES = LOCATIONS

const money = (n) => `$${n.toLocaleString('en-US')}`

// 한 칸: 내는 금액(크게) + (있으면) 회당 가격(작게)
function Price({ total, per, P }) {
  return (
    <div className="text-right">
      <div className="text-lg sm:text-xl font-bold text-[#1e3a5f]">{money(total)}</div>
      {per != null && <div className="text-[11px] text-[#1e3a5f]/50 mt-0.5">{P.perEach(per)}</div>}
    </div>
  )
}

function TableShell({ title, note, colLabels, children }) {
  const cols = colLabels.length === 2 ? 'grid-cols-[1.4fr_1fr_1fr]' : 'grid-cols-[2fr_1fr]'
  return (
    <div>
      <h3 className="font-bold text-[#1e3a5f] mb-3">
        {title}
        {note && <span className="text-xs font-normal text-[#1e3a5f]/50 ml-2">{note}</span>}
      </h3>
      <div className="bg-white rounded-3xl border border-[#e8dcc8] shadow-lg overflow-hidden">
        <div className={`grid ${cols} bg-[#f5f0e8] px-4 sm:px-6 py-3`}>
          <div />
          {colLabels.map((c) => (
            <div key={c} className="text-right text-xs font-semibold text-[#1e3a5f]/60 uppercase tracking-wide">
              {c}
            </div>
          ))}
        </div>
        {children}
      </div>
    </div>
  )
}

function Row({ label, cols, isLast }) {
  const grid = cols.length === 2 ? 'grid-cols-[1.4fr_1fr_1fr]' : 'grid-cols-[2fr_1fr]'
  return (
    <div className={`grid ${grid} items-center px-4 sm:px-6 py-4 ${!isLast ? 'border-b border-[#e8dcc8]' : ''}`}>
      <div className="font-semibold text-[#1e3a5f] text-sm sm:text-base">{label}</div>
      {cols}
    </div>
  )
}

/* --- Swan-e-Set --- */
function SwanPrivate({ data, P }) {
  const [d60, d45] = data
  const rows = [
    { label: P.lessonLabel(1), cells: [{ total: d60.single }, { total: d45.single }] },
    { label: P.lessonLabel(5), cells: [d60.pack5, d45.pack5] },
    { label: P.lessonLabel(10), cells: [d60.pack10, d45.pack10] },
  ]
  return (
    <TableShell title={P.privateTitle} colLabels={[P.dur60, P.dur45]}>
      {rows.map((r, i) => (
        <Row key={r.label} label={r.label} isLast={i === rows.length - 1}
          cols={r.cells.map((c, j) => <Price key={j} total={c.total} per={c.per} P={P} />)} />
      ))}
    </TableShell>
  )
}

function SwanGroup({ data, P }) {
  const rows = [
    { label: P.lessonLabel(1), cell: { total: data.single } },
    { label: P.lessonLabel(5), cell: data.pack5 },
    { label: P.lessonLabel(10), cell: data.pack10 },
  ]
  return (
    <TableShell title={P.groupTitle} note={P.groupNote} colLabels={[P.perPerson]}>
      {rows.map((r, i) => (
        <Row key={r.label} label={r.label} isLast={i === rows.length - 1}
          cols={[<Price key="c" total={r.cell.total} per={r.cell.per} P={P} />]} />
      ))}
    </TableShell>
  )
}

function PlayCell({ amount, perPerson, P }) {
  return (
    <div className="text-right">
      <div className="text-lg sm:text-xl font-bold text-[#1e3a5f]">{money(amount)}</div>
      {perPerson && <div className="text-[11px] text-[#1e3a5f]/50 mt-0.5">{P.perPerson}</div>}
    </div>
  )
}

function SwanPlaying({ data, P }) {
  return (
    <TableShell title={P.playingTitle} note={P.playingNote} colLabels={[P.holes9, P.holes18]}>
      {data.rows.map((r, i) => (
        <Row key={r.label} label={r.label} isLast={i === data.rows.length - 1}
          cols={[
            <PlayCell key="9" amount={r.h9} perPerson={r.perPerson} P={P} />,
            <PlayCell key="18" amount={r.h18} perPerson={r.perPerson} P={P} />,
          ]} />
      ))}
    </TableShell>
  )
}

/* --- Westwood (Greentee) --- */
function WwPrivate({ data, P }) {
  const rows = data.counts.map((n) => ({
    label: P.lessonLabel(n),
    cells: [
      { total: data.junior[n], per: data.juniorPer[n] ?? null },
      { total: data.adult[n], per: data.adultPer[n] ?? null },
    ],
  }))
  return (
    <TableShell title={P.privateTitle} colLabels={[P.junior, P.adult]}>
      {rows.map((r, i) => (
        <Row key={r.label} label={r.label} isLast={i === rows.length - 1}
          cols={r.cells.map((c, j) => <Price key={j} total={c.total} per={c.per} P={P} />)} />
      ))}
    </TableShell>
  )
}

function WwSemi({ data, P }) {
  const rows = data.counts.map((n) => ({
    label: P.lessonLabel(n),
    cells: [{ total: data.two[n] }, { total: data.three[n] }],
  }))
  return (
    <TableShell title={P.semiTitle} note={P.semiNote} colLabels={[P.twoPeople, P.threePeople]}>
      {rows.map((r, i) => (
        <Row key={r.label} label={r.label} isLast={i === rows.length - 1}
          cols={r.cells.map((c, j) => <Price key={j} total={c.total} per={null} P={P} />)} />
      ))}
    </TableShell>
  )
}

function WwPlaying({ data, P }) {
  const rows = [
    { label: P.adult, cells: [{ total: data.adult.h9 }, { total: data.adult.h18 }] },
    { label: P.junior, cells: [{ total: data.junior.h9 }, { total: data.junior.h18 }] },
  ]
  return (
    <TableShell title={P.playingTitle} note={P.playingNote} colLabels={[P.holes9, P.holes18]}>
      {rows.map((r, i) => (
        <Row key={r.label} label={r.label} isLast={i === rows.length - 1}
          cols={r.cells.map((c, j) => <Price key={j} total={c.total} per={null} P={P} />)} />
      ))}
    </TableShell>
  )
}

export default function Lessons() {
  const { t } = useLang()
  const L = t.lessons
  const P = L.pricing
  const [course, setCourse] = useState('swaneset')

  const selectedCourse = COURSES.find((c) => c.id === course)
  const data = PRICING[course]
  const message = L.message(selectedCourse.name, selectedCourse.city)

  return (
    <section id="lessons" className="relative py-16 sm:py-24 px-4">
      <div className="absolute inset-0 bg-white" />
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-[#7A6A2E] text-sm font-semibold tracking-widest uppercase">{L.eyebrow}</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-[#1e3a5f]">{L.title}</h2>
          <div className="mt-4 w-16 h-1 bg-[#c9a84c] mx-auto rounded-full" />
          <p className="mt-6 text-[#1e3a5f]/80">{L.intro}</p>
        </div>

        {/* How it works */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {L.howItWorks.map((step) => (
            <div key={step.n} className="flex items-start gap-3 bg-[#f5f0e8] rounded-2xl border border-[#e8dcc8] p-4">
              <div className="w-8 h-8 rounded-full bg-[#c9a84c] text-white font-bold flex items-center justify-center flex-shrink-0">
                {step.n}
              </div>
              <div>
                <div className="font-semibold text-[#1e3a5f] text-sm">{step.t}</div>
                <div className="text-xs text-[#1e3a5f]/70 mt-0.5">{step.d}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Course tabs as photo cards */}
        <div className="text-[#1e3a5f]/40 text-xs font-semibold uppercase tracking-widest mb-3">{L.chooseCourse}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {COURSES.map((c) => (
            <button
              key={c.id}
              onClick={() => setCourse(c.id)}
              className={`relative h-36 sm:h-44 rounded-2xl overflow-hidden border-2 transition-all duration-200 ${
                course === c.id ? 'border-[#c9a84c] shadow-xl' : 'border-transparent opacity-75 hover:opacity-100'
              }`}
            >
              <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-left">
                <span className="block text-white font-bold text-lg leading-tight">{c.name}</span>
                <span className="block text-white/80 text-xs mt-0.5">{c.city}</span>
              </div>
              {course === c.id && (
                <span className="absolute top-3 right-3 bg-[#c9a84c] text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow">
                  {L.selectedLabel}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Selected course header (which course these prices are for) */}
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f]">
            {selectedCourse.name}
            {selectedCourse.academy && (
              <span className="text-[#7A6A2E] font-semibold text-lg sm:text-xl"> ({selectedCourse.academy})</span>
            )}
          </h3>
          {selectedCourse.address && (
            <a
              href={mapsUrl(selectedCourse.address)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[#7A6A2E] hover:underline mt-2"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {selectedCourse.address}
            </a>
          )}
          {data.kind === 'swaneset' && <p className="text-xs text-[#1e3a5f]/60 mt-1">{L.sameForAll}</p>}
        </div>

        {/* Pricing */}
        {data.kind === 'swaneset' ? (
          <div className="space-y-8">
            <SwanPrivate data={data.private} P={P} />
            <SwanGroup data={data.group} P={P} />
            <SwanPlaying data={data.playing} P={P} />
          </div>
        ) : data.kind === 'westwood' ? (
          <div className="space-y-8">
            <WwPrivate data={data.private} P={P} />
            <WwSemi data={data.semi} P={P} />
            <WwPlaying data={data.playing} P={P} />
          </div>
        ) : (
          <div className="bg-[#f5f0e8] rounded-3xl border border-[#e8dcc8] p-8 text-center text-[#1e3a5f]/70">
            {L.comingSoon}
          </div>
        )}

        {data && <p className="text-center text-xs text-[#1e3a5f]/50 mt-4">* {P.taxNote}</p>}

        {/* Payment & policy info */}
        <div className="mt-6 bg-[#f5f0e8] border border-[#e8dcc8] rounded-2xl px-5 sm:px-6 py-5 max-w-2xl mx-auto">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-[#7A6A2E] mb-3">{L.payInfo.title}</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
            {L.payInfo.items.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-[#1e3a5f]/75">
                <svg className="w-4 h-4 text-[#c9a84c] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Close: personal contact */}
        <div className="mt-8 text-center">
          <p className="text-[#1e3a5f]/70 text-sm mb-4">{L.resultNote}</p>
          <ContactButtons message={message} />
        </div>
      </div>
    </section>
  )
}
