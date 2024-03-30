"use client";

import React from "react";
import { Box, Checkbox } from "@chakra-ui/react";
import { usePressStore } from "@/store/press-store";
import { useFilteredListStore } from "@/store/filtered-list-store";

export default function AllCheckButton() {
  // const { tab } = useTabStore((state) => state);
  const { checkedItems } = usePressStore((state) => state);
  const { filteredList } = useFilteredListStore((state) => state);

  const isChecked = filteredList
    .filter((item) => !!item.song)
    .every((item) => checkedItems.some(({ song }) => item.song === song));

  return (
    <Box
      position="fixed"
      left="1.4rem"
      top="6rem"
      w="60px"
      h="60px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Checkbox isChecked={isChecked} />
    </Box>
  );
}
