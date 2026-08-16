import Link from "next/link";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex items-center gap-2 border bg-card/90 backdrop-blur-md shadow-lg shadow-primary/5">
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                  className="rounded-full focus:outline-none"
                >
                  <DockIcon className="rounded-full cursor-pointer size-10 bg-background/80 text-muted-foreground hover:text-foreground hover:bg-muted border border-border transition-all">
                    <item.icon className="size-5 rounded-xs overflow-hidden object-contain" aria-hidden="true" />
                    <span className="sr-only">{item.label}</span>
                  </DockIcon>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={8}
                className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-md"
              >
                <p>{item.label}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}
        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />
        {Object.entries(DATA.contact.social)
          .filter(([name, social]) => social.navbar && !["X", "Upwork", "Fiverr"].includes(name))
          .map(([name, social], index) => {
            const isExternal = social.url.startsWith("http");
            const IconComponent = social.icon;
            return (
              <Tooltip key={`social-${name}-${index}`}>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={`Visit Pasindu Piumal on ${name}`}
                    className="rounded-full focus:outline-none"
                  >
                    <DockIcon className="rounded-full cursor-pointer size-10 bg-background/80 text-muted-foreground hover:text-foreground hover:bg-muted border border-border transition-all">
                      <IconComponent className="size-5 rounded-xs overflow-hidden object-contain" aria-hidden="true" />
                      <span className="sr-only">{name}</span>
                    </DockIcon>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-md"
                >
                  <p>{name}</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          })}
        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="rounded-full focus:outline-none" aria-label="Toggle color theme">
              <DockIcon className="rounded-full cursor-pointer size-10 bg-background/80 text-muted-foreground hover:text-foreground hover:bg-muted border border-border transition-all">
                <ModeToggle className="size-full cursor-pointer" />
              </DockIcon>
            </div>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-md"
          >
            <p>Theme</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>
    </div>
  );
}
