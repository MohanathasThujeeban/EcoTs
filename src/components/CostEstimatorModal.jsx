import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PremiumIcon from './PremiumIcon';

export default function CostEstimatorModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  const [projectType, setProjectType] = useState('commercial');
  const [areaSqFt, setAreaSqFt] = useState(150000);
  const [finishGrade, setFinishGrade] = useState('premium');
  const [foundationType, setFoundationType] = useState('piled');

  if (!isOpen) return null;

  // Construction Estimation Formulas
  const typeMultipliers = {
    commercial: { baseCostPerSqFt: 85, concreteFactor: 0.052, steelFactor: 0.007, timeMonths: 20 },
    residential: { baseCostPerSqFt: 75, concreteFactor: 0.048, steelFactor: 0.006, timeMonths: 16 },
    infrastructure: { baseCostPerSqFt: 110, concreteFactor: 0.065, steelFactor: 0.009, timeMonths: 24 },
    industrial: { baseCostPerSqFt: 55, concreteFactor: 0.035, steelFactor: 0.008, timeMonths: 12 },
    turnkey: { baseCostPerSqFt: 95, concreteFactor: 0.055, steelFactor: 0.0075, timeMonths: 18 }
  };

  const gradeMultipliers = {
    standard: { cost: 0.90, label: "Standard Commercial Grade" },
    premium: { cost: 1.05, label: "Premium High-Spec Grade" },
    luxury: { cost: 1.25, label: "Ultra-Luxury Architectural Spec" }
  };

  const foundationMultipliers = {
    shallow: { cost: 0.95, extraTime: 0 },
    piled: { cost: 1.08, extraTime: 2 },
    deep_basement: { cost: 1.22, extraTime: 4 }
  };

  const typeConfig = typeMultipliers[projectType];
  const gradeConfig = gradeMultipliers[finishGrade];
  const foundationMod = foundationMultipliers[foundationType];

  const estimatedConstructionCost = Math.round(
    areaSqFt * typeConfig.baseCostPerSqFt * gradeConfig.cost * foundationMod.cost
  );
  const minCost = Math.round(estimatedConstructionCost * 0.92);
  const maxCost = Math.round(estimatedConstructionCost * 1.10);

  const estimatedConcreteM3 = Math.round(areaSqFt * typeConfig.concreteFactor);
  const estimatedSteelTons = Math.round(areaSqFt * typeConfig.steelFactor);

  const estimatedMonths = Math.max(
    6,
    Math.round((typeConfig.timeMonths + foundationMod.extraTime) * (areaSqFt / 150000) ** 0.35)
  );

  const handleTransferToContact = () => {
    onClose();
    navigate('/contact', {
      state: {
        estimatedType: projectType,
        estimatedArea: areaSqFt,
        estimatedGrade: finishGrade,
        calculatedBudgetRange: `$${(minCost / 1000000).toFixed(2)}M - $${(maxCost / 1000000).toFixed(2)}M USD`,
        calculatedMaterials: `${estimatedConcreteM3.toLocaleString()} m³ Concrete • ${estimatedSteelTons.toLocaleString()} Tons Steel`,
        calculatedTimeline: `${estimatedMonths} Months Build Duration`
      }
    });
  };

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
          className="relative w-full max-w-3xl flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#0D1F17] to-[#142920] text-white">
            <div className="flex items-center gap-3">
              <PremiumIcon name="calculator" size={24} badge="squircle" badgeSize="sm" variant="cyan" />
              <div>
                <h3 className="text-lg font-bold font-heading flex items-center gap-2">
                  Construction Cost & Timeline Estimator
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-[#0277BD] text-white">
                    Live
                  </span>
                </h3>
                <p className="text-xs text-gray-300">
                  Instant parametric sizing for construction budgets, material volumes, and build durations.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Controls */}
          <div className="p-6 overflow-y-auto space-y-6 max-h-[75vh]">
            {/* 1. Project Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                1. Project Category / Structure Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'commercial', label: 'Commercial High-Rise' },
                  { id: 'residential', label: 'Residential Enclave' },
                  { id: 'infrastructure', label: 'Highway & Bridge' },
                  { id: 'industrial', label: 'Industrial Warehouse' },
                  { id: 'turnkey', label: 'Turnkey Building EPC' }
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setProjectType(type.id)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all border ${
                      projectType === type.id
                        ? 'bg-[#1B5E20] text-white border-[#1B5E20] shadow-md'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Total Built-up Area Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  2. Gross Built-up Footprint
                </label>
                <span className="text-sm font-extrabold text-[#1B5E20] bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                  {areaSqFt.toLocaleString()} sq.ft
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="1000000"
                step="10000"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1B5E20]"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>10,000 sq.ft (Boutique)</span>
                <span>500,000 sq.ft</span>
                <span>1,000,000 sq.ft (Mega Scale)</span>
              </div>
            </div>

            {/* 3. Finish Grade & Foundation Complexity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  3. Construction Finish Specification
                </label>
                <select
                  value={finishGrade}
                  onChange={(e) => setFinishGrade(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 bg-gray-50 font-medium focus:ring-2 focus:ring-[#1B5E20] focus:outline-none"
                >
                  <option value="standard">Standard Commercial Grade Spec</option>
                  <option value="premium">Premium High-Spec Grade</option>
                  <option value="luxury">Ultra-Luxury Architectural Spec</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  4. Substructure & Foundation Type
                </label>
                <select
                  value={foundationType}
                  onChange={(e) => setFoundationType(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 bg-gray-50 font-medium focus:ring-2 focus:ring-[#1B5E20] focus:outline-none"
                >
                  <option value="shallow">Shallow Reinforced Pad Footings</option>
                  <option value="piled">Cast-in-Situ Bored Piling to Rock</option>
                  <option value="deep_basement">Deep Multi-Level Basement Secant Shoring</option>
                </select>
              </div>
            </div>

            {/* Output Summary Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#F7F9F8] to-emerald-50/40 border border-emerald-200/80 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1B5E20] uppercase tracking-wider mb-4">
                <PremiumIcon name="sparkles" size={14} badge="none" />
                Construction Parametric Estimate Summary
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Est Budget */}
                <div className="p-3.5 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                    <PremiumIcon name="coins" size={16} badge="none" />
                    <span>Estimated Total CapEx</span>
                  </div>
                  <div className="text-base sm:text-lg font-black text-gray-900 font-heading">
                    ${(minCost / 1000000).toFixed(1)}M – ${(maxCost / 1000000).toFixed(1)}M USD
                  </div>
                  <span className="text-[10px] text-gray-400">Turnkey Construction</span>
                </div>

                {/* Materials */}
                <div className="p-3.5 rounded-xl bg-white border border-emerald-100 shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold mb-1">
                    <PremiumIcon name="building" size={16} badge="none" />
                    <span>Estimated Materials</span>
                  </div>
                  <div className="text-base sm:text-lg font-black text-emerald-800 font-heading">
                    {estimatedConcreteM3.toLocaleString()} m³
                  </div>
                  <span className="text-[10px] text-emerald-600 font-medium">
                    + {estimatedSteelTons.toLocaleString()} Tons Steel
                  </span>
                </div>

                {/* Timeline */}
                <div className="p-3.5 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                    <PremiumIcon name="calendar" size={16} badge="none" />
                    <span>Estimated Build Timeline</span>
                  </div>
                  <div className="text-base sm:text-lg font-black text-[#0277BD] font-heading">
                    {estimatedMonths} Months
                  </div>
                  <span className="text-[10px] text-gray-400">Groundbreaking to Handover</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-500 text-center sm:text-left">
              *Preliminary estimations based on benchmark CIDA construction indices.
            </p>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleTransferToContact}
                className="w-1/2 sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#1B5E20] hover:bg-[#2E7D32] rounded-xl shadow-md transition-all hover:shadow-lg"
              >
                <span>Request Formal Tender Bid</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
