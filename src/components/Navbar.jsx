import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, MapPin, Sparkles } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

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

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Apartments', href: '#apartments' },
    { name: 'Family & Investment', href: '#investment' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' }
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
      {/* Top Announcement & Phone Bar */}
      <div className="bg-[#0D1F17] text-gray-300 text-xs py-2.5 px-4 sm:px-8 border-b border-emerald-950/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Ecobloom Residencies • Wellawatte, Colombo 06
            </span>
            <span className="text-gray-500 hidden md:inline">|</span>
            <span className="text-gray-300 hidden md:inline">
              Modern 2, 3 & 4 Bedroom Apartments
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href="tel:0771727099"
              className="flex items-center gap-1.5 text-white hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>077 172 7099</span>
            </a>
            <span className="text-gray-600 hidden sm:inline">/</span>
            <a
              href="tel:0760673079"
              className="hidden sm:flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>076 067 3079</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-lg py-2.5 bg-white/95 backdrop-blur-md'
            : 'bg-white border-b border-gray-100 py-3.5'
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
            className="flex items-center gap-3 group"
          >
            <div className="relative w-12 h-12 rounded-2xl p-1 bg-white border border-gray-200/90 shadow-md flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
              <img
                src={logoImg}
                alt="Ecobloom Residencies Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 font-heading leading-tight flex items-center gap-1">
                Eco <span className="text-[#1B5E20]">TS</span>
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase font-extrabold tracking-widest text-[#0277BD]">
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

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:0771727099"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#0277BD] bg-[#0277BD]/10 hover:bg-[#0277BD]/15 border border-[#0277BD]/20 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#1B5E20] hover:bg-[#2E7D32] rounded-xl shadow-md transition-all hover:shadow-lg hover:scale-102"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Viewing</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 shadow-xl overflow-hidden fixed top-[75px] inset-x-0 z-30"
          >
            <div className="px-6 py-6 space-y-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-[#1B5E20] rounded-xl shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Viewing</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:0771727099"
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold text-[#0277BD] bg-[#0277BD]/10 rounded-xl"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>077 172 7099</span>
                  </a>
                  <a
                    href="tel:0760673079"
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold text-[#0277BD] bg-[#0277BD]/10 rounded-xl"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>076 067 3079</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
