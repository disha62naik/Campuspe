"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import ImageSlot from "@/components/ui/ImageSlot";
import { ASSETS } from "@/lib/assets";
import "./showcase.css";

const SLIDES = [
  { title: "Home" },
  { title: "Post a Job" },
  { title: "Discover" },
  { title: "My Applications" },
  { title: "College Profile" },
];
const COUNT = SLIDES.length;
const AUTOPLAY_MS = 4000;

/** circular offset in the range -2..2 (for 5 slides) */
function position(index, active) {
  const d = (index - active + COUNT) % COUNT;
  return d > COUNT / 2 ? d - COUNT : d;
}

export default function AppShowcase() {
  const [active, setActive] = useState(2);
  const [paused, setPaused] = useState(false);
  const startX = useRef(null);

  const go = useCallback((i) => setActive(((i % COUNT) + COUNT) % COUNT), []);
  const next = useCallback(() => setActive((a) => (a + 1) % COUNT), []);
  const prev = useCallback(() => setActive((a) => (a - 1 + COUNT) % COUNT), []);

  // autoplay (off for reduced-motion users or while hovered / focused)
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  };
  const onPointerDown = (e) => { startX.current = e.clientX; };
  const onPointerUp = (e) => {
    if (startX.current == null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
  };

  return (
    <section className="show section" id="app">
      <div className="show__glow section__glow" aria-hidden="true" />
      <div className="container">
        <header className="show__head">
          <h2>Checkout Our App Interface Look</h2>
          <p>
            Experience the power of a unified campus ecosystem right in your pocket. <strong>CampusPe</strong> offers a
            tailored interface for every user: students can explore trending courses, colleges can showcase their
            campus life, and companies can post job vacancies directly to a pool of qualified candidates.
          </p>
        </header>

        <div
          className="show__stage"
          role="group"
          aria-roledescription="carousel"
          aria-label="CampusPe app screens"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (startX.current = null)}
        >
          {SLIDES.map((s, i) => {
            const pos = position(i, active);
            return (
              <div
                key={s.title}
                className="phone"
                data-pos={pos}
                aria-hidden={pos !== 0}
                onClick={() => go(i)}
              >
                <span className="phone__bezel">
                  <span className="phone__notch" />
                  <span className="phone__screen">
                    <ImageSlot src={ASSETS.appScreens[i]} alt={`${s.title} screen`} label={`${s.title} screen`} className="phone__img" />
                  </span>
                </span>
              </div>
            );
          })}
        </div>

        <div className="show__dots" role="tablist" aria-label="Choose app screen">
          {SLIDES.map((s, i) => (
            <button key={s.title} role="tab" aria-selected={i === active} aria-label={`Go to ${s.title}`}
              className={`show__dot ${i === active ? "is-active" : ""}`} onClick={() => go(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
