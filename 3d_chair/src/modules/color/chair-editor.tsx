import useShadow from "@/hooks/useShadow";
import ColorPalette from "./chair-color-palette";
import useChairSpin from "@/hooks/useChairSpin";
import {
  useChairBackRestColor,
  useChairLegsColor,
  useChairSeatColor,
} from "./hooks/useChairColor";
import ChairColorEditor from "./component/chair/chair-color-editor";

interface Props {}

const ChairEditor: React.FC<Props> = () => {
  const { castShadow, backgroundColor, showShadow, hideShadow } = useShadow();
  const { spinning, startSpinning, stopSpinning } = useChairSpin();

  const { partColor, setColor: setBackRestColor } = useChairBackRestColor();
  const { setColor: setSeatColor } = useChairSeatColor();
  const { setColor: setLegColor } = useChairLegsColor();

  const toggleBackground = () => (castShadow ? hideShadow() : showShadow());

  const toggleSpinning = () => (spinning ? stopSpinning() : startSpinning());

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

      <ChairColorEditor />
    </div>
  );
};

export default ChairEditor;
