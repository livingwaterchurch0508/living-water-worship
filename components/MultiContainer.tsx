"use client";

import { useRouter } from "next/navigation";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

import MultiAudioItem from "@/components/MultiAudioItem";
import { usePressStore } from "@/store/press-store";

export default function MultiContainer() {
  const router = useRouter();

  const { checkedItems } = usePressStore((state) => state);

  if (checkedItems.length === 0) {
    router.replace("/");
    return null;
  }

  return (
    <>
      <MultiAudioItem />
      <Box mt="7rem">
        <Grid width="calc(100vw)" templateColumns={"repeat(1, 1fr)"} gap={1}>
          {checkedItems.map(({ song, src }) => (
            <GridItem bg="gray.200" p={2} key={song}>
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
      </Box>
    </>
  );
}
