import React, { useState, useRef } from 'react';
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
    <div className="relative min-h-screen py-6 px-3 sm:px-6 flex flex-col items-center justify-center animate-fadeIn select-none scrapbook-background">
      {/* Top Header Banner matching Image 5 */}
      <div className="w-full max-w-4xl flex items-center justify-between mb-4 px-2">
        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-200 shadow-sm flex items-center gap-2">
          <span className="font-mali text-sm sm:text-base font-bold text-neutral-800">
            Imagine receiving this website on your birthday 🥹💌
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Music Toggle */}
          <button
            id="btn-music-toggle"
            onClick={handleMusicToggle}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-fredoka text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer ${
              isPlayingMusic
                ? 'bg-rose-500 text-white animate-pulse'
                : 'bg-white/90 text-neutral-700 hover:bg-rose-50 border border-pink-200'
            }`}
          >
            <span>{isPlayingMusic ? '🎵 Music: Playing' : '🎶 Play Music'}</span>
          </button>

          {/* Confetti button */}
          <button
            id="btn-confetti"
            onClick={handleShowerConfetti}
            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/90 hover:bg-pink-50 text-pink-600 border border-pink-200 rounded-full font-fredoka text-xs sm:text-sm font-semibold flex items-center gap-1 shadow-sm transition-all cursor-pointer"
          >
            <span>💖 Confetti</span>
          </button>

          {/* Edit / Personalize */}
          <button
            id="btn-edit-letter"
            onClick={() => {
              playPop();
              setIsEditing(!isEditing);
            }}
            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/90 hover:bg-pink-50 text-neutral-700 border border-pink-200 rounded-full font-fredoka text-xs sm:text-sm font-semibold flex items-center gap-1 shadow-sm transition-all cursor-pointer"
          >
            <span>{isEditing ? '💾 Done' : '✏️ Edit'}</span>
          </button>

          {/* Replay */}
          <button
            id="btn-restart"
            onClick={() => {
              playPop();
              onRestart();
            }}
            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/90 hover:bg-neutral-100 text-neutral-600 border border-neutral-200 rounded-full font-fredoka text-xs sm:text-sm font-semibold flex items-center gap-1 shadow-sm transition-all cursor-pointer"
            title="Replay from Beginning"
          >
            <span>🔄 Replay</span>
          </button>
        </div>
      </div>

      {/* Main Open Scrapbook Journal Album */}
      <div className="relative w-full max-w-5xl bg-[#fefcf8] rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2),0_0_0_12px_#fff0f5] border border-[#f0e2d5] overflow-hidden my-2">
        {/* Notebook Spiral Spine Center Divider */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 sm:w-12 z-20 pointer-events-none hidden md:flex flex-col justify-around items-center opacity-60">
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-2.5 rounded-full bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 border border-neutral-500 shadow-inner"
            />
          ))}
        </div>

        {/* Notebook Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-200/80">
          {/* ================= LEFT PAGE: Heart Photo & Cute Stickers ================= */}
          <div className="relative p-6 sm:p-10 flex flex-col items-center justify-between min-h-[560px] sm:min-h-[640px] notebook-ruled-page overflow-hidden">
            {/* Top Stickers */}
            <div className="w-full flex items-start justify-between z-10 pointer-events-none">
              {/* Camera Sticker in Top Left */}
              <div className="transform -rotate-12 hover:rotate-0 transition-transform">
                <CameraSticker className="w-20 h-16 sm:w-24 sm:h-20" />
              </div>

              {/* Star Jar Sticker in Top Right */}
              <div className="transform rotate-12 hover:rotate-0 transition-transform">
                <StarJarSticker className="w-16 h-20 sm:w-18 sm:h-24" />
              </div>
            </div>

            {/* Heart-Shaped Photo Frame */}
            <div className="relative my-auto flex flex-col items-center z-10 group">
              {/* Decorative Washi Tape on top */}
              <div className="absolute -top-3 w-24 h-6 bg-amber-100/90 border border-amber-200/60 transform -rotate-3 z-30 shadow-xs backdrop-blur-xs flex items-center justify-center pointer-events-none">
                <span className="text-[10px] text-amber-700/60 tracking-widest font-mono">✦ LOVE ✦</span>
              </div>

              {/* Heart Cutout Frame with glowing border */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="relative w-56 h-56 sm:w-72 sm:h-72 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 filter drop-shadow-[0_12px_24px_rgba(255,107,129,0.35)]"
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
                    clipPath:
                      'path("M 144 260 C 58 182 14 133 14 78 C 14 36 46 10 86 10 C 115 10 135 25 144 45 C 153 25 173 10 202 10 C 242 10 274 36 274 78 C 274 133 230 182 144 260 Z")',
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
              <div className="absolute -bottom-2 -right-4 z-20 pointer-events-none transform rotate-12">
                <CherrySticker className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>

              {/* Caption: "Cutie 🤍" matching Image 5 */}
              <div className="mt-3 flex items-center justify-center gap-1.5 z-20">
                {isEditing ? (
                  <input
                    type="text"
                    value={photoCaption}
                    onChange={(e) => setPhotoCaption(e.target.value)}
                    className="font-fredoka text-xl font-bold text-neutral-700 bg-white/90 border border-pink-300 rounded-lg px-2 py-0.5 text-center focus:outline-pink-500"
                  />
                ) : (
                  <h3 className="font-fredoka text-2xl sm:text-3xl font-bold text-neutral-700 drop-shadow-xs flex items-center gap-1.5">
                    <span>{photoCaption}</span>
                  </h3>
                )}
                <span className="text-pink-400 text-lg">✨</span>
              </div>
            </div>

            {/* Bottom Stickers: Peeking Bunny */}
            <div className="w-full flex items-end justify-between z-20 pointer-events-none">
              {/* Bunny peeking from bottom left */}
              <div className="transform -translate-x-3 translate-y-3">
                <BunnySticker className="w-20 h-24 sm:w-24 sm:h-28" />
              </div>

              {/* Tiny flower accent */}
              <div className="transform translate-y-1">
                <FlowerSticker className="w-8 h-8" color="#f8a5c2" />
              </div>
            </div>
          </div>

          {/* ================= RIGHT PAGE: Birthday Letter & Cute Stickers ================= */}
          <div className="relative p-6 sm:p-10 flex flex-col justify-between min-h-[560px] sm:min-h-[640px] notebook-ruled-page overflow-hidden">
            {/* Header: HAPPY BIRTHDAY matching Image 5 style */}
            <div className="text-center mb-3 z-10">
              <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wider text-[#e84393] drop-shadow-xs flex items-center justify-center gap-2">
                <span>HAPPY BIRTHDAY</span>
              </h2>
            </div>

            {/* Handwritten Love Letter text matching Image 5 */}
            <div className="relative z-10 my-auto px-2 sm:px-4">
              {isEditing ? (
                <textarea
                  value={letterText}
                  onChange={(e) => setLetterText(e.target.value)}
                  rows={13}
                  className="w-full font-mali text-sm sm:text-base text-neutral-800 bg-white/95 border-2 border-pink-300 rounded-2xl p-4 shadow-inner focus:outline-pink-500 leading-relaxed resize-none"
                  placeholder="Write your custom birthday letter..."
                />
              ) : (
                <div className="font-mali text-neutral-800 text-sm sm:text-base md:text-[17px] leading-relaxed whitespace-pre-line tracking-wide text-center sm:text-left drop-shadow-xs">
                  {letterText}
                </div>
              )}
            </div>

            {/* Bottom Section with Blue Bear & Flower stickers */}
            <div className="w-full flex items-end justify-between mt-4 z-20 pointer-events-none">
              {/* Peach flower sticker */}
              <div className="transform -translate-y-2">
                <FlowerSticker className="w-10 h-10" color="#ffa8a8" />
              </div>

              {/* Blue Bear / Seal holding yellow flower in bottom right */}
              <div className="transform translate-x-2 translate-y-2">
                <BlueBearSticker className="w-22 h-26 sm:w-26 sm:h-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
