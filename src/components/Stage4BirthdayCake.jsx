'use client';

import React, { useState } from 'react';
import PenguinCake from './PenguinCake';
import DucklingParty from './DucklingParty';
import { playPop, playSparkle } from '../utils/sound';
import { triggerHeartShower, triggerConfetti } from '../utils/confetti';

export default function Stage4BirthdayCake({ onOpenScrapbook }) {
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const handleHeartClick = () => {
    setIsHeartClicked(true);
    playSparkle();
    triggerHeartShower();
    setTimeout(() => {
      onOpenScrapbook();
    }, 700);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh]  px-4 overflow-hidden select-none animate-fadeIn">
      {/* Top Left: Cute Duckling in Party Hat */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-12 z-10">
        <DucklingParty />
      </div>

      {/* Top Right: Streamer & Sparkles */}
      <div className="absolute top-6 right-8 sm:top-10 sm:right-16 pointer-events-none">
        <svg viewBox="0 0 80 80" className="w-16 h-16 sm:w-20 sm:h-20 animate-wiggle">
          <path
            d="M 10,10 Q 30,35 25,60 Q 45,35 60,65"
            fill="none"
            stroke="#00d2d3"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <text x="50" y="25" fontSize="18">✨</text>
          <text x="15" y="75" fontSize="16">🎉</text>
        </svg>
      </div>

      {/* Floating Sparkles in Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <span className="absolute top-24 left-1/4 text-2xl animate-pulse">⭐</span>
        <span className="absolute top-36 right-1/4 text-2xl animate-bounce">✨</span>
        <span className="absolute bottom-28 left-16 text-3xl animate-pulse">🌸</span>
        <span className="absolute bottom-20 right-28 text-2xl animate-bounce">💖</span>
      </div>

      {/* Title: HAPPY BIRTHDAY! Matching Image 4 */}
      <div className="mt-8 sm:mt-4 mb-2 text-center z-10">
        <h1 className="font-fredoka text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wider text-[#e84393] drop-shadow-[0_3px_0_#fd79a8] uppercase flex items-center justify-center gap-2">
          <span>HAPPY BIRTHDAY!</span>
        </h1>
        {/* Floating tiny stars under title */}
        <div className="flex justify-center gap-3 text-amber-400 text-lg mt-1">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>

      {/* Main Penguin with Cake and Interactive Candle */}
      <div className="my-1 sm:my-2 z-10">
        <PenguinCake />
      </div>

      {/* Bottom Stacked Gift Boxes (Right side as in Image 4) */}
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-12 pointer-events-none">
        <svg viewBox="0 0 160 120" className="w-32 h-24 sm:w-44 sm:h-32 overflow-visible">
          {/* Bottom Big Gift */}
          <rect x="40" y="45" width="75" height="70" rx="6" fill="#f8a5c2" stroke="#2c3e50" strokeWidth="2.5" />
          <rect x="72" y="45" width="12" height="70" fill="#ffffff" />
          <rect x="40" y="75" width="75" height="12" fill="#ffffff" />
          {/* Bow on bottom gift */}
          <circle cx="78" cy="45" r="7" fill="#ffffff" stroke="#2c3e50" strokeWidth="1.5" />

          {/* Left Yellow Gift */}
          <rect x="5" y="65" width="45" height="50" rx="4" fill="#fed330" stroke="#2c3e50" strokeWidth="2.2" />
          <rect x="23" y="65" width="8" height="50" fill="#ff9ff3" />
          <rect x="5" y="86" width="45" height="8" fill="#ff9ff3" />

          {/* Right Mint Gift */}
          <rect x="105" y="55" width="48" height="60" rx="4" fill="#55efc4" stroke="#2c3e50" strokeWidth="2.2" />
          <rect x="125" y="55" width="8" height="60" fill="#fd79a8" />
          <rect x="105" y="80" width="48" height="8" fill="#fd79a8" />
        </svg>
      </div>

      {/* Bottom Left Party Popper Blast matching Image 4 */}
      <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-12 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32">
          {/* Confetti pieces */}
          <rect x="20" y="30" width="8" height="16" rx="2" fill="#ff7675" transform="rotate(25 20 30)" />
          <rect x="55" y="15" width="8" height="16" rx="2" fill="#74b9ff" transform="rotate(-35 55 15)" />
          <circle cx="45" cy="55" r="7" fill="#ffeaa7" />
          <rect x="68" y="45" width="10" height="14" rx="2" fill="#55efc4" transform="rotate(45 68 45)" />
          <circle cx="25" cy="70" r="8" fill="#a29bfe" />
        </svg>
      </div>

      {/* RIGHT SIDE: Interactive CLICK ME Heart Button (Matches Candy Heart in Image 4!) */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 sm:right-8 sm:top-1/2 z-30">
        <button
          id="btn-heart-click-me"
          onClick={handleHeartClick}
          className={`group flex flex-col items-center justify-center p-3 sm:p-4 rounded-3xl transition-all duration-300 outline-none cursor-pointer ${
            isHeartClicked
              ? 'scale-125 rotate-12 filter drop-shadow-[0_0_25px_rgba(255,107,129,0.8)]'
              : 'hover:scale-115 active:scale-95 hover:rotate-6'
          }`}
          title="Click to open the secret love letter scrapbook!"
        >
          {/* Pulsing glow ring */}
          <div className="absolute -inset-2 bg-pink-400/30 rounded-full blur-md animate-ping-slow pointer-events-none"></div>

          {/* Heart Shape SVG Badge */}
          <div className="relative w-18 h-18 sm:w-22 sm:h-22 filter drop-shadow-[0_8px_16px_rgba(235,59,90,0.4)]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
  <defs>
    <linearGradient id="candyHeartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ff758f" />
      <stop offset="100%" stopColor="#ff4d6d" />
    </linearGradient>
  </defs>
  
  {/* Wrapper group to scale down by 50% and keep it centered */}
  <g transform="translate(25, 25) scale(0.5)">
    <path
      d="M 50,88 C 20,62 5,45 5,26 C 5,12 16,3 30,3 C 40,3 47,8 50,15 C 53,8 60,3 70,3 C 84,3 95,12 95,26 C 95,45 80,62 50,88 Z"
      fill="url(#candyHeartGrad)"
      stroke="#ffffff"
      strokeWidth="3.5"
    />
    {/* Highlight curve */}
    <path
      d="M 20,18 C 25,10 35,9 42,12"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.75"
    />
  </g>
</svg>
            {/* Text inside Heart */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-fredoka font-bold text-xs sm:text-sm tracking-widest uppercase pointer-events-none pb-1">
              <span>CLICK</span>
              <span>ME</span>
              <span className="text-[10px]">💌</span>
            </div>
          </div>

          <span className="mt-1 font-mali font-bold text-xs sm:text-sm text-pink-700 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full shadow-xs border border-pink-200">
            Open Letter 💖
          </span>
        </button>
      </div>

      {/* Heart Click Magical Transition Overlay */}
      {isHeartClicked && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none animate-fadeIn bg-pink-100/70 backdrop-blur-xs transition-opacity duration-500">
          <div className="text-8xl sm:text-9xl animate-bounce transform scale-125">
            💌💖
          </div>
        </div>
      )}
    </div>
  );
}
