"use client";

import React, { ReactNode, useEffect } from "react";
import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import SearchBar from "@/components/SearchBar";
import { useTabStore } from "@/store/tab-store";
import { useSearchStore } from "@/store/search-store";
import HomeWork from "@/components/HomeWork";
import { usePressStore } from "@/store/press-store";
import AllCheckButton from "@/components/AllCheckButton";
import PlayButton from "@/components/PlayButton";
import MultiSelectButton from "@/components/MultiSelectButton";
import Help from "@/components/Help";
import { useDeviceStore } from "@/store/device-store";

export default function TabContainer({ children }: { children: ReactNode }) {
  const { setSearch } = useSearchStore((state) => state);
  const { tab, setTab } = useTabStore((state) => state);
  const { enabledMultiSelect } = usePressStore((state) => state);
  const { setBrowserHeight } = useDeviceStore((state) => state);
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(
      userAgent,
    );
    const isTablet = /iPad|Android|Touch/.test(userAgent) && !isMobile;
    const isDesktop = !isMobile && !isTablet;

    if (isMobile) setBrowserHeight(60);
    if (isTablet) setBrowserHeight(30);
    if (isDesktop) setBrowserHeight(0);
  }, []);

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
      {!enabledMultiSelect && <MultiSelectButton />}
      {enabledMultiSelect && <AllCheckButton />}
      {enabledMultiSelect && <PlayButton />}
      {/*<SortButton />*/}
      {/*<CheckFilterHymn />*/}
      <Help />
      <HomeWork />
    </Box>
  );
}
