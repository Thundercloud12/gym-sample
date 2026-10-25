"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SERVICES } from "@/data/gymData";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ServicesGridProps {
  onOpenEnquiry: (serviceId?: string) => void;
}

export default function ServicesGrid({ onOpenEnquiry }: ServicesGridProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const trigger = triggerRef.current;

      if (!track || !trigger) return;

      // Only enable pinned horizontal scrub on desktop/tablet (width >= 768px)
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const getScrollDistance = () => track.scrollWidth - window.innerWidth + 120;

        gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            start: "top top",
            end: () => `+=${getScrollDistance() * 1.15}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const idx = Math.min(SERVICES.length - 1, Math.floor(progress * SERVICES.length));
              setActiveCard(idx);
            },
          },
        });
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} id="services" className="scroll-mt-24 relative bg-[#eadfc9]/30 border-y border-[#d2cbc0]">
      {/* Pinned Viewport Container (h-screen on desktop, pt-24 pb-16 on mobile) */}
      <div className="min-h-screen md:h-screen w-full flex flex-col justify-center pt-24 pb-16 md:py-0 overflow-hidden">
        {/* Sticky Header Section */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#a19d94]/30">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#ec633d]"></span>
                <span className="font-mono-code text-xs uppercase tracking-widest text-[#283f7d] font-bold">
                  // Horizontal Lookbook
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#212121] leading-none">
                WHAT WE BUILD <span className="text-[#283f7d]">ON THE FLOOR.</span>
              </h2>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono-code text-[#5b5b5b]">
              <span className="hidden md:inline">
                Scroll to slide across disciplines ({SERVICES.length})
              </span>
              <span className="px-3 py-1 rounded-full bg-[#fffbf3] border border-[#d2cbc0] font-bold text-[#283f7d]">
                0{activeCard + 1} / 0{SERVICES.length}
              </span>
            </div>
          </div>
        </div>

        {/* Horizontal Track (Scrubbed horizontally by GSAP on desktop, native swipe on mobile) */}
        <div className="w-full overflow-x-auto md:overflow-visible no-scrollbar px-4 sm:px-6 lg:px-8">
          <div
            ref={trackRef}
            className="flex gap-6 sm:gap-8 will-change-transform w-max md:w-max pb-4 md:pb-0"
          >
            {SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className="relative w-[85vw] sm:w-[460px] lg:w-[500px] h-[480px] sm:h-[520px] rounded-3xl overflow-hidden group border border-[#d2cbc0] hover:border-[#283f7d] transition-all duration-500 flex flex-col justify-between p-7 sm:p-8 shrink-0 shadow-lg bg-[#1f3568]"
              >
                {/* Background Photography with Blueprint Depth Tint */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="500px"
                    className="object-cover object-center filter brightness-[0.45] contrast-[1.1] group-hover:brightness-[0.55] group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Subtle Blueprint Indigo Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f3568]/95 via-[#1f3568]/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-[#212121]/60 via-transparent to-transparent"></div>
                </div>

                {/* Card Top: Number Index & Category Badge */}
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span className="font-mono-code text-sm font-bold text-[#fffbf3] px-3.5 py-1 rounded-full bg-[#283f7d] border border-[#fffbf3]/20 shadow-sm">
                    {service.number}
                  </span>
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#212121] px-3 py-1 rounded-full bg-[#fffbf3] border border-[#d2cbc0] shadow-sm font-semibold">
                    {service.category}
                  </span>
                </div>

                {/* Card Bottom: De-Textified Visual Spec */}
                <div className="relative z-10">
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#fffbf3] tracking-tight leading-[0.95] mb-2 group-hover:text-[#ec633d] transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-mono-code text-xs text-[#ec633d] uppercase tracking-wider mb-3 font-semibold">
                    {service.subtitle}
                  </p>

                  {/* Clean keyword pills (replacing long paragraphs) */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono-code text-[#fffbf3] px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* One-click Action Button */}
                  <button
                    onClick={() => onOpenEnquiry(service.id)}
                    className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-3 px-5 py-2.5 rounded-full bg-[#fffbf3] hover:bg-[#ec633d] text-[#283f7d] hover:text-white border border-[#fffbf3] shadow-md transition-all duration-300 font-mono-code text-xs font-bold uppercase tracking-wider group/btn cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-3.5 h-3.5 text-[#283f7d] group-hover/btn:text-white" />
                      Enquire for this
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Horizontal Progress Indicator (Desktop) */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-6 hidden md:block">
          <div className="w-full h-1 bg-[#d2cbc0] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#283f7d] transition-all duration-300 rounded-full"
              style={{ width: `${((activeCard + 1) / SERVICES.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
