/**
 * Content model for the whole site.
 *
 * Every page on the site is generated from the Markdown files in src/content.
 * This file only describes which frontmatter fields each kind of file accepts.
 * If a required field is missing or has the wrong format, `npm run dev` and
 * `npm run build` print a readable error naming the file and the field.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const md = (folder: string) => glob({ pattern: '**/[^_]*.md', base: `./src/content/${folder}` });

const date = (field: string) =>
  z.coerce.date({ error: `"${field}" must be a date written as YYYY-MM-DD, for example 2026-10-11` });

const text = (field: string) =>
  z.string({ error: `"${field}" is required and must be text` }).min(1, `"${field}" cannot be empty`);

/** A path inside /public (e.g. /images/memories/sea.jpg) or a full https:// URL. */
const imagePath = z
  .string()
  .refine((v) => v.startsWith('/') || /^https?:\/\//.test(v), {
    message: 'Image paths must start with "/" (a file inside public/) or with https://',
  });

const photo = z.object({
  src: imagePath,
  alt: text('alt'),
  caption: z.string().optional(),
});

const link = z.object({
  label: text('label'),
  url: text('url'),
});

const common = {
  draft: z.boolean().default(false),
  /** Marks the bundled demonstration entries. Delete those files when you add your own. */
  sample: z.boolean().default(false),
};

/* ------------------------------------------------------------------ */
/* Personal profile, biography, supervisors, research group, page intros */
/* ------------------------------------------------------------------ */

const profile = defineCollection({
  loader: md('profile'),
  schema: z.object({
    name: text('name'),
    role: text('role'),
    affiliation: z.string().optional(),
    identity: text('identity'),
    statement: text('statement'),
    summary: text('summary'),
    currentFocus: z.string().optional(),
    portrait: photo.optional(),
    email: z.string().optional(),
    links: z.array(link).default([]),
    interests: z.array(z.string()).default([]),
    education: z
      .array(
        z.object({
          degree: text('degree'),
          institution: text('institution'),
          years: z.string().optional(),
          note: z.string().optional(),
        }),
      )
      .default([]),
    footerLine: z.string().optional(),
  }),
});

const people = defineCollection({
  loader: md('people'),
  schema: z.object({
    name: text('name'),
    title: z.string().optional(),
    relation: text('relation'),
    order: z.number().default(1),
    affiliation: z.string().optional(),
    portrait: photo.optional(),
    website: z.string().optional(),
    email: z.string().optional(),
    interests: z.array(z.string()).default([]),
    ...common,
  }),
});

const group = defineCollection({
  loader: md('group'),
  schema: z.object({
    name: text('name'),
    institution: z.string().optional(),
    logo: photo.optional(),
    photo: photo.optional(),
    website: z.string().optional(),
    directions: z.array(z.string()).default([]),
    order: z.number().default(1),
    ...common,
  }),
});

const pages = defineCollection({
  loader: md('pages'),
  schema: z.object({
    title: text('title'),
    intro: z.string().optional(),
    description: z.string().optional(),
  }),
});

/* ------------------------------------------------------------------ */
/* Archives                                                            */
/* ------------------------------------------------------------------ */

export const researchKinds = [
  'journal',
  'conference',
  'preprint',
  'ongoing',
  'independent',
  'collaborative',
  'software',
  'thesis',
] as const;
export const researchStatuses = ['published', 'accepted', 'preprint', 'under-review', 'ongoing', 'completed'] as const;

const research = defineCollection({
  loader: md('research'),
  schema: z.object({
    title: text('title'),
    date: date('date'),
    kind: z.enum(researchKinds, {
      error: `"kind" must be one of: ${researchKinds.join(', ')}`,
    }),
    status: z.enum(researchStatuses, {
      error: `"status" must be one of: ${researchStatuses.join(', ')}`,
    }),
    category: z.string().optional(),
    summary: text('summary'),
    abstract: z.string().optional(),
    authors: z.array(z.string()).default([]),
    venue: z.string().optional(),
    role: z.string().optional(),
    tags: z.array(z.string()).default([]),
    links: z.array(link).default([]),
    bibtex: z.string().optional(),
    cover: photo.optional(),
    featured: z.boolean().default(false),
    ...common,
  }),
});

const journey = defineCollection({
  loader: md('journey'),
  schema: z.object({
    title: text('title'),
    date: date('date'),
    category: text('category'),
    description: text('description'),
    cover: photo.optional(),
    gallery: z.array(photo).default([]),
    links: z.array(link).default([]),
    ...common,
  }),
});

const insights = defineCollection({
  loader: md('insights'),
  schema: z.object({
    title: text('title'),
    date: date('date'),
    updated: z.coerce.date().optional(),
    description: text('description'),
    tags: z.array(z.string()).default([]),
    cover: photo.optional(),
    featured: z.boolean().default(false),
    ...common,
  }),
});

const memories = defineCollection({
  loader: md('memories'),
  schema: z.object({
    title: text('title'),
    date: date('date'),
    location: z.string().optional(),
    caption: text('caption'),
    cover: photo,
    photos: z.array(photo).default([]),
    people: z.string().optional(),
    event: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    ...common,
  }),
});

export const collections = { profile, people, group, pages, research, journey, insights, memories };
