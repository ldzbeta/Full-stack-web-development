# 🟢 Step 3: GSAP ScrollTrigger (scroll-based animations)

## 1. Install the plugin
ScrollTrigger comes built into GSAP — no extra install needed. Just register it:

```js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
```

---

## 2. Basic Example (Next.js / React — client component)

Place this in `app/page.js` (or `pages/index.js`) as a client component:

```jsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const boxRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(boxRef.current, {
        x: 400,
        rotation: 360,
        duration: 2,
        scrollTrigger: {
          trigger: boxRef.current, // element that triggers
          start: "top 80%",        // when top of box hits 80% of viewport
          end: "top 30%",          // when top of box hits 30% of viewport
          scrub: true,             // sync animation with scroll
          markers: true,           // shows start/end markers (debug)
        },
      });
    });

    // cleanup
    return () => ctx.revert();
  }, []);

  return (
    <div className="space-y-[600px] p-10">
      <h1 className="text-2xl font-bold">Scroll down 👇</h1>

      <div
        ref={boxRef}
        className="w-20 h-20 bg-blue-500 flex items-center justify-center text-white font-bold"
      >
        Box
      </div>
    </div>
  );
}
```

---

## 🔎 Explanation of key options

- **trigger**: _The element that activates the animation when it enters the viewport._  
- **start**: `"top 80%"` — animation starts when the top of the box reaches 80% down from the top of the viewport.  
- **end**: `"top 30%"` — animation ends when the top of the box reaches 30% from the top.  
- **scrub**: `true` — ties the animation progress to the scroll position (smooth scrub).  
- **markers**: `true` — shows start/end markers for debugging (remove in production).

---

## ✅ What you’ll see
Scroll down → the blue box slides to the right and rotates as you scroll.

---

## Tips & Best Practices
- **Use `gsap.context`** in React to scope animations and make cleanup easier (shown in the example).  
- **Remove `markers: true`** in production to avoid visible debug markers.  
- **Prefer `scrub` for scroll-synced animations**; use `scrub: 0.5` for a slight easing between scroll and animation.  
- **Combine ScrollTrigger with timelines** for more complex sequences:
  ```js
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: boxRef.current,
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    }
  });

  tl.to(boxRef.current, { x: 200 })
    .to(boxRef.current, { rotation: 360 }, 0);
  ```
- **Responsive start/end**: You can use viewport-relative values (e.g., `"top 50%"`) or functions to compute start/end dynamically.
