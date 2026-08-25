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
    <div className="flex flex-col min-h-screen bg-[#F7F9F8]">
      {/* 1. Header Banner */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-[#F7F9F8] border-b border-gray-200/80 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B5E20]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E20] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 inline-flex items-center gap-1.5">
            <HardHat className="w-3.5 h-3.5" />
            Construction Tendering & RFPs
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 font-heading mt-4 tracking-tight">
            Request a Construction Tender Bid or BOQ Estimate
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
            Submit your project drawings, request a constructability review, or consult our estimating directors directly.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid (Form + HQ Details) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Interactive Multi-Step RFP Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-gray-200/80 shadow-md">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 font-heading">
                  Construction Tender Inquiry Dispatched!
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName || 'Valued Client'}</strong>. Your project brief has been assigned to our Senior Estimating & General Contracting Desk. Our engineers will review your bill of quantities and get in touch within <strong>24–48 business hours</strong>.
                </p>

                {/* Summary Ticket */}
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-left text-xs max-w-md mx-auto space-y-2">
                  <div className="font-bold text-gray-900 border-b border-gray-200 pb-1.5">
                    Tender Scope Summary:
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Project Type:</span>
                    <strong className="capitalize text-gray-900">{formData.projectType} Build</strong>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Gross Footprint:</span>
                    <strong className="text-gray-900">{formData.areaSqFt.toLocaleString()} sq.ft</strong>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Contracting Services:</span>
                    <strong className="text-emerald-700">{formData.selectedServices.length} Selected Disciplines</strong>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#1B5E20] text-white font-bold text-xs hover:bg-[#2E7D32] transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Submit Another Tender Request</span>
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleNextStep} className="space-y-6">
                {/* Step Indicator */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1B5E20]">
                      Step 0{step} of 03
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 font-heading">
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
                          step >= s ? 'bg-[#1B5E20]' : 'bg-gray-200'
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
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
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
                            className={`p-3 rounded-xl text-xs font-semibold text-left border transition-all ${
                              formData.projectType === t.id
                                ? 'bg-[#1B5E20] text-white border-[#1B5E20] shadow-sm'
                                : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                            }`}
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Approx. Built-up Area (sq.ft)
                        </label>
                        <input
                          type="number"
                          value={formData.areaSqFt}
                          onChange={(e) => setFormData({ ...formData, areaSqFt: Number(e.target.value) })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#1B5E20] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Finish Specification Level
                        </label>
                        <select
                          value={formData.finishGrade}
                          onChange={(e) => setFormData({ ...formData, finishGrade: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#1B5E20] focus:outline-none"
                        >
                          <option value="standard">Standard Commercial Spec</option>
                          <option value="premium">Premium High-Spec Grade</option>
                          <option value="luxury">Ultra-Luxury Architectural Spec</option>
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
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
                                ? 'bg-emerald-50/70 border-emerald-300 text-emerald-900'
                                : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                              isChecked ? 'bg-[#1B5E20] border-[#1B5E20] text-white' : 'border-gray-300 bg-white'
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
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Eng. Samantha Silva"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#1B5E20] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#1B5E20] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+94 77 123 4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#1B5E20] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Developer / Organization
                        </label>
                        <input
                          type="text"
                          placeholder="Commercial Property Holdings Ltd."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#1B5E20] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Tender Brief / Project Specifications
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Provide details on project location, structural drawings status, tender submission deadline..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#1B5E20] focus:outline-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Form Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="px-4 py-2.5 text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Back
                    </button>
                  ) : <div />}

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all hover:scale-102"
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
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0D1F17] text-white border border-emerald-950/60 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />

              <div className="relative space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
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
                  <Phone className="w-5 h-5 text-[#0277BD] flex-shrink-0" />
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
                  <Clock className="w-5 h-5 text-[#0277BD] flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-heading">Office Hours:</strong>
                    Monday – Friday: 08:00 – 18:00 (IST)
                  </div>
                </div>
              </div>

              <div className="relative p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <span>Full NDA & commercial confidentiality guaranteed on all architectural drawings and BOQs.</span>
              </div>
            </div>

            {/* Quick Machinery & Yard Card */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-xs space-y-3">
              <h4 className="text-sm font-bold text-gray-900 font-heading flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#1B5E20]" />
                Plant & Machinery Yards
              </h4>
              <p className="text-xs text-gray-600">
                Heavy plant operations, concrete pump logistics, and steel pre-fabrication yards situated in Western and Southern logistics zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive FAQ Accordion */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0277BD] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Technical Clarity
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 font-heading mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200/80 bg-gray-50/50 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-gray-900 hover:bg-gray-100/60 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3"
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
