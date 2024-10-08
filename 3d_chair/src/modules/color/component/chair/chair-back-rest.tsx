import useShadow from "@/hooks/useShadow";
import { RoundedBox } from "@react-three/drei";
import { useChairBackRestColor } from "../../hooks/useChairColor";

interface ChairBackRestProps extends ChairProperties {
  size: keyof ChairSize; // Ensure legHeight is passed to ChairBackRest
}

const ChairBackRest: React.FC<ChairBackRestProps> = ({ size }) => {
  const castShadow = useShadow((x) => x.castShadow);
  const { partColor } = useChairBackRestColor();

  // Define the leg height scheme to calculate position
  const legHeightScheme: ChairSize = {
    short: [0.1, 0.1, 1, 32],
    medium: [0.1, 0.1, 2, 32],
    long: [0.1, 0.1, 3, 32],
    extraLong: [0.1, 0.1, 4, 32],
  };

  const seatHeight = 2;
  const backRestHeight = 2;
  const backRestPositionY =
    (legHeightScheme[size][2] + seatHeight + backRestHeight) / 2;

  return (
    <RoundedBox
      position={[0, backRestPositionY, -0.9]} // Adjust the Y position based on leg height
      args={[2, backRestHeight, 0.2]}
      radius={0.1}
      smoothness={10}
      castShadow={castShadow}
    >
      <meshStandardMaterial color={partColor} />
    </RoundedBox>
  );
};

export default ChairBackRest;
