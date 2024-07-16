"use client";
import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";

import { H_2024 } from "@/mock/homeworks";
import { useHomeworkStore } from "@/store/homework-store";

export default function HomeWork() {
  const { isHomework, setIsHomework } = useHomeworkStore((state) => state);

  return (
    <>
      <Box
        position="fixed"
        right="2rem"
        bottom="2rem"
        w="40px"
        h="40px"
        textAlign="center"
      >
        <IconButton
          isRound={true}
          colorScheme="blackAlpha"
          aria-label="Done"
          fontSize="20px"
          icon={<WarningIcon />}
          onClick={() => setIsHomework(!isHomework)}
        />
      </Box>
      {isHomework && (
        <Box
          position="fixed"
          right="2rem"
          bottom="calc(2rem + 44px)"
          width="18rem"
          padding="1rem"
          bg="pink"
          whiteSpace="pre-line"
          height="300px"
          overflow="auto"
          borderRadius={8}
          style={{ scrollbarWidth: "thin" }}
        >
          {H_2024}
        </Box>
      )}
    </>
  );
}
