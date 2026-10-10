'use client';

import React, { useState } from 'react';
import PenguinGift from './PenguinGift';
import { playPop, playSparkle } from '../utils/sound';
import { triggerConfetti } from '../utils/confetti';
import { Button } from '@/components/ui/button';

export default function Stage3ChoosePenguin({ onSelectPenguin1 }) {
  const [activeModal, setActiveModal] = useState(null);

  const handlePenguinClick = (index) => {
    playPop();
    if (index === 1) {
      // 1st penguin selected as requested by the user
      playSparkle();
      triggerConfetti({
        particleCount: 80,
        origin: { x: 0.3, y: 0.6 },
        spread: 120,
      });
      onSelectPenguin1();
    } else if (index === 2) {
      setActiveModal({
        title: "Penguin #2's Secret Note 💌",
        text: "You are truly the brightest spark in my life. Your smile makes every cloudy day instantly warm and gentle! ✨ Never forget how deeply loved and cherished you are.",
        icon: "🌸",
      });
    } else if (index === 3) {
      setActiveModal({
        title: "Penguin #3's Love Voucher 🎫",
        text: "This golden ticket is redeemable for: Unlimited warm penguin hugs, 100 sweet forehead kisses, and your absolute favorite dessert whenever you desire! 🍓💖",
        icon: "🧸",
      });
    }
  };

  const closeModal = () => {
    playPop();
    setActiveModal(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh]  px-4 text-center animate-fadeIn select-none">
      {/* Title & Subtitle matching Image 3 */}
      <div className="mb-3 sm:mb-4">
        <h1 className="font-mali text-3xl sm:text-4xl md:text-5xl font-bold text-[#b71540] tracking-wide mb-1.5 drop-shadow-sm">
          Choose a penguin
        </h1>
        <p className="font-mali text-lg sm:text-2xl text-[#b71540] font-medium flex items-center justify-center gap-1.5 mb-3">
          <span>Each one has something special to say</span>
          <span className="text-yellow-400 text-xl sm:text-2xl animate-spin-slow">✨</span>
        </p>

        {/* Animated motion message matching user instruction */}
        <div className="inline-flex items-center gap-2 bg-white/95 px-5 py-2 rounded-full border-2 border-rose-300 shadow-sm animate-bounce">
          <span className="text-xl">👇</span>
          <span className="font-fredoka text-rose-600 font-bold text-base sm:text-lg tracking-wide">
            Please select a penguin!
          </span>
          <span className="text-xl">🎁</span>
        </div>
      </div>

      {/* 3 Penguins holding gifts side by side */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 my-2 sm:my-6 max-w-5xl">
        {/* Penguin 1 (Primary - advances to Stage 4) */}
        <div className="flex flex-col items-center">
          <PenguinGift index={1} isPrimary={true} onClick={() => handlePenguinClick(1)} />
          <span className="font-fredoka text-xs sm:text-sm font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 mt-1 shadow-xs">
            🐧 Penguin #1 (Big Surprise!)
          </span>
        </div>

        {/* Penguin 2 */}
        <div className="flex flex-col items-center">
          <PenguinGift index={2} onClick={() => handlePenguinClick(2)} />
          <span className="font-fredoka text-xs sm:text-sm font-semibold text-neutral-600 bg-white/80 px-3 py-1 rounded-full border border-neutral-200 mt-1 shadow-xs">
            🐧 Penguin #2
          </span>
        </div>

        {/* Penguin 3 */}
        <div className="flex flex-col items-center">
          <PenguinGift index={3} onClick={() => handlePenguinClick(3)} />
          <span className="font-fredoka text-xs sm:text-sm font-semibold text-neutral-600 bg-white/80 px-3 py-1 rounded-full border border-neutral-200 mt-1 shadow-xs">
            🐧 Penguin #3
          </span>
        </div>
      </div>

      {/* <div className="mt-4 text-neutral-500 font-mali text-sm sm:text-base">
        💡 Tip: Select <span className="font-bold text-rose-600">Penguin #1</span> to unwrap the main birthday celebration!
      </div> */}

      {/* Secret Note Modal for Penguins 2 & 3 */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border-4 border-pink-100 text-center transform scale-100 transition-all">
            <div className="text-4xl mb-3">{activeModal.icon}</div>
            <h3 className="font-fredoka text-2xl font-bold text-pink-700 mb-3">
              {activeModal.title}
            </h3>
            <p className="font-mali text-neutral-700 text-base sm:text-lg leading-relaxed mb-6">
              {activeModal.text}
            </p>
            <div className="flex flex-col gap-2.5">
              <Button
                onClick={() => {
                  closeModal();
                  handlePenguinClick(1);
                }}
                className="w-full h-auto py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-fredoka font-bold rounded-xl shadow-md hover:opacity-95 transition-all text-base cursor-pointer"
              >
                Go to Penguin #1's Birthday Party! 🎂
              </Button>
              <Button
                onClick={closeModal}
                variant="secondary"
                className="w-full h-auto py-2 bg-neutral-100 text-neutral-600 font-fredoka font-medium rounded-xl hover:bg-neutral-200 transition-all text-sm cursor-pointer"
              >
                Close Note
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
