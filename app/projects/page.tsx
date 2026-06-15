import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, 
  Layers, 
  Compass, 
  Calendar, 
  UserCheck, 
  ShieldCheck,
  FileCheck2,
  Table
} from 'lucide-react';

import ProjectCard from '../../components/ProjectCard';
import MetricCard from '../../components/MetricCard';
import CTASection from '../../components/CTASection';

export const metadata: Metadata = {
  title: 'Flagship Road Project Somalia | GEOMARK',
  description:
    'Our verified flagship project case study: the Afgoye – Baraawe National Trunk Road Corridor (Afgoye–Buulo Mareer section), a 95 km infrastructure corridor.',
};

export default function ProjectsPage() {
  return (
    <div id="projects-page-container">
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex flex-col justify-center overflow-hidden bg-[#1B2430] py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI65pBttd5mdWdMJDdIMvDgvkiM7gF_nw0Qs6JCvGNPupB6KR6zJUEsykmWVmYiDc_xx471Gnpzqxj-7GIb-EzN2XS6wNToXguTMwgAmLKJbEavRwQ_IF68alWZwXFb8HcytZs_nzTGBbBbpppIjCBPYTDXlMXqbJAbdxkNa29Yw4GC_mFzdbjcUxhuzAobxeOjmzm291oD4JrN0ZkjwK90ltJNfs5a-_GmTJdu5InTFkmMLI73kUGoky1AS8OIxOT6YqWPDD56HE"
            alt="Survey corridor layout project background"
            fill
            className="opacity-50 object-cover"
            sizes="100vw"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#5B0617]/85" />
        </div>
        
        <div className="relative z-10 px-6 md:px-12 max-w-[1280px] mx-auto w-full text-white">
          <nav className="flex mb-8 text-white/70 font-mono text-xs uppercase tracking-widest">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Projects</span>
          </nav>
          {/* SEO Required H1 Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold max-w-4xl tracking-tight leading-tight">
            Flagship Road Project Somalia
          </h1>
          <p className="mt-4 font-sans text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
            Case study detailing the geodetic staking, field soil investigations, and CAD alignment files delivered for Somalia&apos;s critical trunk road network.
          </p>
        </div>
      </section>

      {/* DETAILED PROJECT INFO */}
      <section className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto topo-bg" id="project-case-study">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Technical Case study Overview */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs text-[#B22833] uppercase tracking-widest font-bold block">
                NATIONAL CORRIDOR PROJECT CASE
              </span>
              {/* H2 SEO Specific heading */}
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#5B0617]">
                Afgoye – Baraawe National Trunk Road Corridor
              </h2>
              {/* Segments Header */}
              <h3 className="font-sans text-lg font-bold text-[#B22833] tracking-tight">
                Afgoye–Buulo Mareer Section (95 km)
              </h3>
            </div>
            
            <p className="font-sans text-base text-[#564242] leading-relaxed">
              GEOMARK was commissioned to perform comprehensive land and engineering surveying, establish redundant geodetic control loops, and direct geotechnical subsurface boring logs along the 95 km Afgoye – Buulo Mareer section. This segment serves as a major trade and transport connection.
            </p>

            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#1B2430]/10 shadow-lg mt-4">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2WQIySBp0kmChZP-zGVWOILz-sU_LY381469WUPGjq2LDxd0EHQRkndwEct0MZbI6FT3sGBhZLlbX_IVpsEfutm-Amgqd1eP6J7fK-t79MRRbSRrfzmS4eYxfk2g8F5XMCkObsUsKtLSBBtK5WmKF23eX8gynpRH-7yHSCZijkNcL-SDsqnxA6H6-gjFBl5tYNbh16qr3lbVeJ2KHj2hzrpxHmZ7Onc6RyE1ICxwr2mEeiojRPWLQMdgAKFRAJ67ztHt8iXEj5vw"
                alt="Completed asphalt roadway along the corridor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 pt-6">
              <h4 className="font-display text-xl font-bold text-[#5B0617]">Completed Work Scopes</h4>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3 p-4 bg-white border border-[#DCC0C0] rounded-lg">
                  <Compass className="w-5 h-5 text-[#B22833] shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm text-[#5B0617]">1. Geodetic Control Networks</h5>
                    <p className="font-sans text-xs text-[#564242] mt-1">Established dual-frequency GNSS loops with 2cm absolute accuracy bounds.</p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 bg-white border border-[#DCC0C0] rounded-lg">
                  <Layers className="w-5 h-5 text-[#B22833] shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm text-[#5B0617]">2. Subsurface Soil Profiling</h5>
                    <p className="font-sans text-xs text-[#564242] mt-1">Performed boring tests up to bedrock levels in alignment areas.</p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 bg-white border border-[#DCC0C0] rounded-lg">
                  <Table className="w-5 h-5 text-[#B22833] shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm text-[#5B0617]">3. Borrow-Pit Index Logging</h5>
                    <p className="font-sans text-xs text-[#564242] mt-1">Conducted sieve analysis, grain size distributions, and CBR profiling.</p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 bg-white border border-[#DCC0C0] rounded-lg">
                  <FileCheck2 className="w-5 h-5 text-[#B22833] shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm text-[#5B0617]">4. CAD Alignment Delivery</h5>
                    <p className="font-sans text-xs text-[#564242] mt-1">Rendered strip maps and cross-sections formatted in Civil 3D.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Key Details Sidebar card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-[#1B2430]/15 rounded-xl p-6 md:p-8 space-y-6 shadow-sm">
              <h3 className="font-display text-lg font-bold text-[#5B0617] border-b border-[#DCC0C0] pb-3">
                Project Technical Specifications
              </h3>
              
              <ul className="space-y-4 font-mono text-xs text-[#564242]">
                <li className="flex justify-between items-start border-b border-stone-100 pb-3">
                  <span className="text-[#564242]/70 uppercase">Trunk Corridor</span>
                  <span className="font-bold text-right text-[#231919]">Afgoye – Baraawe Highway</span>
                </li>
                <li className="flex justify-between items-start border-b border-stone-100 pb-3">
                  <span className="text-[#564242]/70 uppercase">Active Section</span>
                  <span className="font-bold text-right text-[#231919]">Afgoye–Buulo Mareer Segment</span>
                </li>
                <li className="flex justify-between items-start border-b border-stone-100 pb-3">
                  <span className="text-[#564242]/70 uppercase">Route Length</span>
                  <span className="font-bold text-[#B22833]">95 Kilometers (95 km)</span>
                </li>
                <li className="flex justify-between items-start border-b border-stone-100 pb-3">
                  <span className="text-[#564242]/70 uppercase">Regional Territory</span>
                  <span className="font-bold text-[#231919]">Lower Shabelle Region, SO</span>
                </li>
                <li className="flex justify-between items-start border-b border-stone-100 pb-3">
                  <span className="text-[#564242]/70 uppercase">Client Body</span>
                  <span className="font-bold text-[#231919] text-right">
                    Federal Government of Somalia, Ministry of Public Works
                  </span>
                </li>
                <li className="flex justify-between items-start border-b border-stone-100 pb-3">
                  <span className="text-[#564242]/70 uppercase">Technical Code Compliance</span>
                  <span className="font-bold text-[#006e54]">WGS84 UT-38N // AASHTO</span>
                </li>
              </ul>
              
              <div className="p-4 bg-[#FFF8F7] border border-[#DCC0C0] text-center rounded">
                <span className="text-[10px] text-[#564242]/70 block font-mono">EXEC_VERIFICATION</span>
                <span className="text-xs font-bold text-[#B22833] block mt-1">100% REGULATORY ACCREDITED</span>
              </div>
            </div>

            {/* Sidebar quick stat metric card */}
            <MetricCard
              value="100%"
              label="Field Data Verification"
              sublabel="Zero alignment re-runs required across the entire 95 km footprint."
            />
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />
    </div>
  );
}
