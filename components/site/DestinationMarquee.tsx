const destinations = [
  'Nepal',
  'Bali',
  'Santorini',
  'Morocco',
  'Japan',
  'Iceland',
  'Peru',
  'Vietnam',
  'Kenya',
  'Thailand',
  'Patagonia',
  'Jordan',
];

export default function DestinationMarquee() {
  const items = [...destinations, ...destinations];
  return (
    <section className="bg-rebel-green py-5 overflow-hidden border-y border-rebel-bronze/20">
      <div className="marquee-paused relative">
        <div className="marquee-track gap-10 pr-10">
          {items.map((d, i) => (
            <div key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span className="font-display text-xl font-semibold text-rebel-cream/90 sm:text-2xl">
                {d}
              </span>
              <span className="text-rebel-bronze text-xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
