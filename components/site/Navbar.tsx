'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Compass } from 'lucide-react';

const links = [
  { label: 'Trips', href: '#trips' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const INSTAGRAM_URL = 'https://www.instagram.com/wanderwithrebel_/';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-rebel-green/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rebel-bronze text-rebel-cream transition-transform group-hover:rotate-12">
            <Compass className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-rebel-cream">
            Wander With Rebel
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-rebel-cream/80 transition-colors hover:text-rebel-bronze"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-rebel-bronze px-6 py-2.5 text-sm font-semibold text-rebel-cream shadow-lg shadow-rebel-bronze/20 transition-all hover:bg-rebel-bronze/90 hover:shadow-xl hover:shadow-rebel-bronze/30 hover:-translate-y-0.5 sm:inline-block"
          >
            Book Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-rebel-cream lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-rebel-green/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open ? 'max-h-96 border-t border-rebel-olive/30' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-rebel-cream/80 transition-colors hover:bg-rebel-olive/30 hover:text-rebel-bronze"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-rebel-bronze px-4 py-3 text-center text-base font-semibold text-rebel-cream"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
