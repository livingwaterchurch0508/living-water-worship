import { create } from "zustand";

interface ISongChecked {
  song: string;
  src: string;
  checked?: boolean;
}

interface IPressState {
  isPressed: boolean;
  setIsPressed: (isPressed: boolean) => void;
  isLongPressed: boolean;
  setIsLongPressed: (isLongPressed: boolean) => void;
  checkedItems: ISongChecked[];
  setCheckedItem: ({ song, src, checked }: ISongChecked) => void;
  allCheckedItems: (isAllChecked: boolean) => void;
}

const usePressStore = create<IPressState>((set) => ({
  isPressed: false,
  setIsPressed: (isPressed) => set({ isPressed }),
  isLongPressed: false,
  setIsLongPressed: (isLongPressed) => set({ isLongPressed }),
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
  allCheckedItems: (isAllChecked: boolean) => set({}),
}));

export { usePressStore };
