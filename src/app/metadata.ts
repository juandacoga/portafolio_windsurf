import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Portafolio',
  description: 'Desarrollador web apasionado por crear experiencias digitales modernas y funcionales',
  url: 'https://portafolio.example.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/juandacoga',
    github: 'https://github.com/juandacoga',
    linkedin: 'https://linkedin.com/in/juandacoga',
  }
};

export function generateMetadata({
  title,
  description,
  image = siteConfig.ogImage,
  path = '',
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
} = {}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const pageDescription = description || siteConfig.description;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: ['desarrollo web', 'react', 'next.js', 'typescript', 'frontend', 'portafolio'],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: url,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
    alternates: {
      canonical: url,
    },
  };
}
