import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ChairSizeActionProps {
  setSize: (size: keyof ChairSize) => void;
}

interface ChairSizeState {
  size: keyof ChairSize;
}

const initialState: ChairSizeState = {
  size: "medium",
};

 const useChairSizeBaseStore = () =>
  create<ChairSizeState & ChairSizeActionProps>()(
    devtools((set) => ({
      ...initialState,
      setSize: (size: keyof ChairSize) => set(() => ({ size })),
    }))
  );


  export const useChairSizeStore = useChairSizeBaseStore()