import React from 'react';

interface UavIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export default function UavIcon({ size = 24, className, ...props }: UavIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Central body */}
      <circle cx="12" cy="12" r="3" />
      
      {/* Quadcopter arms */}
      <line x1="12" y1="9" x2="12" y2="4" />
      <line x1="12" y1="15" x2="12" y2="20" />
      <line x1="9" y1="12" x2="4" y2="12" />
      <line x1="15" y1="12" x2="20" y2="12" />
      
      {/* Motor caps */}
      <circle cx="12" cy="4" r="1.5" fill="currentColor" />
      <circle cx="12" cy="20" r="1.5" fill="currentColor" />
      <circle cx="4" cy="12" r="1.5" fill="currentColor" />
      <circle cx="20" cy="12" r="1.5" fill="currentColor" />
      
      {/* Rotors */}
      <path d="M9 3.5h6" />
      <path d="M9 20.5h6" />
      <path d="M3.5 9v6" />
      <path d="M20.5 9v6" />
    </svg>
  );
}
