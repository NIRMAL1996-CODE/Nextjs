## Getting Started
## First, run the development server:

```bash
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

# Next.js Project Setup

## Installation

1. Check Node.js:
     node -v

2.Create Next.js app:
npx create-next-app@latest .

3.Start development server:
npm run dev

4.Open in browser:
http://localhost:3000

5.Folder Structure
app/ → Pages & components
public/ → Static files (images, icons)
styles/ → CSS files
package.json → Project info & dependencies

Note: Page folders in app/ must be lowercase for correct routing.

# Next.js Routing Notes
## Basics
- Next.js uses **file-based routing** in the `app/` folder.
- Each folder with `page.tsx`/`page.js` becomes a route.
- Route names are **case-sensitive** (use lowercase).

## Dynamic Routes
- Use `[param]` for dynamic routes.
  - Example: `app/user/[id]/page.tsx` → `/user/123`
- Multiple params: `app/blog/[category]/[post]/page.tsx` → `/blog/tech/nextjs`

## Nested Routes
- Subfolders inside `app/` create nested routes.
  - Example: `app/dashboard/settings/page.tsx` → `/dashboard/settings`

## Index Routes
- `page.tsx` in a folder acts as the **default route** for that folder.
  - `app/about/page.tsx` → `/about`
  - `app/page.tsx` → `/` (home)

## Linking Between Pages
- Use `next/link`:
```tsx
import Link from 'next/link';
<Link href="/login">Login</Link>
## Not Found & Catch All

404 page: app/not-found.tsx
Catch-all: [...param]/page.tsx → matches multiple segments




