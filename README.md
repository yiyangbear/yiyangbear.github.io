# Yiyang Xiong — Personal Website

A minimalist single-page portfolio for **Yiyang Xiong**, a second-year Computer Science undergraduate. The production site is designed for [yiyangbear.github.io](https://yiyangbear.github.io), with source hosted in `yiyangbear/yiyangbear.github.io`.

## Stack

- [Astro](https://astro.build/) for static page generation and components
- [Tailwind CSS](https://tailwindcss.com/) through the Tailwind 4 Vite plugin
- TypeScript for the editable data models and browser interactions
- GitHub Actions and GitHub Pages for deployment

## Local development

```bash
npm install
npm run dev
```

Astro prints a local URL, normally `http://localhost:4321`. To run the same validation used before deployment:

```bash
npm run check
npm run build
npm run preview
```

The production build is written to `dist/`, which is intentionally ignored by Git.

## Editing the content

Personal content is kept separate from layout code:

- `src/data/profile.ts` — name, role, bio, About copy, links, location, timezone, and typing phrases
- `src/data/projects.ts` — project cards and the `Project` interface
- `src/data/skills.ts` — skill groups and the `SkillGroup` interface

To change the bio or About section, edit `introduction` or the `about` paragraphs in `profile.ts`. To change the Shenzhen status, edit `location` and the IANA timezone string (`Asia/Shanghai`) there. The browser formats that configured timezone with `Intl.DateTimeFormat`; it never requests visitor geolocation.

To add a project, append an object to the `projects` array:

```ts
{
  title: "Project name",
  description: "What it does and why you built it.",
  technologies: ["Tool one", "Tool two"],
  githubUrl: "https://github.com/yiyangbear/repository-name",
}
```

The current project list contains Used Car Price Prediction and Koku. Add, remove, or reorder objects to change the cards. Edit the arrays in `skills.ts` in the same way; only list skills you actually use.

The typing phrases live in `profile.typingPhrases`. Keep them short so the line remains stable on mobile.

## Appearance and motion

The theme toggle sets `data-theme` on the root `<html>` element and stores an explicit choice under the `theme` key in `localStorage`. Before the page paints, a small inline script restores that value. With no stored choice, it follows `prefers-color-scheme`.

Section reveals use the native `IntersectionObserver` API, with small staggered delays for their main content. A requestAnimationFrame-throttled scroll handler updates the reading-progress line, active navigation state, and subtle avatar parallax. The hero typing effect is a small browser script with no animation dependency. Motion checks `prefers-reduced-motion`; reduced-motion visitors receive static, immediately visible content without parallax.

Global design tokens, layout rules, focus styles, and animations live in `src/styles/global.css`. Tailwind 4 is enabled in `astro.config.mjs` with `@tailwindcss/vite`, then imported at the top of the global stylesheet. This allows utility classes when useful while keeping the shared design system readable in CSS.

## Deployment

`astro.config.mjs` sets `site` to `https://yiyangbear.github.io`. There is deliberately no `base` path because `yiyangbear.github.io` is a GitHub **user site**, served from the domain root.

The workflow at `.github/workflows/deploy.yml` runs on every push to `main` and can also be started manually. It uses Astro's official GitHub Action to install dependencies, build the static site, upload the Pages artifact, and deploy it. In the repository's **Settings → Pages**, choose **GitHub Actions** as the source.

## Adding a blog later

No blog code or unused package is included now. Later, add a `src/content.config.ts` collection schema and Markdown files under `src/content/blog/`, then create index and post routes under `src/pages/`. Astro Content Collections provide typed frontmatter and content loading. Astro includes Shiki-powered code highlighting; mathematical notation can be added only when needed with maintained Remark/Rehype math plugins such as `remark-math` and `rehype-katex`.

## Favicon

The editable placeholder monogram is `public/favicon.svg`. Replace that file with your own SVG while keeping the filename, or update the `<link rel="icon">` path in `src/layouts/Layout.astro` for another format.

GitHub profile: [github.com/yiyangbear](https://github.com/yiyangbear)
