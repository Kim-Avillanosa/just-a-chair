import useShadow from "@/hooks/useShadow";
import { ChairProperties } from ".";
import { RoundedBox } from "@react-three/drei";
import { useChairSeatColor } from "../../hooks/useChairColor";
import { useMemo } from "react";
import { color } from "three/webgpu";

const ChairSeat: React.FC<ChairProperties> = () => {
  const castShadow = useShadow((x) => x.castShadow);

  const { partColor } = useChairSeatColor();

  return (
    <RoundedBox
      position={[0, 2, 0]}
      args={[2, 0.2, 2]}
      radius={0.1} // Roundness of the edges
      smoothness={4} // Smoothness of the roundness
      castShadow={castShadow}
    >
      <meshStandardMaterial color={partColor} />
    </RoundedBox>
  );
};

export default ChairSeat;
