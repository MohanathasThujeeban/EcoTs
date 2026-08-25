import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, ShieldCheck, Calendar, Layers, HardHat } from 'lucide-react';

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
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Category & CIDA/ISO Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-white/90 text-[#1B5E20] backdrop-blur-md shadow-sm">
            {project.category}
          </span>
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-[#0277BD]/90 text-white backdrop-blur-md shadow-sm flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-cyan-300" />
            {project.rating}
          </span>
        </div>

        {/* Bottom Floating Info on Image */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between text-white">
          <div className="flex items-center gap-1.5 text-xs text-gray-200 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-medium truncate">{project.location}</span>
          </div>

          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#1B5E20] group-hover:scale-110 transition-all">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-5">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-1.5 font-medium">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-gray-400" />
            {project.year}
          </span>
          <span className="text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
            <HardHat className="w-3 h-3 text-emerald-600" />
            {project.constructionScale}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1B5E20] transition-colors line-clamp-1 font-heading">
          {project.title}
        </h3>

        <p className="text-xs text-gray-600 line-clamp-2 mt-1.5 leading-relaxed flex-grow">
          {project.tagline}
        </p>

        <div className="mt-4 pt-3.5 border-t border-gray-100 flex items-center justify-between text-xs">
          <span className="text-gray-500">
            Scale: <strong className="text-gray-800 font-semibold">{project.area}</strong>
          </span>
          <span className="text-[#0277BD] font-bold group-hover:underline flex items-center gap-1">
            View Case Study
          </span>
        </div>
      </div>
    </motion.div>
  );
}
