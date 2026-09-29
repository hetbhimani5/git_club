import React, { useState } from 'react';
import { GitBranch, Ticket, PlusCircle, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { CLUB_INFO } from '../data/eventsData';

export default function Navbar({ onOpenPasses, onOpenPropose, passCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gitdark-700/80 bg-gitdark-900/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-gitgreen-hover via-gitgreen to-emerald-400 p-[1px] shadow-glow-green">
              <div className="w-full h-full bg-gitdark-900 rounded-[11px] flex items-center justify-center group-hover:bg-gitdark-850 transition-colors">
                <GitBranch className="w-5 h-5 text-emerald-400 transform group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-lg text-white tracking-tight">
                  git club
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  CHARUSAT
                </span>
              </div>
              <p className="text-[11px] text-gitdark-400 hidden sm:block">
                Build. Collaborate. Ship.
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => scrollToSection('upcoming-events')}
              className="px-3 py-1.5 text-sm font-medium text-gitdark-300 hover:text-white hover:bg-gitdark-800 rounded-lg transition-colors"
            >
              Upcoming Events
            </button>
            <button
              onClick={() => scrollToSection('featured-event')}
              className="px-3 py-1.5 text-sm font-medium text-gitdark-300 hover:text-white hover:bg-gitdark-800 rounded-lg transition-colors"
            >
              Featured
            </button>
            <button
              onClick={() => scrollToSection('past-events')}
              className="px-3 py-1.5 text-sm font-medium text-gitdark-300 hover:text-white hover:bg-gitdark-800 rounded-lg transition-colors"
            >
              Past Archives
            </button>
            <button
              onClick={() => scrollToSection('stats-section')}
              className="px-3 py-1.5 text-sm font-medium text-gitdark-300 hover:text-white hover:bg-gitdark-800 rounded-lg transition-colors"
            >
              Impact Stats
            </button>
            <button
              onClick={() => scrollToSection('faqs')}
              className="px-3 py-1.5 text-sm font-medium text-gitdark-300 hover:text-white hover:bg-gitdark-800 rounded-lg transition-colors"
            >
              FAQs
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* My Passes CTA */}
            <button
              onClick={onOpenPasses}
              className="relative inline-flex items-center gap-2 px-3.5 py-1.5 text-sm font-medium text-gitdark-200 bg-gitdark-800 hover:bg-gitdark-700 border border-gitdark-600 rounded-lg transition-all shadow-sm group"
            >
              <Ticket className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>My Passes</span>
              {passCount > 0 && (
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-gitgreen rounded-full">
                  {passCount}
                </span>
              )}
            </button>

            {/* Propose Event CTA */}
            <button
              onClick={onOpenPropose}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-lg shadow-sm transition-all shadow-emerald-900/30"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Propose Event</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenPasses}
              className="relative p-2 text-gitdark-200 bg-gitdark-800 border border-gitdark-600 rounded-lg"
              title="My Passes"
            >
              <Ticket className="w-5 h-5 text-emerald-400" />
              {passCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] font-bold text-white bg-gitgreen rounded-full flex items-center justify-center">
                  {passCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gitdark-300 hover:text-white bg-gitdark-800 rounded-lg border border-gitdark-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-gitdark-700 bg-gitdark-900 px-4 pt-2 pb-4 space-y-2">
          <button
            onClick={() => scrollToSection('upcoming-events')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-gitdark-200 hover:bg-gitdark-800 rounded-lg"
          >
            Upcoming Events
          </button>
          <button
            onClick={() => scrollToSection('featured-event')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-gitdark-200 hover:bg-gitdark-800 rounded-lg"
          >
            Featured Event
          </button>
          <button
            onClick={() => scrollToSection('past-events')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-gitdark-200 hover:bg-gitdark-800 rounded-lg"
          >
            Past Archives
          </button>
          <button
            onClick={() => scrollToSection('stats-section')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-gitdark-200 hover:bg-gitdark-800 rounded-lg"
          >
            Club Impact Stats
          </button>
          <button
            onClick={() => scrollToSection('faqs')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-gitdark-200 hover:bg-gitdark-800 rounded-lg"
          >
            FAQs
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPropose();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Propose Event / Speak</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
