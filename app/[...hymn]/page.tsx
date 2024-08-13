import React from "react";
import { Box } from "@chakra-ui/react";
import SearchGrid from "@/components/SearchGrid";
import HomeWork from "@/components/HomeWork";
import { formatDateTime } from "@/util/date-util";
import { MOCKS_BY_PAGE_TYPES } from "@/variables/constants";
import styles from "@/app/page.module.css";

interface IHymnPage {
  params: {
    hymn: string[];
  };
}

export default function HymnPage({ params }: IHymnPage) {
  console.log("Hymn", formatDateTime(new Date()));

  const [tab, hymnNumber] = params?.hymn;

  // @ts-ignore
  const list = MOCKS_BY_PAGE_TYPES[+tab]?.filter(
    ({ title }: IHymn) => title.split(".")[0] === hymnNumber,
  );

  return (
    <Box className={styles.grid}>
      <SearchGrid list={list} />
      <HomeWork />
    </Box>
  );
}
