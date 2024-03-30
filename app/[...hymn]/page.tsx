import { Box } from "@chakra-ui/react";
import SearchGrid from "@/components/SearchGrid";
import { MOCKS_BY_PAGE_TYPES } from "@/variables/constants";
import NotFound from "next/dist/client/components/not-found-error";
import styles from "@/app/page.module.css";

interface IHymnPage {
  params: {
    hymn: string[];
  };
}

export default function HymnPage({ params }: IHymnPage) {
  const [tab, hymnNumber] = params?.hymn;

  // @ts-ignore
  const list = MOCKS_BY_PAGE_TYPES[+tab]?.filter(
    ({ title }: IHymn) => title.split(".")[0] === hymnNumber,
  );

  if (list.length === 0) return <NotFound />;

  return (
    <Box className={styles.grid}>
      <SearchGrid list={list} />
    </Box>
  );
}
