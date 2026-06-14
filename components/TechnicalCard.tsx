import React from 'react';

interface TechnicalCardProps {
  label: string;
  specs: string[];
}

export default function TechnicalCard({ label, specs }: TechnicalCardProps) {
  return (
    <div className="border border-[#1B2430]/10 bg-white p-6 rounded-lg font-mono text-xs text-[#564242]/90 relative overflow-hidden flex flex-col justify-between hover:border-[#5B0617] transition-colors group shadow-sm/5 card-hover-lift">
      <div className="absolute top-0 right-0 w-12 h-12 bg-[#FFF0F0] rotate-45 translate-x-6 -translate-y-6 group-hover:bg-[#5B0617] transition-colors" />
      <div>
        <div className="text-stone-400 uppercase tracking-widest text-[9px] mb-3 block">
          DIVISION SPECIFICATION
        </div>
        <h4 className="font-display text-sm font-bold text-[#5B0617] mb-4 font-sans">
          {label}
        </h4>
        <ul className="space-y-1.5 font-mono text-[11px] text-[#231919]/80">
          {specs.map((item, idx) => (
            <li key={idx} className="flex justify-between border-b border-[#1B2430]/5 pb-1">
              <span>{item.split(':')[0]}</span>
              <span className="font-bold text-[#B22833]">{item.split(':')[1]}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 pt-2 text-[9px] text-[#FE6065] tracking-wider font-mono uppercase font-semibold">
        Quality Assured Compliance
      </div>
    </div>
  );
}
