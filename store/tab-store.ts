import { create } from "zustand";
import { TAB_TYPES } from "@/variables/enums";

interface TabState {
  tab: TAB_TYPES;
  setTab: (str: TAB_TYPES) => void;
}

const useTabStore = create<TabState>((set) => ({
  tab: TAB_TYPES.HYMNS,
  setTab: (tab) => set(() => ({ tab })),
}));

export { useTabStore };
