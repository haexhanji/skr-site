window.SKR_DEFAULT_CONTENT = {
  global: {
    brandName: 'SKR',
    primaryCta: '가격 확인하기',
    contactLabel: 'SKR Studio',
    contactSubLabel: '컴카드 · 프로필 · 포트폴리오 제작',
    bankName: '국민은행',
    accountNumber: '1234-56-789012',
    accountHolder: 'SKR 스튜디오',
    paymentNotice: '입금 확인 시 10분 내로 안내 연락드릴 예정입니다. (영업시간 내)',
    navHome: '홈',
    navPricing: '가격',
    navOrder: '구매',
    navFaq: '자주 묻는 질문',
    floatKakaoText: '카톡 상담',
    floatOrderText: '바로 구매'
  },
  home: {
    heroEyebrow: 'SKR Studio',
    heroTitle: '프로페셔널의\n첫 장면.',
    heroDesc: '배우, 가수, 모델 개인 고객을 위한 컴카드 제작과 프로필 촬영 서비스입니다. 결과물 중심으로 빠르게 정리하고, 필요하면 웹사이트와 영상까지 확장할 수 있습니다.',
    service1Title: '컴카드 제작',
    service1Desc: '배우 · 모델 프로필에 맞는 레이아웃으로 정리해, 전달용 PDF와 이미지로 바로 사용할 수 있게 제작합니다.',
    service1Price: '39,000원',
    service1Image: '',
    service2Title: '프로필 촬영',
    service2Desc: '프로필 촬영, 영상, 웹사이트까지 연결해 개인 브랜딩이 한 톤으로 이어지게 합니다.',
    service2Price: '249,000원부터',
    service2Image: '',
    processTitle: '진행 방식',
    detailImage: '',
    detailImages: [],
    portfolioImages: [],
    review1Text: '"빠르고 깔끔하게 작업해주셔서 너무 좋았어요. 결과물 퀄리티가 정말 마음에 들었습니다."',
    review1Name: '배우 김*연',
    review1Pkg: '기본 패키지',
    review2Text: '"처음 컴카드 만들었는데 생각보다 훨씬 퀄리티가 높아서 놀랐어요. 재연락할 것 같아요!"',
    review2Name: '모델 이*준',
    review2Pkg: '개성 패키지',
    review3Text: '"학생 패키지인데도 완성도가 너무 좋았어요. 오디션에 바로 쓸 수 있을 것 같아요."',
    review3Name: '가수 박*현',
    review3Pkg: '학생 패키지',
    ctaTitle: '지금 바로 시작하세요.',
    ctaSub: '패키지를 확인하고 당신에게 맞는 구성을 선택하세요.',
    heroCta1: '가격 확인하기',
    heroCta2: '바로 주문',
    ctaButton: '가격 확인하기'
  },
  pricing: {
    trustLive: '실시간 12명 상담중',
    trustRating: '★ 5.0 (48)',
    trustCount: '누적 제작 300+',
    trustNotice: '무통장 즉시 확인',
    images: []
  },
  faq: {
    heroTitle: '자주 묻는 질문',
    heroText: '구매 전 많이 물어보시는 내용을 모았습니다.',
    items: [
      { q: '결제는 어떻게 진행되나요?', a: '무통장 입금 방식이며, 주문 후 안내드린 계좌로 입금하시면 10분 내로 확인 연락드립니다. (영업시간 내)' },
      { q: '수정은 몇 번까지 가능한가요?', a: '패키지별로 다릅니다. 기본 패키지는 1회, 개성 패키지는 2회의 수정이 포함되어 있습니다.' },
      { q: '학생 할인은 어떻게 받나요?', a: '구매 시 학생증 또는 재학증명서를 제출하시면 추가 옵션 10% 할인이 적용됩니다.' }
    ]
  },
  order: {
    heroTitle: '하나씩 고르며\n구매를 진행하세요.',
    heroText: '패키지 선택부터 추가 옵션, 할인 조건, 신청자 정보, 최종 확인까지 단계형으로 진행됩니다.',
    packages: [
      {
        id: 'student',
        name: '학생 할인형',
        desc: '학생이니까 더 저렴하게. 고등학생/대학생 배우·모델분들께, 부담없이. 시안 1개 · 최대 2장 · 작업 2일 · 수정 1회.',
        price: '25,000원',
        note: '학생증 또는 재학증명서 인증 필요'
      },
      {
        id: 'basic',
        name: '프리셋 기본형',
        desc: '프리셋으로 더 빠르게, 기본이지만 확실하게. 시안 1개 · 최대 2장 · 작업 3일 · 수정 2회.',
        price: '40,000원',
        note: ''
      },
      {
        id: 'signature',
        name: '맞춤형',
        desc: '개인 1:1 맞춤형 제작. 퍼스널 컬러에 맞춘 컴카드 & 사진보정. 시안 3개 · 최대 4장 · 작업 4일 · 수정 3회.',
        price: '70,000원',
        note: ''
      }
    ],
    options: [
      {
        id: 'none',
        name: '추가옵션 없음',
        desc: '현재 선택한 메인 패키지만 진행합니다.',
        price: '0원'
      },
      {
        id: 'website',
        name: '웹사이트 제작',
        desc: '개인 포트폴리오 웹사이트 + 도메인 1년',
        price: '129,000원'
      },
      {
        id: 'video',
        name: '포트폴리오 영상 제작',
        desc: '출연영상 편집 + 업로드용 정리',
        price: '79,000원'
      },
      {
        id: 'shoot',
        name: '프로필 촬영 패키지',
        desc: '프로필 사진 + 프로필 영상 + 연기연습영상',
        price: '269,000원부터'
      }
    ],
    shootingPackages: [
      {
        id: 'shoot-light',
        name: '라이트',
        price: '249,000원',
        features: '스튜디오 촬영\n프로필 사진 촬영\n보정본 2장\n원본 제공\n1컨셉 / 1착장\n프로필 영상 짧은 클립 포함'
      },
      {
        id: 'shoot-basic',
        name: '베이직',
        price: '329,000원',
        features: '스튜디오 촬영\n프로필 사진 촬영\n보정본 4장\n원본 제공\n2컨셉 / 2착장\n전신 촬영 포함\n프로필 영상 촬영 포함\n연기연습용 짧은 영상 1종 포함'
      },
      {
        id: 'shoot-sig',
        name: '시그니처',
        price: '429,000원',
        features: '스튜디오 촬영\n프로필 사진 촬영\n보정본 6장\n원본 제공\n2~3컨셉 / 2착장 이상\n전신 촬영 포함\n프로필 영상 촬영 포함\n연기연습영상 촬영 / 제작 포함'
      }
    ]
  },
  submit: {
    heroTitle: '작업에 필요한 자료를\n정리해서 제출하세요.',
    heroText: '사진, PDF, 학생 인증 파일은 업로드하고, 영상은 링크로 제출하는 1차 구조입니다.'
  },
  status: {
    heroTitle: '주문 진행상황을\n한눈에 확인하세요.',
    heroText: '카카오 로그인 또는 주문 정보 확인 방식으로 현재 상태를 확인할 수 있는 화면입니다.'
  }
};

/* ──────────────────────────────────────────────────────────────
 * Content fetcher — talks to /api/content, falls back to defaults.
 * ────────────────────────────────────────────────────────────── */

function mergeWithDefaults(parsed) {
  const def = window.SKR_DEFAULT_CONTENT;
  parsed = parsed || {};
  return {
    global: { ...def.global, ...(parsed.global || {}) },
    home: {
      ...def.home,
      ...(parsed.home || {}),
      portfolioImages: (parsed.home?.portfolioImages) ?? def.home.portfolioImages,
      detailImages: (parsed.home?.detailImages) ?? def.home.detailImages
    },
    pricing: {
      ...def.pricing,
      ...(parsed.pricing || {}),
      images: (parsed.pricing?.images) ?? def.pricing.images
    },
    faq: {
      ...def.faq,
      ...(parsed.faq || {}),
      items: (parsed.faq?.items) || def.faq.items
    },
    order: {
      ...def.order,
      ...(parsed.order || {}),
      packages: (parsed.order?.packages) || def.order.packages,
      options: (parsed.order?.options) || def.order.options,
    shootingPackages: (parsed.order?.shootingPackages) || def.order.shootingPackages
    },
    submit: { ...def.submit, ...(parsed.submit || {}) },
    status: { ...def.status, ...(parsed.status || {}) }
  };
}

let __skrContentCache = null;
let __skrContentPromise = null;

window.getSkrContent = function getSkrContent() {
  if (__skrContentCache) return Promise.resolve(__skrContentCache);
  if (__skrContentPromise) return __skrContentPromise;
  __skrContentPromise = fetch('/api/content', { credentials: 'same-origin' })
    .then((r) => r.ok ? r.json() : { ok: false })
    .then((j) => {
      const merged = mergeWithDefaults(j && j.ok ? j.data : null);
      __skrContentCache = merged;
      return merged;
    })
    .catch((e) => {
      console.error('Failed to fetch /api/content, using defaults:', e);
      const fallback = mergeWithDefaults(null);
      __skrContentCache = fallback;
      return fallback;
    })
    .finally(() => { __skrContentPromise = null; });
  return __skrContentPromise;
};

window.setSkrContent = async function setSkrContent(nextContent) {
  const resp = await fetch('/api/content', {
    method: 'PUT',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: nextContent }),
  });
  if (!resp.ok) {
    const msg = resp.status === 401 ? '어드민 로그인이 만료되었습니다.' : '저장 실패';
    throw new Error(msg);
  }
  __skrContentCache = nextContent;
};

window.resetSkrContent = async function resetSkrContent() {
  // Reset = overwrite DB with defaults
  const defaults = JSON.parse(JSON.stringify(window.SKR_DEFAULT_CONTENT));
  await window.setSkrContent(defaults);
};
