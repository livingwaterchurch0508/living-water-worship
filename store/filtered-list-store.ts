import { create } from "zustand";

interface IFilteredListState {
  filteredList: IHymn[];
  setFilteredList: (filteredList: IHymn[]) => void;
}

const useFilteredListStore = create<IFilteredListState>((set) => ({
  filteredList: [],
  setFilteredList: (filteredList: IHymn[]) => set({ filteredList }),
}));

export { useFilteredListStore };
