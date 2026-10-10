'use client';

import React, { useEffect, useState } from 'react';
import { playHeartSpread } from '../utils/sound';

export default function PenguinHappy({ onSpreadComplete }) {
  const [spreadPhase, setSpreadPhase] = useState(false);

  useEffect(() => {
    // Stage the heart spread animation
    const timer = setTimeout(() => {
      setSpreadPhase(true);
      playHeartSpread();
      if (onSpreadComplete) {
        setTimeout(onSpreadComplete, 600);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [onSpreadComplete]);

  // Hearts positions around the penguin matching image 1
  const hearts = [
    { id: 1, x: -75, y: -45, scale: 0.9, rot: -15, delay: '0.1s', color: '#f78fb3' },
    { id: 2, x: -45, y: -90, scale: 0.7, rot: -8, delay: '0.2s', color: '#ffb8b8' },
    { id: 3, x: 0, y: -115, scale: 0.85, rot: 5, delay: '0.15s', color: '#ff7675' },
    { id: 4, x: 50, y: -95, scale: 0.75, rot: 18, delay: '0.25s', color: '#f8a5c2' },
    { id: 5, x: 80, y: -40, scale: 0.95, rot: 12, delay: '0.18s', color: '#ff6b81' },
    { id: 6, x: 75, y: 15, scale: 0.65, rot: -10, delay: '0.3s', color: '#f78fb3' },
    { id: 7, x: -80, y: 10, scale: 0.7, rot: -20, delay: '0.22s', color: '#ffb8b8' },
    { id: 8, x: -30, y: -30, scale: 0.5, rot: -5, delay: '0.35s', color: '#fd79a8' },
    { id: 9, x: 35, y: -35, scale: 0.55, rot: 15, delay: '0.28s', color: '#ff7675' },
  ];

  // Sparkles
  const sparkles = [
    { id: 1, x: -28, y: -105, scale: 0.9, color: '#e056fd' },
    { id: 2, x: 25, y: -110, scale: 1.1, color: '#f368e0' },
    { id: 3, x: -65, y: -70, scale: 0.8, color: '#ff9ff3' },
    { id: 4, x: 68, y: -75, scale: 0.85, color: '#ff9ff3' },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center select-none my-0 py-0">
      {/* SVG Container with slightly increased height */}
      <svg
        viewBox="-120 -120 260 230"
        className="w-72 h-72 sm:w-80 sm:h-80 md:w-92 md:h-92 overflow-visible filter drop-shadow-sm"
      >
        <defs>
          {/* Subtle gradient for body */}
          <linearGradient id="penguinBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c7bcb2" />
            <stop offset="100%" stopColor="#a99a8d" />
          </linearGradient>
          <linearGradient id="penguinHeadGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#553f31" />
            <stop offset="100%" stopColor="#412f24" />
          </linearGradient>
          {/* Sparkle star definition */}
          <g id="sparkleStar">
            <path
              d="M0,-12 Q0,0 -12,0 Q0,0 0,12 Q0,0 12,0 Q0,0 0,-12 Z"
              fill="currentColor"
            />
          </g>
          {/* Heart definition */}
          <g id="heartShape">
            <path
              d="M 0,0 C -5,-8 -16,-8 -16,2 C -16,10 0,18 0,22 C 0,18 16,10 16,2 C 16,-8 5,-8 0,0 Z"
              fill="currentColor"
              transform="rotate(180) translate(0, -10)"
            />
          </g>
        </defs>

        {/* Dynamic Shadow on Ground */}
        <ellipse
          cx="0"
          cy="105"
          rx="52"
          ry="10"
          fill="#dcd2c5"
          className="penguin-ground-shadow"
        />

        {/* Floating Hearts that Spread outwards */}
        <g className={`heart-spread-group ${spreadPhase ? 'spread-active' : 'spread-intro'}`}>
          {hearts.map((h) => (
            <g
              key={h.id}
              className="animated-floating-heart"
              style={{
                transform: spreadPhase
                  ? `translate(${h.x}px, ${h.y}px) rotate(${h.rot}deg) scale(${h.scale})`
                  : 'translate(0px, 0px) scale(0)',
                transition: `transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${h.delay}`,
                color: h.color,
              }}
            >
              <use href="#heartShape" />
            </g>
          ))}

          {/* Sparkles */}
          {sparkles.map((s) => (
            <g
              key={s.id}
              className="animated-sparkle"
              style={{
                transform: spreadPhase
                  ? `translate(${s.x}px, ${s.y}px) scale(${s.scale})`
                  : 'translate(0px, 0px) scale(0)',
                transition: `transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s`,
                color: s.color,
              }}
            >
              <use href="#sparkleStar" />
            </g>
          ))}
        </g>

        {/* Main Floating Penguin Body */}
        <g className="floating-penguin-body">
          {/* Little Feet */}
          <ellipse cx="-22" cy="52" rx="11" ry="6.5" fill="#3a2a1f" transform="rotate(-12 -22 52)" />
          <ellipse cx="22" cy="52" rx="11" ry="6.5" fill="#3a2a1f" transform="rotate(12 22 52)" />

          {/* Left Wing (Spread open upwards!) */}
          <path
            d="M -38,10 C -60,0 -80,-15 -82,-30 C -82,-35 -72,-32 -55,-12 C -42,3 -35,16 -38,10 Z"
            fill="url(#penguinBodyGrad)"
            stroke="#3a2a1f"
            strokeWidth="3.5"
            strokeLinejoin="round"
            className="left-wing-spread"
          />

          {/* Right Wing (Spread open upwards!) */}
          <path
            d="M 38,10 C 60,0 80,-15 82,-30 C 82,-35 72,-32 55,-12 C 42,3 35,16 38,10 Z"
            fill="url(#penguinBodyGrad)"
            stroke="#3a2a1f"
            strokeWidth="3.5"
            strokeLinejoin="round"
            className="right-wing-spread"
          />

          {/* Chubby Lower Torso / Body */}
          <ellipse
            cx="0"
            cy="15"
            rx="56"
            ry="48"
            fill="url(#penguinBodyGrad)"
            stroke="#3a2a1f"
            strokeWidth="4"
          />

          {/* White Belly Patch */}
          <ellipse cx="0" cy="18" rx="42" ry="35" fill="#fcf9f2" />

          {/* Head & Dark Cap */}
          <path
            d="M -44,-10 C -44,-48 -25,-68 0,-68 C 25,-68 44,-48 44,-10 C 44,14 25,24 0,24 C -25,24 -44,14 -44,-10 Z"
            fill="url(#penguinHeadGrad)"
            stroke="#3a2a1f"
            strokeWidth="4"
          />

          {/* Heart/Face White Mask */}
          <path
            d="M 0,-48 C 14,-48 28,-36 28,-18 C 28,-2 14,8 0,8 C -14,8 -28,-2 -28,-18 C -28,-36 -14,-48 0,-48 Z"
            fill="#fcf9f2"
          />

          {/* Cute Blush Cheeks */}
          <ellipse cx="-23" cy="-14" rx="8" ry="5.5" fill="#f8a5c2" opacity="0.8" />
          <ellipse cx="23" cy="-14" rx="8" ry="5.5" fill="#f8a5c2" opacity="0.8" />

          {/* Smiling Curved Eyes: `^ ^` */}
          <path
            d="M -23,-24 Q -16,-32 -9,-24"
            fill="none"
            stroke="#2c1e14"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 9,-24 Q 16,-32 23,-24"
            fill="none"
            stroke="#2c1e14"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Cute Orange Beak */}
          <ellipse cx="0" cy="-18" rx="7" ry="5" fill="#f59f00" stroke="#3a2a1f" strokeWidth="1.5" />

          {/* Belly Fluff Accents */}
          <path
            d="M -6,14 Q 0,18 6,14"
            fill="none"
            stroke="#d5c8be"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M -8,22 Q 0,27 8,22"
            fill="none"
            stroke="#d5c8be"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}