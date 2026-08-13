import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Raleway } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: 'Wander With Rebel — Curated Small-Group Trips & Adventures',
  description:
    "Wander With Rebel crafts unforgettable small-group journeys to the world's most breathtaking destinations. Expert guides, authentic experiences, and seamless planning.",
  openGraph: {
    title: 'Wander With Rebel — Curated Small-Group Trips & Adventures',
    description:
      'Expert-guided small-group trips to mountains, beaches, deserts, and cultural gems worldwide.',
    images: [{ url: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${raleway.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
