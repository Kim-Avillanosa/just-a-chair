import ColorPalette from "./chair-color-palette";
import { CanvasBackground } from "./chair-viewer";

interface Props {
    background: CanvasBackground;
    isSpinning: boolean
    onSpinningStateChanged: () => void
    onThemeChange: () => void;
    onColorChange: (value: string) => void
}

const ChairEditor: React.FC<Props> = ({ background, isSpinning, onThemeChange, onColorChange, onSpinningStateChanged }) => {
    return (
        <div>
            <h1>JUST A CHAIR 🪑</h1>
            <p>Because standing all day is a bit too 'un-standable'!</p>
            <hr />
            <button onClick={onThemeChange}>
                {background === "light" ? "Lights off" : "Lights on"}
            </button>

            <button onClick={onSpinningStateChanged}>
                {isSpinning === true ? "Stop spinning" : "Showcase mode"}
            </button>
            <ColorPalette onColorChange={onColorChange} />
        </div>
    );
};

export default ChairEditor;
