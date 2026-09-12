"use client";

import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { SpellingCard } from "../components/SpellingCard";
import { StickerBook } from "../components/StickerBook";
import { getSavedStars, saveStars, getSavedCorrectCount, saveCorrectCount, getUnlockedStickers } from "../utils/storage";
import { Sparkles, Heart } from "lucide-react";

export default function Home() {
  const [currentTab, setTab] = useState<"spelling" | "stickers">("spelling");
  const [stars, setStars] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [unlockedStickerCount, setUnlockedStickerCount] = useState<number>(1);

  useEffect(() => {
    setStars(getSavedStars());
    setCorrectCount(getSavedCorrectCount());
    setUnlockedStickerCount(getUnlockedStickers().length);
  }, []);

  const handleWordCompleted = (newTotalCorrect: number) => {
    const newStars = stars + 3; // Award 3 Stars per correct word!
    setStars(newStars);
    saveStars(newStars);

    setCorrectCount(newTotalCorrect);
    saveCorrectCount(newTotalCorrect);

    setUnlockedStickerCount(getUnlockedStickers().length);
  };

  return (
    <main className="min-h-screen pb-16 flex flex-col items-center justify-between">
      <div className="w-full">
        <Header
          currentTab={currentTab}
          setTab={setTab}
          stars={stars}
          correctCount={correctCount}
          unlockedStickerCount={unlockedStickerCount}
        />

        <div className="px-4 py-2">
          {currentTab === "spelling" ? (
            <SpellingCard
              onWordCompleted={handleWordCompleted}
              correctCount={correctCount}
            />
          ) : (
            <StickerBook />
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs md:text-sm text-purple-700 max-w-xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-1.5 mb-1 font-black">
          <Sparkles className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span>2nd Grade Spelling Sparkle!</span>
          <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
        </div>
        <p>Keep practicing and collecting cute stickers every week! ✨</p>
      </footer>
    </main>
  );
}
