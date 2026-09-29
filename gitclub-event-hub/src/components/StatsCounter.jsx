import React from 'react';
import { CalendarCheck, Users, GitPullRequest, Trophy, Building2, Check } from 'lucide-react';
import { CLUB_INFO } from '../data/eventsData';

export default function StatsCounter() {
  const stats = [
    {
      label: "Technical Events Hosted",
      value: CLUB_INFO.stats.eventsHosted,
      desc: "Workshops, hackathons & code duels",
      icon: <CalendarCheck className="w-6 h-6 text-emerald-400" />,
      color: "from-emerald-500/20 to-teal-500/5",
      borderColor: "border-emerald-500/30"
    },
    {
      label: "CHARUSAT Students Reached",
      value: CLUB_INFO.stats.participants,
      desc: "CSPIT, DEPSTAR, CMPICA & I²IM",
      icon: <Users className="w-6 h-6 text-sky-400" />,
      color: "from-sky-500/20 to-blue-500/5",
      borderColor: "border-sky-500/30"
    },
    {
      label: "Open Source PRs Merged",
      value: CLUB_INFO.stats.prsMerged,
      desc: "Verified student contributions",
      icon: <GitPullRequest className="w-6 h-6 text-purple-400" />,
      color: "from-purple-500/20 to-pink-500/5",
      borderColor: "border-purple-500/30"
    },
    {
      label: "Hackathon Prizes Awarded",
      value: CLUB_INFO.stats.prizePool,
      desc: "Cash pools, swags & cloud vouchers",
      icon: <Trophy className="w-6 h-6 text-amber-400" />,
      color: "from-amber-500/20 to-orange-500/5",
      borderColor: "border-amber-500/30"
    }
  ];

  return (
    <section id="stats-section" className="py-12 bg-gitdark-900 border-b border-gitdark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            Real Community Impact
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Building a World-Class Developer Culture at CHARUSAT
          </h2>
          <p className="mt-2 text-sm text-gitdark-400">
            Git Club is run by students, for students. From 1st-year freshers writing their first Git commit to seniors launching full-stack startups.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-gradient-to-b ${item.color} bg-gitdark-850/80 border ${item.borderColor} backdrop-blur-sm hover:scale-[1.02] transition-transform`}
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-gitdark-900 border border-gitdark-700/80">
                  {item.icon}
                </div>
                <span className="font-mono text-xs text-gitdark-400 font-medium">CHARUSAT</span>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-extrabold text-white font-mono tracking-tight">
                  {item.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-gitdark-200">
                  {item.label}
                </div>
                <p className="mt-1 text-xs text-gitdark-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Participating Institutes banner */}
        <div className="mt-8 p-4 rounded-xl bg-gitdark-950/60 border border-gitdark-800 flex flex-wrap items-center justify-between gap-4 text-xs text-gitdark-400">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-medium text-gitdark-300">Active Across Campus Institutes:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono text-[11px] text-gitdark-300">
            <span className="px-2.5 py-1 rounded bg-gitdark-800 border border-gitdark-700">CSPIT (Engineering)</span>
            <span className="px-2.5 py-1 rounded bg-gitdark-800 border border-gitdark-700">DEPSTAR (Tech & Research)</span>
            <span className="px-2.5 py-1 rounded bg-gitdark-800 border border-gitdark-700">CMPICA (Computer Applications)</span>
            <span className="px-2.5 py-1 rounded bg-gitdark-800 border border-gitdark-700">I²IM (Management)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
