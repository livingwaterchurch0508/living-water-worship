import { create } from "zustand";

interface IMultiAudioState {
  audioIndex: number;
  setAudioIndex: (audioIndex: number) => void;
  resetAudioIndex: () => void;
}

const useMultiAudioStore = create<IMultiAudioState>((set) => ({
  audioIndex: 0,
  setAudioIndex: (audioIndex) => set({ audioIndex }),
  resetAudioIndex: () => set({ audioIndex: 0 }),
}));

export { useMultiAudioStore };
