import { HelpCircle } from "lucide-react";

interface FaqCardProps {
  question: string;
  answer: string;
}

export function FaqCard({ question, answer }: FaqCardProps) {
  return (
    <div className="not-prose my-3.5 p-4 sm:p-5 rounded-2xl border border-border/70 bg-card/60 dark:bg-card/40 shadow-xs hover:border-primary/30 transition-colors space-y-2">
      <div className="flex items-start gap-2.5">
        <span className="shrink-0 size-6 rounded-lg bg-primary/10 text-primary font-bold text-xs flex items-center justify-center mt-0.5">
          Q
        </span>
        <h3 className="text-sm sm:text-base font-bold text-foreground tracking-tight leading-snug">
          {question}
        </h3>
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-8">
        {answer}
      </p>
    </div>
  );
}
