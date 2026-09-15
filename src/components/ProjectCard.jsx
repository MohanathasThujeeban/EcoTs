import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import PremiumIcon from './PremiumIcon';

export default function ProjectCard({ project, onSelect }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onClick={() => onSelect(project)}
      className="group relative flex flex-col ios-glass-card-dark rounded-3xl overflow-hidden border border-white/15 shadow-xl hover:shadow-2xl hover:border-emerald-400/50 transition-all duration-300 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-900">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071913]/90 via-[#071913]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

        {/* Category & Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
          <span className="px-3 py-1 text-xs font-extrabold uppercase tracking-wider rounded-full ios-glass text-emerald-300 border border-white/30 shadow-md">
            {project.category}
          </span>
          <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 backdrop-blur-md shadow-md flex items-center gap-1">
            <PremiumIcon name="security" size={12} badge="none" />
            {project.rating}
          </span>
        </div>

        {/* Bottom Floating Info on Image */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between text-white z-10">
          <div className="flex items-center gap-1.5 text-xs text-gray-200 ios-glass px-3 py-1 rounded-xl border border-white/20">
            <PremiumIcon name="location" size={12} badge="none" />
            <span className="font-medium truncate">{project.location}</span>
          </div>

          <div className="w-8 h-8 rounded-full ios-glass flex items-center justify-center text-white border border-white/30 group-hover:bg-emerald-500 group-hover:scale-110 transition-all">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-5">
        <div className="flex items-center justify-between text-xs text-gray-300 mb-1.5 font-medium">
          <span className="flex items-center gap-1">
            <PremiumIcon name="calendar" size={12} badge="none" />
            {project.year}
          </span>
          <span className="text-emerald-300 font-bold bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-lg flex items-center gap-1">
            <PremiumIcon name="hardhat" size={12} badge="none" />
            {project.constructionScale}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1 font-heading">
          {project.title}
        </h3>

        <p className="text-xs text-gray-300 line-clamp-2 mt-1.5 leading-relaxed flex-grow">
          {project.tagline}
        </p>

        <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs">
          <span className="text-gray-400">
            Scale: <strong className="text-white font-semibold">{project.area}</strong>
          </span>
          <span className="text-cyan-400 font-bold group-hover:underline flex items-center gap-1">
            View Case Study
          </span>
        </div>
      </div>
    </motion.div>
  );
}
