import React from 'react';

// Mint & Pink Retro Camera Sticker
export function CameraSticker({ className = '' }) {
  return (
    <svg viewBox="0 0 100 80" className={`overflow-visible filter drop-shadow-md ${className}`}>
      {/* Flash */}
      <rect x="25" y="6" width="16" height="12" rx="3" fill="#a4b0be" stroke="#2f3542" strokeWidth="2" />
      <circle cx="33" cy="12" r="3" fill="#f1f2f6" />
      {/* Shutter button */}
      <rect x="70" y="8" width="12" height="10" rx="2" fill="#ff6b81" stroke="#2f3542" strokeWidth="2" />
      {/* Camera Body */}
      <rect x="10" y="16" width="80" height="56" rx="12" fill="#7bed9f" stroke="#2f3542" strokeWidth="3" />
      {/* Front Accent stripe */}
      <path d="M 10,34 L 90,34" stroke="#2ed573" strokeWidth="5" />
      {/* Lens outer circle */}
      <circle cx="50" cy="45" r="22" fill="#ffffff" stroke="#2f3542" strokeWidth="3" />
      <circle cx="50" cy="45" r="16" fill="#ff7675" stroke="#2f3542" strokeWidth="2.5" />
      {/* Heart inside lens */}
      <path
        d="M 50,49 C 48,46 43,44 43,41 C 43,38 46,36 49,38 C 50,39 50,39 50,39 C 50,39 50,39 51,38 C 54,36 57,38 57,41 C 57,44 52,46 50,49 Z"
        fill="#ffffff"
      />
    </svg>
  );
}

// Peeking White Bunny Sticker
export function BunnySticker({ className = '' }) {
  return (
    <svg viewBox="0 0 90 100" className={`overflow-visible filter drop-shadow-md ${className}`}>
      {/* Left Ear */}
      <ellipse cx="28" cy="30" rx="9" ry="26" fill="#ffffff" stroke="#2f3542" strokeWidth="2.8" transform="rotate(-15 28 30)" />
      <ellipse cx="28" cy="30" rx="5" ry="18" fill="#ffb8b8" transform="rotate(-15 28 30)" />
      {/* Right Ear */}
      <ellipse cx="62" cy="30" rx="9" ry="26" fill="#ffffff" stroke="#2f3542" strokeWidth="2.8" transform="rotate(15 62 30)" />
      <ellipse cx="62" cy="30" rx="5" ry="18" fill="#ffb8b8" transform="rotate(15 62 30)" />
      {/* Head */}
      <circle cx="45" cy="65" r="32" fill="#ffffff" stroke="#2f3542" strokeWidth="2.8" />
      {/* Cheeks */}
      <ellipse cx="28" cy="68" rx="6" ry="4" fill="#ff7675" opacity="0.6" />
      <ellipse cx="62" cy="68" rx="6" ry="4" fill="#ff7675" opacity="0.6" />
      {/* Eyes `^ ^` */}
      <path d="M 27,60 Q 33,54 39,60" fill="none" stroke="#2f3542" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 51,60 Q 57,54 63,60" fill="none" stroke="#2f3542" strokeWidth="2.5" strokeLinecap="round" />
      {/* Nose & mouth */}
      <polygon points="43,67 47,67 45,70" fill="#ff6b81" />
      <path d="M 42,72 Q 45,74 48,72" fill="none" stroke="#2f3542" strokeWidth="1.8" strokeLinecap="round" />
      {/* Paws */}
      <ellipse cx="26" cy="94" rx="9" ry="6" fill="#ffffff" stroke="#2f3542" strokeWidth="2.5" />
      <ellipse cx="64" cy="94" rx="9" ry="6" fill="#ffffff" stroke="#2f3542" strokeWidth="2.5" />
    </svg>
  );
}

// Cherry Sticker
export function CherrySticker({ className = '' }) {
  return (
    <svg viewBox="0 0 70 70" className={`overflow-visible filter drop-shadow-md ${className}`}>
      {/* Stem */}
      <path d="M 45,15 Q 35,28 22,46" fill="none" stroke="#2ed573" strokeWidth="3" strokeLinecap="round" />
      <path d="M 45,15 Q 48,32 50,48" fill="none" stroke="#2ed573" strokeWidth="3" strokeLinecap="round" />
      {/* Leaf */}
      <path d="M 45,15 Q 60,10 65,22 Q 55,26 45,15 Z" fill="#2ed573" stroke="#26af5f" strokeWidth="1.5" />
      {/* Left Cherry */}
      <circle cx="22" cy="48" r="14" fill="#ff4757" stroke="#2f3542" strokeWidth="2" />
      <ellipse cx="18" cy="44" rx="4" ry="2" fill="#ffffff" opacity="0.7" transform="rotate(-30 18 44)" />
      {/* Right Cherry */}
      <circle cx="50" cy="50" r="14" fill="#ff4757" stroke="#2f3542" strokeWidth="2" />
      <ellipse cx="46" cy="46" rx="4" ry="2" fill="#ffffff" opacity="0.7" transform="rotate(-30 46 46)" />
    </svg>
  );
}

// Glass Jar of Stars Sticker
export function StarJarSticker({ className = '' }) {
  return (
    <svg viewBox="0 0 65 85" className={`overflow-visible filter drop-shadow-md ${className}`}>
      {/* Cork lid */}
      <rect x="20" y="8" width="25" height="10" rx="3" fill="#e1b12c" stroke="#2f3542" strokeWidth="2" />
      {/* Glass neck */}
      <rect x="18" y="18" width="29" height="7" rx="2" fill="#dff9fb" stroke="#2f3542" strokeWidth="2" />
      {/* Glass Jar Body */}
      <rect x="10" y="25" width="45" height="52" rx="14" fill="#c7ecee" fillOpacity="0.6" stroke="#2f3542" strokeWidth="2.5" />
      {/* Star Origami Inside */}
      <text x="22" y="45" fontSize="13">⭐</text>
      <text x="32" y="62" fontSize="12">✨</text>
      <text x="18" y="68" fontSize="11">⭐</text>
      {/* Glass highlight */}
      <path d="M 16,33 L 16,65" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

// Blue Bear / Seal Holding Flower
export function BlueBearSticker({ className = '' }) {
  return (
    <svg viewBox="0 0 85 95" className={`overflow-visible filter drop-shadow-md ${className}`}>
      {/* Left Ear */}
      <circle cx="24" cy="24" r="11" fill="#70a1ff" stroke="#2f3542" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="6" fill="#a4b0be" opacity="0.5" />
      {/* Right Ear */}
      <circle cx="61" cy="24" r="11" fill="#70a1ff" stroke="#2f3542" strokeWidth="2.5" />
      <circle cx="61" cy="24" r="6" fill="#a4b0be" opacity="0.5" />
      {/* Body & Head */}
      <ellipse cx="42.5" cy="55" rx="30" ry="32" fill="#70a1ff" stroke="#2f3542" strokeWidth="2.5" />
      {/* White Muzzle */}
      <ellipse cx="42.5" cy="58" rx="14" ry="11" fill="#ffffff" />
      {/* Nose */}
      <ellipse cx="42.5" cy="53" rx="4" ry="3" fill="#2f3542" />
      {/* Eyes `> <` or curved */}
      <path d="M 30,46 Q 34,42 38,46" fill="none" stroke="#2f3542" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 47,46 Q 51,42 55,46" fill="none" stroke="#2f3542" strokeWidth="2.5" strokeLinecap="round" />
      {/* Cheeks */}
      <ellipse cx="26" cy="54" rx="5" ry="3.5" fill="#ff7675" opacity="0.75" />
      <ellipse cx="59" cy="54" rx="5" ry="3.5" fill="#ff7675" opacity="0.75" />
      {/* Yellow Flower in Paw */}
      <g transform="translate(18, 62)">
        <circle cx="0" cy="0" r="4.5" fill="#e67e22" />
        <circle cx="-5" cy="0" r="3.5" fill="#f1c40f" />
        <circle cx="5" cy="0" r="3.5" fill="#f1c40f" />
        <circle cx="0" cy="-5" r="3.5" fill="#f1c40f" />
        <circle cx="0" cy="5" r="3.5" fill="#f1c40f" />
        <path d="M 0,5 L -4,15" stroke="#2ed573" strokeWidth="2" />
      </g>
    </svg>
  );
}

// Blossom Flower Sticker
export function FlowerSticker({ className = '', color = '#ff9ff3' }) {
  return (
    <svg viewBox="0 0 50 50" className={`overflow-visible filter drop-shadow-sm ${className}`}>
      <circle cx="25" cy="16" r="8" fill={color} />
      <circle cx="34" cy="25" r="8" fill={color} />
      <circle cx="25" cy="34" r="8" fill={color} />
      <circle cx="16" cy="25" r="8" fill={color} />
      <circle cx="25" cy="25" r="6" fill="#feca57" stroke="#e67e22" strokeWidth="1" />
    </svg>
  );
}
