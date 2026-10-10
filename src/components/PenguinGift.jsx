import React from 'react';

export default function PenguinGift({ index = 1, isPrimary = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 p-2 select-none"
    >
      {/* Sparkle badge on hover */}
      <div className="absolute -top-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg pointer-events-none flex items-center gap-1 z-10 whitespace-nowrap">
        <span>Open Me! 🎁</span>
      </div>

      <svg
        viewBox="-110 -130 220 260"
        className="w-52 h-60 sm:w-60 sm:h-68 md:w-64 md:h-72 overflow-visible filter drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300"
      >
        <defs>
          <linearGradient id={`giftBodyGrad-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#cfc4ba" />
            <stop offset="100%" stopColor="#b3a496" />
          </linearGradient>
          <linearGradient id={`giftHeadGrad-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#553f31" />
            <stop offset="100%" stopColor="#3d2a1d" />
          </linearGradient>
          <linearGradient id={`giftBoxGrad-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8a5c2" />
            <stop offset="100%" stopColor="#f368e0" />
          </linearGradient>
          <linearGradient id={`ribbonGrad-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8854d0" />
            <stop offset="100%" stopColor="#574b90" />
          </linearGradient>
        </defs>

        {/* Ground shadow */}
        <ellipse
          cx="0"
          cy="115"
          rx="52"
          ry="9"
          fill="#dcd2c5"
          className="group-hover:scale-90 transition-transform duration-300 origin-center"
        />

        {/* Penguin with gentle idle sway */}
        <g className={`penguin-gift-sway sway-${index}`}>
          {/* Feet */}
          <ellipse cx="-24" cy="112" rx="13" ry="6" fill="#3a2a1f" />
          <ellipse cx="24" cy="112" rx="13" ry="6" fill="#3a2a1f" />

          {/* Chubby Lower Torso */}
          <ellipse
            cx="0"
            cy="55"
            rx="56"
            ry="58"
            fill={`url(#giftBodyGrad-${index})`}
            stroke="#3a2a1f"
            strokeWidth="3.5"
          />

          {/* White Belly */}
          <ellipse cx="0" cy="58" rx="43" ry="46" fill="#fcf9f2" />

          {/* Head & Dark Cap */}
          <path
            d="M -46,-12 C -46,-65 -26,-95 0,-95 C 26,-95 46,-65 46,-12 C 46,20 26,35 0,35 C -26,35 -46,20 -46,-12 Z"
            fill={`url(#giftHeadGrad-${index})`}
            stroke="#3a2a1f"
            strokeWidth="3.5"
          />

          {/* Crosshatch line texture on head matching hand-drawn sketch style */}
          <g stroke="#301f14" strokeWidth="1.2" opacity="0.35">
            <line x1="-30" y1="-70" x2="-10" y2="-88" />
            <line x1="-20" y1="-60" x2="5" y2="-82" />
            <line x1="-10" y1="-50" x2="20" y2="-75" />
            <line x1="0" y1="-40" x2="30" y2="-65" />
            <line x1="-35" y1="-55" x2="-15" y2="-75" />
            <line x1="10" y1="-30" x2="35" y2="-52" />
          </g>

          {/* White Heart Face Mask */}
          <path
            d="M 0,-70 C 17,-70 34,-52 34,-26 C 34,-5 18,12 0,12 C -18,12 -34,-5 -34,-26 C -34,-52 -17,-70 0,-70 Z"
            fill="#fcf9f2"
          />

          {/* Smiling Eyes `^ ^` */}
          <path
            d="M -26,-36 Q -18,-45 -10,-36"
            fill="none"
            stroke="#2c1e14"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 10,-36 Q 18,-45 26,-36"
            fill="none"
            stroke="#2c1e14"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Cheeks */}
          <ellipse cx="-23" cy="-24" rx="7.5" ry="5" fill="#f8a5c2" opacity="0.75" />
          <ellipse cx="23" cy="-24" rx="7.5" ry="5" fill="#f8a5c2" opacity="0.75" />

          {/* Beak */}
          <ellipse cx="0" cy="-28" rx="7" ry="5" fill="#f59f00" stroke="#3a2a1f" strokeWidth="1.5" />

          {/* Fluffy Arms Holding Gift */}
          {/* Left Arm holding side of box */}
          <path
            d="M -48,25 C -55,45 -48,65 -36,65 C -28,65 -25,48 -35,30 Z"
            fill={`url(#giftBodyGrad-${index})`}
            stroke="#3a2a1f"
            strokeWidth="3"
          />
          {/* Right Arm holding side of box */}
          <path
            d="M 48,25 C 55,45 48,65 36,65 C 28,65 25,48 35,30 Z"
            fill={`url(#giftBodyGrad-${index})`}
            stroke="#3a2a1f"
            strokeWidth="3"
          />

          {/* Wrapped Pink Gift Box with Ribbon in Hands */}
          <g className="gift-box-wrapper group-hover:scale-105 transition-transform duration-300 origin-center" transform="translate(0, 15)">
            {/* Box Body */}
            <rect
              x="-33"
              y="-15"
              width="66"
              height="62"
              rx="6"
              fill={`url(#giftBoxGrad-${index})`}
              stroke="#3a2a1f"
              strokeWidth="2.8"
            />

            {/* Vertical Ribbon */}
            <rect
              x="-7"
              y="-15"
              width="14"
              height="62"
              fill={`url(#ribbonGrad-${index})`}
            />

            {/* Horizontal Ribbon */}
            <rect
              x="-33"
              y="12"
              width="66"
              height="10"
              fill={`url(#ribbonGrad-${index})`}
            />

            {/* Ribbon Bow on Top */}
            <g transform="translate(0, -16)">
              {/* Left loop */}
              <ellipse
                cx="-12"
                cy="-4"
                rx="11"
                ry="7"
                fill={`url(#ribbonGrad-${index})`}
                stroke="#3a2a1f"
                strokeWidth="1.8"
                transform="rotate(-20 -12 -4)"
              />
              {/* Right loop */}
              <ellipse
                cx="12"
                cy="-4"
                rx="11"
                ry="7"
                fill={`url(#ribbonGrad-${index})`}
                stroke="#3a2a1f"
                strokeWidth="1.8"
                transform="rotate(20 12 -4)"
              />
              {/* Center knot */}
              <circle
                cx="0"
                cy="-3"
                r="5.5"
                fill="#574b90"
                stroke="#3a2a1f"
                strokeWidth="1.8"
              />
            </g>

            {/* Box highlight */}
            <path
              d="M -30,-12 L -20,-12 L -28,2"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.6"
            />
          </g>

          {/* Little flipper paws tucked on the box */}
          <ellipse cx="-28" cy="42" rx="9" ry="6" fill="#fcf9f2" stroke="#3a2a1f" strokeWidth="2.5" />
          <ellipse cx="28" cy="42" rx="9" ry="6" fill="#fcf9f2" stroke="#3a2a1f" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}
