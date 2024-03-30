import { create } from "zustand";

interface SearchState {
  search: string;
  setSearch: (str: string) => void;
}

const useSearchStore = create<SearchState>((set) => ({
  search: "",
  setSearch: (str) => set(() => ({ search: str })),
}));

export { useSearchStore };
