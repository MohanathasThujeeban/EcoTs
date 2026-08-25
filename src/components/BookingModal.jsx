import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X, Calendar, Clock, Phone, User, Mail, CheckCircle2, Building, Sparkles } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    unitType: '3-bedroom',
    purpose: 'family',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 12:00 PM)',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={resetAndClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.45 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 bg-[#0D1F17] text-white">
            <div>
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-emerald-400 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                VIP Private Viewing
              </span>
              <h3 className="text-xl font-bold font-heading mt-1">
                Schedule a Property Tour
              </h3>
              <p className="text-xs text-gray-300">
                EcoTS Residencies • 33, Moor's Road, Colombo 06
              </p>
            </div>

            <button
              onClick={resetAndClose}
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 font-heading">
                  Viewing Request Received!
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Our residential advisor will call you shortly at <strong>{formData.phone}</strong> to confirm your viewing schedule.
                </p>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 text-left space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    Viewing Details:
                  </div>
                  <div>Apartment Interest: <strong>{formData.unitType.replace('-', ' ').toUpperCase()}</strong></div>
                  <div>Primary Goal: <strong>{formData.purpose === 'family' ? 'Family Forever Home' : 'Property Investment'}</strong></div>
                  <div>Direct Hotline: <strong>077 172 7099 / 076 067 3079</strong></div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={resetAndClose}
                    className="w-full py-3 rounded-xl bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold text-xs shadow-md transition-all"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Apartment Type Interested In
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: '2-bedroom', label: '2 Bedroom', sub: 'Couples / Small' },
                      { id: '3-bedroom', label: '3 Bedroom', sub: 'Growing Family' },
                      { id: '4-bedroom', label: '4 Bedroom', sub: 'Larger Family' }
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, unitType: type.id })}
                        className={`p-2.5 rounded-xl text-center border transition-all ${
                          formData.unitType === type.id
                            ? 'bg-[#1B5E20] text-white border-[#1B5E20] shadow-sm'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        <div className="font-bold">{type.label}</div>
                        <div className={`text-[10px] ${formData.unitType === type.id ? 'text-emerald-200' : 'text-gray-400'}`}>
                          {type.sub}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#1B5E20] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="077 XXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#1B5E20] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Preferred Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#1B5E20] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Primary Objective
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-gray-50 font-medium focus:ring-2 focus:ring-[#1B5E20] focus:outline-none"
                    >
                      <option value="family">Family Residential Living</option>
                      <option value="investment">Real Estate Investment</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all hover:scale-101"
                  >
                    Confirm Booking Request
                  </button>
                  <p className="text-[11px] text-gray-400 text-center mt-2">
                    Immediate assistance: <a href="tel:0771727099" className="text-[#0277BD] font-bold">077 172 7099</a> or <a href="tel:0760673079" className="text-[#0277BD] font-bold">076 067 3079</a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
