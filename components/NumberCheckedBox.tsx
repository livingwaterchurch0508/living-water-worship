import { Checkbox } from "@chakra-ui/react";
import { usePressStore } from "@/store/press-store";

export default function NumberCheckedBox({ song, src }: ICheckedBoxItem) {
  const { checkedItems, setCheckedItem } = usePressStore((state) => state);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: song, checked } = e.target;
    setCheckedItem({ song, src, checked });
  };

  const setCheckedNumber = (song: string) => {
    const number = checkedItems.findIndex(
      (checkSong) => checkSong.song === song,
    );
    if (number === -1) return "";
    return `${number + 1}`;
  };

  return (
    <Checkbox
      ml={2}
      disabled={!song}
      value={song}
      isChecked={checkedItems.some((item) => item.song === song)}
      onChange={handleChecked}
    >
      {setCheckedNumber(song)}
    </Checkbox>
  );
}
