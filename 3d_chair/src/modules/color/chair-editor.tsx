import useShadow from "@/hooks/useShadow";
import ColorPalette from "./chair-color-palette";
import useChairSpin from "@/hooks/useChairSpin";

interface Props {
    onColorChange: (value: string) => void
}

const ChairEditor: React.FC<Props> = ({ onColorChange }) => {
    const { castShadow, backgroundColor, showShadow, hideShadow } = useShadow()
    const { spinning, startSpinning, stopSpinning } = useChairSpin()


    const toggleBackground = () => castShadow ? hideShadow() : showShadow()

    const toggleSpinning = () => spinning ? stopSpinning() : startSpinning()

    return (
        <div>
            <h1>JUST A CHAIR 🪑</h1>
            <p>Because standing all day is a bit too 'un-standable'!</p>
            <hr />
            <button onClick={toggleBackground}>
                {backgroundColor !== "#ffffff" ? "Lights off" : "Lights on"}
            </button>

            <button onClick={toggleSpinning}>
                {spinning === true ? "Stop spinning" : "Showcase mode"}
            </button>
            <ColorPalette onColorChange={onColorChange} />
        </div>
    );
};

export default ChairEditor;
