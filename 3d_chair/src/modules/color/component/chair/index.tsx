import { MeshStandardMaterialProps } from "@react-three/fiber";
import ChairSeat from "./chair-seat";
import ChairBackRest from "./chair-back-rest";
import ChairLegs from "./chair-legs";
import { useChairSizeStore } from "@/modules/size/hooks/useChairSize";
import { calculateTotalHeight } from "@/lib/calculateTotalHeight";

const Chair = () => {
  const currentSize = useChairSizeStore((s) => s.size);

  const rest: ChairProperties = {
    surface: "smooth",
    size: currentSize,
  };

  const { size } = useChairSizeStore();
  const totalHeight = calculateTotalHeight(size);

  return (
    <>
      <ChairSeat {...rest} />
      <ChairBackRest {...rest} />
      <ChairLegs {...rest} />
    </>
  );
};

export default Chair;
