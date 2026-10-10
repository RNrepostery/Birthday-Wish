import React, { useState } from 'react';
import Stage1AcceptGift from './components/Stage1AcceptGift';
import Stage2WhyNo from './components/Stage2WhyNo';
import Stage3ChoosePenguin from './components/Stage3ChoosePenguin';
import Stage4BirthdayCake from './components/Stage4BirthdayCake';
import Stage5Scrapbook from './components/Stage5Scrapbook';
import { playPop } from './utils/sound';

export default function App() {
  // Current stage: 1, 2, 3, 4, 5
  const [currentStage, setCurrentStage] = useState(1);

  const goToStage = (stageNum) => {
    playPop();
    setCurrentStage(stageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen relative flex flex-col justify-between selection:bg-pink-300 selection:text-pink-900">
      {/* Dynamic Screen View based on currentStage */}
      <div className="flex-1 w-full max-w-6xl mx-auto flex flex-col justify-center">
        {currentStage === 1 && (
          <Stage1AcceptGift
            onAccept={() => goToStage(3)}
            onDecline={() => goToStage(2)}
          />
        )}

        {currentStage === 2 && (
          <Stage2WhyNo
            onTryAgain={() => goToStage(1)}
          />
        )}

        {currentStage === 3 && (
          <Stage3ChoosePenguin
            onSelectPenguin1={() => goToStage(4)}
          />
        )}

        {currentStage === 4 && (
          <Stage4BirthdayCake
            onOpenScrapbook={() => goToStage(5)}
          />
        )}

        {currentStage === 5 && (
          <Stage5Scrapbook
            onRestart={() => goToStage(1)}
          />
        )}
      </div>

      {/* Quick Stage Navigation Bar at bottom (helpful for previewing all 5 scenes) */}
      <nav aria-label="Scene Navigator" className="sticky bottom-3 z-40 flex justify-center px-4 py-2 pointer-events-none">
        <div className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-pink-200/80 shadow-md flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
          <span className="text-[11px] sm:text-xs font-bold text-pink-700 font-fredoka px-1 sm:px-2 hidden xs:inline">
            Story Stage:
          </span>

          {[
            { num: 1, label: '1. Gift 🐧' },
            { num: 2, label: '2. No! 😭' },
            { num: 3, label: '3. Choose 🎁' },
            { num: 4, label: '4. Cake 🎂' },
            { num: 5, label: '5. Letter 💌' },
          ].map((item) => (
            <button
              key={item.num}
              onClick={() => goToStage(item.num)}
              className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-fredoka font-semibold transition-all cursor-pointer ${
                currentStage === item.num
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-xs scale-105'
                  : 'text-neutral-600 hover:text-pink-600 hover:bg-pink-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </main>
  );
}
