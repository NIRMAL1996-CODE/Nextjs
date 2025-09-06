Naming Conventions in nextjs----
✅ Allowed: lowercase, numbers, - (hyphen), _ (underscore).
❌ Not allowed: spaces, capital letters (not good practice), special chars (@,#,$,...).
Pages folder → folder name becomes URL path.

# 🚀 Linking & Navigation in Next.js

## 📌 Why Linking & Navigation?
Normal `<a>` tag reloads the whole page ❌.
 Next.js provides `Link` and `useRouter` for client-side navigation ✅, which is faster, smoother, and works like a Single Page Application (SPA).

---

## 🔗 Linking with `<Link>`
To create links, import `Link` from `"next/link"`.  
Example: `<Link href="/about">About Page</Link>` navigates to `/about`.  

For dynamic routes, you can pass variables: `<Link href={`/blog/${id}`}>Read Blog</Link>`.  

Extra props:  
- `prefetch` → preloads page in background (default true).  
- `replace` → replaces browser history instead of adding new entry.  
- `scroll={false}` → prevents auto scroll to top.  
Example: `<Link href="/profile" replace scroll={false}>Profile</Link>`  

---

## 🧭 Navigation with Router (Programmatic)
Use `useRouter` hook when navigation is triggered by an action like button click.  
- For **pages directory** → `import { useRouter } from "next/router"`.  
- For **app directory** → `import { useRouter } from "next/navigation"`.  

Example:  
```js
const router = useRouter();
<button onClick={() => router.push("/dashboard")}>Go Dashboard</button>
