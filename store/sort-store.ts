import { create } from "zustand";
import { SORT_TYPES } from "@/variables/enums";

interface ISortState {
  sort: SORT_TYPES;
  setSort: (sort: SORT_TYPES) => void;
}

const useSortStore = create<ISortState>((set) => ({
  sort: SORT_TYPES.LANGUAGE_ASC,
  setSort: (sort) => set(() => ({ sort })),
}));

export { useSortStore };
