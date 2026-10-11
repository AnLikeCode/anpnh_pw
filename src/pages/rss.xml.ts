import rss from '@astrojs/rss';
import { getProfile, published, url } from '../lib/site';
import { siteConfig } from '../site.config';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const profile = await getProfile();
  const articles = await published('insights');
  return rss({
    title: `${siteConfig.rssTitle} | ${profile.data.name}`,
    description: profile.data.summary || siteConfig.description,
    site: context.site ?? new URL('https://username.github.io'),
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.date,
      description: article.data.description,
      link: url(`/insights/${article.id}`),
    })),
  });
}
