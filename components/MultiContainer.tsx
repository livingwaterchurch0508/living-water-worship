"use client";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import NotFound from "next/dist/client/components/not-found-error";

import MultiAudioItem from "@/components/MultiAudioItem";
import { usePressStore } from "@/store/press-store";

export default function MultiContainer() {
  const { checkedItems } = usePressStore((state) => state);

  if (checkedItems.length === 0) {
    return <NotFound />;
  }

  return (
    <>
      <MultiAudioItem />
      <Grid width="calc(100vw)" templateColumns={"repeat(1, 1fr)"} gap={1}>
        {checkedItems.map(({ song, src }) => (
          <GridItem bg="gray.200" p={2}>
            <Box
              height={song ? "calc(100vh - 5rem)" : "calc(100vh - 1rem)"}
              display="flex"
              justifyContent="center"
            >
              <Image src={src} alt={song} height="100%" />
            </Box>
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
