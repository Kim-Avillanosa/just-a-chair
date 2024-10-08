import ColorPalette from "../../chair-color-palette";
import {
  useChairBackRestColor,
  useChairLegsColor,
  useChairSeatColor,
} from "../../hooks/useChairColor";

const ChairColorEditor = () => {
  const { partColor, setColor: setBackRestColor } = useChairBackRestColor();
  const { setColor: setSeatColor } = useChairSeatColor();
  const { setColor: setLegColor } = useChairLegsColor();
  return (
    <>
      <h1>Chair color</h1>
      <ColorPalette
        title="Overall"
        onColorChange={(value) => {
          setBackRestColor(value);
          setSeatColor(value);
          setLegColor(value);
        }}
      />
      <hr />
      <ColorPalette
        title="Back rest"
        onColorChange={(value) => setBackRestColor(value)}
      />
      <hr />
      <ColorPalette
        title="Seat"
        onColorChange={(value) => setSeatColor(value)}
      />
      <hr />
      <ColorPalette
        title="Legs"
        onColorChange={(value) => setLegColor(value)}
      />
    </>
  );
};

export default ChairColorEditor;
