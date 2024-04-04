"use client";

import React, { useEffect, useRef } from "react";
import { Box, IconButton, Text } from "@chakra-ui/react";

import { usePressStore } from "@/store/press-store";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useMultiAudioStore } from "@/store/multi-audio-store";

export default function xMultiAudioItem() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const { checkedItems } = usePressStore((state) => state);
  const { audioIndex, setAudioIndex } = useMultiAudioStore((state) => state);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleEnded = () => {
      if (audioElement) {
        audioElement.play();
      }
    };

    if (audioElement) {
      audioElement.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("ended", handleEnded);
      }
    };
  }, [audioIndex]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      position="fixed"
      width="100vw"
      height="7rem"
      bg="white"
    >
      <Box display="flex" alignItems="center" justifyContent="space-around">
        <Text>
          {
            checkedItems[
              audioIndex === 0 ? checkedItems.length - 1 : audioIndex - 1
            ].song.split(".")[0]
          }
        </Text>
        <Text>{checkedItems[audioIndex].song.split(".")[0]}</Text>
        <Text>
          {
            checkedItems[
              checkedItems.length - 1 === audioIndex ? 0 : audioIndex + 1
            ].song.split(".")[0]
          }
        </Text>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-around">
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="teal"
          aria-label="Done"
          fontSize="20px"
          icon={<ArrowLeftIcon />}
          onClick={() =>
            setAudioIndex(
              audioIndex === 0 ? checkedItems.length - 1 : audioIndex - 1,
            )
          }
        />
        <audio
          autoPlay
          controls
          src={`/songs/${checkedItems[audioIndex].song}`}
          ref={audioRef}
        />
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="teal"
          aria-label="Done"
          fontSize="20px"
          icon={<ArrowRightIcon />}
          onClick={() =>
            setAudioIndex(
              audioIndex === checkedItems.length - 1 ? 0 : audioIndex + 1,
            )
          }
        />
      </Box>
    </Box>
  );
}
