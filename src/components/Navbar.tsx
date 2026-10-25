"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { GYM_DETAILS, getLiveGymStatus } from "@/data/gymData";
import { MessageCircle, Menu, X, ArrowUpRight, Phone } from "lucide-react";

interface NavbarProps {
  onOpenEnquiry: (serviceId?: string) => void;
}

const DEFAULT_STATUS = {
  isOpen: true,
  statusText: "Open Mon–Sat 6:00 AM – 11:00 PM",
  badgeColor: "bg-[#ec633d]",
  timeStringIST: "IST",
  weekday: "Today",
};

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [status, setStatus] = useState(DEFAULT_STATUS);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setStatus(getLiveGymStatus());
    const interval = setInterval(() => {
      setStatus(getLiveGymStatus());
    }, 30000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#fffbf3]/95 backdrop-blur-md border-b border-[#a19d94]/30 shadow-sm py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Identity with Logo Image */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm shrink-0 border border-[#283f7d]/30 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/logo.svg"
                  alt="Urban Fitness Culture Logo"
                  width={40}
                  height={40}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-display text-lg sm:text-xl font-black uppercase tracking-tight leading-tight transition-colors ${
                    scrolled
                      ? "text-[#212121] group-hover:text-[#283f7d]"
                      : "text-white group-hover:text-[#ec633d] drop-shadow"
                  }`}
                >
                  Urban Fitness Culture
                </span>
                <span
                  className={`font-mono-code text-[10px] tracking-wider uppercase transition-colors ${
                    scrolled ? "text-[#8b8b8b]" : "text-white/75 drop-shadow-sm"
                  }`}
                >
                  Pleasant District · Mira Road East
                </span>
              </div>
            </Link>

            {/* Live Status Pill (Desktop) */}
            <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fffbf3] border border-[#d2cbc0] shadow-sm">
              <span className="relative flex h-2 w-2">
                {status.isOpen && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ec633d] opacity-75"></span>
                )}
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    status.isOpen ? "bg-[#ec633d]" : "bg-[#8b8b8b]"
                  }`}
                ></span>
              </span>
              <span className="text-xs font-mono-code text-[#373737] font-semibold">
                {status.statusText}
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <nav
              className={`hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-semibold transition-colors ${
                scrolled ? "text-[#5b5b5b]" : "text-white/90 drop-shadow"
              }`}
            >
              <a
                href="#services"
                className={`transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#ec633d] after:transition-all ${
                  scrolled ? "hover:text-[#283f7d]" : "hover:text-white"
                }`}
              >
                Services
              </a>
              <a
                href="#facilities"
                className={`transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#ec633d] after:transition-all ${
                  scrolled ? "hover:text-[#283f7d]" : "hover:text-white"
                }`}
              >
                Facilities
              </a>
              <a
                href="#location"
                className={`transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#ec633d] after:transition-all ${
                  scrolled ? "hover:text-[#283f7d]" : "hover:text-white"
                }`}
              >
                Hours & Location
              </a>
              <a
                href="#reviews"
                className={`transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#ec633d] after:transition-all ${
                  scrolled ? "hover:text-[#283f7d]" : "hover:text-white"
                }`}
              >
                Reviews
              </a>
            </nav>

            {/* CTA Buttons in Blueprint Indigo & Terracotta */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* WhatsApp Quick Button */}
              <a
                href={`https://wa.me/${GYM_DETAILS.phoneRaw}?text=${encodeURIComponent(
                  "Hi! I would like to enquire about memberships and coaching options."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-10 h-10 rounded-full bg-[#fffbf3] border border-[#283f7d]/30 text-[#283f7d] hover:border-[#283f7d] hover:bg-[#283f7d]/10 flex items-center justify-center transition-all duration-300 group shadow-sm"
              >
                <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 text-[#283f7d]" />
              </a>

              {/* Primary Blueprint Pill Action Button */}
              <button
                onClick={() => onOpenEnquiry()}
                className="inline-flex items-center gap-2.5 pl-4 sm:pl-5 pr-1.5 py-1.5 rounded-full bg-[#283f7d] text-[#fffbf3] font-semibold text-xs uppercase tracking-wider hover:bg-[#1f3568] transition-all duration-300 group shadow-md shadow-[#283f7d]/20 cursor-pointer"
              >
                <span className="hidden sm:inline">Enquire Now</span>
                <span className="sm:hidden">Enquire</span>
                <div className="w-7 h-7 rounded-full bg-[#ec633d] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[#fffbf3] group-hover:text-[#283f7d]">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="md:hidden w-10 h-10 rounded-full bg-[#fffbf3] border border-[#d2cbc0] flex items-center justify-center text-[#212121] hover:bg-[#eadfc9] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#fdf8f0]/98 backdrop-blur-xl md:hidden pt-24 px-6 pb-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="pb-4 border-b border-[#a19d94]/30">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`inline-block w-2 h-2 rounded-full ${
                    status.isOpen ? "bg-[#ec633d] animate-pulse" : "bg-[#8b8b8b]"
                  }`}
                />
                <span className="font-mono-code text-xs text-[#283f7d] font-semibold">
                  {status.statusText}
                </span>
              </div>
              <p className="font-mono-code text-xs text-[#5b5b5b]">
                Suite 201, Fitness Boulevard, Pleasant District
              </p>
            </div>

            <nav className="flex flex-col space-y-4 font-display text-3xl font-black uppercase tracking-tight text-[#212121]">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#283f7d] transition-colors flex items-center justify-between"
              >
                <span>Services (05)</span>
                <span className="font-mono-code text-sm text-[#8b8b8b]">01</span>
              </a>
              <a
                href="#facilities"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#283f7d] transition-colors flex items-center justify-between"
              >
                <span>Facilities & Amenities</span>
                <span className="font-mono-code text-sm text-[#8b8b8b]">02</span>
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#283f7d] transition-colors flex items-center justify-between"
              >
                <span>Opening Hours & Maps</span>
                <span className="font-mono-code text-sm text-[#8b8b8b]">03</span>
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#283f7d] transition-colors flex items-center justify-between"
              >
                <span>Member Reviews</span>
                <span className="font-mono-code text-sm text-[#8b8b8b]">04</span>
              </a>
              <a
                href="#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#283f7d] transition-colors flex items-center justify-between"
              >
                <span>Common Questions</span>
                <span className="font-mono-code text-sm text-[#8b8b8b]">05</span>
              </a>
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#a19d94]/30">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-4 rounded-xl bg-[#283f7d] text-[#fffbf3] font-display text-xl font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1f3568] transition-all shadow-lg shadow-[#283f7d]/20"
            >
              <MessageCircle className="w-5 h-5 text-[#ec633d]" />
              <span>Enquire on WhatsApp</span>
            </button>

            <a
              href={GYM_DETAILS.phoneHref}
              className="w-full py-3.5 rounded-xl bg-[#fffbf3] border border-[#d2cbc0] text-[#212121] font-mono-code text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#eadfc9] transition-all"
            >
              <Phone className="w-4 h-4 text-[#283f7d]" />
              <span>Call: {GYM_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
