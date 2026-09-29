import React, { useState } from 'react';
import { FAQS } from '../data/eventsData';
import { ChevronDown, HelpCircle, Sparkles, MessageSquare } from 'lucide-react';

export default function FAQSection({ onOpenPropose }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 bg-gitdark-900 border-b border-gitdark-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gitdark-400 max-w-lg mx-auto">
            Everything a CHARUSAT student needs to know about participating in Git Club events, workshops, and hackathons.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-gitdark-850 border border-gitdark-750/90 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gitdark-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gitdark-300 leading-relaxed border-t border-gitdark-800/60 bg-gitdark-900/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Propose a topic banner */}
        <div className="mt-10 p-6 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-gitdark-850 to-teal-950/60 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Have a workshop topic or project to showcase?</span>
            </h4>
            <p className="text-xs text-gitdark-300 mt-1">
              Git Club is open to student and faculty speakers. Propose an event and our team will help host it!
            </p>
          </div>
          <button
            onClick={onOpenPropose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gitgreen hover:bg-gitgreen-hover transition-colors shrink-0 shadow-sm"
          >
            Propose a Session
          </button>
        </div>

      </div>
    </section>
  );
}
