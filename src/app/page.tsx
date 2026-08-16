/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Featured Projects & Chrome Extensions",
  itemListElement: DATA.projects.slice(0, 6).map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: project.title,
      description: project.description.split("\n")[0],
      applicationCategory: "BrowserExtension",
      operatingSystem: "Google Chrome, Chromium Browsers",
      author: {
        "@type": "Person",
        name: DATA.name,
      },
      ...(project.href ? { url: project.href } : {}),
    },
  })),
};

export default function Page() {
  return (
    <main className="min-h-dvh relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6 space-y-14">
        <section id="hero" aria-label="Introduction">
          <div className="space-y-6">
            {/* TOP CREDIBILITY PILL */}
            <BlurFade delay={BLUR_FADE_DELAY * 0.5}>
              <Link
                href="https://elitefutbot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all text-xs font-semibold text-primary group shadow-xs"
              >
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Built FUT Snipe Bot: 100k+ Peak Users · $1M+ Revenue Generated</span>
                <ArrowUpRight className="size-3 text-primary/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </BlurFade>

            <div className="gap-4 flex flex-col md:flex-row justify-between text-left items-start">
              <div className="gap-2.5 flex flex-col order-2 md:order-1 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Hi, I&apos;m {DATA.name}
                  </h1>
                </div>

                <BlurFade delay={BLUR_FADE_DELAY}>
                  <p className="text-muted-foreground max-w-[580px] text-sm sm:text-base leading-relaxed text-pretty font-sans">
                    Expert <strong className="text-foreground">Freelance Chrome Extension Developer</strong> specializing in{" "}
                    <Link href="/chrome-extension-developer-for-hire" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">
                      Manifest V3
                    </Link>
                    , AI floating copilots, browser automation bots, and high-frequency web scrapers, alongside Web3 and full-stack SaaS development.
                  </p>
                </BlurFade>

                {/* STATS RIBBON */}
                <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    <div className="p-2 rounded-xl border bg-background/50 backdrop-blur-xs text-center">
                      <div className="text-sm font-bold text-foreground">175+</div>
                      <div className="text-[10px] text-muted-foreground">Real-World Projects</div>
                    </div>
                    <div className="p-2 rounded-xl border bg-background/50 backdrop-blur-xs text-center">
                      <div className="text-sm font-bold text-emerald-700 dark:text-emerald-400">$1M+</div>
                      <div className="text-[10px] text-muted-foreground">Revenue Generated</div>
                    </div>
                    <div className="p-2 rounded-xl border bg-background/50 backdrop-blur-xs text-center">
                      <div className="text-sm font-bold text-amber-800 dark:text-amber-300">100k+</div>
                      <div className="text-[10px] text-muted-foreground">Peak Users</div>
                    </div>
                    <div className="p-2 rounded-xl border bg-background/50 backdrop-blur-xs text-center">
                      <div className="text-sm font-bold text-primary">$20/hr</div>
                      <div className="text-[10px] text-muted-foreground">Tracked Rate</div>
                    </div>
                  </div>
                </BlurFade>

                {/* QUICK ACTION CTA BUTTONS */}
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                  <div className="flex flex-wrap items-center gap-2.5 pt-2">
                    <Link
                      href="https://www.upwork.com/freelancers/pasindupiumal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-xs hover:opacity-90 transition-opacity"
                    >
                      <span>Hire Me on Upwork ($20/hr)</span>
                      <ArrowUpRight className="size-3" />
                    </Link>
                    <Link
                      href="/chrome-extension-developer-for-hire"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-primary/30 bg-background hover:bg-muted text-xs font-semibold transition-colors text-foreground"
                    >
                      <span>Chrome Extension Services</span>
                    </Link>
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-border/80 bg-background/60 hover:bg-muted text-xs font-semibold text-foreground/90 hover:text-foreground transition-all shadow-2xs hover:shadow-xs group"
                    >
                      <span>23 Projects Showcase</span>
                      <ArrowUpRight className="size-3 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </BlurFade>
              </div>

              <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2 shrink-0">
                <Avatar className="size-20 md:size-28 border-2 border-primary/20 rounded-full shadow-md ring-4 ring-muted">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-xl font-bold">About</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
                <Markdown>
                  {DATA.summary}
                </Markdown>
              </div>
            </BlurFade>
          </div>
        </section>
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <WorkSection />
            </BlurFade>
          </div>
        </section>
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            <div className="flex flex-col gap-8">
              {DATA.education.map((education, index) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 8 + index * 0.05}
                >
                  <Link
                    href={education.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-3 justify-between group"
                  >
                    <div className="flex items-center gap-x-3 flex-1 min-w-0">
                      {education.logoUrl ? (
                        <img
                          src={education.logoUrl}
                          alt={education.school}
                          className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                        />
                      ) : (
                        <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                      )}
                      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                        <div className="font-semibold leading-none flex items-center gap-2">
                          {education.school}
                          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                        </div>
                        <div className="font-sans text-sm text-muted-foreground">
                          {education.degree}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                      <span>
                        {education.start} - {education.end}
                      </span>
                    </div>
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                    {skill.icon && (
                      <skill.icon
                        className="size-4 rounded overflow-hidden object-contain"
                        style={'color' in skill && skill.color ? { color: skill.color } : undefined}
                        aria-hidden="true"
                      />
                    )}
                    <span className="text-foreground text-sm font-medium">{skill.name}</span>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="projects">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <ProjectsSection />
          </BlurFade>
        </section>
        <section id="hackathons">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <HackathonsSection />
          </BlurFade>
        </section>
        <section id="contact">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <ContactSection />
          </BlurFade>
        </section>
      </div>
    </main>
  );
}
