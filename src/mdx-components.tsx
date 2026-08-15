import { CodeBlock } from "@/components/mdx/code-block";
import { MediaContainer } from "@/components/mdx/media-container";
import type { ComponentProps } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

type CodeProps = ComponentProps<"code"> & {
  "data-language"?: string;
};

export const mdxComponents = {
  MediaContainer,
  // Ignore duplicate top H1 in MDX since the page hero template renders the main H1
  h1: () => null,
  h2: (props: ComponentProps<"h2">) => (
    <h2
      className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-10 mb-4 pb-2.5 border-b border-border/60 flex items-center gap-2 scroll-mt-20"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      className="text-base sm:text-lg font-bold tracking-tight text-foreground mt-7 mb-2.5 scroll-mt-20"
      {...props}
    />
  ),
  h4: (props: ComponentProps<"h4">) => (
    <h4
      className="text-sm sm:text-base font-semibold text-foreground mt-5 mb-2"
      {...props}
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p
      className="text-sm sm:text-base leading-relaxed text-muted-foreground/90 my-3.5 text-pretty font-sans"
      {...props}
    />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul
      className="my-4 space-y-2 pl-5 list-disc marker:text-primary/70 text-sm sm:text-base text-muted-foreground/90"
      {...props}
    />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol
      className="my-4 space-y-2 pl-5 list-decimal marker:text-primary/70 text-sm sm:text-base text-muted-foreground/90 font-sans"
      {...props}
    />
  ),
  li: (props: ComponentProps<"li">) => (
    <li className="leading-relaxed pl-1" {...props} />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-4 border-primary/50 bg-primary/5 dark:bg-primary/10 px-4 py-3 my-5 rounded-r-xl italic text-sm sm:text-base text-foreground/90"
      {...props}
    />
  ),
  a: ({ href, children, ...props }: ComponentProps<"a">) => {
    const isInternal = href?.startsWith("/") || href?.startsWith("#");
    if (isInternal && href) {
      return (
        <Link
          href={href}
          className="text-primary font-medium underline underline-offset-4 hover:opacity-80 transition-opacity inline-flex items-center gap-0.5"
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary font-medium underline underline-offset-4 hover:opacity-80 transition-opacity inline-flex items-center gap-1"
        {...props}
      >
        <span>{children}</span>
        <ExternalLink className="size-3 inline shrink-0 opacity-70" />
      </a>
    );
  },
  img: (props: ComponentProps<"img">) => (
    <div className="my-6 rounded-2xl overflow-hidden border border-border/80 bg-muted/20 shadow-md">
      <img
        {...props}
        className="w-full h-auto object-cover max-h-[500px]"
        loading="lazy"
      />
    </div>
  ),
  video: (props: ComponentProps<"video">) => (
    <div className="my-6 rounded-2xl overflow-hidden border border-border/80 bg-zinc-950 shadow-xl">
      <video
        {...props}
        className="w-full h-auto max-h-[500px] object-contain mx-auto"
        controls
        playsInline
      />
    </div>
  ),
  iframe: (props: ComponentProps<"iframe">) => (
    <div className="my-6 aspect-video w-full rounded-2xl overflow-hidden border border-border/80 shadow-lg">
      <iframe
        {...props}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  ),
  pre: (props: ComponentProps<"pre">) => <CodeBlock {...props} />,
  hr: (props: ComponentProps<"hr">) => (
    <div className="my-8 flex w-full items-center" {...props}>
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
  ),
  table: (props: ComponentProps<"table">) => (
    <div className="my-6 border border-border rounded-xl overflow-hidden shadow-xs">
      <div className="w-full overflow-x-auto">
        <table
          className="m-0! w-full min-w-full border-collapse text-xs sm:text-sm text-left"
          {...props}
        />
      </div>
    </div>
  ),
  thead: (props: ComponentProps<"thead">) => (
    <thead className="bg-muted/60 border-b border-border text-foreground font-semibold" {...props} />
  ),
  th: (props: ComponentProps<"th">) => (
    <th className="p-3 font-semibold text-foreground text-xs uppercase tracking-wider" {...props} />
  ),
  td: (props: ComponentProps<"td">) => (
    <td className="p-3 border-b border-border/50 text-muted-foreground" {...props} />
  ),
  code: ({ children, ...props }: CodeProps) => {
    if (props["data-language"]) {
      return <code {...props}>{children}</code>;
    }
    return (
      <code
        className="px-1.5 py-0.5 rounded-md bg-muted/80 dark:bg-muted/50 text-xs sm:text-[13px] font-mono text-foreground border border-border/40"
        {...props}
      >
        {children}
      </code>
    );
  },
} as const;


