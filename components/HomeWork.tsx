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
          width="18rem"
          padding="1rem"
          background="red.200"
          whiteSpace="pre-line"
          borderRadius={8}
        >
          {`4월 14일 ~ 4월 21일 
            - 시편 127편 1절~2절 암송
            - 잠언 16장 1절~9절 암송
            - 매일 프린트 22. 이 세상 사는 동안
            - 매일 찬송가 214. 나 주의 도움 받고자  
            - 구약 3장 신약 3장 읽기 
            `}
        </Box>
      )}
    </>
  );
}
