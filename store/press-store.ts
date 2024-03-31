import { create } from "zustand";
import { TAB_TYPES } from "@/variables/enums";
import { PATHS_BY_PAGE_TYPES } from "@/variables/constants";

interface ISongChecked {
  song: string;
  src: string;
  checked?: boolean;
}

interface IAllChecked {
  filteredList: IHymn[];
  isAllChecked: boolean;
  tab: TAB_TYPES;
}

interface IPressState {
  enabledMultiSelect: boolean;
  setEnabledMultiSelect: (enabledMultiSelect: boolean) => void;
  checkedItems: ISongChecked[];
  setCheckedItem: ({ song, src, checked }: ISongChecked) => void;
  allCheckedItems: ({ filteredList, isAllChecked, tab }: IAllChecked) => void;
  clearCheckedItems: () => void;
}

const usePressStore = create<IPressState>((set) => ({
  enabledMultiSelect: false,
  setEnabledMultiSelect: (enabledMultiSelect) => set({ enabledMultiSelect }),
  checkedItems: [],
  setCheckedItem: ({ song, src, checked }) =>
    set((state) => {
      if (checked) {
        state.checkedItems.push({ song, src });
      } else {
        if (state.checkedItems.some((item) => item.song === song)) {
          state.checkedItems = state.checkedItems.filter(
            (item) => item.song !== song,
          );
        } else {
          state.checkedItems.push({ song, src });
        }
      }
      return { ...state, checkedItems: state.checkedItems };
    }),
  allCheckedItems: ({ filteredList, isAllChecked, tab }) =>
    set((state) => {
      if (isAllChecked) {
        const unCheckedList: ISongChecked[] = filteredList
          .filter(
            ({ song }) =>
              !state.checkedItems.some((item) => item.song === song),
          )
          .map(({ song = "", src }) => ({
            song,
            src: `/${PATHS_BY_PAGE_TYPES[tab]}/${src}`,
          }));
        state.checkedItems.push(...unCheckedList);
      } else {
        state.checkedItems = state.checkedItems.filter(
          ({ song }) => !filteredList.some((item) => item.song === song),
        );
      }

      return { ...state, checkedItems: state.checkedItems };
    }),
  clearCheckedItems: () => set((state) => ({ ...state, checkedItems: [] })),
}));

export { usePressStore };
