import React from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ArrowRight, 
  CalendarPlus, 
  Share2, 
  CheckCircle,
  Tag
} from 'lucide-react';
import { generateGoogleCalendarUrl } from '../utils/calendarHelper';

export default function EventCard({ event, onSelect, onRegister, onShare }) {
  const fillPercentage = Math.min(100, Math.round((event.registeredCount / event.totalSeats) * 100));

  const categoryColorStyles = {
    Workshop: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    Hackathon: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    Competition: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    "Tech Talk": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    Community: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  };

  const statusStyles = {
    "Registration Open": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    "Filling Fast": "bg-amber-500/10 text-amber-400 border-amber-500/30",
    "Upcoming": "bg-sky-500/10 text-sky-400 border-sky-500/30",
  };

  return (
    <div className="flex flex-col h-full rounded-2xl bg-gitdark-900 border border-gitdark-750/80 hover:border-gitdark-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/50 group overflow-hidden">
      
      {/* Thumbnail Banner */}
      <div className="relative h-44 w-full overflow-hidden bg-gitdark-950">
        <img
          src={event.bannerImage}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gitdark-900 via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold uppercase tracking-wider border backdrop-blur-md ${categoryColorStyles[event.category] || 'bg-gitdark-800 text-white'}`}>
            {event.category}
          </span>
          <span className={`px-2 py-0.5 rounded-md text-[11px] font-medium border backdrop-blur-md ${statusStyles[event.status] || 'bg-gitdark-800 text-white'}`}>
            {event.status}
          </span>
        </div>

        {/* Entry fee badge bottom right */}
        <div className="absolute bottom-2.5 right-3">
          <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[11px] font-mono text-emerald-400 font-semibold border border-emerald-500/30">
            {event.entryFee}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          {/* Date & Time pill */}
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{event.displayDate}</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelect(event)}
            className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 cursor-pointer leading-snug"
          >
            {event.title}
          </h3>

          {/* Short Description */}
          <p className="mt-2 text-xs text-gitdark-300 line-clamp-2 leading-relaxed">
            {event.description}
          </p>

          {/* Location & Time info */}
          <div className="mt-4 space-y-1.5 text-xs text-gitdark-400">
            <div className="flex items-center gap-2 truncate">
              <Clock className="w-3.5 h-3.5 text-gitdark-500 shrink-0" />
              <span className="truncate">{event.time}</span>
            </div>
            <div className="flex items-center gap-2 truncate">
              <MapPin className="w-3.5 h-3.5 text-gitdark-500 shrink-0" />
              <span className="truncate">{event.venue}</span>
            </div>
          </div>
        </div>

        {/* Footer Area: Capacity + Action Buttons */}
        <div className="pt-3 border-t border-gitdark-800 space-y-3">
          
          {/* Seat Capacity Bar */}
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono text-gitdark-400 mb-1">
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3 text-gitdark-400" />
                <span>Seats Filled</span>
              </span>
              <span className="text-gitdark-200 font-medium">
                {event.registeredCount}/{event.totalSeats} ({fillPercentage}%)
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-gitdark-800 overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  fillPercentage > 85 ? 'bg-amber-400' : 'bg-emerald-500'
                }`}
                style={{ width: `${fillPercentage}%` }}
              />
            </div>
          </div>

          {/* Main Action Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => onSelect(event)}
              className="w-full py-2 px-3 rounded-lg text-xs font-medium text-gitdark-200 bg-gitdark-800 hover:bg-gitdark-750 hover:text-white border border-gitdark-700 transition-colors text-center"
            >
              View Details
            </button>

            <button
              onClick={() => onRegister(event)}
              className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-white bg-gitgreen hover:bg-gitgreen-hover transition-colors flex items-center justify-center gap-1.5 shadow-sm shadow-emerald-950/50"
            >
              <span>Register</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Secondary Quick Utilities */}
          <div className="flex items-center justify-between pt-1 text-[11px] text-gitdark-400 border-t border-gitdark-800/60">
            <a
              href={generateGoogleCalendarUrl(event)}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 py-1"
            >
              <CalendarPlus className="w-3 h-3 text-sky-400" />
              <span>Add to Calendar</span>
            </a>

            <button
              onClick={() => onShare(event)}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 py-1"
            >
              <Share2 className="w-3 h-3 text-gitdark-400" />
              <span>Share</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
