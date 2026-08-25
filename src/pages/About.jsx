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

export default function About() {
  const coreValues = [
    {
      title: "Uncompromising Structural Integrity",
      desc: "Zero tolerance for quality defects. Every single pour is verified by certified cube crushing tests and Eurocode structural standards.",
      icon: <ShieldCheck className="w-6 h-6 text-[#1B5E20]" />
    },
    {
      title: "Zero-Harm Safety Culture (HSE)",
      desc: "ISO 45001 certified on-site safety protocols with continuous toolbox talks and 1.2M+ hours without lost-time injuries.",
      icon: <HardHat className="w-6 h-6 text-amber-600" />
    },
    {
      title: "BIM VDC & Digital Precision",
      desc: "Parametric LOD 500 virtual models eliminate costly on-site clashes, ensuring construction speed and schedule certainty.",
      icon: <Cpu className="w-6 h-6 text-[#0277BD]" />
    },
    {
      title: "Commercial Value & On-Time Handover",
      desc: "We engineer for constructability, optimizing material consumption and project timelines without inflating developer CapEx.",
      icon: <HeartHandshake className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F9F8]">
      {/* 1. Header Banner */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-[#F7F9F8] border-b border-gray-200/80 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B5E20]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#1B5E20] text-xs font-bold mb-4">
            <HardHat className="w-3.5 h-3.5" />
            <span>Our Heritage & Construction Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 font-heading tracking-tight">
            Engineering & Building Landmark Structures Since 2011
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
            EcoTS Engineering Pvt Ltd is a premier civil engineering and general contracting firm delivering over 150 landmark commercial superstructures, residential towers, and national infrastructure projects.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/80 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#1B5E20] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E20]">Our Core Mission</span>
              <h2 className="text-2xl font-extrabold text-gray-900 font-heading">
                To construct enduring, safe, and technologically advanced buildings that empower modern commerce and living.
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We empower asset developers, corporations, and state engineering authorities with turnkey EPC contracting, advanced structural engineering, deep foundation works, and BIM virtual design that guarantee flawless execution on time and within budget.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4 text-xs font-semibold text-gray-700">
              <span className="flex items-center gap-1 text-[#1B5E20]">
                <CheckCircle2 className="w-4 h-4" /> CIDA Grade CS2 General Contractor
              </span>
              <span className="flex items-center gap-1 text-[#0277BD]">
                <CheckCircle2 className="w-4 h-4" /> ISO 9001:2015 & ISO 45001
              </span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0D1F17] text-white border border-emerald-950/60 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />

            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <Globe2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Our 2030 Vision</span>
              <h2 className="text-2xl font-extrabold font-heading">
                To be the most reliable, technologically mechanized general contracting firm in the region.
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                By investing in high-capacity heavy machinery, mechanized climbing formwork systems, and multi-disciplinary BIM LOD 500 coordination across 100% of our construction sites, we set the benchmark for modern construction speed and quality.
              </p>
            </div>

            <div className="relative mt-8 pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-gray-300">
              <div>
                <strong className="text-emerald-400 text-lg block font-heading">150+</strong>
                <span className="text-[10px] text-gray-400">Completed Projects</span>
              </div>
              <div>
                <strong className="text-cyan-400 text-lg block font-heading">1.2M+</strong>
                <span className="text-[10px] text-gray-400">Safe Man-Hours</span>
              </div>
              <div>
                <strong className="text-amber-400 text-lg block font-heading">50+</strong>
                <span className="text-[10px] text-gray-400">Heavy Plant Fleet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-16 bg-white border-y border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0277BD] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Contracting Principles
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 font-heading mt-3">
              Values That Guide Every Construction Site
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-gray-50 border border-gray-200/70 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 font-heading">{val.title}</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Timeline of Milestones */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E20] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Our Journey
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 font-heading mt-3">
            Milestones of Construction Excellence
          </h2>
        </div>

        <div className="relative border-l-2 border-emerald-200 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
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
              <div className="absolute -left-[31px] md:-left-[47px] top-1 w-6 h-6 rounded-full bg-[#1B5E20] border-4 border-white shadow-md flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xs max-w-2xl">
                <span className="text-xs font-extrabold text-[#0277BD] font-mono tracking-wider">
                  YEAR {m.year}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1 font-heading">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Executive Leadership Team */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0277BD] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Chartered Engineering & Construction Directors
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 font-heading mt-3">
              Principal Consultants & Project Directors
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Our multidisciplinary leadership board combines decades of on-site general contracting, geotechnical engineering, and high-rise structural expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-3xl bg-gray-50 border border-gray-200/80 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-gray-200 shadow-inner">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 text-[11px] font-bold rounded-lg bg-black/70 backdrop-blur-md text-white">
                      {member.experience}
                    </div>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0277BD]">
                    {member.specialty}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1 font-heading">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#1B5E20] mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-[11px] text-gray-500 font-mono mt-1">
                    {member.credentials}
                  </p>
                  <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-500">
                  <span>Chartered Contractor</span>
                  <span className="font-semibold text-emerald-700">Verified Credentials</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Accreditation & Credentials */}
      <section className="py-16 bg-[#0D1F17] text-white">
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
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-colors"
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
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-heading">
            Partner with EcoTS Engineering Pvt Ltd on Your Next Build
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
            Contact our general contracting directors to arrange an initial constructability review or discuss your upcoming development tender.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-102"
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
