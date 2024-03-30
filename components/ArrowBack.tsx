"use client";

import { Box } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function ArrowBack() {
  return (
    <Box position="fixed" top="2rem" left="2rem" w="44px" h="44px">
      <Link href="/">
        <ArrowBackIcon width="44px" height="44px" cursor="pointer" />
      </Link>
    </Box>
  );
}
