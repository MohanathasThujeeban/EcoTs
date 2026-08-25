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

export default function Services({ onOpenEstimator }) {
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'Route': return <Route className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Boxes': return <Boxes className="w-6 h-6" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-6 h-6" />;
      default: return <Building2 className="w-6 h-6" />;
    }
  };

  const constructionWorkflow = [
    {
      step: "01",
      title: "Pre-Construction & BOQ Sizing",
      desc: "Architectural drawing reviews, soil borehole appraisal, constructability audits, and priced tender BOQ preparation.",
      icon: <Search className="w-5 h-5 text-emerald-600" />
    },
    {
      step: "02",
      title: "Structural Engineering & FEA",
      desc: "Finite element computational load modeling, seismic analysis (Eurocode/ACI), and post-tensioned slab engineering.",
      icon: <Cpu className="w-5 h-5 text-[#0277BD]" />
    },
    {
      step: "03",
      title: "BIM LOD 400 Coordination",
      desc: "Multi-disciplinary 3D clash resolution, parametric rebar detailing, and 4D schedule sequencing in Primavera P6.",
      icon: <Boxes className="w-5 h-5 text-teal-600" />
    },
    {
      step: "04",
      title: "Precision On-Site Execution",
      desc: "Deep bored piling, self-climbing formwork, certified concrete cube crushing, and steel superstructure erection.",
      icon: <Hammer className="w-5 h-5 text-amber-600" />
    },
    {
      step: "05",
      title: "Testing, Commissioning & Handover",
      desc: "Full MEP integrated commissioning, As-Built documentation, local authority certificate sign-off, and warranty dossiers.",
      icon: <ShieldCheck className="w-5 h-5 text-[#1B5E20]" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F9F8]">
      {/* Header Banner */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-[#F7F9F8] border-b border-gray-200/80 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B5E20]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E20] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 inline-flex items-center gap-1.5">
            <HardHat className="w-3.5 h-3.5" />
            General Contracting Practice Areas
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 font-heading mt-4 tracking-tight">
            Comprehensive Construction & Civil Engineering Solutions
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
            From high-rise commercial superstructures and post-tensioned highway bridges to deep bored piling and turnkey EPC general contracting, EcoTS Engineering Pvt Ltd delivers total project execution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={onOpenEstimator}
              className="px-6 py-3 rounded-xl bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all hover:scale-102"
            >
              <Calculator className="w-4 h-4" />
              <span>Launch Construction Cost Estimator</span>
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-xs sm:text-sm border border-gray-200 shadow-xs transition-all"
            >
              <span>Request Tender Proposal</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Disciplines Detailed Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center bg-white p-6 sm:p-10 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow`}
              >
                {/* Image / Visual Column */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-inner bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F17]/80 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-[#1B5E20] shadow-sm">
                      {getIcon(service.icon)}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-semibold text-emerald-300">{service.tagline}</p>
                    </div>
                  </div>

                  {/* Benchmark Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    {Object.entries(service.metrics).map(([key, val], idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                        <span className="text-[10px] text-gray-400 font-bold block uppercase truncate">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold text-[#1B5E20] mt-0.5 block">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-1/2 space-y-5">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0277BD]">
                      Construction Discipline 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-heading">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Core Features */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                      Technical Capabilities & Field Scope:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#0277BD]" />
                      Contractual Project Deliverables:
                    </h4>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((deliv, dIdx) => (
                        <li key={dIdx} className="text-xs text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1B5E20]" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1B5E20] hover:bg-[#2E7D32] text-white text-xs font-bold shadow-sm transition-all"
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

      {/* 5-Step Construction Lifecycle Section */}
      <section className="py-20 bg-white border-y border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0277BD] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Contracting Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-heading mt-3">
              The EcoTS Construction Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              From initial geotechnical exploration and structural modeling to topping out and final handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {constructionWorkflow.map((stage, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-gray-50 border border-gray-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white border border-gray-200 shadow-2xs">
                      {stage.icon}
                    </div>
                    <span className="text-2xl font-black text-gray-300 font-mono">
                      {stage.step}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-gray-900 font-heading mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Code Compliance Matrix */}
      <section className="py-16 bg-[#0D1F17] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl sm:text-2xl font-extrabold font-heading mb-3">
            Industry-Standard Construction Software & International Codes
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto mb-8">
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
                className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-xs font-semibold text-gray-200 backdrop-blur-xs"
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
