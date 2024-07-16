"use client";

import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { usePressStore } from "@/store/press-store";

export default function MultiSelectButton() {
  const { setEnabledMultiSelect } = usePressStore((state) => state);

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
      <Button
        colorScheme="gray"
        size="sm"
        onClick={() => setEnabledMultiSelect(true)}
      >
        여러개 선택하기
      </Button>
    </Box>
  );
}
