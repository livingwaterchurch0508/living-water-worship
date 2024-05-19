"use client";
import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";

import { H_2024 } from "@/mock/homeworks";
import { useHomeworkStore } from "@/store/homework-store";
import { getPersonOfTheWeek, getSundayOfCurrentWeek } from "@/util/date-util";

export default function HomeWork() {
  const { isHomework, setIsHomework, recycling, dishWashing } =
    useHomeworkStore((state) => state);

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
          height="300px"
          overflow="auto"
          borderRadius={8}
          style={{ scrollbarWidth: "thin" }}
        >
          <Box padding="1rem" background="red.100" borderRadius={8}>
            {`${getSundayOfCurrentWeek()} 봉사담당자
          재활용 : ${getPersonOfTheWeek(recycling)} 형제
          설거지 : ${getPersonOfTheWeek(dishWashing)} 자매
                    `}
          </Box>
          {H_2024}
        </Box>
      )}
    </>
  );
}
