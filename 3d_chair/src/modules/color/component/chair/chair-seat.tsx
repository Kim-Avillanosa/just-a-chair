import useShadow from "@/hooks/useShadow";
import { RoundedBox } from "@react-three/drei";
import { useChairSeatColor } from "../../hooks/useChairColor";
import { useRouter } from "next/router";

interface ChairSeatProps extends ChairProperties {
  size: keyof ChairSize; // Ensure legHeight is passed to ChairSeat
}

const ChairSeat: React.FC<ChairSeatProps> = ({ size }) => {
  const castShadow = useShadow((x) => x.castShadow);
  const { partColor } = useChairSeatColor();

  // Calculate the seat height based on the leg height
  const legHeightScheme: ChairSize = {
    short: [0.1, 0.1, 1, 32],
    medium: [0.1, 0.1, 2, 32],
    long: [0.1, 0.1, 3, 32],
    extraLong: [0.1, 0.1, 4, 32],
  };

  const router = useRouter();

  const {
    query: { seat, size: querySize },
  } = router;

  const currentSize = Array.isArray(querySize)
    ? querySize[0]
    : querySize ?? size;

  const seatHeight = 2;
  const seatPositionY =
    (legHeightScheme[currentSize as keyof ChairSize][2] + seatHeight) / 2;

  const currentColor = Array.isArray(seat) ? seat[0] : seat ?? partColor;

  return (
    <RoundedBox
      position={[0, seatPositionY, 0]}
      args={[2, 0.2, 2]}
      radius={0.1}
      smoothness={2}
      castShadow={castShadow}
    >
      <meshStandardMaterial color={currentColor} />
    </RoundedBox>
  );
};

export default ChairSeat;
