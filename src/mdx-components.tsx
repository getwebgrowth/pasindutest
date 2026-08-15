import { CodeBlock } from "@/components/mdx/code-block";
import { MediaContainer } from "@/components/mdx/media-container";
import type { ComponentProps } from "react";

type CodeProps = ComponentProps<"code"> & {
  "data-language"?: string;
};

export const mdxComponents = {
  MediaContainer,
  img: (props: ComponentProps<"img">) => (
    <div className="my-6 rounded-2xl overflow-hidden border border-border bg-muted/30 shadow-md">
      <img
        {...props}
        className="w-full h-auto object-cover max-h-[500px]"
        loading="lazy"
      />
    </div>
  ),
  video: (props: ComponentProps<"video">) => (
    <div className="my-6 rounded-2xl overflow-hidden border border-border bg-black shadow-lg">
      <video
        {...props}
        className="w-full h-auto max-h-[500px] object-contain"
        controls
        playsInline
      />
    </div>
  ),
  iframe: (props: ComponentProps<"iframe">) => (
    <div className="my-6 aspect-video w-full rounded-2xl overflow-hidden border border-border shadow-lg">
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
    <div className="my-10 flex w-full items-center" {...props}>
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
    <div className="my-6 border border-border rounded-xl overflow-hidden">
      <div className="w-full overflow-x-auto">
        <table
          className="m-0! w-full min-w-full border-separate border-spacing-0"
          {...props}
        />
      </div>
    </div>
  ),
  code: ({ children, ...props }: CodeProps) => {
    if (props["data-language"]) {
      return <code {...props}>{children}</code>;
    }
    return (
      <code
        className="px-1.5 py-0.5 rounded-md bg-muted/60 dark:bg-muted/40 text-sm font-mono text-foreground/90"
        {...props}
      >
        {children}
      </code>
    );
  },
} as const;

