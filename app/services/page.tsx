import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Compass, 
  Layers, 
  FileText, 
  Map, 
  Check, 
  Wrench,
  Binary
} from 'lucide-react';

import SectionHeader from '../../components/SectionHeader';
import TechnicalCard from '../../components/TechnicalCard';
import CTASection from '../../components/CTASection';
import UavIcon from '../../components/UavIcon';

export const metadata: Metadata = {
  title: 'Engineering & Surveying Services in Somalia | GEOMARK',
  description:
    'Our core services include GNSS RTK land surveying, geotechnical investigation, materials testing, and engineering documentation in Somalia.',
};

export default function ServicesPage() {
  const surveySpecs = [
    'GNSS_MODE: Dual-Frequency GNSS RTK',
    'VERTICAL_PRECISION: ± 2.0mm',
    'HORIZONTAL_PRECISION: ± 1.5cm',
    'OUTPUTS: CAD / LandXML / Contour',
    'LIMITS: Geodetic loop control',
  ];

  const geotechSpecs = [
    'TEST_CODE: ASTM D1586 Standard',
    'MAX_DEPTH: 50 Meters SPT boring',
    'LAB_CLASSIFICATION: USCS Soil Standards',
    'REPORT_INDEX: Shear / Sieve / CBR log',
    'RECOMMENDATIONS: Shallow / Deep foundations',
  ];

  const designSpecs = [
    'ALIGNMENT_STANDARD: AASHTO Design Codes',
    'STRIP_MAPS: Soil Log / Road corridor overlay',
    'CAD_COMPATIBILITY: Civil 3D / BIM integration',
    'BILL_OF_QUANTITIES: Detailed material estimate',
    'REVIEWS: FEA structural checks',
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.geomark.so',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Services',
        'item': 'https://www.geomark.so/services',
      },
    ],
  };

  return (
    <div id="services-page-container">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO HERO SECTION */}
      <section className="relative min-h-[50vh] flex flex-col justify-center overflow-hidden bg-[#1B2430] py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/geomark-survey-instrumentation.jpg"
            alt="Advanced geodetic surveying instrumentation"
            fill
            className="opacity-55 object-cover"
            sizes="100vw"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#5B0617]/85" />
        </div>
        
        <div className="relative z-10 px-6 md:px-12 max-w-[1280px] mx-auto w-full text-white">
          <nav className="flex mb-8 text-white/70 font-mono text-xs uppercase tracking-widest">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Services</span>
          </nav>
          {/* SEO Required H1 Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold max-w-4xl tracking-tight leading-tight">
            Engineering &amp; Surveying Services
          </h1>
          <p className="mt-4 font-sans text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
            Delivering precise spatial measurements, stable soil analysis metrics, and checked Civil drawing alignment sets.
          </p>
        </div>
      </section>

      {/* CONTEXT SPEC BAR */}
      <div className="bg-[#FFF0F0] border-b border-[#DCC0C0] px-6 md:px-12 py-4 flex justify-between items-center overflow-x-auto whitespace-nowrap text-xs font-mono text-[#564242]">
        <div className="flex gap-8">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B22833]" /> FIELD MEASUREMENTS
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#5B0617]" /> SUBSURFACE DRILL TESTS
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-stone-400" /> AASHTO/ASTM DESIGN
          </span>
        </div>
        <div className="hidden lg:block">
          Coordinate System: UTM Zone 38N (Compliant)
        </div>
      </div>

      {/* SERVICE 1: Land & Engineering Surveying */}
      <section className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto topo-bg scroll-mt-20" id="land-surveying">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#5B0617]" />
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#1B2430]/10 shadow-lg">
              <Image
                src="/images/geomark-gnss-closeup.jpg"
                alt="Precision dual-frequency GNSS rover"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute bottom-6 left-6 bg-white p-4 border border-[#1B2430]/10 flex gap-4 items-center shadow-lg">
              <div className="w-12 h-12 bg-[#FFF0F0] flex items-center justify-center rounded text-[#5B0617]">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <p className="font-mono text-[9px] text-[#564242]/70 uppercase">SURVEY PRECISION</p>
                <p className="font-display text-lg font-bold text-[#5B0617]">± 2.0mm</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B22833] font-bold block">
              CAPABILITY DIVISION 01
            </span>
            {/* H2 SEO Specific heading on Surveying */}
            <h2 id="srv-land-survey-heading" className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#5B0617] border-b border-[#DCC0C0] pb-4">
              Land &amp; Engineering Surveying
            </h2>
            <p className="font-sans text-base text-[#564242] leading-relaxed">
              Our surveying division establishes stable high-accuracy geodetic control networks using dual-frequency GNSS receivers and precise total stations to guarantee coordinate consistency on infrastructure grids.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 font-sans text-sm font-semibold text-[#231919] pt-2">
              <div className="flex items-center gap-3 p-4 bg-white border border-[#DCC0C0] hover:border-[#5B0617] transition-all">
                <Check className="w-4 h-4 text-[#B22833] shrink-0" />
                <span>Geodetic Grid Establishment</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white border border-[#DCC0C0] hover:border-[#5B0617] transition-all">
                <Check className="w-4 h-4 text-[#B22833] shrink-0" />
                <span>Topographic Surveying</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white border border-[#DCC0C0] hover:border-[#5B0617] transition-all">
                <Check className="w-4 h-4 text-[#B22833] shrink-0" />
                <span>Demarcing and Cadastral Layouts</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white border border-[#DCC0C0] hover:border-[#5B0617] transition-all">
                <Check className="w-4 h-4 text-[#B22833] shrink-0" />
                <span>Road Alignment Setting Out</span>
              </div>
            </div>
            
            <div className="pt-4">
              <TechnicalCard label="Land Survey Specs" specs={surveySpecs} />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 2: Geotechnical Investigation */}
      <section className="py-24 bg-[#FFF8F7] scroll-mt-20" id="geotechnical">
        <div className="px-6 md:px-12 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B22833] font-bold block">
              CAPABILITY DIVISION 02
            </span>
            {/* H2 SEO Specific heading on Geotech */}
            <h2 id="srv-geotech-heading" className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#5B0617] border-b border-[#DCC0C0] pb-4">
              Geotechnical Investigation
            </h2>
            <p className="font-sans text-base text-[#564242] leading-relaxed">
              We mitigate subsurface construction risk by managing comprehensive site boring logs, Standard Penetration Tests (SPT), test pits, and laboratory classification reports.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 font-sans text-sm font-semibold text-[#231919] pt-2">
              <div className="flex items-center gap-3 p-4 bg-white border border-[#DCC0C0] hover:border-[#5B0617] transition-all">
                <Check className="w-4 h-4 text-[#B22833] shrink-0" />
                <span>Standard Penetration Test (SPT)</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white border border-[#DCC0C0] hover:border-[#5B0617] transition-all">
                <Check className="w-4 h-4 text-[#B22833] shrink-0" />
                <span>Log Classification (USCS)</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white border border-[#DCC0C0] hover:border-[#5B0617] transition-all">
                <Check className="w-4 h-4 text-[#B22833] shrink-0" />
                <span>Trial Pit Logs &amp; Ground Profiling</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white border border-[#DCC0C0] hover:border-[#5B0617] transition-all">
                <Check className="w-4 h-4 text-[#B22833] shrink-0" />
                <span>Physical Lab Suite (Sieve &amp; CBR)</span>
              </div>
            </div>

            <div className="pt-4">
              <TechnicalCard label="Soil Investigation Specs" specs={geotechSpecs} />
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#5B0617]" />
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#1B2430]/10 shadow-lg">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6QZeTRESwWizMDUnX6HYkJ-d8cI8OttylZ6rfD-9gPhZt9Ai4IMo8TQKoh96FeGR4LCDU0UFh_z0jrqKm22ijsI7epJjRQaRVyhkqwihoj4O23MZCYdHF6Db1eztHk1Jo_208dyihmRqOWgZ2u94uhS-97BV-4mDvazJBUv2gOhVpyhVsTXcEVRxw0aTX2cGssx3EY3JMl-nghfbjJgG7edqKwqJB3czCH2MrDWh3ZD25PIQxQbntLm_E3kRX-ZzsowaIAX8-bxs"
                alt="Geotechnical laboratory testing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Visual soil profile bar chart representation */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-1 w-32 shadow-xl shrink-0 font-mono text-[10px] text-white">
              <div className="h-10 bg-[#8B5E3C] border border-white/20 flex items-center justify-center font-bold">SANDY CLAY</div>
              <div className="h-16 bg-[#D2B48C] border border-white/20 flex items-center justify-center font-bold text-stone-900">LIMESTONE</div>
              <div className="h-14 bg-[#5D4037] border border-white/20 flex items-center justify-center font-bold">BEDROCK LAYER</div>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICE 3: Engineering Documentation & CAD */}
      <section className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto topo-bg scroll-mt-20" id="design-docs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 relative space-y-6">
            <div className="aspect-[4/3] w-full rounded-lg overflow-hidden border border-[#1B2430]/10 shadow-lg relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFE1KLLk9esD36yy1zD4ypywl7uZWFAKqtMb8qeUSQAvf2L7XbpTPLHtOlssfWKTT9R8jcSJx3PCr2tYvPrHl8Uj6dlYl3q8Kbi24RrFu6ekv6hXZHkc-g1SVQ-SEXFRebP4X5tMAmBcdGLGl6cl-XUkhFVZGaT_31wA2IslSHReW0ZfmXaJQoKLRMo-BurWYBmpE939DV1Z_CTeZH8bXvM2esapSKHZ3dLkz1ereNpC5ZEG2YzNJOWJnTE07R9aKqC38L7Cfv_cw"
                alt="Drafting architectural blueprint layouts"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="aspect-[4/3] w-full rounded-lg overflow-hidden border border-[#1B2430]/10 shadow-lg relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfxmhr35bmGfhkAE7nVgMwFG-mXQ61uJG5YUtF-1FqvTgNf9szSJP8-eVFN_H6PvXmSX8FowLhrnytqRSRLL4dORJvzf1k8kroT0zHsgcH3l94MIuLEWxDcFnPpCCdEXu67aXp4UYxk2odfJaAVEro3u28pdXDgjhwbKDprxRyVU9-Ho0ILdOsbFC3w3M1ZZRhYdwat8qhsYCN2hU9f_3nvTr4Xzs9nSBRqLpuTWRE7GuirP9eJGcYh8OeTvR-VD4XrsGrJp4vBBg"
                alt="3D Engineering alignment on computer screen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B22833] font-bold block">
              CAPABILITY DIVISION 03
            </span>
            {/* H2 SEO Specific heading on Design/Docs */}
            <h2 id="srv-design-docs-heading" className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#5B0617] border-b border-[#DCC0C0] pb-4">
              Engineering Documentation
            </h2>
            <p className="font-sans text-base text-[#564242] leading-relaxed">
              We translate our field and soil measurements directly into construction-ready CAD alignments, strip maps, cross-sections, and Bills of Quantities (BoQ) formatted for highway design and civil specifications.
            </p>
            
            <div className="space-y-4 pt-2 font-display">
              <div className="flex gap-4 p-4 bg-white border-l-4 border-l-[#5B0617] rounded-lg border border-[#1B2430]/10 shadow-sm hover:translate-x-1 transition-transform">
                <span className="font-mono font-bold text-[#B22833]">01</span>
                <div>
                  <h4 className="font-bold text-[#5B0617]">As-Built Plans &amp; Cross-Sections</h4>
                  <p className="font-sans text-xs text-[#564242] mt-1">Millimeter-precise terrain cross-sections mapping verified elevations.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-white border-l-4 border-l-[#5B0617] rounded-lg border border-[#1B2430]/10 shadow-sm hover:translate-x-1 transition-transform">
                <span className="font-mono font-bold text-[#B22833]">02</span>
                <div>
                  <h4 className="font-bold text-[#5B0617]">Technical Corridor Strip Maps</h4>
                  <p className="font-sans text-xs text-[#564242] mt-1">Unified topographic and soil profile overlay maps along highway corridors.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-white border-l-4 border-l-[#5B0617] rounded-lg border border-[#1B2430]/10 shadow-sm hover:translate-x-1 transition-transform">
                <span className="font-mono font-bold text-[#B22833]">03</span>
                <div>
                  <h4 className="font-bold text-[#5B0617]">Bills of Quantities (BoQ) &amp; Civil Reports</h4>
                  <p className="font-sans text-xs text-[#564242] mt-1">Calculated soil volume estimates and materials classification logs.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <TechnicalCard label="CAD &amp; Documentation Standards" specs={designSpecs} />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 4: Supporting Engineering Services / Materials (Borrow-pit) */}
      <section className="py-24 bg-white border-t border-[#1B2430]/10 scroll-mt-20" id="supporting-services">
        <div className="px-6 md:px-12 max-w-[1280px] mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B22833] font-bold">
              04. SPECIALIZED DIVISIONS
            </span>
            {/* H2 SEO Specific heading on Materials testing & borrow-pit */}
            <h2 id="srv-materials-testing-heading" className="font-display text-2xl md:text-3xl font-bold text-[#5B0617]">
              Construction Materials Testing (Borrow-Pit)
            </h2>
            <div className="w-24 h-1 bg-[#5B0617] mx-auto" />
            <p className="font-sans text-sm md:text-base text-[#564242] max-w-2xl mx-auto leading-relaxed pt-2">
              We manage dedicated geotechnical testing for borrow-pits, structural concrete aggregates, asphalt, and road material suitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Support card 1: Materials Testing */}
            <div className="bg-white border border-[#1B2430]/10 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AP1WRLsw2FVjfzWQ-eiMDrgeG9CHIDlAiafYSdQlDnJsPa1JCxU_vPU9YAwcuzSxYYqJIuqQlywrg1R6SxZfjmzr0GGMvQRHN5tXP4ywGqF9PPuc9cMVxUYmlxPx2asiiA7gXWRVG4pbqcDo4Yqq2nUHpZd6-iq3hiTpBxvivpcyWiboPhhRHcmmrQlW3PgowRk9OcmSM_8TYLp9yudPG-jRSTzK_susp4q4Kygmgm5VXx6V6pibDGik1qy_jaU"
                  alt="Laboratory aggregates testing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#B22833]">
                    <Wrench className="w-5 h-5" />
                    <h4 className="font-display font-bold text-[#5B0617]">Physical Lab Testing</h4>
                  </div>
                  <p className="font-sans text-xs text-[#564242] leading-relaxed">
                    Sieve analysis of soil, index tests, sand equivalent checks, and CBR calculations to document borrow-pit suitability.
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[#FE6065] tracking-wider uppercase font-semibold">Standard: AASHTO / ASTM</span>
              </div>
            </div>

            {/* Support card 2: UAV drone photogrammetry */}
            <div className="bg-white border border-[#1B2430]/10 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AP1WRLt--BBLc6OdfARO-Yobn7ZNV4ng17EBTKihxrk80lCFO3G-UicFdhNC7znmh77a7w-5EZ3MH9pZenRP9tnKUrUKPQ_vEpbB68E9WzjBtoJjKomTIOGXFleghz_bqShbbRbJz4dpR6yRQhtShi3bkNvs1nD0IQOfByRiDzu9m9Vt-JJ11Q9ko9f0z9gVyIH8qbk-jg25yUQosoKZwFzIDFkTMQj_asWUjwtyYyKlfrEVXiLe9DMdGHe1ZQ"
                  alt="UAV quadcopter mapping drone"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#B22833]">
                    <UavIcon className="w-5 h-5 text-[#B22833]" />
                    <h4 className="font-display font-bold text-[#5B0617]">UAV Photogrammetry</h4>
                  </div>
                  <p className="font-sans text-xs text-[#564242] leading-relaxed">
                    Detailed topographic aerial mapping and orthomosaics. Drones gather volumetric grid points over vast corridors.
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[#FE6065] tracking-wider uppercase font-semibold">Method: Aerial Mapping</span>
              </div>
            </div>

            {/* Support card 3: Technical databases */}
            <div className="bg-white border border-[#1B2430]/10 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AP1WRLtGlTnX2L5_8x3fUUDcgD78Qr2_ebF1j7XD5WRySFWVsvcyCGZeBsg4aHThSfkt-OC6w7DVmtGGp6sZEptqoiyQPjV8UCul6G504Kt_pCRYxTzObr_K7gLMyVNNId1zmRByFqEX0Qopd411TmkXczyeQiq9nO8WjaeyNmenTYL8VyS3OJqbgbH-ybUObsxRoBb-TJigZ6XfazaoyCGzAAhEe4PGzv5UrtuD28-ejF6tMY3t13juwZT2lQ0"
                  alt="Coordinate monitoring database display"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#B22833]">
                    <Binary className="w-5 h-5" />
                    <h4 className="font-display font-bold text-[#5B0617]">Technical Databases</h4>
                  </div>
                  <p className="font-sans text-xs text-[#564242] leading-relaxed">
                    Mapping spatial parameters, control benchmarks, and boring logs into structured relational design databases.
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[#FE6065] tracking-wider uppercase font-semibold">System: Geodetic Spatial DB</span>
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
