import React from 'react';
import Image from 'next/image';
import { MapPin, Layers } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  section: string;
  length: string;
  location: string;
  client: string;
  description: string;
  imageUrl: string;
}

export default function ProjectCard({
  id,
  title,
  section,
  length,
  location,
  client,
  description,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-white border border-[#1B2430]/10 rounded-xl overflow-hidden shadow-sm card-hover-lift">
      <div className="relative h-64 md:h-80 w-full img-zoom-container">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover img-zoom-element"
          sizes="(max-width: 1024px) 100vw, 800px"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-[#5B0617]/90 backdrop-blur-md text-white text-[10px] font-mono tracking-wider px-3 py-1 rounded">
            PROJECT REFERENCE: {id}
          </span>
          <span className="bg-[#003227]/90 backdrop-blur-md text-[#b0f0d9] text-[10px] font-mono tracking-wider px-3 py-1 rounded">
            COMPLETED
          </span>
        </div>
      </div>
      <div className="p-6 md:p-8 space-y-6">
        <div>
          <h3 className="font-display text-2xl font-bold text-[#5B0617] mb-1">
            {title}
          </h3>
          <p className="font-sans text-sm text-[#B22833] font-semibold">
            {section}
          </p>
        </div>
        
        <p className="font-sans text-sm text-[#564242] leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#1B2430]/10 font-mono text-xs">
          <div>
            <span className="text-[#564242]/60 block uppercase tracking-wider mb-1">LOCATION</span>
            <span className="font-bold text-[#231919] flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#B22833]" />
              {location}
            </span>
          </div>
          <div>
            <span className="text-[#564242]/60 block uppercase tracking-wider mb-1">CORRIDOR LENGTH</span>
            <span className="font-bold text-[#231919] flex items-center gap-1">
              <span>{length}</span>
            </span>
          </div>
          <div className="col-span-2">
            <span className="text-[#564242]/60 block uppercase tracking-wider mb-1">CLIENT ENTITY</span>
            <span className="font-bold text-[#231919]">
              {client}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
