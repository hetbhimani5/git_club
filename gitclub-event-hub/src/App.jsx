import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import FeaturedEvent from './components/FeaturedEvent';
import EventFilters from './components/EventFilters';
import EventCard from './components/EventCard';
import EventDetailModal from './components/EventDetailModal';
import RegistrationModal from './components/RegistrationModal';
import DigitalPassModal from './components/DigitalPassModal';
import MyPassesModal from './components/MyPassesModal';
import PastEventsSection from './components/PastEventsSection';
import FAQSection from './components/FAQSection';
import ProposeEventModal from './components/ProposeEventModal';
import Footer from './components/Footer';
import Toast from './components/Toast';

import { UPCOMING_EVENTS } from './data/eventsData';
import { Calendar, Sparkles, FilterX } from 'lucide-react';

export default function App() {
  // Events Data
  const [events, setEvents] = useState(UPCOMING_EVENTS);

  // Search & Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedInstitute, setSelectedInstitute] = useState('All');
  const [sortBy, setSortBy] = useState('date');

  // Modals State
  const [selectedEventDetail, setSelectedEventDetail] = useState(null);
  const [registeringEvent, setRegisteringEvent] = useState(null);
  const [activePass, setActivePass] = useState(null);
  const [isMyPassesOpen, setIsMyPassesOpen] = useState(false);
  const [isProposeOpen, setIsProposeOpen] = useState(false);

  // Toast Notification State
  const [toast, setToast] = useState(null);

  // User Registered Passes State (from LocalStorage)
  const [passes, setPasses] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('gitclub_charusat_passes');
      if (saved) {
        setPasses(JSON.parse(saved));
      }
    } catch (err) {
      console.error('Failed to load stored passes', err);
    }
  }, []);

  const showToast = (toastObj) => {
    setToast(toastObj);
  };

  const handleRegistrationSuccess = (newPass) => {
    setPasses((prev) => [newPass, ...prev.filter((p) => p.event.id !== newPass.event.id)]);
    setRegisteringEvent(null);
    setActivePass(newPass);
    showToast({
      type: 'success',
      message: `Registered! Your official ticket for ${newPass.event.title} is ready.`
    });
  };

  const handleCancelPass = (passId) => {
    const updated = passes.filter((p) => p.passId !== passId);
    setPasses(updated);
    localStorage.setItem('gitclub_charusat_passes', JSON.stringify(updated));
    showToast({
      type: 'info',
      message: 'Registration pass removed successfully.'
    });
  };

  const handleShareEvent = (event) => {
    const shareUrl = `${window.location.origin}/#${event.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      showToast({
        type: 'success',
        message: `Share link for "${event.title}" copied to clipboard!`
      });
    } else {
      showToast({
        type: 'info',
        message: `Event link: ${shareUrl}`
      });
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedInstitute('All');
    setSortBy('date');
  };

  // Filtered & Sorted Events
  const filteredEvents = useMemo(() => {
    return events
      .filter((ev) => {
        // Search query check
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = ev.title.toLowerCase().includes(q);
          const matchDesc = ev.description.toLowerCase().includes(q);
          const matchVenue = ev.venue.toLowerCase().includes(q);
          const matchCategory = ev.category.toLowerCase().includes(q);
          const matchTracks = ev.tracks?.some((t) => t.toLowerCase().includes(q));
          const matchSpeakers = ev.speakers?.some((s) => s.name.toLowerCase().includes(q));

          if (!matchTitle && !matchDesc && !matchVenue && !matchCategory && !matchTracks && !matchSpeakers) {
            return false;
          }
        }

        // Category filter check
        if (selectedCategory !== 'All' && ev.category !== selectedCategory) {
          return false;
        }

        // Institute filter check
        if (selectedInstitute !== 'All' && ev.institute !== selectedInstitute && ev.institute !== 'CHARUSAT Central') {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'popularity') {
          return b.registeredCount - a.registeredCount;
        }
        if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        // default: date soonest first
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
  }, [events, searchQuery, selectedCategory, selectedInstitute, sortBy]);

  // Featured marquee event
  const featuredMarqueeEvent = useMemo(() => {
    return events.find((e) => e.isFeatured) || events[0];
  }, [events]);

  const scrollToUpcoming = () => {
    const elem = document.getElementById('upcoming-events');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gitdark-950 text-gitdark-100 flex flex-col selection:bg-gitgreen selection:text-white">
      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Navigation */}
      <Navbar
        onOpenPasses={() => setIsMyPassesOpen(true)}
        onOpenPropose={() => setIsProposeOpen(true)}
        passCount={passes.length}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          featuredEvent={featuredMarqueeEvent}
          onRegister={(ev) => setRegisteringEvent(ev)}
          onExplore={scrollToUpcoming}
        />

        {/* Club Metrics / Stats */}
        <StatsCounter />

        {/* Featured Flagship Hackathon Spotlight */}
        <FeaturedEvent
          event={featuredMarqueeEvent}
          onRegister={(ev) => setRegisteringEvent(ev)}
          onSelectEvent={(ev) => setSelectedEventDetail(ev)}
        />

        {/* Upcoming Events Discovery Section */}
        <section id="upcoming-events" className="py-16 bg-gitdark-900 border-b border-gitdark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Title */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  Event Discovery
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
                  Upcoming Workshops & Activities
                </h2>
                <p className="text-sm text-gitdark-400 mt-1">
                  Discover, filter, and reserve your free pass for technical sessions at CHARUSAT.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMyPassesOpen(true)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-gitdark-200 bg-gitdark-800 hover:bg-gitdark-700 border border-gitdark-700 transition-colors flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>My Passes ({passes.length})</span>
                </button>
              </div>
            </div>

            {/* Filter Bar */}
            <EventFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedInstitute={selectedInstitute}
              setSelectedInstitute={setSelectedInstitute}
              sortBy={sortBy}
              setSortBy={setSortBy}
              totalResults={filteredEvents.length}
              onReset={handleResetFilters}
            />

            {/* Events Grid */}
            {filteredEvents.length === 0 ? (
              /* Empty state */
              <div className="p-12 text-center rounded-3xl bg-gitdark-850 border border-dashed border-gitdark-700 space-y-4">
                <div className="w-14 h-14 rounded-full bg-gitdark-800 flex items-center justify-center mx-auto text-gitdark-400">
                  <FilterX className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white">No matching events found</h3>
                <p className="text-xs text-gitdark-400 max-w-sm mx-auto">
                  We couldn't find any sessions matching your query. Try resetting your filters or search keywords.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gitgreen hover:bg-gitgreen-hover transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((ev) => (
                  <EventCard
                    key={ev.id}
                    event={ev}
                    onSelect={(event) => setSelectedEventDetail(event)}
                    onRegister={(event) => setRegisteringEvent(event)}
                    onShare={(event) => handleShareEvent(event)}
                  />
                ))}
              </div>
            )}

          </div>
        </section>

        {/* Past Events & Wall of Fame */}
        <PastEventsSection />

        {/* FAQs */}
        <FAQSection onOpenPropose={() => setIsProposeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onShowToast={showToast} />

      {/* MODALS */}
      {/* 1. Event Detail Modal */}
      {selectedEventDetail && (
        <EventDetailModal
          event={selectedEventDetail}
          onClose={() => setSelectedEventDetail(null)}
          onRegister={(ev) => setRegisteringEvent(ev)}
          onShare={(ev) => handleShareEvent(ev)}
        />
      )}

      {/* 2. Registration Modal */}
      {registeringEvent && (
        <RegistrationModal
          event={registeringEvent}
          onClose={() => setRegisteringEvent(null)}
          onSuccess={handleRegistrationSuccess}
        />
      )}

      {/* 3. Digital Boarding Pass Modal */}
      {activePass && (
        <DigitalPassModal
          pass={activePass}
          onClose={() => setActivePass(null)}
          onShare={() => handleShareEvent(activePass.event)}
        />
      )}

      {/* 4. My Passes Modal */}
      <MyPassesModal
        isOpen={isMyPassesOpen}
        onClose={() => setIsMyPassesOpen(false)}
        passes={passes}
        onViewPass={(pass) => {
          setIsMyPassesOpen(false);
          setActivePass(pass);
        }}
        onCancelPass={handleCancelPass}
        onBrowseEvents={scrollToUpcoming}
      />

      {/* 5. Propose Event Modal */}
      <ProposeEventModal
        isOpen={isProposeOpen}
        onClose={() => setIsProposeOpen(false)}
        onSubmitted={(data) => {
          showToast({
            type: 'success',
            message: `Proposal "${data.title}" submitted to Git Club! Our team will contact you.`
          });
        }}
      />
    </div>
  );
}
