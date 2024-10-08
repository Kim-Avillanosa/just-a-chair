import { useRouter } from "next/router";
import ColorPalette from "../../chair-color-palette";
import {
  useChairBackRestColor,
  useChairLegsColor,
  useChairSeatColor,
} from "../../hooks/useChairColor";

const ChairColorEditor = () => {
  const router = useRouter();
  const { push, pathname, query } = router;

  const { setColor: setBackRestColor } = useChairBackRestColor();
  const { setColor: setSeatColor } = useChairSeatColor();
  const { setColor: setLegColor } = useChairLegsColor();

  return (
    <div
      style={{
        color: "#212121",
        marginTop: "10px",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <h2>CHAIR COLOR</h2>
      <hr />
      <ColorPalette
        title="Overall"
        onColorChange={(value) => {
          push({
            pathname,
            query: { ...query, backRest: value, seat: value, legs: value },
          });
          setBackRestColor(value);
          setSeatColor(value);
          setLegColor(value);
        }}
      />
      <hr />
      <ColorPalette
        title="Backrest"
        onColorChange={(value) => {
          push({
            pathname,
            query: { ...query, backRest: value },
          });
          setBackRestColor(value);
        }}
      />
      <hr />
      <ColorPalette
        title="Seat"
        onColorChange={(value) => {
          push({
            pathname,
            query: { ...query, seat: value },
          });
          setSeatColor(value);
        }}
      />
      <hr />
      <ColorPalette
        title="Legs"
        onColorChange={(value) => {
          push({
            pathname,
            query: { ...query, legs: value },
          });
          setLegColor(value);
        }}
      />
    </div>
  );
};

export default ChairColorEditor;
