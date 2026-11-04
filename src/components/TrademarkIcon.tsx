import React from 'react';

interface TrademarkIconProps {
  className?: string;
  size?: number | string;
}

export const TrademarkIcon: React.FC<TrademarkIconProps> = ({
  className = 'w-6 h-6',
  size
}) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <svg
      viewBox="140 180 720 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      style={style}
      aria-label="James Michael Morva Jr Trademark"
    >
      {/* Outer Left Leg: Foot to Peak */}
      <line
        x1="180"
        y1="780"
        x2="294"
        y2="220"
        stroke="currentColor"
        strokeWidth="72"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left Inner Diagonal: Left Peak to Center Valley */}
      <line
        x1="294"
        y1="220"
        x2="500"
        y2="560"
        stroke="currentColor"
        strokeWidth="72"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Inner Diagonal: Center Valley to Right Peak */}
      <line
        x1="500"
        y1="560"
        x2="706"
        y2="220"
        stroke="currentColor"
        strokeWidth="72"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Outer Right Leg: Right Peak to Right Foot */}
      <line
        x1="706"
        y1="220"
        x2="820"
        y2="780"
        stroke="currentColor"
        strokeWidth="72"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center Diagonal Left: Center Peak to Left Leg Junction */}
      <line
        x1="500"
        y1="220"
        x2="238"
        y2="495"
        stroke="currentColor"
        strokeWidth="72"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center Diagonal Right: Center Peak to Right Leg Junction */}
      <line
        x1="500"
        y1="220"
        x2="762"
        y2="495"
        stroke="currentColor"
        strokeWidth="72"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
