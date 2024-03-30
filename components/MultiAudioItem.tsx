"use client";

import React, { useState } from "react";
import AudioPlayer from "react-audio-player";
import { Box, IconButton, Text } from "@chakra-ui/react";

import { usePressStore } from "@/store/press-store";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

export default function MultiAudioItem() {
  const { checkedItems } = usePressStore((state) => state);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

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
              currentAudioIndex === 0
                ? checkedItems.length - 1
                : currentAudioIndex - 1
            ].song.split(".")[0]
          }
        </Text>
        <Text>{checkedItems[currentAudioIndex].song.split(".")[0]}</Text>
        <Text>
          {
            checkedItems[
              checkedItems.length - 1 === currentAudioIndex
                ? 0
                : currentAudioIndex + 1
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
            setCurrentAudioIndex((prevIndex) =>
              prevIndex === 0 ? checkedItems.length - 1 : prevIndex - 1,
            )
          }
        />
        <AudioPlayer
          autoPlay
          controls
          src={`/songs/${checkedItems[currentAudioIndex].song}`}
          onEnded={() => {
            setCurrentAudioIndex((prevIndex) =>
              prevIndex === checkedItems.length - 1 ? 0 : prevIndex + 1,
            );
          }}
        />
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="teal"
          aria-label="Done"
          fontSize="20px"
          icon={<ArrowRightIcon />}
          onClick={() =>
            setCurrentAudioIndex((prevIndex) =>
              prevIndex === checkedItems.length - 1 ? 0 : prevIndex + 1,
            )
          }
        />
      </Box>
    </Box>
  );
}
