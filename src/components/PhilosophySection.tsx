"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Shield, Flame, Users2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface PhilosophyProps {
  onOpenEnquiry: (serviceId?: string) => void;
}

export default function PhilosophySection({ onOpenEnquiry }: PhilosophyProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="scroll-mt-24 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#fdf8f0] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header (Trimmed) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 border-b border-[#a19d94]/30">
          <div>
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#283f7d] font-bold block mb-2">
              // Philosophy
            </span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#212121] leading-[0.92]">
              YOU DON&apos;T HAVE TO <br />
              <span className="text-[#283f7d]">DO IT ALONE.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#5b5b5b] font-medium leading-relaxed">
            Active floor guidance, clean weights, and a culture that respects every rep. No judgment, no crowds.
          </p>
        </div>

        {/* 3 Core Pillars (De-Textified Spec Cards) */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#fffbf3] border border-[#d2cbc0] hover:border-[#283f7d] transition-all duration-300 group shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#eadfc9] border border-[#d2cbc0] flex items-center justify-center text-[#283f7d] mb-5 group-hover:bg-[#283f7d] group-hover:text-[#fffbf3] transition-all">
                <Users2 className="w-5 h-5" />
              </div>
              <span className="font-mono-code text-[11px] text-[#8b8b8b] uppercase tracking-wider block mb-1">
                Pillar 01
              </span>
              <h3 className="font-display text-2xl font-black uppercase text-[#212121] tracking-tight mb-2">
                Unisex &amp; Zero Ego
              </h3>
              <p className="text-xs sm:text-sm text-[#5b5b5b] leading-relaxed">
                Equal respect for beginners and heavy lifters. A safe, focused environment for both men and women.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#d2cbc0]/60 font-mono-code text-[11px] text-[#283f7d] font-bold">
              // INCLUSIVE COMMUNITY
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#fffbf3] border border-[#d2cbc0] hover:border-[#283f7d] transition-all duration-300 group shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#eadfc9] border border-[#d2cbc0] flex items-center justify-center text-[#283f7d] mb-5 group-hover:bg-[#283f7d] group-hover:text-[#fffbf3] transition-all">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-mono-code text-[11px] text-[#8b8b8b] uppercase tracking-wider block mb-1">
                Pillar 02
              </span>
              <h3 className="font-display text-2xl font-black uppercase text-[#212121] tracking-tight mb-2">
                Active Form Correction
              </h3>
              <p className="text-xs sm:text-sm text-[#5b5b5b] leading-relaxed">
                Floor trainers who observe your biomechanics and correct technique. You will never be left guessing.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#d2cbc0]/60 font-mono-code text-[11px] text-[#283f7d] font-bold">
              // COACHING STANDARD
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#fffbf3] border border-[#d2cbc0] hover:border-[#283f7d] transition-all duration-300 group shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#eadfc9] border border-[#d2cbc0] flex items-center justify-center text-[#283f7d] mb-5 group-hover:bg-[#283f7d] group-hover:text-[#fffbf3] transition-all">
                <Flame className="w-5 h-5" />
              </div>
              <span className="font-mono-code text-[11px] text-[#8b8b8b] uppercase tracking-wider block mb-1">
                Pillar 03
              </span>
              <h3 className="font-display text-2xl font-black uppercase text-[#212121] tracking-tight mb-2">
                Spotless Iron &amp; AC
              </h3>
              <p className="text-xs sm:text-sm text-[#5b5b5b] leading-relaxed">
                Maintained air conditioning, orderly dumbbell racks, clean showers, and restorative steam care.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#d2cbc0]/60 font-mono-code text-[11px] text-[#283f7d] font-bold">
              // HYGIENE &amp; RECOVERY
            </div>
          </div>
        </div>

        {/* Blueprint Callout Box (Trimmed) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#283f7d] border border-[#1f3568] flex flex-col sm:flex-row items-center justify-between gap-6 text-[#fffbf3] shadow-lg">
          <div>
            <span className="font-mono-code text-[11px] uppercase tracking-widest text-[#ec633d] font-bold block mb-1">
              // Free Trial Session Available
            </span>
            <h4 className="font-display text-xl sm:text-2xl font-black uppercase text-[#fffbf3] tracking-tight">
              &quot;Consistently showing up beats sporadic intensity.&quot;
            </h4>
          </div>

          <button
            onClick={() => onOpenEnquiry()}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ec633d] hover:bg-[#fffbf3] text-white hover:text-[#283f7d] font-display text-sm font-black uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            <span>Ask About Trial Session</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
