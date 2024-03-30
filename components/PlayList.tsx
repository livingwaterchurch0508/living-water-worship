"use client";
import { useEffect, useState } from "react";
import { Button, GridItem } from "@chakra-ui/react";

import { MOCKS_BY_PAGE_TYPES } from "@/variables/constants";
import { useSearchStore } from "@/store/search-store";
import { useTabStore } from "@/store/tab-store";
import { includeByCho } from "@/util/search-util";
import Link from "next/link";
import { useHymnStore } from "@/store/hymn-store";
import { useSortStore } from "@/store/sort-store";
import { arraySort } from "@/util/array-util";

export default function PlayList() {
  const { search } = useSearchStore((state) => state);
  const { tab } = useTabStore((state) => state);
  const { sort } = useSortStore((state) => state);
  const { isHymn } = useHymnStore((state) => state);
  const [filteredList, setFilteredList] = useState<IHymn[]>(
    MOCKS_BY_PAGE_TYPES[tab],
  );

  useEffect(() => {
    if (!search) {
      setFilteredList(MOCKS_BY_PAGE_TYPES[tab]);
      return;
    }

    setFilteredList(
      MOCKS_BY_PAGE_TYPES[tab].filter(({ title }) =>
        includeByCho(search, title),
      ),
    );
  }, [search, tab]);

  function filterMulti(array: IHymn[]) {
    const multiArray = array.filter(({ isMulti }) => {
      return !!isMulti;
    });

    return array.filter(({ title, isMulti }) => {
      if (multiArray.some(({ title: multiTitle }) => multiTitle === title)) {
        return !!isMulti;
      }
      return true;
    });
  }

  function filterIsHymn(array: IHymn[]) {
    if (!isHymn) return array;
    return array.filter(({ song }) => song);
  }

  function getNumberTitle(title: string) {
    const [hymnTitle] = title.split(".");
    //return hymnTitle.slice(1);
    return hymnTitle;
  }

  return arraySort(filterMulti(filterIsHymn([...filteredList])), sort).map(
    ({ title, isHomework = false, song = "" }, idx) => (
      <GridItem
        bg={song ? "purple.100" : "gray.200"}
        p={1}
        key={`${title}_${idx}`}
        overflow="hidden"
      >
        <Link href={`/${tab}/${getNumberTitle(title)}`}>
          <Button fontSize="xs" w="90%">
            {isHomework ? `(*숙제)${title}` : title}
          </Button>
        </Link>
      </GridItem>
    ),
  );
}
