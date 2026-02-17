import { UrlObject } from 'url';

export type ExternalUrl = string & { readonly __brand: unique symbol };

export interface ProjectUrls {
  demoUrl?: ExternalUrl;
  githubUrl?: ExternalUrl;
}

export interface TalkUrls {
  videoUrl?: ExternalUrl;
  slidesUrl?: ExternalUrl;
}

// Helper function to create external URLs
export function createExternalUrl(url: string): ExternalUrl {
  return url as ExternalUrl;
}
