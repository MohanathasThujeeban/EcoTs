import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Sparkles, Building2, Layers, RotateCcw, ArrowRight, HardHat } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { Link } from 'react-router-dom';

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
    <div className="flex flex-col min-h-screen bg-[#F7F9F8]">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-[#F7F9F8] border-b border-gray-200/80 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0277BD]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0277BD] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-flex items-center gap-1.5">
            <HardHat className="w-3.5 h-3.5" />
            Building & Infrastructure Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 font-heading mt-4 tracking-tight">
            Delivering High-Impact Construction Works
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
            Browse our landmark high-rise commercial towers, multi-family residential enclaves, post-tensioned highway viaducts, and heavy industrial warehouse logistics hubs.
          </p>
        </div>
      </section>

      {/* Main Filter & Gallery Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        {/* Controls Bar */}
        <div className="p-4 sm:p-6 rounded-3xl bg-white border border-gray-200/80 shadow-xs mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects, locations, clients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Selector & Result Count */}
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <span className="text-xs font-semibold text-gray-500">
                Showing <strong className="text-gray-900">{filteredProjects.length}</strong> of {projects.length} Completed Builds
              </span>

              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 font-medium hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 text-xs rounded-xl border border-gray-200 bg-gray-50 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
                >
                  <option value="latest">Year (Newest First)</option>
                  <option value="title">Project Name (A-Z)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-gray-100 pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex-shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#1B5E20] text-white shadow-sm'
                    : 'bg-gray-100/80 text-gray-600 hover:bg-gray-200/80 hover:text-gray-900'
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
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 p-8">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-[#1B5E20] flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 font-heading">No Projects Found</h3>
            <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto mt-1">
              We couldn't find any construction projects matching your search criteria.
            </p>
            <button
              onClick={resetFilters}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1B5E20] text-white text-xs font-bold hover:bg-[#2E7D32] transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-heading">
            Tendering a Commercial, Residential, or Civil Infrastructure Project?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
            Our estimating team and general contracting directors are available for priced tender submissions, constructability reviews, and BOQ consultations.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-102"
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
