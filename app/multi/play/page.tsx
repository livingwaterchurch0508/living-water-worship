import { Box } from "@chakra-ui/react";

import MultiContainer from "@/components/MultiContainer";
import styles from "@/app/page.module.css";
import { formatDateTime } from "@/util/date-util";

export default function MultiPage() {
  console.log("Multi", formatDateTime(new Date()));
  return (
    <Box className={styles.grid}>
      <MultiContainer />
    </Box>
  );
}
