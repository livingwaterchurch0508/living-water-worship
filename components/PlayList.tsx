"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, HStack } from "@chakra-ui/react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";

import { useSearchStore } from "@/store/search-store";
import { useTabStore } from "@/store/tab-store";
import { useSortStore } from "@/store/sort-store";
import { usePressStore } from "@/store/press-store";
import { arraySort } from "@/util/array-util";
import { includeByCho } from "@/util/search-util";
import {
  MOCKS_BY_PAGE_TYPES,
  PATHS_BY_PAGE_TYPES,
} from "@/variables/constants";
import NumberCheckedBox from "@/components/NumberCheckedBox";
import { useFilteredListStore } from "@/store/filtered-list-store";
import styles from "@/app/page.module.css";
import { useDeviceStore } from "@/store/device-store";

export default function PlayList() {
  const router = useRouter();

  const { search } = useSearchStore((state) => state);
  const { tab } = useTabStore((state) => state);
  const { sort } = useSortStore((state) => state);
  const { filteredList, setFilteredList } = useFilteredListStore(
    (state) => state,
  );
  const { enabledMultiSelect, setCheckedItem } = usePressStore(
    (state) => state,
  );
  const { browserHeight } = useDeviceStore((state) => state);
  const [listHeight, setListHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const calculatedHeight = window.innerHeight - 200; // 원하는 값을 조절하세요
      setListHeight(calculatedHeight);
    };

    // 초기 높이 설정
    updateHeight();

    // 창 크기 변경 시 높이 업데이트
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(() => {
    if (!search) {
      setFilteredList(
        arraySort(MOCKS_BY_PAGE_TYPES[tab], sort, enabledMultiSelect),
      );
      return;
    }

    setFilteredList(
      arraySort(
        MOCKS_BY_PAGE_TYPES[tab].filter(({ title }) =>
          includeByCho(search, title),
        ),
        sort,
        enabledMultiSelect,
      ),
    );
  }, [search, tab, enabledMultiSelect]);

  function getNumberTitle(title: string) {
    const [hymnTitle] = title.split(".");
    return hymnTitle;
  }

  const handleLinkClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    { song, src, isMulti }: ICheckedBoxItem,
    title: string,
  ) => {
    if (enabledMultiSelect) {
      if (song.length === 0) return;
      setCheckedItem({
        song,
        src: `/${PATHS_BY_PAGE_TYPES[tab]}/${src}`,
        isMulti,
      });
      e.preventDefault(); // 링크 이벤트를 막음
      return;
    }
    router.push(`/${tab}/${getNumberTitle(title)}`);
  };

  const Row = ({ index, style }: ListChildComponentProps) => {
    const item = filteredList[index];
    const {
      title,
      isHomework = false,
      isThisWeek = false,
      song = "",
      src,
      isMulti,
    } = item;

    return (
      <HStack
        p={1}
        key={`${title}_${index}`}
        overflow="hidden"
        display="flex"
        style={style}
      >
        {enabledMultiSelect && (
          <NumberCheckedBox
            song={song}
            src={`/${PATHS_BY_PAGE_TYPES[tab]}/${src}`}
          />
        )}
        <Button
          fontSize="xs"
          w="100%"
          onClick={(e) => handleLinkClick(e, { song, src, isMulti }, title)}
          bg={
            isHomework || isThisWeek ? "#dfd3e4" : song ? "#fce0e2" : "gray.200"
          }
        >
          {isHomework ? `(*숙제)${title}` : title}
        </Button>
      </HStack>
    );
  };

  return (
    <Box
      position="fixed"
      left="0"
      right="0"
      border="2rem"
      top="10rem"
      height={`calc(100vh - 12rem - ${browserHeight}px)`}
      overflow="auto"
      className={styles.grid}
    >
      <List
        height={listHeight} // 고정 높이 (예제에 맞게 조절)
        itemCount={filteredList.length}
        itemSize={48} // 각 아이템의 높이
        width="calc(100vw - 4rem)"
      >
        {Row}
      </List>
    </Box>
  );
}
