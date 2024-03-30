"use client";

import { useState } from "react";
import AudioPlayer from "react-audio-player";

import { usePressStore } from "@/store/press-store";

export default function MultiAudioItem() {
  const { checkedItems } = usePressStore((state) => state);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

  return (
    <AudioPlayer
      controls
      src={checkedItems[currentAudioIndex].src}
      onEnded={() => {
        setCurrentAudioIndex((prevIndex) =>
          prevIndex === checkedItems.length - 1 ? 0 : prevIndex + 1,
        );
      }}
    />
  );
}
