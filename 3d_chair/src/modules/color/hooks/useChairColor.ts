import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ColorActionProps {
  setColor: (color: string) => void;
}

interface ColorState {
  partColor: string;
}

const initialState: ColorState = {
    partColor: "#a1662f",
};

const createChairColorStore = () => 
  create<ColorState & ColorActionProps>()(
    devtools((set) => ({
      ...initialState,
      setColor: (color: string) => set(() => ({ partColor: color })),
    }))
  );

export const useChairBackRestColor = createChairColorStore();
export const useChairLegsColor = createChairColorStore();
export const useChairSeatColor = createChairColorStore();
