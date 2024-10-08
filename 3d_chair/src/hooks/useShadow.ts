import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ShadowActionProps {
  showShadow: () => void;
  hideShadow: () => void;
}

interface ShadowState {
  castShadow: boolean;
  backgroundColor: string;
}

const initialState: ShadowState = {
  castShadow: true,
  backgroundColor: "#ffffff",
};

const useShadow = create<ShadowState & ShadowActionProps>()(
  devtools((set, get) => ({
    ...initialState,
    showShadow: () => {
      set(() => ({ castShadow: true, backgroundColor: " #ffffff" }));
    },
    hideShadow: () => {
      set(() => ({ castShadow: false, backgroundColor: "#222f3e" }));
    },
  }))
);

export default useShadow;
