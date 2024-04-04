"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Box, IconButton } from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";

export default function Help() {
  const router = useRouter();

  return (
    <>
      <Box
        position="fixed"
        right="2rem"
        bottom="5rem"
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
          icon={<QuestionIcon />}
          onClick={() => router.push("/manual.pdf")}
        />
      </Box>
    </>
  );
}
