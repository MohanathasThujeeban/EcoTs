import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Users, 
  Target, 
  HeartHandshake, 
  ArrowRight, 
  CheckCircle2, 
  Building2,
  Cpu,
  Globe2,
  HardHat,
  Truck,
  Hammer
} from 'lucide-react';
import { leadershipTeam, certifications, milestones } from '../data/team';
import logoImg from '../assets/logo.jpeg';
import PremiumIcon from '../components/PremiumIcon';
import heroBgImg from '../assets/hero-bg.jpg';
import info1Img from '../assets/info1.jpg';

export default function About() {
  const coreValues = [
    {
      title: "Uncompromising Structural Integrity",
      desc: "Zero tolerance for quality defects. Every single pour is verified by certified cube crushing tests and Eurocode structural standards.",
      icon: <PremiumIcon name="security" size={24} badge="squircle" badgeSize="md" variant="emerald" />
    },
    {
      title: "Zero-Harm Safety Culture (HSE)",
      desc: "ISO 45001 certified on-site safety protocols with continuous toolbox talks and 1.2M+ hours without lost-time injuries.",
      icon: <PremiumIcon name="hardhat" size={24} badge="squircle" badgeSize="md" variant="gold" />
    },
    {
      title: "BIM VDC & Digital Precision",
      desc: "Parametric LOD 500 virtual models eliminate costly on-site clashes, ensuring construction speed and schedule certainty.",
      icon: <PremiumIcon name="cpu" size={24} badge="squircle" badgeSize="md" variant="cyan" />
    },
    {
      title: "Commercial Value & On-Time Handover",
      desc: "We engineer for constructability, optimizing material consumption and project timelines without inflating developer CapEx.",
      icon: <PremiumIcon name="hearthandshake" size={24} badge="squircle" badgeSize="md" variant="emerald" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#071913] text-gray-100 relative">
      {/* Page-wide Hero Image Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img src={heroBgImg} alt="" className="w-full h-full object-cover opacity-15 filter blur-xs" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071913]/90 via-[#0B241C]/80 to-[#071913]" />
      </div>

      {/* 1. Header Hero Banner with Background Image & iPhone Glass */}
      <section className="relative py-24 sm:py-28 overflow-hidden z-10 border-b border-emerald-500/20">
        <div className="absolute inset-0 z-0">
          <img src={info1Img} alt="Construction Heritage" className="w-full h-full object-cover opacity-35 filter brightness-75 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071913]/85 via-[#0D281E]/75 to-[#071913]/95 backdrop-blur-xs" />
        </div>
        <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none z-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full ios-glass text-emerald-300 text-xs font-extrabold mb-4 border border-emerald-500/40 shadow-lg">
            <HardHat className="w-4 h-4 text-emerald-400" />
            <span>Our Heritage & Construction Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white font-heading tracking-tight drop-shadow-md leading-tight">
            Engineering & Building Landmark Structures Since 2011
          </h1>
          <p className="text-sm sm:text-base text-gray-200 mt-4 leading-relaxed max-w-2xl mx-auto">
            EcoTS Engineering Pvt Ltd is a premier civil engineering and general contracting firm delivering over 150 landmark commercial superstructures, residential towers, and national infrastructure projects.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision Grid with Frosted Glass Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl ios-glass-card-dark border border-emerald-500/30 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl ios-glass text-emerald-400 flex items-center justify-center border border-white/20">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">Our Core Mission</span>
              <h2 className="text-2xl font-extrabold text-white font-heading">
                To construct enduring, safe, and technologically advanced buildings that empower modern commerce and living.
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                We empower asset developers, corporations, and state engineering authorities with turnkey EPC contracting, advanced structural engineering, deep foundation works, and BIM virtual design that guarantee flawless execution on time and within budget.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-300">
              <span className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> CIDA Grade CS2 General Contractor
              </span>
              <span className="flex items-center gap-1.5 text-cyan-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> ISO 9001:2015 & ISO 45001
              </span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-3xl ios-glass-card-dark text-white border border-emerald-500/40 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />

            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-2xl ios-glass text-cyan-400 border border-white/20 flex items-center justify-center">
                <Globe2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400">Our 2030 Vision</span>
              <h2 className="text-2xl font-extrabold font-heading">
                To be the most reliable, technologically mechanized general contracting firm in the region.
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                By investing in high-capacity heavy machinery, mechanized climbing formwork systems, and multi-disciplinary BIM LOD 500 coordination across 100% of our construction sites, we set the benchmark for modern construction speed and quality.
              </p>
            </div>

            <div className="relative mt-8 pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-gray-300">
              <div>
                <strong className="text-emerald-400 text-xl block font-heading">150+</strong>
                <span className="text-[10px] text-gray-400">Completed Projects</span>
              </div>
              <div>
                <strong className="text-cyan-400 text-xl block font-heading">1.2M+</strong>
                <span className="text-[10px] text-gray-400">Safe Man-Hours</span>
              </div>
              <div>
                <strong className="text-amber-400 text-xl block font-heading">50+</strong>
                <span className="text-[10px] text-gray-400">Heavy Plant Fleet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values with Frosted Glass Cards */}
      <section className="py-16 bg-[#071913]/80 border-y border-emerald-500/20 backdrop-blur-md z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-sky-950/80 px-4 py-1.5 rounded-full border border-sky-500/40">
              Contracting Principles
            </span>
            <h2 className="text-3xl font-extrabold text-white font-heading mt-4">
              Values That Guide Every Construction Site
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl ios-glass-card-dark border border-white/10 hover:border-emerald-400/40 transition-all duration-300 hover:scale-102 shadow-xl"
              >
                <div className="mb-4">
                  {val.icon}
                </div>
                <h3 className="text-base font-bold text-white font-heading">{val.title}</h3>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Timeline of Milestones */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-500/40">
            Our Journey
          </span>
          <h2 className="text-3xl font-extrabold text-white font-heading mt-4">
            Milestones of Construction Excellence
          </h2>
        </div>

        <div className="relative border-l-2 border-emerald-500/40 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
          {milestones.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1 w-6 h-6 rounded-full bg-emerald-500 border-4 border-[#071913] shadow-[0_0_15px_#10B981] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              <div className="p-6 rounded-3xl ios-glass-card-dark border border-white/10 shadow-xl max-w-2xl">
                <span className="text-xs font-extrabold text-cyan-400 font-mono tracking-wider">
                  YEAR {m.year}
                </span>
                <h3 className="text-lg font-bold text-white mt-1 font-heading">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Executive Leadership Team */}
      <section className="py-20 bg-[#0B241C] border-t border-emerald-500/20 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-sky-950/80 px-4 py-1.5 rounded-full border border-sky-500/40">
              Chartered Engineering & Construction Directors
            </span>
            <h2 className="text-3xl font-extrabold text-white font-heading mt-4">
              Principal Consultants & Project Directors
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              Our multidisciplinary leadership board combines decades of on-site general contracting, geotechnical engineering, and high-rise structural expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-3xl ios-glass-card-dark border border-white/10 hover:border-emerald-400/50 transition-all duration-300 flex flex-col justify-between shadow-2xl"
              >
                <div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-gray-900 border border-white/10">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2.5 right-2.5 px-3 py-1 text-[11px] font-bold rounded-lg ios-glass text-white border border-white/30">
                      {member.experience}
                    </div>
                  </div>

                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-400">
                    {member.specialty}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 font-heading">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-400 mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-[11px] text-gray-400 font-mono mt-1">
                    {member.credentials}
                  </p>
                  <p className="text-xs text-gray-300 mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span>Chartered Contractor</span>
                  <span className="font-bold text-emerald-400">Verified Credentials</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Accreditation & Credentials */}
      <section className="py-16 bg-[#071913] text-white z-10 relative border-t border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-extrabold font-heading">
              Certified Contracting Compliance & Standards
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Fully compliant with local statutory and global construction accreditation bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl ios-glass-card-dark border border-white/10 hover:border-emerald-400/40 transition-colors"
              >
                <Award className="w-6 h-6 text-emerald-400 mb-3" />
                <h4 className="text-xs font-bold text-white font-heading">{cert.name}</h4>
                <p className="text-[11px] text-emerald-300/80 mt-1">{cert.issuer}</p>
                <p className="text-[10px] text-gray-400 mt-2 leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom Contact Callout */}
      <section className="py-16 bg-[#0B241C] text-center z-10 relative border-t border-emerald-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Partner with EcoTS Engineering Pvt Ltd on Your Next Build
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            Contact our general contracting directors to arrange an initial constructability review or discuss your upcoming development tender.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-xl transition-all border border-emerald-400/30 hover:scale-105"
            >
              <span>Request Construction Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
