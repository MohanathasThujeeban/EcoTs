import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Route, 
  Layers, 
  Boxes, 
  ClipboardCheck, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  Sparkles, 
  Cpu, 
  ChevronRight,
  Calculator,
  Hammer,
  Search,
  Award,
  Truck,
  HardHat
} from 'lucide-react';
import { services } from '../data/services';
import PremiumIcon from '../components/PremiumIcon';
import heroBgImg from '../assets/hero-bg.jpg';
import info2Img from '../assets/info2.jpg';

export default function Services({ onOpenEstimator }) {
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);

  const getIcon = (iconName, variant = "emerald") => {
    return <PremiumIcon name={iconName} size={22} badge="squircle" badgeSize="md" variant={variant} />;
  };

  const constructionWorkflow = [
    {
      step: "01",
      title: "Pre-Construction & BOQ Sizing",
      desc: "Architectural drawing reviews, soil borehole appraisal, constructability audits, and priced tender BOQ preparation.",
      icon: <PremiumIcon name="search" size={20} badge="squircle" badgeSize="sm" variant="emerald" />
    },
    {
      step: "02",
      title: "Structural Engineering & FEA",
      desc: "Finite element computational load modeling, seismic analysis (Eurocode/ACI), and post-tensioned slab engineering.",
      icon: <PremiumIcon name="cpu" size={20} badge="squircle" badgeSize="sm" variant="cyan" />
    },
    {
      step: "03",
      title: "BIM LOD 400 Coordination",
      desc: "Multi-disciplinary 3D clash resolution, parametric rebar detailing, and 4D schedule sequencing in Primavera P6.",
      icon: <PremiumIcon name="layers" size={20} badge="squircle" badgeSize="sm" variant="gold" />
    },
    {
      step: "04",
      title: "Precision On-Site Execution",
      desc: "Deep bored piling, self-climbing formwork, certified concrete cube crushing, and steel superstructure erection.",
      icon: <PremiumIcon name="hammer" size={20} badge="squircle" badgeSize="sm" variant="gold" />
    },
    {
      step: "05",
      title: "Testing, Commissioning & Handover",
      desc: "Full MEP integrated commissioning, As-Built documentation, local authority certificate sign-off, and warranty dossiers.",
      icon: <PremiumIcon name="security" size={20} badge="squircle" badgeSize="sm" variant="emerald" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#071913] text-gray-100 relative">
      {/* Dynamic Background Image overlay for full page depth */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img src={heroBgImg} alt="" className="w-full h-full object-cover opacity-15 filter blur-xs" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071913]/90 via-[#0B241C]/80 to-[#071913]" />
      </div>

      {/* Header Hero Banner with Background Image & iPhone Glass */}
      <section className="relative py-24 sm:py-28 overflow-hidden z-10 border-b border-emerald-500/20">
        <div className="absolute inset-0 z-0">
          <img src={info2Img} alt="Civil Engineering Works" className="w-full h-full object-cover opacity-35 filter brightness-75 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071913]/85 via-[#0D281E]/75 to-[#071913]/95 backdrop-blur-xs" />
        </div>
        <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none z-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-4 py-2 rounded-full border border-emerald-500/40 inline-flex items-center gap-2 shadow-lg backdrop-blur-md">
            <HardHat className="w-4 h-4 text-emerald-400" />
            General Contracting Practice Areas
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white font-heading mt-5 tracking-tight leading-tight drop-shadow-md">
            Comprehensive Construction & Civil Engineering Solutions
          </h1>
          <p className="text-sm sm:text-base text-gray-200 mt-4 leading-relaxed max-w-2xl mx-auto">
            From high-rise commercial superstructures and post-tensioned highway bridges to deep bored piling and turnkey EPC general contracting, EcoTS Engineering Pvt Ltd delivers total project execution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={onOpenEstimator}
              className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2.5 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all hover:scale-105 border border-emerald-400/30"
            >
              <Calculator className="w-4 h-4" />
              <span>Launch Construction Cost Estimator</span>
            </button>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-2xl ios-glass text-white font-bold text-xs sm:text-sm hover:bg-white/20 transition-all border border-white/30 backdrop-blur-xl shadow-lg"
            >
              <span>Request Tender Proposal</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Disciplines Detailed Grid with iPhone Frosted Glass Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center ios-glass-card-dark p-6 sm:p-10 rounded-3xl hover:border-emerald-400/50 transition-all duration-300 shadow-2xl`}
              >
                {/* Image / Visual Column */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071913]/90 via-transparent to-transparent" />
                    
                    {/* Glass Badge */}
                    <div className="absolute top-4 left-4 p-2.5 rounded-2xl ios-glass text-emerald-400 shadow-lg border border-white/30">
                      {getIcon(service.icon)}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-semibold text-emerald-300 drop-shadow-sm">{service.tagline}</p>
                    </div>
                  </div>

                  {/* Benchmark Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2.5 mt-4">
                    {Object.entries(service.metrics).map(([key, val], idx) => (
                      <div key={idx} className="p-3 rounded-2xl ios-glass-dark text-center border border-emerald-500/20">
                        <span className="text-[10px] text-emerald-400/80 font-bold block uppercase truncate">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold text-white mt-0.5 block font-heading">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-1/2 space-y-5">
                  <div className="space-y-2">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400">
                      Construction Discipline 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Core Features */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Technical Capabilities & Field Scope:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="p-4 rounded-2xl ios-glass-dark border border-white/10 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-cyan-400" />
                      Contractual Project Deliverables:
                    </h4>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((deliv, dIdx) => (
                        <li key={dIdx} className="text-xs text-gray-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981]" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-md transition-all border border-emerald-400/30 hover:scale-102"
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5-Step Construction Lifecycle Section with Glass Cards */}
      <section className="py-20 z-10 relative border-y border-emerald-500/20 bg-[#071913]/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-sky-950/80 px-4 py-1.5 rounded-full border border-sky-500/40">
              Contracting Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-4">
              The EcoTS Construction Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              From initial geotechnical exploration and structural modeling to topping out and final handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {constructionWorkflow.map((stage, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-3xl ios-glass-card-dark flex flex-col justify-between hover:scale-102 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {stage.icon}
                    </div>
                    <span className="text-2xl font-black text-emerald-500/40 font-mono">
                      {stage.step}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white font-heading mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Code Compliance Matrix */}
      <section className="py-16 bg-[#0B241C] text-white z-10 relative border-t border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl sm:text-2xl font-extrabold font-heading mb-3">
            Industry-Standard Construction Software & International Codes
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto mb-8">
            We operate fully certified engineering tools and maintain adherence to national and global contracting standards.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "Autodesk Revit 2026",
              "CSI ETABS 22",
              "CSI SAP2000",
              "Primavera P6 EPPM",
              "PLAXIS 3D Geotechnical",
              "Autodesk Navisworks Manage",
              "Eurocodes (BS EN 1990-1999)",
              "ACI 318-19 Standards",
              "CIDA CS2 Specifications"
            ].map((software, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl ios-glass text-xs font-semibold text-emerald-300 border border-emerald-500/30 backdrop-blur-md"
              >
                {software}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
