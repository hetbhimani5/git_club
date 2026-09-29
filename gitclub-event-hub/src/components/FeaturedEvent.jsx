import React from 'react';
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  MapPin, 
  Trophy, 
  Users, 
  ArrowRight, 
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  CalendarPlus
} from 'lucide-react';
import { generateGoogleCalendarUrl } from '../utils/calendarHelper';

export default function FeaturedEvent({ event, onRegister, onSelectEvent }) {
  if (!event) return null;

  return (
    <section id="featured-event" className="py-14 bg-gitdark-950 border-b border-gitdark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Spotlight</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Featured University Hackathon
            </h2>
            <p className="text-sm text-gitdark-400 mt-1">
              CHARUSAT's biggest 36-hour continuous build sprint of 2026.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Registration Status: 82% Booked</span>
            </span>
          </div>
        </div>

        {/* Big Feature Banner Card */}
        <div className="rounded-3xl bg-gradient-to-br from-gitdark-850 via-gitdark-900 to-gitdark-950 border border-gitdark-700/80 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual & Quick Highlights */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[460px] overflow-hidden group">
              <img
                src={event.bannerImage}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gitdark-900 via-gitdark-900/60 to-transparent" />
              
              {/* Overlaid Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-600/90 text-white shadow-md backdrop-blur-md">
                  {event.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600/90 text-white shadow-md backdrop-blur-md">
                  {event.entryFee}
                </span>
              </div>

              {/* Prize Pool Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-gitdark-900/90 border border-gitdark-700/90 backdrop-blur-md shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                      Grand Prize Pool
                    </span>
                    <div className="text-lg font-bold text-white font-mono">
                      {event.prizePool}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Info and CTA */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-gitdark-300 leading-relaxed">
                  {event.description}
                </p>

                {/* Key metadata grid */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gitdark-300">
                  <div className="p-3 rounded-xl bg-gitdark-950/80 border border-gitdark-800 flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-gitdark-500 uppercase font-mono">Date</div>
                      <div className="font-semibold text-white">{event.displayDate}</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-gitdark-950/80 border border-gitdark-800 flex items-center gap-3">
                    <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-gitdark-500 uppercase font-mono">Format</div>
                      <div className="font-semibold text-white">{event.time}</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-gitdark-950/80 border border-gitdark-800 flex items-center gap-3 sm:col-span-2">
                    <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-gitdark-500 uppercase font-mono">Venue</div>
                      <div className="font-semibold text-white">{event.venue}</div>
                    </div>
                  </div>
                </div>

                {/* Hackathon Tracks */}
                <div className="mt-6">
                  <div className="text-xs font-mono font-semibold uppercase text-gitdark-400 mb-2">
                    Featured Innovation Tracks:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {event.tracks.map((track, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gitdark-800 border border-gitdark-700 text-gitdark-200"
                      >
                        ⚡ {track}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions and Capacity Bar */}
              <div className="space-y-4 pt-4 border-t border-gitdark-800">
                {/* Capacity Progress Bar */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-gitdark-400 mb-1.5">
                    <span>Registration Fill Rate</span>
                    <span className="text-emerald-400 font-semibold">{event.registeredCount} / {event.totalSeats} Students</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-gitdark-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                      style={{ width: `${(event.registeredCount / event.totalSeats) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onRegister(event)}
                    className="flex-1 min-w-[200px] py-3 px-5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-950/40 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Instant Free Registration</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onSelectEvent(event)}
                    className="py-3 px-5 rounded-xl font-medium text-sm text-gitdark-200 bg-gitdark-800 hover:bg-gitdark-700 hover:text-white border border-gitdark-600 transition-colors flex items-center gap-2"
                  >
                    <span>Schedule & Details</span>
                    <ExternalLink className="w-4 h-4 text-gitdark-400" />
                  </button>

                  <a
                    href={generateGoogleCalendarUrl(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl text-sm text-gitdark-300 hover:text-white bg-gitdark-800/80 hover:bg-gitdark-700 border border-gitdark-700 transition-colors flex items-center gap-1.5"
                    title="Add to Google Calendar"
                  >
                    <CalendarPlus className="w-4 h-4 text-sky-400" />
                    <span className="hidden sm:inline">Add to Calendar</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
