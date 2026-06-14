import React from 'react';

interface SectionHeaderProps {
  category: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  id?: string;
}

export default function SectionHeader({
  category,
  title,
  description,
  align = 'left',
  id,
}: SectionHeaderProps) {
  const isLeft = align === 'left';
  
  return (
    <div id={id} className={`mb-12 ${isLeft ? 'text-left' : 'text-center mx-auto max-w-3xl'}`}>
      <span className="font-mono text-xs uppercase tracking-widest text-[#B22833] font-medium block mb-2">
        {category}
      </span>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#5B0617] leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 font-sans text-base md:text-lg text-[#564242] leading-relaxed">
          {description}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-[#5B0617] ${isLeft ? '' : 'mx-auto'}`} />
    </div>
  );
}
