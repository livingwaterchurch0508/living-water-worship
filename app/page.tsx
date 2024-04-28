import PlayList from "@/components/PlayList";
import TabContainer from "@/components/TabContainer";
import { formatDateTime } from "@/util/date-util";

export default function Home() {
  console.log("Home", formatDateTime(new Date()));

  return (
    <TabContainer>
      <PlayList />
    </TabContainer>
  );
}
