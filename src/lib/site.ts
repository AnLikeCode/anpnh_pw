import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

/* ------------------------------------------------------------------ */
/* URLs                                                                */
/* ------------------------------------------------------------------ */

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an internal path with the deployment base path. External links pass through. */
export function url(path = '/'): string {
  if (!path) return BASE || '/';
  if (/^(https?:|mailto:|tel:|#|\/\/)/.test(path)) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${clean}` || '/';
}

export function isExternal(href: string): boolean {
  return /^(https?:)?\/\//.test(href);
}

/** Normalised current path without the base, used for active navigation. */
export function stripBase(pathname: string): string {
  const p = BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  return p.replace(/\/$/, '') || '/';
}

/* ------------------------------------------------------------------ */
/* Dates                                                               */
/* ------------------------------------------------------------------ */

const fmtLong = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const fmtShort = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' });
const fmtMonth = new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' });

export const formatDate = (d: Date) => fmtLong.format(d);
export const formatDayMonth = (d: Date) => fmtShort.format(d);
export const formatMonthYear = (d: Date) => fmtMonth.format(d);
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
export const year = (d: Date) => d.getUTCFullYear();

/* ------------------------------------------------------------------ */
/* Collections                                                         */
/* ------------------------------------------------------------------ */

type Dated = 'research' | 'journey' | 'insights' | 'memories';

/** Entries sorted newest first. Drafts are hidden in production builds. */
export async function published<C extends Dated>(name: C): Promise<CollectionEntry<C>[]> {
  const entries = (await getCollection(name, ({ data }) => (import.meta.env.PROD ? !data.draft : true))) as CollectionEntry<C>[];
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Featured entries first (in date order), then the most recent others, up to `limit`. */
export function pickFeatured<T extends { data: { featured?: boolean } }>(entries: T[], limit: number): T[] {
  const featured = entries.filter((e) => e.data.featured);
  const rest = entries.filter((e) => !e.data.featured);
  return [...featured, ...rest].slice(0, limit);
}

export function groupByYear<T extends { data: { date: Date } }>(entries: T[]): [number, T[]][] {
  const map = new Map<number, T[]>();
  for (const e of entries) {
    const y = year(e.data.date);
    if (!map.has(y)) map.set(y, []);
    map.get(y)!.push(e);
  }
  return [...map.entries()].sort((a, b) => b[0] - a[0]);
}

export async function getProfile() {
  const all = await getCollection('profile');
  const entry = all[0];
  if (!entry) {
    throw new Error('Missing profile. Create src/content/profile/profile.md (see README.md).');
  }
  return entry;
}

export async function getPeople() {
  const people = await getCollection('people', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return people.sort((a, b) => a.data.order - b.data.order);
}

export async function getGroups() {
  const groups = await getCollection('group', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return groups.sort((a, b) => a.data.order - b.data.order);
}

export async function getPage(id: string) {
  return getEntry('pages', id);
}

/* ------------------------------------------------------------------ */
/* Text helpers                                                        */
/* ------------------------------------------------------------------ */

export function readingTime(body = ''): number {
  const words = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function hasBody(body?: string): boolean {
  return Boolean(body && body.trim().length > 0);
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z\u00C0-\u024F]/.test(w))
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join('');
}

export const kindLabel: Record<string, string> = {
  journal: 'Journal article',
  conference: 'Conference paper',
  preprint: 'Preprint',
  ongoing: 'Ongoing research',
  independent: 'Independent project',
  collaborative: 'Collaborative project',
  software: 'Software',
  thesis: 'Thesis',
};

export const statusLabel: Record<string, string> = {
  published: 'Published',
  preprint: 'Preprint',
  'under-review': 'Under review',
  ongoing: 'Ongoing',
  completed: 'Completed',
};

/** Coarse filter groups used on the Research index. */
export function researchFilter(kind: string, status: string): string {
  if (status === 'ongoing' || kind === 'ongoing') return 'ongoing';
  if (kind === 'software') return 'software';
  if (kind === 'journal' || kind === 'conference' || kind === 'thesis' || status === 'published') return 'publications';
  if (kind === 'preprint' || status === 'preprint' || status === 'under-review') return 'preprints';
  return 'projects';
}
