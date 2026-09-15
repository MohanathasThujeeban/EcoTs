import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { 
  Building2, 
  BedDouble, 
  Bath, 
  SunMedium, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Car, 
  MapPin, 
  Coins, 
  PhoneCall, 
  CalendarDays, 
  CheckCircle2, 
  Star, 
  HardHat, 
  Calculator, 
  Wind, 
  Utensils, 
  Droplets,
  Award,
  Users,
  Target,
  HeartHandshake,
  ArrowRight,
  Cpu,
  Globe2,
  Truck,
  Hammer,
  Wrench,
  Mail,
  Clock,
  Search,
  Filter,
  RotateCcw,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

/**
 * PremiumIcon component for EcoTS Residencies & Engineering
 * Renders Lucide premium icons with luxury glassmorphic badges,
 * metallic SVG gradients, glowing highlights, and micro-animations.
 */

// Unique SVG Gradients Definition Component (rendered once globally)
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

// Key map linking icon names to Lucide icons
const LUCIDE_ICON_MAP = {
  building: Building2,
  bedroom: BedDouble,
  bath: Bath,
  solar: SunMedium,
  security: ShieldCheck,
  elevator: Layers,
  sky_lounge: Sparkles,
  parking: Car,
  location: MapPin,
  coins: Coins,
  sparkles: Sparkles,
  phone: PhoneCall,
  calendar: CalendarDays,
  check: CheckCircle2,
  star: Star,
  hardhat: HardHat,
  calculator: Calculator,
  breeze: Wind,
  kitchen: Utensils,
  water: Droplets,
  award: Award,
  users: Users,
  target: Target,
  hearthandshake: HeartHandshake,
  arrowright: ArrowRight,
  cpu: Cpu,
  globe: Globe2,
  truck: Truck,
  hammer: Hammer,
  wrench: Wrench,
  mail: Mail,
  clock: Clock,
  search: Search,
  filter: Filter,
  rotateccw: RotateCcw,
  chevronright: ChevronRight,
  menu: Menu,
  x: X
};

// Helper to resolve Lucide component from name
function resolveLucideComponent(name) {
  if (!name) return Sparkles;
  const cleanName = name.toLowerCase().replace(/[-_]/g, '');
  
  if (LUCIDE_ICON_MAP[cleanName]) {
    return LUCIDE_ICON_MAP[cleanName];
  }
  
  // Dynamic fallback search in LucideIcons exports
  const pascalName = name
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  if (LucideIcons[pascalName]) {
    return LucideIcons[pascalName];
  }
  if (LucideIcons[name]) {
    return LucideIcons[name];
  }

  return Sparkles;
}

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
      badgeBg: 'bg-gradient-to-br from-emerald-950/85 via-[#0B2E1D]/90 to-emerald-900/85',
      badgeBorder: 'border-emerald-500/40 hover:border-emerald-400',
      glow: 'shadow-[0_0_20px_rgba(16,185,129,0.35)]',
      iconColor: 'text-emerald-400',
      gradientId: 'grad-emerald'
    },
    gold: {
      badgeBg: 'bg-gradient-to-br from-amber-950/85 via-[#2E200B]/90 to-amber-900/85',
      badgeBorder: 'border-amber-500/40 hover:border-amber-400',
      glow: 'shadow-[0_0_20px_rgba(245,158,11,0.35)]',
      iconColor: 'text-amber-400',
      gradientId: 'grad-gold'
    },
    cyan: {
      badgeBg: 'bg-gradient-to-br from-sky-950/85 via-[#0B2536]/90 to-cyan-900/85',
      badgeBorder: 'border-cyan-500/40 hover:border-cyan-400',
      glow: 'shadow-[0_0_20px_rgba(6,182,212,0.35)]',
      iconColor: 'text-cyan-400',
      gradientId: 'grad-cyan'
    },
    ruby: {
      badgeBg: 'bg-gradient-to-br from-rose-950/85 via-[#330D10]/90 to-red-900/85',
      badgeBorder: 'border-rose-500/40 hover:border-rose-400',
      glow: 'shadow-[0_0_20px_rgba(244,63,94,0.35)]',
      iconColor: 'text-rose-400',
      gradientId: 'grad-ruby'
    },
    violet: {
      badgeBg: 'bg-gradient-to-br from-purple-950/85 via-[#200B33]/90 to-violet-900/85',
      badgeBorder: 'border-purple-500/40 hover:border-purple-400',
      glow: 'shadow-[0_0_20px_rgba(168,85,247,0.35)]',
      iconColor: 'text-purple-400',
      gradientId: 'grad-violet'
    },
    pearl: {
      badgeBg: 'bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-slate-900/90',
      badgeBorder: 'border-white/30 hover:border-white/60',
      glow: 'shadow-[0_0_20px_rgba(255,255,255,0.2)]',
      iconColor: 'text-white',
      gradientId: 'grad-pearl'
    }
  };

  const theme = themeStyles[variant] || themeStyles.emerald;
  const TargetLucideComponent = LucideIcon || resolveLucideComponent(name);

  // Render Inner Lucide Premium Graphic
  const renderIconContent = () => {
    return (
      <TargetLucideComponent
        size={size}
        stroke={`url(#${theme.gradientId})`}
        strokeWidth={2.2}
        className={`filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] transition-transform duration-300 ${theme.iconColor}`}
        style={{ width: size, height: size }}
      />
    );
  };

  // If no badge frame requested, render plain Lucide premium icon
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
