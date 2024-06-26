"use client";

import React from "react";
import { Box, Checkbox } from "@chakra-ui/react";
import { usePressStore } from "@/store/press-store";
import { useFilteredListStore } from "@/store/filtered-list-store";
import { useTabStore } from "@/store/tab-store";

export default function AllCheckButton() {
  const { tab } = useTabStore((state) => state);
  const { checkedItems, allCheckedItems } = usePressStore((state) => state);
  const { filteredList } = useFilteredListStore((state) => state);

  const isChecked = () => {
    const songFilterList = filteredList.filter((item) => !!item.song);

    if (songFilterList.length === 0) {
      return false;
    }

    return songFilterList.every((item) =>
      checkedItems.some(({ song }) => item.song === song),
    );
  };

  const handleAllCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const songFilterList = filteredList.filter((item) => !!item.song);
    if (songFilterList.length === 0) {
      return;
    }

    allCheckedItems({
      filteredList: songFilterList,
      isAllChecked: e.target.checked,
      tab,
    });
  };

  return (
    <Box
      position="fixed"
      left="1.4rem"
      top="7rem"
      w="60px"
      h="60px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Checkbox isChecked={isChecked()} onChange={handleAllCheck} />
    </Box>
  );
}
