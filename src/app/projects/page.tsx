"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { useState, useMemo } from "react";
import { Icons } from "@/components/icons";
import { Star, CheckCircle, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";
import { allPosts } from "content-collections";

const BLUR_FADE_DELAY = 0.04;

type TabType = "all" | "extensions" | "websites" | "google apps script" | "fiverr";

type FiverrSubFilter = "all" | "ai" | "extensions" | "scraping" | "web3";

// Additional project overrides with specific video/image assets
const ADDITIONAL_PROJECTS = [
  {
    title: "Business OS – Google Sheets Web App",
    href: "/projects/business-os",
    dates: "Nov 2025 - Dec 2025",
    active: true,
    description:
      "Small Business OS is a modern web application built on top of Google Sheets using Google Apps Script. The project transforms a traditional spreadsheet into a fully interactive business management system with a clean web-app interface, removing the need to work directly with cells or formulas.",
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
    isFiverr: false,
    fiverrSubCategory: null,
  },
  {
    title: "Walmart Product Scraper",
    href: "/projects/walmart-product-scraper",
    dates: "Jan 2026 - Feb 2026",
    active: true,
    description:
      "A powerful hybrid tool that automates the creation of optimized Walmart product listings. It leverages a Chrome Extension for robust client-side scraping and a Google Apps Script backend for secure AI processing using OpenAI's GPT-4o Vision.",
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
    isFiverr: false,
    fiverrSubCategory: null,
  },
  {
    title: "Freelancer Workspace – Google Sheets SPA",
    href: "/projects/freelancer-workspace",
    dates: "Dec 2025 – Dec 2025",
    active: true,
    description:
      "Freelancer Workspace is a lightweight business management web app built by transforming Google Sheets into a full Single Page Application (SPA). The project uses Google Apps Script to treat the spreadsheet as a backend database while delivering a modern frontend experience.",
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
    isFiverr: false,
    fiverrSubCategory: null,
  },
];

function extractTechnologies(title: string, content: string = ""): string[] {
  const techs: string[] = [];
  const text = (title + " " + content).toLowerCase();
  
  if (text.includes("manifest v3") || text.includes("extension") || text.includes("chrome")) techs.push("Manifest V3", "Chrome Extension API");
  if (text.includes("openai") || text.includes("gpt") || text.includes("ai")) techs.push("OpenAI API");
  if (text.includes("react")) techs.push("React.js");
  if (text.includes("next.js") || text.includes("nextjs")) techs.push("Next.js");
  if (text.includes("tailwind")) techs.push("TailwindCSS");
  if (text.includes("google apps script") || text.includes("sheets")) techs.push("Google Apps Script");
  if (text.includes("dom") || text.includes("automation")) techs.push("DOM Automation");
  if (text.includes("solana") || text.includes("web3") || text.includes("crypto")) techs.push("Web3.js");

  if (techs.length === 0) {
    techs.push("TypeScript", "React.js", "Web Engineering");
  }
  return Array.from(new Set(techs));
}

function detectFiverrSubCategory(title: string, summary: string = "", content: string = ""): FiverrSubFilter {
  // 1. Check badge in content
  const badgeMatch = content.match(/bg-amber-500\/10[^\"]*\">([^<]+)<\/span>/);
  if (badgeMatch) {
    const b = badgeMatch[1].toLowerCase();
    if (b.includes("ai") || b.includes("copilot") || b.includes("gpt") || b.includes("prompt")) return "ai";
    if (b.includes("scrap") || b.includes("automation") || b.includes("harvest") || b.includes("crawl")) return "scraping";
    if (b.includes("web3") || b.includes("crypto") || b.includes("api") || b.includes("backend") || b.includes("chain")) return "web3";
    if (b.includes("chrome") || b.includes("extension")) return "extensions";
  }

  // 2. Keyword fallback on title + summary
  const text = (title + " " + summary).toLowerCase();
  if (/\b(ai|gpt|copilot|prompt|chatgpt|openai|claude|gemini|llm|summarizer|censor)\b/i.test(text)) return "ai";
  if (/\b(scraper|scraping|scrape|crawl|extract|autofill|logistics|klaviyo|leads|sheets|ats)\b/i.test(text)) return "scraping";
  if (/\b(crypto|web3|solana|bitcoin|deriver|trading|bitunix|bip39|bip32|spooler|esc\/pos|thermal|pos)\b/i.test(text)) return "web3";
  
  return "extensions";
}

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [fiverrSubFilter, setFiverrSubFilter] = useState<FiverrSubFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Map all MDX posts dynamically
  const mdxProjects = useMemo(() => {
    return allPosts.map((post) => {
      const slug = post._meta.path.replace(/\.mdx$/, "");
      const isFiverr = 
        post.content.includes("Commissioned on Fiverr") || 
        post.content.includes("fiverr.com/pasinduxyz") || 
        post.summary.includes("Fiverr") || 
        post.content.includes("Delivered on Fiverr") ||
        post.content.includes("Fiverr Order Deliverable") ||
        post.content.includes("Order on Fiverr");
        
      const fiverrSub = isFiverr ? detectFiverrSubCategory(post.title, post.summary, post.content) : null;
      
      return {
        title: post.title,
        href: `/projects/${slug}`,
        dates: post.publishedAt || "2025 - 2026",
        active: true,
        description: post.summary,
        fullContent: post.content || "",
        technologies: extractTechnologies(post.title, post.content),
        image: post.image || "",
        video: post.video || "",
        links: [],
        category: isFiverr ? ("fiverr" as TabType) : getProjectCategory(post.title),
        isFiverr: isFiverr,
        fiverrSubCategory: fiverrSub,
      };
    });
  }, []);

  // Combine and deduplicate projects by href
  const allProjects = useMemo(() => {
    const projectMap = new Map<string, any>();

    [
      ...DATA.projects.map((p) => ({
        ...p,
        category: getProjectCategory(p.title),
        fullContent: p.description || "",
        video: (p as any).video || "",
        links: (p as any).links || [],
        isFiverr: false,
        fiverrSubCategory: null,
      })),
      ...ADDITIONAL_PROJECTS.map((p) => ({
        ...p,
        fullContent: p.description || "",
      })),
      ...mdxProjects,
    ].forEach((p) => {
      const key = p.href.toLowerCase();
      if (!projectMap.has(key)) {
        projectMap.set(key, p);
      }
    });

    return Array.from(projectMap.values()).sort((a, b) => {
      if (a.isFiverr && !b.isFiverr) return 1;
      if (!a.isFiverr && b.isFiverr) return -1;
      if (a.title.includes("FUT Snipe Bot")) return -1;
      if (b.title.includes("FUT Snipe Bot")) return 1;
      if (a.title.includes("Tech Copilot")) return -1;
      if (b.title.includes("Tech Copilot")) return 1;
      if (a.title.includes("RoboApply")) return -1;
      if (b.title.includes("RoboApply")) return 1;
      if (a.title.includes("Amazon Shift Sniper")) return -1;
      if (b.title.includes("Amazon Shift Sniper")) return 1;
      const dateA = parseProjectDate(a.dates);
      const dateB = parseProjectDate(b.dates);
      return dateB.getTime() - dateA.getTime();
    });
  }, [mdxProjects]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const q = searchQuery.toLowerCase().trim();
      const hasSearch = q.length > 0;

      let matchesTab = false;
      if (activeTab === "all") {
        matchesTab = !project.isFiverr;
      } else if (activeTab === "fiverr") {
        const isFiv = Boolean(project.isFiverr || project.category === "fiverr");
        if (!isFiv) return false;
        if (fiverrSubFilter === "all") matchesTab = true;
        else matchesTab = project.fiverrSubCategory === fiverrSubFilter;
      } else {
        matchesTab = project.category === activeTab && !project.isFiverr;
      }

      // If user typed a search query, also let them search across everything if on "all"
      if (!matchesTab && !hasSearch) return false;

      if (!hasSearch) return matchesTab;

      // Full-Text Search across title, description, full markdown body, technologies, and category
      const searchTokens = q.split(/\s+/).filter(Boolean);
      const searchableCorpus = (
        project.title + " " +
        (project.description || "") + " " +
        (project.fullContent || "") + " " +
        (project.technologies || []).join(" ") + " " +
        (project.category || "") + " " +
        (project.fiverrSubCategory || "")
      ).toLowerCase();

      const matchesSearch = searchTokens.every((token) => searchableCorpus.includes(token));

      if (activeTab === "fiverr") {
        const isFiv = Boolean(project.isFiverr || project.category === "fiverr");
        if (!isFiv) return false;
        if (fiverrSubFilter !== "all" && project.fiverrSubCategory !== fiverrSubFilter) return false;
        return matchesSearch;
      }

      return matchesSearch;
    });
  }, [allProjects, activeTab, fiverrSubFilter, searchQuery]);

  const primaryCount = allProjects.filter(p => !p.isFiverr).length;
  const fiverrCount = allProjects.filter(p => p.isFiverr || p.category === "fiverr").length;

  const fiverrAiCount = allProjects.filter(p => (p.isFiverr || p.category === "fiverr") && p.fiverrSubCategory === "ai").length;
  const fiverrExtCount = allProjects.filter(p => (p.isFiverr || p.category === "fiverr") && p.fiverrSubCategory === "extensions").length;
  const fiverrScrapeCount = allProjects.filter(p => (p.isFiverr || p.category === "fiverr") && p.fiverrSubCategory === "scraping").length;
  const fiverrWeb3Count = allProjects.filter(p => (p.isFiverr || p.category === "fiverr") && p.fiverrSubCategory === "web3").length;

  return (
    <main id="projects">
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
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Case Studies & Technical Proof
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base max-w-[580px] text-pretty">
                Explore {primaryCount}+ production browser extensions and SaaS platforms, alongside {fiverrCount}+ verified client deliverables.
              </p>
            </div>

            {/* UPWORK & FIVERR HIRE CALLOUT RIBBON */}
            <div className="w-full p-3.5 rounded-2xl border-2 border-primary/30 bg-primary/5 dark:bg-primary/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-left my-1">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-foreground">Need a custom extension or automation bot?</span>
                <p className="text-[11px] text-foreground/80 dark:text-muted-foreground">Available for $20/hr tracked work or fixed-milestone deliverables.</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.upwork.com/freelancers/pasindupiumal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-xs shrink-0 hover:opacity-90 transition-opacity"
                >
                  Hire on Upwork ↗
                </a>
                <a
                  href="https://www.fiverr.com/pasinduxyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-emerald-600/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-xs shrink-0 hover:bg-emerald-500/20 transition-colors"
                >
                  Fiverr Profile ↗
                </a>
              </div>
            </div>

            {/* Search Input */}
            <div className="w-full relative">
              <input
                type="text"
                aria-label="Search projects by keyword"
                placeholder={`Search projects by keyword (e.g. AI, Manifest V3, WebSockets, Scraping, OCR)...`}
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

            {/* Main Category Tabs */}
            <div className="flex flex-wrap gap-1.5 border border-border rounded-xl p-1 bg-muted/40 w-full justify-center">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "all"
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Featured ({primaryCount})
              </button>
              <button
                onClick={() => setActiveTab("fiverr")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "fiverr"
                    ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 shadow-xs border border-emerald-500/30 font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Fiverr Projects ({fiverrCount})
              </button>
              <button
                onClick={() => setActiveTab("extensions")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "extensions"
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Extensions ({allProjects.filter(p => !p.isFiverr && p.category === "extensions").length})
              </button>
              <button
                onClick={() => setActiveTab("websites")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "websites"
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                SaaS & Web3 ({allProjects.filter(p => !p.isFiverr && p.category === "websites").length})
              </button>
              <button
                onClick={() => setActiveTab("google apps script")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "google apps script"
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Google Apps Script ({allProjects.filter(p => !p.isFiverr && p.category === "google apps script").length})
              </button>
            </div>

            {/* DEDICATED FIVERR FREELANCER TRUST CARD & SUB-FILTERS */}
            {activeTab === "fiverr" && (
              <div className="w-full space-y-3.5 pt-1">
                <div className="p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/10 space-y-3 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-500/20 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
                        Verified Freelance Deliverables on Fiverr
                      </span>
                    </div>
                    <a
                      href="https://www.fiverr.com/pasinduxyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <span>Visit Fiverr Profile</span>
                      <ArrowUpRight className="size-3" />
                    </a>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="p-2 rounded-xl bg-background/60 border border-emerald-500/20 text-center">
                      <div className="flex items-center justify-center gap-1 text-amber-500 font-bold text-xs sm:text-sm">
                        <Star className="size-3 fill-amber-500" />
                        <span>5.0 Rating</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground">Client Feedback</span>
                    </div>
                    <div className="p-2 rounded-xl bg-background/60 border border-emerald-500/20 text-center">
                      <div className="flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold text-xs sm:text-sm">
                        <CheckCircle className="size-3" />
                        <span>70+ Orders</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground">Shipped on Fiverr</span>
                    </div>
                    <div className="p-2 rounded-xl bg-background/60 border border-emerald-500/20 text-center">
                      <div className="flex items-center justify-center gap-1 text-primary font-bold text-xs sm:text-sm">
                        <Zap className="size-3" />
                        <span>24-48h SLA</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground">Rapid Turnaround</span>
                    </div>
                    <div className="p-2 rounded-xl bg-background/60 border border-emerald-500/20 text-center">
                      <div className="flex items-center justify-center gap-1 text-foreground font-bold text-xs sm:text-sm">
                        <ShieldCheck className="size-3" />
                        <span>Manifest V3</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground">Clean Standards</span>
                    </div>
                  </div>
                </div>

                {/* Sub-Category Filter Buttons */}
                <div className="flex flex-wrap gap-1.5 w-full justify-center">
                  <button
                    onClick={() => setFiverrSubFilter("all")}
                    className={`px-3 py-1 rounded-lg text-xs transition-all ${
                      fiverrSubFilter === "all"
                        ? "bg-foreground text-background font-bold shadow-xs"
                        : "bg-muted/60 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    All Fiverr ({fiverrCount})
                  </button>
                  <button
                    onClick={() => setFiverrSubFilter("ai")}
                    className={`px-3 py-1 rounded-lg text-xs transition-all ${
                      fiverrSubFilter === "ai"
                        ? "bg-foreground text-background font-bold shadow-xs"
                        : "bg-muted/60 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    AI Copilots ({fiverrAiCount})
                  </button>
                  <button
                    onClick={() => setFiverrSubFilter("extensions")}
                    className={`px-3 py-1 rounded-lg text-xs transition-all ${
                      fiverrSubFilter === "extensions"
                        ? "bg-foreground text-background font-bold shadow-xs"
                        : "bg-muted/60 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Extensions ({fiverrExtCount})
                  </button>
                  <button
                    onClick={() => setFiverrSubFilter("scraping")}
                    className={`px-3 py-1 rounded-lg text-xs transition-all ${
                      fiverrSubFilter === "scraping"
                        ? "bg-foreground text-background font-bold shadow-xs"
                        : "bg-muted/60 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Scraping & Automation ({fiverrScrapeCount})
                  </button>
                  <button
                    onClick={() => setFiverrSubFilter("web3")}
                    className={`px-3 py-1 rounded-lg text-xs transition-all ${
                      fiverrSubFilter === "web3"
                        ? "bg-foreground text-background font-bold shadow-xs"
                        : "bg-muted/60 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Web3 & APIs ({fiverrWeb3Count})
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
            <span>Showing {filteredProjects.length} projects</span>
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="text-primary hover:underline font-medium">
                Clear search
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 max-w-[800px] mx-auto w-full text-left">
            {filteredProjects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 2 + (id % 12) * 0.02}
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
                onClick={() => { setSearchQuery(""); setActiveTab("all"); setFiverrSubFilter("all"); }}
                className="mt-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

// Helper function to categorize existing projects
function getProjectCategory(title: string): TabType {
  const t = title.toLowerCase();
  if (t.includes("script") || t.includes("sheets") || t.includes("workspace") || t.includes("office os") || t.includes("business os") || t.includes("walmart product scraper")) {
    return "google apps script";
  }
  if (t.includes("solana") || t.includes("fraktom") || t.includes("polybiuos") || t.includes("alphyre") || t.includes("design system") || t.includes("api design") || t.includes("typescript") || t.includes("next.js") || t.includes("git workflow")) {
    return "websites";
  }
  return "extensions";
}

// Helper function to parse project date strings for sorting
function parseProjectDate(dateString: string): Date {
  if (!dateString) return new Date(0);
  
  if (dateString.toLowerCase().includes("present")) {
    return new Date();
  }

  const parts = dateString.split(/[-–—]/);
  const lastPart = (parts.length > 1 ? parts[parts.length - 1] : parts[0]).trim();
  const date = new Date(lastPart);
  
  if (isNaN(date.getTime())) {
    const yearMatch = lastPart.match(/\d{4}/);
    if (yearMatch) {
      return new Date(parseInt(yearMatch[0]), 0, 1);
    }
    return new Date(0);
  }
  
  return date;
}
