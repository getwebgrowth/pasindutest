import Link from "next/link";
import { CheckCircle2, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Icons } from "@/components/icons";

interface TrustBannerProps {
  platform?: "fiverr" | "upwork" | "both";
  rating?: string;
  orderText?: string;
  hireText?: string;
}

export function TrustBanner({
  platform = "both",
  rating = "5.0 ★",
  orderText = "Delivered on-time with clean, scalable code and comprehensive documentation.",
}: TrustBannerProps) {
  return (
    <div className="not-prose my-6 p-4 sm:p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
            <ShieldCheck className="size-3.5" />
            Verified Client Deliverable
          </span>
          <span className="text-xs text-foreground/80 dark:text-muted-foreground font-medium">• {rating} Rated</span>
        </div>
        <p className="text-xs text-foreground/85 dark:text-muted-foreground leading-relaxed max-w-md">
          {orderText}
        </p>
      </div>

      <div className="flex items-center gap-2.5 shrink-0">
        <a
          href="https://www.fiverr.com/pasinduxyz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
        >
          <Icons.fiverr className="size-3.5 fill-current" />
          <span>Order on Fiverr</span>
          <ArrowUpRight className="size-3" />
        </a>

        <a
          href="https://www.upwork.com/freelancers/pasindupiumal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-border bg-background hover:bg-muted text-foreground font-semibold text-xs transition-colors shadow-2xs"
        >
          <Icons.upwork className="size-3.5 fill-current" />
          <span>Hire ($20/hr)</span>
        </a>
      </div>
    </div>
  );
}
