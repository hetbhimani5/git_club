import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ProposeEventModal({ isOpen, onClose, onSubmitted }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    institute: 'CSPIT',
    title: '',
    category: 'Workshop',
    description: '',
    experienceLevel: 'Beginner'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.title || !formData.description) return;
    
    setSubmitted(true);
    setTimeout(() => {
      onSubmitted({
        ...formData,
        submittedAt: new Date().toISOString()
      });
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-lg bg-gitdark-900 border border-gitdark-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-gitdark-750 bg-gitdark-950 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Propose an Event or Talk
              </h3>
              <p className="text-xs text-gitdark-400">
                Share your knowledge with 3,000+ CHARUSAT peers
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

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 flex-1">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gitdark-200 mb-1">
                Your Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Om Rashiya"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-gitdark-950 border border-gitdark-700 rounded-xl text-sm text-white placeholder-gitdark-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gitdark-200 mb-1">
                CHARUSAT Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="24cs084@charusat.edu.in"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-gitdark-950 border border-gitdark-700 rounded-xl text-sm text-white placeholder-gitdark-500 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gitdark-200 mb-1">
                Institute / Dept
              </label>
              <select
                value={formData.institute}
                onChange={(e) => setFormData({ ...formData, institute: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-gitdark-950 border border-gitdark-700 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="CSPIT">CSPIT</option>
                <option value="DEPSTAR">DEPSTAR</option>
                <option value="CMPICA">CMPICA</option>
                <option value="Other">Other Faculty/Alumni</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gitdark-200 mb-1">
                Proposed Format
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-gitdark-950 border border-gitdark-700 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="Workshop">Hands-on Workshop (2-3 hrs)</option>
                <option value="Tech Talk">Tech Talk / Webinar (45 mins)</option>
                <option value="Competition">Mini Hack / Contest</option>
                <option value="Lightning">5-min Lightning Talk</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gitdark-200 mb-1">
              Event Title / Proposed Topic <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Building Fullstack Apps with Next.js 15 & Docker"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-gitdark-950 border border-gitdark-700 rounded-xl text-sm text-white placeholder-gitdark-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gitdark-200 mb-1">
              Session Abstract & What Students Will Build <span className="text-red-400">*</span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="Brief outline of concepts, software tools used, and what participants will take away..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-gitdark-950 border border-gitdark-700 rounded-xl text-sm text-white placeholder-gitdark-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitted}
              className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 disabled:opacity-50"
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white animate-spin" />
                  <span>Submitting Proposal to Git Club...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Event Proposal</span>
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
