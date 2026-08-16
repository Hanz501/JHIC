import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Admission", href: "#find-more" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[var(--component-purple)] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#home" className="text-lg font-bold tracking-wide">
          SMK Al-Bahri
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-[var(--text-white)] transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-white/10 px-6 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-indigo-100 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}