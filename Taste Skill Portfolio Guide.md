# TASK: Build My Personal Academic Portfolio and Digital Memory Archive

You are a senior frontend engineer and an experienced web designer with a strong sense of visual taste, editorial design, typography, and minimalist digital experiences.

Your task is to design and implement my personal website from scratch.

This is not a typical corporate portfolio, SaaS landing page, or developer template. It is a personal space that represents my academic identity, research interests, intellectual journey, personal reflections, and memories.

I want the final website to feel carefully designed, personal, elegant, quiet, and timeless.

## 1. MANDATORY: USE TASTE SKILL

Before you plan, design, or write any frontend code, you MUST load and read the installed `design-taste-frontend` skill.

The skill is installed globally at:

`~/.agents/skills/design-taste-frontend/SKILL.md`

Read its complete instructions and apply its design principles throughout the project.

Use these initial design preferences:

- DESIGN_VARIANCE: 7/10
- MOTION_INTENSITY: 4/10
- VISUAL_DENSITY: 3/10

These parameters are guidelines, not an excuse to add unnecessary decorative elements.

The most important rule is that visual quality must come from composition, typography, spacing, hierarchy, and thoughtful details rather than excessive animation or effects.

Do not produce a generic AI-generated portfolio.

## 2. PROJECT VISION AND IDENTITY

I am an academic researcher working in areas related to quantum computing, quantum algorithms, quantum machine learning, and related research topics.

My website should communicate both my professional research identity and my personality.

I want people to be able to understand:

1. Who I am.
2. What I research and what questions interest me.
3. What research projects and publications I have worked on.
4. Who supervises my research and which research group I belong to.
5. What I have experienced throughout my academic journey.
6. What I think, write, and reflect on.
7. What personal memories I choose to preserve.

The overall atmosphere should be closer to a beautiful independent researcher's website, an editorial publication, or a thoughtfully curated personal archive than a conventional resume website.

The result should feel like a real person's digital home.

Do not invent my personal biography, supervisors, research affiliations, publications, awards, or achievements. Use clearly marked placeholders where real information has not yet been provided.

## 3. VISUAL DESIGN DIRECTION

### 3.1. Design philosophy

My design philosophy is minimalism.

The website should be:

- Minimalist.
- Refined and sophisticated.
- Quiet and visually balanced.
- Elegant but not luxurious or extravagant.
- Academic but not dry or overly formal.
- Personal but not childish.
- Modern but not dependent on short-lived design trends.
- Highly readable and comfortable for long-form content.
- Distinctive without being visually noisy.

Think of a combination of Swiss editorial design, modern independent academic websites, thoughtfully curated design portfolios, and minimalist personal journals.

I value restraint.

Every visual element should have a reason to exist.

### 3.2. Color palette

Use this palette as the visual foundation:

- White: `#FFFFFF`
- Black: `#111111`
- Soft gray: `#F5F5F5`
- Muted gray: `#888888`
- Light gray borders: `#E8E8E8`
- Primary accent blue: `#0582FF`

The accent color `#0582FF` is an important part of my visual identity.

However, it must be used sparingly and intentionally.

Appropriate uses include:

- Active navigation states.
- Selected words or small typographic details.
- Important interactive links.
- Hover indicators.
- Subtle timeline markers.
- Selected metadata.
- Focus indicators.

Do not turn the website into a blue-themed dashboard.

White, black, and gray should dominate. Blue should be a carefully placed accent.

Avoid gradients, neon colors, excessive shadows, colorful illustrations, and glassmorphism.

### 3.3. Typography

Typography is one of the most important elements of this website.

Choose a refined, readable typography system.

Consider a combination of:

- A clean modern sans-serif for the interface.
- A sophisticated serif for selected editorial headings, quotations, or personal reflections.

You may choose appropriate open-source fonts if they improve the final design.

Use consistent typographic scales, line heights, weights, and letter spacing.

Long research summaries and essays must be comfortable to read.

Avoid oversized hero typography that consumes the entire first screen without adding meaningful information.

### 3.4. Layout

Use:

- Generous whitespace.
- A consistent layout grid.
- Carefully controlled content widths.
- Clear section hierarchy.
- Subtle separators.
- Deliberate alignment.
- Balanced asymmetric layouts where appropriate.
- Strong visual rhythm.
- Excellent mobile responsiveness.

Avoid excessive cards and boxed containers.

Not every piece of content needs a border or a background.

Prefer editorial layouts over dashboard-like layouts.

### 3.5. Interactions and animations

Use subtle micro-interactions only when they improve the experience.

Examples:

- Refined link hover states.
- Gentle image transitions.
- Minimal navigation animations.
- Subtle page transitions.
- Small changes in emphasis when hovering over content.

Avoid:

- Parallax-heavy scrolling.
- Large entrance animations.
- Excessive motion.
- Animated gradients.
- Continuous animations.
- Unnecessary cursor effects.

Respect `prefers-reduced-motion`.

The website should remain elegant even with animations disabled.

## 4. WEBSITE STRUCTURE

Build a complete multi-page website with the following main navigation:

- Home
- Research
- Journey
- Insights
- Memories

Also include appropriate sections or dedicated pages for About, Supervisors, and Research Group.

The exact information architecture can be refined if you find a more elegant solution, but all required content must be easy to discover.

### 4.1. HOME PAGE

The homepage should create a memorable first impression through restraint and carefully structured content.

Integrate a custom, code-generated Interactive Quantum Sphere into the hero composition. It should complement the personal introduction without dominating or obstructing it. See Section 4.7 for its complete design, interaction, implementation, accessibility, and performance requirements.

Include the following sections.

#### A. Personal introduction

Introduce me with:

- My name.
- My current academic role or status.
- My research identity.
- A short personal statement.
- A profile photograph, if available.
- Links to GitHub, Google Scholar, ORCID, email, and other academic profiles when supplied.

Avoid generic introductions such as "Welcome to my portfolio" or "Passionate about technology and innovation".

The introduction should feel natural, confident, thoughtful, and understated.

#### B. About me

Include a brief summary explaining:

- My academic background.
- My research interests.
- My current focus.
- What motivates my work.

Provide a link to a more detailed About page or section.

#### C. Selected research

Display a carefully curated selection of my research work.

Each research item should support:

- Title.
- Date or year.
- Research category.
- Short abstract or summary.
- My role or contribution.
- Research status.
- Links to the full research page, paper, code repository, or project.

Research statuses could include:

- Published.
- Preprint.
- Ongoing.
- Completed project.

Do not assume every research project is a publication.

Use a clean editorial layout rather than a dense card grid.

#### D. Recent journey and news

Include a preview of recent milestones and experiences.

For example:

- Participating in a quantum hackathon.
- Attending a research conference.
- Presenting a paper.
- Joining a new research project.
- Visiting a university or laboratory.
- Receiving an academic recognition.
- Reaching a personal milestone.

Each entry should display a date and a concise description.

Include a link to the full Journey page.

#### E. Supervisors and research group

Create a carefully designed section introducing:

- My first supervisor.
- My second supervisor.
- My research group or laboratory.

For each supervisor, support:

- Full name.
- Academic title.
- Affiliation.
- Portrait, if available.
- Short introduction.
- Research interests.
- Personal or institutional website.

For the research group, support:

- Group name.
- Institution.
- Logo or photograph, if available.
- Description.
- Research directions.
- Official website.

This section should communicate academic relationships respectfully and professionally.

It should not look like a corporate team-members grid.

#### F. Selected insights

Include previews of my most recent or featured writings.

Examples:

- Research reflections.
- Technical explanations.
- Academic experiences.
- Personal opinions about learning and research.
- Essays about quantum computing.
- Notes on books, ideas, or interesting problems.

Each article should show:

- Title.
- Publication date.
- Short description.
- Reading time, if practical.
- Optional category or tags.

#### G. Footer

Create a minimal footer containing:

- My name.
- Relevant profile links.
- Email.
- Copyright information.
- A small personal closing line, editable through Markdown or configuration.

Do not use a generic multi-column corporate footer.

### 4.2. RESEARCH PAGE

This is one of the most important pages.

It should function as a long-term academic research archive.

Support multiple kinds of research entries, including:

- Journal and conference publications.
- Preprints.
- Ongoing research.
- Independent projects.
- Collaborative projects.
- Software or research tools.

Each research entry should have a dedicated detail page generated from Markdown.

The detail page must support:

- Research title.
- Author information.
- Date or year.
- Publication venue, when relevant.
- Research status.
- Abstract.
- Research problem.
- Motivation.
- Proposed approach.
- Contributions.
- Results.
- Related resources.
- Figures and diagrams.
- External links.
- BibTeX or citation information when supplied.

Not every entry will contain every section.

The layout must handle missing optional fields gracefully.

Support LaTeX mathematical expressions in Markdown, including both inline and display mathematics.

Support code blocks, tables, figures, captions, and hyperlinks.

I will write actual research content myself. Do not fabricate publications or experimental results.

### 4.3. JOURNEY PAGE

Create a dedicated page for my academic journey, activities, and personal news.

This page should feel like a carefully curated timeline or academic diary.

Every entry should support:

- Exact date.
- Title.
- Short description.
- Category.
- Optional cover image.
- Optional gallery.
- Optional detailed Markdown article.
- Related links.

Example entries might include:

- October 2026: Participated in a quantum computing hackathon.
- Attended an academic workshop.
- Started a new research collaboration.
- Presented work at a conference.
- Reached a significant learning milestone.

These examples are illustrative placeholders, not claims about my actual history.

Design the Journey page with a distinctive but restrained timeline.

Dates should be visually meaningful.

Consider grouping events by year and ordering entries from newest to oldest.

A visitor should be able to browse my academic development over time.

The page should feel personal rather than like a corporate changelog.

### 4.4. ABOUT, SUPERVISORS, AND RESEARCH GROUP

Create a thoughtful presentation of my academic identity.

Support:

- Personal biography.
- Academic background.
- Research interests.
- Education.
- Supervisors.
- Research group.
- Academic affiliations.
- Contact and profile links.

The two supervisors must have dedicated presentation areas.

The research group should also have its own clearly identifiable section.

Make these sections easy to maintain from content files.

Do not hardcode academic information inside JSX or component source code.

### 4.5. INSIGHTS PAGE

This is my personal writing space.

Think of it as an independent publication or a minimalist blog.

I will publish articles about:

- Quantum computing.
- Research ideas.
- Technical concepts.
- Lessons learned.
- Academic life.
- Personal reflections.
- Books and interesting ideas.
- My own perspectives and observations.

Each article must have its own URL generated automatically from Markdown.

Support:

- Title.
- Date.
- Description.
- Tags.
- Optional cover image.
- Markdown body.
- Headings.
- Images.
- Captions.
- Code blocks.
- Mathematical equations.
- Tables.
- Blockquotes.
- Internal and external links.

Prioritize an excellent reading experience.

Use a comfortable reading width, beautiful typography, and clear heading hierarchy.

Article metadata should be visually understated.

Add a simple article index with newest-first ordering.

Tag filtering is optional and should not require a backend.

### 4.6. MEMORIES PAGE — SPECIAL DESIGN PRIORITY

This is the most emotionally personal and visually distinctive part of the website.

I want a dedicated space to preserve memories.

Unlike Research or Insights, this page should feel intimate, artistic, nostalgic, and carefully curated.

Draw design inspiration from high-quality Pinterest moodboards, independent photography portfolios, art journals, visual diaries, and minimalist digital scrapbooks.

Use Pinterest as a source of visual inspiration, not as a template to copy.

Do not recreate Pinterest's branding, navigation, or interface.

The Memories page should have its own character while still belonging to the same overall website.

#### Visual direction

Explore a combination of:

- Editorial photography.
- Asymmetric image composition.
- Carefully arranged visual collections.
- Masonry-inspired layouts.
- Generous whitespace.
- Small handwritten-like or editorial captions, when appropriate.
- Dates and locations.
- Subtle visual storytelling.
- Minimal interactions.

The page should feel like browsing a carefully maintained personal archive rather than a social media feed.

Avoid excessively decorative scrapbook elements.

The design must remain sophisticated and restrained.

#### Memory content

Each memory should support:

- Title.
- Date.
- Location, optionally.
- Short reflection or caption.
- Cover image.
- Multiple photographs.
- Optional extended story in Markdown.
- Optional tags.
- Optional people or event context.

Examples of memories might include:

- A trip.
- A memorable evening.
- A visit to another university.
- An important personal milestone.
- A photograph associated with a meaningful story.
- A moment from a hackathon.
- A meaningful conversation.
- A special place.

These are example content types, not real personal events.

#### Memory layouts

I want a visually engaging overview page.

Consider a curated masonry-style gallery, staggered editorial grid, or an asymmetric visual archive.

Images can have different aspect ratios.

Do not crop all photographs into identical square cards.

Preserve the character of each image.

Each memory should open a dedicated detail page or visual story page.

Inside the detail page, combine:

- Photographs.
- Written reflections.
- Dates.
- Locations.
- Whitespace.
- Intimate storytelling.

Allow image galleries where appropriate.

Use a minimal lightbox only if it can be implemented without unnecessary dependencies.

The Memories page may use slightly more expressive typography and composition than other pages, but it must respect the same restrained color palette.

This is where I want the strongest sense of personal taste.

### 4.7. INTERACTIVE QUANTUM SPHERE — SIGNATURE VISUAL ELEMENT

Create an original, delicate, **interactive quantum-inspired sphere** for the homepage hero. This is a signature element connected to my quantum computing research identity, **not a static picture or a generic animated tech globe**.

#### Design concept

- Treat the sphere as a quiet piece of generative mathematical art: elegant, scientific, abstract, and precise.
- Draw inspiration from Bloch spheres, state vectors, probability amplitudes, and orbital geometry. Artistic interpretation is welcome; do not claim physical accuracy for a purely abstract rendering.
- Explore a small, coherent selection of fine spherical wireframe curves, orbital arcs, a few carefully positioned particles, or a restrained state vector. **Do not combine every effect simply because it is possible.**
- Avoid sci-fi holograms, glowing neon orbs, chaotic particle fields, rotating Earth/globe imagery, thick strokes, complex shaders, and decorative clutter.
- Favor light gray and black hairline strokes with only a few subtle highlights in `#0582FF`. Preserve the existing white background, minimalist typography, and ample negative space.
- The sphere must be visually compelling when completely still; animation must not be required for its visual quality.

#### Placement and layout

- Integrate it into the **Home hero** alongside my name, academic identity, and short introduction. On desktop, consider text on the left and sphere on the right, keeping the text primary.
- Do not enclose it in an unnecessary card, large colored panel, or frame.
- Make it scale gracefully and reposition beneath or near the introduction on mobile. It must not overlap content or block navigation.
- The rest of the website should stay quiet. This sphere should be the site's main expressive interaction, not an excuse to add animations everywhere.

#### Pointer interaction

- On desktop, make the sphere gently respond to the pointer *within the sphere's own interaction area*. A small bounded tilt or rotation toward the pointer is preferred.
- Smoothly interpolate between positions rather than snapping. Clamp the maximum rotation to retain a balanced composition.
- On pointer leave, ease back toward the resting orientation.
- Optionally respond with a very subtle highlight of one small particle or arc, but do not introduce dramatic scaling, particle bursts, cursor trails, or a physics engine.
- On touch devices, show a pleasing static representation; touch interaction is optional, not required.
- Idle motion is optional. If used, it must be extremely slow, subtle, and suspend when off-screen. Prefer stillness when it looks better.

#### Lightweight technical architecture

- **Generate the sphere in code. Do not use a PNG, JPEG, GIF, pre-rendered video, downloaded sphere animation, or external 3D model.**
- Prefer **SVG + vanilla JavaScript + CSS**, optionally with basic 3D coordinate rotations and a simple perspective or orthographic 3D-to-2D projection. A lightweight Canvas 2D implementation is acceptable only if justified by clear benefits.
- Do not add Three.js, React, WebGL, heavy animation libraries, or other large dependencies merely to implement the sphere.
- Implement as a reusable, self-contained Astro component, preferably `src/components/visual/QuantumSphere.astro`, separating geometry, pointer interaction, and styling cleanly.
- The website **must remain fully static and compatible with GitHub Pages**. Client-side code is allowed only for the interaction and must not rely on a backend or server-side runtime.
- Provide a static, code-generated SVG fallback that renders when JavaScript is disabled; never leave a blank hero.
- Prefer event-driven updates; run `requestAnimationFrame` only when interaction or animation requires it. Stop or suspend updates when inactive or off-screen. Keep DOM/SVG element counts modest.
- The sphere is a design component, not personal content; unlike research, Journey, Insights, and Memories, its geometry need not be written in Markdown.

#### Accessibility and performance

- Treat the sphere as decorative with suitable accessibility semantics (for example `aria-hidden="true"` if it communicates no essential information).
- Respect `prefers-reduced-motion`: disable idle motion and offer a stationary presentation without pointer-induced movement where appropriate.
- Do not capture keyboard focus unnecessarily, intercept nearby navigation, or sacrifice text readability.
- Verify fast initial rendering, responsive size, smooth pointer response, and reasonable battery/CPU use.

#### Design acceptance criteria

1. It is unmistakably an intentional geometric artwork, not a generic animated globe.
2. It is **drawn in code**, not represented by an image or video.
3. It uses restrained white, black, gray, and sparse `#0582FF` highlights.
4. On desktop, pointer movement causes subtle, bounded, smooth rotation and pointer exit returns the object to rest.
5. It looks polished on mobile, with reduced motion, and without JavaScript.
6. It does not require a heavy dependency and does not compromise static GitHub Pages deployment.
7. Inspect the actual rendered visual and refine stroke weights, proportions, whitespace, and interaction until it integrates naturally with the hero.

## 5. TECHNICAL ARCHITECTURE — KEEP IT SIMPLE

This requirement is extremely important.

I do not want a complex web application.

I want a static personal website that can be hosted easily on GitHub Pages.

Use:

- Astro.
- Tailwind CSS.
- Markdown.
- Astro Content Collections.
- TypeScript only where it improves clarity and reliability.
- Minimal client-side JavaScript.
- One lightweight, code-generated SVG-based interactive quantum sphere in the Home hero (Section 4.7).

Use Astro's static site generation.

Do not use:

- A backend server.
- A database.
- A headless CMS.
- Authentication.
- User accounts.
- A complicated API.
- A server-side runtime.
- Next.js server features.
- Unnecessary state management.
- Heavy animation libraries.
- An unnecessarily large dependency tree.

The website must work as a fully static build.

The production output should be deployable to GitHub Pages.

JavaScript should be limited to features that genuinely require interaction.

Avoid React unless there is a strong technical reason.

Prefer Astro components and CSS for most of the website.

The final codebase should remain understandable and easy to maintain.

## 6. MARKDOWN-FIRST CONTENT MANAGEMENT — CRITICAL REQUIREMENT

This is one of my highest priorities.

After the website is implemented, I want to maintain it almost entirely by editing Markdown files and adding images.

I do not want to edit `.astro`, `.tsx`, `.jsx`, `.js`, or `.css` every time I publish something.

All personal content must live outside the presentation code.

Use Astro Content Collections and Markdown frontmatter.

Organize content so that I can:

1. Create a new Markdown file.
2. Add frontmatter metadata.
3. Write the content using Markdown.
4. Add images to a clearly organized assets directory.
5. Run `git add`, `git commit`, and `git push`.
6. See the updated website automatically after GitHub Actions deploys it.

This should work for:

- Research.
- Journey events.
- Insights articles.
- Memories.
- Biography.
- Supervisors.
- Research group.
- Homepage introductions and other editable personal text.

Use one central, clearly documented location for site-level configuration when Markdown is not the appropriate format for purely technical settings.

### Suggested directory structure

Use this as a conceptual starting point and improve it if Astro conventions require adjustments.

```text
my-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── images/
│   │   ├── profile/
│   │   ├── research/
│   │   ├── journey/
│   │   ├── memories/
│   │   └── people/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── research/
│   │   ├── journey/
│   │   ├── insights/
│   │   └── memories/
│   ├── content/
│   │   ├── research/
│   │   ├── journey/
│   │   ├── insights/
│   │   ├── memories/
│   │   └── pages/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── content.config.ts
├── README.md
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

The exact structure may differ, but keep it intuitive.

I should immediately understand where to put an article, research summary, journey event, supervisor profile, or memory.

### Required example files

Create realistic but clearly labeled sample Markdown files showing how to add each kind of content.

For example:

`src/content/research/example-research.md`

`src/content/journey/example-hackathon.md`

`src/content/insights/example-article.md`

`src/content/memories/example-memory.md`

Each example should include useful frontmatter and demonstration content.

Provide a Markdown-based approach for updating the biography, two supervisors, and research group details as well.

Use content schemas to validate required fields.

Fields such as images, tags, and external links should be optional when appropriate.

The website must not break if optional metadata is missing.

Automatically generate page routes from Markdown content.

Automatically sort content by date where relevant.

Support featured content on the homepage through simple frontmatter such as `featured: true`.

Support draft content through `draft: true`, and exclude drafts from production output.

Provide human-readable validation errors for invalid content where practical.

## 7. GITHUB PAGES DEPLOYMENT

Prepare the repository for deployment through GitHub Pages.

Include a working GitHub Actions workflow.

The intended workflow is:

1. I edit Markdown files locally.
2. I commit and push to the main branch.
3. GitHub Actions builds the Astro website.
4. GitHub Pages publishes the generated static site.
5. New content becomes publicly accessible.

No manual conversion of Markdown to HTML should be required.

Use the official GitHub Pages artifact deployment approach.

Ensure the build works with both:

- A project repository at `username.github.io/repository-name/`.
- A user repository at `username.github.io/`.

Handle Astro's `site` and `base` configuration correctly.

Do not hardcode root-relative asset paths that break under a repository subpath.

Include documentation explaining how to configure either deployment mode.

Use the minimum required GitHub Actions permissions.

## 8. RESPONSIVE DESIGN AND ACCESSIBILITY

The website must work beautifully on:

- Desktop.
- Laptop.
- Tablet.
- Mobile.

Pay particular attention to the Memories gallery on mobile.

Support:

- Semantic HTML.
- Proper heading hierarchy.
- Keyboard navigation.
- Visible focus indicators.
- Sufficient text contrast.
- Meaningful image alt text.
- Responsive image handling.
- Lazy loading where appropriate.
- Reduced-motion preferences.

Do not sacrifice usability for aesthetics.

## 9. PERFORMANCE AND SEO

Keep the final website fast and lightweight.

Implement:

- Static generation.
- Minimal JavaScript.
- Sensible image optimization.
- Page titles.
- Meta descriptions.
- Open Graph metadata.
- Canonical URLs.
- Sitemap generation.
- RSS feed for Insights, if straightforward.
- Appropriate article metadata.

Prioritize content and visual quality before optional SEO enhancements.

Avoid unnecessary tracking and analytics dependencies.

## 10. CONTENT DESIGN AND WRITING EXPERIENCE

The site must be pleasant not only for visitors but also for me as its author.

I will frequently add:

- A research summary.
- A new paper.
- A hackathon experience.
- An insight article.
- A new photograph.
- A personal memory.

Make these tasks extremely simple.

The goal is that a new article requires only one Markdown file, plus images if needed.

Do not make me manually update an index page after writing a new article.

Do not make me edit a component to add a new memory.

Do not make me modify routing code when adding a research project.

All indexes, previews, and detail pages should be generated automatically from the content collections.

## 11. DESIGN QUALITY CONTROL

Before considering the website complete, critically evaluate your own work.

Ask:

- Does it look like a generic AI-generated portfolio?
- Is there too much blue?
- Is the typography refined and readable?
- Are there unnecessary boxes or cards?
- Is the whitespace intentional?
- Do the different pages feel like one coherent website?
- Does the Research page feel academically credible?
- Does the Journey page tell a story?
- Does the Insights page support focused reading?
- Does the Memories page feel genuinely distinctive?
- Is the mobile experience carefully designed?
- Does the custom quantum sphere feel sophisticated, lightweight, and genuinely integrated rather than decorative noise?
- Can I maintain the website without touching frontend source code?

If the result is generic, revise it.

Do not settle for the first visually acceptable implementation.

Quality matters more than the number of visual effects.

## 12. IMPLEMENTATION WORKFLOW

Follow this sequence.

### Phase 1. Planning and visual direction

1. Read the Taste Skill.
2. Inspect the existing project, if any.
3. Establish the information architecture.
4. Define the design system.
5. Choose typography, spacing, and component conventions.
6. Plan the Markdown content model.

### Phase 2. Implementation

Build the complete website, including:

- Global layout.
- Navigation.
- Homepage, including the lightweight Interactive Quantum Sphere in the hero.
- Research index and detail pages.
- Journey timeline and detail pages.
- Insights index and article pages.
- Memories gallery and detail pages.
- About, supervisors, and research group.
- Footer.
- Responsive styling.

### Phase 3. Markdown integration

Connect every relevant page to the Markdown content collections.

Make all content-driven routes automatic.

Provide example Markdown entries and placeholder assets.

### Phase 4. Deployment

Configure static builds and GitHub Pages deployment.

### Phase 5. Verification

Run all relevant checks.

At minimum:

- Install dependencies.
- Run the development server.
- Run the production build.
- Check the generated routes.
- Verify Markdown rendering.
- Verify mathematical expressions.
- Check responsive layouts.
- Verify the interactive quantum sphere, including cursor movement, pointer leave, mobile presentation, reduced-motion mode, JavaScript-disabled fallback, and performance.
- Verify static asset paths.
- Check internal links.
- Verify that adding Markdown automatically generates the corresponding pages.

Inspect the rendered website, not just the source code, whenever preview or browser tools are available.

Fix errors before finishing.

### Phase 6. Documentation

Create a concise but complete `README.md`.

Explain in simple terms:

1. How to run the website locally.
2. How to edit my personal profile.
3. How to update my supervisors.
4. How to update my research group.
5. How to publish a research item.
6. How to publish a Journey event.
7. How to publish an Insights article.
8. How to create a new Memory with photographs.
9. How to hide drafts.
10. How to deploy to GitHub Pages.

Include exact file paths and copyable Markdown examples.

Assume I understand Git and programming, but I want content management to be as frictionless as possible.

## 13. IMPORTANT CONSTRAINTS

Remember these priorities throughout the project:

1. Taste Skill is mandatory.
2. Minimalism is mandatory.
3. White, black, gray, and `#0582FF` form the visual identity.
4. Academic research is a primary part of the website.
5. The Journey should present meaningful events chronologically.
6. The two supervisors and research group need their own presentation areas.
7. Insights must provide a high-quality writing experience.
8. Memories must be visually distinctive, personal, and Pinterest-inspired.
9. Markdown is the primary content authoring format.
10. Static hosting on GitHub Pages is mandatory.
11. Simplicity and maintainability are more important than elaborate architecture.
12. Do not invent real personal information.
13. Do not leave the website as a visual mockup. Implement a working project.
14. Implement a restrained, programmatically drawn Interactive Quantum Sphere as the signature hero visual; no images, heavy 3D engines, or unnecessary dependencies.

## 14. FINAL EXPECTATION

Deliver a complete, functional, visually refined personal academic website.

The final experience should communicate:

"This is a thoughtful researcher's personal digital space, where academic work, ideas, experiences, and memories are preserved with care."

I want the website to feel distinctive, but never loud.

I want it to feel personal, but never cluttered.

I want it to feel academic, but never impersonal.

Let a delicate, code-generated interactive quantum sphere subtly express my research identity in the homepage hero without compromising simplicity.

Most importantly, I want to be able to maintain it for years by writing Markdown files, adding photographs, and pushing changes to GitHub.

Begin by reading the Taste Skill, then implement the full website according to these requirements.