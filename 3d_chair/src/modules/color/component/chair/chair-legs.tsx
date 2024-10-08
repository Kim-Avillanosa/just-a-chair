import useShadow from "@/hooks/useShadow";
import { useChairLegsColor } from "../../hooks/useChairColor";
import { useMemo } from "react";
import { useRouter } from "next/router";

const ChairLegs: React.FC<ChairProperties> = ({ size }) => {
  const legHeightScheme: ChairSize = {
    short: [0.1, 0.1, 1, 32],
    medium: [0.1, 0.1, 2, 32],
    long: [0.1, 0.1, 3, 32], // increased for a longer leg
    extraLong: [0.1, 0.1, 4, 32], // increased further for an extra-long leg
  };

  const router = useRouter();

  const {
    query: { legs, size: querySize },
  } = router;

  const castShadow = useShadow((x) => x.castShadow);

  const { partColor } = useChairLegsColor();

  const currentColor = Array.isArray(legs) ? legs[0] : legs ?? partColor;

  const currentSize = Array.isArray(querySize)
    ? querySize[0]
    : querySize ?? size;

  return (
    <>
      <mesh position={[-0.9, 1, -0.9]} castShadow={castShadow}>
        <cylinderGeometry
          args={legHeightScheme[currentSize as keyof ChairSize]}
        />
        <meshStandardMaterial color={currentColor} />
      </mesh>
      <mesh position={[0.9, 1, -0.9]} castShadow={castShadow}>
        <cylinderGeometry
          args={legHeightScheme[currentSize as keyof ChairSize]}
        />
        <meshStandardMaterial color={currentColor} />
      </mesh>
      <mesh position={[-0.9, 1, 0.9]} castShadow={castShadow}>
        <cylinderGeometry
          args={legHeightScheme[currentSize as keyof ChairSize]}
        />
        <meshStandardMaterial color={currentColor} />
      </mesh>
      <mesh position={[0.9, 1, 0.9]} castShadow={castShadow}>
        <cylinderGeometry
          args={legHeightScheme[currentSize as keyof ChairSize]}
        />
        <meshStandardMaterial color={currentColor} />
      </mesh>
    </>
  );
};

export default ChairLegs;
