/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type UserType = 'student' | 'worker' | 'any';

export type PurposeType = 'documents' | 'coding' | 'design' | 'video' | 'gaming' | 'print_only';

export type BudgetType = 'under_50' | '50_100' | '100_150' | 'over_150';

export type PortabilityType = 'premium' | 'moderate' | 'any';

export type PrintFrequencyType = 'none' | 'rarely' | 'frequently';

export interface SelectionState {
  userType: UserType;
  purpose: PurposeType;
  budget: BudgetType;
  portability: PortabilityType;
  printFrequency: PrintFrequencyType;
}

export type ProductType = 'laptop' | 'printer';

export interface Product {
  id: string;
  name: string;
  type: ProductType;
  tagline: string;
  price: string;
  priceNum: number;
  image: string;
  matchScore: number;
  bestMatch: boolean;
  recommendationReason: string;
  highlights: string[];
  specs: {
    price: string;
    weight: string;
    battery: string;
    performance: string;
    portability: string;
    useCase: string;
    customSpecDetail?: string; // e.g. "스캔/복사 지원", "RTX 4060 탑재"
  };
}

export interface FAQEntry {
  question: string;
  answer: string;
}

export type ViewTab = 'home' | 'recommend' | 'compare' | 'faq';
