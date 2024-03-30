"use client";

import React from "react";
import { Box, Button, useToast } from "@chakra-ui/react";
import { usePressStore } from "@/store/press-store";
import Link from "next/link";

export default function PlayButton() {
  const { checkedItems } = usePressStore((state) => state);
  const { setIsLongPressed } = usePressStore((state) => state);
  const toast = useToast();

  const handlePlay = () => {
    if (checkedItems.length === 0) {
      toast({
        title: "알림!",
        description: "선택된 찬양이 없네요! 선택 후 재생해주세요!😊",
        duration: 2000,
      });
      return;
    }
  };

  return (
    <Box
      position="fixed"
      right="2rem"
      top="6rem"
      h="60px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="1rem"
    >
      <Link href="/multi" onClick={handlePlay}>
        재생하기
      </Link>
      <Button
        colorScheme="gray"
        size="sm"
        onClick={() => setIsLongPressed(false)}
      >
        취소
      </Button>
    </Box>
  );
}
