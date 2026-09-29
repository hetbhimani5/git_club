# Git Club CHARUSAT — Event Hub
> **Website Challenge — Initial Round Submission**  
> *"Build something the club can actually use."*

Centralized Events & Activities Platform for **Git Club CHARUSAT** (Charotar University of Science and Technology, Changa, Gujarat).

---

## 🌟 Overview & Problem Solved
Git Club conducts workshops, competitions, hackathons, and community meetups across multiple institutes (CSPIT, DEPSTAR, CMPICA, I²IM). Previously, event announcements, registration links, schedules, and materials were scattered across WhatsApp groups, Instagram stories, and disparate Google Forms.

**Git Club Event Hub** solves this by providing a unified, developer-first web platform where students can:
1. **Discover** all upcoming workshops, hackathons, and coding duels.
2. **Filter & Search** by category (*Hackathons*, *Workshops*, *Competitions*, *Tech Talks*, *Community*) and campus institute.
3. **Inspect Detailed Schedules**, hour-by-hour agendas, speaker bios, and prerequisites.
4. **Register with One Click** and receive an instant **Digital Boarding Pass with dynamic QR Code**.
5. **Add to Google Calendar** or download `.ics` calendar files with zero friction.
6. **Access Stored Passes** locally via the **"My Passes"** wallet, complete with print/PDF support.
7. **Explore Past Event Chronicles**, stats (participants, merged pull requests), and photo recaps.
8. **Propose New Events & Talks** to the Git Club committee directly from the website.

---

## 🚀 Key Features

### 1. Git Club Branded Navigation & Hero
- Git developer aesthetic (dark mode `#0d1117`, emerald `#238636` and `#3fb950` accents).
- **Live Countdown Timer** ticking down in real time to the next marquee event (*CHARUHacks 2026*).
- Campus context: *Charotar University of Science and Technology (CHARUSAT), Changa*.

### 2. Flagship Hackathon Spotlight (CHARUHacks 2026)
- 36-Hour continuous hackathon banner with innovation tracks (AI & Agents, Web3, Smart Campus, HealthTech).
- Live registration capacity fill-rate progress bar (e.g. 248 / 300 seats).
- Grand prize pool showcase (₹65,000+ & cloud credits).

### 3. Real-Time Search & Multi-Faceted Filters
- Instant search by title, topic, speaker, track, or campus venue.
- Category chips (*Workshops*, *Hackathons*, *Competitions*, *Tech Talks*, *Community*).
- Institute filter (*CSPIT*, *DEPSTAR*, *CMPICA*, *CHARUSAT Central*).
- Sorting by date, popularity, or alphabetical order.

### 4. Interactive Event Cards
- Event category badge, date, time, venue, description, fill-rate indicator.
- Action buttons: *View Details*, *Register*, *Add to Calendar*, and *Share Link* (copies link with toast notification).

### 5. Full Event Detail View
- Hour-by-hour agenda & timeline.
- Speaker profiles with avatars and topics.
- Prerequisites checklist and participant perks/swags.
- Direct Google Calendar & `.ics` file integration.

### 6. Digital QR Event Pass & Registration Engine
- Form collecting Name, Student ID (`24CS084`), College Email, Institute, Semester, GitHub, and Team Name.
- Confetti celebration upon registration.
- **Genuine QR Code generation** containing verified attendee details.
- Printable Boarding Pass layout with unique Pass ID (`GC-CHARU-XXX-XXXX`) and Seat Allocation.
- Automatically saved to `localStorage` under **"My Passes"**.

### 7. Past Events & Wall of Fame
- Historical records of past events (*Hacktoberfest CHARUSAT 2025*, *Cloud DevOps Odyssey*, etc.).
- Verified metrics: Attendees count, GitHub PRs merged, repositories hosted, and cash rewards.
- Full recap modal with key highlights.

### 8. Campus FAQ & Event Proposal System
- Accordion answers tailored to first-year students and freshers.
- "Propose a Session" modal allowing students and faculty to submit talk ideas.

---

## 🛠️ Technology Stack
- **Frontend Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS (custom Git dark theme)
- **Icons:** Lucide React
- **QR Code Engine:** `qrcode`
- **Celebration Effects:** `canvas-confetti`
- **State & Storage:** React Hooks + LocalStorage Persistence

---

## 💻 Local Setup & Running
```bash
# Clone the repository
git clone https://github.com/<your-username>/gitclub-event-hub.git

# Navigate to project directory
cd gitclub-event-hub

# Install dependencies
npm install

# Start local development server
npm run dev

# Open in browser:
# http://localhost:5173
```

---

## 🌐 Deploy to Vercel (1-Click)
1. Push this repository to your GitHub account.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your `gitclub-event-hub` repository.
4. Leave build settings as default (`npm run build`, output directory `dist`).
5. Click **"Deploy"**. Your live URL (e.g., `https://gitclub-event-hub.vercel.app`) will be ready in under 60 seconds!

---

## 📹 5–6 Minute Demo Video Script (Google Drive)
**File Name format:** `ID_Name_phone.mp4` (e.g. `24CS084_Om_Rashiya_9876543210.mp4`)

- **0:00 – 0:30 | Introduction:**
  Introduce yourself, roll number/branch, and state Problem Statement 1: *Git Club Event Hub*.
- **0:30 – 1:30 | The Problem & Approach:**
  Explain how Git Club events were scattered across Instagram/WhatsApp, and why a centralized hub with instant QR passes and calendar reminders empowers the entire CHARUSAT campus.
- **1:30 – 4:30 | Live Demonstration:**
  1. Show Hero section with the live countdown timer.
  2. Filter events by "Workshops" and "Hackathons".
  3. Search for "AI" or "Git".
  4. Open Event Details: show agenda, speaker profile, and prerequisites.
  5. Click "Add to Google Calendar".
  6. Fill the Registration form and submit.
  7. Show the confetti burst and the generated **Digital Boarding Pass with dynamic QR code**.
  8. Click "Print / Save PDF" to show print readiness.
  9. Open "My Passes" from the navbar to show offline persistence.
- **4:30 – 5:30 | Responsive Design & Code Highlights:**
  Inspect element to show mobile responsive drawer, clean component architecture, and past event archives.
- **5:30 – 6:00 | Future Improvements:**
  Mention upcoming features like real-time attendance QR scanner for organizers and Discord bot webhook integration.
