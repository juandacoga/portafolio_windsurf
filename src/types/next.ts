// Type para URLs externas en Next.js
export type NextExternalUrl = string & { readonly __brand: 'NextExternalUrl' };

// Helper para URLs externas
export function createExternalUrl(url: string): NextExternalUrl {
  return url as NextExternalUrl;
}
