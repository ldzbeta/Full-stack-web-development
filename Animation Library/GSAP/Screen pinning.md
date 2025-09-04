# 🟢 Step 4: ScrollTrigger Pinning Example 
```tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionRef.current && boxRef.current) {
      const ctx = gsap.context(() => {
        gsap.to(boxRef.current, {
          x: 500,
          rotation: 360,
          duration: 3,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current, // whole section
            start: "top top",            // when section hits top of viewport
            end: "+=1000",               // keep pinned for 1000px of scroll
            pin: true,                   // pin section
            scrub: true,                 // tie animation to scroll
            markers: true,               // debug (remove in production)
          },
        });
      });

      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="min-h-[300vh] font-sans text-gray-800">
      {/* Normal content */}
      <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
        <h1 className="text-4xl font-extrabold mb-3">Scroll to see pinning 👇</h1>
        <p className="text-lg text-gray-600 max-w-xl text-center px-6">
          This first section scrolls normally. Keep scrolling until the blue
          section pins and the box animates.
        </p>
      </section>

      {/* Pinned section */}
      <section
        ref={sectionRef}
        className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200 relative overflow-hidden"
      >
        {/* Decorative diagonal stripe */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-10" preserveAspectRatio="none">
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="#60a5fa" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)" transform="skewX(-12)" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold text-blue-900">Pinned Section</h2>
          <p className="text-sm text-blue-800/80 max-w-lg text-center px-6">
            This whole section will pin to the top of the viewport for 1000px of
            scroll. The box below animates as you scroll.
          </p>

          <div
            ref={boxRef}
            className="w-28 h-28 bg-blue-700 text-white flex items-center justify-center font-bold rounded-lg shadow-2xl"
            style={{ willChange: "transform" }}
          >
            Box
          </div>
        </div>

        {/* subtle floor shadow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 h-4 rounded-full bg-black/6 blur-sm" />
      </section>

      {/* After section */}
      <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-green-200">
        <h1 className="text-3xl font-bold">Pinned section released 👆</h1>
        <p className="text-base text-green-800/80 mt-2">
          After the 1000px of scroll the pinned section unfixes and normal flow
          continues.
        </p>
      </section>
    </div>
  );
}
```

## How it works (summary)
- `trigger: sectionRef.current` — the blue section is the ScrollTrigger trigger.
- `pin: true` — pins the section to the viewport while the trigger is active.
- `end: "+=1000"` — pin remains for 1000px worth of scrolling.
- `scrub: true` — animation progress syncs to scroll position.
- The box translates right (+x) and rotates 360° as you scroll while the section is pinned.
