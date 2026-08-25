import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.jpeg';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              if (onFinish) onFinish();
            }, 600);
          }, 200);
          return 100;
        }
        const increment = prev < 50 ? Math.floor(Math.random() * 10) + 6 : Math.floor(Math.random() * 7) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="loader-wrapper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0D1F17] text-white overflow-hidden"
        >
          <div className="absolute inset-0 blueprint-grid-dark opacity-40 pointer-events-none" />
          
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.2, 0.35, 0.2]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[400px] h-[400px] rounded-full bg-[#1B5E20] blur-[120px] pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
            {/* Logo Display */}
            <div className="relative w-40 h-40 mb-5 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />
                <motion.circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="url(#ecobloomGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="440"
                  strokeDashoffset={440 - (440 * progress) / 100}
                  transition={{ ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="ecobloomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="50%" stopColor="#0277BD" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-28 h-28 rounded-2xl bg-white p-2.5 shadow-2xl border-2 border-emerald-400/40 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={logoImg}
                  alt="Ecobloom Residencies Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>

            {/* Brand Title */}
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl sm:text-3xl font-black tracking-wider text-white font-heading">
                  Ecobloom <span className="text-emerald-400">Residencies</span>
                </span>
              </div>
              <p className="text-xs text-gray-300 font-medium tracking-wide">
                Modern 2, 3 & 4 Bedroom Apartments • Wellawatte, Colombo 06
              </p>
            </div>

            {/* Progress Bar & Counter */}
            <div className="w-56 mt-6">
              <div className="flex justify-between items-center text-[10px] font-mono text-gray-300 mb-1.5">
                <span className="flex items-center gap-1.5 font-bold">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  ENTERING PROPERTY
                </span>
                <span className="text-emerald-300 font-extrabold">{progress}%</span>
              </div>

              <div className="w-full h-1.5 bg-gray-900/90 rounded-full overflow-hidden p-0.5 border border-white/20">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#10B981] via-[#0277BD] to-[#06B6D4]"
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
