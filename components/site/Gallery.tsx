import { Instagram } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/wanderwithrebel_/';

const photos = [
  {
    src: 'https://images.pexels.com/photos/9149359/pexels-photo-9149359.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Tropical paradise with clear blue waters',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/2805045/pexels-photo-2805045.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Mountain range with hikers on scenic path',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/15532995/pexels-photo-15532995.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Blue dome church in Santorini',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/7817185/pexels-photo-7817185.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Camel ride at sunset in Dubai desert',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/16226403/pexels-photo-16226403.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Kyoto temple with cherry blossoms',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/35129865/pexels-photo-35129865.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Balinese temple surrounded by vegetation',
    span: 'sm:col-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/6808521/pexels-photo-6808521.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Lone hiker admiring the Himalayas in Nepal',
    span: '',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-rebel-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rebel-bronze">
            From the Road
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-rebel-charcoal sm:text-5xl">
            Moments worth the journey
          </h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-rebel-olive transition-colors hover:text-rebel-bronze"
          >
            <Instagram className="h-4 w-4" />
            @wanderwithrebel_
          </a>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {photos.map((p, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-xl ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-rebel-green/0 opacity-0 transition-all group-hover:bg-rebel-green/40 group-hover:opacity-100">
                <Instagram className="h-7 w-7 text-rebel-cream" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
