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
    <div style={{
        color : "#212121",
        marginTop : "10px",
        background : "#f1f2f6",
        borderRadius : "10px",
        padding : "20px"
    }}>
      <h1>CHAIR COLOR</h1>
      <hr/>
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
    </div>
  );
};

export default ChairColorEditor;
