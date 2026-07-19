"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "Home", shortLabel: "Home" },
  { href: "/about", label: "About", shortLabel: "About" },
  { href: "/internship", label: "Internship", shortLabel: "Intern" },
  { href: "/projects", label: "Projects", shortLabel: "Projects" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-10 border-b border-zinc-200 bg-background/80 backdrop-blur dark:border-zinc-800">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="whitespace-nowrap font-semibold tracking-tight">
          {profile.name}
        </Link>
        <div className="flex gap-0.5 text-sm sm:gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative whitespace-nowrap rounded-full px-2.5 py-1 transition-colors after:absolute after:inset-x-3 after:-bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 sm:px-3 sm:py-1.5 ${
                  active
                    ? "bg-accent text-accent-foreground"
                    : "text-zinc-600 hover:text-accent dark:text-zinc-400 dark:hover:text-accent hover:after:scale-x-100"
                }`}
              >
                <span className="sm:hidden">{link.shortLabel}</span>
                <span className="hidden sm:inline">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
