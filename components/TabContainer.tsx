"use client";

import React, { ReactNode } from "react";
import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import SearchBar from "@/components/SearchBar";
import { useTabStore } from "@/store/tab-store";
import { useSearchStore } from "@/store/search-store";
import CheckFilterHymn from "@/components/CheckFilterHymn";
import HomeWork from "@/components/HomeWork";
import SortButton from "@/components/SortButton";

export default function TabContainer({ children }: { children: ReactNode }) {
  const { setSearch } = useSearchStore((state) => state);
  const { tab, setTab } = useTabStore((state) => state);

  return (
    <Box p="2rem">
      <SearchBar />
      <Tabs
        defaultIndex={tab}
        position="fixed"
        mt="4rem"
        left="0"
        right="0"
        variant="soft-rounded"
        colorScheme="green"
        onChange={(index) => {
          setSearch("");
          setTab(index);
        }}
      >
        <TabList justifyContent="center">
          <Tab fontSize="2xs">찬송가</Tab>
          <Tab fontSize="2xs">프린트</Tab>
          <Tab fontSize="2xs">목사님찬양</Tab>
          <Tab fontSize="2xs">복음성가</Tab>
        </TabList>
      </Tabs>
      {children}
      <SortButton />
      <CheckFilterHymn />
      <HomeWork />
    </Box>
  );
}
