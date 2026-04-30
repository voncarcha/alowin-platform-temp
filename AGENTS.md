# Repository Guidelines

## Project Structure & Module Organization

This is a React 19 + TypeScript + Vite app. Application code lives in `src/`:

- `src/main.tsx` mounts the app; `src/App.tsx` defines routes.
- `src/pages/` contains route-level screens such as `HomePage`, `TrendingPage`, and `ELottoPage`.
- `src/components/` contains reusable UI pieces like navigation, cards, sidebars, and feeds.
- `src/data/` holds local mock/domain data.
- `src/index.css` contains Tailwind CSS imports, theme tokens, and base utilities.
- `public/` stores static assets served at the site root, such as `logo.png`, `favicon.svg`, and `icons.svg`.

Avoid hand-editing generated output in `dist/`; regenerate it with the build command.

## Build, Test, and Development Commands

- `npm run dev` starts the Vite development server with HMR.
- `npm run build` runs TypeScript project checks (`tsc -b`) and creates a production build.
- `npm run lint` runs ESLint across the repository.
- `npm run preview` serves the production build locally after `npm run build`.

Install dependencies with `npm install` when setting up a fresh checkout.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Name components and page files in `PascalCase` (`MarketCard.tsx`, `ELottoPage.tsx`) and local variables/functions in `camelCase`. Prefer focused components over large mixed-purpose blocks.

Styling is primarily Tailwind CSS. Reuse existing theme tokens (`bg-bg`, `text-primary`, `border-border`, etc.) and established UI patterns: rounded white cards, subtle borders, soft shadows, and lucide icons. Keep imports tidy and remove unused code; ESLint will enforce common TypeScript and React Hooks rules.

## Testing Guidelines

No test runner is currently configured. For now, validate changes with:

1. `npm run lint`
2. `npm run build`
3. Manual browser checks for affected routes and responsive layouts

If tests are added later, place them near the code they cover or in a clearly named test directory, and add the command to `package.json`.

## Commit & Pull Request Guidelines

The git history is brief and uses simple descriptive messages. Prefer concise, imperative commits such as `Update e-lotto results layout` or `Fix category tab routing`.

Pull requests should include a short summary, verification steps, linked issues when relevant, and screenshots or screen recordings for UI changes. Note any known limitations, especially if a change affects routing, layout, or generated assets.
