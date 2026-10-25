"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import PhilosophySection from "@/components/PhilosophySection";
import ServicesGrid from "@/components/ServicesGrid";
import FacilitiesSection from "@/components/FacilitiesSection";
import LocationHoursPanel from "@/components/LocationHoursPanel";
import ReviewsSection from "@/components/ReviewsSection";
import EnquirySection from "@/components/EnquirySection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FloatingActionBar from "@/components/FloatingActionBar";
import WhatsAppEnquiryModal from "@/components/WhatsAppEnquiryModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setModalOpen(false);
    setSelectedServiceId(undefined);
  };

  return (
    <div className="min-h-screen bg-[#fdf8f0] text-[#212121] relative selection:bg-[#283f7d] selection:text-[#fffbf3]">
      {/* Navigation Bar */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      <main id="main">
        {/* Hero Section */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* Marquee Ticker */}
        <MarqueeTicker />

        {/* Philosophy & Culture ("You don't have to do it alone") */}
        <PhilosophySection onOpenEnquiry={handleOpenEnquiry} />

        {/* Editorial Photo Grid of Services (01 to 05) */}
        <ServicesGrid onOpenEnquiry={handleOpenEnquiry} />

        {/* Facilities & Amenities */}
        <FacilitiesSection onOpenEnquiry={handleOpenEnquiry} />

        {/* Location & Opening Hours Panel */}
        <LocationHoursPanel onOpenEnquiry={handleOpenEnquiry} />

        {/* Reviews & Social Proof */}
        <ReviewsSection />

        {/* Interactive WhatsApp Membership Enquiry Section */}
        <EnquirySection />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Action Bar */}
      <FloatingActionBar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* WhatsApp Enquiry Slide-over / Modal */}
      <WhatsAppEnquiryModal
        isOpen={modalOpen}
        onClose={handleCloseEnquiry}
        initialServiceId={selectedServiceId}
      />
    </div>
  );
}
