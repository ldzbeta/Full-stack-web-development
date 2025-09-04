```tsx
"use client"; // required in Next.js app router

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 200,        // move right
      rotation: 360, // full rotation
      duration: 2,   // in 2 seconds
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
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

## What this does

- **When the page loads**: the blue box animates.
- **Movement**: it moves 200px to the right (`x: 200`).
- **Rotation**: it rotates a full turn (`rotation: 360`).
- **Duration**: the animation lasts 2 seconds (`duration: 2`).


## Tips & Variations

- **Easing**: Add easing for smoother motion:
  ```js
  gsap.to(boxRef.current, { x: 200, rotation: 360, duration: 2, ease: "power2.out" });
  ```
- **Repeat / Yoyo**: Make it repeat and reverse:
  ```js
  gsap.to(boxRef.current, { x: 200, rotation: 360, duration: 2, repeat: -1, yoyo: true });
  ```
- **From animation**: Animate from an initial state:
  ```js
  gsap.from(boxRef.current, { x: -200, opacity: 0, duration: 1.5 });
  ```
# Cleanup Tip for GSAP Timelines in React

When using GSAP timelines or multiple animations inside a `useEffect`, it’s important to clean up to avoid side effects when the component unmounts.

- **Why cleanup matters**: Without cleanup, animations may continue running or hold references that prevent garbage collection, causing memory leaks or unexpected behavior.

## Example

```jsx
useEffect(() => {
  const tl = gsap.timeline();
  tl.to('.box', { x: 200, duration: 2 });

  return () => {
    tl.kill(); // stop timeline and free resources
  };
}, []);
```

- **Key point**: Call `tl.kill()` (or `tl.pause()` if you prefer to keep state) in the cleanup function returned by `useEffect`.
- **Alternative**: If you create individual tweens, call `.kill()` on those tweens as well.
