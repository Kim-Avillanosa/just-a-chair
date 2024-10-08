import useShadow from "@/hooks/useShadow";
import { useChairLegsColor } from "../../hooks/useChairColor";
import { useMemo } from "react";

const ChairLegs: React.FC<ChairProperties> = ({ size }) => {
  const legHeightScheme: ChairSize = {
    short: [0.1, 0.1, 1, 32],
    medium: [0.1, 0.1, 2, 32],
    long: [0.1, 0.1, 3, 32], // increased for a longer leg
    extraLong: [0.1, 0.1, 4, 32], // increased further for an extra-long leg
  };

  const castShadow = useShadow((x) => x.castShadow);

  const { partColor } = useChairLegsColor();

  return (
    <>
      <mesh position={[-0.9, 1, -0.9]} castShadow={castShadow}>
        <cylinderGeometry args={legHeightScheme[size]} />
        <meshStandardMaterial color={partColor} />
      </mesh>
      <mesh position={[0.9, 1, -0.9]} castShadow={castShadow}>
        <cylinderGeometry args={legHeightScheme[size]} />
        <meshStandardMaterial color={partColor} />
      </mesh>
      <mesh position={[-0.9, 1, 0.9]} castShadow={castShadow}>
        <cylinderGeometry args={legHeightScheme[size]} />
        <meshStandardMaterial color={partColor} />
      </mesh>
      <mesh position={[0.9, 1, 0.9]} castShadow={castShadow}>
        <cylinderGeometry args={legHeightScheme[size]} />
        <meshStandardMaterial color={partColor} />
      </mesh>
    </>
  );
};

export default ChairLegs;
