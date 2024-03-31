"use client";
import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
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
          variant="solid"
          colorScheme="teal"
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
          bottom="calc(2rem + 50px)"
          width="13rem"
          padding="1rem"
          background="red.200"
          whiteSpace="pre-line"
          borderRadius={8}
        >
          {`3월 31일 ~ 4월 7일 
            - 매일 복음성가 2068 사명 부르기  
            - 구약 3장 신약 3장 읽기 
            `}
        </Box>
      )}
    </>
  );
}
