"use client";

import { useState, useRef, ReactNode, type ComponentProps, isValidElement } from "react";
import { Copy, Check, Terminal, Cpu } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type CodeBlockProps = ComponentProps<"pre">;

export function CodeBlock({ children, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  // Extract language from child <code> element if present
  let language = "Architecture & Code";
  let isDiagram = false;

  if (isValidElement(children) && children.props) {
    const className = (children.props as { className?: string }).className || "";
    const match = /language-(\w+)/.exec(className);
    if (match && match[1]) {
      const lang = match[1].toLowerCase();
      if (lang === "ascii" || lang === "diagram" || lang === "system") {
        language = "System Architecture";
        isDiagram = true;
      } else {
        language = lang.toUpperCase();
      }
    }
  }

  // Check text content for ASCII box drawing characters
  const rawText = preRef.current?.textContent || "";
  if (!isDiagram && (rawText.includes("┌") || rawText.includes("│") || rawText.includes("└") || rawText.includes("──") || rawText.includes("+---") || rawText.includes("|  *") || rawText.includes("+----"))) {
    isDiagram = true;
    if (language === "Architecture & Code") {
      language = "System Architecture";
    }
  }

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
    <div className="group relative my-6 rounded-2xl overflow-hidden border border-border/80 bg-zinc-950 text-zinc-100 shadow-2xl transition-all hover:border-border">
      {/* Terminal Window Top Control Bar */}
      <div className="px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 backdrop-blur-xs select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="size-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="size-2.5 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-zinc-600 dark:text-zinc-700">|</span>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-300 font-medium">
            {isDiagram ? (
              <Cpu className="size-3.5 text-emerald-400 shrink-0" />
            ) : (
              <Terminal className="size-3.5 text-primary shrink-0" />
            )}
            <span>{language}</span>
          </div>
        </div>

        <Button
          onClick={handleCopy}
          variant="ghost"
          size="sm"
          className="h-7 px-2.5 text-[11px] text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 rounded-lg transition-colors flex items-center gap-1.5 font-mono"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="size-3 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="size-3 text-zinc-400" />
              <span>Copy</span>
            </>
          )}
        </Button>
      </div>

      {/* Code / Architecture Diagram Container */}
      <div className="relative overflow-x-auto p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-zinc-200 bg-zinc-950/95 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
        <pre
          ref={preRef}
          {...props}
          className={cn(
            "m-0! p-0! bg-transparent! overflow-visible! whitespace-pre font-mono text-xs sm:text-[13px] tracking-normal leading-relaxed text-zinc-200 font-normal",
            isDiagram && "text-emerald-300/90 font-mono tracking-normal leading-snug",
            props.className
          )}
        >
          {children}
        </pre>
      </div>
    </div>
  );
}
