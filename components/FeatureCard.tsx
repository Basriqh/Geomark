import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType<{ className?: string; size?: number }>;
}

export default function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <div className="flex gap-6 p-4">
      <div className="flex-shrink-0 w-12 h-12 bg-[#FFF0F0] rounded-lg flex items-center justify-center text-[#5B0617] border border-[#DCC0C0]/25">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-display font-bold text-lg text-[#5B0617] mb-1.5">
          {title}
        </h4>
        <p className="font-sans text-sm text-[#564242] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
