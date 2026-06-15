import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Globe, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#7A1F2B] text-white pt-16 pb-8 relative overflow-hidden border-t border-[#FFF8F7]/10">
      {/* Topo lines decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none topo-bg" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 px-6 md:px-12 max-w-[1280px] mx-auto pb-12 border-b border-white/10">
        
        {/* Column 1: Brand & Desc */}
        <div className="lg:col-span-4 space-y-6">
          <Link href="/" id="ftr-brand-link" className="block max-w-[210px] hover:opacity-90 transition-opacity">
            <div className="inline-block bg-white px-4 py-2.5 rounded-md border border-[#FFF8F7]/10 mb-1 shadow-sm">
              <Image
                src="/geomark-logo.svg"
                alt="GEOMARK Engineering Consultants Logo"
                width={160}
                height={36}
                className="object-contain"
              />
            </div>
          </Link>
          <p className="text-white/80 font-sans text-sm leading-relaxed max-w-sm">
            GEOMARK provides professional land surveying, geotechnical investigation, materials testing, and engineering documentation services for infrastructure development in Somalia.
          </p>
          <div className="pt-2 font-mono text-[10px] text-[#FE6065] tracking-wider uppercase font-semibold">
            Specialized Engineering Services // Mogadishu, Somalia
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#FFF8F7]/75 font-semibold">
            Services
          </h4>
          <ul className="space-y-3 font-sans text-sm text-white/70">
            <li>
              <Link href="/services#land-surveying" id="ftr-srv-survey" className="hover:text-[#FE6065] hover:underline transition-all">
                Land Surveying
              </Link>
            </li>
            <li>
              <Link href="/services#geotechnical" id="ftr-srv-geotech" className="hover:text-[#FE6065] hover:underline transition-all">
                Geotechnical
              </Link>
            </li>
            <li>
              <Link href="/services#design-docs" id="ftr-srv-design" className="hover:text-[#FE6065] hover:underline transition-all">
                Engineering Design
              </Link>
            </li>
            <li>
              <Link href="/services#supporting-services" id="ftr-srv-testing" className="hover:text-[#FE6065] hover:underline transition-all">
                Materials Testing
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#FFF8F7]/75 font-semibold">
            Company
          </h4>
          <ul className="space-y-3 font-sans text-sm text-white/70">
            <li>
              <Link href="/about" id="ftr-cmp-about" className="hover:text-[#FE6065] hover:underline transition-all">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/projects" id="ftr-cmp-projects" className="hover:text-[#FE6065] hover:underline transition-all">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" id="ftr-cmp-contact" className="hover:text-[#FE6065] hover:underline transition-all">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/contact" id="ftr-cmp-proposal" className="font-medium text-[#FE6065] hover:underline flex items-center gap-1">
                Request Proposal <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact details */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#FFF8F7]/75 font-semibold">
            Contact
          </h4>
          <ul className="space-y-4 font-sans text-sm text-white/80">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-white/60 shrink-0 mt-0.5" />
              <span>Office 410, Qalab-xor Tower, Digfeer Street, Mogadishu, Somalia</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white/60 shrink-0" />
              <a href="tel:+252611548569" className="hover:underline">+252 611 548 569</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-white/60 shrink-0" />
              <a href="mailto:info@geomark.so" className="hover:underline">info@geomark.so</a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-white/60 shrink-0" />
              <a href="https://www.geomark.so" target="_blank" rel="noopener noreferrer" className="hover:underline">www.geomark.so</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal / Copyright Section */}
      <div className="relative z-10 pt-8 px-6 md:px-12 max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60 font-mono">
        <div>
          © {currentYear} GEOMARK Engineering Consultants. All Rights Reserved.
        </div>
        <div className="flex gap-6 uppercase">
          <Link href="#" id="ftr-legal-privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" id="ftr-legal-terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
