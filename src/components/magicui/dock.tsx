"use client";

import { cn } from "@/lib/utils";
import React, { createContext, useContext, useRef, type ReactNode } from "react";

interface DockProps {
  className?: string;
  children: ReactNode;
}

interface DockIconProps {
  className?: string;
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface DockContextValue {
  isDock: boolean;
}

const DockContext = createContext<DockContextValue | null>(null);

const Dock = ({
  className,
  children,
}: DockProps) => {
  return (
    <DockContext.Provider value={{ isDock: true }}>
      <div
        className={cn(
          "mx-auto w-max h-full flex items-center justify-center overflow-visible rounded-full will-change-transform",
          className
        )}
      >
        {children}
      </div>
    </DockContext.Provider>
  );
};

const DockIcon = ({ className, children, onClick }: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const context = useContext(DockContext);

  if (!context) {
    throw new Error("DockIcon must be used within a Dock component");
  }

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={cn(
        "relative flex size-10 items-center justify-center rounded-full shrink-0 transition-transform duration-150 ease-out hover:scale-120 active:scale-95 will-change-transform cursor-pointer",
        className
      )}
    >
      <div className="flex size-5 items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export { Dock, DockIcon };
export type { DockProps, DockIconProps };
