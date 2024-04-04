"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

import MultiAudioItem from "@/components/MultiAudioItem";
import { usePressStore } from "@/store/press-store";
import { useMultiAudioStore } from "@/store/multi-audio-store";

export default function MultiContainer() {
  const router = useRouter();
  const divRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { audioIndex } = useMultiAudioStore((state) => state);
  const { checkedItems } = usePressStore((state) => state);

  if (checkedItems.length === 0) {
    router.replace("/");
    return null;
  }

  useEffect(() => {
    if (divRefs.current[audioIndex]) {
      const scrollTopPosition = divRefs.current[audioIndex]?.offsetTop;
      if (scrollTopPosition !== undefined) {
        window.scrollTo({ top: scrollTopPosition - 100, behavior: "smooth" });
      }
    }
  }, [audioIndex]);

  return (
    <>
      <MultiAudioItem />
      <Box mt="7rem">
        <Grid width="calc(100vw)" templateColumns={"repeat(1, 1fr)"} gap={1}>
          {checkedItems.map(({ song, src, isMulti }, index) => (
            <>
              <GridItem bg="gray.200" p={2} key={song}>
                <Box
                  height={song ? "calc(100vh - 5rem)" : "calc(100vh - 1rem)"}
                  display="flex"
                  justifyContent="center"
                  ref={(ref) => (divRefs.current[index] = ref)}
                >
                  <Image src={src} alt={song} height="100%" />
                </Box>
              </GridItem>
              {isMulti === 2 && (
                <GridItem bg="gray.200" p={2} key={song}>
                  <Box
                    height={song ? "calc(100vh - 5rem)" : "calc(100vh - 1rem)"}
                    display="flex"
                    justifyContent="center"
                  >
                    <Image
                      src={src.replace(".jpg", "-1.jpg")}
                      alt={song}
                      height="100%"
                    />
                  </Box>
                </GridItem>
              )}
              {isMulti === 3 && (
                <GridItem bg="gray.200" p={2} key={song}>
                  <Box
                    height={song ? "calc(100vh - 5rem)" : "calc(100vh - 1rem)"}
                    display="flex"
                    justifyContent="center"
                  >
                    <Image
                      src={src.replace(".jpg", "-2.jpg")}
                      alt={song}
                      height="100%"
                    />
                  </Box>
                </GridItem>
              )}
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
}
