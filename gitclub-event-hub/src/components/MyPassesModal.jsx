import React from 'react';
import { X, Ticket, Calendar, MapPin, Trash2, Eye, Printer, AlertCircle, ArrowRight } from 'lucide-react';

export default function MyPassesModal({ 
  isOpen, 
  onClose, 
  passes = [], 
  onViewPass, 
  onCancelPass,
  onBrowseEvents 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-2xl bg-gitdark-900 border border-gitdark-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-gitdark-750 bg-gitdark-950 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
              <Ticket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                My Registered Event Passes
              </h3>
              <p className="text-xs text-gitdark-400">
                Stored locally on this device • Keep your QR code ready at campus check-in
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gitdark-400 hover:text-white hover:bg-gitdark-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          
          {passes.length === 0 ? (
            /* Empty State */
            <div className="text-center py-12 px-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-gitdark-800 border border-gitdark-700 flex items-center justify-center mx-auto text-gitdark-400">
                <Ticket className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">No active passes found</h4>
                <p className="text-xs text-gitdark-400 max-w-sm mx-auto mt-1">
                  You haven't registered for any Git Club CHARUSAT events yet. Registrations are 100% free for all students!
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onBrowseEvents();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gitgreen hover:bg-gitgreen-hover transition-colors shadow-sm"
              >
                <span>Browse Upcoming Events</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            /* Passes List */
            <div className="space-y-3">
              {passes.map((pass) => (
                <div
                  key={pass.passId}
                  className="p-4 sm:p-5 rounded-2xl bg-gitdark-850 border border-gitdark-750 hover:border-gitdark-600 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        {pass.event.category}
                      </span>
                      <span className="text-[11px] font-mono text-gitdark-400">
                        Pass: {pass.passId}
                      </span>
                      <span className="text-[11px] font-mono text-amber-400 font-semibold ml-auto sm:ml-0">
                        {pass.seatNumber}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {pass.event.title}
                    </h4>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-gitdark-400 pt-1">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{pass.event.displayDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5 truncate max-w-xs">
                        <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                        <span className="truncate">{pass.event.venue}</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-gitdark-500 pt-0.5">
                      Attendee: <span className="text-gitdark-300 font-medium">{pass.student.fullName} ({pass.student.studentId} • {pass.student.institute})</span>
                    </div>
                  </div>

                  {/* Actions for this pass */}
                  <div className="flex items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-gitdark-800">
                    <button
                      onClick={() => onViewPass(pass)}
                      className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gitgreen hover:bg-gitgreen-hover transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Ticket / QR</span>
                    </button>

                    <button
                      onClick={() => onCancelPass(pass.passId)}
                      className="p-2 rounded-xl text-gitdark-400 hover:text-red-400 hover:bg-gitdark-800 transition-colors"
                      title="Cancel Registration"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gitdark-750 bg-gitdark-950 flex items-center justify-between text-xs text-gitdark-400 shrink-0">
          <span>Total passes: <strong className="text-white">{passes.length}</strong></span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-gitdark-200 bg-gitdark-800 hover:bg-gitdark-700 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
