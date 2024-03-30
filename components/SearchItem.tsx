import { Box, GridItem, Image } from "@chakra-ui/react";
import { PATHS_BY_PAGE_TYPES } from "@/variables/constants";
import { useTabStore } from "@/store/tab-store";
import AudioItem from "@/components/AudioItem";

export default function SearchItem({ title, src, song }: IHymn) {
  const { tab } = useTabStore((state) => state);

  return (
    <GridItem bg="gray.200" p={2}>
      {song && <AudioItem song={song} />}
      <Box
        height={song ? "calc(100vh - 5rem)" : "calc(100vh - 1rem)"}
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
