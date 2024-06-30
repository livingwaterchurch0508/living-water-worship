import { create } from "zustand";

interface IHomeworkState {
  isHomework: boolean;
  setIsHomework: (isHomework: boolean) => void;
  recycling: string[];
  dishWashing: string[];
}

const useHomeworkStore = create<IHomeworkState>((set) => ({
  isHomework: false,
  setIsHomework: (isHomework) => set({ isHomework }),
  recycling: ["김봉우", "김축복", "오민혁"],
  dishWashing: ["오예민", "한혜리", "한채리"],
}));

export { useHomeworkStore };
