import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const SITE_URL = process.env.APP_URL ?? 'https://www.geomark.so';
const SITE_DESCRIPTION =
  'GEOMARK provides professional land surveying, geotechnical investigation, materials testing, and engineering documentation in Mogadishu, Somalia.';

export const metadata: Metadata = {
  title: {
    default: 'GEOMARK | Land Surveying & Geotechnical Consultants in Somalia',
    template: '%s | GEOMARK Engineering Consultants',
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'GEOMARK Engineering Consultants',
    title: 'GEOMARK | Land Surveying & Geotechnical Consultants in Somalia',
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/Images/team-gnss-corridor.jpg',
        width: 1200,
        height: 630,
        alt: 'GEOMARK Engineering Consultants — Land Surveying in Somalia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEOMARK | Land Surveying & Geotechnical Consultants in Somalia',
    description: SITE_DESCRIPTION,
    images: ['/Images/team-gnss-corridor.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'GEOMARK Engineering Consultants',
    'url': 'https://www.geomark.so',
  };

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService', 'Organization'],
    '@id': 'https://www.geomark.so/#organization',
    'name': 'GEOMARK Engineering Consultants',
    'url': 'https://www.geomark.so',
    'logo': 'https://www.geomark.so/geomark-logo.svg',
    'telephone': '+252611548569',
    'email': 'info@geomark.so',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '410, Qalab-xor Tower, Digfeer Street',
      'addressLocality': 'Mogadishu',
      'addressCountry': 'SO',
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      'opens': '08:00',
      'closes': '17:00',
    },
  };

  return (
    <html
      lang="en"
      className={`${poppins.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="bg-background-brand text-on-surface-brand font-sans antialiased selection:bg-[#7A1F2B] selection:text-white pt-20">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
