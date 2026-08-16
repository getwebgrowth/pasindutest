import { allPosts } from "content-collections";
import { formatDate } from "@/lib/utils";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";
import Link from "next/link";
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Clock, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";
import { Icons } from "@/components/icons";

function getSortedPosts() {
  return [...allPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = allPosts.find((p) => p._meta.path.replace(/\.mdx$/, "") === slug);

  if (!post) {
    return undefined;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post;

  return {
    title: `${title} | Case Study`,
    description,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${title} | Case Study`,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/projects/${slug}`,
      ...(image && {
        images: [
          {
            url: `${DATA.url}${image}`,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Case Study`,
      description,
      ...(image && {
        images: [`${DATA.url}${image}`],
      }),
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const sortedPosts = getSortedPosts();
  const currentIndex = sortedPosts.findIndex(
    (p) => p._meta.path.replace(/\.mdx$/, "") === slug
  );
  const post = sortedPosts[currentIndex];

  if (!post) {
    notFound();
  }

  const previousPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;

  const getSlug = (p: (typeof sortedPosts)[0]) =>
    p._meta.path.replace(/\.mdx$/, "");

  // Estimated reading time
  const wordCount = post.content ? post.content.split(/\s+/).length : 600;
  const readTimeMinutes = Math.max(2, Math.ceil(wordCount / 180));

  const jsonLdContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    description: post.summary,
    image: post.image
      ? `${DATA.url}${post.image}`
      : `${DATA.url}/projects/${slug}/opengraph-image`,
    url: `${DATA.url}/projects/${slug}`,
    author: {
      "@type": "Person",
      name: DATA.name,
      url: DATA.url,
    },
  }).replace(/</g, "\\u003c");

  return (
    <main className="relative min-h-screen py-10 pb-28 px-4 sm:px-6">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: jsonLdContent,
        }}
      />

      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/8 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto space-y-8">
        {/* Top Navigation & Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground border-b border-border/50 pb-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border bg-background/80 hover:bg-muted font-medium text-foreground transition-colors group shadow-2xs"
          >
            <ChevronLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>All Projects & Case Studies</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <Calendar className="size-3 text-primary" />
              <span>{formatDate(post.publishedAt)}</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3 text-primary" />
              <span>{readTimeMinutes} min read</span>
            </span>
          </div>
        </div>

        {/* Case Study Header */}
        <header className="space-y-4 text-left">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="size-3" />
              Production Case Study
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
              <CheckCircle2 className="size-3" />
              Shipped & Verified
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-snug">
            {post.title}
          </h1>

          {post.summary && (
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-pretty pt-1 border-l-2 border-primary/40 pl-3.5 italic bg-primary/5 dark:bg-primary/5 py-1.5 rounded-r-lg">
              {post.summary}
            </p>
          )}

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <Link
              href="https://www.upwork.com/freelancers/pasindupiumal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-xs hover:opacity-90 transition-opacity"
            >
              <span>Hire Pasindu ($20/hr)</span>
              <ArrowUpRight className="size-3" />
            </Link>

            <Link
              href="/chrome-extension-developer-for-hire"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-primary/30 bg-background/80 hover:bg-muted text-xs font-semibold text-foreground transition-colors"
            >
              <span>Services & Capabilities</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border bg-muted/40 hover:bg-muted text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Direct Inquiry</span>
            </Link>
          </div>
        </header>

        {/* FEATURED MEDIA: Video Player or Image Showcase */}
        {post.video ? (
          <div className="rounded-2xl overflow-hidden border border-border/80 bg-zinc-950 shadow-2xl">
            {/* Window control bar */}
            <div className="px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="size-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="size-2.5 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="text-[11px] font-mono truncate max-w-[280px] sm:max-w-sm">{post.title} — Live Demo</span>
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">Video</span>
            </div>
            <div className="p-1 sm:p-2 bg-black flex items-center justify-center">
              <video
                src={post.video.startsWith("/") ? post.video : `/${post.video}`}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                title={`${post.title} - Video demo`}
              />
            </div>
          </div>
        ) : post.image ? (
          <div className="rounded-2xl overflow-hidden border border-border/80 bg-muted/20 shadow-xl">
            <div className="px-4 py-2.5 bg-muted/40 border-b border-border/60 flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="size-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="size-2.5 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="text-[11px] font-mono truncate max-w-[280px] sm:max-w-sm">{post.title}</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Preview</span>
            </div>
            <div className="p-2 sm:p-4 flex items-center justify-center bg-background/50">
              <img
                src={post.image.startsWith("http") ? post.image : post.image.startsWith("/") ? post.image : `/${post.image}`}
                alt={post.title}
                className="w-full h-auto max-h-[480px] object-contain rounded-xl"
              />
            </div>
          </div>
        ) : null}

        {/* Main Article Body */}
        <article className="prose prose-zinc dark:prose-invert max-w-none font-sans text-left">
          <MDXContent code={post.mdx} components={mdxComponents} />
        </article>

        {/* HIGH-CONVERTING UPSELL / HIRE ME CALLOUT */}
        <section className="mt-14 p-6 sm:p-8 rounded-2xl border-2 border-primary/30 bg-primary/5 dark:bg-primary/10 shadow-lg space-y-4 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-primary/20 pb-4">
            <div className="space-y-1">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary text-primary-foreground uppercase tracking-wider">
                Work With Pasindu Piumal
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Need a Custom Extension, AI Tool, or Bot Built?
              </h2>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <div className="text-xl font-extrabold text-primary">$20 / hr</div>
              <div className="text-xs text-foreground/80 dark:text-muted-foreground font-medium">Tracked or Milestone Escrow</div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-foreground/85 dark:text-muted-foreground leading-relaxed">
            I engineer production-ready <strong>Manifest V3 Chrome extensions</strong>, AI floating copilots (OpenAI & Gemini Pro),
            high-frequency transaction/sniper bots, multi-ATS form automation tools, and full-stack SaaS platforms. 
            175+ real-world projects shipped with 100% Upwork Job Success score.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="https://www.upwork.com/freelancers/pasindupiumal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-2.5 text-xs font-bold shadow-md hover:opacity-90 transition-opacity"
            >
              <Icons.upwork className="size-4 fill-current" />
              <span>Hire Me on Upwork ($20/hr)</span>
              <ChevronRight className="size-3.5" />
            </Link>
            <Link
              href="https://www.fiverr.com/pasinduxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 px-4 py-2.5 text-xs font-bold shadow-xs hover:bg-emerald-500/20 transition-colors"
            >
              <Icons.fiverr className="size-4 fill-current" />
              <span>Order on Fiverr (5.0 ★)</span>
            </Link>
            <Link
              href="/chrome-extension-developer-for-hire"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-primary/40 bg-background hover:bg-muted px-4 py-2.5 text-xs font-semibold text-foreground transition-colors"
            >
              <span>Services & Rates</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border bg-muted/60 hover:bg-muted px-4 py-2.5 text-xs font-semibold text-foreground/90 hover:text-foreground transition-colors"
            >
              <span>Direct Inquiry</span>
            </Link>
          </div>
        </section>

        {/* Previous & Next Case Studies Navigator */}
        <nav className="pt-8 border-t border-border/60">
          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 text-left">
            Explore More Case Studies
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
            {previousPost ? (
              <Link
                href={`/projects/${getSlug(previousPost)}`}
                className="group flex flex-col justify-between p-4 rounded-xl border border-border bg-background/60 hover:border-primary/40 hover:bg-muted/40 transition-all space-y-2"
              >
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary">
                  <ChevronLeft className="size-3 transition-transform group-hover:-translate-x-1" />
                  Previous Case Study
                </span>
                <span className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {previousPost.title}
                </span>
              </Link>
            ) : (
              <div className="hidden sm:block p-4 rounded-xl border border-dashed border-border/50 text-xs text-muted-foreground flex items-center justify-center">
                Beginning of portfolio
              </div>
            )}

            {nextPost ? (
              <Link
                href={`/projects/${getSlug(nextPost)}`}
                className="group flex flex-col justify-between p-4 rounded-xl border border-border bg-background/60 hover:border-primary/40 hover:bg-muted/40 transition-all space-y-2 text-left sm:text-right"
              >
                <span className="inline-flex items-center sm:justify-end gap-1 text-[11px] font-semibold text-primary">
                  <span>Next Case Study</span>
                  <ChevronRight className="size-3 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {nextPost.title}
                </span>
              </Link>
            ) : (
              <div className="hidden sm:block p-4 rounded-xl border border-dashed border-border/50 text-xs text-muted-foreground flex items-center justify-center">
                End of portfolio
              </div>
            )}
          </div>
        </nav>
      </div>
    </main>
  );
}
