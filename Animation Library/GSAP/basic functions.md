# 🟢 Step 2: GSAP Basics – `to`, `from`, and `timeline`

## 1. `gsap.to()`
Animates from current state → to given values.

```js
gsap.to(boxRef.current, {
  x: 200,
  rotation: 360,
  duration: 2,
});
```

- **Result**: The box moves to `x = 200` and rotates.

---

## 2. `gsap.from()`
Animates from given values → to current state.

```js
gsap.from(boxRef.current, {
  x: -200,
  opacity: 0,
  duration: 2,
});
```

- **Result**: The box starts off-screen (`x = -200`, invisible) and animates back to its normal position.

---

## 3. `gsap.timeline()`
Lets you chain multiple animations in sequence.

```js
const tl = gsap.timeline();

tl.to(boxRef.current, { x: 200, duration: 1 })
  .to(boxRef.current, { y: 100, duration: 1 })
  .to(boxRef.current, { rotation: 360, duration: 1 });
```

- **Result**: The box moves right → moves down → rotates.

---

## Full Example (replace your old `useEffect` with this)
```js
useEffect(() => {
  const tl = gsap.timeline();

  tl.from(boxRef.current, {
    opacity: 0,
    y: -100,
    duration: 1,
  })
    .to(boxRef.current, {
      x: 200,
      duration: 1,
    })
    .to(boxRef.current, {
      rotation: 360,
      duration: 1,
    });
}, []);
```

- ✅ **This makes the box:**  
  _Fade in from top → Slide right → Rotate_ (step by step).
  _One after another_
