import { allPosts } from "content-collections";
import { formatDate } from "@/lib/utils";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    title,
    description,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title,
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
      title,
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

  const getSlug = (post: (typeof sortedPosts)[0]) =>
    post._meta.path.replace(/\.mdx$/, "");

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
    <section id="project-detail">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: jsonLdContent,
        }}
      />
      <div className="flex justify-start gap-4 items-center">
        <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 mb-6 group" aria-label="Back to Projects">
          <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
          Back to Projects
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="title font-semibold text-3xl md:text-4xl tracking-tighter leading-tight">
          {post.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          {formatDate(post.publishedAt)}
        </p>
      </div>
      <div className="my-6 flex w-full items-center">
        <div
          className="flex-1 h-px bg-border"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        />
      </div>

      {/* Featured Media: Video or Image */}
      {post.video ? (
        <div className="my-6 rounded-2xl overflow-hidden border border-border bg-black shadow-xl">
          <video
            src={post.video.startsWith("/") ? post.video : `/${post.video}`}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-auto max-h-[450px] object-cover"
            title={`${post.title} - Video demo`}
          />
        </div>
      ) : post.image ? (
        <div className="my-6 rounded-2xl overflow-hidden border border-border bg-muted/40 shadow-xl flex items-center justify-center">
          <img
            src={post.image.startsWith("/") ? post.image : `/${post.image}`}
            alt={post.title}
            className="w-full h-auto max-h-[450px] object-contain"
          />
        </div>
      ) : null}

      <article className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
        <MDXContent code={post.mdx} components={mdxComponents} />
      </article>

      {/* HIGH-CONVERTING UPSELL / HIRE ME CALLOUT */}
      <div className="mt-12 p-6 sm:p-8 rounded-2xl border-2 border-primary/30 bg-primary/5 dark:bg-primary/10 shadow-lg space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-primary text-primary-foreground uppercase tracking-wider mb-2">
              Work With Pasindu Piumal
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Need a Custom Chrome Extension or Bot Built?
            </h3>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-lg font-extrabold text-primary">$20 / hr</div>
            <div className="text-xs text-muted-foreground font-medium">Or Fixed Milestones</div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          I engineer production-grade <strong>Manifest V3 Chrome extensions</strong>, AI floating copilots (OpenAI & Gemini Pro),
          multi-ATS auto-apply systems, high-frequency sniping bots, and monetized SaaS extensions. 
          175+ projects shipped with 100% Upwork Job Success.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <Link
            href="https://www.upwork.com/freelancers/pasindupiumal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-2.5 text-xs font-bold shadow-md hover:opacity-90 transition-opacity">
              Hire Me on Upwork ($20/hr)
              <ChevronRight className="size-3.5" />
            </button>
          </Link>
          <Link
            href="/chrome-extension-developer-for-hire"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl border border-primary/40 bg-background/80 hover:bg-background px-4 py-2.5 text-xs font-semibold text-foreground transition-colors">
              View Specializations & Pricing
            </button>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border bg-muted/60 hover:bg-muted px-4 py-2.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
              Direct Inquiry
            </button>
          </Link>
        </div>
      </div>

      <nav className="mt-10 pt-6 max-w-2xl border-t">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {previousPost ? (
            <Link
              href={`/projects/${getSlug(previousPost)}`}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
            >
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <ChevronLeft className="size-3" />
                Previous
              </span>
              <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal wrap-break-word">
                {previousPost.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}

          {nextPost ? (
            <Link
              href={`/projects/${getSlug(nextPost)}`}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors text-right"
            >
              <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                Next
                <ChevronRight className="size-3" />
              </span>
              <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal wrap-break-word">
                {nextPost.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}
        </div>
      </nav>
    </section>
  );
}
