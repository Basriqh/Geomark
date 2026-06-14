import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Globe, Clock, ShieldAlert } from 'lucide-react';

import SectionHeader from '../../components/SectionHeader';
import ContactForm from '../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact GEOMARK | Request Proposals in Mogadishu',
  description:
    'Get in touch with GEOMARK in Mogadishu, Somalia. Located at Office 410, Qalab-xor Tower, Digfeer Street. Request formal technical proposals.',
};

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact GEOMARK',
    'url': 'https://www.geomark.so/contact',
    'description':
      'Get in touch with GEOMARK in Mogadishu, Somalia. Located at Office 410, Qalab-xor Tower, Digfeer Street. Request formal technical proposals.',
  };

  return (
    <div id="contact-page-container">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* HEADER SECTION */}
      <section className="bg-[#1B2430] py-16 border-b border-[#1B2430]/10 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 technical-grid pointer-events-none" />
        <div className="relative z-10 px-6 md:px-12 max-w-[1280px] mx-auto">
          <nav className="flex mb-4 text-white/60 font-mono text-xs uppercase tracking-widest">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact Us</span>
          </nav>
          {/* SEO Required H1 Heading */}
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            Contact GEOMARK
          </h1>
          <p className="mt-2 text-sm md:text-base text-white/70 max-w-xl font-sans">
            Have questions about land boundaries, soil classifications, or materials reports? Choose a channel below or initiate an online technical proposal request.
          </p>
        </div>
      </section>

      {/* CORE CONTACT INTERFACES */}
      <section className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto topo-bg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Headquarters and Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B22833] font-bold block">
                PHYSICAL HEADQUARTERS
              </span>
              {/* H2 SEO Specific heading on offices */}
              <h2 id="contact-headquarters-heading" className="font-display text-2xl md:text-3xl font-bold text-[#5B0617]">
                Mogadishu Headquarters
              </h2>
              <p className="font-sans text-sm text-[#564242] leading-relaxed">
                Our main division is located in the secure Qalab-xor Tower on Digfeer Street. Clients who want to schedule technical review meetings are encouraged to call ahead to ensure staff availability.
              </p>
            </div>

            {/* Verification / Office card details */}
            <div className="bg-white border border-[#1B2430]/10 rounded-xl p-8 space-y-6 shadow-sm">
              <ul className="space-y-6 text-[#564242] font-sans text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF0F0] flex items-center justify-center text-[#B22833] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[#5B0617] text-sm">Physical Address</h4>
                    <p className="mt-1 text-xs">Office 410, Qalab-xor Tower, Digfeer Street, Mogadishu, Somalia</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF0F0] flex items-center justify-center text-[#B22833] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[#5B0617] text-sm">Phone Line</h4>
                    <p className="mt-1 text-xs hover:underline">
                      <a href="tel:+252611548569">+252 611 548 569</a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF0F0] flex items-center justify-center text-[#B22833] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[#5B0617] text-sm">General Email</h4>
                    <p className="mt-1 text-xs hover:underline">
                      <a href="mailto:info@geomark.so">info@geomark.so</a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF0F0] flex items-center justify-center text-[#B22833] shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[#5B0617] text-sm">Web Portal</h4>
                    <p className="mt-1 text-xs hover:underline">
                      <a href="https://www.geomark.so" target="_blank" rel="noopener noreferrer">www.geomark.so</a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF0F0] flex items-center justify-center text-[#B22833] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[#5B0617] text-sm">Business Hours</h4>
                    <p className="mt-1 text-xs">Sunday – Thursday | 08:00 – 17:00 (EAT)</p>
                  </div>
                </li>
              </ul>
              
              <div className="pt-4 border-t border-stone-100 flex gap-3 text-xs text-[#564242]/70 font-mono">
                <ShieldAlert className="w-4 h-4 text-[#B22833] shrink-0 mt-0.5" />
                <p className="leading-relaxed">All technical documents, soil logs, and survey CAD hand-offs are fully secured via encrypted off-site archives.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Proposal Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B22833] font-bold block">
                ONLINE SUBMISSIONS
              </span>
              {/* H2 SEO Specific heading on form */}
              <h2 id="contact-form-heading" className="font-display text-2xl md:text-3xl font-bold text-[#5B0617]">
                Request a Technical Proposal
              </h2>
              <p className="font-sans text-sm text-[#564242] leading-relaxed">
                Provide your parameters (such as project location, required lane extent, or boring depths) to receive detailed pricing options and scheduling bounds.
              </p>
            </div>

            {/* Fully functional client-side validated form */}
            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
}
