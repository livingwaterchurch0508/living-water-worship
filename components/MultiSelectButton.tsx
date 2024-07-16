"use client";

import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import { usePressStore } from "@/store/press-store";
import { homeworkSort } from "@/util/array-util";
import { TAB_TYPES } from "@/variables/enums";
import { PATHS_BY_PAGE_TYPES } from "@/variables/constants";
import { hymns } from "@/mock/hymns";
import { prints } from "@/mock/prints";
import { pastors } from "@/mock/pastors";
import { michaels } from "@/mock/michaels";

export default function MultiSelectButton() {
  const router = useRouter();

  const { setEnabledMultiSelect } = usePressStore((state) => state);
  const { thisWeekItems, clearCheckedItems } = usePressStore((state) => state);

  const playThisWeek = () => {
    const getThisHymns = (mock: IHymn[], tab: TAB_TYPES): ICheckedBoxItem[] => {
      return mock
        .filter(({ isThisWeek = false }) => isThisWeek)
        .map(({ song, src, isMulti, isHomework }) => ({
          song: song!,
          isMulti,
          src: `/${PATHS_BY_PAGE_TYPES[tab]}/${src}`,
          isHomework,
        }));
    };
    thisWeekItems(
      homeworkSort([
        ...getThisHymns(hymns, TAB_TYPES.HYMNS),
        ...getThisHymns(prints, TAB_TYPES.PRINTS),
        ...getThisHymns(pastors, TAB_TYPES.PASTOR),
        ...getThisHymns(michaels, TAB_TYPES.MICHAELS),
      ]) as ICheckedBoxItem[],
    );

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
        onClick={() => {
          clearCheckedItems();
          setEnabledMultiSelect(true);
        }}
      >
        여러개 선택하기
      </Button>
    </Box>
  );
}
