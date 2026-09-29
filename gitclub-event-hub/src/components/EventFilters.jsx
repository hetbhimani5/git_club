import React from 'react';
import { Search, X, Filter, SlidersHorizontal, Sparkles } from 'lucide-react';

export default function EventFilters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedInstitute,
  setSelectedInstitute,
  sortBy,
  setSortBy,
  totalResults,
  onReset
}) {
  const categories = [
    { id: 'All', label: 'All Events', icon: '✨' },
    { id: 'Workshop', label: 'Workshops', icon: '🛠️' },
    { id: 'Hackathon', label: 'Hackathons', icon: '⚡' },
    { id: 'Competition', label: 'Competitions', icon: '🏆' },
    { id: 'Tech Talk', label: 'Tech Talks', icon: '🎤' },
    { id: 'Community', label: 'Community', icon: '🤝' },
  ];

  const institutes = [
    { id: 'All', label: 'All Campus Institutes' },
    { id: 'CSPIT', label: 'CSPIT (Engineering)' },
    { id: 'DEPSTAR', label: 'DEPSTAR (Tech & Research)' },
    { id: 'CMPICA', label: 'CMPICA (Computer Apps)' },
    { id: 'CHARUSAT Central', label: 'CHARUSAT Central' },
  ];

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'All' || selectedInstitute !== 'All';

  return (
    <div className="space-y-4 mb-8">
      {/* Search Bar + Controls */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gitdark-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search events by title, topic, speaker, or venue (e.g. Git, AI, CSPIT)..."
            className="w-full pl-10 pr-9 py-2.5 bg-gitdark-900 border border-gitdark-700/80 rounded-xl text-sm text-white placeholder-gitdark-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gitdark-400 hover:text-white p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Institute Filter */}
        <div className="flex items-center gap-2">
          <select
            value={selectedInstitute}
            onChange={(e) => setSelectedInstitute(e.target.value)}
            className="px-3 py-2.5 bg-gitdark-900 border border-gitdark-700/80 rounded-xl text-xs sm:text-sm text-gitdark-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
          >
            {institutes.map((inst) => (
              <option key={inst.id} value={inst.id} className="bg-gitdark-900 text-white">
                {inst.label}
              </option>
            ))}
          </select>

          {/* Sort By Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2.5 bg-gitdark-900 border border-gitdark-700/80 rounded-xl text-xs sm:text-sm text-gitdark-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
          >
            <option value="date" className="bg-gitdark-900 text-white">Sort: Soonest First</option>
            <option value="popularity" className="bg-gitdark-900 text-white">Sort: Most Popular</option>
            <option value="title" className="bg-gitdark-900 text-white">Sort: Event Name (A-Z)</option>
          </select>
        </div>

      </div>

      {/* Category Chips Bar */}
      <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
        <div className="flex items-center gap-1.5 flex-wrap">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-gitgreen text-white shadow-sm shadow-emerald-950 font-semibold'
                    : 'bg-gitdark-900 text-gitdark-300 hover:text-white hover:bg-gitdark-800 border border-gitdark-700/70'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Results Counter & Reset */}
        <div className="flex items-center gap-3 text-xs text-gitdark-400">
          <span>Showing <strong className="text-white font-mono">{totalResults}</strong> events</span>
          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="text-xs text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>Reset filters</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
