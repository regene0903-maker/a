/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Laptop, 
  Printer, 
  User, 
  Briefcase, 
  Sparkles, 
  BookOpen, 
  Code, 
  Palette, 
  Video, 
  Gamepad2, 
  Coins, 
  Compass, 
  Maximize2, 
  ChevronRight, 
  ChevronDown, 
  RefreshCw, 
  HelpCircle, 
  Layers, 
  Feather, 
  ShieldCheck, 
  FileText, 
  Activity,
  Check,
  X
} from 'lucide-react';
import { SelectionState, Product, FAQEntry, ViewTab } from '../types';
import { HP_PRODUCTS, getRecommendations, FAQ_ITEMS } from '../data';
import { ProductIllustration } from './ProductIllustrations';

// Predefined Persona Configurations for Quick Testing
const PERSONAS = [
  {
    name: '컴공 신입생 (고성능 코딩·게임)',
    label: 'CS Student',
    state: {
      userType: 'student' as const,
      purpose: 'coding' as const,
      budget: '100_150' as const,
      portability: 'moderate' as const,
      printFrequency: 'rarely' as const,
    }
  },
  {
    name: '디자인 지망생 (필기·드로잉)',
    label: 'Art Creator',
    state: {
      userType: 'student' as const,
      purpose: 'design' as const,
      budget: '50_100' as const,
      portability: 'premium' as const,
      printFrequency: 'frequently' as const,
    }
  },
  {
    name: '오피스 직장인 (이동성·기본공무)',
    label: 'Global Office',
    state: {
      userType: 'worker' as const,
      purpose: 'documents' as const,
      budget: 'over_150' as const,
      portability: 'premium' as const,
      printFrequency: 'none' as const,
    }
  },
  {
    name: '재택 1인 사업가 (초고속 문서 복합)',
    label: 'Sole Publisher',
    state: {
      userType: 'worker' as const,
      purpose: 'print_only' as const,
      budget: 'under_50' as const,
      portability: 'any' as const,
      printFrequency: 'frequently' as const,
    }
  }
];

export const PickMateWorkspace: React.FC = () => {
  // Navigation inside the emulator
  const [currentTab, setCurrentTab] = useState<ViewTab>('home');
  
  // Custom interactive Step inside the recommendation wizard (1 to 4)
  const [step, setStep] = useState<number>(1);
  
  // User Selection Answers state
  const [answers, setAnswers] = useState<SelectionState>({
    userType: 'student',
    purpose: 'documents',
    budget: '50_100',
    portability: 'premium',
    printFrequency: 'rarely',
  });

  // Modal spec detailed view
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // FAQ Expanded index state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Derive dynamic matching results based on user answers
  const recommendedItems = useMemo(() => {
    return getRecommendations(answers);
  }, [answers]);

  // Quick select helper persona
  const applyPersona = (personaState: typeof answers) => {
    setAnswers(personaState);
    setStep(4); // Advance directly to end of questionnaire ready to submit or review
    setCurrentTab('recommend');
    setSelectedProduct(null);
  };

  // Skip and submit answers to recommendation results
  const viewResults = () => {
    setCurrentTab('recommend');
    setSelectedProduct(null);
  };

  const resetAll = () => {
    setAnswers({
      userType: 'student',
      purpose: 'documents',
      budget: '50_100',
      portability: 'premium',
      printFrequency: 'rarely',
    });
    setStep(1);
    setCurrentTab('home');
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans text-[#1a1a1a] select-none">
      
      {/* LEFT DESIGN REVIEW PANEL: Exclusive aesthetic metadata workspace */}
      <div className="w-full md:w-[35%] lg:w-[30%] bg-white border-b md:border-b-0 md:border-r border-hp-fog p-6 lg:p-8 flex flex-col justify-between overflow-y-auto max-h-screen">
        <div className="space-y-6">
          {/* Workspace Title & Logo */}
          <div className="pb-4 border-b border-hp-fog">
            <div className="flex items-center space-x-2 text-xs font-mono text-hp-blue font-semibold tracking-widest uppercase">
              <Sparkles className="w-4 h-4" />
              <span>HP Prototype Review Desk</span>
            </div>
            <h1 className="text-2xl font-bold mt-1 tracking-tight text-hp-ink flex items-center gap-1.5">
              <span>PickMate</span>
              <span className="text-hp-blue">.</span>
            </h1>
            <p className="text-xs text-hp-graphite mt-1 leading-normal">
              HP 웹사이트 스타일 가이드를 철저히 해석·설계한 인터랙티브 가이드라인 시제품 테이블입니다. 
            </p>
          </div>

          {/* Quick Persona Injection Controllers */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wide text-hp-ink uppercase flex items-center gap-2">
              <Layers className="w-4 h-4 text-hp-blue" />
              <span>원클릭 페르소나 테스트</span>
            </h3>
            <p className="text-xs text-hp-charcoal leading-relaxed">
              아래의 대학생/직장인 프리셋 상태를 선택하시면 설문 결과가 즉시 에뮬레이터에 주입 성형되어 실시간 제품 추천 효과를 점검할 수 있습니다.
            </p>
            <div className="grid grid-cols-1 gap-2.5 mt-2">
              {PERSONAS.map((p, idx) => (
                <button
                  key={idx}
                  id={`persona-btn-${idx}`}
                  onClick={() => applyPersona(p.state)}
                  className="text-left p-3 rounded-lg border border-hp-fog bg-hp-cloud hover:border-hp-steel hover:bg-white transition-all group pointer"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-hp-ink group-hover:text-hp-blue transition-colors">{p.name}</span>
                    <span className="text-[10px] font-mono font-medium text-hp-graphite bg-white border border-hp-fog px-1.5 py-0.5 rounded uppercase">{p.label}</span>
                  </div>
                  {/* Subtle info pill representation */}
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    <span className="text-[10px] bg-white text-hp-charcoal px-1.5 py-0.25 rounded border border-hp-fog">
                      {p.state.purpose === 'coding' ? '개발코딩' : 
                       p.state.purpose === 'design' ? '디자인' : 
                       p.state.purpose === 'documents' ? '오피스문서' : '프린터전용'}
                    </span>
                    <span className="text-[10px] bg-white text-hp-charcoal px-1.5 py-0.25 rounded border border-hp-fog">
                      {p.state.budget === 'under_50' ? '50만 이하' : 
                       p.state.budget === '50_100' ? '50-100만' : 
                       p.state.budget === '100_150' ? '100-150만' : '150만 이상'}
                    </span>
                    <span className="text-[10px] bg-white text-hp-charcoal px-1.5 py-0.25 rounded border border-hp-fog">
                      {p.state.printFrequency === 'frequently' ? '출력잦음' : '출력안함/가끔'}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Style System Token Visualizers */}
          <div className="p-4 bg-hp-cloud rounded-lg space-y-3.5 border border-hp-fog">
            <h4 className="text-xs font-bold text-hp-ink tracking-wider uppercase">Style Tokens Verification</h4>
            
            {/* Color swatches hierarchy matching custom specs */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono text-hp-graphite block">Colors used (HP palette)</span>
              <div className="grid grid-cols-4 gap-1 text-[10px] font-mono text-center text-white">
                <div className="p-1 px-1 rounded bg-[#024ad8] font-bold">#024AD8<span className="block text-[8px] font-normal">Electric Blue</span></div>
                <div className="p-1 px-1 rounded bg-[#1a1a1a] font-bold">#1A1A1A<span className="block text-[8px] font-normal">Ink Primary</span></div>
                <div className="p-1 px-1 rounded bg-[#ffffff] border border-hp-steel text-hp-ink font-bold">#FFFFFF<span className="block text-[8px] font-normal">Canvas</span></div>
                <div className="p-1 px-1 rounded bg-[#f7f7f7] text-hp-ink border border-hp-steel font-bold">#F7F7F7<span className="block text-[8px] font-normal">Cloud</span></div>
              </div>
            </div>

            {/* Visual styling parameters check */}
            <div className="text-[11px] text-hp-charcoal space-y-1">
              <div className="flex justify-between border-b border-hp-steel pb-1"><span className="font-semibold text-hp-ink">Buttons Rounded</span><span className="font-mono">4px (Slightly Sharp)</span></div>
              <div className="flex justify-between border-b border-hp-steel pb-1"><span className="font-semibold text-hp-ink">Cards Rounded</span><span className="font-mono">16px (Soft Curve)</span></div>
              <div className="flex justify-between border-b border-hp-steel pb-1"><span className="font-semibold text-hp-ink">Elevations</span><span className="font-mono">Flat Surface & Soft Lift</span></div>
              <div className="flex justify-between"><span className="font-semibold text-hp-ink">Typeface System</span><span className="font-mono">Inter x SF Pro standard</span></div>
            </div>
          </div>
        </div>

        {/* Minimal layout footnote */}
        <div className="pt-6 border-t border-hp-fog text-[11px] text-hp-graphite flex items-center justify-between">
          <span>HP UI Prototype Studio 2026</span>
          <span className="flex items-center gap-1 font-mono text-hp-blue font-semibold">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
            ACTIVE EMULATOR
          </span>
        </div>
      </div>

      {/* RIGHT EMULATOR WORKSPACE: Centering the gorgeous mobile prototype */}
      <div className="flex-1 flex justify-center items-center py-6 px-4 md:py-10 bg-hp-cloud overflow-hidden relative">
        
        {/* Background parallel chevron slashes to pay homage to the HP brand logo geometry */}
        <div className="absolute top-0 right-10 w-[300px] h-full bg-gradient-to-l from-hp-blue-soft/10 via-transparent to-transparent -skew-x-[25deg] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-10 w-[150px] h-[50%] bg-gradient-to-r from-hp-blue-soft/10 via-transparent to-transparent -skew-x-[25deg] pointer-events-none z-0" />

        {/* Dynamic device wrapper - mimics premium phone hardware with thin bezels */}
        <div className="w-full max-w-[420px] h-[820px] bg-white border-[14px] border-[#1a1a1a] rounded-[42px] shadow-[0_25px_60px_-15px_rgba(26,26,26,0.25)] relative flex flex-col overflow-hidden z-10">
          
          {/* Front camera notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-2xl z-50 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800 mr-2 block"></span>
            <span className="w-16 h-1 bg-[#222] rounded-full block"></span>
          </div>

          {/* Screen StatusBar */}
          <div className="h-10 bg-white px-6 pt-3 flex justify-between items-center text-xs font-mono font-medium text-hp-ink z-40">
            <span>08:06 AM</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] bg-hp-cloud px-1 rounded border border-hp-steel">5G</span>
              <span>100%🔋</span>
            </div>
          </div>

          {/* Interactive PickMate Application Header inside Simulator */}
          <div className="bg-white border-b border-hp-fog px-4 py-3 flex flex-col z-30">
            <div className="flex justify-between items-center">
              {/* Custom Vector Text Logo representing dynamic parallel slashes */}
              <button 
                id="brand-logo-btn"
                onClick={resetAll} 
                className="flex items-center space-x-1 font-bold tracking-tight text-lg cursor-pointer"
              >
                {/* Visual HP trademark representation with the double line chevron */}
                <span className="font-black italic bg-gradient-to-r from-hp-blue to-hp-blue-bright bg-clip-text text-transparent">PICK</span>
                <span className="text-hp-ink">MATE</span>
                <span className="w-1.5 h-1.5 bg-hp-blue rounded-full"></span>
              </button>

              <button 
                id="quick-reset-btn"
                onClick={resetAll} 
                className="p-1 px-2.5 rounded bg-hp-cloud text-hp-ink border border-hp-fog hover:border-hp-steel text-[11px] font-medium flex items-center gap-1 transition-all pointer"
              >
                <RefreshCw className="w-3 h-3 text-hp-blue" />
                <span>다시 시작하기</span>
              </button>
            </div>

            {/* HP Styling Category Tabs Nav Bar */}
            <div className="flex justify-between gap-1 mt-2.5">
              {[
                { tab: 'home', label: '공홈', icon: BookOpen },
                { tab: 'recommend', label: '추천매칭', icon: Compass },
                { tab: 'compare', label: '비교행렬', icon: Layers },
                { tab: 'faq', label: '가이드센터', icon: HelpCircle },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = currentTab === item.tab;
                return (
                  <button
                    key={item.tab}
                    id={`tab-btn-${item.tab}`}
                    onClick={() => {
                      setCurrentTab(item.tab as ViewTab);
                      setSelectedProduct(null);
                    }}
                    className={`flex-1 py-1 px-1 flex flex-col items-center justify-center rounded transition-all cursor-pointer relative ${
                      isActive 
                        ? 'text-hp-blue font-semibold' 
                        : 'text-hp-graphite hover:text-hp-ink'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 mb-0.5" />
                    <span className="text-[11px]">{item.label}</span>
                    {isActive && (
                      <motion.div 
                        layoutId="activeSubindicator" 
                        className="absolute bottom-[-13px] left-0 right-0 h-[3px] bg-hp-blue rounded-full" 
                        transition={{ type: 'spring', stiffness: 350, damping: 35 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Simulator Content Area */}
          <div className="flex-1 bg-white overflow-y-auto overflow-x-hidden relative flex flex-col">
            
            <AnimatePresence mode="wait">
              {currentTab === 'home' && (
                <motion.div
                  key="home-screen"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col justify-between flex-grow"
                >
                  {/* HERO ELEMENT */}
                  <div className="p-6 relative overflow-hidden flex-1 flex flex-col justify-center">
                    
                    {/* Decorative HP Slices on frame background to represent alignment */}
                    <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-hp-blue to-hp-blue-bright" />
                    
                    {/* Tiny visual ribbon */}
                    <span className="inline-block self-start text-[10px] font-bold tracking-widest text-hp-blue border border-hp-blue/30 px-2 py-0.5 rounded-sm uppercase bg-hp-blue-soft/30 mb-3.5">
                      HP PARTNER EXCLUSIVES
                    </span>

                    <h2 className="text-2xl font-bold tracking-tight text-hp-ink-deep leading-tight">
                      나에게 꼭 맞는<br />
                      <span className="text-hp-blue relative">노트북 & 프린터</span><br />
                      원클릭으로 찾다
                    </h2>
                    
                    <p className="text-xs text-hp-charcoal mt-3.5 leading-relaxed max-w-xs">
                      비싸고 어려운 스펙 설명은 그만! 본인의 전공, 거창한 희망 게임, 출력 장치 희망 빈도만 선택하고 HP 공식 인증 알고리즘에 따른 최적의 3대 맞춤형 팩을 받아보세요.
                    </p>

                    {/* Integrated dynamic product mockup wheel */}
                    <div className="my-8 flex justify-center items-center relative h-36 bg-hp-cloud rounded-xl overflow-hidden border border-hp-fog">
                      {/* Geometric blueprint background grids */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8e8e8_1px,transparent_1px),linear-gradient(to_bottom,#e8e8e8_1px,transparent_1px)] bg-[size:16px_16px] opacity-60" />
                      
                      {/* Stylized chevrons representing HP parallel lines */}
                      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-3.5 h-10 bg-hp-blue/10 skew-x-[25deg] border-l-2 border-hp-blue" />
                      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-3.5 h-10 bg-hp-blue/10 skew-x-[25deg] border-r-2 border-hp-blue" />

                      <motion.div 
                        initial={{ scale: 0.9, rotate: -2 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3 }}
                        className="z-10 flex gap-1"
                      >
                        <ProductIllustration type="laptop-envy" className="w-32 h-24" />
                        <ProductIllustration type="printer-tank" className="w-20 h-20 self-end -ml-4" />
                      </motion.div>
                    </div>

                    <div className="space-y-4">
                      {/* Feature metrics */}
                      <div className="grid grid-cols-2 gap-3 pb-2">
                        <div className="bg-hp-cloud p-3 rounded-lg border border-hp-fog">
                          <Check className="w-4 h-4 text-hp-blue mb-1" />
                          <div className="text-[11px] font-bold text-hp-ink">비교표 자동 생성</div>
                          <p className="text-[10px] text-hp-graphite mt-0.5">선택 장치들의 성능 메트릭스 한눈에 확인</p>
                        </div>
                        <div className="bg-hp-cloud p-3 rounded-lg border border-hp-fog">
                          <Check className="w-4 h-4 text-hp-blue mb-1" />
                          <div className="text-[11px] font-bold text-hp-ink">잉크·배터리 가이드</div>
                          <p className="text-[10px] text-hp-graphite mt-0.5">유지 단가와 최적 중량에 따른 스마트 산정</p>
                        </div>
                      </div>

                      {/* Launch Recommendation Button */}
                      <button
                        id="start-recommendation-cta"
                        onClick={() => {
                          setStep(1);
                          setCurrentTab('recommend');
                        }}
                        className="w-full py-3.5 px-4 bg-hp-blue text-white rounded-md text-xs font-bold uppercase tracking-wider hover:bg-hp-blue-deep hover:shadow-lg transition-all active:scale-[0.98] pointer flex items-center justify-center gap-1.5"
                      >
                        <span>추천 시작하기</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* HP Foot Banner inside emulator */}
                  <div className="bg-hp-ink text-white p-4 text-center mt-auto border-t border-slate-800">
                    <p className="text-[10px] text-zinc-400 font-mono">POWERED BY HP DESIGN SYSTEM PROTOTYPE</p>
                  </div>
                </motion.div>
              )}

              {currentTab === 'recommend' && (
                <motion.div
                  key="recommendation-wizard"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 flex-1 flex flex-col justify-between"
                >
                  
                  {/* STEPS INDICATOR & LAYOUT EXTRAS */}
                  <div className="flex-1 flex flex-col justify-start">
                    
                    {/* Header tracker line */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-hp-fog">
                      <div>
                        <span className="text-[10px] font-bold text-hp-blue tracking-wider uppercase bg-hp-blue-soft/50 px-2 py-0.5 rounded">STEP 0{step} OF 04</span>
                        <h3 className="text-base font-bold text-hp-ink mt-1">
                          {step === 1 && '사용자 환경 선택'}
                          {step === 2 && '주요 사용 목적 분류'}
                          {step === 3 && '희망 예산 바운더리'}
                          {step === 4 && '휴대 빈도 및 인쇄 소요'}
                        </h3>
                      </div>
                      <div className="flex gap-1.5">
                        {[1, 2, 3, 4].map((i) => (
                          <div 
                            key={i} 
                            className={`w-2 h-2 rounded-full transition-all ${
                              i === step 
                                ? 'bg-hp-blue w-4' 
                                : i < step 
                                  ? 'bg-hp-blue-deep/60' 
                                  : 'bg-hp-steel'
                            }`} 
                          />
                        ))}
                      </div>
                    </div>

                    {/* DYNAMIC STEPS CONTAINER */}
                    <div className="py-2 flex-grow">
                      
                      {/* STEP 1: USER GROUP TYPE */}
                      {step === 1 && (
                        <div className="space-y-3">
                          <p className="text-xs text-hp-graphite leading-relaxed">자신의 현재 신분이나 일상의 주요 업무 환경을 선택해 주시면 라이프스타일에 맞게 기본 우선순위가 정렬됩니다.</p>
                          
                          {[
                            { value: 'student' as const, title: '대학생 / 전공 준비생', desc: '강의 텍스트 타이핑, 휴대성 가벼운 무게, 실속형 올라운더 노트북 및 과제 전용 소형 프린터 선호', icon: User },
                            { value: 'worker' as const, title: '직장인 / 전문 비즈니스', desc: '외근용 배터리 극대화, 철저한 정보 보안 시스템 탑재, 고성능 문서 결재 및 초고속 레이저 복합기 선호', icon: Briefcase },
                            { value: 'any' as const, title: '일반 / 프리랜서 가사', desc: '인터넷 서핑, 재택업무 등 다목적 미디어 소비와 대량 무한 잉크 등 장당 인쇄비 낮은 패키지 중심', icon: Sparkles }
                          ].map((item) => {
                            const Icon = item.icon;
                            const isSel = answers.userType === item.value;
                            return (
                              <button
                                key={item.value}
                                id={`step1-opt-${item.value}`}
                                onClick={() => setAnswers(prev => ({ ...prev, userType: item.value }))}
                                className={`w-full text-left p-3.5 rounded-lg border transition-all pointer flex items-start gap-3.5 ${
                                  isSel 
                                    ? 'border-hp-blue bg-hp-blue-soft/20 shadow-sm' 
                                    : 'border-hp-fog bg-white hover:border-hp-steel'
                                }`}
                              >
                                <div className={`p-2.5 rounded-md ${isSel ? 'bg-hp-blue text-white' : 'bg-hp-cloud text-hp-graphite'}`}>
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-xs font-bold text-hp-ink flex items-center justify-between">
                                    <span>{item.title}</span>
                                    {isSel && <div className="w-1.5 h-1.5 bg-hp-blue rounded-full"></div>}
                                  </div>
                                  <p className="text-[11px] text-hp-charcoal mt-1 leading-normal">{item.desc}</p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* STEP 2: PURPOSE TYPE */}
                      {step === 2 && (
                        <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
                          <p className="text-xs text-hp-graphite">가장 중점적으로 다루게 될 메인 사용 업무 형태를 정해 주세요. 스펙 로직 가중치가 대중적으로 가공됩니다.</p>
                          
                          {[
                            { value: 'documents' as const, title: '과제 / 문서 수시 필기', desc: '오피스 프로그램 기획서 및 보고서 등 문서 처리 적합', icon: FileText },
                            { value: 'coding' as const, title: '코딩 / 빅데이터 프로그래밍', desc: '안정적 RAM 자원, 고강도 CPU 연산력 우선 지표', icon: Code },
                            { value: 'design' as const, title: '사진 가공 / 섬세 디자인', desc: '정확한 디스플레이 색 표현 및 타블렛 펜 터치 지원', icon: Palette },
                            { value: 'video' as const, title: '고배율 영상 / 유튜브 편집', desc: '멀티코어 CPU, 대용량 SSD 및 매끄러운 그래픽 보드 탑재', icon: Video },
                            { value: 'gaming' as const, title: '3D 게임 플레이 / 고사양 CAD', desc: '고주사율 게이밍 특화, 강력한 팬 쿨링 및 RTX 외장 장차', icon: Gamepad2 },
                            { value: 'print_only' as const, title: '프린터 및 전용 복합기 매뉴팩처', desc: '노트북은 기본 탑재, 오직 출력 단가와 인쇄 성능 전용', icon: Printer }
                          ].map((item) => {
                            const Icon = item.icon;
                            const isSel = answers.purpose === item.value;
                            return (
                              <button
                                key={item.value}
                                id={`step2-opt-${item.value}`}
                                onClick={() => setAnswers(prev => ({ ...prev, purpose: item.value }))}
                                className={`w-full text-left p-3.5 rounded-lg border transition-all pointer flex items-center gap-3.5 ${
                                  isSel 
                                    ? 'border-hp-blue bg-hp-blue-soft/20 shadow-sm' 
                                    : 'border-hp-fog bg-white hover:border-hp-steel'
                                }`}
                              >
                                <div className={`p-2 rounded-md ${isSel ? 'bg-hp-blue text-white' : 'bg-hp-cloud text-hp-graphite'}`}>
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-xs font-bold text-hp-ink flex items-center justify-between">
                                    <span>{item.title}</span>
                                    {isSel && <div className="w-1.5 h-1.5 bg-hp-blue rounded-full"></div>}
                                  </div>
                                  <p className="text-[11px] text-hp-charcoal mt-0.5 leading-normal">{item.desc}</p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* STEP 3: BUDGET */}
                      {step === 3 && (
                        <div className="space-y-3">
                          <p className="text-xs text-hp-graphite">소비하고자 하는 알맞은 타협의 예산 한도입니다. 과하게 비싼 기기를 지양하고 알맞은 범주의 추천팩을 제시하기 위함입니다.</p>
                          
                          {[
                            { value: 'under_50' as const, range: '50만원 이하', desc: '가성비 마지노선, 강의용 실속 복합기 중심에 최적인 알뜰 예산' },
                            { value: '50_100' as const, range: '50만원 ~ 100만원 이하', desc: '일반 학업 가성비 보급 노트북, 회전 디스플레이 2-in-1 등이 주축 무대' },
                            { value: '100_150' as const, range: '100만원 ~ 150만원 이하', desc: '안정적인 인공지능 영상 크리에이터, 합리적 고사양 게이밍 매칭' },
                            { value: 'over_150' as const, range: '150만원 초과 최고사양', desc: '기업용 초특급 보안 울트라북 가공 프리미엄 및 고클래스 게이밍 탑탑' }
                          ].map((item) => {
                            const isSel = answers.budget === item.value;
                            return (
                              <button
                                key={item.value}
                                id={`step3-opt-${item.value}`}
                                onClick={() => setAnswers(prev => ({ ...prev, budget: item.value }))}
                                className={`w-full text-left p-3.5 rounded-lg border transition-all pointer flex items-start gap-3.5 ${
                                  isSel 
                                    ? 'border-hp-blue bg-hp-blue-soft/20 shadow-sm' 
                                    : 'border-hp-fog bg-white hover:border-hp-steel'
                                }`}
                              >
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 shrink-0 ${
                                  isSel ? 'border-hp-blue bg-hp-blue text-white' : 'border-hp-steel bg-white'
                                }`}>
                                  {isSel ? <Check className="w-3" /> : <Coins className="w-3 text-hp-graphite" />}
                                </div>
                                <div className="flex-1">
                                  <div className="text-xs font-bold text-hp-ink">
                                    <span>{item.range}</span>
                                  </div>
                                  <p className="text-[11px] text-hp-charcoal mt-1 leading-normal">{item.desc}</p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* STEP 4: PORTABILITY & PRINT FREQUENCY */}
                      {step === 4 && (
                        <div className="space-y-4">
                          <p className="text-xs text-hp-graphite">마지막으로 외부 장비 휴대 빈도수와 자택 안에서의 인쇄 출력 희망 주기를 종합 수렴합니다.</p>
                          
                          {/* Portability toggle */}
                          <div className="space-y-2">
                            <span className="text-xs font-bold text-hp-ink block">외부 이동 및 휴대성 세부 가치</span>
                            <div className="grid grid-cols-3 gap-2">
                              {[
                                { value: 'premium' as const, label: '매년 중시', desc: '1.4kg 이하 가벼움' },
                                { value: 'moderate' as const, label: '보통 수준', desc: '때때로 북카페' },
                                { value: 'any' as const, label: '거치용 무관', desc: '대용량 화면 중심' }
                              ].map((opt) => {
                                const isSelPort = answers.portability === opt.value;
                                return (
                                  <button
                                    key={opt.value}
                                    id={`step4-port-${opt.value}`}
                                    onClick={() => setAnswers(prev => ({ ...prev, portability: opt.value }))}
                                    className={`p-2.5 rounded text-center border transition-all pointer flex flex-col items-center justify-center ${
                                      isSelPort 
                                        ? 'border-hp-blue bg-hp-blue-soft/25 text-hp-blue font-bold text-xs' 
                                        : 'border-hp-fog bg-white text-hp-charcoal hover:border-hp-steel text-[11px]'
                                    }`}
                                  >
                                    <span>{opt.label}</span>
                                    <span className="text-[9px] font-normal text-hp-graphite mt-0.5">{opt.desc}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Print Frequency toggle */}
                          <div className="space-y-2 pt-2 border-t border-hp-fog">
                            <span className="text-xs font-bold text-hp-ink block">자료 인쇄 이력 및 복합기 빈도</span>
                            <div className="grid grid-cols-3 gap-2">
                              {[
                                { value: 'frequently' as const, label: '매일/수시 출력', desc: '정기 시험지/스캔' },
                                { value: 'rarely' as const, label: '가끔 행정인쇄', desc: '증명서/필요시만' },
                                { value: 'none' as const, label: '출력소요 없음', desc: '올인원 불필요' }
                              ].map((opt) => {
                                const isSelPrint = answers.printFrequency === opt.value;
                                return (
                                  <button
                                    key={opt.value}
                                    id={`step4-print-${opt.value}`}
                                    onClick={() => setAnswers(prev => ({ ...prev, printFrequency: opt.value }))}
                                    className={`p-2.5 rounded text-center border transition-all pointer flex flex-col items-center justify-center ${
                                      isSelPrint 
                                        ? 'border-hp-blue bg-hp-blue-soft/25 text-hp-blue font-bold text-xs' 
                                        : 'border-hp-fog bg-white text-hp-charcoal hover:border-hp-steel text-[11px]'
                                    }`}
                                  >
                                    <span>{opt.label}</span>
                                    <span className="text-[9px] font-normal text-hp-graphite mt-0.5">{opt.desc}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Persona confirmation card indicator */}
                          <div className="p-3 bg-hp-cloud rounded border border-hp-fog flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <ShieldCheck className="w-4 h-4 text-hp-blue" />
                              <div className="text-[11px] text-hp-ink tracking-tight">
                                <span className="font-bold text-hp-blue">HP 공식 매칭 알고리즘</span> 준비 완료
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                  {/* BOTTOM ACTION BUTTONS FRAME */}
                  <div className="flex justify-between items-center gap-3 pt-3 mt-4 border-t border-hp-fog">
                    {step > 1 ? (
                      <button
                        id="wizard-prev-btn"
                        onClick={() => setStep(prev => prev - 1)}
                        className="py-3 px-5 rounded border border-hp-steel bg-white text-hp-ink text-xs font-bold uppercase tracking-wide hover:border-hp-ink cursor-pointer pointer active:scale-[0.98] transition-all"
                      >
                        이전
                      </button>
                    ) : (
                      <div className="w-[10px]" />
                    )}

                    {step < 4 ? (
                      <button
                        id="wizard-next-btn"
                        onClick={() => setStep(prev => prev + 1)}
                        className="py-3 px-6 bg-hp-blue text-white rounded text-xs font-bold uppercase tracking-wider hover:bg-hp-blue-deep flex items-center gap-1 cursor-pointer pointer active:scale-[0.98] transition-all"
                      >
                        <span>다음 질문</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        id="wizard-submit-btn"
                        onClick={viewResults}
                        className="flex-1 py-3 px-6 bg-hp-blue text-white rounded text-xs font-bold uppercase tracking-wider hover:bg-hp-blue-deep flex items-center justify-center gap-1.5 animate-pulse cursor-pointer pointer active:scale-[0.98] transition-all"
                      >
                        <span>결과 확인하기</span>
                        <Sparkles className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                </motion.div>
              )}

              {/* RECOMMENDED MATCHES PRODUCT TILES LIST */}
              {currentTab === 'recommend' && step === 4 && (
                <motion.div
                  key="results-screen"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="p-4 space-y-4"
                >
                  <div className="text-center pb-2 border-b border-hp-fog">
                    <span className="text-[10px] font-mono text-hp-blue font-bold tracking-widest uppercase bg-hp-blue-soft/30 px-2 py-0.5 rounded-sm">SPEC MATCHING COMPLETE</span>
                    <h4 className="text-xs font-bold text-hp-ink mt-1.5 leading-tight">
                      선택하신 특성 기준 <span className="text-hp-blue">가장 매치율 높은 3가지 카드</span>
                    </h4>
                  </div>

                  {recommendedItems.map((prod, index) => {
                    return (
                      <div
                        key={prod.id}
                        id={`product-card-${prod.id}`}
                        className={`bg-white rounded-2xl p-4 border relative shadow-sm hover:shadow-md transition-all ${
                          prod.bestMatch 
                            ? 'border-hp-blue shadow-[0_4px_16px_rgba(2,74,216,0.08)]' 
                            : 'border-hp-fog'
                        }`}
                      >
                        {/* Highlights Indicator Badges */}
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-hp-graphite flex items-center gap-1">
                            {prod.type === 'laptop' ? <Laptop className="w-3 h-3 text-hp-blue" /> : <Printer className="w-3 h-3 text-hp-blue" />}
                            <span>{prod.type === 'laptop' ? 'LAPTOP' : 'PRINTER/ALL-IN-ONE'}</span>
                          </span>

                          <div className="flex gap-1 items-center">
                            {prod.bestMatch && (
                              <span className="text-[9px] font-bold text-white bg-hp-blue px-2 py-0.5 rounded-sm tracking-wider uppercase">
                                BEST MATCH
                              </span>
                            )}
                            <span className="text-[10px] font-mono font-bold text-hp-blue bg-hp-blue-soft/40 px-1.5 py-0.5 rounded">
                              {prod.matchScore}% 일치
                            </span>
                          </div>
                        </div>

                        {/* Title & Tagline */}
                        <h4 className="text-sm font-bold text-hp-ink-deep flex items-center justify-between">
                          <span>{prod.name}</span>
                          <span className="text-sm font-black text-hp-blue">{prod.price}</span>
                        </h4>
                        <p className="text-[10px] text-hp-graphite mt-1 leading-normal line-clamp-1">{prod.tagline}</p>

                        {/* Middle Render Illustration */}
                        <div className="my-3 py-2 bg-hp-cloud rounded-lg flex items-center justify-center p-2 border border-hp-fog text-center">
                          <ProductIllustration type={prod.image} className="w-24 h-18" />
                          <div className="text-left ml-3 flex-1 border-l border-hp-fog pl-2.5">
                            <span className="text-[9px] font-mono font-bold text-hp-blue uppercase block mb-0.5">ENGINEER REASON</span>
                            <p className="text-[10px] text-hp-charcoal leading-relaxed line-clamp-2 md:line-clamp-3">{prod.recommendationReason}</p>
                          </div>
                        </div>

                        {/* Core Features bullets */}
                        <div className="space-y-1">
                          {prod.highlights.slice(0, 2).map((h, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-[10px] text-hp-charcoal leading-none">
                              <Check className="w-3 h-3 text-hp-blue shrink-0" />
                              <span className="truncate">{h}</span>
                            </div>
                          ))}
                        </div>

                        {/* Specs overview drawer trigger */}
                        <div className="mt-3.5 pt-2.5 border-t border-hp-fog flex justify-between gap-2.5">
                          <button
                            id={`view-specs-btn-${prod.id}`}
                            onClick={() => setSelectedProduct(prod)}
                            className="flex-1 py-1 px-3 bg-hp-cloud hover:bg-hp-fog border border-hp-steel text-hp-ink text-[11px] font-semibold rounded transition-all pointer uppercase tracking-wider text-center"
                          >
                            자세히 보기
                          </button>
                        </div>
                      </div>
                    );
                  })}

                  {/* Reset action in order to go again */}
                  <div className="pt-3 flex gap-2 justify-center">
                    <button
                      id="reset-answers-bottom-btn"
                      onClick={resetAll}
                      className="text-xs text-hp-blue font-bold hover:underline py-1"
                    >
                      처음부터 다시하기
                    </button>
                    <span className="text-hp-steel">|</span>
                    <button
                      id="go-compare-table-bottom-btn"
                      onClick={() => setCurrentTab('compare')}
                      className="text-xs text-hp-ink font-bold hover:underline py-1"
                    >
                      상세 제품 비교표 보기
                    </button>
                  </div>
                </motion.div>
              )}

              {/* PRODUCT COMPARISON SCREEN */}
              {currentTab === 'compare' && (
                <motion.div
                  key="compare-screen"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-5 space-y-4"
                >
                  <div className="text-center pb-1 border-b border-hp-fog">
                    <span className="text-[10px] font-mono text-hp-blue font-bold tracking-widest uppercase bg-hp-blue-soft/30 px-2 py-0.5 rounded-sm">HP MATRIX BENCHMARK</span>
                    <h3 className="text-base font-bold text-hp-ink mt-1">추천 제품 비교 매트릭스</h3>
                    <p className="text-[10px] text-hp-graphite mt-1">예산 사양 한도 내의 기종들을 일원화 비교 가공했습니다.</p>
                  </div>

                  {/* Desktop / Mobile Card-based responsive comparison cards */}
                  <div className="space-y-4">
                    {recommendedItems.map((prod) => {
                      return (
                        <div 
                          key={prod.id}
                          className={`bg-white border rounded-xl p-4 shadow-sm space-y-2.5 ${
                            prod.bestMatch ? 'border-hp-blue shadow-[0_2px_12px_rgba(2,74,216,0.06)]' : 'border-hp-fog'
                          }`}
                        >
                          <div className="flex justify-between items-center pb-2 border-b border-hp-fog">
                            <div className="flex items-center gap-1.5">
                              <span className={`p-1 rounded ${prod.type === 'laptop' ? 'bg-hp-blue-soft/40 text-hp-blue' : 'bg-[#e8e8e8] text-hp-ink'}`}>
                                {prod.type === 'laptop' ? <Laptop className="w-3 h-3" /> : <Printer className="w-3 h-3" />}
                              </span>
                              <span className="text-xs font-bold text-hp-ink-deep">{prod.name}</span>
                            </div>
                            {prod.bestMatch && (
                              <span className="text-[9px] font-bold text-white bg-hp-blue px-2 py-0.5 rounded-sm">BEST MATCH</span>
                            )}
                          </div>

                          {/* Spec Matrix List */}
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] text-hp-charcoal">
                            <div>
                              <span className="text-hp-graphite font-mono block text-[10px] uppercase">가격 (Price)</span>
                              <span className="font-bold text-hp-ink mt-0.5 block">{prod.specs.price}</span>
                            </div>
                            <div>
                              <span className="text-hp-graphite font-mono block text-[10px] uppercase">기기 무개 (Weight)</span>
                              <span className="font-medium text-hp-ink mt-0.5 block">{prod.specs.weight}</span>
                            </div>
                            <div>
                              <span className="text-hp-graphite font-mono block text-[10px] uppercase">배터리 타임 (Battery)</span>
                              <span className="font-medium text-hp-ink mt-0.5 block">{prod.specs.battery}</span>
                            </div>
                            <div>
                              <span className="text-hp-graphite font-mono block text-[10px] uppercase">성능 등급 (Performance)</span>
                              <span className="font-medium text-hp-ink mt-0.5 block">{prod.specs.performance}</span>
                            </div>
                            <div>
                              <span className="text-hp-graphite font-mono block text-[10px] uppercase">휴대성 지수 (Portability)</span>
                              <span className="font-medium text-hp-ink mt-0.5 block">{prod.specs.portability}</span>
                            </div>
                            <div>
                              <span className="text-hp-graphite font-mono block text-[10px] uppercase">추천 용도 (Best Use)</span>
                              <span className="font-semibold text-hp-blue mt-0.5 block truncate pr-1" title={prod.specs.useCase}>{prod.specs.useCase}</span>
                            </div>
                          </div>

                          {/* Technical extra details badge */}
                          <div className="pt-2 border-t border-hp-fog flex justify-between items-center">
                            <span className="text-[9px] font-mono text-hp-graphite">특화 탑재: {prod.specs.customSpecDetail || '기본탑재'}</span>
                            <button
                              id={`spec-drawer-compare-trigger-${prod.id}`}
                              onClick={() => setSelectedProduct(prod)}
                              className="text-[10px] text-hp-blue font-bold flex items-center justify-center hover:underline"
                            >
                              <span>기술 스펙</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* ACCORDION FAQ HELP SECTION */}
              {currentTab === 'faq' && (
                <motion.div
                  key="faq-screen"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-5 space-y-4"
                >
                  <div className="text-center pb-2 border-b border-hp-fog">
                    <HelpCircle className="w-6 h-6 text-hp-blue mx-auto mb-1.5" />
                    <span className="text-[10px] font-mono text-hp-blue font-bold tracking-widest uppercase bg-hp-blue-soft/30 px-2 py-0.5 rounded-sm">HP CUSTOMER GUIDE</span>
                    <h3 className="text-base font-bold text-hp-ink mt-1">대학생·직장인 가이드 센터</h3>
                    <p className="text-[10px] text-hp-graphite mt-1">초보자분들이 노트북이나 프린터를 가공 수급하며 헷갈리는 질문들입니다.</p>
                  </div>

                  {/* Accordion Layout */}
                  <div className="space-y-3">
                    {FAQ_ITEMS.map((faq, index) => {
                      const isExpanded = expandedFaq === index;
                      return (
                        <div
                          key={index}
                          id={`faq-row-${index}`}
                          className="bg-white border border-hp-fog rounded-xl overflow-hidden transition-all shadow-sm hover:border-hp-steel"
                        >
                          <button
                            id={`faq-btn-${index}`}
                            onClick={() => setExpandedFaq(isExpanded ? null : index)}
                            className="w-full text-left p-4 flex justify-between items-center bg-white text-xs font-bold text-hp-ink-deep leading-tight pointer cursor-pointer"
                          >
                            <span className="pr-3 flex items-start">
                              <span className="text-hp-blue mr-2 font-mono font-black">Q.</span>
                              <span>{faq.question}</span>
                            </span>
                            <span className="shrink-0">
                              {isExpanded ? (
                                <ChevronDown className="w-4 h-4 text-hp-blue transform rotate-180 transition-transform" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-hp-graphite transition-transform" />
                              )}
                            </span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="border-t border-hp-fog bg-hp-cloud p-4 text-[11px] text-hp-charcoal leading-relaxed"
                              >
                                {faq.answer}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>

                  {/* Support banner card */}
                  <div className="bg-hp-ink text-white p-4 rounded-xl relative overflow-hidden border border-slate-700 mt-4 text-center">
                    <p className="text-[10px] text-zinc-400">찾으시는 솔루션 정보가 존재하지 않나요?</p>
                    <span className="text-xs font-bold mt-1.5 block">HP 1:1 Live 상담 센터 연결</span>
                    <button
                      id="live-chat-link-btn"
                      onClick={() => alert("HP Live 챗봇 상담 데스크 링크를 로드 중입니다 (본 기기는 시제품 데모 모드입니다).")}
                      className="mt-3 inline-block bg-white text-hp-blue font-bold px-4 py-1.5 text-[10px] uppercase rounded-sm cursor-pointer hover:bg-hp-blue-soft hover:text-hp-blue transition-colors"
                    >
                      채팅 채널 개설하기
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* DETAIL DRAWER SLIDE-UP SPEC MODAL */}
          <AnimatePresence>
            {selectedProduct && (
              <motion.div 
                id="drawer-backdrop"
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-[#000000]/60 z-50 flex items-end justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Panel Drawer container */}
                <motion.div
                  id="drawer-content-container"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full bg-white rounded-t-3xl p-6 border-t border-hp-steel flex flex-col justify-between max-h-[85%] overflow-y-auto"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%' }}
                  transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                >
                  <div className="space-y-4">
                    {/* Header with close icon */}
                    <div className="flex justify-between items-start pb-2 border-b border-hp-fog">
                      <div>
                        <span className="text-[10px] font-mono font-bold tracking-widest text-hp-blue bg-hp-blue-soft/50 px-2 py-0.5 rounded uppercase">HP ENGINEERING DIRECTORY</span>
                        <h3 className="text-base font-bold text-hp-ink mt-1">{selectedProduct.name} SPEC</h3>
                        <p className="text-[10px] text-hp-graphite mt-0.5">{selectedProduct.tagline}</p>
                      </div>
                      <button
                        id="close-drawer-btn"
                        onClick={() => setSelectedProduct(null)}
                        className="p-1 px-1.5 bg-hp-cloud text-hp-ink hover:text-hp-blue rounded-full pointer cursor-pointer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Image visual section */}
                    <div className="py-4 bg-hp-cloud rounded-xl flex items-center justify-center p-2 border border-hp-fog relative overflow-hidden">
                      {selectedProduct.bestMatch && (
                        <div className="absolute top-2.5 right-2 text-[9px] font-bold text-white bg-hp-blue px-2 py-0.5 rounded">BEST INDEX</div>
                      )}
                      <ProductIllustration type={selectedProduct.image} className="w-36 h-24" />
                    </div>

                    {/* Specs Bullet Grid lists */}
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-hp-ink block">핵심 기술 사양 (Engineering Specs)</span>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 bg-hp-cloud rounded border border-hp-fog">
                          <span className="text-[9px] font-mono text-hp-graphite block uppercase">제조 가격 (Value)</span>
                          <span className="font-bold text-hp-ink mt-0.5 block">{selectedProduct.specs.price}</span>
                        </div>
                        <div className="p-2.5 bg-hp-cloud rounded border border-hp-fog">
                          <span className="text-[9px] font-mono text-hp-graphite block uppercase">초경량 중량 (Weight)</span>
                          <span className="font-medium text-hp-ink mt-0.5 block">{selectedProduct.specs.weight}</span>
                        </div>
                        <div className="p-2.5 bg-hp-cloud rounded border border-hp-fog">
                          <span className="text-[9px] font-mono text-hp-graphite block uppercase">배터리 가동 (Battery)</span>
                          <span className="font-medium text-hp-ink mt-0.5 block">{selectedProduct.specs.battery}</span>
                        </div>
                        <div className="p-2.5 bg-hp-cloud rounded border border-hp-fog">
                          <span className="text-[9px] font-mono text-hp-graphite block uppercase">수행 등급 (Power Index)</span>
                          <span className="font-semibold text-hp-blue mt-0.5 block">{selectedProduct.specs.performance}</span>
                        </div>
                      </div>

                      {/* Technical extra lists */}
                      <div className="p-3 bg-[#e8e8e8]/50 rounded text-xs space-y-1 text-hp-charcoal">
                        <div className="flex justify-between"><span className="text-hp-graphite">특화 탑재 구성</span><span className="font-semibold text-hp-ink">{selectedProduct.specs.customSpecDetail || '기본 탑재'}</span></div>
                        <div className="flex justify-between"><span className="text-hp-graphite">추천 최적 용도</span><span className="font-semibold text-hp-blue truncate max-w-[150px]" title={selectedProduct.specs.useCase}>{selectedProduct.specs.useCase}</span></div>
                      </div>

                      {/* 3 Full Bullet list highlights */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[11px] font-bold text-hp-ink uppercase block">엔지니어 주요 피코 꼽기</span>
                        {selectedProduct.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-[11px] text-hp-charcoal leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-hp-blue shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Close drawer cta */}
                  <button
                    id="confirm-drawer-close-cta"
                    onClick={() => setSelectedProduct(null)}
                    className="w-full mt-6 py-3 px-4 bg-hp-ink text-white rounded text-xs font-bold uppercase tracking-wider hover:bg-hp-ink-deep pointer"
                  >
                    확인 및 닫기
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Simple simulated home bar footer gesture */}
          <div className="h-4 bg-white flex items-center justify-center pb-1">
            <div className="w-28 h-1 bg-[#d0d4d9] rounded-full"></div>
          </div>

        </div>

      </div>

    </div>
  );
};
