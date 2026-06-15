import React from 'react';

interface MetricCardProps {
  value: string;
  label: string;
  sublabel?: string;
}

export default function MetricCard({ value, label, sublabel }: MetricCardProps) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg border border-[#1B2430]/10 text-center md:text-left shadow-sm">
      <div className="font-display text-4xl lg:text-5xl font-extrabold text-[#5B0617] mb-2">
        {value}
      </div>
      <div className="font-mono text-xs uppercase tracking-wider text-[#B22833] font-semibold mb-1">
        {label}
      </div>
      {sublabel && (
        <div className="font-sans text-xs text-[#564242]/70">
          {sublabel}
        </div>
      )}
    </div>
  );
}
