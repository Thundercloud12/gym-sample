"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { GYM_DETAILS } from "@/data/gymData";
import { ArrowUpRight, MapPin, Star, Phone } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HeroProps {
  onOpenEnquiry: (serviceId?: string) => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const bgImgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (bgImgRef.current && heroRef.current) {
        gsap.to(bgImgRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll(".hero-line");
        gsap.fromTo(
          lines,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.12,
            ease: "power3.out",
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] sm:min-h-screen flex items-end justify-start pt-36 sm:pt-40 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-drafting-grid"
    >
      {/* Background Hero Image with Subtle Parallax & Blueprint Overlay */}
      <div ref={bgImgRef} className="absolute inset-0 z-0 will-change-transform">
        <Image
          src="/images/hero.jpg"
          alt="Urban Fitness Culture gym floor"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter contrast-[1.1] mix-blend-multiply opacity-25 scale-105"
        />
        {/* Paper & Drafting Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#eadfc9] via-[#eadfc9]/75 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#eadfc9] via-[#eadfc9]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(40,63,125,0.06),transparent_55%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Architectural Drafting Coordinates & Badges */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fffbf3] border border-[#a19d94]/40 text-xs font-mono-code text-[#373737] uppercase tracking-wider shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ec633d]"></span>
            <span>Unisex Fitness Centre</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fffbf3] border border-[#ec633d]/40 text-xs font-mono-code text-[#ec633d] uppercase tracking-wider shadow-sm font-semibold">
            <Star className="w-3.5 h-3.5 fill-[#ec633d]" />
            <span>4.6 / 5.0 Rating · 150+ Reviews</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fffbf3] border border-[#d2cbc0] text-xs font-mono-code text-[#5b5b5b] uppercase tracking-wider shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#283f7d]" />
            <span>Pleasant District · Metro Link</span>
          </div>

          <div className="hidden lg:inline-flex items-center px-3 py-1.5 rounded font-mono-code text-[11px] text-[#8b8b8b] uppercase tracking-widest">
            X 19.28° N · Y 72.86° E
          </div>
        </div>

        {/* Big Architectural Poster Headline (De-Textified) */}
        <div className="max-w-5xl">
          <h1
            ref={headlineRef}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black uppercase tracking-tight text-[#212121] leading-[0.88] mb-6 sm:mb-8"
          >
            <span className="hero-line block text-[#212121]">COMMUNITY FIRST.</span>
            <span className="hero-line block text-[#283f7d]">REAL GROWTH.</span>
            <span className="hero-line block text-[#373737]">ZERO GIMMICKS.</span>
          </h1>

          <p className="max-w-xl text-base sm:text-lg text-[#5b5b5b] font-normal leading-relaxed mb-8 sm:mb-10">
            Built for progressive overload, verified recovery, and uncompromising daily consistency.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-12">
            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#283f7d] text-[#fffbf3] font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-[#1f3568] transition-all duration-300 shadow-xl shadow-[#283f7d]/20 group cursor-pointer"
            >
              <span>Enquire About Membership</span>
              <div className="w-9 h-9 rounded-full bg-[#ec633d] text-white flex items-center justify-center transition-all duration-300 group-hover:bg-[#fffbf3] group-hover:text-[#283f7d] group-hover:rotate-45">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </button>

            <a
              href={GYM_DETAILS.phoneHref}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#fffbf3] hover:bg-[#e5d6bc] border border-[#a19d94]/40 text-[#212121] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#283f7d]" />
              <span>Call {GYM_DETAILS.phone}</span>
            </a>

            <a
              href={GYM_DETAILS.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-transparent hover:bg-[#fffbf3]/60 border border-[#a19d94]/50 text-[#373737] hover:text-[#212121] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300"
            >
              <MapPin className="w-4 h-4 text-[#ec633d]" />
              <span>Directions</span>
            </a>
          </div>

          {/* Proof Strip in Paper Ivory */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-[#a19d94]/40">
            <div className="p-3 sm:p-4 rounded-xl bg-[#fffbf3] border border-[#d2cbc0] shadow-sm">
              <span className="block font-mono-code text-[11px] uppercase tracking-wider text-[#8b8b8b] mb-1">
                Rating
              </span>
              <span className="font-display text-2xl sm:text-3xl font-black text-[#212121]">
                4.6 <span className="text-[#ec633d]">★</span>
              </span>
              <span className="block text-xs text-[#5b5b5b] font-mono-code mt-0.5">
                150+ Reviews
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-[#fffbf3] border border-[#d2cbc0] shadow-sm">
              <span className="block font-mono-code text-[11px] uppercase tracking-wider text-[#8b8b8b] mb-1">
                Hours
              </span>
              <span className="font-display text-2xl sm:text-3xl font-black text-[#212121]">
                17 HRS<span className="text-[#283f7d]">/DAY</span>
              </span>
              <span className="block text-xs text-[#5b5b5b] font-mono-code mt-0.5">
                Mon–Sat 6AM–11PM
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-[#fffbf3] border border-[#d2cbc0] shadow-sm">
              <span className="block font-mono-code text-[11px] uppercase tracking-wider text-[#8b8b8b] mb-1">
                Location
              </span>
              <span className="font-display text-2xl sm:text-3xl font-black text-[#212121] truncate block">
                METRO LINK
              </span>
              <span className="block text-xs text-[#5b5b5b] font-mono-code mt-0.5">
                Central Pleasant District
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-[#fffbf3] border border-[#d2cbc0] shadow-sm">
              <span className="block font-mono-code text-[11px] uppercase tracking-wider text-[#8b8b8b] mb-1">
                Disciplines
              </span>
              <span className="font-display text-2xl sm:text-3xl font-black text-[#212121]">
                05 SPECIALTIES
              </span>
              <span className="block text-xs text-[#5b5b5b] font-mono-code mt-0.5">
                Iron · Cardio · Steam · Yoga
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
