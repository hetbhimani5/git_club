import React, { useState } from 'react';
import { GitBranch, Mail, Heart, Send, Check } from 'lucide-react';
import { CLUB_INFO } from '../data/eventsData';

export default function Footer({ onShowToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    if (onShowToast) {
      onShowToast({
        type: 'success',
        message: 'Subscribed! You will receive CHARUSAT Git Club updates.'
      });
    }
    setEmail('');
  };

  return (
    <footer className="bg-gitdark-950 border-t border-gitdark-800 text-gitdark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gitdark-850 border border-emerald-500/40 flex items-center justify-center shadow-glow-green">
                <GitBranch className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <span className="font-mono font-bold text-lg text-white">git club</span>
                <span className="ml-2 text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  CHARUSAT
                </span>
                <div className="text-xs text-gitdark-400">Build. Collaborate. Ship.</div>
              </div>
            </div>

            <p className="text-xs text-gitdark-400 leading-relaxed max-w-sm">
              The premier open-source and developer community of Charotar University of Science & Technology (CHARUSAT). Empowering students across CSPIT, DEPSTAR, and CMPICA through hands-on technical bootcamps.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* GitHub */}
              <a
                href={CLUB_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gitdark-900 border border-gitdark-750 text-gitdark-300 hover:text-white hover:border-gitdark-600 transition-colors"
                title="Git Club GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={CLUB_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gitdark-900 border border-gitdark-750 text-gitdark-300 hover:text-white hover:border-gitdark-600 transition-colors"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Discord */}
              <a
                href={CLUB_INFO.socials.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gitdark-900 border border-gitdark-750 text-gitdark-300 hover:text-white hover:border-gitdark-600 transition-colors"
                title="Discord Community"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={CLUB_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gitdark-900 border border-gitdark-750 text-gitdark-300 hover:text-white hover:border-gitdark-600 transition-colors"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CLUB_INFO.socials.email}`}
                className="p-2.5 rounded-xl bg-gitdark-900 border border-gitdark-750 text-gitdark-300 hover:text-white hover:border-gitdark-600 transition-colors"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Campus Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#upcoming-events" className="hover:text-emerald-400 transition-colors">
                  Upcoming Workshops & Hackathons
                </a>
              </li>
              <li>
                <a href="#featured-event" className="hover:text-emerald-400 transition-colors">
                  CHARUHacks 2026 Spotlight
                </a>
              </li>
              <li>
                <a href="#past-events" className="hover:text-emerald-400 transition-colors">
                  Past Archives & Metrics
                </a>
              </li>
              <li>
                <a href="#stats-section" className="hover:text-emerald-400 transition-colors">
                  Community Impact Statistics
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-emerald-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe & Location */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Never Miss a Workshop
            </h4>
            <p className="text-xs text-gitdark-400">
              Get notified directly about registration drops and seat openings on campus.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="24cs084@charusat.edu.in"
                className="flex-1 px-3 py-2 text-xs bg-gitdark-900 border border-gitdark-700 rounded-xl text-white placeholder-gitdark-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold text-white bg-gitgreen hover:bg-gitgreen-hover rounded-xl transition-colors flex items-center gap-1.5 shrink-0"
              >
                {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                <span>{subscribed ? 'Subscribed' : 'Join'}</span>
              </button>
            </form>

            <div className="pt-2 text-[11px] text-gitdark-500 space-y-1">
              <div>📍 CHARUSAT Campus, 139, Highway, Changa, Gujarat 388421</div>
              <div>⚡ Organized by Git Club Student Chapter</div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-gitdark-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gitdark-400">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Git Club CHARUSAT. Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline mx-0.5" />
            <span>for the developer community.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span className="text-emerald-400">Website Challenge Initial Round</span>
            <span>•</span>
            <span className="text-gitdark-400">Charotar University of Science & Technology</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
