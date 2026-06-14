import React from 'react';
import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType<{ className?: string; size?: number }>;
  href: string;
  index: string;
}

export default function ServiceCard({ title, description, icon: Icon, href, index }: ServiceCardProps) {
  return (
    <div className="bg-white border border-[#1B2430]/10 p-8 md:p-10 rounded-lg flex flex-col justify-between h-full card-hover-lift group">
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="p-4 bg-[#FFF0F0] rounded-lg text-[#B22833] group-hover:bg-[#5B0617] group-hover:text-white transition-colors duration-300">
            <Icon className="w-8 h-8" />
          </div>
          <span className="font-mono text-xs text-[#564242]/40 font-bold">
            {index}
          </span>
        </div>
        <h3 className="font-display text-xl md:text-2xl font-bold text-[#5B0617] mb-3 group-hover:text-[#B22833] transition-colors">
          {title}
        </h3>
        <p className="font-sans text-sm text-[#564242] leading-relaxed mb-8">
          {description}
        </p>
      </div>
      <div>
        <Link
          href={href}
          id={`srv-card-link-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
          className="font-mono text-xs uppercase tracking-wider text-[#5B0617] font-semibold inline-flex items-center gap-2 btn-arrow-slide"
        >
          View Details
          <ArrowRight className="w-3.5 h-3.5 arrow-icon" />
        </Link>
      </div>
    </div>
  );
}
