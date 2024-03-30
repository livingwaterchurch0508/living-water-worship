"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

interface IAudioItem {
  song?: string;
}

export default function AudioItem({ song }: IAudioItem) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioTitle] = useState("");

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = `/songs/${song}`;
    }
  }, [song]);

  return (
    <Box
      position="fixed"
      width="100vw"
      height="3rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="white"
    >
      <Text>{audioTitle}</Text>
      <audio controls ref={audioRef} />
    </Box>
  );
}
