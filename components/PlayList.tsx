"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button, GridItem } from "@chakra-ui/react";

import { useSearchStore } from "@/store/search-store";
import { useTabStore } from "@/store/tab-store";
import { useHymnStore } from "@/store/hymn-store";
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

export default function PlayList() {
  const router = useRouter();

  const { search } = useSearchStore((state) => state);
  const { tab } = useTabStore((state) => state);
  const { sort } = useSortStore((state) => state);
  const { isHymn } = useHymnStore((state) => state);
  const { filteredList, setFilteredList } = useFilteredListStore(
    (state) => state,
  );
  const { setIsPressed, isLongPressed, setIsLongPressed, setCheckedItem } =
    usePressStore((state) => state);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!search) {
      setFilteredList(arraySort(MOCKS_BY_PAGE_TYPES[tab], sort, isHymn));
      return;
    }

    setFilteredList(
      arraySort(
        MOCKS_BY_PAGE_TYPES[tab].filter(({ title }) =>
          includeByCho(search, title),
        ),
        sort,
        isHymn,
      ),
    );
  }, [search, tab]);

  function getNumberTitle(title: string) {
    const [hymnTitle] = title.split(".");
    //return hymnTitle.slice(1);
    return hymnTitle;
  }

  const handleMouseDown = () => {
    if (!isLongPressed) {
      setIsPressed(true);
      timerRef.current = window.setTimeout(() => {
        setIsLongPressed(true);
      }, 1500); // 1.5초 후에 setIsLongPressed(true) 호출
    }
  };

  const handleMouseUp = () => {
    if (!isLongPressed) {
      setIsPressed(false);
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current); // 타이머 클리어
      }
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    { song, src }: ICheckedBoxItem,
    title: string,
  ) => {
    if (isLongPressed) {
      if (song.length === 0) return;
      setCheckedItem({ song, src: `/${PATHS_BY_PAGE_TYPES[tab]}/${src}` });
      e.preventDefault(); // 링크 이벤트를 막음
      return;
    }
    router.push(`/${tab}/${getNumberTitle(title)}`);
  };

  return filteredList.map(
    ({ title, isHomework = false, song = "", src }, idx) => (
      <GridItem
        bg={song ? "purple.100" : "gray.200"}
        p={1}
        key={`${title}_${idx}`}
        overflow="hidden"
        display="flex"
        gap={4}
      >
        {isLongPressed && (
          <NumberCheckedBox
            song={song}
            src={`/${PATHS_BY_PAGE_TYPES[tab]}/${src}`}
          />
        )}
        <Button
          fontSize="xs"
          w="100%"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onClick={(e) => handleLinkClick(e, { song, src }, title)}
        >
          {isHomework ? `(*숙제)${title}` : title}
        </Button>
      </GridItem>
    ),
  );
}
