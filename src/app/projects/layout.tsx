import { Metadata } from "next";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: "Projects & Portfolio | Chrome Extensions & Web Apps",
  description:
    "Explore custom Chrome extensions (Manifest V3), browser automation tools, web scrapers, and full-stack web applications developed by Pasindu Piumal.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects & Portfolio | Pasindu Piumal - Chrome Extension Developer",
    description:
      "Explore custom Chrome extensions (Manifest V3), browser automation tools, web scrapers, and full-stack web applications developed by Pasindu Piumal.",
    url: `${DATA.url}/projects`,
    siteName: `${DATA.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Projects & Portfolio | Pasindu Piumal - Chrome Extension Developer",
    description:
      "Explore custom Chrome extensions (Manifest V3), browser automation tools, web scrapers, and full-stack web applications developed by Pasindu Piumal.",
    card: "summary_large_image",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
