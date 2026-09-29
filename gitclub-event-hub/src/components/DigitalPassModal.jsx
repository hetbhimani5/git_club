import React, { useRef } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Clock, 
  User, 
  Building, 
  Sparkles,
  GitBranch,
  ShieldCheck,
  Share2
} from 'lucide-react';
import { generateGoogleCalendarUrl } from '../utils/calendarHelper';

export default function DigitalPassModal({ pass, onClose, onShare }) {
  const ticketRef = useRef(null);

  if (!pass) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-xl bg-gitdark-900 border border-gitdark-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* Header bar */}
        <div className="p-4 sm:p-5 border-b border-gitdark-750 bg-gitdark-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                Registration Confirmed!
              </h3>
              <p className="text-xs text-gitdark-400">
                Your official CHARUSAT event pass has been issued.
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

        {/* Modal Body / The Ticket */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-gitdark-950/60">
          
          {/* THE DIGITAL TICKET */}
          <div 
            ref={ticketRef}
            className="relative rounded-3xl bg-gradient-to-br from-gitdark-850 via-gitdark-900 to-gitdark-950 border border-gitdark-700 shadow-2xl overflow-hidden text-left"
          >
            {/* Top Bar of Ticket */}
            <div className="p-5 bg-gradient-to-r from-emerald-950/60 via-gitdark-900 to-teal-950/60 border-b border-gitdark-750 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                  <GitBranch className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-white tracking-wider">
                    GIT CLUB CHARUSAT
                  </div>
                  <div className="text-[10px] text-gitdark-400">
                    Official Student Entry Pass
                  </div>
                </div>
              </div>

              <div className="text-right">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  VERIFIED ADMIT
                </span>
                <div className="text-[10px] font-mono text-gitdark-400 mt-0.5">
                  ID: {pass.passId}
                </div>
              </div>
            </div>

            {/* Event Info on Ticket */}
            <div className="p-5 sm:p-6 space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  {pass.event.category} • CHARUSAT
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-0.5 leading-snug">
                  {pass.event.title}
                </h4>
              </div>

              {/* Date, Time, Venue Pills */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-gitdark-950 border border-gitdark-800">
                  <div className="text-[10px] font-mono uppercase text-gitdark-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-emerald-400" />
                    <span>Date & Time</span>
                  </div>
                  <div className="font-semibold text-white mt-1">{pass.event.displayDate}</div>
                  <div className="text-[11px] text-gitdark-400">{pass.event.time}</div>
                </div>

                <div className="p-2.5 rounded-xl bg-gitdark-950 border border-gitdark-800">
                  <div className="text-[10px] font-mono uppercase text-gitdark-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-400" />
                    <span>Venue Location</span>
                  </div>
                  <div className="font-semibold text-white mt-1 truncate">{pass.event.venue}</div>
                  <div className="text-[11px] text-gitdark-400">Changa Campus</div>
                </div>
              </div>

              {/* Perforation Cutline */}
              <div className="relative my-4 flex items-center justify-between">
                <div className="w-6 h-6 rounded-full bg-gitdark-950 -ml-8 border-r border-gitdark-700" />
                <div className="w-full border-t border-dashed border-gitdark-700 mx-2" />
                <div className="w-6 h-6 rounded-full bg-gitdark-950 -mr-8 border-l border-gitdark-700" />
              </div>

              {/* Attendee Details & QR Code Section */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                
                {/* Attendee info */}
                <div className="sm:col-span-7 space-y-2 text-xs">
                  <div>
                    <span className="text-[10px] font-mono text-gitdark-500 uppercase">Attendee Name</span>
                    <div className="text-base font-bold text-white">{pass.student.fullName}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-[10px] font-mono text-gitdark-500 uppercase">Student ID</span>
                      <div className="font-mono font-semibold text-emerald-400">{pass.student.studentId}</div>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gitdark-500 uppercase">Institute</span>
                      <div className="font-semibold text-gitdark-200">{pass.student.institute}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-[10px] font-mono text-gitdark-500 uppercase">Semester</span>
                      <div className="text-gitdark-300">{pass.student.semester} Sem</div>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gitdark-500 uppercase">Seat Allocation</span>
                      <div className="font-mono text-amber-400 font-bold">{pass.seatNumber}</div>
                    </div>
                  </div>

                  {pass.student.teamName && (
                    <div>
                      <span className="text-[10px] font-mono text-gitdark-500 uppercase">Team Name</span>
                      <div className="text-purple-300 font-semibold">{pass.student.teamName}</div>
                    </div>
                  )}
                </div>

                {/* QR Code */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center p-3 rounded-2xl bg-white text-center shadow-lg">
                  {pass.qrCodeUrl ? (
                    <img 
                      src={pass.qrCodeUrl} 
                      alt="Pass Verification QR Code" 
                      className="w-32 h-32 object-contain"
                    />
                  ) : (
                    <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-xs text-black">
                      QR Code
                    </div>
                  )}
                  <span className="text-[9px] font-mono text-gitdark-900 mt-1 uppercase font-semibold">
                    Scan for Fast-Track Entry
                  </span>
                </div>

              </div>

            </div>

            {/* Ticket Footer Security Ribbon */}
            <div className="px-5 py-2.5 bg-gitdark-950 border-t border-gitdark-800 flex items-center justify-between text-[10px] font-mono text-gitdark-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Authorized by Git Club CHARUSAT Committee</span>
              </div>
              <span>Registered: {pass.registeredAt}</span>
            </div>

          </div>

          {/* Quick Notice */}
          <p className="mt-3 text-center text-xs text-gitdark-400">
            💾 This pass is automatically saved in your browser under <strong>"My Passes"</strong>. Keep this QR code ready on your phone during event check-in at CHARUSAT.
          </p>

        </div>

        {/* Action Buttons Footer */}
        <div className="p-4 sm:p-5 border-t border-gitdark-750 bg-gitdark-950 flex flex-wrap items-center justify-between gap-3 shrink-0">
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-gitdark-200 bg-gitdark-800 hover:bg-gitdark-700 hover:text-white border border-gitdark-600 transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <a
              href={generateGoogleCalendarUrl(pass.event)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-gitdark-200 bg-gitdark-800 hover:bg-gitdark-700 hover:text-white border border-gitdark-600 transition-colors flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-sky-400" />
              <span>Add to Calendar</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-gitgreen hover:bg-gitgreen-hover transition-colors"
          >
            Done & Explore More
          </button>

        </div>

      </div>
    </div>
  );
}
