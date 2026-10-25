"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0.01 : 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.4,
    });
    lenisRef.current = lenis;

    // Connect Lenis scroll events to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Connect GSAP ticker to Lenis RAF for unified, lag-free clock
    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    // Smooth internal anchor scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement, {
            offset: -80,
            duration: 1.2,
          });
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      gsap.ticker.remove(updateRaf);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <div className="smooth-scroll-wrapper">{children}</div>;
}
