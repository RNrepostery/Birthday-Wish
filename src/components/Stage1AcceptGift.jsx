'use client';

import React, { useState } from 'react';
import PenguinHappy from './PenguinHappy';
import { playPop, playSadCry, playHeartSpread, playSparkle } from '../utils/sound';
import { Button } from '@/components/ui/button';

export default function Stage1AcceptGift({ onAccept, onDecline }) {
  const [hasSpread, setHasSpread] = useState(false);

  const handleSpreadComplete = () => {
    setHasSpread(true);
    playSparkle();
  };

  const handleYes = () => {
    playPop();
    onAccept();
  };

  const handleNo = () => {
    playSadCry();
    onDecline();
  };

  return (
    <div className="flex flex-col items-center justify-center   px-4 text-center">
      {/* Title - smoothly reveals after the hearts spread outward */}
      <div
        className={`transition-all duration-700 ease-out transform mb-4 ${
          hasSpread
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 -translate-y-6 scale-90 pointer-events-none'
        }`}
      >
        <h1 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-neutral-800 drop-shadow-sm select-none uppercase">
          PLS ACCEPT THE GIFT
        </h1>
      </div>

      {/* Floating Penguin with Heart Spread Motion */}
      {/* <div className="my-2 sm:my-4"> */}
        <PenguinHappy onSpreadComplete={handleSpreadComplete} />
      {/* </div> */}

      {/* Action Buttons: YES and NO */}
      <div
        className={`flex items-center justify-center gap-6 sm:gap-10  sm:mt-2 transition-all duration-700 delay-150 transform ${
          hasSpread
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-6 scale-90 pointer-events-none'
        }`}
      >
        {/* YES Button */}
        <Button
          id="btn-accept-yes"
          onClick={handleYes}
          className="group relative h-auto px-9 py-3 sm:px-12 sm:py-3.5 bg-gradient-to-b from-[#ff5e36] to-[#eb3b14] text-white font-fredoka text-2xl sm:text-3xl font-bold tracking-wider rounded-full shadow-[0_6px_0_#b32504,0_10px_20px_rgba(235,59,20,0.35)] hover:shadow-[0_4px_0_#b32504,0_8px_16px_rgba(235,59,20,0.4)] active:shadow-[0_1px_0_#b32504,0_3px_6px_rgba(235,59,20,0.3)] hover:translate-y-0.5 active:translate-y-1.5 transition-all duration-200 outline-none select-none cursor-pointer hover:bg-gradient-to-b hover:from-[#ff5e36] hover:to-[#eb3b14]"
        >
          {/* Glossy light reflection on top */}
          <span className="absolute top-1 left-5 right-5 h-2.5 bg-white/40 rounded-full blur-[0.5px]"></span>
          <span className="relative inline-flex items-center gap-2">
            YES
          </span>
          {/* Bottom underline accent */}
          <span className="block w-3/4 mx-auto h-0.5 bg-white/70 rounded-full mt-0.5"></span>
        </Button>

        {/* NO Button with dark pink text */}
        <Button
          id="btn-accept-no"
          onClick={handleNo}
          className="group relative h-auto px-9 py-3 sm:px-12 sm:py-3.5 bg-gradient-to-b from-[#ff5e36] to-[#eb3b14] font-fredoka text-2xl sm:text-3xl font-bold tracking-wider rounded-full shadow-[0_6px_0_#b32504,0_10px_20px_rgba(235,59,20,0.35)] hover:shadow-[0_4px_0_#b32504,0_8px_16px_rgba(235,59,20,0.4)] active:shadow-[0_1px_0_#b32504,0_3px_6px_rgba(235,59,20,0.3)] hover:translate-y-0.5 active:translate-y-1.5 transition-all duration-200 outline-none select-none cursor-pointer hover:bg-gradient-to-b hover:from-[#ff5e36] hover:to-[#eb3b14]"
        >
          {/* Glossy light reflection on top */}
          <span className="absolute top-1 left-5 right-5 h-2.5 bg-white/40 rounded-full blur-[0.5px]"></span>
          <span 
            className="relative inline-flex items-center gap-2"
            style={{ color: '#5b1029' }}
          >
            NO
          </span>
          {/* Bottom underline accent */}
          <span className="block w-3/4 mx-auto h-0.5 bg-white/70 rounded-full mt-0.5"></span>
        </Button>
      </div>
    </div>
  );
}