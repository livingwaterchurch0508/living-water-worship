import { create } from "zustand";

interface IHomeworkState {
  isHomework: boolean;
  setIsHomework: (isHomework: boolean) => void;
}

const useHomeworkStore = create<IHomeworkState>((set) => ({
  isHomework: false,
  setIsHomework: (isHomework) => set({ isHomework }),
}));

export { useHomeworkStore };
