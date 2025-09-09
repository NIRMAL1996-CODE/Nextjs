# Next.js Layout Notes

## 1. What is Layout?
- A **layout** is like a **wrapper** around your pages.
- Purpose: keeps **common UI elements** (header, footer, sidebar) in **one place**, so you don’t repeat them on every page.
- Simple: **Layout = common design frame for pages**.

## 2. Layout vs Plain JS/React
**Plain React:**
- Manually add Navbar/Footer on every page.
- Must update all pages if you change header/footer.
- Routing done manually with `react-router`.

**Next.js:**
- Create a **layout file**.
- All pages **wrap automatically** with it.
- Change header/footer **once**, reflects everywhere.
- Routing is **file-based** → pages = routes automatically.
- Simple: Next.js makes **layouts + routing automatic and DRY** (Don’t Repeat Yourself).

## 3. How to Create Layout
**Step 1: Location**
- Use `app/layout.js` for root layout.
- Each folder can have its **own `layout.js`**.

**Step 2: Structure**
```jsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>Navbar here</header>
        {children}  {/* Page content goes here */}
        <footer>Footer here</footer>
      </body>
    </html>
  );
}


**Step 3: Add Common Things**
- Header / Navbar
- Footer
- Sidebar (optional)
- Global styles / fonts

**Step 4: Wrap Pages**
- Next.js **automatically wraps pages** with layout.
- `{children}` is **page content inserted here**.

**Step 5: Nested Layouts**
- Folders can have **custom layout** (`folder/layout.js`).
- Pages inside that folder use **folder’s layout**, not the root.
- Other folders still use **root layout** unless they have their own.

## 4. `{children}` Explained
- `{children}` = **placeholder for page content**.  
- Next.js automatically passes the page to `{children}`.  
- If you **don’t include `{children}`**, that page **won’t render content**.  
- To hide layout for some pages:
  1. Create a **separate layout** for those pages.
  2. Or **conditionally render** header/footer in layout using route check.

## 5. Metadata (Head content)
- Use `metadata` object to set **title, description** for HTML `<head>`.
export const metadata = {
  title: 'Your Project Name',
  description: 'Description for your project',
}
- Next.js automatically adds `<title>` and `<meta>` in `<head>`.
- You can change it **per project/page**.

## 6. Navbar & Footer
- Navbar = top navigation menu with links.
- Footer = bottom section.
- Add them in **layout.js** to show on all pages.
- Example:
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
</header>

<footer>Footer content</footer>

## 7. Styling
- **Next.js doesn’t style automatically.**
- Use **Tailwind CSS** or plain CSS.
- Example with Tailwind:
<header className="bg-blue-500 text-white p-4">
  <nav className="flex gap-4">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
</header>

## 8. Summary
- Layout = **common wrapper for pages**.
- `{children}` = **where page content appears**.
- `metadata` = **sets HTML head content**.
- Navbar/Footer/Sidebar can be added **inside layout**.
- **Tailwind or CSS** used for styling.  
- Nested layouts allow **different layout for specific folders/pages**.

# Next.js Pages Notes
## Home Page
- In **Next.js 13+ with `app` folder**, the file `app/page.jsx` is **automatically   the home page (`/`)**.
- Only **one page can be `/`**.
- Root layout (`app/layout.js`) wraps this page automatically.

## Other Pages / Folders
- Any folder under `app/` creates a route with the folder name:

  app/about/page.jsx → "/about"
  app/contact/page.jsx → "/contact"
  app/home/page.jsx → "/home"


- You **cannot have two pages as `/`**. Only `app/page.jsx` is the true home.

## Summary
- **Home page** = `/` = `app/page.jsx`.
- **Other folders** = route name = `/folder-name`.
- **Root layout** wraps all pages by default.
- Nested folders can have **their own layout** if needed.

##  main notes: 
<main> = semantic container for the primary content of the page (only one per page).
It tells browsers, search engines, screen readers: “this is the unique content.”
Functionally same as <div>, but adds meaning + accessibility + SEO benefits.
Use <div> for layout/grouping, use <main> for the main content area between header & footer.