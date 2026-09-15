import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  Building2, 
  ShieldCheck, 
  Calculator,
  ArrowRight,
  RotateCcw,
  FileCheck2,
  Layers,
  HardHat
} from 'lucide-react';
import { faqs } from '../data/faqs';
import heroBgImg from '../assets/hero-bg.jpg';
import info1Img from '../assets/info1.jpg';

export default function Contact() {
  const location = useLocation();
  const estimatorState = location.state || {};

  // Form State
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const [formData, setFormData] = useState({
    projectType: estimatorState.estimatedType || 'commercial',
    areaSqFt: estimatorState.estimatedArea || 150000,
    finishGrade: estimatorState.estimatedGrade || 'premium',
    targetTimeline: '12-18 Months',
    selectedServices: ['General Building & Turnkey EPC', 'Structural Superstructures & Concrete Works'],
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: estimatorState.calculatedBudgetRange 
      ? `Estimated budget from online estimator: ${estimatorState.calculatedBudgetRange}. Material volume: ${estimatorState.calculatedMaterials}. Estimated duration: ${estimatorState.calculatedTimeline}.`
      : ''
  });

  const servicesList = [
    'General Building & Turnkey EPC',
    'Structural Superstructures & Concrete Works',
    'Civil Infrastructure, Highways & Bridges',
    'Deep Foundations, Bored Piling & Shoring',
    'BIM LOD 500 VDC Coordination',
    'Construction Project Management & QA/QC'
  ];

  const handleServiceToggle = (service) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(service);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== service)
          : [...prev.selectedServices, service]
      };
    });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final Submit
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    setFormData({
      projectType: 'commercial',
      areaSqFt: 150000,
      finishGrade: 'premium',
      targetTimeline: '12-18 Months',
      selectedServices: ['General Building & Turnkey EPC'],
      fullName: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#071913] text-gray-100 relative">
      {/* Background Image Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img src={heroBgImg} alt="" className="w-full h-full object-cover opacity-15 filter blur-xs" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071913]/90 via-[#0B241C]/80 to-[#071913]" />
      </div>

      {/* 1. Header Hero Banner with Background Image */}
      <section className="relative py-24 sm:py-28 overflow-hidden z-10 border-b border-emerald-500/20">
        <div className="absolute inset-0 z-0">
          <img src={info1Img} alt="Tendering Desk" className="w-full h-full object-cover opacity-35 filter brightness-75 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071913]/85 via-[#0D281E]/75 to-[#071913]/95 backdrop-blur-xs" />
        </div>
        <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none z-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-4 py-2 rounded-full border border-emerald-500/40 inline-flex items-center gap-2 shadow-lg backdrop-blur-md">
            <HardHat className="w-4 h-4 text-emerald-400" />
            Construction Tendering & RFPs
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white font-heading mt-5 tracking-tight leading-tight drop-shadow-md">
            Request a Construction Tender Bid or BOQ Estimate
          </h1>
          <p className="text-sm sm:text-base text-gray-200 mt-4 leading-relaxed max-w-2xl mx-auto">
            Submit your project drawings, request a constructability review, or consult our estimating directors directly.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid (Form + HQ Details) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Interactive Multi-Step RFP Form in iPhone Glass */}
          <div className="lg:col-span-7 ios-glass-card-dark p-6 sm:p-10 rounded-3xl border border-white/15 shadow-2xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-5"
              >
                <div className="w-16 h-16 rounded-full ios-glass text-emerald-400 flex items-center justify-center mx-auto shadow-inner border border-white/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-white font-heading">
                  Construction Tender Inquiry Dispatched!
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName || 'Valued Client'}</strong>. Your project brief has been assigned to our Senior Estimating & General Contracting Desk. Our engineers will review your bill of quantities and get in touch within <strong>24–48 business hours</strong>.
                </p>

                {/* Summary Ticket */}
                <div className="p-5 rounded-2xl ios-glass border border-white/20 text-left text-xs max-w-md mx-auto space-y-2">
                  <div className="font-bold text-white border-b border-white/10 pb-1.5">
                    Tender Scope Summary:
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Project Type:</span>
                    <strong className="capitalize text-emerald-300">{formData.projectType} Build</strong>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Gross Footprint:</span>
                    <strong className="text-white">{formData.areaSqFt.toLocaleString()} sq.ft</strong>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Contracting Services:</span>
                    <strong className="text-cyan-300">{formData.selectedServices.length} Selected Disciplines</strong>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-colors shadow-lg"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Submit Another Tender Request</span>
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleNextStep} className="space-y-6">
                {/* Step Indicator */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                      Step 0{step} of 03
                    </span>
                    <h3 className="text-lg font-bold text-white font-heading">
                      {step === 1 && 'Project Classification & Footprint'}
                      {step === 2 && 'Required Construction Disciplines'}
                      {step === 3 && 'Contact Details & Project Brief'}
                    </h3>
                  </div>
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className={`w-7 h-2 rounded-full transition-all ${
                          step >= s ? 'bg-emerald-400 shadow-[0_0_10px_#10B981]' : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* STEP 1: Project Scope */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-5"
                  >
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        1. Structure / Development Type
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {[
                          { id: 'commercial', label: 'Commercial High-Rise' },
                          { id: 'residential', label: 'Residential Enclave' },
                          { id: 'infrastructure', label: 'Highway & Bridge' },
                          { id: 'industrial', label: 'Industrial Warehouse' },
                          { id: 'turnkey', label: 'Turnkey Building EPC' }
                        ].map((t) => (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: t.id })}
                            className={`p-3 rounded-2xl text-xs font-semibold text-left border transition-all ${
                              formData.projectType === t.id
                                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-400 shadow-md'
                                : 'ios-glass text-gray-300 border-white/10 hover:bg-white/15'
                            }`}
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                          Approx. Built-up Area (sq.ft)
                        </label>
                        <input
                          type="number"
                          value={formData.areaSqFt}
                          onChange={(e) => setFormData({ ...formData, areaSqFt: Number(e.target.value) })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-white/20 ios-glass text-white focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                          Finish Specification Level
                        </label>
                        <select
                          value={formData.finishGrade}
                          onChange={(e) => setFormData({ ...formData, finishGrade: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-white/20 ios-glass text-white focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                        >
                          <option value="standard" className="bg-gray-900 text-white">Standard Commercial Spec</option>
                          <option value="premium" className="bg-gray-900 text-white">Premium High-Spec Grade</option>
                          <option value="luxury" className="bg-gray-900 text-white">Ultra-Luxury Architectural Spec</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Required Disciplines */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                      Select Required Construction & Engineering Services:
                    </label>
                    <div className="space-y-2">
                      {servicesList.map((service, idx) => {
                        const isChecked = formData.selectedServices.includes(service);
                        return (
                          <div
                            key={idx}
                            onClick={() => handleServiceToggle(service)}
                            className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                              isChecked
                                ? 'bg-emerald-950/80 border-emerald-400 text-white'
                                : 'ios-glass border-white/10 text-gray-300 hover:bg-white/15'
                            }`}
                          >
                            <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                              isChecked ? 'bg-emerald-500 border-emerald-400 text-white' : 'border-gray-500 bg-black/40'
                            }`}>
                              {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                            </div>
                            <span className="text-xs font-semibold">{service}</span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Contact Info & Message */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Eng. Samantha Silva"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-white/20 ios-glass text-white focus:ring-2 focus:ring-emerald-400 focus:outline-none placeholder-gray-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-white/20 ios-glass text-white focus:ring-2 focus:ring-emerald-400 focus:outline-none placeholder-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+94 77 123 4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-white/20 ios-glass text-white focus:ring-2 focus:ring-emerald-400 focus:outline-none placeholder-gray-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                          Developer / Organization
                        </label>
                        <input
                          type="text"
                          placeholder="Commercial Property Holdings Ltd."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-white/20 ios-glass text-white focus:ring-2 focus:ring-emerald-400 focus:outline-none placeholder-gray-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                        Tender Brief / Project Specifications
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Provide details on project location, structural drawings status, tender submission deadline..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-white/20 ios-glass text-white focus:ring-2 focus:ring-emerald-400 focus:outline-none placeholder-gray-400"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Form Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="px-4 py-2.5 text-xs font-semibold text-gray-300 hover:text-white transition-colors"
                    >
                      Back
                    </button>
                  ) : <div />}

                  <button
                    type="submit"
                    className="px-7 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition-all hover:scale-102 border border-emerald-400/30"
                  >
                    <span>{step === 3 ? 'Submit Tender RFP' : 'Next Step'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Direct Contacts & HQ Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl ios-glass-card-dark text-white border border-emerald-500/30 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />

              <div className="relative space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
                  Contracting Headquarters & Estimating Desk
                </span>
                <h3 className="text-xl font-extrabold font-heading">
                  EcoTS Engineering Pvt Ltd
                </h3>
              </div>

              <div className="relative space-y-4 text-xs text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading">Headquarters:</strong>
                    Level 14, Verdia Tower, Galle Road, Colombo 03, Sri Lanka
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-heading">Hotline:</strong>
                    +94 11 234 5678 / +94 77 987 6543
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-heading">Tender Inquiries:</strong>
                    contracting@ecots.com
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-heading">Office Hours:</strong>
                    Monday – Friday: 08:00 – 18:00 (IST)
                  </div>
                </div>
              </div>

              <div className="relative p-4 rounded-2xl ios-glass border border-white/20 text-xs text-gray-200 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <span>Full NDA & commercial confidentiality guaranteed on all architectural drawings and BOQs.</span>
              </div>
            </div>

            {/* Quick Machinery & Yard Card */}
            <div className="p-6 rounded-3xl ios-glass-card-dark border border-white/15 shadow-xl space-y-3">
              <h4 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-400" />
                Plant & Machinery Yards
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Heavy plant operations, concrete pump logistics, and steel pre-fabrication yards situated in Western and Southern logistics zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive FAQ Accordion */}
      <section className="py-16 bg-[#0B241C] border-t border-emerald-500/20 z-10 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-sky-950/80 px-4 py-1 rounded-full border border-sky-500/40">
              Technical Clarity
            </span>
            <h2 className="text-3xl font-extrabold text-white font-heading mt-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl ios-glass-card-dark border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-white hover:bg-white/10 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-emerald-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/10 pt-3"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
