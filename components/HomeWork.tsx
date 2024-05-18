"use client";
import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
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
          {`
          5월 12일 숙제
            - 숙제 : 하나님이 자기에게 이루실 기쁨의 단, 새 일이 무엇일까 써오기
            - 읽기 : 구약3장, 신약3장
          
          5월 5일 숙제
            - 암송 : 시126:5~6 시127:1~2
            - 찬송 : 복 1601, 찬 321
            - 읽기 : 구약3장, 신약3장
          
          4월 28일 숙제
            - 암송 : 시126:5
            - 찬송 : 찬415, 찬135
            - 읽기 : 구약3장, 신약3장
          
          4월 21일 숙제
            - 암송 : 빌2:13, 시127:1~2
            - 찬송 : 복1009, 프29 
            - 읽기 : 구약3장, 신약3장
            * 믿음의 소원 편지 (청년만 해당)
          
          4월 14일 숙제
            - 암송 : 시127:1, 잠16:9
            - 찬송 : 찬214, 프22 
            - 읽기 : 구약3장, 신약3장 
            `}
        </Box>
      )}
    </>
  );
}
