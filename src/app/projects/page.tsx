"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { useState } from "react";
import { Icons } from "@/components/icons";

const BLUR_FADE_DELAY = 0.04;

type TabType = "all" | "websites" | "extensions" | "google apps script";

// Add new projects here that will only show on this page
const ADDITIONAL_PROJECTS = [
  {
    title: "Business OS – Google Sheets Web App",
    href: "/projects/business-os",
    dates: "Nov 2025 - Dec 2025",
    active: true,
    description:
      "Small Business OS is a modern web application built on top of Google Sheets using Google Apps Script. The project transforms a traditional spreadsheet into a fully interactive business management system with a clean web-app interface, removing the need to work directly with cells or formulas. The application provides a professional dashboard with interactive controls, pop-up interfaces, and automated workflows for managing business operations. By using Google Sheets as the backend database and a custom frontend layer, the system delivers a smooth app-like experience while keeping data securely stored within Google Drive.",
    technologies: [
      "Google Apps Script",
      "Javascript",
      "Google Sheets API",
      "HTML / CSS",
      "Web App Deployment",
      "Google Drive Integration",
    ],
    image: "",
    video: "script3.mp4",
    category: "google apps script" as TabType,
  },
  {
    title: "Walmart Product Scraper",
    href: "/projects/walmart-product-scraper",
    dates: "Jan 2026 - Feb 2026",
    active: true,
    description:
      "A powerful hybrid tool that automates the creation of optimized Walmart product listings. It leverages a Chrome Extension for robust client-side scraping (bypassing server-side bot detection) and a Google Apps Script backend for secure AI processing using OpenAI's GPT-4o Vision. Features include client-side scraping to bypass CAPTCHAs, rich data extraction from internal JSON, multi-input support for URLs and Product IDs, resume & retry capability, robust keep-alive system using Chrome Offscreen API, smart validation for Walmart's requirements, and cost-efficient AI processing with GPT-4o-mini.",
    technologies: [
      "Google Apps Script",
      "Chrome Extension API",
      "OpenAI GPT-4o Vision",
      "GPT-4o-mini",
      "Chrome Offscreen API",
      "Web Scraping",
      "Google Sheets API",
      "JavaScript",
      "Manifest V3",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/pasindupiumal03/Walmart-Product-Scrapes-Extension",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "walmart.mp4",
    category: "google apps script" as TabType,
  },
  {
    title: "Freelancer Workspace – Google Sheets SPA",
    href: "/projects/freelancer-workspace",
    dates: "Dec 2025 – Dec 2025",
    active: true,
    description:
      "Freelancer Workspace is a lightweight business management web app built by transforming Google Sheets into a full Single Page Application (SPA). The project uses Google Apps Script to treat the spreadsheet as a backend database while delivering a modern frontend experience that removes the traditional “spreadsheet feel.” The system allows freelancers to track work sessions with a live timer, generate automated invoices, and monitor financial performance through a dynamic analytics dashboard. With an optimistic UI approach and custom frontend layer, the application provides fast, seamless interactions while keeping all data securely stored in Google Drive.",
    technologies: [
      "Google Apps Script",
      "Javascript",
      "Google Sheets API",
      "HTML / CSS",
      "Charts",
      "PDF Generation APIs",
    ],
    image: "",
    video: "script2.mp4",
    category: "google apps script" as TabType,
  },
  {
    title: "FlowKey - Bookmark & Layout Manager",
    href: "/projects/flowkey",
    dates: "Aug 2025 - Sep 2025",
    active: true,
    description:
      "FlowKey is a powerful Chrome extension that streamlines bookmark organization with customizable layouts and seamless Phantom wallet connectivity. Designed with a modern purple-gradient UI and built using React 18 and Webpack 5 for high performance and maintainability.",
    technologies: [
      "React.js",
      "Javascript",
      "Chrome Extension (Manifest V3)",
      "Webpack 5",
      "Node.js",
      "Phantom Wallet SDK",
      "TailwindCSS",
    ],
    links: [
      {
        type: "Store",
        href: "https://chromewebstore.google.com/detail/flowkey-bookmark-layout-m/lpgjlhajnhhdbaleigdkeloeeniedpnj",
        icon: <Icons.store className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/pasindupiumal03/FlowKey-Chrome-Extension",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "/flowkey.mp4",
    category: "extensions" as TabType,
  },
  {
    title: "Amazon Schedule Monitor",
    href: "/projects/amazon-schedule-monitor",
    dates: "Feb 2025 - Mar 2025",
    active: true,
    description:
      "Amazon Schedule Monitor is a specialized Chrome extension designed to automate the monitoring of Amazon hiring pages for available shift schedules. It automatically checks for schedule updates in the background, sends instant notifications when new shifts become available, and helps users quickly secure their preferred work schedules. Perfect for Amazon flex workers and gig economy professionals who need to stay ahead of schedule releases.",
    technologies: [
      "Chrome Extension API",
      "Background Scripts",
      "DOM Manipulation",
      "Web Scraping",
      "Chrome Notifications",
      "Chrome Storage",
      "JavaScript",
      "Manifest V3",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/pasindupiumal03/Amazon-Schedule-Monitor-Extension",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "amazon-schedule-monitor.png",
    video: "",
    category: "extensions" as TabType,
  },
  {
    title: "OneLearning (LinkedIn Knowledge Scraper)",
    href: "/projects/no-code-web-scraper",
    dates: "Sep 2025 - Oct 2025",
    active: true,
    description:
      "OneLearning is a powerful Chrome extension that helps you effortlessly import your saved LinkedIn posts and organize them with custom tags and notes. It transforms your LinkedIn saved content into a searchable, well-organized knowledge base, making it easy to revisit and reference valuable insights whenever you need them.",
    technologies: [
      "React.js",
      "Chrome Extension API",
      "IndexedDB",
      "Chrome Storage",
      "TailwindCSS",
      "Manifest V3",
    ],
    links: [],
    image: "Linkedin_Scraper.png",
    video: "",
    category: "extensions" as TabType,
  },
  {
    title: "Censor AI",
    href: "/projects/censor-ai",
    dates: "Jul 2025 - Aug 2025",
    active: true,
    description:
      "Censor AI is a smart Chrome extension that revolutionizes email writing on Gmail. Simply type your message, and Censor AI suggests a professionally rewritten version using OpenAI's powerful API. You can send the AI-enhanced email instantly or fine-tune it before sending. Perfect for crafting professional, clear, or friendly emails with ease—making email communication smarter and more efficient.",
    technologies: [
      "Chrome Extension API",
      "OpenAI API",
      "Gmail Integration",
      "JavaScript",
      "TailwindCSS",
      "Manifest V3",
    ],
    links: [
      {
        type: "Store",
        href: "https://chromewebstore.google.com/detail/censor/elgfhammpjfmmgiflpjbohhbimlfdimm",
        icon: <Icons.store className="size-3" />,
      },
    ],
    image: "censor-ai.png",
    video: "",
    category: "extensions" as TabType,
  },
  {
    title: "WebMind",
    href: "/projects/webmind",
    dates: "Apr 2025 - May 2025",
    active: true,
    description:
      "WebMind is a powerful browser extension that transforms your web history into a private, searchable knowledge base. It automatically records visited websites with URLs, content, and timestamps, encrypting data for security. Using AI-powered vector embeddings and natural language search, you can ask questions like 'What article did I read about Solana NFTs?' and get instant answers. Perfect for researchers, developers, and traders who need intelligent recall without disrupting workflow.",
    technologies: [
      "Chrome Extension API",
      "Node.js",
      "OpenAI API",
      "Vector Embeddings",
      "Encryption",
      "IndexedDB",
      "JavaScript",
      "Manifest V3",
    ],
    links: [],
    image: "WebMind.png",
    video: "",
    category: "extensions" as TabType,
  },
  {
    title: "Positional AI",
    href: "/projects/positional-ai",
    dates: "Jun 2025 - Jul 2025",
    active: true,
    description:
      "Positional AI is an intelligent Chrome extension that detects whether content is AI-generated or human-written. It analyzes text in real-time and provides a detailed AI plagiarism percentage score, helping users verify content authenticity. Perfect for educators, content creators, and businesses who need to ensure originality and distinguish between human and AI-generated content.",
    technologies: [
      "Chrome Extension API",
      "AI Detection API",
      "Machine Learning",
      "Content Scripts",
      "JavaScript",
      "TailwindCSS",
      "Manifest V3",
    ],
    image: "positional.png",
    category: "extensions" as TabType,
  },
  {
    title: "Link Shortener",
    href: "/projects/link-shortener",
    dates: "Mar 2025 - Apr 2025",
    active: true,
    description:
      "Link Shortener is a sleek Chrome extension that instantly shrinks the URL you're currently visiting with a stunning modern UI. It offers comprehensive URL management with features including history tracking, social sharing, QR code generation, favorites list, and custom URL shortening. Perfect for content creators, marketers, and anyone who needs quick, organized access to shortened links with a beautiful, intuitive interface.",
    technologies: [
      "Chrome Extension API",
      "URL Shortening API",
      "QR Code Generation",
      "Chrome Storage",
      "JavaScript",
      "TailwindCSS",
      "Manifest V3",
    ],
    image: "shortner.webp",
    category: "extensions" as TabType,
  },
  {
    title: "Office OS – Google Workspace Productivity System",
    href: "/projects/office-os",
    dates: "Jan 2026 – Feb 2026",
    active: true,
    description:
      "Office OS is a powerful productivity workspace built inside Google Sheets and powered by Google Apps Script. It transforms a traditional spreadsheet into a modern web-app experience for managing tasks, workflows, and client information. The system features a visual Kanban board for task management, customizable aesthetic themes, built-in focus tools such as a Pomodoro timer, and lightweight CRM functionality. Designed with performance optimizations and an optimistic UI approach, the app delivers a smooth, fast experience directly within the Google Workspace ecosystem while keeping all data stored securely in the user's Google Drive.",
    technologies: [
      "Google Apps Script",
      "Javascript",
      "Google Sheets API",
      "HTML / CSS",
      "Workspace Add-on Architecture",
      "UI Service",
      "Google Drive Storage",
    ],
    links: [],
    image: "",
    video: "/script1.mp4",
    category: "google apps script" as TabType,
  },
  {
    title: "Amazon Product Scraper",
    href: "/projects/amazon-product-scraper",
    dates: "Oct 2025 - Nov 2025",
    active: true,
    description:
      "A comprehensive automation tool that streamlines Amazon product data extraction and processing. Users input Amazon product links or ASINs, and the system automatically fetches all product images and details. It then processes these through OCR technology to extract text from images and automatically populates Google Sheets with structured data including Title, Bullets, Description, Brand, Manufacturer information, and OCR-extracted text from main product images. Perfect for sellers, researchers, and businesses managing large Amazon product catalogs.",
    technologies: [
      "Google Apps Script",
      "Chrome Extension API",
      "OCR API",
      "Web Scraping",
      "Google Sheets API",
      "Amazon Product API",
      "JavaScript",
      "Image Processing",
      "Manifest V3",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/pasindupiumal03/Amazon-Product-Scrapes-Extension",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "/amazon-product-scraper.mp4",
    category: "google apps script" as TabType,
  },

  {
    title: "Solana Tracker",
    href: "/projects/solana-tracker",
    dates: "Aug 2025 - Sep 2025",
    active: true,
    description:
      "Solana Tracker is a modern Web3 portfolio dashboard for tracking Solana wallets in real time. It features Phantom wallet integration, live token balances, trending assets, and detailed wallet analytics, all wrapped in a sleek glassmorphic UI with dark/light theme support and responsive design.",
    technologies: [
      "Next.js",
      "Typescript",
      "shadcn/ui",
      "Solana Web3.js",
      "Solana RPC",
      "APIs",
      "TailwindCSS",
    ],
    links: [
      {
        type: "Website",
        href: "https://solan-nine.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "source",
        href: "https://github.com/pasindupiumal03/Solana_User_Dashboard",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "solanatracker.mp4",
    category: "websites" as TabType,
  },
  {
    title: "Flowkey",
    href: "/projects/flowkey",
    dates: "Sep 2025 - Oct 2025",
    active: true,
    description:
      "FlowKey is a modern browser extension and web platform for stylish bookmark and workspace management. It features Phantom wallet authentication, custom layouts, privacy-first local storage, and a glassmorphic UI with interactive animations, delivering a seamless Web3-enhanced browsing experience.",
    technologies: ["React.js", "Javascript", "Lucide React", "TailwindCSS"],
    links: [
      {
        type: "Website",
        href: "https://flowkey-two.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "source",
        href: "https://github.com/pasindupiumal03/Flowkey_Homepage",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "flowkeyhomepage.mp4",
    category: "websites" as TabType,
  },
  {
    title: "Polybiuos",
    href: "/projects/polybiuos",
    dates: "Jun 2025 - Jul 2025",
    active: true,
    description:
      "POLYBIUOS is an AI-powered developer platform for intelligent code generation, analysis, and media transformation. Featuring a cyberpunk, terminal-inspired UI, it leverages modern web technologies and OpenAI integration to automate workflows and enhance developer productivity across devices.",
    technologies: [
      "Next.js",
      "Typescript",
      "Radix UI",
      "TailwindCSS",
      "Framer Motion",
    ],
    links: [
      {
        type: "Website",
        href: "https://eigencode.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "source",
        href: "https://github.com/pasindupiumal03/Polybiuos_Project",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "polybiuos.mp4",
    category: "websites" as TabType,
  },
  {
    title: "Alphyre",
    href: "/projects/alphyre",
    dates: "Nov 2025 - Dec 2025",
    active: true,
    description:
      "Alphyre is an advanced crypto trading intelligence platform that delivers real-time market analytics, multi-chain token tracking, AI-powered insights, and wallet analytics. Built with modern Web3 infrastructure, it features Solana-based USDC micro-payments via the X402 protocol, Phantom wallet integration, and a high-performance dashboard designed for serious crypto traders and researchers.",
    technologies: [
      "Next.js",
      "Typescript",
      "shadcn/ui",
      "TailwindCSS",
      "Charts",
      "Solana Web3.js",
      "APIs",
      "x402 Protocol",
      "USDC Payments",
    ],
    links: [
      {
        type: "Website",
        href: "https://aphyre.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "source",
        href: "https://github.com/pasindupiumal03/Alphyre_Dashboard",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "Alphyre-2.mp4",
    category: "websites" as TabType,
  },

  {
    title: "Fraktom",
    href: "/projects/fraktom",
    dates: "May 2025 - Jul 2025",
    active: true,
    description:
      "A modern, educational trading simulation platform inspired by pump.fun. Fraktom lets users practice trading without risking real money, climb leaderboards, and learn trading concepts interactively.",
    technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
    links: [
      {
        type: "Website",
        href: "https://fraktom.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/pasindupiumal03/Fraktom_Homepage",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "/fraktom.mp4",
    category: "websites" as TabType,
  },
  {
    title: "AWS WAF & Amazon Captcha Auto-Recovery: Shadow DOM Smart Reloader",
    href: "/projects/amazon-shift-sniper",
    dates: "Mar 2026 - Apr 2026",
    active: true,
    description:
      "Stop losing leads to stuck captchas. I engineered \"NopeCHA Smart Reload,\" a specialized Manifest V3 extension that solves the \"infinite loop\" problem in automated browsing. Unlike standard scripts, this tool utilizes a Deep Scan Architecture to penetrate Shadow DOMs—detecting failure signals in AWS WAF and Amazon Captchas that other tools miss.\n\nBuilt with a high-performance React/Tailwind frontend, it features intelligent recovery logic that monitors solver health in real-time. When a failure is detected, it triggers a surgical 3-second recovery countdown and page refresh.",
    technologies: [
      "React.js",
      "TailwindCSS",
      "Manifest V3",
      "Chrome Extension API",
      "Shadow DOM",
      "AWS WAF",
      "Automation",
    ],
    links: [],
    image: "Automated Pro (1).png",
    video: "",
    category: "extensions" as TabType,
  },
  {
    title: "Amazon Real-Time Slot Tracker: High-Fidelity Data Extraction Tool",
    href: "/projects/amazon-shift-sniper",
    dates: "Apr 2026 - May 2026",
    active: true,
    description:
      "Unlock hidden workforce insights with real-time data synchronization. I developed a production-ready Chrome Extension (Manifest V3) that extracts deep-level job slot metrics from Amazon's hiring portals. To overcome the industry-standard \"401 Unauthorized\" and CORS barriers, I implemented a \"Main World\" script injection technique, allowing the extension to securely leverage the site’s own session context.\n\nThe tool features a high-performance React-based glassmorphic dashboard that tracks 11+ critical metrics, including labor demand, filled positions, and batch availability.",
    technologies: [
      "React.js",
      "TailwindCSS",
      "Manifest V3",
      "Chrome Extension API",
      "Main World Injection",
      "CORS Bypass",
      "Session Context",
    ],
    links: [],
    image: "Automated Pro (2).png",
    video: "",
    category: "extensions" as TabType,
  },
  {
    title: "Amazon Portal Session Recovery: URL Auto-Repair Chrome Extension",
    href: "/projects/amazon-shift-sniper",
    dates: "May 2026 - Jun 2026",
    active: true,
    description:
      "Eliminate candidate drop-off caused by broken web sessions. I engineered an intelligent URL Auto-Repair Chrome Extension (Manifest V3) designed to detect and programmatically fix \"Timeout,\" \"404,\" and \"No Shift Available\" loops on Amazon’s recruitment platforms.\n\nBuilt with React and Tailwind CSS, the extension uses the Browser History API to preserve query parameters while executing surgical redirects. To ensure high reliability, I designed a custom 1-minute cooldown retry loop and a smart DOM-polling mechanism that checks for specific error banners before modifying states—preventing refresh.",
    technologies: [
      "React.js",
      "TailwindCSS",
      "Manifest V3",
      "Chrome Extension API",
      "Browser History API",
      "DOM Polling",
      "Session Recovery",
    ],
    links: [],
    image: "Amazon Redirect Amazon Portal Session Recovery URL Auto-Repair Chrome Extension.png",
    video: "",
    category: "extensions" as TabType,
  },
  {
    title: "Amazon Shift Availability Monitor: Real-Time Web Scraping Engine",
    href: "/projects/amazon-shift-sniper",
    dates: "Jun 2026 - Jul 2026",
    active: true,
    description:
      "Never miss a high-demand slot to rate-limiting. I developed a high-frequency availability monitoring Chrome Extension (Manifest V3) that tracks real-time shift openings on Amazon hiring platforms.\n\nBuilt with a React interface and a resilient background service worker, the extension polls target pages every second for specific \"No Headcount\" errors without triggering anti-bot flags. Crucially, I engineered a 403 CloudFront Recovery system that automatically pauses execution for 60 seconds upon detecting an IP block, ensuring continuous, long-term operation without detection.",
    technologies: [
      "React.js",
      "TailwindCSS",
      "Manifest V3",
      "Chrome Extension API",
      "Service Worker",
      "Web Scraping",
      "IP Cooldown",
    ],
    links: [],
    image: "Amazon Redirect Amazon Portal Session Recovery URL Auto-Repair Chrome Extension (1).png",
    video: "",
    category: "extensions" as TabType,
  },
  {
    title: "Amazon Hiring Automation: Custom Chrome Extension with OTP & AI-Sync",
    href: "/projects/amazon-shift-sniper",
    dates: "Jul 2026 - Aug 2026",
    active: true,
    description:
      "Eliminate login friction with advanced, human-like browser automation. I engineered \"AutomatePro,\" a Manifest V3 Chrome extension designed to bypass complex authentication bottlenecks on Amazon’s hiring portal. This isn't a simple script; it’s a robust automation engine featuring Human Emulation (simulated typing/clicks) and Smart OTP Retrieval via API bridges or direct Gmail DOM scanning.\n\nTo ensure reliability, I implemented a CAPTCHA Safety Lockdown and a persistent Service Worker keepalive.",
    technologies: [
      "Manifest V3",
      "Chrome Extension API",
      "Human Emulation",
      "OTP API",
      "DOM Scanning",
      "CAPTCHA Lockdown",
      "Service Worker Keepalive",
    ],
    links: [],
    image: "Automated Pro.png",
    video: "",
    category: "extensions" as TabType,
  },
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Combine DATA.projects with additional projects and sort by date (latest first)
  const allProjects = [
    ...DATA.projects.map((p) => ({
      ...p,
      category: getProjectCategory(p.title),
      video: (p as any).video || "",
      links: (p as any).links || [],
    })),
    ...ADDITIONAL_PROJECTS.map((p) => ({
      ...p,
      video: p.video || "",
      links: p.links || [],
    })),
  ].sort((a, b) => {
    if (a.title.includes("FUT Snipe Bot")) return -1;
    if (b.title.includes("FUT Snipe Bot")) return 1;
    if (a.title.includes("Amazon Shift Sniper")) return -1;
    if (b.title.includes("Amazon Shift Sniper")) return 1;
    const dateA = parseProjectDate(a.dates);
    const dateB = parseProjectDate(b.dates);
    return dateB.getTime() - dateA.getTime();
  });

  const filteredProjects = allProjects.filter((project) => {
    const matchesTab = activeTab === "all" || project.category === activeTab;
    if (!matchesTab) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.technologies.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <section id="projects">
      <div className="max-w-2xl mx-auto py-12 pb-24 sm:py-20 px-6">
        <div className="flex min-h-0 flex-col gap-y-8">
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
              <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                <span className="text-background text-sm font-medium">
                  Complete Project Portfolio
                </span>
              </div>
              <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
            </div>
            <div className="flex flex-col gap-y-2 items-center justify-center text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Case Studies & Technical Proof
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-[540px] text-pretty">
                23+ production browser extensions, full-stack SaaS platforms, Web3 tools, and Google Apps Script enterprise workflows.
              </p>
            </div>

            {/* UPWORK HIRE CALLOUT RIBBON */}
            <div className="w-full p-3.5 rounded-2xl border-2 border-primary/30 bg-primary/5 dark:bg-primary/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-left my-1">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-foreground">Need a custom extension or automation bot?</span>
                <p className="text-[11px] text-muted-foreground">Available for $20/hr tracked work or fixed-milestone deliverables.</p>
              </div>
              <a
                href="https://www.upwork.com/freelancers/pasindupiumal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-xs shrink-0 hover:opacity-90 transition-opacity"
              >
                Hire on Upwork ($20/hr) ↗
              </a>
            </div>

            {/* Search Input */}
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Search 23 projects by keyword (e.g. AI, Manifest V3, WebSockets, Scraping, Solana)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pl-4 pr-10 text-xs sm:text-sm rounded-xl border bg-background/60 backdrop-blur-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs font-bold p-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-1.5 border border-border rounded-xl p-1 bg-muted/40 w-full justify-center">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "all"
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All ({allProjects.length})
              </button>
              <button
                onClick={() => setActiveTab("extensions")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "extensions"
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Chrome Extensions ({allProjects.filter(p => p.category === "extensions").length})
              </button>
              <button
                onClick={() => setActiveTab("websites")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "websites"
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                SaaS & Web3 ({allProjects.filter(p => p.category === "websites").length})
              </button>
              <button
                onClick={() => setActiveTab("google apps script")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "google apps script"
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Google Apps Script ({allProjects.filter(p => p.category === "google apps script").length})
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
            <span>Showing {filteredProjects.length} of {allProjects.length} projects</span>
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="text-primary hover:underline font-medium">
                Clear filter
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 max-w-[800px] mx-auto w-full text-left">
            {filteredProjects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 4 + id * 0.03}
                className="h-full"
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="p-8 text-center border rounded-2xl bg-muted/20 space-y-2">
              <p className="text-sm font-semibold text-foreground">No projects found matching &ldquo;{searchQuery}&rdquo;</p>
              <p className="text-xs text-muted-foreground">Try searching for a different keyword or reset filters.</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveTab("all"); }}
                className="mt-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Helper function to categorize existing projects
function getProjectCategory(title: string): TabType {
  const extensions = [
    "OneLearning",
    "Censor AI",
    "WebMind",
    "Amazon Schedule Monitor",
    "FlowKey - Bookmark & Layout Manager",
    "FullGrab - Screenshot & Full Page Capture",
    "Amazon Shift Sniper: High-Frequency Automation Chrome Extension",
    "Full SaaS Build | SuperDev Pro Chrome Extension Platform",
    "SuperX - Chrome Extension and Full-Stack SaaS Platform"
  ];

  if (title === "Fraktom") {
    return "websites";
  } else if (extensions.includes(title)) {
    return "extensions";
  }
  return "google apps script";
}

// Helper function to parse project date strings for sorting
function parseProjectDate(dateString: string): Date {
  if (!dateString) return new Date(0);
  
  // Handle "Present"
  if (dateString.toLowerCase().includes("present")) {
    return new Date();
  }

  // Split by common separators: "-", "–" (en dash), "—" (em dash)
  const parts = dateString.split(/[-–—]/);
  
  // Take the end date if it's a range, otherwise take the whole string
  const lastPart = (parts.length > 1 ? parts[parts.length - 1] : parts[0]).trim();
  
  const date = new Date(lastPart);
  
  if (isNaN(date.getTime())) {
    // Fallback for year-only formats like "2024"
    const yearMatch = lastPart.match(/\d{4}/);
    if (yearMatch) {
      return new Date(parseInt(yearMatch[0]), 0, 1);
    }
    return new Date(0);
  }
  
  return date;
}
