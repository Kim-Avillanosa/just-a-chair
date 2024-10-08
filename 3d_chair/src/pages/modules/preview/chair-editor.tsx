import ColorPalette from "./chair-color-palette";
import { CanvasBackground } from "./chair-viewer";

interface Props {
    background: CanvasBackground;
    onThemeChange: () => void;
    onColorChange: (value: string) => void
}

const ChairEditor: React.FC<Props> = ({ onThemeChange, onColorChange, background }) => {
    return (
        <div>
            <h1>JUST A CHAIR 🪑</h1>
            <p>Because standing all day is a bit too 'un-standable'!</p>
            <hr />
            <button onClick={onThemeChange}>
                {background === "light" ? "Lights off" : "Lights on"}
            </button>
            <ColorPalette onColorChange={onColorChange} />
        </div>
    );
};

export default ChairEditor;
