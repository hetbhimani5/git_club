import React, { useState } from 'react';
import { PAST_EVENTS } from '../data/eventsData';
import { Calendar, MapPin, Users, GitPullRequest, Trophy, ArrowRight, X, Sparkles, CheckCircle2 } from 'lucide-react';

export default function PastEventsSection() {
  const [selectedPastEvent, setSelectedPastEvent] = useState(null);

  return (
    <section id="past-events" className="py-16 bg-gitdark-950 border-b border-gitdark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
              Legacy & Archives
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
              Past Git Club Chronicles
            </h2>
            <p className="text-sm text-gitdark-400 mt-1">
              Explore the highlights, merged pull requests, and photos from our previous flagship events at CHARUSAT.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-gitdark-400">
            <span>Archive count: <strong className="text-white">4 Editions</strong></span>
          </div>
        </div>

        {/* Grid of Past Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAST_EVENTS.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl bg-gitdark-900 border border-gitdark-800 hover:border-gitdark-650 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Event Image */}
                <div className="relative h-44 w-full overflow-hidden bg-gitdark-950">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gitdark-900 via-transparent to-black/30" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-black/70 text-white backdrop-blur-md border border-white/10">
                    {event.category}
                  </span>
                  <span className="absolute bottom-2 left-3 text-[11px] font-mono text-emerald-400 font-medium">
                    {event.date}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-4 space-y-2">
                  <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-xs text-gitdark-400 line-clamp-2">
                    {event.shortSummary}
                  </p>
                </div>
              </div>

              {/* Stats Footer on Card */}
              <div className="p-4 pt-2 border-t border-gitdark-800/80 space-y-3">
                <div className="grid grid-cols-3 gap-1 py-1.5 px-2 rounded-xl bg-gitdark-950 border border-gitdark-800 text-center font-mono text-[10px]">
                  <div>
                    <div className="font-bold text-white">{event.stats.attendees}+</div>
                    <div className="text-gitdark-500 uppercase">Devs</div>
                  </div>
                  <div className="border-x border-gitdark-800">
                    <div className="font-bold text-emerald-400">{event.stats.prsMerged}</div>
                    <div className="text-gitdark-500 uppercase">PRs</div>
                  </div>
                  <div>
                    <div className="font-bold text-purple-400">{event.stats.prizes}</div>
                    <div className="text-gitdark-500 uppercase">Prizes</div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPastEvent(event)}
                  className="w-full py-2 px-3 rounded-lg text-xs font-medium text-gitdark-200 bg-gitdark-800 hover:bg-gitdark-700 hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>View Event Recap</span>
                  <ArrowRight className="w-3 h-3 text-emerald-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Past Event Recap Modal */}
      {selectedPastEvent && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
          <div className="relative w-full max-w-2xl bg-gitdark-900 border border-gitdark-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            <div className="relative h-48 w-full overflow-hidden shrink-0">
              <img
                src={selectedPastEvent.image}
                alt={selectedPastEvent.title}
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gitdark-900 via-gitdark-900/60 to-transparent" />
              <button
                onClick={() => setSelectedPastEvent(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-gitdark-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                  {selectedPastEvent.category} • {selectedPastEvent.date}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {selectedPastEvent.title}
                </h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              {/* Stats Bar */}
              <div className="grid grid-cols-4 gap-2 text-center p-3 rounded-xl bg-gitdark-950 border border-gitdark-800 font-mono text-xs">
                <div>
                  <div className="text-lg font-bold text-white">{selectedPastEvent.stats.attendees}</div>
                  <div className="text-[10px] text-gitdark-400 uppercase">Attendees</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-emerald-400">{selectedPastEvent.stats.prsMerged}</div>
                  <div className="text-[10px] text-gitdark-400 uppercase">PRs Merged</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-sky-400">{selectedPastEvent.stats.repositories}</div>
                  <div className="text-[10px] text-gitdark-400 uppercase">Repos</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-amber-400">{selectedPastEvent.stats.prizes}</div>
                  <div className="text-[10px] text-gitdark-400 uppercase">Rewards</div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-2">Event Summary</h4>
                <p className="text-xs text-gitdark-300 leading-relaxed">
                  {selectedPastEvent.shortSummary}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-2">Key Highlights & Achievements</h4>
                <div className="space-y-2">
                  {selectedPastEvent.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gitdark-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gitdark-850 border border-gitdark-750 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                <div className="text-xs text-gitdark-300">
                  Venue: <strong className="text-white">{selectedPastEvent.venue}</strong>, CHARUSAT University Campus
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gitdark-750 bg-gitdark-950 flex justify-end">
              <button
                onClick={() => setSelectedPastEvent(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gitdark-800 hover:bg-gitdark-700 transition-colors"
              >
                Close Recap
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
