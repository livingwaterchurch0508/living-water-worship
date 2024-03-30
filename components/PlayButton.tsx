"use client";

import React from "react";
import { Box, Button } from "@chakra-ui/react";

export default function PlayButton() {
  return (
    <Box
      position="fixed"
      right="2rem"
      top="6rem"
      w="60px"
      h="60px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Button colorScheme="green" size="sm" mr="1rem">
        재생하기
      </Button>
    </Box>
  );
}
