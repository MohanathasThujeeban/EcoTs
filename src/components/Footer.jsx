import React from 'react';
import { Phone, MapPin, Calendar, ArrowUp, Sparkles, Building, CheckCircle2 } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#0D1F17] text-gray-300 overflow-hidden pt-16 pb-10 border-t border-emerald-950/60">
      <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Callout Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#142920] to-[#183328] border border-emerald-500/20 shadow-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
              Reserve Your Unit
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Looking for a New Home in Wellawatte?
            </h3>
            <p className="text-xs text-gray-300">
              Schedule a personalized viewing tour of our 2, 3 & 4 bedroom residences today.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Viewing</span>
            </button>
            <a
              href="tel:0771727099"
              className="px-6 py-3 rounded-xl bg-[#0277BD] hover:bg-[#039BE5] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>077 172 7099</span>
            </a>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10 text-xs">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl p-1 bg-white border border-white/20 shadow-md flex items-center justify-center overflow-hidden">
                <img src={logoImg} alt="Ecobloom Residencies" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white font-heading">
                  Ecobloom <span className="text-emerald-400">Residencies</span>
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-[#039BE5]">
                  Colombo 06
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Modern living, premium comfort, convenient location, and attractive prices — designed for families and smart property investors.
            </p>
          </div>

          {/* Apartment Types */}
          <div className="space-y-2.5">
            <h4 className="font-bold uppercase tracking-wider text-white font-heading">
              Apartment Units
            </h4>
            <ul className="space-y-1.5 text-gray-400">
              <li>
                <a href="#apartments" onClick={(e) => handleNavClick(e, '#apartments')} className="hover:text-emerald-400 transition-colors">
                  2 Bedroom (Couples / Small Families)
                </a>
              </li>
              <li>
                <a href="#apartments" onClick={(e) => handleNavClick(e, '#apartments')} className="hover:text-emerald-400 transition-colors">
                  3 Bedroom (Growing Families)
                </a>
              </li>
              <li>
                <a href="#apartments" onClick={(e) => handleNavClick(e, '#apartments')} className="hover:text-emerald-400 transition-colors">
                  4 Bedroom (Larger Families)
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-2.5">
            <h4 className="font-bold uppercase tracking-wider text-white font-heading">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-gray-400">
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-emerald-400 transition-colors">
                  About Property
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleNavClick(e, '#features')} className="hover:text-emerald-400 transition-colors">
                  Key Features
                </a>
              </li>
              <li>
                <a href="#investment" onClick={(e) => handleNavClick(e, '#investment')} className="hover:text-emerald-400 transition-colors">
                  Family & Investment
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-emerald-400 transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#location" onClick={(e) => handleNavClick(e, '#location')} className="hover:text-emerald-400 transition-colors">
                  Location & Connectivity
                </a>
              </li>
            </ul>
          </div>

          {/* Hotline & Contact */}
          <div className="space-y-2.5">
            <h4 className="font-bold uppercase tracking-wider text-white font-heading">
              Inquiries & Bookings
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Wellawatte, Colombo 06, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:0771727099" className="hover:text-white font-bold font-mono">077 172 7099</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0277BD] flex-shrink-0" />
                <a href="tel:0760673079" className="hover:text-white font-bold font-mono">076 067 3079</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <div>
            © {new Date().getFullYear()} Ecobloom Residencies. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Wellawatte, Colombo 06</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 transition-all"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
