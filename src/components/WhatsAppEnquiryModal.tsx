"use client";

import { useState, useEffect } from "react";
import { GYM_DETAILS, SERVICES } from "@/data/gymData";
import { X, MessageCircle } from "lucide-react";
import confetti from "canvas-confetti";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

const GOALS = [
  "Weight Training & Muscle Gain",
  "Personal 1-on-1 Coaching",
  "Express 30-Min High Intensity",
  "Fat Loss & Nutrition Planning",
  "General Fitness & Wellness",
];

const DURATIONS = [
  "Trial Session First",
  "Monthly Plan",
  "Quarterly (3 Months)",
  "Half-Yearly (6 Months)",
  "Annual Plan",
];

export default function WhatsAppEnquiryModal({
  isOpen,
  onClose,
  initialServiceId,
}: WhatsAppModalProps) {
  const [selectedGoal, setSelectedGoal] = useState<string>(GOALS[0]);
  const [selectedDuration, setSelectedDuration] = useState<string>(DURATIONS[0]);
  const [askTrial, setAskTrial] = useState(true);
  const [askOffers, setAskOffers] = useState(true);

  useEffect(() => {
    if (initialServiceId) {
      const match = SERVICES.find((s) => s.id === initialServiceId);
      if (match) {
        if (initialServiceId === "weight-training") setSelectedGoal(GOALS[0]);
        else if (initialServiceId === "personal-training") setSelectedGoal(GOALS[1]);
        else if (initialServiceId === "express-workouts") setSelectedGoal(GOALS[2]);
        else if (initialServiceId === "nutrition-counselling") setSelectedGoal(GOALS[3]);
        else if (initialServiceId === "lifestyle-coaching") setSelectedGoal(GOALS[4]);
      }
    }
  }, [initialServiceId]);

  if (!isOpen) return null;

  const extraInquiries = [];
  if (askTrial) extraInquiries.push("trial workout availability");
  if (askOffers) extraInquiries.push("current joining offers & discounts");

  const extrasText =
    extraInquiries.length > 0 ? ` Could you also share details on ${extraInquiries.join(" and ")}?` : "";

  const whatsappMessage = `Hi! I saw your website and would like to enquire about membership options for *${selectedGoal}* (Preferred term: *${selectedDuration}*).${extrasText} Looking forward to your reply!`;

  const whatsappUrl = `https://wa.me/${GYM_DETAILS.phoneRaw}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleLaunch = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#283f7d", "#ec633d", "#eadfc9"],
      });
    } catch {
      // ignore
    }

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl rounded-3xl bg-[#fffbf3] border border-[#d2cbc0] p-6 sm:p-8 shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-[#d2cbc0]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#ec633d] animate-pulse"></span>
              <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#283f7d] font-bold">
                Fast Enquiry · Direct to WhatsApp
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#212121] tracking-tight">
              Membership &amp; Coaching Tariff
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#eadfc9]/60 hover:bg-[#eadfc9] text-[#212121] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step 1: Select Your Goal */}
        <div className="mb-5">
          <label className="block font-mono-code text-xs uppercase tracking-wider text-[#5b5b5b] mb-2.5 font-bold">
            1. Select Your Primary Goal:
          </label>
          <div className="flex flex-wrap gap-2">
            {GOALS.map((goal) => (
              <button
                key={goal}
                type="button"
                onClick={() => setSelectedGoal(goal)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono-code transition-all cursor-pointer ${
                  selectedGoal === goal
                    ? "bg-[#283f7d] text-[#fffbf3] font-bold shadow-sm"
                    : "bg-[#eadfc9]/40 text-[#373737] hover:bg-[#eadfc9] border border-[#d2cbc0]"
                }`}
              >
                {goal}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Select Duration */}
        <div className="mb-5">
          <label className="block font-mono-code text-xs uppercase tracking-wider text-[#5b5b5b] mb-2.5 font-bold">
            2. Preferred Duration / Term:
          </label>
          <div className="flex flex-wrap gap-2">
            {DURATIONS.map((dur) => (
              <button
                key={dur}
                type="button"
                onClick={() => setSelectedDuration(dur)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono-code transition-all cursor-pointer ${
                  selectedDuration === dur
                    ? "bg-[#283f7d] text-[#fffbf3] font-bold shadow-sm"
                    : "bg-[#eadfc9]/40 text-[#5b5b5b] hover:bg-[#eadfc9] border border-[#d2cbc0]"
                }`}
              >
                {dur}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Checkboxes */}
        <div className="mb-6 space-y-2">
          <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[#373737]">
            <input
              type="checkbox"
              checked={askTrial}
              onChange={(e) => setAskTrial(e.target.checked)}
              className="w-4 h-4 rounded bg-[#fffbf3] border-[#a19d94] text-[#283f7d] focus:ring-0 accent-[#283f7d]"
            />
            <span>Ask for a Free / Trial Workout Session</span>
          </label>
          <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[#373737]">
            <input
              type="checkbox"
              checked={askOffers}
              onChange={(e) => setAskOffers(e.target.checked)}
              className="w-4 h-4 rounded bg-[#fffbf3] border-[#a19d94] text-[#283f7d] focus:ring-0 accent-[#283f7d]"
            />
            <span>Ask for current seasonal offers and discounted plans</span>
          </label>
        </div>

        {/* Live Message Preview */}
        <div className="mb-6 p-4 rounded-xl bg-[#eadfc9]/40 border border-[#d2cbc0]">
          <span className="block font-mono-code text-[10px] uppercase tracking-wider text-[#283f7d] mb-1.5 font-bold">
            Live WhatsApp Message Preview:
          </span>
          <p className="text-xs text-[#212121] font-mono-code leading-relaxed bg-[#fffbf3] p-3 rounded-lg border border-[#d2cbc0]">
            &quot;{whatsappMessage}&quot;
          </p>
        </div>

        {/* CTA Launch Button in Blueprint Indigo */}
        <div className="space-y-2.5">
          <button
            onClick={handleLaunch}
            className="w-full py-4 rounded-2xl bg-[#283f7d] hover:bg-[#1f3568] text-[#fffbf3] font-display text-xl font-black uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-[#283f7d]/20 cursor-pointer"
          >
            <MessageCircle className="w-6 h-6 text-[#ec633d]" />
            <span>Open in WhatsApp ({GYM_DETAILS.phone})</span>
          </button>

          <p className="text-[11px] font-mono-code text-[#5b5b5b] text-center">
            Opens directly in your WhatsApp app or WhatsApp Web with prefilled message.
          </p>
        </div>
      </div>
    </div>
  );
}
