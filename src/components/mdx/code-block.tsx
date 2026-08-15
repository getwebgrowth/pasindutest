"use client";

import { useState, useRef, type ComponentProps } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type CodeBlockProps = ComponentProps<"pre">;

export function CodeBlock({ children, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

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
          Architecture & Code
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
        className={cn(
          "p-4! m-0! overflow-x-auto text-xs sm:text-[13px] font-mono leading-relaxed bg-zinc-950 text-zinc-200",
          props.className
        )}
      >
        {children}
      </pre>
    </div>
  );
}


