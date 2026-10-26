/**
 * Site-level technical settings.
 *
 * Personal content (your name, biography, research, etc.) does NOT live here.
 * It lives in Markdown files inside src/content. This file only holds
 * settings that are not really "content": language, navigation, RSS title.
 *
 * The public URL and base path are set in astro.config.mjs / the deploy workflow.
 */
export const siteConfig = {
  /** Used in <html lang> and for date formatting. */
  lang: 'en',
  /** Fallback description for search engines and link previews. */
  description: 'Personal website: research, writing and memories.',
  /** Title for the Insights RSS feed. Your name is appended automatically. */
  rssTitle: 'Insights',
  /** Main navigation. Remove or reorder items freely. */
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
    { label: 'Insights', href: '/insights' },
    { label: 'Memories', href: '/memories' },
    { label: 'About', href: '/about' },
  ],
  /** How many items to show in each homepage section. */
  home: {
    research: 3,
    insights: 3,
    memories: 3,
  },
};
