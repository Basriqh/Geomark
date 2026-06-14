import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle, 
  MapPin, 
  Users, 
  Target,
  Eye,
  Rocket
} from 'lucide-react';

import SectionHeader from '../../components/SectionHeader';
import MetricCard from '../../components/MetricCard';
import ProcessStep from '../../components/ProcessStep';
import CTASection from '../../components/CTASection';

export const metadata: Metadata = {
  title: 'About GEOMARK | Engineering Consultants in Mogadishu',
  description:
    'Learn about GEOMARK. We are a specialized team of land surveyors and geotechnical engineers providing infrastructure support in Mogadishu, Somalia.',
};

export default function AboutPage() {
  const coreValues = [
    { name: 'Precision', desc: 'Zero tolerance for mapping and coordinate errors.' },
    { name: 'Integrity', desc: 'Factual reports showing checked test values.' },
    { name: 'Safety', desc: 'Protective gear and standard procedures in field drills.' },
    { name: 'Standards-Compliant', desc: 'AASHTO, BS & ASTM engineering codes.' },
    { name: 'Local Knowledge', desc: 'Understanding distinct ground layers across SO.' },
    { name: 'Partnership', desc: 'Integrating directly with road design teams.' },
    { name: 'On-Time', desc: 'Fast, systematic mobile field unit updates.' },
  ];

  return (
    <div id="about-page-container">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[50vh] flex flex-col justify-center overflow-hidden bg-[#1B2430] py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/geomark-gnss-closeup.jpg"
            alt="Surveying fieldwork in Mogadishu"
            fill
            className="object-cover opacity-60"
            sizes="100vw"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#5B0617]/85" />
        </div>
        
        <div className="relative z-10 px-6 md:px-12 max-w-[1280px] mx-auto w-full text-white">
          <nav className="flex mb-8 text-white/70 font-mono text-xs uppercase tracking-widest">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About Us</span>
          </nav>
          {/* SEO Required H1 Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold max-w-4xl tracking-tight leading-tight">
            Factual Engineering Surveys and Field Measurements
          </h1>
          <p className="mt-4 font-sans text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
            GEOMARK provides stable, validated topography profiles and soil descriptions that lay the groundwork for civil structures and transport corridors.
          </p>
        </div>
      </section>

      {/* SECTION 2: COMPANY OVERVIEW */}
      <section className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto topo-bg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#5B0617]/20 z-0" />
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#1B2430]/10 shadow-lg">
              <Image
                src="/images/geomark-drafting-overview.jpg"
                alt="Drafting work visual overview"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#5B0617]/20 z-0" />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B22833] font-bold block">
              CORPORATE EXCELLENCE
            </span>
            {/* H2 SEO Specific heading on Mission/Approach */}
            <h2 id="about-mission-approach-heading" className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#5B0617]">
              Our Mission and Approach
            </h2>
            <p className="font-sans text-base text-[#564242] leading-relaxed">
              At GEOMARK Engineering Consultants, our approach centers on reducing client construction risks on high-stakes roads and municipal routes by collecting mm-accurate topographic points and delivering precise geodetic control networks.
            </p>
            <p className="font-sans text-sm text-[#564242]/90 leading-relaxed">
              We translate raw field constraints into verified CAD drawings, strip maps, cross-sections, and geotechnical logs that project developers, designers, and state entities can rely on explicitly.
            </p>
            
            <div className="grid grid-cols-2 gap-4 border-t border-[#1B2430]/15 pt-6 font-mono text-xs">
              <div>
                <span className="text-[#564242]/70 block">Technical Capability</span>
                <span className="font-bold text-[#231919]">Field Engineering</span>
              </div>
              <div>
                <span className="text-[#564242]/70 block">Primary Corridor</span>
                <span className="font-bold text-[#231919]">Lower Shabelle Routes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VISION & MISSION */}
      <section className="py-24 bg-[#FFF0F0] border-y border-[#DCC0C0]/50">
        <div className="px-6 md:px-12 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 md:p-10 border border-[#DCC0C0] relative overflow-hidden group rounded-lg">
            <div className="font-mono text-xs uppercase text-[#B22833]/80 font-bold mb-3">VISION</div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-[#5B0617] mb-4">Our Vision</h3>
            <p className="font-sans text-sm md:text-base text-[#564242] leading-relaxed">
              To become the trusted reference for surveying, geotechnical engineering, and infrastructure support services throughout Somalia and the Horn of Africa.
            </p>
          </div>
          <div className="bg-white p-8 md:p-10 border border-[#DCC0C0] relative overflow-hidden group rounded-lg">
            <div className="font-mono text-xs uppercase text-[#B22833]/80 font-bold mb-3">MISSION</div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-[#5B0617] mb-4">Our Mission</h3>
            <p className="font-sans text-sm md:text-base text-[#564242] leading-relaxed">
              To deliver precise, standards-compliant engineering services that reduce project risk, improve decision-making, and support sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE VALUES */}
      <section className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B22833] font-bold">
            FOUNDATIONAL TENETS
          </span>
          <h2 className="font-display text-3xl font-bold text-[#5B0617]">
            Our Core Values
          </h2>
          <div className="w-20 h-1 bg-[#5B0617] mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => (
            <div key={idx} className="bg-white p-6 border border-[#1B2430]/10 hover:shadow-md transition-shadow flex flex-col justify-between rounded-lg">
              <div className="space-y-2">
                <span className="text-[#B22833] text-lg font-mono font-bold">0{idx + 1}</span>
                <h4 className="font-display text-lg font-bold text-[#5B0617]">
                  {val.name}
                </h4>
                <p className="font-sans text-xs text-[#564242]/90 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: WHY GEOMARK EXISTS */}
      <section className="relative py-32 overflow-hidden bg-[#5B0617] text-white">
        <div className="absolute inset-0 opacity-15 grayscale blend-overlay">
          <Image
            src="/images/geomark-gnss-road.jpg"
            alt="Structural structural blueprints overlay"
            fill
            className="object-cover"
            sizes="100vw"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 px-6 md:px-12 max-w-[1280px] mx-auto text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold max-w-4xl mx-auto leading-tight">
            Engineering Precision in Every Calculation
          </h2>
          <div className="w-24 h-0.5 bg-white/40 mx-auto" />
          <p className="font-sans text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Stability starts with factual measurements. We minimize construction risk by verifying coordinates, establishing redundant geodetic control networks, and characterizing subgrade soils through standardized laboratory procedures.
          </p>
        </div>
      </section>

      {/* SECTION 6: STANDARDS & COMPLIANCE */}
      <section className="py-24 bg-[#1B2430] text-white">
        <div className="px-6 md:px-12 max-w-[1280px] mx-auto text-center space-y-6 mb-16">
          {/* H2 SEO Specific heading on QA & Standards */}
          <h2 id="about-standards-heading" className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            Quality, Safety &amp; Testing Standards
          </h2>
          <p className="font-sans text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Every laboratory analysis and field alignment is carried out following strictly checked international engineering classifications.
          </p>
        </div>

        <div className="px-6 md:px-12 max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center font-mono text-xs uppercase text-white/80">
          <div className="border border-white/10 p-6 flex flex-col justify-center rounded bg-white/5">
            <span className="font-semibold block">ASTM</span>
            <span className="text-[10px] text-white/50 mt-1">Soils Classification</span>
          </div>
          <div className="border border-white/10 p-6 flex flex-col justify-center rounded bg-white/5">
            <span className="font-semibold block">AASHTO</span>
            <span className="text-[10px] text-white/50 mt-1">Road Pavements</span>
          </div>
          <div className="border border-white/10 p-6 flex flex-col justify-center rounded bg-white/5">
            <span className="font-semibold block">BS</span>
            <span className="text-[10px] text-white/50 mt-1">Structural Codes</span>
          </div>
          <div className="border border-white/10 p-6 flex flex-col justify-center rounded bg-white/5">
            <span className="font-semibold block">EN STANDARDS</span>
            <span className="text-[10px] text-white/50 mt-1">Laboratory Sieve</span>
          </div>
          <div className="border border-white/10 p-6 flex flex-col justify-center rounded bg-white/5 col-span-2 md:col-span-1">
            <span className="font-semibold block">WGS84</span>
            <span className="text-[10px] text-white/50 mt-1">UTM geodetic grid</span>
          </div>
        </div>
      </section>

      {/* SECTION 7: STAFF / OUR TEAM */}
      <section className="py-24 bg-white">
        <div className="px-6 md:px-12 max-w-[1280px] mx-auto space-y-12">
          {/* H2 SEO Specific heading on Staff & Specialists */}
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B22833] font-bold">
              TECHNICAL SPECIALISTS
            </span>
            <h2 id="about-team-heading" className="font-display text-2xl md:text-3xl font-bold text-[#5B0617]">
              Our Technical Team
            </h2>
            <div className="w-20 h-1 bg-[#5B0617] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border border-[#1B2430]/10 rounded-lg bg-[#FFF8F7] hover:border-[#5B0617] transition-all">
              <h4 className="font-display text-lg font-bold text-[#5B0617] mb-1">Topographic Surveyors</h4>
              <p className="font-sans text-sm text-[#564242]">
                Our geodetic survey specialists establish redundant site control loops utilizing multi-frequency GNSS networks.
              </p>
            </div>
            <div className="p-8 border border-[#1B2430]/10 rounded-lg bg-[#FFF8F7] hover:border-[#5B0617] transition-all">
              <h4 className="font-display text-lg font-bold text-[#5B0617] mb-1">Geotechnical Civil Staff</h4>
              <p className="font-sans text-sm text-[#564242]">
                Experienced engineers managing borehole classifications, Standard Penetration Tests (SPT), and trial pit profiles.
              </p>
            </div>
            <div className="p-8 border border-[#1B2430]/10 rounded-lg bg-[#FFF8F7] hover:border-[#5B0617] transition-all">
              <h4 className="font-display text-lg font-bold text-[#5B0617] mb-1">CAD Specialists</h4>
              <p className="font-sans text-sm text-[#564242]">
                Structural draftsmen translating raw terrain matrices into digital terrain models, strip maps, and elevation drawings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />
    </div>
  );
}
