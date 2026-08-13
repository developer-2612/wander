import { ArrowRight, Instagram, Star } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/wanderwithrebel_/';

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="Hiker enjoying lush green mountains"
          className="h-full w-full object-cover hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rebel-green/70 via-rebel-green/40 to-rebel-green/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-rebel-green/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 pt-20 text-center sm:px-8">
        <div className="fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-rebel-cream/25 bg-rebel-cream/10 px-4 py-1.5 backdrop-blur-sm">
          <Star className="h-3.5 w-3.5 fill-rebel-bronze text-rebel-bronze" />
          <span className="text-xs font-medium tracking-wide text-rebel-cream/90">
            4.9 / 5 · 2,400+ happy travelers
          </span>
        </div>

        <h1 className="fade-in-up font-display text-4xl font-bold leading-[1.1] text-rebel-cream text-balance sm:text-6xl lg:text-7xl [animation-delay:100ms]">
          The world is waiting.
          <br />
          <span className="text-rebel-bronze">Let's go see it.</span>
        </h1>

        <p className="fade-in-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-rebel-cream/85 sm:text-lg [animation-delay:200ms]">
          Hand-crafted small-group adventures to the planet's most breathtaking
          places. Expert local guides, authentic stays, and zero planning
          stress — just pack your bags.
        </p>

        <div className="fade-in-up mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:300ms]">
          <a
            href="#trips"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-rebel-bronze px-8 py-3.5 text-base font-semibold text-rebel-cream shadow-xl shadow-rebel-bronze/30 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-rebel-bronze/40 sm:w-auto"
          >
            Explore Trips
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#about"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-rebel-cream/30 bg-rebel-cream/5 px-8 py-3.5 text-base font-semibold text-rebel-cream backdrop-blur-sm transition-all hover:bg-rebel-cream/15 sm:w-auto"
          >
            Why Travel With Us
          </a>
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fade-in-up mt-10 inline-flex items-center gap-2 text-sm font-medium text-rebel-cream/80 transition-colors hover:text-rebel-bronze [animation-delay:400ms]"
        >
          <Instagram className="h-4 w-4" />
          Follow our journey @wanderwithrebel_
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-rebel-cream/40 p-1.5">
          <div className="h-2 w-1 rounded-full bg-rebel-cream/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
