import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Configure Google Fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

// Configure Global Metadata
export const metadata: Metadata = {
  title: {
    default: 'GEOMARK | Land Surveying & Geotechnical Consultants in Somalia',
    template: '%s | GEOMARK Engineering Consultants',
  },
  description:
    'GEOMARK provides professional land surveying, geotechnical investigation, materials testing, and engineering documentation in Mogadishu, Somalia.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.geomark.so',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.geomark.so',
    siteName: 'GEOMARK Engineering Consultants',
    title: 'GEOMARK | Land Surveying & Geotechnical Consultants in Somalia',
    description:
      'GEOMARK provides professional land surveying, geotechnical investigation, materials testing, and engineering documentation in Mogadishu, Somalia.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEOMARK | Land Surveying & Geotechnical Consultants in Somalia',
    description:
      'GEOMARK provides professional land surveying, geotechnical investigation, materials testing, and engineering documentation in Mogadishu, Somalia.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Global Schema Structured Data
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
    'logo': 'https://www.geomark.so/favicon.ico',
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
        {/* Schema Markup Injection (Plain Strings Only) */}
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
