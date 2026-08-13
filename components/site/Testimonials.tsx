import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      "The Nepal trek was beyond anything I imagined. Our guide knew every shortcut, every tea house with the best view. I went solo and left with eleven lifelong friends.",
    name: 'Sarah Chen',
    trip: 'Himalayan Sunrise Trek',
    avatar:
      'https://images.pexels.com/photos/977374/pexels-photo-977374.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      "I've travelled with big tour companies before — this was completely different. Felt personal, authentic, and genuinely fun. The Bali trip hit every single expectation and then some.",
    name: 'Marcus Reid',
    trip: 'Bali Cultural Immersion',
    avatar:
      'https://images.pexels.com/photos/977418/pexels-photo-977418.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      "Every detail was handled flawlessly. All I had to do was show up and soak it in. Santorini was stunning and the group size was perfect — never felt like a tourist, always felt like a traveler.",
    name: 'Aisha Patel',
    trip: 'Santorini Island Hopping',
    avatar:
      'https://images.pexels.com/photos/33944557/pexels-photo-33944557.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-rebel-green py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rebel-bronze">
            Traveler Stories
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-rebel-cream sm:text-5xl">
            Loved by people who've been there
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl bg-rebel-cream/5 p-8 ring-1 ring-rebel-cream/10 transition-colors hover:bg-rebel-cream/10"
            >
              <Quote className="h-8 w-8 text-rebel-bronze/50" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-rebel-bronze text-rebel-bronze"
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-rebel-cream/85">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-rebel-cream/10 pt-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-rebel-bronze/40"
                />
                <div>
                  <p className="text-sm font-semibold text-rebel-cream">{t.name}</p>
                  <p className="text-xs text-rebel-cream/60">{t.trip}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
