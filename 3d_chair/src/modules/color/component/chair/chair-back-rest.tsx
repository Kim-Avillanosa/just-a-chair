import useShadow from "@/hooks/useShadow";
import { RoundedBox } from "@react-three/drei";
import { useChairBackRestColor } from "../../hooks/useChairColor";
import { useRouter } from "next/router";
import { useChairSizeStore } from "@/modules/size/hooks/useChairSize";

interface ChairBackRestProps extends ChairProperties {
  size: keyof ChairSize; // Ensure legHeight is passed to ChairBackRest
}

const ChairBackRest: React.FC<ChairBackRestProps> = ({ size }) => {
  const castShadow = useShadow((x) => x.castShadow);
  const { partColor } = useChairBackRestColor();

  const router = useRouter();

  const {
    query: { backRest, size: querySize },
  } = router;

  const currentColor = Array.isArray(backRest)
    ? backRest[0]
    : backRest ?? partColor;

  const currentSize = Array.isArray(querySize)
    ? querySize[0]
    : querySize ?? size;

  const legHeightScheme: ChairSize = {
    short: [0.1, 0.1, 1, 32],
    medium: [0.1, 0.1, 2, 32],
    long: [0.1, 0.1, 3, 32],
    extraLong: [0.1, 0.1, 4, 32],
  };

  const seatHeight = 2;
  const backRestHeight = 2;
  const backRestPositionY =
    (legHeightScheme[currentSize as keyof ChairSize][2] +
      seatHeight +
      backRestHeight) /
    2;

  return (
    <RoundedBox
      position={[0, backRestPositionY, -0.9]}
      args={[2, backRestHeight, 0.2]}
      radius={0.1}
      smoothness={10}
      castShadow={castShadow}
    >
      <meshStandardMaterial color={currentColor} />
    </RoundedBox>
  );
};

export default ChairBackRest;
