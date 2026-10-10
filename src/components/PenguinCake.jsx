import React, { useState } from 'react';
import { playBlowCandle, playPop } from '../utils/sound';
import { triggerConfetti } from '../utils/confetti';

export default function PenguinCake({ onWishMade }) {
  const [isCandleBlown, setIsCandleBlown] = useState(false);

  const handleBlowCandle = () => {
    if (!isCandleBlown) {
      playBlowCandle();
      setIsCandleBlown(true);
      triggerConfetti({
        particleCount: 90,
        origin: { x: 0.5, y: 0.5 },
        spread: 360,
      });
      if (onWishMade) onWishMade();
    } else {
      // Re-light candle!
      playPop();
      setIsCandleBlown(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      {/* Make a Wish indicator */}
      <div
        onClick={handleBlowCandle}
        className="mb-2 cursor-pointer transition-transform hover:scale-105 active:scale-95 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-pink-200 shadow-sm text-pink-700 font-semibold text-sm sm:text-base flex items-center gap-1.5"
      >
        <span>{isCandleBlown ? '🎉 Wish Made! (Click to re-light)' : '✨ Tap cake to blow candle! ✨'}</span>
      </div>

      <svg
        viewBox="-140 -160 280 300"
        className="w-72 h-80 sm:w-80 sm:h-88 md:w-96 md:h-104 overflow-visible filter drop-shadow-md"
      >
        <defs>
          <linearGradient id="partyBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8d8768" />
            <stop offset="100%" stopColor="#716b51" />
          </linearGradient>
          <linearGradient id="partyHatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1dd1a1" />
            <stop offset="100%" stopColor="#10ac84" />
          </linearGradient>
          <linearGradient id="cakeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#74b9ff" />
            <stop offset="100%" stopColor="#0984e3" />
          </linearGradient>
          <linearGradient id="icingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff7675" />
            <stop offset="100%" stopColor="#d63031" />
          </linearGradient>
          <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fffa65" />
            <stop offset="100%" stopColor="#ff9f1a" />
          </linearGradient>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="-10" cy="118" rx="68" ry="11" fill="#dcd2c5" />

        {/* Penguin main character */}
        <g className="cake-penguin-float">
          {/* Party Hat */}
          <g transform="translate(18, -95) rotate(16)">
            <path
              d="M 0,-40 L -18,10 L 18,10 Z"
              fill="url(#partyHatGrad)"
              stroke="#2c3e50"
              strokeWidth="2.5"
            />
            {/* Party Hat Stripes / Polka dots */}
            <circle cx="-5" cy="-12" r="3" fill="#ffffff" />
            <circle cx="6" cy="-6" r="3.2" fill="#ff9ff3" />
            <circle cx="0" cy="-26" r="2.5" fill="#feca57" />
            {/* Pom pom */}
            <circle cx="0" cy="-42" r="6" fill="#ff6b6b" />
          </g>

          {/* Feet */}
          <ellipse cx="-32" cy="115" rx="13" ry="6.5" fill="#e67e22" transform="rotate(-8 -32 115)" />
          <ellipse cx="14" cy="115" rx="13" ry="6.5" fill="#e67e22" transform="rotate(8 14 115)" />

          {/* Main Body (Chubby, soft olive/taupe tone as in Image 4) */}
          <ellipse
            cx="-10"
            cy="40"
            rx="64"
            ry="66"
            fill="url(#partyBodyGrad)"
            stroke="#2c3e50"
            strokeWidth="3.5"
          />

          {/* White Belly */}
          <ellipse cx="-6" cy="42" rx="46" ry="52" fill="#fcf9f2" />

          {/* Head & Dark Cap */}
          <path
            d="M -56,-30 C -56,-85 -30,-105 -10,-105 C 15,-105 38,-85 38,-30 C 38,10 15,22 -10,22 C -35,22 -56,10 -56,-30 Z"
            fill="url(#partyBodyGrad)"
            stroke="#2c3e50"
            strokeWidth="3.5"
          />

          {/* White Face Mask */}
          <path
            d="M -10,-85 C 8,-85 26,-65 26,-36 C 26,-12 8,6 -10,6 C -28,6 -46,-12 -46,-36 C -46,-65 -28,-85 -10,-85 Z"
            fill="#fcf9f2"
          />

          {/* Cheeks */}
          <ellipse cx="-32" cy="-35" rx="8" ry="5.5" fill="#f8a5c2" opacity="0.85" />
          <ellipse cx="12" cy="-35" rx="8" ry="5.5" fill="#f8a5c2" opacity="0.85" />

          {/* Smiling Eyes `^ ^` */}
          <path
            d="M -35,-48 Q -27,-58 -19,-48"
            fill="none"
            stroke="#2c1e14"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M -1,-48 Q 7,-58 15,-48"
            fill="none"
            stroke="#2c1e14"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Beak */}
          <ellipse cx="-10" cy="-40" rx="7.5" ry="5.5" fill="#f39c12" stroke="#2c3e50" strokeWidth="1.5" />

          {/* Cute Bowtie */}
          <g transform="translate(-10, -5)">
            <polygon points="-12,-5 0,-1 -12,4" fill="#ffffff" stroke="#2c3e50" strokeWidth="1.8" />
            <polygon points="12,-5 0,-1 12,4" fill="#ffffff" stroke="#2c3e50" strokeWidth="1.8" />
            <circle cx="0" cy="-0.5" r="3.5" fill="#ffffff" stroke="#2c3e50" strokeWidth="1.8" />
          </g>

          {/* Left Wing resting on side */}
          <path
            d="M -60,25 C -75,45 -70,70 -58,72 C -52,72 -48,55 -55,35 Z"
            fill="url(#partyBodyGrad)"
            stroke="#2c3e50"
            strokeWidth="3"
          />

          {/* Right Arm holding cake plate forward */}
          <path
            d="M 25,25 C 42,32 55,30 65,22 C 72,15 68,5 50,15 Z"
            fill="url(#partyBodyGrad)"
            stroke="#2c3e50"
            strokeWidth="3"
          />

          {/* Arched Text: "MAKE A WISH" */}
          <path id="wishArc" d="M -75,-60 A 85,85 0 0,1 25,-85" fill="none" />
          <text fontSize="12" fill="#57606f" fontWeight="bold" letterSpacing="2">
            <textPath href="#wishArc" startOffset="10%">
              MAKE A WISH
            </textPath>
          </text>

          {/* Birthday Cake on Plate */}
          <g
            className="cursor-pointer group/cake"
            onClick={handleBlowCandle}
            transform="translate(68, 15)"
          >
            {/* Plate */}
            <ellipse cx="0" cy="22" rx="34" ry="7" fill="#ffffff" stroke="#2c3e50" strokeWidth="2.2" />

            {/* Cake Base */}
            <rect
              x="-24"
              y="-4"
              width="48"
              height="24"
              rx="4"
              fill="url(#cakeGrad)"
              stroke="#2c3e50"
              strokeWidth="2.2"
            />

            {/* Cake Frosting / Drip on Top */}
            <path
              d="M -24,-4 C -24,-4 -18,6 -12,-4 C -6,6 0,-4 6,6 C 12,-4 18,6 24,-4 L 24,-12 L -24,-12 Z"
              fill="url(#icingGrad)"
              stroke="#2c3e50"
              strokeWidth="1.8"
            />

            {/* Cake Candle */}
            <rect
              x="-3"
              y="-28"
              width="6"
              height="16"
              rx="1.5"
              fill="#ffffff"
              stroke="#2c3e50"
              strokeWidth="1.5"
            />
            {/* Candle wick */}
            <line x1="0" y1="-28" x2="0" y2="-32" stroke="#2c3e50" strokeWidth="1.5" />

            {/* Interactive Candle Flame or Smoke */}
            {!isCandleBlown ? (
              <g className="candle-flame-flicker">
                {/* Flame glow */}
                <ellipse cx="0" cy="-38" rx="8" ry="12" fill="#fffa65" opacity="0.4" />
                {/* Flame body */}
                <path
                  d="M 0,-46 C 5,-41 5,-34 0,-32 C -5,-34 -5,-41 0,-46 Z"
                  fill="url(#flameGrad)"
                  stroke="#e67e22"
                  strokeWidth="0.8"
                />
              </g>
            ) : (
              <g className="candle-smoke-rise">
                <path
                  d="M 0,-33 C -4,-40 3,-48 0,-56 C -3,-62 2,-68 0,-74"
                  fill="none"
                  stroke="#bdc3c7"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeDasharray="4 3"
                />
              </g>
            )}
          </g>
        </g>
      </svg>
    </div>
  );
}
