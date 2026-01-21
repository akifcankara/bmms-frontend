# Repository Guidelines

## Project Structure & Module Organization
- `app/` contains the Next.js App Router entry points (`layout.tsx`, `page.tsx`) and global styles (`globals.css`).
- `components/` holds reusable UI pieces; shared primitives live in `components/ui/`.
- `lib/` is for utilities (for example, `lib/utils.ts`).
- `public/` contains static assets (SVGs, icons).

## Build, Test, and Development Commands
- `npm run dev`: start the local dev server at `http://localhost:3000`.
- `npm run build`: create a production build.
- `npm run start`: run the production server from a build.
- `npm run lint`: run ESLint checks.

## Coding Style & Naming Conventions
- Use TypeScript and the Next.js App Router patterns shown in `app/`.
- Formatting and linting are driven by ESLint (`eslint.config.mjs`).
- Follow the project rule from `CLAUDE.md`: file names must be kebab-case (for example, `user-profile.tsx`).

## Testing Guidelines
- No test framework is configured yet (no `test` script in `package.json`).
- If you add tests, document the runner and naming pattern here (for example, `*.test.tsx` in a `tests/` folder).

## Commit & Pull Request Guidelines
- Git history shows simple messages like “Initial commit”; keep commits short, imperative, and sentence case.
- PRs should include: a clear description, related issue links (if any), and screenshots for UI changes.

## Agent-Specific Instructions
- Read `CLAUDE.md` before making changes. Key rules include:
  - Use React Query for API calls and handle `data`, `isLoading`, and `isError` states explicitly.
  - Define each section as its own component file; never nest component definitions.
  - Avoid magic strings/numbers; use constants or enums.
  - Do not destructure object properties when passing props; pass the full object.
  - Type definitions are expected under `/@types` with `.d.ts` files when introduced.
