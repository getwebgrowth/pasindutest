"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const active = theme === "system" ? resolvedTheme : theme;
    setTheme(active === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className={cn(
        "flex size-full items-center justify-center rounded-full text-muted-foreground hover:text-foreground transition-colors cursor-pointer focus:outline-none",
        className
      )}
    >
      {mounted ? (
        <>
          <SunIcon className="size-5 dark:hidden" aria-hidden="true" />
          <MoonIcon className="hidden size-5 dark:block" aria-hidden="true" />
        </>
      ) : (
        <SunIcon className="size-5" aria-hidden="true" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
