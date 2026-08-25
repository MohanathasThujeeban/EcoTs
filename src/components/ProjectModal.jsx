import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Layers, ShieldCheck, CheckCircle2, ChevronRight, BarChart3, Building, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectModal({ project, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 my-auto"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-gray-100">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-[#1B5E20]/10 text-[#1B5E20] border border-[#1B5E20]/20">
                {project.category}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                {project.rating}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto px-6 py-6 space-y-6">
            {/* Title & Tagline */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-heading">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-[#0277BD] font-medium mt-1">
                {project.tagline}
              </p>
            </div>

            {/* Image Gallery */}
            <div className="space-y-3">
              <div className="relative aspect-video sm:aspect-[21/9] w-full rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                <img
                  src={project.images[activeImageIndex] || project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1 text-xs font-medium bg-black/60 backdrop-blur-md text-white rounded-lg">
                  {activeImageIndex + 1} / {project.images.length}
                </div>
              </div>

              {project.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                        activeImageIndex === idx ? 'border-[#1B5E20] scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <MapPin className="w-3.5 h-3.5 text-[#1B5E20]" />
                  <span>Location</span>
                </div>
                <p className="text-sm font-bold text-gray-800 mt-1">{project.location}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Calendar className="w-3.5 h-3.5 text-[#0277BD]" />
                  <span>Delivery</span>
                </div>
                <p className="text-sm font-bold text-gray-800 mt-1">{project.year} ({project.status})</p>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Building className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Built-up Footprint</span>
                </div>
                <p className="text-sm font-bold text-gray-800 mt-1">{project.area}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <HardHat className="w-3.5 h-3.5" />
                  <span>Construction Volume</span>
                </div>
                <p className="text-sm font-bold text-emerald-800 mt-1">{project.constructionScale}</p>
              </div>
            </div>

            {/* Construction Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0277BD]/5 border border-[#0277BD]/15">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0277BD] mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0277BD]" />
                  Site & Engineering Challenge
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1B5E20]/5 border border-[#1B5E20]/15">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B5E20] mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1B5E20]" />
                  EcoTS Construction Solution
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Scope of Works & Structural Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#1B5E20]" />
                  Contracted Scope of Works
                </h4>
                <ul className="space-y-2">
                  {project.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#0277BD]" />
                  Key Construction Metrics
                </h4>
                <div className="space-y-2">
                  {Object.entries(project.keyStats).map(([key, val], idx) => {
                    const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                    return (
                      <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100 text-xs">
                        <span className="text-gray-500 font-medium">{formattedKey}</span>
                        <span className="font-bold text-gray-900">{val}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-100">
            <div className="hidden sm:block text-xs text-gray-500">
              Project Developer: <span className="font-semibold text-gray-800">{project.client}</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors"
              >
                Close
              </button>
              <Link
                to="/contact"
                onClick={onClose}
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#1B5E20] hover:bg-[#2E7D32] rounded-xl shadow-md transition-all hover:shadow-lg"
              >
                <span>Request Tender Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
