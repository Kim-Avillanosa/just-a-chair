import { create } from "zustand"
import { devtools } from "zustand/middleware"

interface ChairSpinActionProps {
    startSpinning: () => void
    stopSpinning: () => void
}

interface ChairSpinState {
    spinning: boolean
}

const initialState: ChairSpinState = {
    spinning: true
}

const useChairSpin = create<ChairSpinState & ChairSpinActionProps>()(devtools((set, get) => ({
    ...initialState,
    startSpinning: () => {
        set(() => ({ spinning: true }))
    },
    stopSpinning: () => {
        set(() => ({ spinning: false }))
    }

})))

export default useChairSpin