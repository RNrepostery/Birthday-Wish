// Web Audio API synthesized sound effects and music box

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playPop() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

export function playSparkle() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    notes.forEach((freq, idx) => {
      const now = ctx.currentTime + idx * 0.06;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.36);
    });
  } catch (e) {
    console.warn('Sparkle audio error:', e);
  }
}

export function playHeartSpread() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const notes = [392.00, 523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      const now = ctx.currentTime + i * 0.08;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.42);
    });
  } catch (e) {
    console.warn('Heart spread audio error:', e);
  }
}

export function playSadCry() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    
    // Descending cartoon whimper
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.linearRampToValueAtTime(260, now + 0.35);
    osc.frequency.linearRampToValueAtTime(220, now + 0.6);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.66);

    // Cute sob squeak
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    const now2 = now + 0.4;
    osc2.frequency.setValueAtTime(320, now2);
    osc2.frequency.linearRampToValueAtTime(180, now2 + 0.4);
    gain2.gain.setValueAtTime(0.12, now2);
    gain2.gain.exponentialRampToValueAtTime(0.001, now2 + 0.45);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now2);
    osc2.stop(now2 + 0.46);
  } catch (e) {
    console.warn('Sad audio error:', e);
  }
}

export function playBlowCandle() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Breath / whoosh sound with filtered noise
    const bufferSize = ctx.sampleRate * 0.4;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.linearRampToValueAtTime(200, now + 0.35);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.38);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + 0.39);

    // Chime after blowing
    setTimeout(() => {
      playSparkle();
    }, 280);
  } catch (e) {
    console.warn('Blow candle error:', e);
  }
}

// Cute Happy Birthday Music Box loop
let melodyTimeoutId = null;
let isPlayingMelody = false;

// Happy Birthday notes: [freq, duration in seconds]
const birthdayNotes = [
  // Happy birthday to you
  [261.63, 0.3], [261.63, 0.3], [293.66, 0.6], [261.63, 0.6], [349.23, 0.6], [329.63, 1.1],
  // Happy birthday to you
  [261.63, 0.3], [261.63, 0.3], [293.66, 0.6], [261.63, 0.6], [392.00, 0.6], [349.23, 1.1],
  // Happy birthday dear cutie
  [261.63, 0.3], [261.63, 0.3], [523.25, 0.6], [440.00, 0.6], [349.23, 0.6], [329.63, 0.6], [293.66, 0.8],
  // Happy birthday to you
  [466.16, 0.3], [466.16, 0.3], [440.00, 0.6], [349.23, 0.6], [392.00, 0.6], [349.23, 1.4],
];

export function toggleBirthdayMusic(callback) {
  if (isPlayingMelody) {
    stopBirthdayMusic();
    if (callback) callback(false);
    return false;
  } else {
    startBirthdayMusic();
    if (callback) callback(true);
    return true;
  }
}

export function startBirthdayMusic() {
  if (isPlayingMelody) return;
  isPlayingMelody = true;
  playMelodySequence(0);
}

export function stopBirthdayMusic() {
  isPlayingMelody = false;
  if (melodyTimeoutId) {
    clearTimeout(melodyTimeoutId);
    melodyTimeoutId = null;
  }
}

function playMelodySequence(step) {
  if (!isPlayingMelody) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const note = birthdayNotes[step % birthdayNotes.length];
  const freq = note[0];
  const dur = note[1];

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const oscHarmonic = ctx.createOscillator();
  const gain = ctx.createGain();

  // Music box / celesta tone
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, now);

  oscHarmonic.type = 'sine';
  oscHarmonic.frequency.setValueAtTime(freq * 2, now);

  gain.gain.setValueAtTime(0.12, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + dur * 1.2);

  osc.connect(gain);
  oscHarmonic.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + dur * 1.3);
  oscHarmonic.start(now);
  oscHarmonic.stop(now + dur * 1.3);

  const nextDelay = dur * 850;
  melodyTimeoutId = setTimeout(() => {
    playMelodySequence((step + 1) % birthdayNotes.length);
  }, nextDelay);
}
