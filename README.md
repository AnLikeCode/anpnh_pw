# Personal Academic Portfolio and Digital Memory Archive

A minimalist, editorial personal academic website built with **Astro**, **Tailwind CSS**, and **Markdown Content Collections**.

Designed for researchers working in quantum computing, quantum algorithms, quantum machine learning, and related fields. Features an interactive, code-drawn quantum sphere in the hero and a Markdown-first architecture where every publication, note, milestone, and photograph is maintained purely through Markdown.

---

## 1. Quick Start

### Prerequisites
- Node.js 22 or newer
- npm (bundled with Node)

### Local Development
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:4321` in your browser. Live reloading is enabled automatically whenever you edit any Markdown file.

### Production Build
```bash
# Test static site generation
npm run build

# Preview the generated static build
npm run preview
```

---

## 2. Content Management (Markdown-First)

All personal content lives in `src/content/`. You never need to touch `.astro`, `.tsx`, or `.css` files to update your site.

```text
src/content/
├── profile/
│   └── profile.md          # Your name, role, links, bio, education
├── people/
│   ├── first-supervisor.md # Principal supervisor profile
│   └── second-supervisor.md# Co-supervisor profile
├── group/
│   └── research-group.md   # Research lab / group details
├── pages/                  # Page intros and meta descriptions
├── research/               # Publications, preprints, ongoing work
├── journey/                # Milestones, hackathons, talks, news
├── insights/               # Essays, reading notes, technical posts
└── memories/               # Photographic visual archive and stories
```

Images go into `public/images/`:
```text
public/images/
├── memories/  # Photos for visual archive
├── research/  # Diagrams, plots, and figures
├── journey/   # Event covers and photos
├── profile/   # Profile portrait (optional)
└── people/    # Supervisor and group portraits/logos
```

---

## 3. How to Update Your Profile, Supervisors, and Group

### Personal Profile & Biography
Edit `src/content/profile/profile.md`:
- Change `name`, `role`, `affiliation`, `identity`, and `statement`.
- Update `links` (Google Scholar, ORCID, GitHub, email).
- Update `education` and `interests`.
- Write your full biography below the second `---` delimiter using standard Markdown.

### Supervisors
Edit `src/content/people/first-supervisor.md` and `src/content/people/second-supervisor.md`:
- Set `name`, `title`, `affiliation`, `website`, and `interests`.
- Add a 2-3 sentence introduction below the second `---`.
- To add a photo, save it to `public/images/people/` and set the `portrait` field.

### Research Group
Edit `src/content/group/research-group.md`:
- Set `name`, `institution`, `website`, and `directions`.
- Describe the lab below the second `---`.

---

## 4. How to Publish Content

### A. Publish a Research Item
Create a new file in `src/content/research/your-project-slug.md`:

```markdown
---
title: "Sample title: Variational Quantum Kernels for Classification"
date: 2026-10-15
kind: preprint        # journal | conference | preprint | ongoing | software | thesis
status: preprint      # published | preprint | under-review | ongoing | completed
category: Quantum machine learning
summary: A two-sentence summary shown on the index page and in previews.
authors:
  - Your Name
  - Collaborator Name
venue: arXiv:2610.00000
role: Lead author. Formulated the algorithm and conducted simulations.
links:
  - label: arXiv
    url: https://arxiv.org/abs/2610.00000
  - label: Code
    url: https://github.com/your-username/repo
bibtex: |
  @article{yourname2026kernels,
    title   = {Variational Quantum Kernels for Classification},
    author  = {Your Name and Collaborator Name},
    journal = {arXiv preprint arXiv:2610.00000},
    year    = {2026}
  }
featured: true
draft: false
---

## Research problem
Describe the background and problem formulation.

## Approach
LaTeX mathematics is supported inline $\mathcal{O}(n)$ and in display mode:

$$
\lvert\psi\rangle = \sum_{k=0}^{2^n-1} c_k \lvert k\rangle
$$

Code snippets with syntax highlighting:

```python
import numpy as np
print("Quantum kernel calculation")
```
```

### B. Publish a Journey Milestone
Create a file in `src/content/journey/your-milestone-slug.md`:

```markdown
---
title: "Presented at the International Quantum Information Conference"
date: 2026-11-04
category: Talk
description: Delivered a 20-minute talk on variational optimization.
cover:
  src: /images/journey/conference-hall.jpg
  alt: Lecture hall podium with presentation slide
links:
  - label: Conference Programme
    url: https://example.org
draft: false
---

Optional extended story goes here. If you add text here or include a gallery, a dedicated detail page is generated automatically!
```

### C. Publish an Insights Article
Create a file in `src/content/insights/your-article-slug.md`:

```markdown
---
title: "Understanding Barren Plateaus in Quantum Circuit Training"
date: 2026-10-20
description: Why gradient vanishing occurs in random parameterised ansatzes and how local cost functions help.
tags: [quantum computing, machine learning, gradients]
featured: true
draft: false
---

Your essay body in Markdown. Reading time is computed automatically. Math, blockquotes, footnotes, and code blocks are all supported.
```

### D. Publish a Memory
Create a file in `src/content/memories/your-memory-slug.md`:

```markdown
---
title: "Autumn walk after the colloquium"
date: 2026-10-18
location: "University Botanical Gardens"
caption: "Cold afternoon air and yellow leaves. Discussing error thresholds on the walk back."
cover:
  src: /images/memories/walk.jpg
  alt: Path lined with golden autumn trees
photos:
  - src: /images/memories/cafe.jpg
    alt: Warm cafe window with two coffee mugs
    caption: "Coffee before the evening train."
tags: [autumn, campus, walking]
featured: true
draft: false
---

An intimate personal reflection on the day, the conversation, or the place.
```

---

## 5. Working with Drafts

To write an entry without publishing it publicly, set:
```yaml
draft: true
```
- During local development (`npm run dev`), drafts remain visible so you can preview them.
- In production builds (`npm run build` and GitHub Pages), drafts are automatically excluded from the site and feeds.

---

## 6. GitHub Pages Deployment

The repository includes an automated GitHub Actions workflow in `.github/workflows/deploy.yml`.

### Setup
1. Push this repository to GitHub.
2. In your GitHub repository settings:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push a commit to the `main` branch. GitHub Actions will build and deploy your site automatically.

### User site vs. Project site support
The build automatically detects your repository type:
- If your repository is named `username.github.io`, it builds for root (`/`).
- If your repository is named `portfolio` or `quantum-site`, it builds with base path `/${repository-name}` automatically. All asset links and internal navigation adjust cleanly.

---

## 7. Mathematical Expressions and Typography

- Inline math: `$\lvert\psi\rangle = \alpha\lvert 0\rangle + \beta\lvert 1\rangle$`
- Display math:
  ```text
  $$
  H = \sum_{j} X_j X_{j+1} + Z_j
  $$
  ```
- Powered by KaTeX (fast, pre-rendered at build time, zero client-side math library needed).

---

## 8. License

Personal content and photographs copyright of the author. Code open under the MIT License.
