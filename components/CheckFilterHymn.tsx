"use client";

import { Box, IconButton, Text } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import React from "react";
import { useHymnStore } from "@/store/hymn-store";

export default function CheckFilterHymn() {
  const { isHymn, setIsHymn } = useHymnStore((state) => state);

  return (
    <Box
      position="fixed"
      right="2rem"
      bottom="2rem"
      w="60px"
      h="60px"
      textAlign="center"
    >
      <Text fontSize="sm">찬양표시</Text>
      <IconButton
        isRound={true}
        variant="solid"
        colorScheme="teal"
        aria-label="Done"
        fontSize="20px"
        icon={isHymn ? <CheckIcon /> : <></>}
        onClick={() => setIsHymn(!isHymn)}
      />
    </Box>
  );
}
