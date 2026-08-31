import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import logoImg from '../assets/logoforhome.jpeg';
import PremiumIcon from './PremiumIcon';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About Property', href: '#about', icon: <PremiumIcon name="building" size={16} badge="squircle" badgeSize="sm" variant="emerald" /> },
    { name: 'Key Features', href: '#features', icon: <PremiumIcon name="sparkles" size={16} badge="squircle" badgeSize="sm" variant="gold" /> },
    { name: 'Apartment Types', href: '#apartments', icon: <PremiumIcon name="bedroom" size={16} badge="squircle" badgeSize="sm" variant="cyan" /> },
    { name: 'Family & Investment', href: '#investment', icon: <PremiumIcon name="coins" size={16} badge="squircle" badgeSize="sm" variant="violet" /> },
    { name: 'Gallery', href: '#gallery', icon: <PremiumIcon name="sky_lounge" size={16} badge="squircle" badgeSize="sm" variant="ruby" /> },
    { name: 'Location', href: '#location', icon: <PremiumIcon name="location" size={16} badge="squircle" badgeSize="sm" variant="emerald" /> }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#0D1F17] text-gray-300 text-[11px] py-2 px-3 sm:px-8 border-b border-emerald-950/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-semibold truncate">
            <span className="flex h-2 w-2 relative flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[#10B981] font-bold truncate">EcoTS Residencies</span>
            <span className="text-gray-500 hidden sm:inline">•</span>
            <span className="text-gray-300 hidden sm:inline">33, Moor's Road, Colombo 06</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold flex-shrink-0">
            <a
              href="tel:0771727099"
              className="flex items-center gap-1 text-white hover:text-emerald-300 transition-colors font-mono font-bold"
            >
              <PremiumIcon name="phone" size={12} badge="none" />
              <span>077 172 7099</span>
            </a>
            <span className="text-gray-600 hidden sm:inline">/</span>
            <a
              href="tel:0760673079"
              className="hidden sm:flex items-center gap-1 text-gray-300 hover:text-white transition-colors font-mono"
            >
              <span>076 067 3079</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-md py-2 bg-white/95 backdrop-blur-md'
            : 'bg-white border-b border-gray-100 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl p-1 bg-white border border-emerald-500/30 shadow-md flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
              <img
                src={logoImg}
                alt="EcoTS Residencies Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-black tracking-tight text-gray-900 font-heading leading-none flex items-center gap-1">
                Eco <span className="text-[#1B5E20]">TS</span>
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-extrabold tracking-widest text-[#0277BD] mt-0.5">
                Engineering Pvt Ltd
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-gray-50/90 p-1.5 rounded-full border border-gray-200/80 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-bold text-gray-700 hover:text-[#1B5E20] hover:bg-gray-100/80 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="tel:0771727099"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-[#0277BD] bg-[#0277BD]/10 hover:bg-[#0277BD]/15 border border-[#0277BD]/20 rounded-xl transition-all"
            >
              <PremiumIcon name="phone" size={14} badge="none" />
              <span>Call Now</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#1B5E20] hover:bg-[#2E7D32] rounded-xl shadow-md transition-all hover:scale-102"
            >
              <PremiumIcon name="calendar" size={14} badge="none" />
              <span>Book a Viewing</span>
            </button>
          </div>

          {/* Mobile Quick Action Buttons & Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:0771727099"
              className="p-2 rounded-xl bg-emerald-50 text-[#1B5E20] border border-emerald-200 text-xs font-bold flex items-center justify-center"
              aria-label="Call hotline"
            >
              <PremiumIcon name="phone" size={16} badge="none" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-t-3xl p-6 space-y-5 max-h-[85vh] overflow-y-auto shadow-2xl border-t border-gray-100"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <img src={logoImg} alt="Logo" className="w-8 h-8 object-contain" />
                  <div>
                    <h3 className="text-base font-extrabold text-gray-900 font-heading leading-tight">
                      EcoTS Residencies
                    </h3>
                    <p className="text-[10px] text-gray-500 font-medium">33, Moor's Road, Colombo 06</p>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-gray-400 hover:text-gray-900 bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <nav className="space-y-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between p-3.5 rounded-2xl text-sm font-bold text-gray-800 hover:bg-emerald-50 hover:text-[#1B5E20] transition-colors border border-transparent hover:border-emerald-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-gray-50 border border-gray-100">
                        {link.icon}
                      </div>
                      <span>{link.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </a>
                ))}
              </nav>

              {/* Drawer Action CTAs */}
              <div className="pt-4 border-t border-gray-100 space-y-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 rounded-2xl bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Viewing</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:0771727099"
                    className="py-3 rounded-xl bg-[#0277BD] text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>077 172 7099</span>
                  </a>
                  <a
                    href="tel:0760673079"
                    className="py-3 rounded-xl bg-gray-100 text-gray-800 text-xs font-bold flex items-center justify-center gap-1.5 border border-gray-200"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0277BD]" />
                    <span>076 067 3079</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
