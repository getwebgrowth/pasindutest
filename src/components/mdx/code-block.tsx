"use client";

import { useState, useRef, useEffect, type ComponentProps } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "../ui/button";
import { codeToHtml } from "shiki/bundle/web";
import { cn } from "@/lib/utils";

type CodeBlockProps = ComponentProps<"pre">;

function extractLanguage(className?: string): string {
  if (!className) return "plaintext";
  const match = className.match(/language-([a-z0-9-]+)/i);
  return match ? match[1] : "plaintext";
}

export function CodeBlock({ children, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [{ html, className, title }, setRenderState] = useState<{
    html: string;
    className: string;
    title: string | null;
  }>({ html: "", className: "", title: null });
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const pre = preRef.current;
    const codeEl = pre?.querySelector("code");
    if (!pre || !codeEl) return;

    const codeText = codeEl.textContent || "";
    const lang = extractLanguage(codeEl.className);
    const nextTitle = codeEl.getAttribute("data-title");
    const nextClassName = codeEl.className || "";

    void codeToHtml(codeText, {
      lang: lang as any,
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: false,
    })
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        setRenderState({
          html: doc.querySelector("code")?.innerHTML ?? "",
          className: nextClassName,
          title: nextTitle,
        });
      })
      .catch((error) => {
        console.error("Failed to highlight code:", error);
        setRenderState({ html: "", className: nextClassName, title: nextTitle });
      });
  }, [children]);

  const handleCopy = async () => {
    const code = preRef.current?.textContent || "";
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  return (
    <div className="group relative my-6 rounded-2xl overflow-hidden border border-border/80 bg-zinc-950 text-zinc-100 shadow-xl">
      {/* Terminal Header */}
      <div className="px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-red-500/80 inline-block" />
          <span className="size-2.5 rounded-full bg-yellow-500/80 inline-block" />
          <span className="size-2.5 rounded-full bg-green-500/80 inline-block" />
        </div>
        <span className="text-[11px] font-mono text-zinc-400 truncate">
          {title || "Architecture / Code"}
        </span>
        <Button
          onClick={handleCopy}
          variant="ghost"
          size="icon"
          className="size-6 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-md transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
        </Button>
      </div>

      <pre
        ref={preRef}
        {...props}
        className={cn("p-4! m-0! overflow-x-auto text-xs sm:text-[13px] font-mono leading-relaxed bg-zinc-950 text-zinc-200", props.className)}
      >
        {html && (
          <code
            className={`shiki ${className}`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}

        {!html && (
          <code>
            {children}
          </code>
        )}
      </pre>
    </div>
  );
}

