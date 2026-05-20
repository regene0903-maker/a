/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, SelectionState, FAQEntry } from './types';

// HP Products database with detailed specs matching the HP website design guidelines
export const HP_PRODUCTS: Product[] = [
  {
    id: 'hp-essential-15',
    name: 'HP Essential 15',
    type: 'laptop',
    tagline: '학업과 사무의 완벽한 시작, 독보적인 가성비 노트북',
    price: '₩499,000',
    priceNum: 499000,
    image: 'laptop-silver',
    matchScore: 0,
    bestMatch: false,
    recommendationReason: '실속 있는 기본 작업과 인터넷 서핑, 원격 강좌 시청에 탁월하며 뛰어난 경제성을 자랑합니다.',
    highlights: ['Intel® Core™ 프로세서 탑재', '1.59kg 의 가벼운 무게로 뛰어난 이동성', '고속 충전 지원 (45분 만에 50% 충전)'],
    specs: {
      price: '499,000원',
      weight: '1.59 kg',
      battery: '최대 8.5시간',
      performance: '기본형 (문서/학업)',
      portability: '우수 (두께 17.9mm)',
      useCase: '인터넷 서핑, 과제 작성, 영상 시청',
      customSpecDetail: 'DDR4 8GB / SSD 256GB'
    }
  },
  {
    id: 'hp-pavilion-x360',
    name: 'HP Pavilion x360 14',
    type: 'laptop',
    tagline: '360도 회전하는 디스플레이와 터치펜으로 창의력을 현실로',
    price: '₩890,000',
    priceNum: 890000,
    image: 'laptop-convertible',
    matchScore: 0,
    bestMatch: false,
    recommendationReason: '태블릿 모드와 펜 입력을 지원하여 아이디어 스케치와 인강 필기가 잦은 대학생들에게 추천합니다.',
    highlights: ['HP 리차저블 액티브 펜 기본 제공', '360도 힌지 설계로 4가지 모드 사용', 'Fisheye 광각 카메라 탑재'],
    specs: {
      price: '890,000원',
      weight: '1.51 kg',
      battery: '최대 11시간',
      performance: '올라운더 (오피스/드로잉)',
      portability: '매우 우수 (컴팩트 14인치)',
      useCase: '온라인 강의 필기, 문서 작업, 간단한 그래픽 가공',
      customSpecDetail: 'Core i5 / 16GB / SSD 512GB / 터치스크린'
    }
  },
  {
    id: 'hp-victus-16',
    name: 'HP Victus Laptops 16',
    type: 'laptop',
    tagline: '합리적인 가격에 즐기는 최상급 게이밍 및 엔지니어링 퍼포먼스',
    price: '₩1,290,000',
    priceNum: 1290000,
    image: 'laptop-gaming-victus',
    matchScore: 0,
    bestMatch: false,
    recommendationReason: '강력한 그래픽 성능으로 게임뿐만 아니라 컴프, 딥러닝 등 고사양 코딩 작업과 CAD 등 공학 프로그램 구동에 필수적입니다.',
    highlights: ['NVIDIA® GeForce RTX™ 4050/4060 탑재', '144Hz 고주사율 IPS 게이밍 스크린', 'OMEN Tempest Cooling 기술 적용'],
    specs: {
      price: '1,290,000원',
      weight: '2.31 kg',
      battery: '최대 6.5시간',
      performance: '고사양 (게임/코딩/CAD)',
      portability: '보통',
      useCase: '스팀 게임, 다중 연산 코딩, 3D 랜더링',
      customSpecDetail: 'AMD Ryzen 7 / RTX 4050 / DDR5 16GB'
    }
  },
  {
    id: 'hp-envy-16',
    name: 'HP ENVY 16 Creator',
    type: 'laptop',
    tagline: '크리에이터와 전문가를 위한 색상 정확도 극대화 16인치 노트북',
    price: '₩1,490,000',
    priceNum: 1490000,
    image: 'laptop-envy',
    matchScore: 0,
    bestMatch: false,
    recommendationReason: 'DCI-P3 100% 만족하는 고화질 스크린과 여유로운 화면비로, 영상 및 정밀 사진 편집을 희망하는 전공자에게 최적입니다.',
    highlights: ['WQXGA 고배율 정밀 터치 패널', 'NVIDIA® Studio 인증 획득', 'Intel® Core™ i7 강력한 멀티코어 연산'],
    specs: {
      price: '1,490,000원',
      weight: '2.15 kg',
      battery: '최대 9.5시간',
      performance: '전문가형 (영상편집/디자인)',
      portability: '보통 (대화면)',
      useCase: 'Premiere Pro 작업, Photoshop 전문가 레이아웃',
      customSpecDetail: 'Core i7 / Intel® Arc™ or RTX / OLED 120Hz'
    }
  },
  {
    id: 'hp-elitebook-840',
    name: 'HP EliteBook 840 G10',
    type: 'laptop',
    tagline: '비즈니스를 바이크에 담다, 울트라북 무게의 최고급 기업용 노트북',
    price: '₩1,720,000',
    priceNum: 1720000,
    image: 'laptop-elite',
    matchScore: 0,
    bestMatch: false,
    recommendationReason: '사무실뿐만 아니라 가방에 항시 휴대하며 이동해야 하는 직장인에게 필수적인 최고의 견고성과 차세대 보안 솔루션을 보장합니다.',
    highlights: ['HP Wolf Security 하드웨어 통합 보안', '1.36kg 가벼운 풀 메탈 알루미늄 바디', '최대 14시간 지속되는 프리미엄 배터리'],
    specs: {
      price: '1,720,000원',
      weight: '1.36 kg',
      battery: '최대 14시간',
      performance: '프리미엄 (초경량/장시간)',
      portability: '최고 우수 (1.36kg 초경량)',
      useCase: '출장 잦은 비즈니스, 주식 분석, 개발 생산성 코딩',
      customSpecDetail: 'Intel® Evo™ 플랫폼 인증 / Core i7'
    }
  },
  {
    id: 'hp-omen-16',
    name: 'HP OMEN 16 Excellence',
    type: 'laptop',
    tagline: '타협 없는 프레임 레이트, 하이엔드 오멘 게이밍 플래그십',
    price: '₩2,150,000',
    priceNum: 2150000,
    image: 'laptop-gaming-omen',
    matchScore: 0,
    bestMatch: false,
    recommendationReason: '강력한 하이엔드 그래픽 및 최대 성능 냉각 시스템을 갖추어, 무거운 개발 엔진 코딩 및 최신 AAA급 3D 타이틀을 완벽하게 즐기는데 최적입니다.',
    highlights: ['NVIDIA® GeForce RTX™ 4070 탑재', 'QHD 240Hz 프리미엄 디스플레이', 'RGB 백라이트 기계식 느낌 키보드'],
    specs: {
      price: '2,150,000원',
      weight: '2.45 kg',
      battery: '최대 5.5시간',
      performance: '플래그십 (최강 게이밍/가상현실)',
      portability: '적합하지 않음 (시즈모드 권장)',
      useCase: 'AAA 고사양 게임, 무거운 에뮬레이터 코딩, 대용량 연산',
      customSpecDetail: 'Core i9 / RTX 4070 / 32GB RAM / 1TB SSD'
    }
  },
  {
    id: 'hp-deskjet-2820',
    name: 'HP DeskJet 2820 All-In-One',
    type: 'printer',
    tagline: '대학생의 완벽한 메이트, 다재다능 무선 복합기',
    price: '₩89,000',
    priceNum: 89000,
    image: 'printer-compact',
    matchScore: 0,
    bestMatch: false,
    recommendationReason: '합리적인 설치 비용으로 과제물 수시 출력, 신분증 스캔, 원격 무선 인쇄 기능까지 해결합니다.',
    highlights: ['스마트 앱 제어로 간편한 모바일 전송', '인쇄, 스캔, 복사 올인원 지원', '공간을 절약하는 컴팩트 미니 디자인'],
    specs: {
      price: '89,000원',
      weight: '3.42 kg',
      battery: 'N/A (상시전원)',
      performance: '실속 복합기 (스캔/스마트 스크린)',
      portability: '우수 (초소형 디자인)',
      useCase: '학업 과제 소량 출력, 강의 수험서 복사',
      customSpecDetail: '무선 Wi-Fi / HP Smart App 연동'
    }
  },
  {
    id: 'hp-smarttank-580',
    name: 'HP Smart Tank 580 무한잉크 복합기',
    type: 'printer',
    tagline: '컬러 8,000장 출력이 기본! 초강력 유지비의 정품 무한잉크',
    price: '₩219,000',
    priceNum: 219000,
    image: 'printer-tank',
    matchScore: 0,
    bestMatch: false,
    recommendationReason: '대량의 인쇄 작업이나 대단위 레포트 인쇄, 제안서 출력이 잦은 학생 및 재택근무자를 위한 초저가 유지비 프린터입니다.',
    highlights: ['기본 블랙 잉크 기준 최대 6,000장 출력 가능', '카트리지 교체 없는 정품 일체형 무한 잉크 충전', '손쉬운 잉크 보틀 주입 설계'],
    specs: {
      price: '219,000원',
      weight: '5.14 kg',
      battery: 'N/A (상시전원)',
      performance: '무한 대유량 (장당 잉크비 2원대)',
      portability: '보통',
      useCase: '대용량 학습서 전부 인쇄, 컬러 제안서 인쇄',
      customSpecDetail: '정품 무한잉크 / 인쇄+스캔+복사'
    }
  },
  {
    id: 'hp-laserjet-pro',
    name: 'HP LaserJet Pro MFP',
    type: 'printer',
    tagline: '비즈니스 속도를 지원하는 믿음직한 초고속 레이저 복합기',
    price: '₩320,000',
    priceNum: 320000,
    image: 'printer-laser',
    matchScore: 0,
    bestMatch: false,
    recommendationReason: '잉크 마를 걱정 없이 고강도 화질의 블랙 텍스트 문서를 수 초 만에 고속으로 대량 출력하는 최상위 프로급 오피스 기기입니다.',
    highlights: ['초고속 첫 페이지 인쇄 (8초 미만)', '흔들림 없고 번짐 없는 선명한 레이저 토너 적용', '이중 대용량 용지 급지함 제공'],
    specs: {
      price: '320,000원',
      weight: '7.50 kg',
      battery: 'N/A (상시전원)',
      performance: '초고속 프로 복합기 (분당 22매)',
      portability: '견고한 디자인',
      useCase: '오피스 서류 발행, 텍스트 가득한 계약서 인쇄',
      customSpecDetail: '모노 레이저 / 고속 듀얼 급지'
    }
  }
];

// Elegant expert matching algorithm to recommend exactly the top 3 matches
export function getRecommendations(state: SelectionState): Product[] {
  // Let's copy the products to avoid modifying original structures
  const scored = HP_PRODUCTS.map(p => ({ ...p, matchScore: 100 }));

  scored.forEach(p => {
    let score = 100;

    // --- 1. Purpose Check ---
    if (p.type === 'laptop') {
      if (state.purpose === 'documents') {
        if (p.id === 'hp-essential-15' || p.id === 'hp-pavilion-x360') {
          score += 20;
        } else if (p.id === 'hp-omen-16' || p.id === 'hp-victus-16') {
          // Gaming laptops are too heavy/overpowered
          score -= 15;
        }
      } else if (state.purpose === 'coding') {
        if (p.id === 'hp-victus-16' || p.id === 'hp-elitebook-840' || p.id === 'hp-omen-16') {
          score += 25;
        } else if (p.id === 'hp-essential-15') {
          score -= 10;
        }
      } else if (state.purpose === 'design') {
        if (p.id === 'hp-envy-16' || p.id === 'hp-pavilion-x360') {
          score += 30; // touch and accurate screens!
        } else if (p.id === 'hp-essential-15') {
          score -= 15;
        }
      } else if (state.purpose === 'video') {
        if (p.id === 'hp-envy-16' || p.id === 'hp-omen-16') {
          score += 30;
        } else if (p.id === 'hp-essential-15') {
          score -= 30; // definitely cannot handle heavy 4k editing easily
        } else if (p.id === 'hp-pavilion-x360') {
          score -= 10;
        }
      } else if (state.purpose === 'gaming') {
        if (p.id === 'hp-omen-16') {
          score += 35;
        } else if (p.id === 'hp-victus-16') {
          score += 30;
        } else if (p.id === 'hp-essential-15' || p.id === 'hp-pavilion-x360') {
          score -= 35; // Integrated graphics fail
        }
      } else if (state.purpose === 'print_only') {
        // Decrease laptop score since printer-only is requested
        score -= 40;
      }
    } else if (p.type === 'printer') {
      // It's a printer
      if (state.purpose === 'print_only') {
        score += 45;
      } else if (state.printFrequency !== 'none') {
        score += 25;
      } else {
        score -= 20; // user selected none for printing
      }
    }

    // --- 2. Budget Check ---
    // LAPTOPS ONLY BUDGET CHECKS (or printers relative check)
    if (p.type === 'laptop') {
      if (state.budget === 'under_50') {
        // absolute budget
        if (p.id === 'hp-essential-15') {
          score += 35;
        } else if (p.priceNum > 500000 && p.priceNum <= 1000000) {
          score -= 10;
        } else {
          score -= 45; // too expensive
        }
      } else if (state.budget === '50_100') {
        if (p.id === 'hp-pavilion-x360') {
          score += 35;
        } else if (p.id === 'hp-essential-15') {
          // can easily buy
          score += 15;
        } else {
          score -= 25; // out of scope
        }
      } else if (state.budget === '100_150') {
        if (p.id === 'hp-victus-16' || p.id === 'hp-envy-16') {
          score += 35;
        } else if (p.id === 'hp-pavilion-x360') {
          score += 10; // cheap enough
        } else {
          score -= 25;
        }
      } else if (state.budget === 'over_150') {
        if (p.id === 'hp-elitebook-840' || p.id === 'hp-omen-16') {
          score += 35;
        } else if (p.id === 'hp-envy-16') {
          score += 20;
        } else if (p.id === 'hp-essential-15') {
          score -= 15; // too cheap for power users
        }
      }
    } else {
      // Printer budget checks:
      // DeskJet is 8.9만, SmartTank is 21.9만, LaserJet is 32만.
      // All are under 50만원. So printers fit fine in any budget, but we slightly incentivize:
      if (state.budget === 'under_50') {
        if (p.id === 'hp-deskjet-2820') score += 15;
      } else if (state.budget === 'over_150' || state.budget === '100_150') {
        if (p.id === 'hp-laserjet-pro' || p.id === 'hp-smarttank-580') score += 15;
      }
    }

    // --- 3. Portability Check (For Laptops) ---
    if (p.type === 'laptop') {
      if (state.portability === 'premium') {
        if (p.id === 'hp-elitebook-840' || p.id === 'hp-pavilion-x360') {
          score += 30;
        } else if (p.id === 'hp-essential-15') {
          score += 15; // decently light
        } else if (p.id === 'hp-omen-16' || p.id === 'hp-victus-16') {
          score -= 30; // heavy gaming machines
        }
      } else if (state.portability === 'moderate') {
        if (p.id === 'hp-essential-15' || p.id === 'hp-envy-16' || p.id === 'hp-pavilion-x360') {
          score += 20;
        }
      }
    }

    // --- 4. User Group (Student vs Worker) ---
    if (state.userType === 'student') {
      if (p.id === 'hp-pavilion-x360' || p.id === 'hp-essential-15' || p.id === 'hp-deskjet-2820') {
        score += 15; // highly appealing to student budget & flexibility
      }
    } else if (state.userType === 'worker') {
      if (p.id === 'hp-elitebook-840' || p.id === 'hp-laserjet-pro' || p.id === 'hp-envy-16') {
        score += 20; // high reliability/professional tools
      }
    }

    // --- 5. Print Frequency Check (For Printers) ---
    if (p.type === 'printer') {
      if (state.printFrequency === 'frequently') {
        if (p.id === 'hp-smarttank-580' || p.id === 'hp-laserjet-pro') {
          score += 40; // High capacity and speed
        } else if (p.id === 'hp-deskjet-2820') {
          score -= 10; // low capacity ink inkjet
        }
      } else if (state.printFrequency === 'rarely') {
        if (p.id === 'hp-deskjet-2820') {
          score += 35; // cheap and perfect for random scans
        } else if (p.id === 'hp-smarttank-580') {
          score += 10;
        }
      } else if (state.printFrequency === 'none') {
        score -= 50; // discard printer
      }
    }

    p.matchScore = Math.max(10, Math.min(99, Math.round(score)));
  });

  // Ensure sorting by highest score first
  const sorted = scored.sort((a, b) => b.matchScore - a.matchScore);

  // Take top 3 recommended items
  const top3 = sorted.slice(0, 3).map((item, idx) => ({
    ...item,
    bestMatch: idx === 0 // Rank #1 has BEST MATCH
  }));

  return top3;
}

// Custom curated FAQ entries following HP Website Design Guidelines
export const FAQ_ITEMS: FAQEntry[] = [
  {
    question: '대학생에게 가장 추천하는 최적의 스펙 기준은 무엇인가요?',
    answer: '과제 작성 및 영상 재생 등 일반 대학 생활에는 인텔 Core i5 또는 AMD Ryzen 5 이상, 메모리는 16GB, 저장장치는 SSD 512GB를 탑재한 모델을 적극 추천합니다. 이는 수년 뒤 졸업할 때까지 끊김 현상 없는 쾌적성을 보장해 줍니다.'
  },
  {
    question: '잉크젯 복합기와 레이저 복합기 중 어떤 방식을 골라야 할까요?',
    answer: '레포트나 서적 대용량 컬러 프린트 빈도가 잦고 장치 구매 단가를 최대한 아끼고 싶다면 무한잉크 복합기(예: Smart Tank 580)가 적합하며, 인쇄 속도가 극도로 중요하거나 잉크가 노즐에서 굳지 않도록 주기적인 유지관리가 귀찮은 분들에겐 번짐 없고 마르는 문제 없는 레이저 복합기(LaserJet Pro)가 훨씬 유리합니다.'
  },
  {
    question: '휴대성이 왜 중요한가요? 노트북 무게 가이드를 제공해 주세요.',
    answer: '가방에 교재 및 소지품과 함께 늘 휴대하는 노트북의 특성상 1.5kg 이하의 노트북(예: Pavilion x360, EliteBook)만이 어깨의 통증 없이 매일 강의실을 이동하게 도와줍니다. 집이나 도서관 한자리에서 붙박이 형태로 코딩 및 3D 그래픽/게임을 고성능 위주로 굴릴 목적일 경우에만 2kg 이상의 HP Victus/OMEN 라인을 추천드립니다.'
  },
  {
    question: '스내치 충전(고속 충전)은 모든 HP 기기에서 작동하나요?',
    answer: '네, PickMate에서 소개된 대다수의 HP 프리미엄 노트북 라인업은 HP Fast Charge 기술을 연동하여 시스템 전원을 끈 후 단 45분 만에 최대 50%까지 신속 전력 복구를 완성합니다. 강의 쉬는 시간이나 짧은 카페 체류 시 엄청난 효과를 발휘합니다.'
  },
  {
    question: '추천 결과에 나오는 점수는 어떻게 도출된 것인가요?',
    answer: 'HP 공식 엔지니어 추천 알고리즘과 수만 명의 사용자 실사용 만족도 지표를 결합하여 설계된 매칭 지수입니다. 고객님께서 응답한 실제 예산 가이드라인, 사용목적에 필요한 CPU 및 GPU 리소스, 최적의 인쇄 보틀 사양 등을 점수화하여 매칭했습니다.'
  }
];
