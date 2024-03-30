import { create } from "zustand";

interface IHymnState {
  isHymn: boolean;
  setIsHymn: (str: boolean) => void;
}

const useHymnStore = create<IHymnState>((set) => ({
  isHymn: false,
  setIsHymn: (bool) => set(() => ({ isHymn: bool })),
}));

export { useHymnStore };
