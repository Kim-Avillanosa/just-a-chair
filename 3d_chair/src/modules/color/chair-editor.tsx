import useShadow from "@/hooks/useShadow";
import ColorPalette from "./chair-color-palette";
import useChairSpin from "@/hooks/useChairSpin";
import {
  useChairBackRestColor,
  useChairLegsColor,
  useChairSeatColor,
} from "./hooks/useChairColor";
import ChairColorEditor from "./component/chair/chair-color-editor";
import ChairSizeEditor from "../size/chair-size-editor";
import { useRouter } from "next/router";
import { useChairSizeStore } from "../size/hooks/useChairSize";

interface Props {}

const ChairEditor: React.FC<Props> = () => {
  const { castShadow, backgroundColor, showShadow, hideShadow } = useShadow();
  const { spinning, startSpinning, stopSpinning } = useChairSpin();

  const router = useRouter();

  const { setColor: setBackRestColor } = useChairBackRestColor();
  const { setColor: setSeatColor } = useChairSeatColor();
  const { setColor: setLegColor } = useChairLegsColor();
  const { setSize } = useChairSizeStore();

  const toggleBackground = () => (castShadow ? hideShadow() : showShadow());

  const toggleSpinning = () => (spinning ? stopSpinning() : startSpinning());

  const resetStates = () => {
    const defaultColor = "#a1662f";
    router.replace(
      {
        pathname: router.pathname,
        query: {},
      },
      undefined,
      { shallow: true }
    );
    setBackRestColor(defaultColor);
    setSeatColor(defaultColor);
    setLegColor(defaultColor);
    setSize("medium");
  };
  return (
    <div>
      <h1>JUST A CHAIR 🪑</h1>
      <p>Because standing all day is a bit too 'un-standable'!</p>
      <hr />
      <button onClick={resetStates}>Reset</button>

      <button onClick={toggleBackground}>
        {backgroundColor !== "#ffffff" ? "Lights off" : "Lights on"}
      </button>

      <button onClick={toggleSpinning}>
        {spinning === true ? "Stop spinning" : "Showcase mode"}
      </button>

      <div
        style={{
          overflow: "auto",
          color: "#212121",
          marginTop: "10px",
          background: "#f1f2f6",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <ChairSizeEditor />
        <ChairColorEditor />
      </div>
    </div>
  );
};

export default ChairEditor;
