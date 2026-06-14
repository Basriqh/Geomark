'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#1B2430]/10'
          : 'bg-white border-b border-[#1B2430]/10'
      }`}
    >
      <div className="flex justify-between items-center h-20 px-6 md:px-12 max-w-[1280px] mx-auto">
        {/* Logo (sharp, responsive, next/image with correct rules) */}
        <Link 
          href="/" 
          id="hdr-logo-link"
          className="relative block w-[130px] sm:w-[160px] lg:w-[210px] h-[29px] sm:h-[36px] lg:h-[47px] hover:opacity-90 transition-opacity"
        >
          <Image
            src="/geomark-logo.svg"
            alt="GEOMARK Engineering Consultants Logo"
            fill
            className="object-contain object-left"
            priority
            sizes="(max-width: 640px) 130px, (max-width: 1024px) 160px, 210px"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                id={`hdr-nav-${item.name.toLowerCase().replace(' ', '-')}`}
                className={`font-sans text-[#564242] hover:text-[#5B0617] text-xs font-semibold uppercase tracking-wider py-2 relative nav-link-hover ${
                  isActive
                    ? 'text-[#5B0617] border-b-2 border-[#5B0617]'
                    : ''
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            id="hdr-cta-btn"
            className="bg-[#7A1F2B] text-white px-6 py-3 font-semibold text-xs uppercase tracking-wider hover:bg-[#5B0617] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all inline-flex items-center gap-2 group btn-arrow-slide"
          >
            Request Proposal
            <ArrowRight className="w-3.5 h-3.5 arrow-icon" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="hdr-mob-menu-btn"
          className="lg:hidden text-[#5B0617] p-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6 animate-fade-in-up" /> : <Menu className="w-6 h-6 animate-fade-in-up" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[#1B2430]/10 py-6 px-6 shadow-inner animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  id={`hdr-mob-nav-${item.name.toLowerCase().replace(' ', '-')}`}
                  className={`font-sans text-sm uppercase tracking-wider font-semibold py-2 px-1 border-b border-[#1B2430]/5 ${
                    isActive
                      ? 'text-[#5B0617] border-b-2 border-b-[#5B0617]'
                      : 'text-[#564242] hover:text-[#B22833]'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              id="hdr-mob-cta-btn"
              className="bg-[#7A1F2B] text-white text-center py-4 font-semibold text-xs uppercase tracking-wider hover:bg-[#5B0617] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Request Proposal
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
