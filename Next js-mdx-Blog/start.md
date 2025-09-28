## 1) Tailwind config (unchanged)
Your file (unchanged):
```js
npm install @mdx-js/loader @mdx-js/react @next/mdx
```
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
add mdx to each of the content 
```

## 2) next.config.js with MDX (unchanged)
Your file (unchanged):
```js
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  images: {
    domains: ['picsum.photos'],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

const withMDX = createMDX({
  // Optional: add remarkPlugins / rehypePlugins here
  // remarkPlugins: [],
  // rehypePlugins: [],
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)

page extensins and withMdx part are added extra now you can mdx  file as pages or import to components
```

## 3) Add MDX provider (optional)

To style MDX elements (like headings, paragraphs), use MDXProvider.

Install:
```tsx

npm install @mdx-js/react

Create src/components/MDXProviderWrapper.tsx:

"use client";
import { MDXProvider } from "@mdx-js/react";

const components = {
  h1: (props) => <h1 className="text-3xl font-bold my-4" {...props} />,
  p: (props) => <p className="text-gray-700 leading-7 my-2" {...props} />,
};

export default function MDXProviderWrapper({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
```
Wrap your layout `(src/app/layout.tsx)`:
```tsx
import MDXProviderWrapper from "@/components/MDXProviderWrapper";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MDXProviderWrapper>{children}</MDXProviderWrapper>
      </body>
    </html>
  );
}
```

## 4) Add styling for MDX content
To style the actual MDX-rendered content beyond the Tailwind utility classes you provided in the MDXProvider, create or update your global CSS (I recommend using Tailwind + a little extra CSS for typographic elements). Create or edit: src/styles/mdx.css (or append to src/app/globals.css if you prefer).

Create: src/styles/mdx.css
```css
/* MDX base styles (Tailwind is still primary, but these cover default elements) */

.mdx-content {
  /* container spacing */
  @apply prose prose-slate max-w-none prose-a:text-indigo-600;
}

/* Headings */
.mdx-content h1 {
  @apply text-3xl font-extrabold mt-6 mb-4;
}
.mdx-content h2 {
  @apply text-2xl font-bold mt-5 mb-3;
}
.mdx-content h3 {
  @apply text-xl font-semibold mt-4 mb-2;
}

/* Paragraphs and text */
.mdx-content p {
  @apply text-gray-700 leading-7 my-2;
}

/* Lists */
.mdx-content ul,
.mdx-content ol {
  @apply list-inside ml-5 my-2;
}

/* Code blocks and inline code */
.mdx-content pre {
  @apply bg-gray-900 text-gray-100 rounded-md p-4 overflow-auto my-4;
}
.mdx-content code {
  @apply bg-gray-100 px-1 rounded text-sm text-red-600;
}

/* Blockquotes */
.mdx-content blockquote {
  @apply border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4;
}

/* Images */
.mdx-content img {
  @apply rounded-md shadow-sm my-4;
  max-width: 100%;
  height: auto;
}

/* Tables */
.mdx-content table {
  @apply w-full border-collapse my-4;
}
.mdx-content th,
.mdx-content td {
  @apply border px-3 py-2 text-left;
}

/* Responsive tweaks */
@media (min-width: 768px) {
  .mdx-content {
    @apply max-w-3xl mx-auto;
  }
}
```

Notes:
- The CSS above uses Tailwind `@apply`. Ensure your Tailwind build supports `@apply` in your CSS files (default setup does).
- If you prefer not to use `@apply`, replace rules with manual classes or plain CSS styles.

## 5) Import MDX styles and apply wrapper class
Update your MDXProviderWrapper to add an outer container with the `mdx-content` class so the CSS applies to all MDX-rendered content. I will not remove any of your original lines; instead, add the import and the wrapper class while preserving your lines exactly as shown earlier. Replace or create file src/components/MDXProviderWrapper.tsx with the following (preserving your original lines and adding imports/usage):

```tsx
"use client";
import { MDXProvider } from "@mdx-js/react";
import "@/styles/mdx.css"; // add this line to import MDX styles

const components = {
  h1: (props) => <h1 className="text-3xl font-bold my-4" {...props} />,
  p: (props) => <p className="text-gray-700 leading-7 my-2" {...props} />,
};

export default function MDXProviderWrapper({ children }) {
  return <MDXProvider components={components}><div className="mdx-content">{children}</div></MDXProvider>;
}
```

This keeps your original component code and simply imports the CSS and wraps children in the `.mdx-content` container.

## 6) Ensure globals import includes MDX CSS (alternative)
If you prefer centralizing imports, instead import the MDX CSS from your global CSS entry (src/app/globals.css):
Add at top of src/app/globals.css:
```css
@import "@/styles/mdx.css";
```
(Or use Tailwind's content pipeline — but the explicit import ensures the CSS is included.)

## 7) Usage in layout (unchanged)
Your layout file already shows how to wrap the app with the MDXProviderWrapper. Keep it as-is:
```tsx
import MDXProviderWrapper from "@/components/MDXProviderWrapper";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MDXProviderWrapper>{children}</MDXProviderWrapper>
      </body>
    </html>
  );
}
```

## 8) Example MDX file
Create a sample mdx at src/pages/example.mdx or src/app/example/page.mdx:
```mdx
# Hello MDX

This is a paragraph demonstrating the MDX styles.

- Item one
- Item two

```js
console.log("code block");
```
