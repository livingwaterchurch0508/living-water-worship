import { create } from "zustand";

interface IHomeworkState {
  isHomework: boolean;
  setIsHomework: (str: boolean) => void;
}

const useHomeworkStore = create<IHomeworkState>((set) => ({
  isHomework: false,
  setIsHomework: (bool) => set(() => ({ isHomework: bool })),
}));

export { useHomeworkStore };
