import BlurFade from "@/components/magicui/blur-fade";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Hire | Freelance Chrome Extension Developer",
  description:
    "Get in touch with Pasindu Piumal for freelance Chrome Extension development (Manifest V3), browser automation, web scraping, and custom web applications.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Hire Pasindu Piumal | Chrome Extension Developer",
    description:
      "Get in touch with Pasindu Piumal for freelance Chrome Extension development (Manifest V3), browser automation, web scraping, and custom web applications.",
    url: `${DATA.url}/contact`,
    siteName: `${DATA.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Contact & Hire Pasindu Piumal | Chrome Extension Developer",
    description:
      "Get in touch with Pasindu Piumal for freelance Chrome Extension development (Manifest V3), browser automation, web scraping, and custom web applications.",
    card: "summary_large_image",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Pasindu Piumal",
  description:
    "Get in touch with Pasindu Piumal for freelance Chrome Extension development and browser automation projects.",
  url: `${DATA.url}/contact`,
  mainEntity: {
    "@type": "Person",
    name: DATA.name,
    email: DATA.contact.email,
    telephone: DATA.contact.tel,
    jobTitle: "Freelance Chrome Extension Developer",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function ContactPage() {
    return (
        <main className="relative min-h-screen py-12 pb-24 sm:py-20 px-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(contactJsonLd).replace(/</g, "\\u003c"),
                }}
            />
            
            {/* Ambient gradients */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

            <div className="max-w-2xl mx-auto space-y-10">
                <header className="space-y-4 text-center">
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 text-xs font-semibold">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span>Available for New Projects & Contracts</span>
                        </div>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                            Let&apos;s Build Something Great
                        </h1>
                        <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto pt-1 leading-relaxed">
                            Have a Chrome extension, automation bot, AI tool, or web application project? Get in touch for estimates, timelines, or fixed-milestone pricing.
                        </p>
                    </BlurFade>

                    {/* UPWORK DIRECT HIRE BANNER */}
                    <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        <div className="p-4 rounded-2xl border-2 border-primary/30 bg-primary/5 dark:bg-primary/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                            <div className="space-y-0.5">
                                <div className="flex items-center gap-2">
                                    <Icons.upwork className="size-4 text-emerald-600 dark:text-emerald-400 fill-current" />
                                    <span className="text-xs font-bold text-foreground">Upwork Top Rated (100% JSS)</span>
                                </div>
                                <p className="text-xs text-muted-foreground">$20/hr tracked or milestone escrows with guaranteed IP security.</p>
                            </div>
                            <Link
                                href="https://www.upwork.com/freelancers/pasindupiumal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold shrink-0 hover:opacity-90 transition-opacity shadow-xs"
                            >
                                <span>Hire on Upwork</span>
                                <ArrowUpRight className="size-3" />
                            </Link>
                        </div>
                    </BlurFade>
                </header>

                <div className="space-y-8">
                    {/* Contact details cards */}
                    <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {[
                                { icon: Mail, label: "Email", value: DATA.contact.email, href: `mailto:${DATA.contact.email}` },
                                { icon: Phone, label: "Phone", value: DATA.contact.tel, href: `tel:${DATA.contact.tel}` },
                                { icon: MapPin, label: "Location", value: DATA.location, href: DATA.locationLink },
                            ].map((info, idx) => (
                                <a 
                                    key={idx}
                                    href={info.href} 
                                    target={info.icon === MapPin ? "_blank" : undefined}
                                    rel="noreferrer"
                                    className="flex flex-col gap-1 p-3.5 rounded-xl border bg-background/60 backdrop-blur-xs transition-all hover:border-primary/40 hover:bg-muted/40"
                                >
                                    <div className="size-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-1">
                                        <info.icon size={15} />
                                    </div>
                                    <p className="text-[10px] font-semibold text-muted-foreground uppercase">{info.label}</p>
                                    <p className="font-semibold text-xs text-foreground truncate">{info.value}</p>
                                </a>
                            ))}
                        </div>
                    </BlurFade>

                    {/* Contact Form Card */}
                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                        <div className="p-6 sm:p-8 rounded-2xl border bg-background/80 backdrop-blur-md shadow-md space-y-6">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-primary">
                                    <Send size={15} />
                                    <span className="text-xs font-bold uppercase tracking-wider">Send a Direct Message</span>
                                </div>
                                <h3 className="text-lg font-bold text-foreground">Project Inquiry Form</h3>
                            </div>
                            <ContactForm />
                        </div>
                    </BlurFade>

                    {/* Social & Specialization Links */}
                    <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl border bg-muted/20 text-xs text-muted-foreground">
                            <span>Prefer to review services first?</span>
                            <div className="flex items-center gap-3">
                                <Link href="/chrome-extension-developer-for-hire" className="font-semibold text-primary hover:underline">
                                    Chrome Extension Services →
                                </Link>
                                <Link href="/projects" className="font-semibold text-foreground hover:underline">
                                    Browse 23+ Projects →
                                </Link>
                            </div>
                        </div>
                    </BlurFade>
                </div>
            </div>
        </main>
    );
}
