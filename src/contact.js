// 골프장 위치 (한 곳에서 관리 - Lessons/Contact/Footer 공용)
export const LOCATIONS = [
  { id: 'westwood', name: 'Westwood Plateau', academy: 'GreenTee', city: 'Coquitlam, BC', address: '1630 Parkway Boulevard, Coquitlam, BC V3E 2Y5', image: '/images/westwood2.jpg' },
  { id: 'swaneset', name: 'Swan-e-Set', academy: 'Golf Mecca', city: 'Pitt Meadows, BC', address: '16651 Rannie Rd, Pitt Meadows, BC V3Y 1Z1', image: '/images/swaneset.jpeg' },
]

export const mapsUrl = (address) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

// 상담 채널 정보 (한 곳에서 관리)
export const CONTACT = {
  kakao: 'https://open.kakao.com/o/s8THCgni',
  instagram: 'https://ig.me/m/willisleegolf',
  instagramProfile: 'https://instagram.com/willisleegolf',
  phone: '778-988-9921',
  phoneIntl: '+17789889921',
  email: 'slowfastmedium@gmail.com',
}

// 선택값이 미리 채워진 상담 링크 생성
// KakaoTalk 오픈채팅은 메시지 프리필을 지원하지 않아 링크만 반환
export function chatLinks(message) {
  const text = encodeURIComponent(message || '')
  return {
    kakao: CONTACT.kakao,
    instagram: CONTACT.instagram,
    sms: text ? `sms:${CONTACT.phoneIntl}?&body=${text}` : `sms:${CONTACT.phoneIntl}`,
    email: text
      ? `mailto:${CONTACT.email}?subject=${encodeURIComponent('Golf lesson inquiry')}&body=${text}`
      : `mailto:${CONTACT.email}`,
  }
}
