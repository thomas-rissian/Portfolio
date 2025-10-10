/**
 * Helper pour gérer les URLs avec le base path configuré dans astro.config.mjs
 */

// Récupère le base path depuis import.meta.env
const base = import.meta.env.BASE_URL || '/';

/**
 * Ajoute le base path à une URL
 * @param path - Le chemin relatif (doit commencer par /)
 * @returns Le chemin complet avec le base path
 */
export function withBase(path: string): string {
  // Évite les doubles slashes
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${normalizedBase}${normalizedPath}`;
}

/**
 * Utilise directement pour les liens internes
 */
export const routes = {
  home: withBase('/'),
  about: withBase('/a-propos'),
  projects: withBase('/projects'),
  contact: withBase('/#contact'),
  cv: withBase('/cv.pdf'),
};
