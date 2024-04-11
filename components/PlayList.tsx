"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Grid, GridItem } from "@chakra-ui/react";

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
import styles from "@/app/page.module.css";
import { useDeviceStore } from "@/store/device-store";

export default function PlayList() {
  const router = useRouter();

  const { search } = useSearchStore((state) => state);
  const { tab } = useTabStore((state) => state);
  const { sort } = useSortStore((state) => state);
  const { isHymn } = useHymnStore((state) => state);
  const { filteredList, setFilteredList } = useFilteredListStore(
    (state) => state,
  );
  const { enabledMultiSelect, setCheckedItem } = usePressStore(
    (state) => state,
  );
  const { browserHeight } = useDeviceStore((state) => state);

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
      <Grid
        width="calc(100vw - 4rem)"
        templateColumns={"repeat(1, 1fr)"}
        gap={1}
      >
        {filteredList
          .filter((item) => {
            if (enabledMultiSelect) {
              return !!item.song;
            }
            return true;
          })
          .map(
            ({ title, isHomework = false, song = "", src, isMulti }, idx) => (
              <GridItem
                bg={song ? "purple.100" : "gray.200"}
                p={1}
                key={`${title}_${idx}`}
                overflow="hidden"
                display="flex"
                gap={4}
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
                  onClick={(e) =>
                    handleLinkClick(e, { song, src, isMulti }, title)
                  }
                >
                  {isHomework ? `(*숙제)${title}` : title}
                </Button>
              </GridItem>
            ),
          )}
      </Grid>
    </Box>
  );
}
