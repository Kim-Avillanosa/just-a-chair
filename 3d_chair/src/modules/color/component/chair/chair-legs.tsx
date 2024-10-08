import useShadow from "@/hooks/useShadow";
import { ChairProperties } from ".";
import { useChairLegsColor } from "../../hooks/useChairColor";
import { useMemo } from "react";

const ChairLegs: React.FC<ChairProperties> = () => {
  const castShadow = useShadow((x) => x.castShadow);

  const { partColor } = useChairLegsColor();

  return (
    <>
      <mesh position={[-0.9, 1, -0.9]} castShadow={castShadow}>
        <cylinderGeometry args={[0.1, 0.1, 2, 32]} />
        <meshStandardMaterial color={partColor} />
      </mesh>
      <mesh position={[0.9, 1, -0.9]} castShadow={castShadow}>
        <cylinderGeometry args={[0.1, 0.1, 2, 32]} />
        <meshStandardMaterial color={partColor} />
      </mesh>
      <mesh position={[-0.9, 1, 0.9]} castShadow={castShadow}>
        <cylinderGeometry args={[0.1, 0.1, 2, 32]} />
        <meshStandardMaterial color={partColor} />
      </mesh>
      <mesh position={[0.9, 1, 0.9]} castShadow={castShadow}>
        <cylinderGeometry args={[0.1, 0.1, 2, 32]} />
        <meshStandardMaterial color={partColor} />
      </mesh>
    </>
  );
};

export default ChairLegs;
