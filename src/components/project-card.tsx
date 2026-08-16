/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Markdown from "react-markdown";

function cleanDescriptionForAlt(desc: string): string {
  // Strip markdown links [Text](url) to just Text
  let cleaned = desc.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  // Strip other markdown characters
  cleaned = cleaned.replace(/[*_`#]/g, "");
  // Get the first sentence
  const sentenceEnd = cleaned.indexOf(".");
  if (sentenceEnd !== -1) {
    cleaned = cleaned.substring(0, sentenceEnd);
  }
  return cleaned.trim();
}

function formatMediaSrc(src?: string): string {
  if (!src) return "";
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("/")) {
    return src;
  }
  // Check if filename has no extension
  if (!src.includes(".")) {
    return `/${src}.png`;
  }
  return `/${src}`;
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);
  const formattedSrc = formatMediaSrc(src);

  if (!formattedSrc || imageError) {
    return <div className="w-full h-48 bg-muted flex items-center justify-center text-xs text-muted-foreground">Preview</div>;
  }

  return (
    <img
      src={formattedSrc}
      alt={alt}
      className="w-full h-48 object-contain bg-muted"
      onError={() => setImageError(true)}
      loading="eager"
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const router = useRouter();
  const isClickable = Boolean(href && href !== "#");
  const isInternal = href?.startsWith("/");

  const cleanDesc = cleanDescriptionForAlt(description);
  const descriptiveAlt = cleanDesc
    ? `${title} - ${cleanDesc} by Pasindu Piumal`
    : `${title} project screenshot by Pasindu Piumal`;

  const formattedVideo = formatMediaSrc(video);

  const handleCardClick = (e: React.MouseEvent) => {
    if (!isClickable || !href) return;
    // Don't trigger card click if clicking inside an interactive link/button
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("button")) {
      return;
    }

    if (isInternal) {
      router.push(href);
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden transition-all duration-200 group",
        isClickable && "hover:ring-2 cursor-pointer hover:ring-muted hover:shadow-md",
        className
      )}
    >
      <div className="relative shrink-0">
        {isClickable ? (
          <Link
            href={href!}
            {...(isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            className="block"
          >
            {formattedVideo ? (
              <video
                src={formattedVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-48 object-cover"
                title={`${title} - Video demonstration by Pasindu Piumal`}
                aria-label={`${title} - Video demonstration by Pasindu Piumal`}
              />
            ) : image ? (
              <ProjectImage src={image} alt={descriptiveAlt} />
            ) : (
              <div className="w-full h-48 bg-muted flex items-center justify-center text-xs text-muted-foreground">
                Preview
              </div>
            )}
          </Link>
        ) : (
          <div className="block">
            {formattedVideo ? (
              <video
                src={formattedVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-48 object-cover"
                title={`${title} - Video demonstration by Pasindu Piumal`}
                aria-label={`${title} - Video demonstration by Pasindu Piumal`}
              />
            ) : image ? (
              <ProjectImage src={image} alt={descriptiveAlt} />
            ) : (
              <div className="w-full h-48 bg-muted" />
            )}
          </div>
        )}

        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2 z-10">
            {links.map((l, idx) => (
              <Link
                href={l.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${l.type} - ${title}`}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex"
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90 min-h-[26px] py-1 px-2.5 shadow-xs"
                  variant="default"
                >
                  {l.icon}
                  {l.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            {isClickable ? (
              <Link
                href={href!}
                {...(isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="font-semibold text-foreground group-hover:text-primary group-hover:underline transition-colors"
              >
                {title}
              </Link>
            ) : (
              <h3 className="font-semibold">{title}</h3>
            )}
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          {isClickable && (
            <Link
              href={href!}
              {...(isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm shrink-0"
              aria-label={`Open ${title}`}
            >
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden />
            </Link>
          )}
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
