import { Box } from "@chakra-ui/react";

import MultiContainer from "@/components/MultiContainer";
import styles from "@/app/page.module.css";

export default function MultiPage() {
  return (
    <Box className={styles.grid}>
      <MultiContainer />
    </Box>
  );
}
