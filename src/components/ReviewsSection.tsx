"use client";

import { useEffect, useRef } from "react";
import { REVIEWS } from "@/data/gymData";
import { Star, ShieldCheck, Quote } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ReviewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (containerRef.current) {
        const cards = containerRef.current.children;
        gsap.fromTo(
          cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="reviews" className="scroll-mt-24 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#1f3568] text-[#fffbf3] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/15">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ec633d]"></span>
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#eadfc9] font-bold">
                // Member Feedback
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#fffbf3] leading-none">
              NOT OUR WORDS. <span className="text-[#ec633d]">BUT THEIRS.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-[#ec633d]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#ec633d]" />
              ))}
            </div>
            <span className="font-display text-2xl font-black text-[#fffbf3]">4.6 / 5.0</span>
            <span className="text-xs font-mono-code text-[#eadfc9]/80 hidden sm:inline">
              (152+ Verified Google Reviews)
            </span>
          </div>
        </div>

        {/* 3 Review Cards Staggered in Height */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4 pb-10">
          {REVIEWS.map((review, index) => (
            <div
              key={review.id}
              className={`flex flex-col ${
                index === 0
                  ? "md:-mt-6"
                  : index === 1
                  ? "md:mt-6"
                  : "md:-mt-1"
              }`}
            >
              <div
                className="h-full p-7 sm:p-8 rounded-3xl bg-[#fffbf3] border-2 border-[#d2cbc0] hover:border-[#283f7d] hover:ring-4 hover:ring-[#3b60c5]/40 transition-all duration-300 hover:scale-105 hover:z-10 relative flex flex-col justify-between group shadow-lg hover:shadow-2xl cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-1 text-[#ec633d]">
                      {[...Array(review.rating)].map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-[#ec633d]" />
                      ))}
                    </div>

                    <span className="font-mono-code text-[11px] text-[#5b5b5b] px-2.5 py-0.5 rounded-full bg-[#eadfc9]/60 border border-[#d2cbc0] font-medium">
                      {review.source}
                    </span>
                  </div>

                  <span className="inline-block text-[11px] font-mono-code uppercase tracking-wider text-[#283f7d] mb-2 font-bold">
                    {review.tag}
                  </span>

                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-[#212121] tracking-tight leading-snug mb-3 group-hover:text-[#283f7d] transition-colors">
                    &quot;{review.highlight}&quot;
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5b5b5b] leading-relaxed mb-6 font-light">
                    {review.text}
                  </p>
                </div>

                {/* Author Footer */}
                <div className="pt-4 border-t border-[#d2cbc0] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#283f7d] text-[#fffbf3] font-display text-xs font-bold flex items-center justify-center">
                      {review.author[0]}
                    </div>
                    <span className="text-xs font-bold text-[#212121]">
                      {review.author}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-mono-code text-[#283f7d] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#ec633d]" />
                    <span>Public Listing</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
