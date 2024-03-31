"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Box, Button, useToast } from "@chakra-ui/react";
import { usePressStore } from "@/store/press-store";

export default function PlayButton() {
  const router = useRouter();

  const { checkedItems, clearCheckedItems } = usePressStore((state) => state);
  const { setEnabledMultiSelect } = usePressStore((state) => state);
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
    router.push("/multi/play");
  };

  return (
    <Box
      position="fixed"
      right="2rem"
      top="7rem"
      h="60px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="1rem"
    >
      <Button colorScheme="green" size="sm" onClick={handlePlay}>
        재생하기
      </Button>
      <Button
        colorScheme="gray"
        size="sm"
        onClick={() => {
          clearCheckedItems();
          setEnabledMultiSelect(false);
        }}
      >
        취소
      </Button>
    </Box>
  );
}
