import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Users, 
  CheckCircle, 
  CalendarPlus,
  Terminal,
  Zap
} from 'lucide-react';
import { formatTimeLeft, generateGoogleCalendarUrl, downloadIcsFile } from '../utils/calendarHelper';

export default function Hero({ featuredEvent, onRegister, onExplore }) {
  // Target date for countdown: featured event date or fallback
  const targetDate = featuredEvent ? `${featuredEvent.date}T09:00:00` : '2026-10-17T09:00:00';
  const [timeLeft, setTimeLeft] = useState(formatTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(formatTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-gitdark-800 bg-grid-pattern">
      {/* Glow gradient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Campus Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gitdark-800/90 border border-gitdark-600 text-xs font-mono text-emerald-400 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>CHARUSAT Campus • Changa, Gujarat</span>
              <span className="text-gitdark-500">|</span>
              <span className="text-gitdark-300">Git Club Official Hub</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Where Code Meets <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Community at CHARUSAT
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-gitdark-300 max-w-2xl leading-relaxed">
              The centralized event platform for student developers, designers, and innovators. Discover upcoming workshops, 36-hour university hackathons, algorithmic contests, and tech talks across CSPIT, DEPSTAR, and CMPICA.
            </p>

            {/* Terminal Command Snippet */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gitdark-900 border border-gitdark-700/80 font-mono text-xs sm:text-sm text-gitdark-300 shadow-inner">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="text-gitdark-500">$</span>
              <span className="text-gitdark-200">git clone https://github.com/gitclub-charusat/events.git</span>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onRegister(featuredEvent)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Zap className="w-4 h-4 fill-white" />
                <span>Register for CHARUHacks</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExplore}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-gitdark-200 bg-gitdark-850 hover:bg-gitdark-750 hover:text-white border border-gitdark-600 transition-all shadow-sm"
              >
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Explore All Events</span>
              </button>
            </div>

            {/* Perks Strip */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-gitdark-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Free Entry for all CHARUSAT students</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Instant Digital QR Passes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Verified Certificates</span>
              </div>
            </div>
          </div>

          {/* Right Column: Next Flagship Event Card + Live Countdown */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-gitdark-800/90 to-gitdark-900/95 border border-gitdark-700/80 p-6 shadow-2xl backdrop-blur-md">
              {/* Highlight ribbon */}
              <div className="flex items-center justify-between pb-4 border-b border-gitdark-700/60">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                    Next Flagship Event
                  </span>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono">
                  36 Hours
                </span>
              </div>

              {/* Event Name */}
              <div className="pt-4 space-y-2">
                <h3 className="text-xl font-bold text-white leading-snug">
                  {featuredEvent ? featuredEvent.title : 'CHARUHacks 2026 — Flagship University Hackathon'}
                </h3>
                <p className="text-xs text-gitdark-400 line-clamp-2">
                  {featuredEvent?.tagline || 'Build impactful open-source solutions for real-world problems.'}
                </p>
              </div>

              {/* Event Details Quick Pill */}
              <div className="mt-4 p-3 rounded-xl bg-gitdark-950/70 border border-gitdark-800 space-y-2 text-xs text-gitdark-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{featuredEvent?.displayDate || 'Oct 17 - Oct 18, 2026'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="truncate">{featuredEvent?.venue || 'Central University Auditorium, CHARUSAT'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{featuredEvent?.registeredCount || 248} / {featuredEvent?.totalSeats || 300} Seats Filled (82%)</span>
                </div>
              </div>

              {/* LIVE COUNTDOWN BOX */}
              <div className="mt-5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-gitdark-400 mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Countdown to Hacking</span>
                  </span>
                  <span className="text-emerald-400 font-semibold">T-Minus</span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center font-mono">
                  <div className="p-2.5 rounded-xl bg-gitdark-950 border border-gitdark-700/60 shadow-inner">
                    <div className="text-2xl font-black text-white">{String(timeLeft.days).padStart(2, '0')}</div>
                    <div className="text-[10px] text-gitdark-400 uppercase mt-0.5">Days</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-gitdark-950 border border-gitdark-700/60 shadow-inner">
                    <div className="text-2xl font-black text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-[10px] text-gitdark-400 uppercase mt-0.5">Hours</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-gitdark-950 border border-gitdark-700/60 shadow-inner">
                    <div className="text-2xl font-black text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-[10px] text-gitdark-400 uppercase mt-0.5">Mins</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-gitdark-950 border border-gitdark-700/60 shadow-inner">
                    <div className="text-2xl font-black text-emerald-400">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-[10px] text-gitdark-400 uppercase mt-0.5">Secs</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-4 border-t border-gitdark-700/60 grid grid-cols-2 gap-2">
                <button
                  onClick={() => onRegister(featuredEvent)}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-gitgreen hover:bg-gitgreen-hover transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Reserve Seat</span>
                </button>

                <a
                  href={featuredEvent ? generateGoogleCalendarUrl(featuredEvent) : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-medium text-gitdark-200 bg-gitdark-800 hover:bg-gitdark-700 hover:text-white border border-gitdark-600 transition-colors flex items-center justify-center gap-1.5"
                >
                  <CalendarPlus className="w-3.5 h-3.5 text-sky-400" />
                  <span>Add to Calendar</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
