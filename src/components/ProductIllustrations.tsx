/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface IllustrationProps {
  type: string;
  className?: string;
}

export const ProductIllustration: React.FC<IllustrationProps> = ({ type, className = 'w-48 h-32' }) => {
  // Return sleek, modern vector representations matching HP products
  switch (type) {
    case 'laptop-silver':
      return (
        <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Screen area */}
          <rect x="25" y="15" width="150" height="90" rx="4" fill="#1a1a1a" />
          <rect x="29" y="19" width="142" height="77" rx="2" fill="#3a3a3a" />
          {/* Wallpaper screen graphic (pure minimalist HP style) */}
          <path d="M29 65C60 40 110 90 171 45V96H29V65Z" fill="#024ad8" fillOpacity="0.15" />
          <path d="M50 96C90 70 140 100 171 70V96H50Z" fill="#024ad8" fillOpacity="0.3" />
          {/* Logo on bottom bezel */}
          <circle cx="100" cy="101" r="2.5" fill="#c2c2c2" />
          {/* Laptop Base */}
          <path d="M10 105H190V109C190 111.2 188.2 113 186 113H14C11.8 113 10 111.2 10 109V105Z" fill="#c2c2c2" />
          <rect x="15" y="105" width="170" height="2" fill="#a8a8a8" />
          {/* Trackpad */}
          <rect x="85" y="107" width="30" height="4" rx="1" fill="#e8e8e8" />
          {/* Keyboard subtle indicator */}
          <rect x="35" y="106" width="130" height="1" fill="#999999" />
        </svg>
      );

    case 'laptop-convertible':
      return (
        <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Tent style convertible laptop */}
          <path d="M100 20L170 100H155L100 37L45 100H30L100 20Z" fill="#292929" />
          <path d="M100 24L164 96H152L100 39L48 96H36L100 24Z" fill="#1a1a1a" />
          {/* Screen glow inside tent */}
          <path d="M100 39L152 96H48L100 39Z" fill="#024ad8" fillOpacity="0.1" />
          {/* Stylus active HP Pen lying on table */}
          <rect x="70" y="106" width="60" height="4" rx="1" transform="rotate(-5 100 108)" fill="#636363" />
          <path d="M130 103.5L135 102.5V105.5L130 103.5Z" fill="#1a1a1a" />
          {/* Table surface line */}
          <line x1="10" y1="110" x2="190" y2="110" stroke="#e8e8e8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'laptop-gaming-victus':
      return (
        <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bezel frame with sharp edges */}
          <rect x="25" y="12" width="150" height="92" rx="2" fill="#1e2229" />
          <rect x="28" y="15" width="144" height="78" rx="1" fill="#0c0d12" />
          {/* Visual screen game landscape */}
          <circle cx="100" cy="50" r="25" fill="#356373" fillOpacity="0.4" />
          <path d="M28 85 L60 65 L90 80 L130 55 L172 88 V93 H28 Z" fill="#024ad8" fillOpacity="0.2" />
          <path d="M60 93 L100 75 L140 85 L172 65 V93 Z" fill="#296ef9" fillOpacity="0.2" />
          {/* Distinctive Victus V logo on bezel bottom */}
          <path d="M96 95.5 L100 100.5 L104 95.5 H101.5 L100 97.5 L98.5 95.5 H96 Z" fill="#ffffff" />
          {/* Base setup with dark profile & blue accents */}
          <path d="M8 104H192V108C192 110 190.5 111.5 188.5 111.5H11.5C9.5 111.5 8 110 8 108V104Z" fill="#1e2229" />
          <rect x="15" y="104" width="170" height="2" fill="#0f1115" />
          {/* Dynamic LED light strip under base */}
          <line x1="40" y1="110.5" x2="160" y2="110.5" stroke="#296ef9" strokeWidth="1" strokeOpacity="0.8" />
        </svg>
      );

    case 'laptop-envy':
      return (
        <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* High end super thin Bezel designer laptop */}
          <rect x="22" y="13" width="156" height="92" rx="3" fill="#111" />
          {/* OLED colorful spectrum wallpaper */}
          <rect x="24" y="15" width="152" height="79" rx="1" fill="#141416" />
          <circle cx="100" cy="50" r="38" fill="url(#envyGrad)" />
          {/* Definition and gradients */}
          <defs>
            <radialGradient id="envyGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff5050" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#296ef9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#356373" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path d="M24 75Q70 40 110 80T176 65V94H24V75Z" fill="#024ad8" fillOpacity="0.25" />
          {/* Shiny metallic base */}
          <path d="M6 105H194V108C194 110.5 192 112 189.5 112H10.5C8 112 6 110.5 6 108V105Z" fill="#e8e8e8" />
          <rect x="12" y="105" width="176" height="2" fill="#ffffff" />
          <rect x="80" y="107" width="40" height="3" rx="1.5" fill="#c2c2c2" />
        </svg>
      );

    case 'laptop-elite':
      return (
        <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* EliteBook - absolute professional premium workspace silver */}
          <rect x="24" y="16" width="152" height="88" rx="5" fill="#2d3033" />
          <rect x="27" y="19" width="146" height="74" rx="2" fill="#f7f7f7" />
          {/* Corporate elegant architecture wallpaper, HP logo */}
          <rect x="27" y="19" width="146" height="74" rx="2" fill="#101827" />
          <circle cx="100" cy="50" r="16" fill="#1c2536" />
          {/* Clean linear accent representing premium build */}
          <line x1="88" y1="44" x2="112" y2="56" stroke="#024ad8" strokeWidth="2" />
          <line x1="88" y1="56" x2="112" y2="44" stroke="#296ef9" strokeWidth="2" />
          {/* Super light aluminium base */}
          <path d="M12 104H188V107C188 110 186 111 183 111H17C14 111 12 110 12 107V104Z" fill="#d0d4d9" />
          <rect x="16" y="104" width="168" height="1.5" fill="#ffffff" />
          <rect x="88" y="106.5" width="24" height="2.5" rx="1" fill="#a4aab3" />
        </svg>
      );

    case 'laptop-gaming-omen':
      return (
        <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* OMEN extreme flagship gaming laptop */}
          <rect x="22" y="12" width="156" height="92" rx="3" fill="#141416" />
          <rect x="25" y="15" width="150" height="78" rx="1" fill="#08080a" />
          {/* Intense neon gaming display background */}
          <circle cx="100" cy="54" r="28" fill="#ff5050" fillOpacity="0.25" />
          <path d="M25 78 C60 50 110 88 175 60 V93 H25 V78 Z" fill="#024ad8" fillOpacity="0.3" />
          <path d="M50 93 C80 70 120 100 175 80 V93 H50 Z" fill="#ff5050" fillOpacity="0.15" />
          {/* Glowing central diamond OMEN element on screen */}
          <rect x="94" y="32" width="12" height="12" fill="#ff5050" transform="rotate(45 100 38)" />
          {/* Sharp massive black heavy performance base */}
          <path d="M5 103H195V108V113H5V103Z" fill="#141416" fillOpacity="0.95" />
          {/* RGB color strips at bottom */}
          <rect x="15" y="103" width="170" height="2" fill="#0b0b0d" />
          <rect x="30" y="106" width="30" height="1" fill="#ff5050" />
          <rect x="70" y="106" width="60" height="1" fill="#024ad8" />
          <rect x="140" y="106" width="30" height="1" fill="#296ef9" />
          <rect x="85" y="109" width="30" height="2" rx="1" fill="#c9e0fc" fillOpacity="0.2" />
        </svg>
      );

    case 'printer-compact':
      return (
        <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Paper loading from back */}
          <rect x="65" y="15" width="70" height="35" rx="2" fill="#ffffff" stroke="#c2c2c2" strokeWidth="1" />
          <line x1="75" y1="25" x2="125" y2="25" stroke="#e8e8e8" strokeWidth="1" />
          <line x1="75" y1="32" x2="115" y2="32" stroke="#e8e8e8" strokeWidth="1" />
          
          {/* Printer Main Frame */}
          <rect x="40" y="45" width="120" height="52" rx="6" fill="#f7f7f7" stroke="#e8e8e8" strokeWidth="1.5" />
          <rect x="45" y="50" width="110" height="43" rx="4" fill="#ffffff" />
          
          {/* Status buttons & control panel */}
          <rect x="52" y="56" width="16" height="12" rx="1" fill="#e8e8e8" />
          <circle cx="56" cy="62" r="2" fill="#024ad8" />
          <circle cx="64" cy="62" r="1.5" fill="#c2c2c2" />
          
          {/* Paper slot & Output paper */}
          <rect x="52" y="78" width="96" height="5" rx="1" fill="#1a1a1a" />
          <rect x="58" y="81" width="84" height="25" rx="1" fill="#ffffff" stroke="#e8e8e8" />
          {/* Sample printed lines */}
          <line x1="68" y1="88" x2="132" y2="88" stroke="#636363" strokeWidth="1" />
          <line x1="68" y1="94" x2="120" y2="94" stroke="#636363" strokeWidth="1" />
          <line x1="68" y1="100" x2="110" y2="100" stroke="#024ad8" strokeWidth="1" />
          
          {/* Logo */}
          <circle cx="100" cy="60" r="4" fill="#024ad8" />
          <line x1="99" y1="58" x2="99" y2="62" stroke="#ffffff" strokeWidth="1" />
          <line x1="101" y1="58" x2="101" y2="62" stroke="#ffffff" strokeWidth="1" />
        </svg>
      );

    case 'printer-tank':
      return (
        <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Smart Tank - heavy duty ink tanks visible */}
          <rect x="62" y="10" width="76" height="30" rx="1" fill="#e8e8e8" />
          {/* Main heavy square chassis */}
          <rect x="35" y="36" width="130" height="66" rx="8" fill="#1d2229" />
          <rect x="42" y="42" width="116" height="54" rx="4" fill="#2d333f" />
          
          {/* Blue Accent and HP smart tank logo */}
          <circle cx="100" cy="56" r="6" fill="#024ad8" />
          <path d="M98 54L98 58M102 54L102 58" stroke="#ffffff" strokeWidth="1" />
          
          {/* Ink levels visible windows at the right bottom */}
          <rect x="124" y="68" width="26" height="20" rx="1" fill="#0f1115" />
          {/* Ink color cells */}
          <rect x="127" y="71" width="4" height="14" fill="#00ffff" /> {/* C */}
          <rect x="133" y="71" width="4" height="14" fill="#ff00ff" /> {/* M */}
          <rect x="139" y="71" width="4" height="14" fill="#ffff00" /> {/* Y */}
          <rect x="145" y="71" width="4" height="11" fill="#1a1a1a" /> {/* K */}
          
          {/* Paper tray pull-out */}
          <rect x="48" y="78" width="70" height="3" fill="#000" />
          <rect x="52" y="80" width="62" height="30" rx="1" fill="#ffffff" stroke="#e8e8e8" />
          
          {/* Graphics printed */}
          <rect x="60" y="86" width="46" height="18" fill="#f7f7f7" />
          <circle cx="70" cy="95" r="5" fill="#ff5050" />
          <path d="M80 92L96 92" stroke="#024ad8" strokeWidth="1.5" />
          <path d="M80 97L96 97" stroke="#636363" strokeWidth="1.5" />
        </svg>
      );

    case 'printer-laser':
      return (
        <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* LaserJet Pro - solid square white visual style with dark accents */}
          <rect x="40" y="24" width="120" height="74" rx="4" fill="#ffffff" stroke="#c2c2c2" strokeWidth="1" />
          {/* Scanner top cover - contrasting dark gray */}
          <rect x="36" y="20" width="128" height="12" rx="3" fill="#1c2536" />
          <rect x="42" y="26" width="116" height="2" fill="#356373" />
          
          {/* HP Logo on center front */}
          <circle cx="100" cy="55" r="5" fill="#024ad8" />
          <path d="M98.5 53V57M101.5 53V57" stroke="#ffffff" strokeWidth="1" />
          
          {/* Front operation screen panel */}
          <rect x="44" y="38" width="22" height="16" rx="1.5" fill="#1c2536" />
          <rect x="47" y="41" width="16" height="10" fill="#296ef9" fillOpacity="0.4" />
          <circle cx="49" cy="46" r="1.5" fill="#fff" />
          
          {/* Major paper feeder compartment */}
          <rect x="48" y="70" width="104" height="22" rx="2" fill="#f4f5f7" />
          <rect x="90" y="80" width="20" height="4" rx="1" fill="#c2c2c2" />
          
          {/* Output collection tray with printed paper stack */}
          <rect x="52" y="58" width="96" height="4" fill="#1c2536" />
          <rect x="58" y="50" width="84" height="8" fill="#ffffff" stroke="#dcdcdc" />
          {/* Fine laser print lines representation */}
          <line x1="68" y1="53" x2="132" y2="53" stroke="#111111" strokeWidth="1" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" rx="4" fill="#f7f7f7" />
          <circle cx="100" cy="60" r="15" fill="#e8e8e8" />
          <path d="M85 60H115" stroke="#c2c2c2" strokeWidth="2" />
        </svg>
      );
  }
};
