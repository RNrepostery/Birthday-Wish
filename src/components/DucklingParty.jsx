import React from 'react';

export default function DucklingParty() {
  return (
    <div className="relative select-none flex flex-col items-center">
      <svg
        viewBox="-60 -75 120 150"
        className="w-24 h-28 sm:w-28 sm:h-34 md:w-32 md:h-38 overflow-visible filter drop-shadow-sm hover:scale-110 transition-transform duration-300"
      >
        <defs>
          <linearGradient id="chickGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fed330" />
            <stop offset="100%" stopColor="#f7b731" />
          </linearGradient>
          <linearGradient id="chickHatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#70a1ff" />
            <stop offset="100%" stopColor="#1e90ff" />
          </linearGradient>
        </defs>

        <g className="duckling-bounce">
          {/* Party Hat */}
          <g transform="translate(0, -32) rotate(-12)">
            {/* Cone */}
            <path
              d="M 0,-30 L -14,5 L 14,5 Z"
              fill="url(#chickHatGrad)"
              stroke="#2c3e50"
              strokeWidth="2"
            />
            {/* Polka dots on hat */}
            <circle cx="-4" cy="-10" r="2" fill="#ffffff" />
            <circle cx="5" cy="-6" r="2.2" fill="#ffffff" />
            <circle cx="0" cy="-20" r="1.8" fill="#ffffff" />
            {/* Pom pom */}
            <circle cx="0" cy="-31" r="4.5" fill="#ff6b81" />
          </g>

          {/* Feet */}
          <ellipse cx="-12" cy="46" rx="8" ry="4" fill="#fa8231" />
          <ellipse cx="12" cy="46" rx="8" ry="4" fill="#fa8231" />

          {/* Chubby Body */}
          <ellipse
            cx="0"
            cy="15"
            rx="34"
            ry="32"
            fill="url(#chickGrad)"
            stroke="#2c3e50"
            strokeWidth="2.5"
          />

          {/* Head */}
          <circle
            cx="0"
            cy="-10"
            r="26"
            fill="url(#chickGrad)"
            stroke="#2c3e50"
            strokeWidth="2.5"
          />

          {/* Little Wings */}
          <ellipse cx="-30" cy="14" rx="8" ry="12" fill="#f7b731" stroke="#2c3e50" strokeWidth="2" transform="rotate(-20 -30 14)" />
          <ellipse cx="30" cy="14" rx="8" ry="12" fill="#f7b731" stroke="#2c3e50" strokeWidth="2" transform="rotate(20 30 14)" />

          {/* Cute Eyes `• •` */}
          <circle cx="-10" cy="-12" r="3.2" fill="#2c3e50" />
          <circle cx="10" cy="-12" r="3.2" fill="#2c3e50" />
          {/* Eye light */}
          <circle cx="-11" cy="-13" r="1" fill="#ffffff" />
          <circle cx="9" cy="-13" r="1" fill="#ffffff" />

          {/* Cheeks */}
          <ellipse cx="-16" cy="-4" rx="5" ry="3" fill="#ff7675" opacity="0.75" />
          <ellipse cx="16" cy="-4" rx="5" ry="3" fill="#ff7675" opacity="0.75" />

          {/* Beak */}
          <ellipse cx="0" cy="-6" rx="6" ry="4" fill="#fa8231" stroke="#2c3e50" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}
