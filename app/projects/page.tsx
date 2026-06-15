import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Layers,
  Compass,
  FileCheck2,
  Table
} from 'lucide-react';

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
            src="/Images/dual-gnss-setup.jpg"
            alt="GEOMARK engineers with dual GNSS stations on road corridor survey"
            fill
            priority
            className="opacity-50 object-cover"
            sizes="100vw"
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
                src="/Images/supervisor-gnss-rover.jpg"
                alt="GEOMARK supervisor engineer with GNSS rover on Afgoye–Baraawe corridor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
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

      {/* FIELD SITE PHOTOGRAPHY */}
      <section className="py-24 bg-[#FFF8F7] border-t border-[#1B2430]/10">
        <div className="px-6 md:px-12 max-w-[1280px] mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B22833] font-bold">
              FIELD DOCUMENTATION
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#5B0617]">
              On-Site Photography
            </h2>
            <div className="w-20 h-1 bg-[#5B0617] mx-auto" />
            <p className="font-sans text-sm text-[#564242] max-w-2xl mx-auto leading-relaxed pt-2">
              Documentation captured during geodetic staking, geotechnical boring, and materials survey operations along the Afgoye – Baraawe corridor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Photo 1: team wide corridor */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-[#1B2430]/10 img-zoom-container group">
              <Image
                src="/Images/team-gnss-corridor.jpg"
                alt="GEOMARK team with GNSS rover on the Afgoye–Baraawe corridor"
                fill
                className="object-cover img-zoom-element"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-mono text-[10px] text-white uppercase tracking-widest">Corridor GNSS Setup</p>
              </div>
            </div>

            {/* Photo 2: GNSS base station */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-[#1B2430]/10 img-zoom-container group">
              <Image
                src="/Images/gnss-base-setup.jpg"
                alt="Engineer setting up GNSS RTK base station for road corridor control"
                fill
                className="object-cover img-zoom-element"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-mono text-[10px] text-white uppercase tracking-widest">GNSS RTK Base Station</p>
              </div>
            </div>

            {/* Photo 3: optical level survey */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-[#1B2430]/10 img-zoom-container group">
              <Image
                src="/Images/optical-level-survey.jpg"
                alt="GEOMARK engineer using AL24 optical level for precise elevation survey"
                fill
                className="object-cover img-zoom-element"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-mono text-[10px] text-white uppercase tracking-widest">Precision Levelling Operations</p>
              </div>
            </div>

            {/* Photo 4: team discussion */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-[#1B2430]/10 img-zoom-container group">
              <Image
                src="/Images/team-discussion.jpg"
                alt="GEOMARK field engineering team coordination at GNSS station"
                fill
                className="object-cover img-zoom-element"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-mono text-[10px] text-white uppercase tracking-widest">Team Field Coordination</p>
              </div>
            </div>

            {/* Photo 5: CHCNAV antenna */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-[#1B2430]/10 img-zoom-container group">
              <Image
                src="/Images/chcnav-antenna.jpg"
                alt="CHCNAV dual-frequency GNSS antenna used in precise geodetic surveys"
                fill
                className="object-cover object-top img-zoom-element"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-mono text-[10px] text-white uppercase tracking-widest">CHCNAV Survey Equipment</p>
              </div>
            </div>

            {/* Photo 6: optical level on road */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-[#1B2430]/10 img-zoom-container group">
              <Image
                src="/Images/optical-level-road.jpg"
                alt="GEOMARK surveyor with optical level on Afgoye–Baraawe road corridor"
                fill
                className="object-cover img-zoom-element"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-mono text-[10px] text-white uppercase tracking-widest">Road Elevation Survey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />
    </div>
  );
}
