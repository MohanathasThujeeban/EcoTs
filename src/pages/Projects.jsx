import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Sparkles, Building2, Layers, RotateCcw, ArrowRight, HardHat } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { Link } from 'react-router-dom';
import heroBgImg from '../assets/hero-bg.jpg';
import info3Img from '../assets/info3.jpg';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Commercial', 'Residential', 'Infrastructure', 'Industrial'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'latest') return Number(b.year) - Number(a.year);
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSortBy('latest');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#071913] text-gray-100 relative">
      {/* Background Image Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img src={heroBgImg} alt="" className="w-full h-full object-cover opacity-15 filter blur-xs" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071913]/90 via-[#0B241C]/80 to-[#071913]" />
      </div>

      {/* Header Hero Banner with Background Image */}
      <section className="relative py-24 sm:py-28 overflow-hidden z-10 border-b border-emerald-500/20">
        <div className="absolute inset-0 z-0">
          <img src={info3Img} alt="Engineering Projects" className="w-full h-full object-cover opacity-35 filter brightness-75 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071913]/85 via-[#0D281E]/75 to-[#071913]/95 backdrop-blur-xs" />
        </div>
        <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none z-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-sky-950/80 px-4 py-2 rounded-full border border-sky-500/40 inline-flex items-center gap-2 shadow-lg backdrop-blur-md">
            <HardHat className="w-4 h-4 text-cyan-400" />
            Building & Infrastructure Portfolio
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white font-heading mt-5 tracking-tight leading-tight drop-shadow-md">
            Delivering High-Impact Construction Works
          </h1>
          <p className="text-sm sm:text-base text-gray-200 mt-4 leading-relaxed max-w-2xl mx-auto">
            Browse our landmark high-rise commercial towers, multi-family residential enclaves, post-tensioned highway viaducts, and heavy industrial warehouse logistics hubs.
          </p>
        </div>
      </section>

      {/* Main Filter & Gallery Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow z-10 relative">
        {/* Controls Bar - iPhone Frosted Glass */}
        <div className="p-4 sm:p-6 rounded-3xl ios-glass-card-dark border border-white/15 shadow-2xl mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects, locations, clients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-2xl ios-glass text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 border border-white/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Selector & Result Count */}
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <span className="text-xs font-semibold text-gray-300">
                Showing <strong className="text-emerald-400">{filteredProjects.length}</strong> of {projects.length} Completed Builds
              </span>

              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 font-medium hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3.5 py-2 text-xs rounded-xl ios-glass text-white font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-400 border border-white/20"
                >
                  <option value="latest" className="bg-gray-900 text-white">Year (Newest First)</option>
                  <option value="title" className="bg-gray-900 text-white">Project Name (A-Z)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-white/10 pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex-shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg border border-emerald-400/40'
                    : 'ios-glass text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={(p) => setSelectedProject(p)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20 ios-glass-card-dark rounded-3xl border border-white/15 p-8">
            <div className="w-16 h-16 rounded-2xl ios-glass text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-white/20">
              <Filter className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">No Projects Found</h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-sm mx-auto mt-1">
              We couldn't find any construction projects matching your search criteria.
            </p>
            <button
              onClick={resetFilters}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition-colors shadow-lg"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-[#0B241C] border-t border-emerald-500/20 z-10 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Tendering a Commercial, Residential, or Civil Infrastructure Project?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            Our estimating team and general contracting directors are available for priced tender submissions, constructability reviews, and BOQ consultations.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-xl transition-all border border-emerald-400/30 hover:scale-105"
            >
              <span>Consult Our Estimating Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
