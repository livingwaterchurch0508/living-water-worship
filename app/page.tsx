import { Box, Grid } from "@chakra-ui/react";
import PlayList from "@/components/PlayList";
import TabContainer from "@/components/TabContainer";
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <TabContainer>
      <Box
        height="calc(100vh - 14rem)"
        mt="10rem"
        overflow="auto"
        className={styles.grid}
      >
        <Grid
          width="calc(100vw - 4rem)"
          templateColumns={"repeat(1, 1fr)"}
          gap={1}
        >
          <PlayList />
        </Grid>
      </Box>
    </TabContainer>
  );
}
