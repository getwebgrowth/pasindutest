import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { ProjectCard } from "@/components/project-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cpu,
  Database,
  ExternalLink,
  Layers,
  Lock,
  Network,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  title: "Hire Expert Freelance Chrome Extension Developer (Manifest V3) | Pasindu Piumal",
  description:
    "Hire Pasindu Piumal — Top Rated Chrome Extension Developer with 175+ shipped projects, $1M+ software revenue generated, and 100k+ active users. Specializing in Manifest V3, AI overlays, ATS auto-apply, browser automation, and SaaS monetization. $20/hr or fixed milestones.",
  keywords: [
    "Hire Chrome Extension Developer",
    "Freelance Chrome Extension Developer",
    "Manifest V3 Developer for hire",
    "Custom Chrome Extension development",
    "Browser automation developer",
    "Upwork Chrome Extension Developer",
    "Chrome extension freelancer",
    "AI Chrome Extension developer",
    "Manifest V3 migration expert",
    "Web Scraping Chrome Extension",
    "Chrome Web Store approval help",
    "Pasindu Piumal",
  ],
  alternates: {
    canonical: "/chrome-extension-developer-for-hire",
  },
  openGraph: {
    title: "Hire Expert Freelance Chrome Extension Developer (Manifest V3) | Pasindu Piumal",
    description:
      "Hire Pasindu Piumal — Top Rated Chrome Extension Developer with 175+ shipped projects, $1M+ software revenue generated, and 100k+ active users. Manifest V3, AI overlays, automation & SaaS monetization.",
    url: `${DATA.url}/chrome-extension-developer-for-hire`,
    siteName: `${DATA.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Hire Expert Freelance Chrome Extension Developer (Manifest V3) | Pasindu Piumal",
    description:
      "Hire Pasindu Piumal — Top Rated Chrome Extension Developer with 175+ shipped projects, $1M+ revenue generated, and 100k+ active users. Manifest V3, AI overlays, automation & SaaS monetization.",
    card: "summary_large_image",
    creator: "@pasindupiumal03",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${DATA.url}/chrome-extension-developer-for-hire#service`,
      name: "Pasindu Piumal - Freelance Chrome Extension Development Services",
      url: `${DATA.url}/chrome-extension-developer-for-hire`,
      image: `${DATA.url}${DATA.avatarUrl}`,
      description:
        "Professional Chrome Extension development specializing in Manifest V3, AI overlays, browser automation, web scraping, and full-stack SaaS monetization with 175+ shipped projects.",
      priceRange: "$$ - $20/hr or Fixed Milestone",
      telephone: DATA.contact.tel,
      email: DATA.contact.email,
      provider: {
        "@type": "Person",
        name: DATA.name,
        jobTitle: "Freelance Chrome Extension Developer",
        url: DATA.url,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "175",
        bestRating: "5.0",
        worstRating: "1.0",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Chrome Extension Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Manifest V3 Chrome Extension Development",
              description: "Custom MV3 browser extensions with modern background service workers and content scripts.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Browser Copilots & Floating Overlays",
              description: "Integrate OpenAI, Gemini Pro, and RAG into draggable browser overlays.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Browser Automation & Web Scraping",
              description: "High-frequency slot monitoring, ATS auto-apply, and dynamic Shadow DOM data extraction.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Chrome Extension Monetization & SaaS",
              description: "Stripe and ExtensionPay in-app subscription paywalls, license management, and backend sync.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${DATA.url}/chrome-extension-developer-for-hire#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How fast can you build and deliver a custom Chrome extension?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Initial prototypes and MVPs are typically delivered within 3 to 7 days depending on scope. Complex full-stack extensions with multi-platform automations or AI integrations generally take 2 to 4 weeks, structured in transparent milestones.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle Chrome Web Store submission and approval?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I guide you through store packaging, permission justifications, privacy policy compliance, and review feedback to ensure smooth Chrome Web Store and Edge Add-ons approval.",
          },
        },
        {
          "@type": "Question",
          name: "How do you handle Manifest V3 service worker lifecycle and rate limits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Manifest V3 terminates idle service workers after 30 seconds. I engineer resilient state persistence via chrome.storage.local/session, Chrome Offscreen API keep-alives for continuous processing, and declarativeNetRequest rules for high-speed network interception.",
          },
        },
        {
          "@type": "Question",
          name: "Can you fix broken extensions or complete projects where past developers failed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many of my clients come to me after past developers failed to get complex automations or ATS integrations working. For example, on the RoboApply platform, 20+ developers failed to build reliable multi-ATS autofill; I engineered the working Ashby integration within one week and then rolled out the remaining platforms.",
          },
        },
        {
          "@type": "Question",
          name: "What are your hiring and pricing models?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I offer both hourly contracts ($20/hr on Upwork with full time tracking) and fixed-price milestone projects with defined deliverables and platform-by-platform testing.",
          },
        },
      ],
    },
  ],
};

const SERVICES = [
  {
    icon: Sparkles,
    title: "AI Browser Copilots & Floating Overlays",
    badge: "OpenAI • Gemini Pro • RAG",
    description:
      "Context-aware AI assistants embedded directly into the browser. Floating draggable overlays, highlighted DOM text summarizers, prompt injectors, and real-time LLM chat that reads active page context without intrusive layout shifts.",
    projects: "Featured in: Tech Copilot (Chrome Web Store), AI Apply Helper, Positional",
  },
  {
    icon: Zap,
    title: "High-Frequency Sniping & Slot Automation",
    badge: "Sub-Second • Anti-Bot • CSRF",
    description:
      "Automated booking, monitoring, and auction engines. Dual-layer Isolated & Main World execution to discover dynamic session tokens, bypass rigid CSRF headers, and auto-cooldown through 403 / CloudFront rate-limiting blocks.",
    projects: "Featured in: Amazon Shift Sniper, FUT Snipe Bot (100k+ users), Shift Monitor",
  },
  {
    icon: Layers,
    title: "Multi-Platform ATS & Form Auto-Apply",
    badge: "Workday • Greenhouse • Ashby",
    description:
      "Intelligent multi-step form filling across major ATS platforms (Greenhouse, Workable, Ashby, Workday, Oracle, Lever). Handles multi-page application flows, dynamic dropdowns, resume file uploads, and CAPTCHA pause checkpoints.",
    projects: "Featured in: RoboApply (100+ job boards), Sociax Auto-Apply Platform",
  },
  {
    icon: Database,
    title: "Web Scraping & Shadow DOM Extraction",
    badge: "Offscreen API • Sheets Sync",
    description:
      "Reliable client-side scraping that overcomes anti-bot challenges and nested Shadow DOMs. Leverages the Chrome Offscreen API for heavy parsing, exporting structured data directly into Google Sheets, Airtable, CSV, or custom APIs.",
    projects: "Featured in: No-Code Web Scraper, Walmart Scraper, LinkedIn Saved Posts",
  },
  {
    icon: Lock,
    title: "Extension SaaS Monetization & Licensing",
    badge: "Stripe • ExtensionPay • Webhooks",
    description:
      "Turn your Chrome extension into a monetized software product. In-app subscription paywalls, Stripe checkout, ExtensionPay integration, trial limits (e.g. 20 free actions/month), user licensing, and cloud auth synchronization.",
    projects: "Featured in: SuperDev Pro (6,000+ users), FullGrab, SuperX, Tech Copilot",
  },
  {
    icon: RefreshCw,
    title: "Manifest V2 to Manifest V3 Migration",
    badge: "Service Workers • declarativeNetRequest",
    description:
      "Future-proof legacy extensions before Google removes MV2 support. Migrate background pages to ephemeral service workers, replace blocking webRequest with declarativeNetRequest, and resolve Content Security Policy (CSP) roadblocks.",
    projects: "Over 50+ legacy extensions successfully migrated & approved on Chrome Web Store",
  },
];



const ARCHITECTURE_PILLARS = [
  {
    icon: Terminal,
    title: "Isolated vs. Main World Script Injection",
    description:
      "Bypass restrictive Content Security Policies (CSP) and CORS walls by selectively injecting scripts into the webpage's native JavaScript context to inherit live authentication cookies and session tokens.",
  },
  {
    icon: Network,
    title: "Shadow DOM & MutationObserver Navigation",
    description:
      "Interact with modern single-page apps (React, Angular, Web Components) without brittle timeouts. Efficiently observe deep Shadow DOM trees and DOM mutations with minimal CPU footprint.",
  },
  {
    icon: ShieldCheck,
    title: "CloudFront 403 & WAF Auto-Cooldown Bridge",
    description:
      "Prevent IP blacklisting and rate-limit bans during high-frequency polling. Self-healing pause-and-resume logic with randomized jitter intervals ensures uninterrupted 24/7 background operation.",
  },
  {
    icon: Cpu,
    title: "Chrome Offscreen API Keep-Alive",
    description:
      "Solve the 30-second Manifest V3 service worker lifecycle limitation by spinning up hidden offscreen documents for heavy DOM parsing, audio processing, canvas stitching, and persistent tasks.",
  },
  {
    icon: Bot,
    title: "Multi-Model AI Integration (OpenAI & Gemini Pro)",
    description:
      "Embed streaming LLM completions and contextual RAG directly into client-side overlays with secure token-bucket rate limiting and zero-latency UI updates.",
  },
  {
    icon: Lock,
    title: "In-App Monetization & Stripe / ExtensionPay",
    description:
      "Deploy robust licensing models: freemium monthly caps, one-time lifetime keys, or recurring Stripe/ExtensionPay subscriptions with instant feature unlocking and tamper-resistant verification.",
  },
];

const COMPARISON_POINTS = [
  {
    criteria: "Manifest V3 Mastery",
    others: "Struggles with 30s service worker drops, CSP blocks, and store rejections",
    pasindu: "Deep architecture with Offscreen API, chrome.storage hydration, and zero-drop workers",
  },
  {
    criteria: "Complex DOM & SPAs",
    others: "Relies on brittle setTimeout hacks that break when page layouts shift",
    pasindu: "Event-driven MutationObservers, Shadow DOM traversal, and dual-world injection",
  },
  {
    criteria: "Anti-Bot & Token Handling",
    others: "Gets blocked by Cloudflare, CloudFront 403s, and CSRF token mismatches",
    pasindu: "Session token discovery, randomized jitter intervals, and self-healing cooldown bridges",
  },
  {
    criteria: "Chrome Web Store Approval",
    others: "Vague permissions cause repeat review rejections and account warnings",
    pasindu: "100% compliant packaging with minimal permissions and clear justifications",
  },
  {
    criteria: "Pricing & Transparency",
    others: "Unpredictable agency hourly rates ($80-$150/hr) with junior handoffs",
    pasindu: "Direct senior engineer at $20/hr with transparent Upwork work diary or fixed escrow",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Technical Discovery & Feasibility",
    time: "Day 1",
    description:
      "We review your target website, API endpoints, DOM structures, and security hurdles (CSP, CORS, anti-bot). I provide a clear architecture blueprint and milestone breakdown.",
  },
  {
    step: "02",
    title: "Working Prototype & Core Engine",
    time: "Days 2–5",
    description:
      "I engineer the core extension engine (content script injection, background service worker, AI/API integration) and provide a testable ZIP build for your feedback.",
  },
  {
    step: "03",
    title: "UI Polish & Edge-Case Hardening",
    time: "Days 6–10",
    description:
      "Implementation of modern TailwindCSS / React HUD overlays, dark mode support, rate-limit cooldown bridges, and payment/licensing paywalls.",
  },
  {
    step: "04",
    title: "Store Submission & Production Launch",
    time: "Final Phase",
    description:
      "Preparation of icons, screenshots, privacy policy justifications, and Chrome Web Store / Edge Add-ons submission assistance for smooth approval.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Working with Pasindu has been one of the best decisions I've made for my startup. Tech AI-Copilot has gone from an idea to a polished product because of his technical ability, attention to detail, and willingness to tackle difficult problems. He's reliable, communicates clearly, and always works with me to find the best solution rather than the easiest one.",
    author: "Founder, Tech AI-Copilot",
    context: "Automotive AI Chrome Extension • 6 Milestones Paid ($1,875+)",
    rating: 5,
  },
  {
    quote:
      "Excellent work! Professional, responsive, and delivered high-quality results on time. Great communication throughout the project. Highly recommended.",
    author: "Anil N., Founder at Sociax",
    context: "AI Job Application Assistant & Auto-Apply System",
    rating: 5,
  },
  {
    quote:
      "Excellent understanding of Chrome extension development... successfully delivered a complex browser automation project where past attempts had stalled. Great engineer.",
    author: "Upwork Enterprise Client",
    context: "Real-Time WebSocket Sync & API Interception",
    rating: 5,
  },
  {
    quote:
      "Pasindu is a top-tier developer who truly understands browser architecture. He delivered a fast, reliable extension that our users love. Will definitely hire again.",
    author: "SaaS Founder",
    context: "Chrome Web Store Developer Productivity Tool",
    rating: 5,
  },
];

const FAQS = [
  {
    q: "How fast can you build and deliver a custom Chrome extension?",
    a: "Simple extensions and MVPs are typically delivered within 3 to 7 days. Complex full-stack extensions (with custom backend APIs, AI models, multi-platform automations, or payment systems) usually take 2 to 4 weeks. Every project is structured with clear milestones so you can test early and iterate fast.",
  },
  {
    q: "Do you help with Chrome Web Store submission and approval?",
    a: "Yes, 100%. I handle extension bundling, manifest permission justifications, privacy policy requirements, and Single Purpose Policy compliance to ensure your extension gets approved on the Chrome Web Store and Edge Add-ons with zero compliance headaches.",
  },
  {
    q: "How do you handle Manifest V3 service worker lifecycle limitations?",
    a: "Manifest V3 automatically terminates idle background service workers after 30 seconds. I engineer robust solutions using chrome.storage state persistence, alarms API schedules, Chrome Offscreen API keep-alives, and declarativeNetRequest rules to ensure continuous, rock-solid operation.",
  },
  {
    q: "Can the extension connect to my custom database, backend API, or AI models?",
    a: "Absolutely. I regularly integrate Chrome extensions with REST and GraphQL APIs, WebSockets, Supabase, Firebase, Node.js/Express, MongoDB, PostgreSQL, OpenAI, and Gemini Pro endpoints with secure authorization token management.",
  },
  {
    q: "What if other developers tried and couldn't get the automation working?",
    a: "Many of my best projects come from clients whose previous developers hit a wall with modern SPAs, Shadow DOMs, CSRF headers, or anti-bot protections. For instance, on RoboApply, 20+ developers failed to get multi-ATS autofill working over a 12-month period — I built the working Ashby integration within one week and then rolled out the rest of the platforms.",
  },
  {
    q: "How do we work together (hourly vs. fixed price)?",
    a: "I work through Upwork (Top Rated, 100% Job Success Score at $20/hr with transparent time tracking) or via fixed-price milestone contracts where each feature is verified before milestone release.",
  },
];

export default function ChromeExtensionDeveloperForHirePage() {
  return (
    <main className="relative min-h-screen pb-24 overflow-hidden">
      {/* Schema.org Structured Data for Rich Search Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Ambient background glow (CSS only - 0% CPU overhead) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime-500/5 dark:bg-lime-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[300px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 pt-10 sm:pt-14 space-y-14 sm:space-y-16">
        {/* HERO SECTION */}
        <section id="hero" className="text-center space-y-6">
          {/* Creator Profile Card (Avatar with glowing ring, verified badge, bio, pill & social buttons) */}
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col items-center justify-center space-y-3.5">
              {/* Avatar with Lime Green Ring & Online Status Dot */}
              <div className="relative inline-block group">
                <div className="relative size-20 sm:size-24 rounded-full p-0.5 ring-3 ring-lime-400 dark:ring-lime-400 shadow-[0_0_25px_rgba(163,230,53,0.35)] transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={DATA.avatarUrl}
                    alt={DATA.name}
                    className="size-full rounded-full object-cover bg-muted"
                  />
                </div>
                {/* Active Online Indicator */}
                <div
                  className="absolute bottom-0.5 right-0.5 size-5 rounded-full bg-lime-500 ring-2 ring-background flex items-center justify-center shadow-md"
                  title="Available & Online for work"
                >
                  <span className="size-2 rounded-full bg-background animate-ping opacity-75" />
                  <span className="absolute size-2 rounded-full bg-lime-200" />
                </div>
              </div>

              {/* Name + Verified Check Badge */}
              <div className="space-y-1 text-center">
                <div className="inline-flex items-center justify-center gap-1.5 text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  <span>{DATA.name}</span>
                  <span
                    className="inline-flex items-center justify-center text-lime-500 shrink-0"
                    title="Top Rated Verified Developer"
                  >
                    <svg
                      className="size-5 sm:size-5.5 fill-current"
                      viewBox="0 0 24 24"
                      aria-label="Verified Developer"
                    >
                      <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.33 2.33 4.99-4.99 1.42 1.41-6.41 6.41z" />
                    </svg>
                  </span>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Software Engineer & Top-Rated Chrome Extension Developer. Building high-performance Manifest V3 tools, AI copilots & automation.
                </p>
              </div>

              {/* Credibility Pill Badge linking to EliteFutBot */}
              <Link
                href="https://elitefutbot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-lime-600/30 bg-lime-500/10 hover:bg-lime-500/20 hover:border-lime-500/50 backdrop-blur-md text-[11px] sm:text-xs font-semibold text-lime-800 dark:text-lime-300 shadow-xs transition-all group"
              >
                <span className="size-1.5 rounded-full bg-lime-500 animate-pulse" />
                <span>
                  Built <span className="underline underline-offset-2 font-bold group-hover:text-lime-400">FUT Snipe Bot</span> Chrome Extension: <strong>100k+ Peak Users · $1M+ Revenue Generated</strong>
                </span>
                <ExternalLink className="size-3 opacity-70 group-hover:opacity-100 transition-opacity" />
              </Link>

              {/* Platform Social Icon Buttons */}
              <div className="flex items-center justify-center gap-1.5 pt-0.5">
                <Link
                  href="https://www.upwork.com/freelancers/pasindupiumal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-8 rounded-lg border bg-background/60 hover:bg-lime-500 hover:text-black hover:border-lime-500 transition-all flex items-center justify-center shadow-xs"
                  aria-label="Upwork Profile"
                >
                  <Icons.upwork className="size-3.5 fill-current" />
                </Link>
                <Link
                  href="https://github.com/pasindupiumal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-8 rounded-lg border bg-background/60 hover:bg-foreground hover:text-background transition-all flex items-center justify-center shadow-xs"
                  aria-label="GitHub Profile"
                >
                  <Icons.github className="size-3.5 fill-current" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/pasindupiumal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-8 rounded-lg border bg-background/60 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all flex items-center justify-center shadow-xs"
                  aria-label="LinkedIn Profile"
                >
                  <Icons.linkedin className="size-3.5 fill-current" />
                </Link>
                <Link
                  href="https://x.com/pasindupiumal03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-8 rounded-lg border bg-background/60 hover:bg-foreground hover:text-background transition-all flex items-center justify-center shadow-xs"
                  aria-label="X (Twitter) Profile"
                >
                  <Icons.x className="size-3 fill-current" />
                </Link>
                <Link
                  href="https://www.fiverr.com/pasinduxyz/create-develop-build-a-custom-google-chrome-extension-for-automation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-8 rounded-lg border bg-background/60 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all flex items-center justify-center shadow-xs"
                  aria-label="Fiverr Gig"
                >
                  <Icons.fiverr className="size-3.5 fill-current" />
                </Link>
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="size-8 rounded-lg border bg-background/60 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center shadow-xs"
                  aria-label="Send Email"
                >
                  <Icons.email className="size-3.5" />
                </Link>
              </div>
            </div>
          </BlurFade>

          {/* Value Prop Headline & Subtitle */}
          <div className="space-y-3 pt-2 max-w-xl mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.2] text-balance">
                Hire Expert Freelance <br className="hidden sm:inline" />
                <span className="bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Chrome Extension Developer
                </span> <br className="hidden sm:inline" />
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground/90">(Manifest V3)</span>
              </h1>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <p className="text-muted-foreground text-xs sm:text-sm max-w-lg mx-auto leading-relaxed text-pretty">
                Need a production-ready browser extension built from scratch, scaled to thousands of users, or rescued from
                complex bugs? I engineer high-performance <strong>Manifest V3 Chrome extensions</strong>, AI floating copilots,
                multi-ATS form automations, and monetized SaaS products.
              </p>
            </BlurFade>
          </div>

          {/* Social Proof Stats Bar */}
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl mx-auto pt-1">
              <div className="p-3 rounded-xl border bg-background/50 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-bold text-primary">175+</div>
                <div className="text-[11px] text-muted-foreground font-medium">Real-World Projects</div>
              </div>
              <div className="p-3 rounded-xl border bg-background/50 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-bold text-amber-600 dark:text-amber-400">100k+</div>
                <div className="text-[11px] text-muted-foreground font-medium">Peak Users</div>
              </div>
              <div className="p-3 rounded-xl border bg-background/50 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-bold text-emerald-700 dark:text-emerald-400">$1M+</div>
                <div className="text-[11px] text-muted-foreground font-medium">Revenue Generated</div>
              </div>
              <div className="p-3 rounded-xl border bg-background/50 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-bold text-primary">$20/hr</div>
                <div className="text-[11px] text-muted-foreground font-medium">Or Fixed Milestone</div>
              </div>
            </div>
          </BlurFade>

          {/* Action CTAs */}
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-1">
              <Link
                href="https://www.upwork.com/freelancers/pasindupiumal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="rounded-lg h-9 px-5 text-xs font-bold shadow-md hover:scale-102 transition-all w-full sm:w-auto">
                  <Icons.upwork className="mr-1.5 size-4 fill-current" />
                  Hire on Upwork ($20/hr)
                  <ArrowRight className="ml-1.5 size-3.5" />
                </Button>
              </Link>
              <Link href="#contact-section">
                <Button variant="outline" size="sm" className="rounded-lg h-9 px-5 text-xs font-semibold w-full sm:w-auto">
                  Direct Inquiry
                </Button>
              </Link>
              <Link
                href="https://chromewebstore.google.com/detail/tech-copilot/iipllbfcpkhafndcobpljgkjhlhohkbl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="sm" className="rounded-lg h-9 px-4 text-xs font-medium text-muted-foreground hover:text-foreground w-full sm:w-auto">
                  <Icons.store className="mr-1.5 size-3.5" />
                  Web Store Proof
                </Button>
              </Link>
            </div>
          </BlurFade>
        </section>

        {/* WHY WORK WITH ME / WHY EXTENSIONS FAIL */}
        <section id="why-hire-me" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-primary/5 text-primary text-[11px] font-semibold">
              Production-Grade Engineering
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Why Most Extensions Stall — And How I Deliver
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-xs sm:text-sm leading-relaxed">
              Manifest V3 introduced strict lifecycles and CSP rules that cause fragile code to break in production.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 sm:p-5 rounded-xl border border-destructive/20 bg-destructive/5 space-y-3">
              <div className="flex items-center gap-1.5 text-red-700 dark:text-red-400 font-bold text-sm">
                <span>✕</span> Common Failure Points
              </div>
              <ul className="space-y-2 text-xs text-foreground/85 dark:text-muted-foreground">
                <li className="flex items-start gap-1.5">
                  <span className="text-destructive font-bold">•</span>
                  <span><strong>Service Worker Inactivity:</strong> MV3 kills background workers after 30s, losing timers and socket connections.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-destructive font-bold">•</span>
                  <span><strong>CSP & CORS Barriers:</strong> Cross-origin network calls get blocked by strict site security headers.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-destructive font-bold">•</span>
                  <span><strong>Brittle DOM Selectors:</strong> Dynamic React/Vue SPAs update without page reloads, breaking queries.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-destructive font-bold">•</span>
                  <span><strong>Store Rejections:</strong> Vague permission requests or single purpose mismatches cause submission rejections.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 sm:p-5 rounded-xl border border-primary/30 bg-primary/5 space-y-3">
              <div className="flex items-center gap-1.5 text-primary font-bold text-sm">
                <CheckCircle2 className="size-4" /> How I Build Resilient Systems
              </div>
              <ul className="space-y-2 text-xs text-foreground/85 dark:text-muted-foreground">
                <li className="flex items-start gap-1.5">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>State-Hydrated Architecture:</strong> Chrome Offscreen API keep-alives and persistent storage keep tasks live.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Dual-World Injection:</strong> Injects into Main and Isolated worlds to inherit valid session cookies and bypass CORS.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>MutationObservers:</strong> Event-driven DOM watching that reacts instantaneously to UI changes without CPU drain.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Store Approval Compliance:</strong> Minimal permissions and clean justifications for guaranteed store listing.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CORE SPECIALIZATIONS */}
        <section id="services" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-primary/5 text-primary text-[11px] font-semibold">
              Full Spectrum Capabilities
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Specialized Chrome Extension Services
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-xs sm:text-sm">
              From lightweight AI writing utilities to heavy full-stack commercial SaaS platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {SERVICES.map((svc, idx) => (
              <BlurFade key={svc.title} delay={BLUR_FADE_DELAY * (idx + 1)}>
                <div className="flex flex-col h-full p-4 sm:p-5 rounded-xl border bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-200 group">
                  <div className="size-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <svc.icon className="size-4.5" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="font-semibold text-sm leading-snug">{svc.title}</h3>
                    <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-foreground/90 font-medium border border-border/40">
                      {svc.badge}
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                      {svc.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-auto border-t text-[11px] text-muted-foreground font-medium">
                    {svc.projects}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* CURATED FLAGSHIP CASE STUDIES FROM MASTER PROJECTS */}
        <section id="case-studies" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-primary/5 text-primary text-[11px] font-semibold">
              Real Track Record
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Flagship Case Studies & Live Proof
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-xs sm:text-sm">
              Explore verified flagship Chrome extensions with live Chrome Web Store listings, active web platforms, and production architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[800px] mx-auto auto-rows-fr">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 2 + id * 0.04}
                className="h-full"
              >
                <ProjectCard
                  href={project.href || "/projects"}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={"video" in project ? (project as any).video : ""}
                  links={"links" in project ? (project as any).links : []}
                />
              </BlurFade>
            ))}
          </div>

          <div className="flex items-center justify-center pt-2">
            <Link href="/projects">
              <Button
                variant="outline"
                className="rounded-xl h-11 px-8 font-semibold shadow-xs hover:shadow-md transition-all group border-primary/20 hover:border-primary/50 text-xs sm:text-sm"
              >
                Explore All 23+ Projects & Deep Case Studies
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </section>

        {/* COMPARISON MATRIX ("WHY CHOOSE PASINDU") */}
        <section id="why-choose-me" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-primary/5 text-primary text-[11px] font-semibold">
              The Specialist Advantage
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Why Founders & Teams Choose Pasindu
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-xs sm:text-sm">
              How dedicated browser extension engineering compares to generalist freelance developers.
            </p>
          </div>

          <div className="border rounded-2xl overflow-hidden bg-background/50 backdrop-blur-md shadow-xs">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b bg-muted/60 text-foreground font-bold">
                    <th className="p-3 sm:p-4 text-xs font-bold uppercase tracking-wider">Feature / Requirement</th>
                    <th className="p-3 sm:p-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Typical Freelancers</th>
                    <th className="p-3 sm:p-4 text-xs font-bold uppercase tracking-wider text-primary">Pasindu Piumal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {COMPARISON_POINTS.map((item, idx) => (
                    <tr key={idx} className="hover:bg-muted/20 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-foreground align-top text-xs sm:text-sm">
                        {item.criteria}
                      </td>
                      <td className="p-3 sm:p-4 text-muted-foreground align-top text-xs leading-relaxed">
                        <span className="text-destructive font-bold mr-1">✕</span>
                        {item.others}
                      </td>
                      <td className="p-3 sm:p-4 text-foreground/90 font-medium align-top text-xs leading-relaxed bg-primary/5">
                        <span className="text-primary font-bold mr-1">✓</span>
                        {item.pasindu}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 4-STEP AGILE DELIVERY PROCESS */}
        <section id="process" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-primary/5 text-primary text-[11px] font-semibold">
              Predictable Delivery
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              4-Step Fast Turnaround Process
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-xs sm:text-sm">
              From initial architecture discovery to published Chrome Web Store listing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="p-4 sm:p-5 rounded-xl border bg-background/50 backdrop-blur-sm space-y-2 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">
                    STEP {item.step}
                  </span>
                  <span className="text-[11px] font-semibold text-foreground/80 dark:text-muted-foreground">
                    {item.time}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL ARCHITECTURE SECTION */}
        <section id="architecture" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-primary/5 text-primary text-[11px] font-semibold">
              Deep Technical Mastery
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Engineered for Production Resilience
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-xs sm:text-sm">
              Architectural principles and techniques used to deliver fast and unbreakable browser extensions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ARCHITECTURE_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="p-3.5 rounded-xl border bg-muted/20 hover:bg-muted/30 transition-colors space-y-2"
              >
                <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <pillar.icon className="size-4" />
                </div>
                <h3 className="font-semibold text-xs leading-snug">{pillar.title}</h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CLIENT TESTIMONIALS */}
        <section id="testimonials" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-primary/5 text-primary text-[11px] font-semibold">
              Client Endorsements
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              What Founders & Clients Say
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-xs sm:text-sm">
              Direct reviews from live client contracts on Upwork.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TESTIMONIALS.map((testimonial, idx) => (
              <BlurFade key={idx} delay={BLUR_FADE_DELAY * (idx + 1)}>
                <div className="flex flex-col justify-between h-full p-4 sm:p-5 rounded-xl border bg-background/50 backdrop-blur-sm space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/90 italic leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                  <div className="pt-2 border-t space-y-0.5">
                    <div className="font-bold text-xs">{testimonial.author}</div>
                    <div className="text-[11px] text-foreground/80 dark:text-muted-foreground font-medium">{testimonial.context}</div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* ENGAGEMENT & PRICING MODELS */}
        <section id="pricing" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-primary/5 text-primary text-[11px] font-semibold">
              Transparent & Flexible
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              How We Can Work Together
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-xs sm:text-sm">
              Choose the engagement structure that fits your project scope, budget, and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 sm:p-5 rounded-xl border bg-background/50 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-muted">Fixed-Price</span>
                <div className="text-lg font-bold">Milestones</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Best for defined MVPs, new extension builds, or multi-platform integrations.
                </p>
                <ul className="space-y-1.5 text-[11px] text-muted-foreground pt-1">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3 text-primary" /> Testable milestones
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3 text-primary" /> Pay upon approval
                  </li>
                </ul>
              </div>
              <Link href="#contact-section">
                <Button size="sm" variant="outline" className="w-full text-xs font-semibold rounded-lg h-8">Request Quote</Button>
              </Link>
            </div>

            <div className="p-4 sm:p-5 rounded-xl border-2 border-primary bg-primary/5 flex flex-col justify-between space-y-4 relative shadow-sm">
              <div className="absolute -top-2.5 right-4 bg-primary text-primary-foreground text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Popular
              </div>
              <div className="space-y-2.5">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary">Hourly</span>
                <div className="text-lg font-bold flex items-baseline gap-1">
                  $20 <span className="text-xs font-normal text-foreground/80 dark:text-muted-foreground">/ hr</span>
                </div>
                <p className="text-xs text-foreground/80 dark:text-muted-foreground leading-relaxed">
                  Ideal for agile development, maintenance, bug fixes, or dedicated engineering.
                </p>
                <ul className="space-y-1.5 text-[11px] text-foreground/80 dark:text-muted-foreground pt-1">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3 text-primary" /> Upwork Top Rated
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3 text-primary" /> Tracked work diary
                  </li>
                </ul>
              </div>
              <Link
                href="https://www.upwork.com/freelancers/pasindupiumal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="w-full text-xs font-bold rounded-lg h-8">
                  <Icons.upwork className="mr-1.5 size-3.5 fill-current" />
                  Hire ($20/hr)
                </Button>
              </Link>
            </div>

            <div className="p-4 sm:p-5 rounded-xl border bg-background/50 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-muted">Rescue</span>
                <div className="text-lg font-bold">Fast Fixes</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Urgent MV3 migration, store rejections, or unblocking stalled developer code.
                </p>
                <ul className="space-y-1.5 text-[11px] text-muted-foreground pt-1">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3 text-primary" /> Rapid code audit
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3 text-primary" /> MV3 lifecycle fixes
                  </li>
                </ul>
              </div>
              <Link href="#contact-section">
                <Button size="sm" variant="outline" className="w-full text-xs font-semibold rounded-lg h-8">Start Fix</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section id="faq" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-primary/5 text-primary text-[11px] font-semibold">
              Got Questions?
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Key details about hiring me for your Chrome extension project.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full border rounded-xl p-3 sm:p-4 bg-background/50 backdrop-blur-sm">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0">
                <AccordionTrigger className="text-left font-semibold text-xs sm:text-sm py-3 hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground leading-relaxed pb-3">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CONTACT / HIRE SECTION */}
        <section id="contact-section" className="space-y-6 pt-2">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-primary/5 text-primary text-[11px] font-semibold">
              Let&apos;s Build It
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-xs sm:text-sm">
              Send your project requirements or workflow idea for an honest technical assessment, timeline, and quote.
            </p>
          </div>

          <div className="p-5 sm:p-8 rounded-2xl border bg-background/80 backdrop-blur-xl shadow-xl">
            <ContactForm />
          </div>

          {/* Quick Direct Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-muted-foreground pt-2">
            <span className="font-semibold text-foreground">Direct outreach:</span>
            <a
              href={`mailto:${DATA.contact.email}`}
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              {DATA.contact.email}
            </a>
            <span>•</span>
            <a
              href="https://www.upwork.com/freelancers/pasindupiumal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              Upwork
            </a>
            <span>•</span>
            <a
              href="https://www.fiverr.com/pasinduxyz/create-develop-build-a-custom-google-chrome-extension-for-automation"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              Fiverr
            </a>
            <span>•</span>
            <a
              href="https://github.com/pasindupiumal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
