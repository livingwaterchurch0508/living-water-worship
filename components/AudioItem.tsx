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
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mb={2}
    >
      <Text>{audioTitle}</Text>
      <audio controls ref={audioRef} />
    </Box>
  );
}
