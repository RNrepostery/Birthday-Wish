import React from 'react';

export default function PenguinCrying() {
  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      <svg
        viewBox="-160 -160 320 320"
        className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-visible filter drop-shadow-sm"
      >
        <defs>
          <linearGradient id="cryBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c7bcb2" />
            <stop offset="100%" stopColor="#a99a8d" />
          </linearGradient>
          <linearGradient id="cryHeadGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#553f31" />
            <stop offset="100%" stopColor="#412f24" />
          </linearGradient>
          <linearGradient id="tearGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#70a1ff" />
            <stop offset="100%" stopColor="#1e90ff" />
          </linearGradient>
          {/* Teardrop shape */}
          <g id="tearDropShape">
            <path
              d="M0,-8 C4,-8 7,-4 7,2 C7,8 0,14 0,14 C0,14 -7,8 -7,2 C-7,-4 -4,-8 0,-8 Z"
              fill="url(#tearGrad)"
            />
          </g>
        </defs>

        {/* Crying puddle under penguin with ripples */}
        <g className="tear-puddle-group">
          <ellipse cx="10" cy="95" rx="75" ry="14" fill="#a4b0be" opacity="0.35" />
          <ellipse cx="15" cy="95" rx="60" ry="11" fill="#70a1ff" opacity="0.45" className="puddle-ripple" />
        </g>

        {/* Tilted Crying Penguin */}
        <g className="sobbing-penguin" transform="rotate(-18 0 20)">
          {/* Feet sticking out */}
          <ellipse cx="-48" cy="52" rx="12" ry="6.5" fill="#3a2a1f" transform="rotate(-35 -48 52)" />
          <ellipse cx="-20" cy="62" rx="12" ry="6.5" fill="#3a2a1f" transform="rotate(-15 -20 62)" />

          {/* Torso / Body tilted */}
          <ellipse
            cx="0"
            cy="15"
            rx="58"
            ry="46"
            fill="url(#cryBodyGrad)"
            stroke="#3a2a1f"
            strokeWidth="4"
          />

          {/* White Belly */}
          <ellipse cx="-3" cy="18" rx="42" ry="34" fill="#fcf9f2" />

          {/* Wings - limp / sad on side */}
          <path
            d="M -45,18 C -65,30 -55,50 -40,42 C -30,36 -35,22 -45,18 Z"
            fill="url(#cryBodyGrad)"
            stroke="#3a2a1f"
            strokeWidth="3.5"
          />
          <path
            d="M 28,15 C 38,35 48,45 35,52 C 22,54 20,38 28,15 Z"
            fill="url(#cryBodyGrad)"
            stroke="#3a2a1f"
            strokeWidth="3.5"
          />

          {/* Head & Dark Cap tilted */}
          <path
            d="M -15,-20 C -25,-60 10,-75 35,-65 C 60,-55 68,-20 50,8 C 36,25 0,15 -15,-20 Z"
            fill="url(#cryHeadGrad)"
            stroke="#3a2a1f"
            strokeWidth="4"
          />

          {/* White Face Mask */}
          <path
            d="M 5,-45 C 22,-52 38,-42 42,-28 C 45,-14 36,2 20,4 C 6,6 -2,-10 0,-25 C 2,-36 -5,-42 5,-45 Z"
            fill="#fcf9f2"
          />

          {/* Tiny beak tilted */}
          <ellipse cx="14" cy="-18" rx="7" ry="5" fill="#f59f00" stroke="#3a2a1f" strokeWidth="1.5" transform="rotate(20 14 -18)" />

          {/* Sad squinting teary eyes */}
          <ellipse cx="6" cy="-28" rx="3.5" ry="3.5" fill="#2c1e14" />
          <ellipse cx="26" cy="-20" rx="3.5" ry="3.5" fill="#2c1e14" />

          {/* Blush */}
          <ellipse cx="-2" cy="-20" rx="7" ry="4.5" fill="#f8a5c2" opacity="0.8" transform="rotate(20 -2 -20)" />
          <ellipse cx="32" cy="-10" rx="7" ry="4.5" fill="#f8a5c2" opacity="0.8" transform="rotate(20 32 -10)" />

          {/* Giant streaming tear rivers flowing down from eyes */}
          <path
            d="M 4,-26 C -5,-15 -2,5 5,28 C 8,36 10,48 10,55"
            fill="none"
            stroke="url(#tearGrad)"
            strokeWidth="6.5"
            strokeLinecap="round"
            className="tear-stream"
          />
          <path
            d="M 28,-18 C 36,-5 42,15 42,35 C 42,48 40,58 38,65"
            fill="none"
            stroke="url(#tearGrad)"
            strokeWidth="6.5"
            strokeLinecap="round"
            className="tear-stream"
          />
        </g>

        {/* Animated Flying Teardrops spraying into air (Image 2 shows 3-5 blue drops popping) */}
        <g className="flying-tears">
          {/* Top splash drop 1 */}
          <g className="teardrop-pop drop-1">
            <use href="#tearDropShape" transform="translate(-45, -60) scale(0.9) rotate(-35)" />
          </g>
          {/* Top splash drop 2 */}
          <g className="teardrop-pop drop-2">
            <use href="#tearDropShape" transform="translate(-25, -95) scale(1) rotate(-15)" />
          </g>
          {/* Top splash drop 3 */}
          <g className="teardrop-pop drop-3">
            <use href="#tearDropShape" transform="translate(10, -85) scale(0.85) rotate(10)" />
          </g>
          {/* Top splash drop 4 */}
          <g className="teardrop-pop drop-4">
            <use href="#tearDropShape" transform="translate(-65, -35) scale(0.7) rotate(-55)" />
          </g>
        </g>
      </svg>
    </div>
  );
}
