import { Phone, Mail, MapPin, Compass, Instagram, Facebook, Twitter } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/wanderwithrebel_/';

const navColumns = [
  {
    title: 'Explore',
    links: ['Trips', 'About', 'Gallery', 'Blog', 'Contact'],
  },
  {
    title: 'Destinations',
    links: ['Nepal', 'Bali', 'Santorini', 'Morocco', 'Japan'],
  },
  {
    title: 'Company',
    links: ['FAQs', 'Terms & Conditions', 'Privacy Policy', 'Cancellation Policy'],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-rebel-green text-rebel-cream">
      {/* CTA banner */}
      <div className="border-b border-rebel-cream/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-gradient-to-r from-rebel-bronze/25 via-rebel-bronze/10 to-transparent p-8 ring-1 ring-rebel-bronze/20 sm:p-12 lg:flex-row lg:text-left">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-2xl font-bold leading-tight text-rebel-cream sm:text-4xl">
                Ready for your next adventure?
              </h2>
              <p className="mt-3 max-w-md text-sm text-rebel-cream/70 sm:text-base">
                Tell us where you want to go. We'll craft the rest.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-rebel-bronze px-8 py-3.5 text-center text-base font-semibold text-rebel-cream shadow-lg shadow-rebel-bronze/30 transition-all hover:-translate-y-0.5 hover:bg-rebel-bronze/90"
              >
                Book Now
              </a>
              <a
                href="https://wa.me/10000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-rebel-cream/25 px-8 py-3.5 text-center text-base font-semibold text-rebel-cream transition-colors hover:bg-rebel-cream/10"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer body */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rebel-bronze text-rebel-cream">
                <Compass className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-bold">Wander With Rebel</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-rebel-cream/60">
              Curated small-group journeys to the world's most breathtaking
              destinations. Travel deeper, together.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Instagram, href: INSTAGRAM_URL },
                { Icon: Facebook, href: 'https://facebook.com' },
                { Icon: Twitter, href: 'https://twitter.com' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-rebel-cream/10 text-rebel-cream transition-colors hover:bg-rebel-bronze"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {navColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-rebel-cream/90">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-rebel-cream/60 transition-colors hover:text-rebel-bronze"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-t border-rebel-cream/10 pt-8 sm:grid-cols-3">
          <a href="tel:+10000000000" className="flex items-center gap-3 text-sm text-rebel-cream/70 hover:text-rebel-cream">
            <Phone className="h-4 w-4 text-rebel-bronze" />
            +1 (000) 000-0000
          </a>
          <a href="mailto:hello@wanderwithrebel.com" className="flex items-center gap-3 text-sm text-rebel-cream/70 hover:text-rebel-cream">
            <Mail className="h-4 w-4 text-rebel-bronze" />
            hello@wanderwithrebel.com
          </a>
          <span className="flex items-center gap-3 text-sm text-rebel-cream/70">
            <MapPin className="h-4 w-4 text-rebel-bronze" />
            221 Explorer Lane, Lisbon, PT
          </span>
        </div>

        <div className="mt-10 border-t border-rebel-cream/10 pt-6 text-center">
          <p className="text-xs text-rebel-cream/50">
            © {new Date().getFullYear()} Wander With Rebel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
