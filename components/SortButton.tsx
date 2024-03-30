"use client";

import React, { useCallback } from "react";
import { Box, Select, Text } from "@chakra-ui/react";
import { useSortStore } from "@/store/sort-store";
import { SORT_TYPES } from "@/variables/enums";

export default function SortButton() {
  const { sort, setSort } = useSortStore((state) => state);

  const handleClick = useCallback(() => {
    setSort(
      sort === SORT_TYPES.NUMBER_DESC ? SORT_TYPES.LANGUAGE_ASC : sort + 1,
    );
  }, [sort]);

  return (
    <Box
      position="fixed"
      left="3rem"
      top="8rem"
      w="60px"
      h="60px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="sm">정렬순서</Text>
      <Select size="sm" onChange={handleClick} w="6rem" bg="facebook">
        <option value={SORT_TYPES.LANGUAGE_ASC}>문자 ▲</option>
        <option value={SORT_TYPES.LANGUAGE_DESC}>문자 ▼</option>
        <option value={SORT_TYPES.NUMBER_ASC}>숫자 ▲</option>
        <option value={SORT_TYPES.NUMBER_DESC}>숫자 ▼</option>
      </Select>
    </Box>
  );
}
