import React from 'react';
import { motion } from 'framer-motion';

/**
 * PremiumIcon component for EcoTS Residencies & Engineering
 * Renders luxury 3D-styled vector icons, glowing glassmorphic icon badges,
 * metallic gradients, and custom real-estate/civil engineering symbols.
 */

// Unique SVG Gradients Definition Component (rendered once globally or inline)
export function PremiumIconGradients() {
  return (
    <svg width="0" height="0" className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
      <defs>
        {/* Emerald Luxury Gradient */}
        <linearGradient id="grad-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="50%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        {/* Gold Metallic Gradient */}
        <linearGradient id="grad-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="45%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        {/* Sapphire / Cyan Tech Gradient */}
        <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>

        {/* Pearl White Gradient */}
        <linearGradient id="grad-pearl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>

        {/* Ruby Coral Gradient */}
        <linearGradient id="grad-ruby" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F87171" />
          <stop offset="50%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#DC2626" />
        </linearGradient>

        {/* Amethyst Violet Gradient */}
        <linearGradient id="grad-violet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="50%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#7E22CE" />
        </linearGradient>

        {/* 3D Glass Gloss Highlight */}
        <linearGradient id="grad-gloss" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
          <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
        </linearGradient>

        {/* Drop Shadow Filters */}
        <filter id="glow-shadow-emerald" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#10B981" floodOpacity="0.35" />
        </filter>

        <filter id="glow-shadow-gold" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#F59E0B" floodOpacity="0.4" />
        </filter>

        <filter id="glow-shadow-cyan" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0284C7" floodOpacity="0.35" />
        </filter>
      </defs>
    </svg>
  );
}

// Custom 3D & Flat Vector SVGs inspired by Flaticon premium real-estate & luxury icons
const CUSTOM_ICONS = {
  // 3D Luxury High-Rise Building / Township
  building: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="14" height="20" rx="3" fill="url(#grad-emerald)" />
      <rect x="14" y="4" width="14" height="24" rx="3" fill="url(#grad-gold)" />
      <path d="M7 12H11M7 16H11M7 20H11M7 24H11" stroke="#064E3B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 8H21M17 12H21M17 16H21M17 20H21M17 24H21" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="21" cy="6" r="1.5" fill="#FEF3C7" />
    </svg>
  ),

  // 3D Master Bedroom Suite
  bedroom: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="10" width="26" height="12" rx="4" fill="url(#grad-cyan)" />
      <path d="M5 10V6C5 4.89543 5.89543 4 7 4H25C26.1046 4 27 4.89543 27 6V10" fill="url(#grad-emerald)" opacity="0.9" />
      <rect x="6" y="7" width="8" height="4" rx="1.5" fill="#FFFFFF" opacity="0.9" />
      <rect x="18" y="7" width="8" height="4" rx="1.5" fill="#FFFFFF" opacity="0.9" />
      <path d="M4 22V27M28 22V27" stroke="url(#grad-gold)" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="3" y="16" width="26" height="6" fill="url(#grad-gold)" opacity="0.85" />
    </svg>
  ),

  // 3D Luxury Freestanding Bath
  bath: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 14C4 12.8954 4.89543 12 6 12H26C27.1046 12 28 12.8954 28 14V18C28 22.4183 24.4183 26 20 26H12C7.58172 26 4 22.4183 4 18V14Z" fill="url(#grad-cyan)" />
      <path d="M7 6V10M7 6C7 4.89543 7.89543 4 9 4H10C11.1046 4 12 4.89543 12 6V8" stroke="url(#grad-gold)" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 26L4 29M26 26L28 29" stroke="url(#grad-gold)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="16" cy="17" r="1.5" fill="#E0F2FE" />
      <circle cx="21" cy="16" r="1" fill="#E0F2FE" />
    </svg>
  ),

  // 3D Solar / Eco Leaf Energy
  solar: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3C22 3 28 9 28 16C28 23 22 29 16 29C10 29 4 23 4 16C4 9 10 3 16 3Z" fill="url(#grad-emerald)" />
      <path d="M16 29V14M16 14C16 14 11 10 6 12M16 18C16 18 21 14 26 16" stroke="#FEF3C7" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="7" r="2.5" fill="url(#grad-gold)" />
    </svg>
  ),

  // 3D Security Shield & Check
  security: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3L27 7V15C27 22 21 27.5 16 29C11 27.5 5 22 5 15V7L16 3Z" fill="url(#grad-emerald)" />
      <path d="M16 6L24 9.5V15.5C24 20.5 19.5 24.5 16 25.8C12.5 24.5 8 20.5 8 15.5V9.5L16 6Z" fill="url(#grad-gold)" opacity="0.4" />
      <path d="M11 16L14.5 19.5L21 12" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // 3D Smart High-Speed Elevator Lift
  elevator: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="4" width="22" height="24" rx="4" fill="url(#grad-cyan)" />
      <rect x="9" y="8" width="6.5" height="16" rx="2" fill="url(#grad-pearl)" opacity="0.9" />
      <rect x="16.5" y="8" width="6.5" height="16" rx="2" fill="url(#grad-pearl)" opacity="0.9" />
      <path d="M12 18L12 12M12 12L10 14M12 12L14 14" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 12L20 18M20 18L18 16M20 18L22 16" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // 3D Sky Lounge & Terrace Garden
  sky_lounge: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="18" width="24" height="10" rx="3" fill="url(#grad-gold)" />
      <path d="M8 18V9C8 7.34315 9.34315 6 11 6H21C22.6569 6 24 7.34315 24 9V18" fill="url(#grad-cyan)" opacity="0.7" />
      <path d="M12 2C12 2 16 6 16 11M16 11C16 11 20 6 20 2" stroke="url(#grad-emerald)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="16" cy="23" r="2" fill="#FFFFFF" />
    </svg>
  ),

  // 3D Electric Vehicle Charging & Car Park
  parking: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="24" height="24" rx="6" fill="url(#grad-emerald)" />
      <path d="M10 22V10H15C17.2091 10 19 11.7909 19 14C19 16.2091 17.2091 18 15 18H10" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 12L20 16H23L21 20" stroke="url(#grad-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // 3D Crystal Location Pin
  location: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3C10.4772 3 6 7.47715 6 13C6 20.5 16 29 16 29C16 29 26 20.5 26 13C26 7.47715 21.5228 3 16 3Z" fill="url(#grad-ruby)" filter="url(#glow-shadow-emerald)" />
      <circle cx="16" cy="13" r="4.5" fill="#FFFFFF" />
      <circle cx="16" cy="13" r="2" fill="#DC2626" />
    </svg>
  ),

  // 3D Gold Coins & High ROI Growth
  coins: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="12" rx="7" ry="4" fill="url(#grad-gold)" />
      <path d="M5 12V17C5 19.2091 8.13401 21 12 21C15.866 21 19 19.2091 19 17V12" fill="url(#grad-gold)" opacity="0.8" />
      <path d="M5 17V22C5 24.2091 8.13401 26 12 26C15.866 26 19 24.2091 19 22V17" fill="url(#grad-gold)" opacity="0.9" />
      <path d="M16 8L24 3M24 3H19M24 3V8" stroke="url(#grad-emerald)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // 3D Sparkling Gem Diamond
  sparkles: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L19.5 12.5L30 16L19.5 19.5L16 30L12.5 19.5L2 16L12.5 12.5L16 2Z" fill="url(#grad-emerald)" />
      <path d="M16 6L18 13.5L25.5 16L18 18.5L16 26L14 18.5L6.5 16L14 13.5L16 6Z" fill="url(#grad-gold)" opacity="0.75" />
      <circle cx="16" cy="16" r="2.5" fill="#FFFFFF" />
    </svg>
  ),

  // 3D Metallic Hotline Phone
  phone: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 4C5.89543 4 5 4.89543 5 6C5 17.598 14.402 27 26 27C27.1046 27 28 26.1046 28 25V20.7C28 20.1 27.6 19.5 27 19.4L21.2 18.3C20.7 18.2 20.1 18.4 19.7 18.8L17.5 21C13.8 19.1 10.9 16.2 9 12.5L11.2 10.3C11.6 9.9 11.8 9.3 11.7 8.8L10.6 3C10.5 2.4 9.9 2 9.3 2H7Z" fill="url(#grad-cyan)" />
      <path d="M22 6C23.5 7.5 24.5 9.5 25 11.5" stroke="url(#grad-gold)" strokeWidth="2" strokeLinecap="round" />
      <path d="M25 4C27.5 6.5 29 9.5 29.5 13" stroke="url(#grad-emerald)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),

  // 3D Booking Calendar
  calendar: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="24" height="22" rx="4" fill="url(#grad-emerald)" />
      <rect x="4" y="6" width="24" height="7" rx="4" fill="url(#grad-gold)" />
      <path d="M9 3V8M23 3V8" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="10" cy="18" r="1.5" fill="#FFFFFF" />
      <circle cx="16" cy="18" r="1.5" fill="#FFFFFF" />
      <circle cx="22" cy="18" r="1.5" fill="#FFFFFF" />
      <circle cx="10" cy="23" r="1.5" fill="#FFFFFF" />
      <circle cx="16" cy="23" r="1.5" fill="#FEF3C7" />
    </svg>
  ),

  // 3D Verified Quality Seal
  check: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="13" fill="url(#grad-emerald)" />
      <circle cx="16" cy="16" r="10" fill="url(#grad-gold)" opacity="0.3" />
      <path d="M10 16.5L14 20.5L22 11.5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // 3D Golden Star Rating
  star: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L20.3 10.8L30 12.2L23 19L24.6 28.6L16 24.1L7.4 28.6L9 19L2 12.2L11.7 10.8L16 2Z" fill="url(#grad-gold)" filter="url(#glow-shadow-gold)" />
    </svg>
  ),

  // 3D Engineering Hardhat
  hardhat: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 18C6 12.4772 10.4772 8 16 8C21.5228 8 26 12.4772 26 18V20H6V18Z" fill="url(#grad-gold)" />
      <path d="M3 20H29V23C29 24.1046 28.1046 25 27 25H5C3.89543 25 3 24.1046 3 23V20Z" fill="url(#grad-emerald)" />
      <rect x="14" y="6" width="4" height="14" rx="2" fill="#FFFFFF" opacity="0.9" />
    </svg>
  ),

  // 3D Cost Estimator Calculator
  calculator: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="4" width="22" height="24" rx="4" fill="url(#grad-cyan)" />
      <rect x="8" y="7" width="16" height="6" rx="2" fill="#0F172A" />
      <text x="19" y="11.5" fill="#38BDF8" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="end">ECO</text>
      <circle cx="10" cy="17" r="1.5" fill="url(#grad-gold)" />
      <circle cx="16" cy="17" r="1.5" fill="url(#grad-gold)" />
      <circle cx="22" cy="17" r="1.5" fill="url(#grad-gold)" />
      <circle cx="10" cy="22" r="1.5" fill="#FFFFFF" />
      <circle cx="16" cy="22" r="1.5" fill="#FFFFFF" />
      <circle cx="22" cy="22" r="1.5" fill="url(#grad-emerald)" />
    </svg>
  ),

  // 3D Coastal Ventilation Breeze
  breeze: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 10H20C22.2091 10 24 8.20914 24 6C24 3.79086 22.2091 2 20 2C17.7909 2 16 3.79086 16 6" stroke="url(#grad-cyan)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M4 18H24C26.2091 18 28 16.2091 28 14C28 11.7909 26.2091 10 24 10" stroke="url(#grad-emerald)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M4 26H16C18.2091 26 20 24.2091 20 22C20 19.7909 18.2091 18 16 18" stroke="url(#grad-gold)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),

  // 3D Gourmet Fitted Kitchen
  kitchen: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="12" width="24" height="16" rx="3" fill="url(#grad-gold)" />
      <rect x="4" y="6" width="24" height="6" rx="2" fill="url(#grad-cyan)" />
      <circle cx="10" cy="18" r="2.5" fill="#FFFFFF" opacity="0.9" />
      <circle cx="22" cy="18" r="2.5" fill="#FFFFFF" opacity="0.9" />
      <rect x="14" y="22" width="4" height="6" rx="1" fill="#475569" />
    </svg>
  ),

  // 3D Crystal Water Drop
  water: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3C16 3 6 15 6 20.5C6 26 10.5 29 16 29C21.5 29 26 26 26 20.5C26 15 16 3 16 3Z" fill="url(#grad-cyan)" />
      <circle cx="13" cy="18" r="2" fill="#FFFFFF" opacity="0.7" />
    </svg>
  )
};

export default function PremiumIcon({
  name = 'sparkles',
  size = 24,
  variant = 'emerald', // 'emerald', 'gold', 'cyan', 'ruby', 'violet', 'pearl'
  badge = 'squircle', // 'squircle', 'circle', 'shield', 'pill', 'none'
  badgeSize = 'md', // 'sm', 'md', 'lg', 'xl'
  lucideIcon: LucideIcon = null,
  className = '',
  animate = true
}) {
  // Size map for badge frame
  const badgeSizes = {
    sm: 'w-8 h-8 p-1.5',
    md: 'w-11 h-11 p-2.5',
    lg: 'w-14 h-14 p-3.5',
    xl: 'w-18 h-18 p-4.5'
  };

  // Color theme configurations
  const themeStyles = {
    emerald: {
      badgeBg: 'bg-gradient-to-br from-emerald-950/80 via-[#0B2E1D]/90 to-emerald-900/80',
      badgeBorder: 'border-emerald-500/40 hover:border-emerald-400',
      glow: 'shadow-[0_0_20px_rgba(16,185,129,0.35)]',
      iconColor: 'text-emerald-400'
    },
    gold: {
      badgeBg: 'bg-gradient-to-br from-amber-950/80 via-[#2E200B]/90 to-amber-900/80',
      badgeBorder: 'border-amber-500/40 hover:border-amber-400',
      glow: 'shadow-[0_0_20px_rgba(245,158,11,0.35)]',
      iconColor: 'text-amber-400'
    },
    cyan: {
      badgeBg: 'bg-gradient-to-br from-sky-950/80 via-[#0B2536]/90 to-cyan-900/80',
      badgeBorder: 'border-cyan-500/40 hover:border-cyan-400',
      glow: 'shadow-[0_0_20px_rgba(6,182,212,0.35)]',
      iconColor: 'text-cyan-400'
    },
    ruby: {
      badgeBg: 'bg-gradient-to-br from-rose-950/80 via-[#330D10]/90 to-red-900/80',
      badgeBorder: 'border-rose-500/40 hover:border-rose-400',
      glow: 'shadow-[0_0_20px_rgba(244,63,94,0.35)]',
      iconColor: 'text-rose-400'
    },
    violet: {
      badgeBg: 'bg-gradient-to-br from-purple-950/80 via-[#200B33]/90 to-violet-900/80',
      badgeBorder: 'border-purple-500/40 hover:border-purple-400',
      glow: 'shadow-[0_0_20px_rgba(168,85,247,0.35)]',
      iconColor: 'text-purple-400'
    },
    pearl: {
      badgeBg: 'bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-slate-900/90',
      badgeBorder: 'border-white/30 hover:border-white/60',
      glow: 'shadow-[0_0_20px_rgba(255,255,255,0.2)]',
      iconColor: 'text-white'
    }
  };

  const theme = themeStyles[variant] || themeStyles.emerald;

  // Custom 3D SVG lookup
  const CustomSvgComponent = CUSTOM_ICONS[name.toLowerCase()];

  // Render Inner Graphic
  const renderIconContent = () => {
    if (CustomSvgComponent) {
      return <CustomSvgComponent size={size} />;
    }
    if (LucideIcon) {
      return <LucideIcon className={`w-full h-full ${theme.iconColor}`} style={{ width: size, height: size }} />;
    }
    // Default fallback to 3D sparkles
    const FallbackSvg = CUSTOM_ICONS.sparkles;
    return <FallbackSvg size={size} />;
  };

  // If no badge frame requested, render plain icon
  if (badge === 'none') {
    return (
      <span className={`inline-flex items-center justify-center ${className}`}>
        {renderIconContent()}
      </span>
    );
  }

  // Badge Shape Styling
  let shapeClass = 'rounded-2xl';
  if (badge === 'circle') shapeClass = 'rounded-full';
  if (badge === 'pill') shapeClass = 'rounded-full px-3 py-1.5';
  if (badge === 'shield') shapeClass = 'rounded-t-2xl rounded-b-md';

  return (
    <motion.div
      whileHover={animate ? { scale: 1.08, rotate: 2, y: -2 } : {}}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`relative inline-flex items-center justify-center ${badgeSizes[badgeSize] || badgeSizes.md} ${shapeClass} ${theme.badgeBg} border ${theme.badgeBorder} ${theme.glow} backdrop-blur-md transition-all duration-300 ${className}`}
    >
      {/* Ambient Inner Gloss Gradient Highlight */}
      <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none" />

      {/* Render Icon Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {renderIconContent()}
      </div>
    </motion.div>
  );
}
