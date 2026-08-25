import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.jpeg';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Smoother, realistic engineering loading pace (total ~2.8s)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              if (onFinish) onFinish();
            }, 600);
          }, 300);
          return 100;
        }
        const increment = prev < 30 ? 4 : prev < 70 ? 3 : 5;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onFinish]);

  // Civil Engineering Loading Stages
  const getEngineeringPhase = (pct) => {
    if (pct < 30) return "STAGE 01 • GEOTECHNICAL SOIL & DEEP BORED PILING";
    if (pct < 60) return "STAGE 02 • REINFORCED CONCRETE SUPERSTRUCTURE";
    if (pct < 85) return "STAGE 03 • BIM LOD 500 VDC VIRTUAL CLASH ANALYSIS";
    return "STAGE 04 • QUALITY AUDIT & FINAL HANDOVER";
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="loader-wrapper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1712] text-white overflow-hidden select-none"
        >
          {/* 3D Blueprint Drafting Grid Background */}
          <div className="absolute inset-0 blueprint-grid-dark opacity-40 pointer-events-none" />

          {/* 3D Isometric Rotating Axis Rings (Civil Engineering CAD feel) */}
          <div className="absolute w-[500px] h-[500px] pointer-events-none flex items-center justify-center">
            {/* Outer X/Y Axis Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-emerald-500/20 border-dashed"
            />
            {/* Inner Z-Axis Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-10 rounded-full border border-cyan-500/20 border-dashed"
            />
          </div>

          {/* Ambient Lighting Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.25, 0.45, 0.25]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[500px] h-[500px] rounded-full bg-[#1B5E20] blur-[140px] pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.35, 0.2]
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[400px] h-[400px] rounded-full bg-[#0277BD] blur-[120px] pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
            {/* 3D Isometric Construction Frame with Logo */}
            <div className="relative w-48 h-48 mb-6 flex items-center justify-center perspective-800">
              {/* 3D Wireframe Superstructure Floors Rising with Progress */}
              <div className="absolute inset-0 flex flex-col justify-end items-center p-2 opacity-30">
                {[4, 3, 2, 1].map((floor) => (
                  <motion.div
                    key={floor}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: progress >= floor * 20 ? 1 : 0.2,
                      scale: progress >= floor * 20 ? 1 : 0.8
                    }}
                    className="w-full h-7 mb-1 rounded-lg border border-emerald-400 bg-emerald-500/10 flex items-center justify-between px-2 text-[9px] font-mono text-emerald-300"
                  >
                    <span>L{floor} FRAME</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </motion.div>
                ))}
              </div>

              {/* 3D Perimeter Scanning Ring */}
              <svg className="absolute inset-0 w-full h-full p-2">
                <rect
                  x="10"
                  y="10"
                  width="172"
                  height="172"
                  rx="32"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />
                <motion.rect
                  x="10"
                  y="10"
                  width="172"
                  height="172"
                  rx="32"
                  fill="none"
                  stroke="url(#cadGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="520"
                  strokeDashoffset={520 - (520 * progress) / 100}
                  transition={{ ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="cadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="50%" stopColor="#0277BD" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>

              {/* High-Contrast Square Logo Box */}
              <motion.div
                initial={{ scale: 0.8, rotateY: -15 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6 }}
                className="w-32 h-32 rounded-2xl bg-white p-3 shadow-2xl border-2 border-emerald-400/60 flex items-center justify-center overflow-hidden z-20 relative"
              >
                <img
                  src={logoImg}
                  alt="EcoTS Engineering Pvt Ltd Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>

            {/* Brand Title */}
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-heading">
                Eco <span className="text-emerald-400">TS</span>
              </h2>
              <p className="text-xs uppercase font-extrabold tracking-widest text-[#039BE5]">
                Engineering Pvt Ltd
              </p>
              <p className="text-[11px] text-gray-300 font-medium pt-1">
                Civil Engineering • Superstructures • 33, Moor's Road, Colombo 06
              </p>
            </div>

            {/* Dynamic Civil Engineering Stage Indicator */}
            <div className="mt-5 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[#10B981] text-[10px] font-mono font-bold tracking-wider">
              {getEngineeringPhase(progress)}
            </div>

            {/* High-Visibility Progress Counter & Bar */}
            <div className="w-64 mt-4">
              <div className="flex justify-between items-center text-xs font-mono text-gray-200 mb-1.5">
                <span className="flex items-center gap-1.5 font-bold text-[10px] text-gray-300">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  CAD VDC RENDERING
                </span>
                <span className="text-emerald-400 font-extrabold text-sm font-heading">{progress}%</span>
              </div>

              {/* Progress Track */}
              <div className="w-full h-2 bg-gray-950/90 rounded-full overflow-hidden p-0.5 border border-white/20 shadow-inner">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#10B981] via-[#0277BD] to-[#06B6D4] shadow-sm"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
