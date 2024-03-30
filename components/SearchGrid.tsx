"use client";

import { Grid } from "@chakra-ui/react";
import SearchItem from "@/components/SearchItem";

interface ISearchGrid {
  list: IHymn[];
}

export default function SearchGrid({ list }: ISearchGrid) {
  return (
    <Grid width="calc(100vw)" templateColumns={"repeat(1, 1fr)"} gap={1}>
      {list.map(({ src, title, song }, idx) => (
        <SearchItem src={src} title={title} song={song} key={idx} />
      ))}
    </Grid>
  );
}
