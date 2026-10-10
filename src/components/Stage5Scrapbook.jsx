'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  CameraSticker,
  BunnySticker,
  CherrySticker,
  StarJarSticker,
  BlueBearSticker,
  FlowerSticker,
} from './ScrapbookStickers';
import { playPop, playSparkle, toggleBirthdayMusic } from '../utils/sound';
import { triggerConfetti, triggerHeartShower } from '../utils/confetti';
import { Button } from '@/components/ui/button';

const DEFAULT_LETTER = `Happy Birthday, my love 💖
It's your special day...
and just your smile makes my heart smile.
Somewhere in your laughter and happiness,
my whole world exists. ✨

You're the kind of person
who turns ordinary moments into beautiful memories.
Every second with you feels soft, warm, and special.

No matter how many birthdays come and go,
I'll always choose you, every single time.
You're my always and forever. 🌸

My safe place, my happiest us, my favorite person.
I hope this year brings you endless smiles, peace,
and all the love your heart deserves.

And whenever life gets all heavy,
just remember - I'll always be right beside you.

Happy birthday again, my girl. 🎂✨`;

export default function Stage5Scrapbook({ onRestart }) {
  const [photoUrl, setPhotoUrl] = useState('/birthday_photo.jpg');
  const [photoCaption, setPhotoCaption] = useState('Cutie 🤍');
  const [letterText, setLetterText] = useState(DEFAULT_LETTER);
  const [isEditing, setIsEditing] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const fileInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoUrl(url);
      playSparkle();
    }
  };

  const handleMusicToggle = () => {
    const state = toggleBirthdayMusic((isPlaying) => {
      setIsPlayingMusic(isPlaying);
    });
    setIsPlayingMusic(state);
  };

  const handleShowerConfetti = () => {
    playSparkle();
    triggerHeartShower();
  };

  return (
    <div className="relative min-h-[90vh] py-1 sm:py-2 px-2 sm:px-4 lg:px-6 flex flex-col items-center justify-center select-none scrapbook-background overflow-x-hidden">
      {/* Top Header Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-7xl xl:max-w-[1400px] flex flex-wrap items-center justify-between gap-2 mb-2 px-2"
      >
        <div className="bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-pink-200 shadow-xs flex items-center gap-2">
          <span className="font-mali text-xs sm:text-sm font-bold text-neutral-800">
            Imagine receiving this website on your birthday 🥹💌
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Music Toggle */}
          <Button
            id="btn-music-toggle"
            onClick={handleMusicToggle}
            variant="ghost"
            className={`h-auto px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full font-fredoka text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer ${
              isPlayingMusic
                ? 'bg-rose-500 text-white animate-pulse hover:bg-rose-600 hover:text-white'
                : 'bg-white/90 text-neutral-700 hover:bg-rose-50 border border-pink-200'
            }`}
          >
            <span>{isPlayingMusic ? '🎵 Music: Playing' : '🎶 Play Music'}</span>
          </Button>

          {/* Confetti button */}
          <Button
            id="btn-confetti"
            onClick={handleShowerConfetti}
            variant="ghost"
            className="h-auto px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white/90 hover:bg-pink-50 text-pink-600 border border-pink-200 rounded-full font-fredoka text-xs sm:text-sm font-semibold flex items-center gap-1 shadow-xs transition-all cursor-pointer"
          >
            <span>💖 Confetti</span>
          </Button>

          {/* Edit / Personalize */}
          <Button
            id="btn-edit-letter"
            onClick={() => {
              playPop();
              setIsEditing(!isEditing);
            }}
            variant="ghost"
            className="h-auto px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white/90 hover:bg-pink-50 text-neutral-700 border border-pink-200 rounded-full font-fredoka text-xs sm:text-sm font-semibold flex items-center gap-1 shadow-xs transition-all cursor-pointer"
          >
            <span>{isEditing ? '💾 Done' : '✏️ Edit'}</span>
          </Button>

          {/* Replay */}
          <Button
            id="btn-restart"
            onClick={() => {
              playPop();
              onRestart();
            }}
            variant="ghost"
            className="h-auto px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white/90 hover:bg-neutral-100 text-neutral-600 border border-neutral-200 rounded-full font-fredoka text-xs sm:text-sm font-semibold flex items-center gap-1 shadow-xs transition-all cursor-pointer"
            title="Replay from Beginning"
          >
            <span>🔄 Replay</span>
          </Button>
        </div>
      </motion.div>

      {/* Main Open Scrapbook Journal Album with Letter-Opening Animation */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, rotateX: 10 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-7xl xl:max-w-[1400px] bg-[#fefcf8] rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.18),0_0_0_10px_#fff0f5] border border-[#f0e2d5] overflow-hidden my-1"
      >
        {/* Notebook Spiral Spine Center Divider */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 sm:w-10 z-20 pointer-events-none hidden md:flex flex-col justify-around items-center opacity-60">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="w-3.5 h-2 rounded-full bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 border border-neutral-500 shadow-inner"
            />
          ))}
        </div>

        {/* Notebook Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-200/80">
          {/* ================= LEFT PAGE: Heart Photo & Cute Stickers ================= */}
          <div className="relative p-3 sm:p-5 lg:p-6 flex flex-col items-center justify-between min-h-[400px] sm:min-h-[450px] notebook-ruled-page overflow-hidden">
            {/* Top Stickers */}
            <div className="w-full flex items-start justify-between z-10 pointer-events-none">
              <div className="transform -rotate-12 hover:rotate-0 transition-transform">
                <CameraSticker className="w-14 h-10 sm:w-18 sm:h-14" />
              </div>
              <div className="transform rotate-12 hover:rotate-0 transition-transform">
                <StarJarSticker className="w-12 h-14 sm:w-15 sm:h-18" />
              </div>
            </div>

            {/* Heart-Shaped Photo Frame with Pop Animation */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 260, damping: 20 }}
              className="relative my-auto flex flex-col items-center z-10 group"
            >
              {/* Decorative Washi Tape on top */}
              <div className="absolute -top-3 w-20 h-5 bg-amber-100/90 border border-amber-200/60 transform -rotate-3 z-30 shadow-xs backdrop-blur-xs flex items-center justify-center pointer-events-none">
                <span className="text-[9px] text-amber-700/60 tracking-widest font-mono">✦ LOVE ✦</span>
              </div>

              {/* Heart Cutout Frame with glowing border */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 filter drop-shadow-[0_10px_20px_rgba(255,107,129,0.3)]"
                title="Click to change photo! 📸"
              >
                {/* SVG clipping path for heart */}
                <svg className="absolute w-0 h-0">
                  <defs>
                    <clipPath id="scrapbookHeartClip" clipPathUnits="objectBoundingBox">
                      <path d="M 0.5,0.88 C 0.2,0.62 0.05,0.45 0.05,0.26 C 0.05,0.12 0.16,0.03 0.3,0.03 C 0.4,0.03 0.47,0.08 0.5,0.15 C 0.53,0.08 0.6,0.03 0.7,0.03 C 0.84,0.03 0.95,0.12 0.95,0.26 C 0.95,0.45 0.8,0.62 0.5,0.88 Z" />
                    </clipPath>
                  </defs>
                </svg>

                {/* Heart Container Image */}
                <div
                  className="w-full h-full bg-pink-100 p-2 sm:p-2.5 transition-all duration-300 group-hover:bg-pink-200"
                  style={{
                    clipPath: 'url(#scrapbookHeartClip)',
                  }}
                >
                  <img
                    src={photoUrl}
                    alt="Birthday Cutie"
                    className="w-full h-full object-cover object-center filter saturate-105 brightness-102"
                  />
                </div>

                {/* Camera icon badge overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/25 text-white font-fredoka text-xs sm:text-sm font-semibold rounded-full pointer-events-none">
                  <span>📸 Click to change photo</span>
                </div>
              </div>

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />

              {/* Cherries sticker nestled by photo */}
              <div className="absolute -bottom-2 -right-3 z-20 pointer-events-none transform rotate-12">
                <CherrySticker className="w-12 h-12 sm:w-14 sm:h-14" />
              </div>

              {/* Caption */}
              <div className="mt-2 flex items-center justify-center gap-1.5 z-20">
                {isEditing ? (
                  <input
                    type="text"
                    value={photoCaption}
                    onChange={(e) => setPhotoCaption(e.target.value)}
                    className="font-fredoka text-base sm:text-lg font-bold text-neutral-700 bg-white/90 border border-pink-300 rounded-lg px-2 py-0.5 text-center focus:outline-pink-500"
                  />
                ) : (
                  <h3 className="font-fredoka text-lg sm:text-xl font-bold text-neutral-700 drop-shadow-xs flex items-center gap-1.5">
                    <span>{photoCaption}</span>
                  </h3>
                )}
                <span className="text-pink-400 text-sm">✨</span>
              </div>
            </motion.div>

            {/* Bottom Stickers: Peeking Bunny */}
            <div className="w-full flex items-end justify-between z-20 pointer-events-none">
              <div className="transform -translate-x-2 translate-y-2">
                <BunnySticker className="w-14 h-18 sm:w-18 sm:h-22" />
              </div>
              <div className="transform translate-y-1">
                <FlowerSticker className="w-6 h-6" color="#f8a5c2" />
              </div>
            </div>
          </div>

          {/* ================= RIGHT PAGE: Birthday Letter & Cute Stickers ================= */}
          <div className="relative p-3 sm:p-5 lg:p-6 flex flex-col justify-between min-h-[400px] sm:min-h-[450px] notebook-ruled-page overflow-hidden">
            {/* Header: HAPPY BIRTHDAY */}
            <div className="text-center mb-1 z-10">
              <h2 className="font-fredoka text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wider text-[#e84393] drop-shadow-xs flex items-center justify-center gap-2">
                <span>HAPPY BIRTHDAY</span>
              </h2>
            </div>

            {/* Handwritten Love Letter text */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative z-10 my-auto px-1 sm:px-3"
            >
              {isEditing ? (
                <textarea
                  value={letterText}
                  onChange={(e) => setLetterText(e.target.value)}
                  rows={8}
                  className="w-full font-mali text-xs sm:text-sm text-neutral-800 bg-white/95 border-2 border-pink-300 rounded-2xl p-3 shadow-inner focus:outline-pink-500 leading-relaxed resize-none"
                  placeholder="Write your custom birthday letter..."
                />
              ) : (
                <div className="font-mali text-neutral-800 text-xs sm:text-sm md:text-[14px] leading-relaxed whitespace-pre-line tracking-wide text-center sm:text-left drop-shadow-xs max-h-[280px] sm:max-h-[320px] overflow-y-auto pr-1">
                  {letterText}
                </div>
              )}
            </motion.div>

            {/* Bottom Section with Blue Bear & Flower stickers */}
            <div className="w-full flex items-end justify-between mt-1 z-20 pointer-events-none">
              <div className="transform -translate-y-1">
                <FlowerSticker className="w-7 h-7" color="#ffa8a8" />
              </div>
              <div className="transform translate-x-1 translate-y-1">
                <BlueBearSticker className="w-16 h-20 sm:w-18 sm:h-22" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}