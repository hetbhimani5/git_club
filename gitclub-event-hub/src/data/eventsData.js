// Git Club CHARUSAT - Realistic Event Data and Club Information
// Charotar University of Science and Technology (CHARUSAT), Changa, Gujarat

export const CLUB_INFO = {
  name: "Git Club CHARUSAT",
  tagline: "Build. Collaborate. Ship.",
  university: "Charotar University of Science & Technology (CHARUSAT)",
  location: "Changa, Anand, Gujarat - 388421",
  stats: {
    eventsHosted: "48+",
    participants: "3,400+",
    prsMerged: "1,650+",
    prizePool: "₹1,80,000+",
    partnerCompanies: "15+"
  },
  socials: {
    github: "https://github.com/gitclub-charusat",
    linkedin: "https://linkedin.com/company/gitclub-charusat",
    discord: "https://discord.gg/gitclub-charusat",
    instagram: "https://instagram.com/gitclub_charusat",
    email: "gitclub@charusat.edu.in"
  },
  institutes: [
    "CSPIT (Chandubhai S Patel Institute of Technology)",
    "DEPSTAR (Devang Patel Institute of Advance Technology and Research)",
    "CMPICA (Chandaben Mohanbhai Patel Institute of Computer Applications)",
    "RPCP (Ramanbhai Patel College of Pharmacy)",
    "I²IM (Indukaka Ipcowala Institute of Management)"
  ]
};

export const UPCOMING_EVENTS = [
  {
    id: "charuhacks-2026",
    title: "CHARUHacks 2026 — 36-Hr Flagship University Hackathon",
    tagline: "Build impactful open-source solutions for real-world problems",
    category: "Hackathon",
    categoryBadgeColor: "purple",
    isFeatured: true,
    bannerImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    date: "2026-10-17",
    displayDate: "Saturday, Oct 17 - Sunday, Oct 18, 2026",
    time: "09:00 AM IST (36 Hours Continuous)",
    venue: "CHARUSAT Central University Auditorium & Advanced Computing Labs",
    institute: "CHARUSAT Central",
    status: "Registration Open",
    statusColor: "emerald",
    totalSeats: 300,
    registeredCount: 248,
    entryFee: "Free Entry",
    prizePool: "₹65,000 Cash + Cloud Credits & Swag",
    deadline: "Oct 14, 2026, 11:59 PM",
    description: "CHARUHacks is the annual flagship hackathon organized by Git Club CHARUSAT. Over 36 adrenaline-filled hours, students across all colleges form teams to conceive, design, build, and deploy groundbreaking solutions.",
    tracks: [
      "AI & Autonomous Agents",
      "Web3 & Decentralized Systems",
      "Smart Campus & IoT",
      "HealthTech & Bio-Informatics",
      "Open Innovation / Social Good"
    ],
    agenda: [
      { time: "Day 1 - 08:30 AM", title: "Check-in & Kit Distribution", desc: "Welcome kit, badge pickup, and breakfast at Central Audi" },
      { time: "Day 1 - 10:00 AM", title: "Opening Ceremony & Problem Statement Drop", desc: "Keynote by Industry Mentors and Git Club Lead" },
      { time: "Day 1 - 11:00 AM", title: "Hacking Begins!", desc: "Teams commence coding in designated lab zones" },
      { time: "Day 1 - 04:00 PM", title: "Mentorship Round 1", desc: "Architecture and design review with alumni tech leads" },
      { time: "Day 1 - 11:30 PM", title: "Midnight Coding Jam & Pizza Party", desc: "Fun games, caffeine fuel, and live music break" },
      { time: "Day 2 - 08:00 AM", title: "Mentorship Round 2", desc: "Code quality, deployment check, and pitch deck review" },
      { time: "Day 2 - 04:00 PM", title: "Soft Deadline & Git PR Submission", desc: "Final code push to Git Club Hackathon repository" },
      { time: "Day 2 - 05:30 PM", title: "Grand Finale Demos & Award Ceremony", desc: "Top 8 finalists pitch live on stage to jury" }
    ],
    speakers: [
      {
        name: "Arjun Patel",
        role: "Senior AI Engineer @ Google / Git Club Alumni",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        company: "Google",
        topic: "Building Resilient Agentic Architectures"
      },
      {
        name: "Pooja Varma",
        role: "Founding Engineer @ DevScale / Ex-CSPIT",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
        company: "DevScale",
        topic: "Production-ready Fullstack Deployment"
      }
    ],
    prerequisites: [
      "Valid CHARUSAT Student ID card",
      "Laptop with charger & extension cord (if possible)",
      "Basic familiarity with any programming language",
      "GitHub account configured with SSH key"
    ],
    perks: [
      "Official Git Club CHARUSAT Certificate of Excellence",
      "Exclusive Hackathon T-shirt, laptop stickers & swag bag",
      "Complimentary meals, midnight snacks, and continuous energy drinks",
      "Direct internship interview opportunities with partner startups"
    ]
  },
  {
    id: "git-github-mastery-2026",
    title: "Git & GitHub Zero to Hero: The Open Source Launchpad",
    tagline: "Hands-on mastery of version control, merge conflict resolution & collaborative workflows",
    category: "Workshop",
    categoryBadgeColor: "blue",
    isFeatured: false,
    bannerImage: "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&w=1200&q=80",
    date: "2026-10-06",
    displayDate: "Tuesday, Oct 6, 2026",
    time: "02:00 PM - 05:30 PM IST",
    venue: "CSPIT Computer Engineering Lab 3 & 4 (First Floor)",
    institute: "CSPIT",
    status: "Filling Fast",
    statusColor: "amber",
    totalSeats: 120,
    registeredCount: 104,
    entryFee: "Free Entry",
    prizePool: "Git Good Swag & Fast-track Membership",
    deadline: "Oct 5, 2026, 06:00 PM",
    description: "Whether you are a 1st year student writing your first line of code or preparing for industry internships, mastering Git and GitHub is indispensable. This is a 100% hands-on laboratory session where every participant makes live commits, creates Pull Requests, resolves simulated merge conflicts, and launches their first GitHub Pages portfolio.",
    tracks: [
      "Version Control Basics (init, add, commit, log)",
      "Branching Strategies & Feature Branch Workflow",
      "Interactive Rebasing & Conflict Resolution",
      "GitHub Pull Requests, Code Reviews, & Actions CI/CD"
    ],
    agenda: [
      { time: "02:00 PM", title: "Git Fundamentals & Plumbing", desc: "Understanding the DAG, Blobs, Trees, and Commits" },
      { time: "02:45 PM", title: "Hands-on Lab Exercise 1", desc: "Cloning, branching, committing, and remote push" },
      { time: "03:30 PM", title: "Tackling the Beast: Merge Conflicts", desc: "Interactive 3-way merge conflict practice session" },
      { time: "04:15 PM", title: "Contributing to Git Club Open Source", desc: "Live PR walkthrough and Hacktoberfest preparation" },
      { time: "05:00 PM", title: "Q&A, Git Quiz & Sticker Distribution", desc: "Live Kahoot quiz with prizes for top 3 scorers" }
    ],
    speakers: [
      {
        name: "Devam Shah",
        role: "Git Club Technical Lead / 4th Year CE, CSPIT",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        company: "Git Club CHARUSAT",
        topic: "Git Internals & Collaboration"
      }
    ],
    prerequisites: [
      "Installed Git on your laptop (Windows/macOS/Linux)",
      "Active GitHub account",
      "VS Code or preferred text editor"
    ],
    perks: [
      "Hands-on Certificate of Participation",
      "Git Cheat Sheet cheat poster",
      "Git Club holographic sticker pack"
    ]
  },
  {
    id: "ai-agents-gemini-masterclass",
    title: "Building Autonomous AI Agents with Gemini API & Python",
    tagline: "Build production multi-agent systems and tool-calling assistants from scratch",
    category: "Tech Talk",
    categoryBadgeColor: "emerald",
    isFeatured: false,
    bannerImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    date: "2026-10-24",
    displayDate: "Saturday, Oct 24, 2026",
    time: "10:30 AM - 01:30 PM IST",
    venue: "DEPSTAR Seminar Hall 2, Devang Patel Institute",
    institute: "DEPSTAR",
    status: "Registration Open",
    statusColor: "emerald",
    totalSeats: 160,
    registeredCount: 88,
    entryFee: "Free Entry",
    prizePool: "₹5,000 API Credits + Swag",
    deadline: "Oct 22, 2026, 11:59 PM",
    description: "Explore the frontiers of modern AI! In this technical deep-dive, we deconstruct how Large Language Models can be given tools, code execution environments, memory, and orchestration loops to act as autonomous software engineering agents.",
    tracks: [
      "LLM Function Calling & Structured Outputs",
      "ReAct Pattern & Reasoning Loops",
      "LangChain / LlamaIndex vs Native SDKs",
      "Deploying AI Agents to Google Cloud Run"
    ],
    agenda: [
      { time: "10:30 AM", title: "Introduction to Agentic AI", desc: "Why simple prompts are not enough — the shift to agents" },
      { time: "11:15 AM", title: "Building a Python Web-Scraping Agent", desc: "Live code-along integrating Gemini API with custom tools" },
      { time: "12:15 PM", title: "Memory & Context Management", desc: "Vector embeddings, RAG, and state persistence" },
      { time: "01:00 PM", title: "Showcase & Deployment Tips", desc: "Free tier hosting and API key security best practices" }
    ],
    speakers: [
      {
        name: "Dr. Krunal Patel",
        role: "Associate Professor, Department of AI & ML, DEPSTAR",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        company: "DEPSTAR CHARUSAT",
        topic: "Frontiers in Autonomous Agent Systems"
      },
      {
        name: "Ritika Dave",
        role: "AI Research Intern @ Microsoft / Ex-CHARUSAT",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
        company: "Microsoft",
        topic: "Production LLM Tool Calling"
      }
    ],
    prerequisites: [
      "Basic Python knowledge (functions, dictionaries, pip)",
      "Google Account for Google AI Studio API key",
      "Laptop with Python 3.10+ installed"
    ],
    perks: [
      "Verified Certificate of Completion",
      "Curated Agentic Python starter GitHub template",
      "High tea & networking with speakers"
    ]
  },
  {
    id: "codeclash-algorithmic-duel-2026",
    title: "CodeClash 2026: Speed Coding & Algorithmic Duel",
    tagline: "1v1 competitive programming face-off with live audience visualization",
    category: "Competition",
    categoryBadgeColor: "red",
    isFeatured: false,
    bannerImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    date: "2026-11-04",
    displayDate: "Wednesday, Nov 4, 2026",
    time: "03:00 PM - 06:30 PM IST",
    venue: "CMPICA Main Computing Center (Lab 101-104)",
    institute: "CMPICA",
    status: "Upcoming",
    statusColor: "blue",
    totalSeats: 150,
    registeredCount: 65,
    entryFee: "Free Entry",
    prizePool: "₹15,000 Cash Pool + Trophy",
    deadline: "Nov 2, 2026, 05:00 PM",
    description: "Put your data structures and algorithm skills to the ultimate test! CodeClash features 3 rapid rounds: Speed Round (Easy-Medium DS), Blind Coding Challenge, and the Knockout 1v1 Arena where top coders duel on projector screens.",
    tracks: [
      "C++ / Java / Python algorithmic problem solving",
      "Dynamic Programming, Graphs, & Greedy Algorithms",
      "Code efficiency and space-time optimization"
    ],
    agenda: [
      { time: "03:00 PM", title: "Round 1: The Qualifier Sprint", desc: "45 minutes, 4 algorithmic problems on HackerRank" },
      { time: "04:15 PM", title: "Round 2: The Debugging & Blind Round", desc: "Fix buggy algorithms with monitors dimmed!" },
      { time: "05:15 PM", title: "Round 3: Grand 1v1 Finals", desc: "Top 4 finalists battle live on auditorium stage" },
      { time: "06:00 PM", title: "Felicitation & Winner Trophies", desc: "Trophy hand-off and cash prize distribution" }
    ],
    speakers: [
      {
        name: "Yashvi Trivedi",
        role: "Competitive Programming Lead / Candidate Master @ Codeforces",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
        company: "Git Club CHARUSAT",
        topic: "Speed Problem Solving & Contest Strategies"
      }
    ],
    prerequisites: [
      "Active HackerRank or LeetCode account",
      "Comfort with standard I/O in C++, Java, or Python"
    ],
    perks: [
      "Cash prizes for Top 3 winners",
      "Official CodeClash Champions Trophy",
      "Direct selection into CHARUSAT ICPC training squad"
    ]
  },
  {
    id: "web-dev-sprint-fullstack-2026",
    title: "Fullstack Web Sprint: Modern React & Supabase in a Day",
    tagline: "Build and deploy a full-featured real-time database web app in 4 hours",
    category: "Workshop",
    categoryBadgeColor: "blue",
    isFeatured: false,
    bannerImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    date: "2026-11-14",
    displayDate: "Saturday, Nov 14, 2026",
    time: "10:00 AM - 02:30 PM IST",
    venue: "CSPIT Seminar Hall & Web Dev Lab",
    institute: "CSPIT",
    status: "Upcoming",
    statusColor: "blue",
    totalSeats: 100,
    registeredCount: 42,
    entryFee: "Free Entry",
    prizePool: "Vercel / GitHub Student Pack Swag",
    deadline: "Nov 12, 2026, 11:59 PM",
    description: "Tired of tutorials where you never deploy? In this intensive Saturday sprint, we will build a complete web application from an empty folder to a live URL on Vercel, hooked up to a live PostgreSQL database and authentication.",
    tracks: [
      "Modern React with Vite & Tailwind CSS",
      "State Management & Custom Hooks",
      "Supabase Auth & Database Rules",
      "Vercel Cloud Deployment & Domain Linking"
    ],
    agenda: [
      { time: "10:00 AM", title: "Project Blueprint & Scaffolding", desc: "Setting up Vite, Tailwind, and component structure" },
      { time: "11:15 AM", title: "Supabase Backend Integration", desc: "Tables, Row Level Security, and real-time listeners" },
      { time: "12:30 PM", title: "Lunch & Networking Break", desc: "Free snacks & peer discussions" },
      { time: "01:15 PM", title: "Deploying to Vercel & Going Live", desc: "Live submission link testing for all attendees" }
    ],
    speakers: [
      {
        name: "Manan Shah",
        role: "Fullstack Architect @ TechSprint / Alumni CSPIT",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
        company: "TechSprint",
        topic: "Modern Fullstack Velocity"
      }
    ],
    prerequisites: [
      "Basic HTML, CSS, and JavaScript familiarity",
      "Node.js installed on your laptop"
    ],
    perks: [
      "Deployable portfolio project ready for resume",
      "Certificate of Completion",
      "Sticker pack & dev cheatsheet"
    ]
  },
  {
    id: "community-open-mic-dev-meetup",
    title: "Git & Chai: Monthly Open Community Meetup & Lightning Talks",
    tagline: "Informal, high-energy tech discussions, project demos & hot chai",
    category: "Community",
    categoryBadgeColor: "emerald",
    isFeatured: false,
    bannerImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    date: "2026-11-21",
    displayDate: "Saturday, Nov 21, 2026",
    time: "04:30 PM - 06:30 PM IST",
    venue: "CHARUSAT Lakeview Amphitheatre & Student Plaza",
    institute: "CHARUSAT Central",
    status: "Upcoming",
    statusColor: "blue",
    totalSeats: 80,
    registeredCount: 31,
    entryFee: "Free Entry",
    prizePool: "Best Lightning Talk Award",
    deadline: "Nov 20, 2026, 02:00 PM",
    description: "No formal slides, no boring lectures! Git & Chai is our monthly casual gathering where students take 5-minute lightning talks on anything cool they built, failed at, or learned this month. Enjoy hot masala chai and snacks while networking with developers across years.",
    tracks: [
      "5-minute Lightning Demos",
      "Student Open Source Project Showcases",
      "Internship & GSoC Experience Sharing",
      "Casual Networking & Brainstorming"
    ],
    agenda: [
      { time: "04:30 PM", title: "Chai & Networking Kickoff", desc: "Mingle with peers across CSPIT, DEPSTAR & CMPICA" },
      { time: "05:00 PM", title: "5 x 5 Lightning Talks", desc: "Five students demo their cool side projects" },
      { time: "05:45 PM", title: "Git Club Monthly Roadmap", desc: "Preview of upcoming hackathons and initiatives" },
      { time: "06:15 PM", title: "Open Mic & Peer Q&A", desc: "Casual chats by the scenic lakeview campus" }
    ],
    speakers: [
      {
        name: "Student Community Speakers",
        role: "Various CHARUSAT Students",
        avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&q=80",
        company: "Git Club CHARUSAT",
        topic: "Cool Side Projects & GSoC Journeys"
      }
    ],
    prerequisites: [
      "Open to all years and all branches — no prerequisites!",
      "Curiosity to learn and make friends"
    ],
    perks: [
      "Free hot tea, samosas, and snacks",
      "Git Club Community Badge",
      "Opportunity to pitch your project to the club"
    ]
  }
];

export const PAST_EVENTS = [
  {
    id: "hacktoberfest-charusat-2025",
    title: "Hacktoberfest CHARUSAT 2025 — The Open Source Festival",
    date: "October 12-13, 2025",
    category: "Hackathon",
    venue: "CSPIT Central Auditorium",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    stats: {
      attendees: 380,
      prsMerged: 420,
      repositories: 18,
      prizes: "₹40,000"
    },
    shortSummary: "A landmark 2-day open source festival where 380+ students from CHARUSAT contributed to real-world GitHub repositories, unlocking official DigitalOcean & Git Club rewards.",
    highlights: [
      "420 Pull Requests successfully reviewed and merged by club maintainers",
      "18 Open Source repositories hosted by CHARUSAT faculty and students",
      "Over 120 first-time GitHub contributors celebrated"
    ]
  },
  {
    id: "devops-cloud-odyssey-2025",
    title: "Cloud & DevOps Odyssey: Docker, Kubernetes & GitHub Actions",
    date: "August 23, 2025",
    category: "Workshop",
    venue: "DEPSTAR Seminar Hall",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    stats: {
      attendees: 195,
      prsMerged: 110,
      repositories: 5,
      prizes: "AWS Credits"
    },
    shortSummary: "Full-day hands-on immersion into containerizing microservices, setting up Docker Compose, and automating CI/CD pipelines directly via GitHub Actions.",
    highlights: [
      "100% attendee labs deployed to real cloud clusters",
      "Live teardown of production outage war stories by guest speaker",
      "Docker cheat guides and AWS voucher giveaways"
    ]
  },
  {
    id: "flutter-app-sprint-2025",
    title: "Mobile App Genesis: Cross-Platform Flutter Sprint",
    date: "March 15, 2025",
    category: "Workshop",
    venue: "CMPICA Main Lab",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    stats: {
      attendees: 160,
      prsMerged: 85,
      repositories: 8,
      prizes: "₹10,000"
    },
    shortSummary: "Students built and published their first Android and Web apps with Flutter and Dart, connecting to REST APIs and handling state management.",
    highlights: [
      "40+ functional app prototypes submitted by end of day",
      "Interactive state management live code battle",
      "Mentored by mobile engineers from prominent tech startups"
    ]
  },
  {
    id: "git-intro-101-2024",
    title: "Git 101: Freshers Welcome & Version Control Kickoff",
    date: "September 8, 2024",
    category: "Workshop",
    venue: "CSPIT Audi B",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    stats: {
      attendees: 310,
      prsMerged: 290,
      repositories: 12,
      prizes: "Club Swag"
    },
    shortSummary: "Welcoming 1st and 2nd year students into the Git Club family, teaching core CLI commands, and establishing GitHub profile portfolios.",
    highlights: [
      "Every attendee pushed their first commit within 45 minutes",
      "Launched the annual Git Club Mentorship Circle",
      "Over 300 custom Git Club laptop stickers distributed"
    ]
  }
];

export const FAQS = [
  {
    q: "Who is eligible to participate in Git Club CHARUSAT events?",
    a: "All events are open to any student currently enrolled at CHARUSAT — whether you belong to CSPIT, DEPSTAR, CMPICA, RPCP, or I²IM, across all years (1st year through 4th/final year) and all branches (CE, IT, CSE, AI, EC, Mechanical, etc.)."
  },
  {
    q: "Are the workshops and hackathons completely free?",
    a: "Yes! 100% of Git Club events are free for CHARUSAT students. Our mission is to promote open-source culture, technical skill development, and collaboration without any financial barrier."
  },
  {
    q: "Do I get official attendance / duty leaves for attending daytime events?",
    a: "Yes. Official attendance slips or faculty approval notifications are arranged with respective department heads for all registered attendees who participate in the full duration of the event."
  },
  {
    q: "I am a complete beginner. Can I still join workshops and hackathons?",
    a: "Absolutely! We explicitly design beginner-friendly tracks with mentors standing by in every row. For hackathons, we offer team-building mixers so beginners can pair with experienced seniors."
  },
  {
    q: "How do I get my Digital Event Pass after registration?",
    a: "As soon as you fill the registration form on this platform, a verifiable Digital Pass with a unique QR Code and Pass ID is automatically generated. You can download or print it, and it is also saved in your 'My Passes' tab."
  },
  {
    q: "How can I propose a workshop topic or become a speaker / mentor?",
    a: "We welcome passionate students, alumni, and faculty! Click the 'Propose Event' button in the navigation bar to submit your talk or workshop proposal to the Git Club committee."
  }
];

export const CORE_LEADERSHIP = [
  {
    name: "Aarav Sharma",
    role: "President & Lead Organizer",
    branch: "B.Tech CE, CSPIT (Final Year)",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Khushi Joshi",
    role: "Vice President & Community Lead",
    branch: "B.Tech IT, DEPSTAR (3rd Year)",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Devam Shah",
    role: "Technical Head & Hackathon Lead",
    branch: "B.Tech CSE, CSPIT (4th Year)",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Priya Vaghani",
    role: "Design & Media Coordinator",
    branch: "BCA / MCA, CMPICA (2nd Year)",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  }
];
