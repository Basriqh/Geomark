import React from 'react';
import Link from 'next/link';
import { ArrowRight, PhoneCall } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
}

export default function CTASection({
  title = "Partner with GEOMARK Engineering Consultants",
  description = "Connect with our engineering specialists to receive a detailed technical proposal and project timeline within 48 hours.",
}: CTASectionProps) {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-[#5B0617] text-white">
      <div className="absolute inset-0 opacity-10 pointer-events-none topo-bg" />
      <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10 text-center space-y-8">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
          {title}
        </h2>
        <p className="font-sans text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/contact"
            id="cta-btn-proposal"
            className="bg-white text-[#5B0617] px-10 py-4 font-mono text-xs uppercase tracking-widest hover:bg-[#FFF8F7] active:scale-95 transition-all shadow-xl font-bold inline-flex items-center justify-center gap-2 group btn-arrow-slide"
          >
            Request Proposal
            <ArrowRight className="w-4 h-4 arrow-icon" />
          </Link>
          <Link
            href="/contact"
            id="cta-btn-phone"
            className="border border-white/30 text-white px-10 py-4 font-mono text-xs uppercase tracking-widest hover:bg-white/10 active:scale-95 transition-all inline-flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
