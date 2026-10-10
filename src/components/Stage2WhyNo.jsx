'use client';

import React from 'react';
import PenguinCrying from './PenguinCrying';
import { playPop } from '../utils/sound';
import { Button } from '@/components/ui/button';

export default function Stage2WhyNo({ onTryAgain }) {
  const handleTryAgain = () => {
    playPop();
    onTryAgain();
  };

  return (
    <div className="flex flex-col items-center justify-center  px-4 text-center animate-fadeIn">
      {/* Title matching Image 2 */}
     
        <h1 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-neutral-800 drop-shadow-sm select-none uppercase">
          WHY DID YOU CLICK NO!
        </h1>
    

      {/* Subtitle pleading */}
      <p className="font-mali text-pink-600 font-semibold text-lg sm:text-xl mb-1 animate-pulse">
        Why not accept the gift? 🥺💔
      </p>
      <p className="font-mali text-neutral-600 text-sm sm:text-base mb-2">
        Look how heartbroken the little penguin is...
      </p>

      {/* Crying Penguin Animation */}
      <div className="mt-2 mb-6">
        <PenguinCrying />
      </div>

      {/* TRY AGAIN Button matching Image 2 */}
      <div className="">
        <Button
          id="btn-try-again"
          onClick={handleTryAgain}
          className="group relative h-auto px-10 py-3.5 sm:px-14 sm:py-4 bg-gradient-to-b from-[#ff5e36] to-[#eb3b14] text-white font-fredoka text-2xl sm:text-3xl font-bold tracking-wider rounded-full shadow-[0_6px_0_#b32504,0_10px_20px_rgba(235,59,20,0.35)] hover:shadow-[0_4px_0_#b32504,0_8px_16px_rgba(235,59,20,0.4)] active:shadow-[0_1px_0_#b32504,0_3px_6px_rgba(235,59,20,0.3)] hover:translate-y-0.5 active:translate-y-1.5 transition-all duration-200 outline-none select-none cursor-pointer hover:bg-gradient-to-b hover:from-[#ff5e36] hover:to-[#eb3b14]"
        >
          {/* Glossy light reflection on top */}
          <span className="absolute top-1 left-6 right-6 h-2.5 bg-white/40 rounded-full blur-[0.5px]"></span>
          <span className="relative inline-flex items-center gap-2">
            TRY AGAIN
          </span>
          {/* Bottom underline accent matching Image 2 */}
          <span className="block w-4/5 mx-auto h-0.5 bg-white/70 rounded-full mt-0.5"></span>
        </Button>
      </div>
    </div>
  );
}
