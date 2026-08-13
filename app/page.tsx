import Navbar from '@/components/site/Navbar';
import Hero from '@/components/site/Hero';
import DestinationMarquee from '@/components/site/DestinationMarquee';
import Manifesto from '@/components/site/Manifesto';
import UpcomingTrips from '@/components/site/UpcomingTrips';
import Gallery from '@/components/site/Gallery';
import Testimonials from '@/components/site/Testimonials';
import BlogPreview from '@/components/site/BlogPreview';
import Footer from '@/components/site/Footer';
import WhatsAppButton from '@/components/site/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DestinationMarquee />
        <Manifesto />
        <UpcomingTrips />
        <Gallery />
        <Testimonials />
        <BlogPreview />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
