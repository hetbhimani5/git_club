import React from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  Trophy, 
  Users, 
  CheckCircle2, 
  CalendarPlus, 
  Download, 
  Share2, 
  ArrowRight,
  Sparkles,
  BookOpen,
  Laptop,
  Award
} from 'lucide-react';
import { generateGoogleCalendarUrl, downloadIcsFile } from '../utils/calendarHelper';

export default function EventDetailModal({ event, onClose, onRegister, onShare }) {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-gitdark-900 border border-gitdark-700 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Modal Top Header with Banner image */}
        <div className="relative h-48 sm:h-64 w-full shrink-0 overflow-hidden bg-gitdark-950">
          <img
            src={event.bannerImage}
            alt={event.title}
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gitdark-900 via-gitdark-900/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-gitdark-300 hover:text-white border border-white/10 backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category & Status Badges */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-emerald-600/90 text-white shadow-md backdrop-blur-md">
                {event.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gitdark-800/90 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                {event.status}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>{event.registeredCount} / {event.totalSeats} Seats Filled</span>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Main Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              {event.title}
            </h2>
            <p className="mt-2 text-base text-emerald-400 font-medium">
              {event.tagline}
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-gitdark-850 border border-gitdark-750 flex items-start gap-3">
              <Calendar className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <div className="text-[10px] font-mono uppercase text-gitdark-400">Date</div>
                <div className="text-sm font-semibold text-white">{event.displayDate}</div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-gitdark-850 border border-gitdark-750 flex items-start gap-3">
              <Clock className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
              <div>
                <div className="text-[10px] font-mono uppercase text-gitdark-400">Timing</div>
                <div className="text-sm font-semibold text-white">{event.time}</div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-gitdark-850 border border-gitdark-750 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
              <div>
                <div className="text-[10px] font-mono uppercase text-gitdark-400">Venue</div>
                <div className="text-sm font-semibold text-white">{event.venue}</div>
              </div>
            </div>
          </div>

          {/* Overview & Description */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>About the Event</span>
            </h3>
            <p className="text-sm text-gitdark-300 leading-relaxed whitespace-pre-line">
              {event.description}
            </p>
          </div>

          {/* Tracks / Topics covered */}
          {event.tracks && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>What Will Be Covered / Key Tracks</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {event.tracks.map((t, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-gitdark-950 border border-gitdark-800 flex items-center gap-2.5 text-xs text-gitdark-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hour-by-Hour Agenda */}
          {event.agenda && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>Event Schedule & Timeline</span>
              </h3>
              <div className="space-y-3 border-l-2 border-gitdark-700 pl-4 ml-2">
                {event.agenda.map((slot, i) => (
                  <div key={i} className="relative group">
                    <span className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-gitdark-800 border-2 border-emerald-400" />
                    <div className="text-xs font-mono text-emerald-400 font-semibold">{slot.time}</div>
                    <div className="text-sm font-bold text-white">{slot.title}</div>
                    <div className="text-xs text-gitdark-400 mt-0.5">{slot.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Speakers / Mentors Section */}
          {event.speakers && event.speakers.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-400" />
                <span>Speakers & Mentors</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.speakers.map((spk, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-gitdark-850 border border-gitdark-750 flex items-center gap-4">
                    <img
                      src={spk.avatar}
                      alt={spk.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500/40 shrink-0"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white">{spk.name}</h4>
                      <p className="text-xs text-gitdark-400">{spk.role}</p>
                      <div className="mt-1 text-[11px] text-emerald-400 font-medium">Topic: {spk.topic}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prerequisites and Perks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Prerequisites */}
            {event.prerequisites && (
              <div className="p-5 rounded-2xl bg-gitdark-950 border border-gitdark-800 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-sky-400" />
                  <span>Prerequisites & Requirements</span>
                </h4>
                <ul className="space-y-2 text-xs text-gitdark-300">
                  {event.prerequisites.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Perks & Rewards */}
            {event.perks && (
              <div className="p-5 rounded-2xl bg-gitdark-950 border border-gitdark-800 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Participant Perks & Swag</span>
                </h4>
                <ul className="space-y-2 text-xs text-gitdark-300">
                  {event.perks.map((prk, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{prk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

        </div>

        {/* Modal Sticky Bottom Action Footer */}
        <div className="p-4 sm:p-6 border-t border-gitdark-750 bg-gitdark-950 flex flex-wrap items-center justify-between gap-4 shrink-0">
          
          <div className="flex items-center gap-2">
            <a
              href={generateGoogleCalendarUrl(event)}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3.5 rounded-xl text-xs font-medium text-gitdark-200 bg-gitdark-800 hover:bg-gitdark-700 hover:text-white border border-gitdark-600 transition-colors flex items-center gap-1.5"
            >
              <CalendarPlus className="w-4 h-4 text-sky-400" />
              <span>Google Calendar</span>
            </a>

            <button
              onClick={() => downloadIcsFile(event)}
              className="py-2.5 px-3.5 rounded-xl text-xs font-medium text-gitdark-200 bg-gitdark-800 hover:bg-gitdark-700 hover:text-white border border-gitdark-600 transition-colors flex items-center gap-1.5"
              title="Download iCalendar (.ics)"
            >
              <Download className="w-4 h-4 text-gitdark-300" />
              <span>.ICS File</span>
            </button>

            <button
              onClick={() => onShare(event)}
              className="p-2.5 rounded-xl text-gitdark-300 hover:text-white bg-gitdark-800 hover:bg-gitdark-700 border border-gitdark-600 transition-colors"
              title="Share event"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-gitdark-300 hover:text-white transition-colors"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onRegister(event);
              }}
              className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-950/60 transition-all flex items-center gap-2"
            >
              <span>Register Now (Free)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
