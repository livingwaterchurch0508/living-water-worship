interface IHymn {
  src: string;
  title: string;
  isMulti?: number;
  isHomework?: boolean;
  isThisWeek?: boolean;
  song?: string;
}

interface ICheckedBoxItem {
  song: string;
  src: string;
  isMulti?: number;
  isHomework?: boolean;
}
