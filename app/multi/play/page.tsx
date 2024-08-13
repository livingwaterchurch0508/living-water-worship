import React from "react";

import { Box } from "@chakra-ui/react";
import HomeWork from "@/components/HomeWork";
import MultiContainer from "@/components/MultiContainer";
import { formatDateTime } from "@/util/date-util";
import styles from "@/app/page.module.css";

export default function MultiPage() {
  console.log("Multi", formatDateTime(new Date()));
  return (
    <Box className={styles.grid}>
      <MultiContainer />
      <HomeWork />
    </Box>
  );
}
