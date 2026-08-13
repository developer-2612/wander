import { Users, MapPinned, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: Users,
    title: 'Small Groups, Real Bonds',
    text: 'No crowded buses. We cap trips at 12 travelers so every journey feels like exploring with friends, not a tour herd.',
  },
  {
    icon: MapPinned,
    title: 'Local Guides, Hidden Paths',
    text: 'Our guides grew up in these mountains, deserts, and coastlines. They take you past the tourist traps to the places only locals know.',
  },
  {
    icon: ShieldCheck,
    title: 'Everything Handled',
    text: 'Stays, transport, permits, and most meals are sorted before you land. You show up; we handle the rest — down to the last detail.',
  },
];

export default function Manifesto() {
  return (
    <section id="about" className="bg-rebel-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rebel-bronze">
            Why Wander With Rebel
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-rebel-charcoal text-balance sm:text-5xl">
            Travel that moves you — not just from place to place.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-rebel-olive sm:text-lg">
            We believe a great trip isn't a checklist of sights. It's the
            unexpected detour, the meal shared with a local family, the summit
            you reached together. We build journeys around moments you can't
            Google.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-rebel-sand/60 bg-rebel-sand/40 p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-rebel-sand/60"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-rebel-bronze/15 text-rebel-bronze transition-colors group-hover:bg-rebel-bronze group-hover:text-rebel-cream">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-xl font-bold text-rebel-charcoal">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-rebel-olive">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
