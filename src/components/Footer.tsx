"use client";

import Link from "next/link";
import Image from "next/image";
import { GYM_DETAILS } from "@/data/gymData";
import { ArrowUp, MessageCircle } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1f3568] border-t border-[#182648] pt-20 pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-[#fffbf3]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 mb-16 pb-12 border-b border-white/10">
          {/* Brand Info (5 cols) with Graphic Logo */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm shrink-0 border border-white/20">
                <Image
                  src="/images/logo.svg"
                  alt="Urban Fitness Culture Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display text-2xl font-black uppercase text-[#fffbf3] tracking-tight">
                Urban Fitness Culture
              </span>
            </div>

            <p className="text-sm text-[#eadfc9] font-light leading-relaxed max-w-sm mb-6">
              A standard-setting unisex fitness centre located in Pleasant District, Mira Road East.
              Committed to genuine guidance, spotless hygiene, and progressive weight training.
            </p>

            {/* Social Destination */}
            <div className="flex items-center gap-3">
              <a
                href={GYM_DETAILS.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono-code text-[#fffbf3] hover:text-[#ec633d] transition-all"
              >
                <InstagramIcon className="w-4 h-4 text-[#ec633d]" />
                <span>{GYM_DETAILS.instagram}</span>
              </a>

              <a
                href={`https://wa.me/${GYM_DETAILS.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono-code text-[#fffbf3] hover:text-[#ec633d] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#ec633d]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="md:col-span-3">
            <span className="font-mono-code text-xs uppercase tracking-wider text-[#ec633d] block mb-4 font-bold">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm text-[#eadfc9]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Editorial Services
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Facilities &amp; Amenities
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Hours &amp; Location
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Member Reviews
                </a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-white transition-colors">
                  Membership Enquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact (4 cols) */}
          <div className="md:col-span-4">
            <span className="font-mono-code text-xs uppercase tracking-wider text-[#ec633d] block mb-4 font-bold">
              Facility Location
            </span>
            <address className="not-italic text-sm text-[#eadfc9] space-y-1.5 leading-relaxed mb-4">
              <p className="text-white font-medium">Suite 201, Fitness Boulevard</p>
              <p>Pleasant District, Central Metro Link</p>
              <p>Mira Road East, Mumbai 401107</p>
            </address>

            <div className="space-y-1.5 text-xs font-mono-code text-[#d2cbc0]">
              <p>
                <span className="text-white font-semibold">Phone: </span>
                <a href={GYM_DETAILS.phoneHref} className="hover:text-[#ec633d] transition-colors">
                  {GYM_DETAILS.phone}
                </a>
              </p>
              <p>
                <span className="text-white font-semibold">Mon–Sat: </span>
                6:00 AM – 11:00 PM
              </p>
              <p>
                <span className="text-white font-semibold">Sunday: </span>
                9:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Monolithic Brand Watermark */}
        <div className="py-8 text-center select-none overflow-hidden">
          <span className="font-display text-[11vw] font-black uppercase text-white/[0.05] leading-none tracking-tighter block hover:text-white/[0.08] transition-colors">
            URBAN FITNESS CULTURE
          </span>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs font-mono-code text-[#d2cbc0]">
          <p>
            © 2026 Urban Fitness Culture. Sample Portfolio Edition.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#ec633d] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
