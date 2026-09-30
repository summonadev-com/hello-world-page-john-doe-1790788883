---
status: implemented
title: Hello World Page
---

1. Create the project foundation files at the repository root: `package.json` (React, React DOM, TanStack Router, Vite, TypeScript, Tailwind CSS v4, `@tailwindcss/vite`, `@tanstack/router-plugin`), `tsconfig.json` with the `@/` path alias pointing at `src/`, `vite.config.ts` registering the Tailwind and TanStack Router Vite plugins, and `index.html` with a root mount element and a script tag for the app entry. Expected outcome: the project installs and starts with `npm install` + `npm run dev`.

2. Create `src/styles/global.css` containing exactly the Tailwind v4 import line. Expected outcome: Tailwind utility classes are available across the app.

3. Create `src/main.tsx` as the app entry: import the stylesheet once, create the router from the generated route tree, and render the router into the root element. Expected outcome: the app boots and routing is active. Note `src/routeTree.gen.ts` is generated automatically — never authored by hand.

4. Create `src/routes/__root.tsx` as the app shell: a minimal full-height page wrapper with a centered content area and the router outlet. Expected outcome: every page renders inside a consistent, centered layout.

5. Create `src/routes/index.tsx` for the home page (`/`): a large "Hello, world!" heading with a short supporting line of text beneath it, styled with Tailwind — generous spacing, clean typography, subtle background. Expected outcome: visiting the site shows a polished, centered "Hello, world!" page.

6. Verify the result: run the dev server, confirm the page renders with no console errors, and confirm the layout is centered and readable on both mobile and desktop widths. Expected outcome: a working hello world page ready to build on.
