import React, { useState } from 'react';
import { X, CheckCircle, Ticket, AlertCircle, ArrowRight, GitBranch, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import QRCode from 'qrcode';

export default function RegistrationModal({ event, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    email: '',
    phone: '',
    institute: 'CSPIT',
    semester: '3rd',
    githubUsername: '',
    teamName: '',
    agreeRules: true
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  if (!event) return null;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.studentId.trim()) errs.studentId = 'Student ID is required (e.g. 24CS084)';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Valid college/personal email is required';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = '10-digit mobile number required for WhatsApp updates';
    }
    if (!formData.agreeRules) {
      errs.agreeRules = 'Please agree to the Git Club code of conduct';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    try {
      // Generate unique pass ID
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const passId = `GC-CHARU-${event.id.slice(0, 3).toUpperCase()}-${randomSuffix}`;
      const seatNumber = `SEAT-${String.fromCharCode(65 + Math.floor(Math.random() * 8))}-${Math.floor(1 + Math.random() * 45)}`;

      // Generate QR Code data URL
      const qrPayload = JSON.stringify({
        passId,
        studentId: formData.studentId.toUpperCase(),
        name: formData.fullName,
        event: event.id,
        seat: seatNumber,
        verified: true,
        issuer: "Git Club CHARUSAT"
      });

      const qrCodeDataUrl = await QRCode.toDataURL(qrPayload, {
        width: 300,
        margin: 1,
        color: {
          dark: '#0d1117',
          light: '#ffffff'
        }
      });

      const newPass = {
        passId,
        seatNumber,
        registeredAt: new Date().toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric' 
        }),
        student: {
          fullName: formData.fullName,
          studentId: formData.studentId.toUpperCase(),
          email: formData.email,
          phone: formData.phone,
          institute: formData.institute,
          semester: formData.semester,
          github: formData.githubUsername ? `https://github.com/${formData.githubUsername}` : '',
          teamName: formData.teamName
        },
        event: {
          id: event.id,
          title: event.title,
          category: event.category,
          date: event.date,
          displayDate: event.displayDate,
          time: event.time,
          venue: event.venue
        },
        qrCodeUrl: qrCodeDataUrl
      };

      // Save to localStorage
      const existingPasses = JSON.parse(localStorage.getItem('gitclub_charusat_passes') || '[]');
      const updatedPasses = [newPass, ...existingPasses.filter(p => p.event.id !== event.id)];
      localStorage.setItem('gitclub_charusat_passes', JSON.stringify(updatedPasses));

      // Trigger Confetti explosion
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      setSubmitting(false);
      onSuccess(newPass);
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-xl bg-gitdark-900 border border-gitdark-700 rounded-3xl shadow-2xl overflow-hidden max-h-[95vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-gitdark-750 bg-gitdark-950 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Ticket className="w-4 h-4" />
              <span>Event Registration</span>
            </div>
            <h3 className="text-xl font-bold text-white mt-1">
              Confirm Your Free Seat
            </h3>
            <p className="text-xs text-gitdark-400 truncate max-w-md mt-0.5">
              {event.title}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gitdark-400 hover:text-white hover:bg-gitdark-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 flex-1">
          
          {/* Quick Notice */}
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Open exclusively to CHARUSAT students. Verified Digital QR Pass issued instantly upon submission.</span>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs font-medium text-gitdark-200 mb-1">
              Full Name (As per CHARUSAT ID card) <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Om Rashiya"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={`w-full px-3.5 py-2.5 bg-gitdark-950 border rounded-xl text-sm text-white placeholder-gitdark-500 focus:outline-none transition-colors ${
                errors.fullName ? 'border-red-500' : 'border-gitdark-700 focus:border-emerald-500'
              }`}
            />
            {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
          </div>

          {/* Student ID & Institute */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gitdark-200 mb-1">
                Student ID / Roll No <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 24CS084 or 23IT045"
                value={formData.studentId}
                onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                className={`w-full px-3.5 py-2.5 bg-gitdark-950 border rounded-xl text-sm text-white placeholder-gitdark-500 uppercase font-mono focus:outline-none transition-colors ${
                  errors.studentId ? 'border-red-500' : 'border-gitdark-700 focus:border-emerald-500'
                }`}
              />
              {errors.studentId && <p className="text-[11px] text-red-400 mt-1">{errors.studentId}</p>}
            </div>

            <div>
              <label className="block text-xs font-medium text-gitdark-200 mb-1">
                Campus Institute <span className="text-red-400">*</span>
              </label>
              <select
                value={formData.institute}
                onChange={(e) => setFormData({ ...formData, institute: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-gitdark-950 border border-gitdark-700 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                <option value="CSPIT">CSPIT (Engineering)</option>
                <option value="DEPSTAR">DEPSTAR (Tech & Research)</option>
                <option value="CMPICA">CMPICA (Computer Applications)</option>
                <option value="RPCP">RPCP (Pharmacy)</option>
                <option value="I2IM">I²IM (Management)</option>
              </select>
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gitdark-200 mb-1">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="24cs084@charusat.edu.in"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-3.5 py-2.5 bg-gitdark-950 border rounded-xl text-sm text-white placeholder-gitdark-500 focus:outline-none transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gitdark-700 focus:border-emerald-500'
                }`}
              />
              {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-medium text-gitdark-200 mb-1">
                WhatsApp Contact <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-3.5 py-2.5 bg-gitdark-950 border rounded-xl text-sm text-white placeholder-gitdark-500 focus:outline-none transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gitdark-700 focus:border-emerald-500'
                }`}
              />
              {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Semester & GitHub */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gitdark-200 mb-1">
                Current Semester
              </label>
              <select
                value={formData.semester}
                onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-gitdark-950 border border-gitdark-700 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                <option value="1st">1st Semester (Fresher)</option>
                <option value="2nd">2nd Semester</option>
                <option value="3rd">3rd Semester (2nd Year)</option>
                <option value="4th">4th Semester</option>
                <option value="5th">5th Semester (3rd Year)</option>
                <option value="6th">6th Semester</option>
                <option value="7th">7th Semester (Final Year)</option>
                <option value="8th">8th Semester</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gitdark-200 mb-1">
                GitHub Username <span className="text-gitdark-500">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. om-rashiya"
                value={formData.githubUsername}
                onChange={(e) => setFormData({ ...formData, githubUsername: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-gitdark-950 border border-gitdark-700 rounded-xl text-sm text-white placeholder-gitdark-500 focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>
          </div>

          {/* If Hackathon: Team Name */}
          {event.category === 'Hackathon' && (
            <div>
              <label className="block text-xs font-medium text-gitdark-200 mb-1">
                Team Name <span className="text-gitdark-500">(Leave blank if participating solo or finding team at mixer)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. ByteCraft Pioneers"
                value={formData.teamName}
                onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-gitdark-950 border border-gitdark-700 rounded-xl text-sm text-white placeholder-gitdark-500 focus:outline-none focus:border-emerald-500"
              />
            </div>
          )}

          {/* Code of conduct check */}
          <div className="pt-2">
            <label className="flex items-start gap-2.5 text-xs text-gitdark-300 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.agreeRules}
                onChange={(e) => setFormData({ ...formData, agreeRules: e.target.checked })}
                className="mt-0.5 rounded border-gitdark-700 text-emerald-500 focus:ring-emerald-500"
              />
              <span>
                I agree to the Git Club CHARUSAT Code of Conduct and commit to attending the scheduled sessions punctually.
              </span>
            </label>
            {errors.agreeRules && <p className="text-[11px] text-red-400 mt-1">{errors.agreeRules}</p>}
          </div>

          {/* Submit CTA */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-xl shadow-emerald-950/60 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {submitting ? (
                <span>Generating Digital Pass...</span>
              ) : (
                <>
                  <span>Claim Free Ticket & Generate Pass</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
