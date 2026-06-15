import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Compass,
  Layers,
  DraftingCompass,
  Database,
  Map,
  Wrench,
  ArrowRight,
  Gauge,
  Workflow,
  Shield,
} from 'lucide-react';

import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import FeatureCard from '../components/FeatureCard';
import MetricCard from '../components/MetricCard';
import ProcessStep from '../components/ProcessStep';
import CTASection from '../components/CTASection';
import UavIcon from '../components/UavIcon';

export const metadata: Metadata = {
  title: 'GEOMARK | Land Surveying & Geotechnical Consultants in Somalia',
  description:
    'GEOMARK provides professional land surveying, geotechnical investigation, materials testing, and engineering documentation in Mogadishu, Somalia.',
};

export default function HomePage() {
  return (
    <div id="home-page-container">

      {/* 1. HERO SECTION */}
      <section className="relative h-[88vh] flex items-center overflow-hidden bg-[#1B2430]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/team-gnss-corridor.jpg"
            alt="GEOMARK surveyors using GNSS equipment on a construction site in Somalia"
            fill
            priority
            className="object-cover object-center opacity-75"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B2430]/95 via-[#1B2430]/60 to-[#1B2430]/20" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 max-w-[1280px] mx-auto">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block font-mono text-xs text-[#FFF8F7] bg-[#5B0617] px-4 py-1.5 uppercase tracking-widest font-semibold rounded-sm">
              MOGADISHU HQ // GEOSPATIAL & GEOTECHNICAL
            </span>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#FFF8F7] tracking-tight leading-tight">
              Boundaries Defined.<br />Futures Built.
            </h1>

            <p className="font-sans text-base md:text-lg text-[#FFF8F7]/85 leading-relaxed max-w-2xl">
              GEOMARK provides professional land surveying, geotechnical investigation, materials testing, and engineering documentation in Mogadishu, Somalia.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/services"
                id="hero-services-btn"
                className="bg-[#B22833] text-white px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-[#5B0617] active:scale-95 transition-all outline-none"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                id="hero-contact-btn"
                className="border border-white text-white px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-white/10 active:scale-95 transition-all outline-none"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-full h-full survey-grid pointer-events-none opacity-20" />
      </section>

      {/* 2. SERVICES OVERVIEW */}
      <section className="py-24 bg-white relative overflow-hidden" id="services-summary">
        <div className="px-6 md:px-12 max-w-[1280px] mx-auto">
          <SectionHeader
            category="01. Our Core Competencies"
            title="Integrated Engineering Support"
            description="Our service lines provide accurate ground control, subsurface soil analysis, and certified design files compliant with engineering codes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              index="GMRK-01"
              title="Land &amp; Engineering Surveying"
              description="Topographic mapping, boundary demarcation, and construction layout with geodetic control networks using dual-frequency GNSS receivers."
              icon={Compass}
              href="/services#land-surveying"
            />
            <ServiceCard
              index="GMRK-02"
              title="Geotechnical Investigation"
              description="Subsurface soil exploration, Standard Penetration Testing (SPT), trial pit logging, and laboratory classifications for foundational safety."
              icon={Layers}
              href="/services#geotechnical"
            />
            <ServiceCard
              index="GMRK-03"
              title="Engineering Design &amp; Docs"
              description="Civil alignment designs, aggregate source reports, soil-profile maps, cross-sections, strip maps, and construction-ready drawing sets."
              icon={DraftingCompass}
              href="/services#design-docs"
            />
          </div>
        </div>
      </section>

      {/* 3. ABOUT GEOMARK */}
      <section className="py-24 bg-[#FFF8F7]">
        <div className="px-6 md:px-12 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-6 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#5B0617]" />
            <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-xl border border-[#1B2430]/10">
              <Image
                src="/Images/gnss-data-review.jpg"
                alt="GEOMARK engineers reviewing GNSS survey data on the field"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#5B0617] p-8 text-white hidden lg:block border border-[#FFF8F7]/20 shadow-lg">
              <div className="font-mono text-3xl font-bold mb-1">95 KM</div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-[#FE6065] font-semibold">
                FLAGSHIP CORRIDOR ROUTE
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B22833] font-bold block">
              02. About GEOMARK
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#5B0617] leading-tight">
              Technical Precision-focused Infrastructure Support
            </h2>
            <p className="font-sans text-base text-[#564242] leading-relaxed">
              GEOMARK is an engineering consultancy firm specializing in land surveying, geotechnical investigation, materials testing, and drafting services in Somalia. We deliver validated ground and geodetic data to mitigate technical risks.
            </p>
            <p className="font-sans text-sm text-[#564242] leading-relaxed">
              Our multidisciplinary team has extensive local experience, deploying state-of-the-art surveying gear and rigorous geotechnical classification methods to verify site suitability for roads, buildings, and utility systems.
            </p>

            <ul className="space-y-3 pt-2 font-mono text-xs text-[#231919] font-medium">
              <li className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-[#B22833] shrink-0" />
                <span>Geodetic control networks utilizing dual-frequency GNSS</span>
              </li>
              <li className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-[#B22833] shrink-0" />
                <span>Rigorous subsurface boring log classifications</span>
              </li>
              <li className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-[#B22833] shrink-0" />
                <span>Civil CAD alignment deliverables following design codes</span>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/about"
                id="about-learn-more-btn"
                className="bg-[#5B0617] text-white px-8 py-3.5 font-mono text-xs uppercase tracking-widest hover:bg-[#7A1F2B] transition-colors inline-block"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. TECHNICAL WORKFLOW */}
      <section className="py-24 bg-white topo-bg">
        <div className="px-6 md:px-12 max-w-[1280px] mx-auto">
          <SectionHeader
            category="03. Project Lifecycle"
            title="Our Technical Workflow"
            align="center"
            description="Our process relies on sequential phases to ensure precise data verification and compliance with guidelines."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 pt-8">
            <ProcessStep
              stepNumber="01"
              title="Desk Study"
              description="Review of historic archives, structural reports, and regional geologic documents to define the program scope."
            />
            <ProcessStep
              stepNumber="02"
              title="Field Investigation"
              description="On-site geodetic control grid configuration, topographic survey, and soil trial pits or drilling."
            />
            <ProcessStep
              stepNumber="03"
              title="Laboratory Testing"
              description="Index testing, sieve analyses, sand equivalent tests, and dry density classification in Mogadishu."
            />
            <ProcessStep
              stepNumber="04"
              title="Interpretation"
              description="Our senior engineers analyze field and lab outputs to draft foundation and materials reports."
            />
            <ProcessStep
              stepNumber="05"
              title="Reporting"
              description="Drafting and delivery of certified technical reports, strip maps, cross-sections, and CAD files."
            />
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY & EQUIPMENT */}
      <section className="py-24 bg-white border-t border-[#1B2430]/10">
        <div className="px-6 md:px-12 max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#B22833] font-semibold block mb-2">
                TECHNOLOGY &amp; FIELD EQUIPMENT
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#5B0617]">
                Technical Toolkits &amp; Deliverables
              </h2>
            </div>
            <div className="font-mono text-xs text-[#564242]/70 tracking-wider">
              VERIFIED SYSTEMS &amp; COMPILERS
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="p-6 border border-[#1B2430]/10 text-center hover:bg-[#FFF8F7] transition-all group rounded-lg">
              <Database className="w-8 h-8 text-[#B22833] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-mono text-xs font-bold text-[#231919]">GNSS RTK</h4>
              <p className="text-[10px] text-[#564242]/70 mt-1 font-mono">Geodetic Grid</p>
            </div>
            <div className="p-6 border border-[#1B2430]/10 text-center hover:bg-[#FFF8F7] transition-all group rounded-lg">
              <UavIcon className="w-8 h-8 text-[#B22833] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-mono text-xs font-bold text-[#231919]">UAV DRONES</h4>
              <p className="text-[10px] text-[#564242]/70 mt-1 font-mono">Photogrammetry</p>
            </div>
            <div className="p-6 border border-[#1B2430]/10 text-center hover:bg-[#FFF8F7] transition-all group rounded-lg">
              <Compass className="w-8 h-8 text-[#B22833] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-mono text-xs font-bold text-[#231919]">ROBOTIC TS</h4>
              <p className="text-[10px] text-[#564242]/70 mt-1 font-mono">Setting Out</p>
            </div>
            <div className="p-6 border border-[#1B2430]/10 text-center hover:bg-[#FFF8F7] transition-all group rounded-lg">
              <Wrench className="w-8 h-8 text-[#B22833] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-mono text-xs font-bold text-[#231919]">COMPACTION</h4>
              <p className="text-[10px] text-[#564242]/70 mt-1 font-mono">Proctor/CBR</p>
            </div>
            <div className="p-6 border border-[#1B2430]/10 text-center hover:bg-[#FFF8F7] transition-all group rounded-lg">
              <Map className="w-8 h-8 text-[#B22833] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-mono text-xs font-bold text-[#231919]">STRIP MAPS</h4>
              <p className="text-[10px] text-[#564242]/70 mt-1 font-mono">Soil Profiles</p>
            </div>
            <div className="p-6 border border-[#1B2430]/10 text-center hover:bg-[#FFF8F7] transition-all group rounded-lg">
              <DraftingCompass className="w-8 h-8 text-[#B22833] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-mono text-xs font-bold text-[#231919]">CAD 3D</h4>
              <p className="text-[10px] text-[#564242]/70 mt-1 font-mono">As-Built Plans</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED CASE STUDY */}
      <section className="bg-[#1B2430] text-white py-24 relative overflow-hidden" id="featured-case-study">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/Images/geomark-vest-logo.jpg"
            alt="GEOMARK field engineer on survey operations"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[#1B2430]/80" />

        <div className="relative z-10 px-6 md:px-12 max-w-[1280px] mx-auto">
          <div className="max-w-4xl space-y-6">
            <span className="font-mono text-xs text-[#FE6065] font-bold block uppercase tracking-widest">
              FEATURED SUCCESS STORY // CORRIDOR INFRASTRUCTURE
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFF8F7] leading-tight">
              Afgoye – Baraawe National Trunk Road Corridor
            </h2>
            <p className="font-sans text-base md:text-lg text-[#FFF8F7]/85 leading-relaxed">
              GEOMARK successfully delivered detailed engineering surveying, geodetic grid stabilization, and geotechnical borehole alignments on the 95 km Afgoye – Buulo Mareer section.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
              <div className="border-l border-[#B22833] pl-6">
                <div className="font-display text-2xl md:text-3xl font-extrabold text-[#FFF8F7]">95 KM</div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-[#FFF8F7]/60 mt-1">
                  Corridor Extent
                </div>
              </div>
              <div className="border-l border-[#B22833] pl-6">
                <div className="font-display text-2xl md:text-3xl font-extrabold text-[#FFF8F7]">± 2cm</div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-[#FFF8F7]/60 mt-1">
                  Horizontal Accuracy
                </div>
              </div>
              <div className="border-l border-[#B22833] pl-6">
                <div className="font-display text-2xl md:text-3xl font-extrabold text-[#FFF8F7]">Borrow</div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-[#FFF8F7]/60 mt-1">
                  Pit Suitability Logs
                </div>
              </div>
              <div className="border-l border-[#B22833] pl-6">
                <div className="font-display text-2xl md:text-3xl font-extrabold text-[#FFF8F7]">100%</div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-[#FFF8F7]/60 mt-1">
                  Federal Regulatory Compliant
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/projects"
                id="feat-case-study-btn"
                className="bg-[#B22833] text-white px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-[#5B0617] transition-all inline-flex items-center gap-2"
              >
                View Project Technical Brief
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THE GEOMARK ADVANTAGE */}
      <section className="py-24 bg-[#FFF8F7] relative">
        <div className="px-6 md:px-12 max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B22833] font-bold block mb-2">
              TECHNICAL OBJECTIVES &amp; EXECUTION CRITERIA
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#5B0617]">
              The GEOMARK Advantage
            </h2>
            <div className="w-24 h-1 bg-[#5B0617] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Geomorphic &amp; Local Expertise"
              description="Our local engineers understand Somalia's complex subsurface layers, coastal sand formations, and regulatory boundaries."
              icon={Layers}
            />
            <FeatureCard
              title="Verified Technical Data"
              description="Redundant geodetic loop calculations and checked geotechnical boring tests prevent margin-of-error failures."
              icon={Gauge}
            />
            <FeatureCard
              title="Modern Systems &amp; Software"
              description="We deliver full digital compatibility. Survey lines, elevation points, and classifications map directly into BIM and Civil 3D files."
              icon={Workflow}
            />
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <CTASection />
    </div>
  );
}
