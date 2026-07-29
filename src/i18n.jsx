/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'

// 사이트 전체 문구 (영어 / 한국어)
export const TRANSLATIONS = {
  en: {
    nav: { home: 'Home', lessons: 'Lessons', about: 'About', faq: 'FAQ', contact: 'Contact', cta: 'Book a Lesson' },
    hero: {
      journey: ['Junior Golfer', 'NCAA College Golf', 'CPGA Pro Coach'],
      journeyLabel: 'From player to pro',
      subtitle: 'Trained at every level. Coaching at yours.',
      body: 'I started golf at nine and have been playing ever since. From junior tournaments to NCAA college golf to becoming a CPGA Pro, I know what it takes to get there, and I teach it.',
      cta: 'Explore Lessons & Pricing',
      cta2: 'Chat with Willis',
      stats: [
        { value: '4+', label: 'Years Coaching' },
        { value: '25+', label: 'Students Coached' },
        { value: '10+', label: 'Years in Golf' },
      ],
      scroll: 'Scroll',
    },
    lessons: {
      eyebrow: 'Lessons',
      title: 'Pricing & Packages',
      intro: 'Choose your course to see full pricing, then message Willis to confirm your time.',
      howItWorks: [
        { n: '1', t: 'Choose', d: 'Pick your golf course.' },
        { n: '2', t: 'See pricing', d: 'View 1:1 and small group rates.' },
        { n: '3', t: 'Message Willis', d: 'Confirm your time and start.' },
      ],
      chooseCourse: 'Choose your course',
      selectedLabel: 'Selected',
      viewingLabel: 'Pricing',
      sameForAll: 'Same price for juniors and adults',
      resultNote: 'Message Willis to confirm your time. Usually replies within 24 hours.',
      payInfo: {
        title: 'Payment & Policy',
        items: [
          'Pay online or in person at the golf course',
          'Reschedule with 24 hours notice',
          'Packages valid for 1 year from purchase',
          'No clubs yet? No problem - we can lend you a set.',
        ],
      },
      cad: 'CAD',
      comingSoon: 'Pricing coming soon. Message Willis for details.',
      pricing: {
        privateTitle: 'Private Lesson (1:1)',
        groupTitle: 'Semi-Private',
        groupNote: 'per person · 1 hour',
        dur60: '1 hour',
        dur45: '45 min',
        perPerson: 'per person',
        junior: 'Junior',
        adult: 'Adult',
        perEach: (amt) => `$${amt}/session`,
        saveText: (amt) => `Save $${amt}/session`,
        lessonLabel: (n) => (n === 1 ? '1 Lesson' : `${n} Lessons`),
        semiTitle: 'Semi-Private',
        semiNote: 'adult · per person',
        twoPeople: '2 people',
        threePeople: '3 people',
        playingTitle: 'Playing Lesson',
        playingNote: 'on-course',
        holes9: '9 holes',
        holes18: '18 holes',
        taxNote: 'Prices do not include tax.',
      },
      message: (courseName, location) =>
        `Hi Willis! I found you through your website. I'm interested in lessons at ${courseName} (${location}). Could you please help me find a time?`,
    },
    about: {
      eyebrow: 'About the Coach',
      title: 'Meet Willis Lee',
      bio: "Hi, I'm Willis - a CPGA Professional who loved this game enough to chase it all the way to a US college golf team. Today I coach juniors and adults at Swan-e-Set and Westwood Plateau, in both English and Korean. My goal isn't just to fix a swing. It's to build real fundamentals, steady confidence, and a game you'll enjoy for life. Whether your child is holding a club for the first time or you're getting back into it, I'll meet you where you are and give you a clear plan for what comes next.",
      badges: ['CPGA Professional', 'Criminal Record Check', 'NCAA College Golfer', 'English & Korean'],
      certifiedLabel: 'Certified',
      collegeLabel: 'College Golf',
      coachingLabel: 'Coaching at',
      experienceTitle: 'Coaching Experience',
      experience: [
        { place: 'Private Coaching', role: 'Swan-e-Set & Westwood Plateau', year: 'Now' },
        { place: 'Summer Camp', role: 'Greentee, Westwood', year: '2026' },
        { place: 'Korean Student Group Lessons', role: 'Swan-e-Set', year: '2026' },
        { place: 'Summer Camp', role: 'Swan-e-Set', year: '2022–23' },
        { place: 'Golf Mecca', role: 'Asst. Coach, Swan-e-Set GC', year: '2022–26' },
        { place: 'Special Olympics', role: 'Golf Volunteer', year: '2014' },
      ],
      philosophyTitle: 'Philosophy',
      philosophy: [
        'Every student deserves coaching built around them - real fundamentals, good habits, and lasting confidence.',
        'Golf is a game for life.',
      ],
      achievementTitle: 'Playing & Education',
      achievements: [
        { title: 'NCAA College Golf', sub: 'Hawaii Hilo & SW Oklahoma State' },
        { title: 'Top 10 Individual', sub: 'PacWest MG Championship' },
        { title: 'Team 2nd Place', sub: 'PacWest MG Championship' },
        { title: 'Univ. of Hawaii at Hilo', sub: 'Communication · 2020–22' },
        { title: 'SW Oklahoma State Univ.', sub: 'Business Management · 2018–19' },
      ],
      specialtiesTitle: 'Teaching Specialties',
      specialties: [
        'Junior Development', 'Private 1:1 Coaching', 'Putting Technique', 'Swing Mechanics',
        'Video Analysis', 'On-Course Strategy', 'Course Management', 'Short Game',
      ],
      ctaText: 'Ready to start?',
      ctaLabel: 'See Lessons & Pricing',
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'What Parents Say',
      items: [
        {
          quote:
            'My child is completely hooked - they adore Coach Willis! Golf has become so much fun for them. They came home yesterday and stayed up late explaining everything they learned. Thank you!',
          author: 'Parent of a junior student',
        },
        {
          quote:
            "I kept searching for where he coaches - I'm so glad we can now see him at a course close to us too.",
          author: 'Parent of an NCAA-track private student',
        },
        {
          quote:
            "Coach Willis is fantastic at group lessons too. He instantly reads each student's level, breaks down the swings of the pro golfers the kids love in an easy-to-understand way, and teaches right at their level. We've already asked about 1:1 lessons!",
          author: 'Parent of a summer camp student',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Common Questions',
      items: [
        { q: 'Where do I start?', a: 'New to Willis? Begin with a 1:1 lesson - a full swing assessment that maps out a personalized plan from the very first session.' },
        { q: 'Not sure if my child will enjoy it?', a: 'There is no free trial, but a fun, low-pressure way to start is a summer camp or group lesson - a great way to see if your child enjoys the game before moving into private lessons.' },
        { q: 'My child has never played - is that okay?', a: 'Absolutely. Willis coaches juniors and adults at every level, from first-timers to competitive players. Each lesson is tailored to the student, with a focus on solid fundamentals, confidence, and a genuine love for the game.' },
        { q: 'What ages do you teach?', a: 'Juniors up to 18, and adults 18 and over. Every lesson is tailored to the age and level of each student.' },
        { q: 'How will I know my child is progressing?', a: 'You will get clear feedback after each session and a simple plan for what to work on next. Willis keeps parents in the loop, so you always know how your child is developing.' },
        { q: 'Where are lessons held?', a: 'Lessons are available at two courses: Swan-e-Set (Pitt Meadows, BC) and Westwood Plateau (Coquitlam, BC). Choose your course in the Lessons section above.' },
        { q: 'How do group lessons work?', a: 'For the GT4K Junior Program, your child can join without knowing the other students. For semi-private lessons, you bring the friends or family you would like to learn with.', link: { url: 'https://greenteeacademy.com/junior/gt4k-program/', label: 'About the GT4K Junior Program' } },
        { q: 'How do I book, and how much does it cost?', a: 'Pricing depends on the course. Use the Lessons section to see full rates, then message Willis on KakaoTalk, Instagram, or by text to confirm your time.' },
        { q: 'How long is a session?', a: 'Private 1:1 lessons are 45 minutes or 1 hour, and small group lessons run 1 hour. We will pick the length that fits your goals when you reach out.' },
        { q: 'What should I bring?', a: 'Just comfortable golf attire.' },
      ],
      stillText: 'Still have questions?',
      reachOut: 'Reach out.',
      readyText: 'Ready to go?',
      cta: 'See Lessons & Pricing',
    },
    contact: {
      eyebrow: 'Get in Touch',
      title: 'Contact Willis',
      intro: 'Have questions about lessons, pricing, or availability? Message Willis directly and he will get back to you within 24 hours.',
      prefill: "Hi Willis! I found you through your website. I'd like to ask about golf lessons.",
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      followTitle: 'Follow Willis',
    },
    footer: {
      tagline: 'Skill · Confidence · Character',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      role: 'Private Golf Instructor · Pitt Meadows & Coquitlam, BC',
      rights: (year) => `© ${year} Willis Lee Golf. All rights reserved.`,
    },
    buttons: { kakao: 'KakaoTalk', instagram: 'Instagram DM', text: 'Text Willis' },
  },

  ko: {
    nav: { home: '홈', lessons: '레슨', about: '소개', faq: 'FAQ', contact: '문의', cta: '레슨 예약' },
    hero: {
      journey: ['주니어 골프 선수', 'NCAA 대학 골프', 'CPGA 프로 코치'],
      journeyLabel: '선수에서 프로까지',
      subtitle: '모든 레벨을 거쳐왔습니다. 이제 당신의 레벨에서 지도합니다.',
      body: '아홉 살에 골프를 시작해 지금까지 쭉 함께해 왔습니다. 주니어 대회부터 NCAA 대학 골프, 그리고 CPGA 프로가 되기까지, 그곳에 닿기까지 무엇이 필요한지 알기에 그것을 가르칩니다.',
      cta: '레슨 & 가격 둘러보기',
      cta2: '카카오톡 상담',
      stats: [
        { value: '4+', label: '지도 경력(년)' },
        { value: '25+', label: '지도한 수강생' },
        { value: '10+', label: '골프 경력(년)' },
      ],
      scroll: '스크롤',
    },
    lessons: {
      eyebrow: '레슨',
      title: '가격 및 패키지',
      intro: '골프장을 선택하면 전체 가격이 나옵니다. 원하는 시간은 메시지로 확정하세요.',
      howItWorks: [
        { n: '1', t: '선택', d: '골프장을 고르세요.' },
        { n: '2', t: '가격 확인', d: '1:1과 소그룹 가격을 봅니다.' },
        { n: '3', t: '상담 요청', d: '메시지로 시간을 확정합니다.' },
      ],
      chooseCourse: '골프장 선택',
      selectedLabel: '선택됨',
      viewingLabel: '가격',
      sameForAll: '주니어·성인 동일 가격',
      resultNote: '메시지를 보내 시간을 확정하세요. 보통 24시간 내에 답변드립니다.',
      payInfo: {
        title: '결제 및 정책',
        items: [
          '온라인 또는 골프장 현장에서 결제',
          '일정 변경은 24시간 전 알림',
          '패키지는 구매일로부터 1년 이내 사용',
          '클럽이 없어도 괜찮아요. 편하게 오시면 대여해 드립니다.',
        ],
      },
      cad: 'CAD',
      comingSoon: '가격은 곧 공개됩니다. 자세한 내용은 메시지로 문의해 주세요.',
      pricing: {
        privateTitle: '개인 레슨 (1:1)',
        groupTitle: '세미프라이빗',
        groupNote: '인당 · 1시간',
        dur60: '1시간',
        dur45: '45분',
        perPerson: '인당',
        junior: '주니어',
        adult: '성인',
        perEach: (amt) => `회당 $${amt}`,
        saveText: (amt) => `회당 $${amt} 절약`,
        lessonLabel: (n) => `${n}회`,
        semiTitle: '세미프라이빗',
        semiNote: '성인 · 인당',
        twoPeople: '2인',
        threePeople: '3인',
        playingTitle: '플레잉 레슨',
        playingNote: '온코스',
        holes9: '9홀',
        holes18: '18홀',
        taxNote: '표시 가격은 세금 별도입니다.',
      },
      message: (courseName, location) =>
        `안녕하세요! 웹사이트를 보고 연락드립니다. ${courseName} (${location}) 레슨에 관심 있습니다. 시간 정하는 것 도와주시겠어요?`,
    },
    about: {
      eyebrow: '코치 소개',
      title: '윌리스 리 코치',
      bio: '안녕하세요, 윌리스입니다. 저는 CPGA 프로페셔널이며, 골프가 좋아서 미국 대학 골프팀까지 선수로 뛰었습니다. 지금은 Swan-e-Set과 Westwood Plateau에서 주니어와 성인을 영어와 한국어로 지도합니다. 제 목표는 스윙만 고치는 것이 아니라, 탄탄한 기본기와 꾸준한 자신감, 그리고 평생 즐길 수 있는 골프를 만들어 드리는 것입니다. 아이가 처음 클럽을 잡든, 오랜만에 다시 시작하시든, 지금 수준에서 시작해 다음 단계를 명확히 안내해 드립니다.',
      badges: ['CPGA 프로페셔널', '범죄경력조회 완료', 'NCAA 대학 골프 선수 출신', '한국어·영어 지도'],
      certifiedLabel: '자격',
      collegeLabel: '대학 골프',
      coachingLabel: '활동 골프장',
      experienceTitle: '코칭 경력',
      experience: [
        { place: '개인 레슨', role: 'Swan-e-Set & Westwood Plateau', year: '현재' },
        { place: '써머 캠프', role: 'Greentee, Westwood', year: '2026' },
        { place: '한국 유학생 그룹 레슨', role: 'Swan-e-Set', year: '2026' },
        { place: '써머 캠프', role: 'Swan-e-Set', year: '2022–23' },
        { place: 'Golf Mecca', role: 'Swan-e-Set GC 어시스턴트 코치', year: '2022–26' },
        { place: 'Special Olympics', role: '골프 봉사', year: '2014' },
      ],
      philosophyTitle: '철학',
      philosophy: [
        '모든 학생은 자신에게 맞춘 코칭을 받을 자격이 있습니다. 탄탄한 기본기, 좋은 습관, 그리고 오래가는 자신감.',
        '골프는 평생 함께하는 운동입니다.',
      ],
      achievementTitle: '선수 경력 & 학력',
      achievements: [
        { title: 'NCAA 대학 골프', sub: 'Hawaii Hilo & SW Oklahoma State' },
        { title: '개인전 Top 10', sub: 'PacWest MG Championship' },
        { title: '단체전 준우승', sub: 'PacWest MG Championship' },
        { title: '하와이 힐로 대학교', sub: '커뮤니케이션 · 2020–22' },
        { title: '사우스웨스턴 오클라호마 주립대', sub: '경영학 · 2018–19' },
      ],
      specialtiesTitle: '지도 분야',
      specialties: [
        '주니어 육성', '1:1 개인 코칭', '퍼팅 기술', '스윙 메커니즘',
        '영상 분석', '코스 전략', '코스 매니지먼트', '숏게임',
      ],
      ctaText: '시작할 준비 되셨나요?',
      ctaLabel: '레슨 & 가격 보기',
    },
    testimonials: {
      eyebrow: '수강 후기',
      title: '학부모님들의 후기',
      items: [
        {
          quote: '쌤한테 홀릭! 정말 너무 좋아하네요. 골프가 너무 재밌어진다고 난리에요. 어제도 와서 배운 거 설명하느라 늦게 잤어요. 감사합니다.',
          author: '주니어 수강생 학부모',
        },
        {
          quote: '어디서 근무하시는지 계속 찾았어요. 가까운 골프장에서도 뵐 수 있어서 정말 좋아요.',
          author: 'NCAA 준비 개인 레슨 학생 학부모',
        },
        {
          quote: '윌리스 코치는 그룹 레슨도 정말 잘 가르쳐주십니다. 학생별로 실력이 다른 걸 바로 체크하시고, 아이들이 좋아하는 골프 선수들의 스윙 영상을 이해하기 쉽게 알려주고, 눈높이에 맞춰서 해줍니다. 1:1 레슨도 문의드렸어요!',
          author: '써머 캠프 학생 부모님',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: '자주 묻는 질문',
      items: [
        { q: '어디서부터 시작하나요?', a: '윌리스와 처음이신가요? 1:1 레슨으로 시작하세요. 전체 스윙을 점검하고 첫 시간부터 맞춤 계획을 세워드립니다.' },
        { q: '아이가 좋아할지 확신이 안 서요.', a: '무료 체험은 없지만, 부담 없이 시작하는 좋은 방법은 여름 캠프나 그룹 레슨입니다. 개인 레슨으로 넘어가기 전에 아이가 골프를 즐기는지 확인하기 좋습니다.' },
        { q: '아이가 골프를 한 번도 안 해봤는데 괜찮을까요?', a: '물론입니다. 윌리스는 주니어와 성인을 초보부터 시합 준비 단계까지 지도합니다. 각 레슨은 학생에게 맞춰 진행하며, 탄탄한 기본기와 자신감, 골프에 대한 진짜 흥미에 집중합니다.' },
        { q: '몇 살부터 배울 수 있나요?', a: '주니어는 만 18세까지, 성인은 만 18세 이상입니다. 모든 레슨은 학생의 나이와 실력에 맞춰 진행됩니다.' },
        { q: '아이가 잘 늘고 있는지 어떻게 알 수 있나요?', a: '매 수업 후 명확한 피드백과 다음에 연습할 내용을 정리해 드립니다. 윌리스는 학부모님과 꾸준히 소통해서 아이의 성장 과정을 늘 알 수 있게 합니다.' },
        { q: '레슨은 어디서 진행되나요?', a: '두 골프장에서 진행됩니다: Swan-e-Set (Pitt Meadows, BC)과 Westwood Plateau (Coquitlam, BC). 위 레슨 섹션에서 골프장을 선택하세요.' },
        { q: '그룹 레슨은 어떻게 진행되나요?', a: 'GT4K 주니어 프로그램은 다른 학생을 몰라도 참여할 수 있습니다. 세미프라이빗 레슨은 함께 배울 친구나 가족을 직접 데려오시면 됩니다.', link: { url: 'https://greenteeacademy.com/junior/gt4k-program/', label: 'GT4K 주니어 프로그램 자세히 보기' } },
        { q: '예약은 어떻게 하고, 비용은 얼마인가요?', a: '가격은 골프장에 따라 다릅니다. 레슨 섹션에서 전체 가격을 확인한 뒤, 카카오톡, 인스타그램, 또는 문자로 윌리스에게 연락해 시간을 확정하세요.' },
        { q: '한 세션은 얼마나 걸리나요?', a: '개인 1:1 레슨은 45분 또는 1시간이고, 소그룹 레슨은 1시간입니다. 목표에 맞는 시간을 문의 시 함께 정해 드립니다.' },
        { q: '무엇을 준비해야 하나요?', a: '편한 골프 복장만 준비하시면 됩니다.' },
      ],
      stillText: '더 궁금한 점이 있으신가요?',
      reachOut: '문의하기.',
      readyText: '시작할 준비 되셨나요?',
      cta: '레슨 & 가격 보기',
    },
    contact: {
      eyebrow: '문의하기',
      title: '윌리스에게 연락하기',
      intro: '레슨, 가격, 일정이 궁금하신가요? 윌리스에게 직접 메시지를 보내시면 24시간 내에 답변드립니다.',
      prefill: '안녕하세요! 웹사이트를 보고 연락드립니다. 골프 레슨에 대해 문의드립니다.',
      emailLabel: '이메일',
      phoneLabel: '전화',
      locationLabel: '위치',
      followTitle: '윌리스 팔로우',
    },
    footer: {
      tagline: '실력 · 자신감 · 인성',
      quickLinks: '바로가기',
      contact: '문의',
      role: '개인 골프 지도자 · Pitt Meadows & Coquitlam, BC',
      rights: (year) => `© ${year} Willis Lee Golf. All rights reserved.`,
    },
    buttons: { kakao: '카카오톡', instagram: '인스타그램 DM', text: '문자 보내기' },
  },
}

const LangContext = createContext(null)

function initialLang() {
  try {
    const saved = localStorage.getItem('wlg-lang')
    if (saved === 'en' || saved === 'ko') return saved
  } catch {
    // localStorage 접근 불가 시 무시
  }
  const nav = typeof navigator !== 'undefined' ? navigator.language || '' : ''
  return nav.toLowerCase().startsWith('ko') ? 'ko' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    try {
      localStorage.setItem('wlg-lang', lang)
    } catch {
      // 무시
    }
    document.documentElement.lang = lang
  }, [lang])

  const value = { lang, setLang, t: TRANSLATIONS[lang] }
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}

// 언어 전환 토글 (EN / 한국어)
export function LangToggle({ className = '' }) {
  const { lang, setLang } = useLang()
  const base = 'px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-200'
  return (
    <div className={`flex items-center gap-1 bg-white/10 border border-white/20 rounded-full p-0.5 ${className}`}>
      <button
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`${base} ${lang === 'en' ? 'bg-[#c9a84c] text-white' : 'text-white/70 hover:text-white'}`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('ko')}
        aria-pressed={lang === 'ko'}
        className={`${base} ${lang === 'ko' ? 'bg-[#c9a84c] text-white' : 'text-white/70 hover:text-white'}`}
      >
        한국어
      </button>
    </div>
  )
}
