import { ArrowUpRight, Clock } from 'lucide-react';

const posts = [
  {
    category: 'Destination Guide',
    title: "A First-Timer's Guide to Trekking Annapurna",
    excerpt:
      'Everything you need to know before hitting the trail — permits, packing, altitude, and the teahouses you can\'t skip.',
    image:
      'https://images.pexels.com/photos/25252018/pexels-photo-25252018.jpeg?auto=compress&cs=tinysrgb&w=1000',
    date: 'Aug 2, 2026',
    readTime: '8 min read',
  },
  {
    category: 'Travel Tips',
    title: '7 Packing Mistakes That Ruin Long Trips',
    excerpt:
      'After 300+ trips, these are the errors we see again and again — and the simple fixes that save your journey.',
    image:
      'https://images.pexels.com/photos/6395044/pexels-photo-6395044.jpeg?auto=compress&cs=tinysrgb&w=1000',
    date: 'Jul 25, 2026',
    readTime: '5 min read',
  },
  {
    category: 'Culture',
    title: 'Experiencing Bali Beyond the Resorts',
    excerpt:
      'Temples, rice terraces, and family kitchens — how to see the real Bali without the crowds or the clichés.',
    image:
      'https://images.pexels.com/photos/5992583/pexels-photo-5992583.jpeg?auto=compress&cs=tinysrgb&w=1000',
    date: 'Jul 10, 2026',
    readTime: '7 min read',
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="bg-rebel-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rebel-bronze">
            Journal
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-rebel-charcoal sm:text-5xl">
            Stories & tips from the road
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-rebel-sand/60 bg-rebel-sand/30 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-rebel-bronze px-3 py-1 text-xs font-semibold text-rebel-cream">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-rebel-olive">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-rebel-charcoal transition-colors group-hover:text-rebel-bronze">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-rebel-olive">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-rebel-bronze">
                  Read more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
