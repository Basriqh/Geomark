import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.APP_URL ?? 'https://www.geomark.so';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/cgi-bin/', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
