import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  MapPin, 
  BedDouble, 
  Gem, 
  Coins, 
  Compass, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Building, 
  ShieldCheck, 
  X, 
  ChevronRight, 
  Home as HomeIcon,
  MessageSquare,
  Eye,
  HeartHandshake
} from 'lucide-react';
import confetti from 'canvas-confetti';

import logoImg from '../assets/logo.jpeg';
import info1Img from '../assets/info1.jpg';
import info2Img from '../assets/info2.jpg';
import info3Img from '../assets/info3.jpg';

export default function Home({ onOpenBooking }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeApartmentTab, setActiveApartmentTab] = useState('3-bedroom');

  // Contact Form inside page
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    unitType: '3-bedroom',
    purpose: 'family',
    message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  const apartmentData = {
    '2-bedroom': {
      title: '2 Bedroom Luxury Residences',
      bestFor: 'Couples / Small Families',
      badge: 'Smart Living Option',
      image: info1Img,
      summary: 'Thoughtfully planned living space offering modern design, intimate comfort, and high rental return efficiency.',
      highlights: [
        'Spacious master suite & secondary guest room',
        'Open-concept living and dining hall',
        'Modern fitted kitchen & premium sanitary fittings',
        'Private balcony with urban ventilation'
      ]
    },
    '3-bedroom': {
      title: '3 Bedroom Family Residences',
      bestFor: 'Growing Families',
      badge: 'Most Popular Choice',
      image: info2Img,
      summary: 'Generous multi-room layouts crafted for family comfort, privacy, and expansive shared entertainment zones.',
      highlights: [
        'Master bedroom with en-suite luxury bathroom',
        'Two dedicated children/guest bedrooms',
        'Spacious family lounge & expansive dining area',
        'Dual balconies with scenic views of Colombo 06'
      ]
    },
    '4-bedroom': {
      title: '4 Bedroom Grand Residences',
      bestFor: 'Larger Families',
      badge: 'Ultimate Space & Luxury',
      image: info3Img,
      summary: 'Maximum living space combining multiple en-suite bedrooms, extensive dining halls, and executive lifestyle finishes.',
      highlights: [
        'Expansive master suite & 3 spacious bedrooms',
        'Grand living salon designed for hosting family gatherings',
        'Separate utility / service quarters provision',
        'Multiple panoramic balconies with breezy coastal cross-ventilation'
      ]
    }
  };

  const galleryImages = [
    { src: info1Img, title: 'Modern Living & Architectural Elegance', tag: 'Exterior & Interior' },
    { src: info2Img, title: 'Spacious Residential Layouts', tag: 'Apartment Plans' },
    { src: info3Img, title: 'Comfort & Premium Finishes', tag: 'Living Spaces' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F9F8] text-[#1F2937]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-[#0D1F17] via-[#142920] to-[#0D1F17] text-white">
        {/* Background Image with Ambient Dark Blur */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={info1Img}
            alt="Ecobloom Residencies"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1F17] via-[#0D1F17]/90 to-[#0D1F17]/60" />
          <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold shadow-md backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Modern 2, 3 & 4 Bedroom Apartments in Wellawatte</span>
              </div>

              {/* Headline */}
              <h1 className="text-3.5xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-heading leading-[1.15]">
                Step Into Your Dream Home at{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  Ecobloom Residencies
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Modern living, premium comfort, a convenient location, and attractive prices — designed for families and smart property investors.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all hover:scale-103"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Viewing</span>
                </button>

                <a
                  href="tel:0771727099"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#0277BD] hover:bg-[#039BE5] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all hover:scale-103"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: 077 172 7099</span>
                </a>
              </div>

              {/* Secondary Quick Contact Strip */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Wellawatte, Colombo 06</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-cyan-400" />
                  <span>2, 3 & 4 Bedroom Units</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Alt Hotline: 076 067 3079</span>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-white/10 p-3.5 border border-white/20 shadow-2xl backdrop-blur-md">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 shadow-inner group">
                  <img
                    src={info1Img}
                    alt="Ecobloom Residencies Feature"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F17]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-md">
                      Wellawatte Prime Living
                    </span>
                    <h3 className="text-lg font-bold font-heading mt-1.5">
                      Ecobloom Residencies
                    </h3>
                    <p className="text-xs text-gray-300">
                      Spacious Layouts • Modern Design • Premium Comfort
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 mt-3 text-center text-xs">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Location</span>
                    <strong className="text-white font-bold">Colombo 06</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Unit Types</span>
                    <strong className="text-emerald-300 font-bold">2, 3 & 4 BR</strong>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT THE PROPERTY SECTION */}
      <section id="about" className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100">
                <img
                  src={info2Img}
                  alt="Ecobloom Residencies Architectural View"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:right-6 p-5 rounded-2xl bg-[#1B5E20] text-white shadow-2xl border border-white/20 max-w-xs hidden sm:block">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300">
                  Ideal Investment
                </span>
                <p className="text-xs font-semibold mt-1">
                  Positioned for strong capital appreciation & family comfort.
                </p>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#1B5E20] border border-emerald-200 text-xs font-bold">
                <HomeIcon className="w-3.5 h-3.5" />
                <span>About the Property</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-heading leading-tight">
                Modern Residential Apartments Designed for Comfort & Value
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Ecobloom Residencies offers modern residential apartments designed for comfortable family living and property investment.
              </p>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                The development features <strong>2, 3, and 4-bedroom residential units</strong>, combining modern design, spacious layouts, premium comfort, and affordability.
              </p>

              <div className="p-4 rounded-2xl bg-[#F7F9F8] border border-gray-200/80">
                <p className="text-xs sm:text-sm text-[#1B5E20] font-bold leading-relaxed">
                  Whether you're looking for a forever home for your family or a valuable real-estate investment, Ecobloom Residencies is positioned as an option for both.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3.5 rounded-xl bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule a Visit</span>
                </button>
                <a
                  href="tel:0771727099"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-[#0277BD] border border-[#0277BD]/30 font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 077 172 7099</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES (4 INTERACTIVE CARDS) */}
      <section id="features" className="py-20 bg-[#F7F9F8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E20] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              Why Ecobloom Residencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-heading">
              Key Features Designed for You
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Thoughtfully curated advantages delivering superior living quality and lasting investment value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Spacious Layouts */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-7 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#1B5E20] border border-emerald-100 flex items-center justify-center mb-5 text-2xl">
                  🛏️
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 font-heading">
                  Spacious Layouts
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                  Beautifully designed 2, 3, and 4-bedroom units created to accommodate different lifestyles and family needs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-[#1B5E20] flex items-center gap-1">
                <span>2, 3 & 4 BR Units</span>
              </div>
            </motion.div>

            {/* Card 2: Premium Living */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-7 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0277BD] border border-blue-100 flex items-center justify-center mb-5 text-2xl">
                  💎
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 font-heading">
                  Premium Living
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                  Experience modern designs, quality comfort, and an elevated residential lifestyle.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-[#0277BD] flex items-center gap-1">
                <span>Elevated Comfort</span>
              </div>
            </motion.div>

            {/* Card 3: Convenient Location */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-7 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#1B5E20] border border-emerald-100 flex items-center justify-center mb-5 text-2xl">
                  📍
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 font-heading">
                  Convenient Location
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                  A location designed to keep residents conveniently connected to the things they need.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-[#1B5E20] flex items-center gap-1">
                <span>Wellawatte, Colombo 06</span>
              </div>
            </motion.div>

            {/* Card 4: Attractive Prices */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-7 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0277BD] border border-blue-100 flex items-center justify-center mb-5 text-2xl">
                  💰
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 font-heading">
                  Attractive Prices
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                  Modern and comfortable living with pricing positioned as an affordable option.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-[#0277BD] flex items-center gap-1">
                <span>Value Investment</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. APARTMENT TYPES SECTION */}
      <section id="apartments" className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0277BD] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Residential Options
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-heading">
              Apartment Types & Configurations
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Explore our selection of 2, 3, and 4-bedroom layouts tailored for your specific lifestyle.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-2xl bg-gray-100 border border-gray-200 gap-1.5 max-w-full overflow-x-auto">
              {[
                { id: '2-bedroom', label: '2 Bedroom', for: 'Couples / Small Families' },
                { id: '3-bedroom', label: '3 Bedroom', for: 'Growing Families' },
                { id: '4-bedroom', label: '4 Bedroom', for: 'Larger Families' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveApartmentTab(tab.id)}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    activeApartmentTab === tab.id
                      ? 'bg-[#1B5E20] text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/60'
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Apartment Detail Card */}
          {apartmentData[activeApartmentTab] && (
            <motion.div
              key={activeApartmentTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-10 rounded-3xl bg-[#F7F9F8] border border-gray-200 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#1B5E20] border border-emerald-200 text-xs font-bold">
                      {apartmentData[activeApartmentTab].badge}
                    </span>
                    <span className="text-xs text-gray-500 font-semibold">
                      Best For: <strong className="text-gray-800">{apartmentData[activeApartmentTab].bestFor}</strong>
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-heading">
                    {apartmentData[activeApartmentTab].title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {apartmentData[activeApartmentTab].summary}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-800 block">
                      Key Highlights:
                    </span>
                    <div className="space-y-2">
                      {apartmentData[activeApartmentTab].highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-700 bg-white p-3 rounded-xl border border-gray-100">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-3">
                    <button
                      onClick={onOpenBooking}
                      className="px-6 py-3 rounded-xl bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                    >
                      Book a Viewing for this Unit
                    </button>
                    <a
                      href="tel:0771727099"
                      className="px-6 py-3 rounded-xl bg-[#0277BD] hover:bg-[#039BE5] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Advisor</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-900">
                    <img
                      src={apartmentData[activeApartmentTab].image}
                      alt={apartmentData[activeApartmentTab].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Quick Comparison Table */}
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
              <thead className="bg-[#0D1F17] text-white">
                <tr>
                  <th className="p-4 font-bold font-heading">Apartment Type</th>
                  <th className="p-4 font-bold font-heading">Ideal For</th>
                  <th className="p-4 font-bold font-heading">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-bold text-gray-900">2 Bedroom Unit</td>
                  <td className="p-4 text-gray-600">Couples / Small Families</td>
                  <td className="p-4">
                    <button
                      onClick={onOpenBooking}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-50 text-[#1B5E20] border border-emerald-200 font-bold text-xs hover:bg-[#1B5E20] hover:text-white transition-colors"
                    >
                      Inquire
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-bold text-gray-900">3 Bedroom Unit</td>
                  <td className="p-4 text-gray-600">Growing Families</td>
                  <td className="p-4">
                    <button
                      onClick={onOpenBooking}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-50 text-[#1B5E20] border border-emerald-200 font-bold text-xs hover:bg-[#1B5E20] hover:text-white transition-colors"
                    >
                      Inquire
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-bold text-gray-900">4 Bedroom Unit</td>
                  <td className="p-4 text-gray-600">Larger Families</td>
                  <td className="p-4">
                    <button
                      onClick={onOpenBooking}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-50 text-[#1B5E20] border border-emerald-200 font-bold text-xs hover:bg-[#1B5E20] hover:text-white transition-colors"
                    >
                      Inquire
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. FAMILY + INVESTMENT SECTION */}
      <section id="investment" className="py-20 bg-gradient-to-br from-[#0D1F17] via-[#142920] to-[#0D1F17] text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/20 px-3.5 py-1.5 rounded-full border border-emerald-500/30 inline-block">
              Dual Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight">
              A Home for Your Family. <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                An Investment for Your Future.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Looking for a comfortable home for your family? Or searching for a valuable real-estate investment? Ecobloom Residencies brings together modern residential living and investment potential in one community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Family Living Card */}
            <div className="p-8 rounded-3xl bg-white/10 border border-white/15 backdrop-blur-md space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl border border-emerald-500/30">
                  👨‍👩‍👧‍👦
                </div>
                <h3 className="text-xl font-bold font-heading">
                  For Your Family Living
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Enjoy spacious bedroom layouts, quiet privacy, modern kitchen spaces, and the peace of mind that comes with living in a secure, family-centric residential address.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-emerald-300 pt-3 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>2, 3 & 4-Bedroom spacious floorplans</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Convenient access to top Colombo schools & amenities</span>
                </li>
              </ul>
            </div>

            {/* Real Estate Investment Card */}
            <div className="p-8 rounded-3xl bg-white/10 border border-white/15 backdrop-blur-md space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-cyan-400 flex items-center justify-center text-2xl border border-blue-500/30">
                  📈
                </div>
                <h3 className="text-xl font-bold font-heading">
                  For Smart Property Investors
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Prime Wellawatte location in high demand for long-term residential leasing, capital value growth, and consistent rental yield potential.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-cyan-300 pt-3 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>High rental demand urban corridor</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Attractive entry pricing with high capital growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VISUAL GALLERY (info1.jpg, info2.jpg, info3.jpg) */}
      <section id="gallery" className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E20] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              Visual Tour
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-heading">
              Gallery & Project Previews
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Click any image to view high-resolution architectural previews and layouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedImage(img.src)}
                className="group relative rounded-3xl overflow-hidden shadow-md border border-gray-200 bg-gray-900 cursor-pointer aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                <div className="absolute top-3.5 right-3.5 p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-[#1B5E20] transition-colors">
                  <Eye className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                    {img.tag}
                  </span>
                  <h4 className="text-sm font-bold font-heading mt-0.5">
                    {img.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LOCATION SECTION */}
      <section id="location" className="py-20 bg-[#F7F9F8] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Location Info */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0277BD] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                Prime Urban Location
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-heading">
                Wellawatte, Colombo 06
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                Located in Wellawatte, Colombo 06, Ecobloom Residencies offers residents a convenient urban lifestyle with access to the surrounding Colombo area.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-xs">
                  <MapPin className="w-5 h-5 text-[#1B5E20] mb-2" />
                  <h4 className="text-xs font-bold text-gray-900">Colombo 06 Access</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Direct connectivity to Galle Road & Marine Drive</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-xs">
                  <Compass className="w-5 h-5 text-[#0277BD] mb-2" />
                  <h4 className="text-xs font-bold text-gray-900">Convenient Lifestyle</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Minutes to supermarkets, schools & transit</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-900">
                💡 <strong>Location Note:</strong> For exact site directions and private showroom tours, please contact our property desk at <strong>077 172 7099</strong>.
              </div>
            </div>

            {/* Right Map Visual Placeholder Card */}
            <div className="lg:col-span-6">
              <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold text-gray-900">Wellawatte, Colombo 06 Zone</span>
                  </div>
                  <span className="text-xs font-semibold text-[#0277BD]">Western Province</span>
                </div>

                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#142920] flex items-center justify-center text-center p-6 border border-gray-200">
                  <div className="space-y-2 text-white">
                    <MapPin className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                    <h4 className="text-base font-bold font-heading">Ecobloom Residencies</h4>
                    <p className="text-xs text-gray-300">Wellawatte, Colombo 06</p>
                    <p className="text-[11px] text-emerald-300 font-semibold pt-1">
                      Central Colombo Connectivity
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 text-xs">
                  <span className="text-gray-500">Need personalized directions?</span>
                  <a
                    href="tel:0771727099"
                    className="font-bold text-[#1B5E20] hover:underline flex items-center gap-1"
                  >
                    <span>Call 077 172 7099</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT / BOOKING (RESERVE YOUR HOME TODAY) */}
      <section id="contact" className="py-20 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0D1F17] to-[#183328] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Contact Pitch */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/20 px-3.5 py-1.5 rounded-full border border-emerald-500/30 inline-block">
                  Priority Inquiries
                </span>

                <h2 className="text-3xl sm:text-4xl font-black font-heading leading-tight">
                  Reserve Your Home Today
                </h2>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Don't miss the opportunity to secure your place at Ecobloom Residencies.
                </p>

                {/* Direct Phone Numbers */}
                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 uppercase font-bold block">Primary Hotline</span>
                        <strong className="text-base text-white font-mono font-bold">077 172 7099</strong>
                      </div>
                    </div>
                    <a
                      href="tel:0771727099"
                      className="px-4 py-2 rounded-xl bg-[#1B5E20] hover:bg-[#2E7D32] text-xs font-bold text-white transition-colors"
                    >
                      Call Now
                    </a>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-500/20 text-cyan-400">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 uppercase font-bold block">Secondary Hotline</span>
                        <strong className="text-base text-white font-mono font-bold">076 067 3079</strong>
                      </div>
                    </div>
                    <a
                      href="tel:0760673079"
                      className="px-4 py-2 rounded-xl bg-[#0277BD] hover:bg-[#039BE5] text-xs font-bold text-white transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Interactive Booking Form Card */}
              <div className="lg:col-span-6 bg-white text-gray-900 p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100">
                {formSubmitted ? (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold font-heading">
                      Viewing Request Submitted!
                    </h3>
                    <p className="text-xs text-gray-600">
                      Thank you, <strong>{formData.fullName}</strong>. Our residential sales team will call you shortly at <strong>{formData.phone}</strong>.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-[#1B5E20] text-white font-bold text-xs"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                    <h3 className="text-base font-extrabold text-gray-900 font-heading">
                      Book a Viewing
                    </h3>

                    <div>
                      <label className="block font-bold text-gray-700 mb-1">
                        Apartment Preference
                      </label>
                      <select
                        value={formData.unitType}
                        onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 font-medium focus:ring-2 focus:ring-[#1B5E20] focus:outline-none"
                      >
                        <option value="2-bedroom">2 Bedroom (Couples / Small Families)</option>
                        <option value="3-bedroom">3 Bedroom (Growing Families)</option>
                        <option value="4-bedroom">4 Bedroom (Larger Families)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#1B5E20] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="077 XXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#1B5E20] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-1">
                        Purpose
                      </label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 font-medium focus:ring-2 focus:ring-[#1B5E20] focus:outline-none"
                      >
                        <option value="family">Home for Family</option>
                        <option value="investment">Real Estate Investment</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all hover:scale-101"
                    >
                      Book a Viewing
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Gallery Images */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged Preview"
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/20"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
