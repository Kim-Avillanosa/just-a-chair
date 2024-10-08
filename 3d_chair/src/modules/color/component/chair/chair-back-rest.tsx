import useShadow from "@/hooks/useShadow";
import { ChairProperties } from ".";
import { RoundedBox } from "@react-three/drei";
import { useMemo } from "react";
import { useChairBackRestColor } from "../../hooks/useChairColor";

const ChairBackRest: React.FC<ChairProperties> = () => {
  const castShadow = useShadow((x) => x.castShadow);

  const { partColor } = useChairBackRestColor();

  return (
    <RoundedBox
      position={[0, 3, -0.9]}
      args={[2, 2, 0.2]}
      radius={0.1}
      smoothness={10}
      castShadow={castShadow}
    >
      <meshStandardMaterial color={partColor} />
    </RoundedBox>
  );
};

export default ChairBackRest;
