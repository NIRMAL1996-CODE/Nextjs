# Next.js Catch-All Routes Notes

## What is Catch-All in Next.js?
Catch-All routes in Next.js allow you to **match multiple URL segments** with a **single file**. This is useful when the URL structure can have **unknown or variable depth**.

### Syntax
- `[...param].js` → Normal catch-all
- `[[...param]].js` → Optional catch-all (matches even if no segment is present)

### Example
File: `/pages/blog/[...slug].js`  
Matches URLs:
- `/blog/a` → slug = `['a']`
- `/blog/a/b` → slug = `['a','b']`
- `/blog/a/b/c` → slug = `['a','b','c']`

Optional catch-all example: `/pages/blog/[[...slug]].js`  
- Matches `/blog` → slug = `[]`
- Matches `/blog/a/b` → slug = `['a','b']`

## Why Do We Need Catch-All?
We need catch-all routes to **handle dynamic URLs with unknown depth**, making routing **flexible and cleaner**.  

### Real Use Cases
- Blog posts: `/blog/2025/09/09/post-title`  
- E-commerce products: `/shop/category/subcategory/item`  
- Without catch-all, we’d need **separate files for every possible URL**, which is **impractical**.

## Why Make a Folder Like `[...all]`?
- To **group all matching routes** in **one folder/file**
- To get the **segments as an array** for easier processing

### What are Segments?
Segments = **parts of the URL split by `/`**.  

Example:
URL: /blog/2025/09
Segments: ['blog','2025','09']


## Summary
- Catch-all routes = handle multiple URL parts dynamically  
- Optional catch-all = works even if no URL part is provided  
- Makes routing **flexible, clean, and manageable**  
- Useful in blogs, e-commerce, nested pages, or any dynamic content  

