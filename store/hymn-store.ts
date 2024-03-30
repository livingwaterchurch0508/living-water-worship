import { create } from "zustand";

interface IHymnState {
  isHymn: boolean;
  setIsHymn: (isHymn: boolean) => void;
}

const useHymnStore = create<IHymnState>((set) => ({
  isHymn: false,
  setIsHymn: (isHymn) => set({ isHymn }),
}));

export { useHymnStore };
