"use client";

import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import { usePressStore } from "@/store/press-store";
import { TAB_TYPES } from "@/variables/enums";
import { hymns } from "@/mock/hymns";
import { pastors } from "@/mock/pastors";
import { michaels } from "@/mock/michaels";
import { prints } from "@/mock/prints";

export default function MultiSelectButton() {
  const router = useRouter();

  const { setEnabledMultiSelect } = usePressStore((state) => state);
  const { allCheckedItems } = usePressStore((state) => state);

  const playThisWeek = () => {
    allCheckedItems({
      filteredList: hymns.filter(({ isThisWeek = false }) => isThisWeek),
      isAllChecked: true,
      tab: TAB_TYPES.HYMNS,
    });
    allCheckedItems({
      filteredList: pastors.filter(({ isThisWeek = false }) => isThisWeek),
      isAllChecked: true,
      tab: TAB_TYPES.PASTOR,
    });
    allCheckedItems({
      filteredList: michaels.filter(({ isThisWeek = false }) => isThisWeek),
      isAllChecked: true,
      tab: TAB_TYPES.MICHAELS,
    });
    allCheckedItems({
      filteredList: prints.filter(({ isThisWeek = false }) => isThisWeek),
      isAllChecked: true,
      tab: TAB_TYPES.PRINTS,
    });
    setTimeout(() => {
      router.push("/multi/play");
    }, 200);
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
      <Button bg="#dfd3e4" size="sm" onClick={playThisWeek}>
        이번주 재생하기
      </Button>
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
