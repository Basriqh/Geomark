import React from 'react';

interface ProcessStepProps {
  stepNumber: string;
  title: string;
  description: string;
}

export default function ProcessStep({ stepNumber, title, description }: ProcessStepProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-[#1B2430]/10 text-center relative hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-full bg-[#5B0617] text-white flex items-center justify-center font-mono font-bold text-base mx-auto mb-4">
        {stepNumber}
      </div>
      <h4 className="font-display text-lg font-bold text-[#5B0617] mb-2">
        {title}
      </h4>
      <p className="font-sans text-xs md:text-sm text-[#564242] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
