import { create } from "zustand";

interface IDeviceState {
  browserHeight: number;
  setBrowserHeight: (browserHeight: number) => void;
}

const useDeviceStore = create<IDeviceState>((set) => ({
  browserHeight: 0,
  setBrowserHeight: (browserHeight) => set({ browserHeight }),
}));

export { useDeviceStore };
