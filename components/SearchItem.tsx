import { Box, GridItem, Image } from "@chakra-ui/react";
import AudioItem from "@/components/AudioItem";
import { PATHS_BY_PAGE_TYPES } from "@/variables/constants";
import { useTabStore } from "@/store/tab-store";
import { useDeviceStore } from "@/store/device-store";

export default function SearchItem({ title, src, song }: IHymn) {
  const { tab } = useTabStore((state) => state);
  const { browserHeight } = useDeviceStore((state) => state);

  return (
    <GridItem bg="gray.200" p={2}>
      {song && <AudioItem song={song} />}
      <Box
        mt={song && "4rem"}
        height={
          song
            ? `calc(100vh - 5rem - ${browserHeight}px)`
            : `calc(100vh - 1rem - ${browserHeight}px)`
        }
        display="flex"
        justifyContent="center"
      >
        <Image
          src={`/${PATHS_BY_PAGE_TYPES[tab]}/${src}`}
          alt={title}
          height="100%"
        />
      </Box>
    </GridItem>
  );
}
