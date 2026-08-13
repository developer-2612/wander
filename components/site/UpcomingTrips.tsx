import { Calendar, Users, ArrowRight, MapPin } from 'lucide-react';

const trips = [
  {
    name: 'Himalayan Sunrise Trek',
    location: 'Annapurna, Nepal',
    image:
      'https://images.pexels.com/photos/25245176/pexels-photo-25245176.jpeg?auto=compress&cs=tinysrgb&w=1200',
    dates: 'Oct 12 – Oct 22',
    duration: '11 days',
    seats: 4,
    price: '$1,890',
    tag: 'Trekking',
  },
  {
    name: 'Bali Cultural Immersion',
    location: 'Ubud & Beyond, Bali',
    image:
      'https://images.pexels.com/photos/5993005/pexels-photo-5993005.jpeg?auto=compress&cs=tinysrgb&w=1200',
    dates: 'Nov 05 – Nov 13',
    duration: '9 days',
    seats: 7,
    price: '$1,450',
    tag: 'Culture',
  },
  {
    name: 'Santorini Island Hopping',
    location: 'Cyclades, Greece',
    image:
      'https://images.pexels.com/photos/16511635/pexels-photo-16511635.jpeg?auto=compress&cs=tinysrgb&w=1200',
    dates: 'Sep 18 – Sep 25',
    duration: '8 days',
    seats: 2,
    price: '$2,100',
    tag: 'Beach',
  },
  {
    name: 'Sahara Desert Safari',
    location: 'Marrakesh & Dunes, Morocco',
    image:
      'https://images.pexels.com/photos/20852585/pexels-photo-20852585.jpeg?auto=compress&cs=tinysrgb&w=1200',
    dates: 'Dec 03 – Dec 10',
    duration: '8 days',
    seats: 9,
    price: '$1,650',
    tag: 'Adventure',
  },
];

export default function UpcomingTrips() {
  return (
    <section id="trips" className="bg-rebel-olive/15 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rebel-bronze">
              Upcoming Adventures
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-rebel-charcoal sm:text-5xl">
              Trips departing soon
            </h2>
          </div>
          <a
            href="#trips"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-rebel-bronze hover:text-rebel-sky"
          >
            View all trips
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trips.map((trip) => (
            <article
              key={trip.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-rebel-sand/60 bg-rebel-cream transition-all hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rebel-green/70 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-rebel-cream/90 px-3 py-1 text-xs font-semibold text-rebel-charcoal backdrop-blur-sm">
                  {trip.tag}
                </span>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="flex items-center gap-1.5 text-xs font-medium text-rebel-cream/90">
                    <MapPin className="h-3 w-3 text-rebel-bronze" />
                    {trip.location}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold leading-snug text-rebel-charcoal">
                  {trip.name}
                </h3>

                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-rebel-olive">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-rebel-bronze" />
                    {trip.dates}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-rebel-bronze" />
                    {trip.duration}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-rebel-sand/50 pt-4">
                  <div>
                    <p className="text-xs text-rebel-olive">From</p>
                    <p className="font-display text-xl font-bold text-rebel-charcoal">
                      {trip.price}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-xs font-semibold ${
                        trip.seats <= 3 ? 'text-rebel-bronze' : 'text-rebel-olive'
                      }`}
                    >
                      {trip.seats} seats left
                    </p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-4 block rounded-full bg-rebel-green py-2.5 text-center text-sm font-semibold text-rebel-cream transition-colors hover:bg-rebel-green/90"
                >
                  Book Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
