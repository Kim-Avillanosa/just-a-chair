import useShadow from "@/hooks/useShadow";
import { ChairProperties } from ".";
import { RoundedBox } from "@react-three/drei";

const ChairBackRest: React.FC<ChairProperties> = ({ options }) => {

  const castShadow = useShadow(x => x.castShadow)

  return (
    <RoundedBox
      position={[0, 3, -0.9]}
      args={[2, 2, 0.2]}
      radius={0.1}
      smoothness={4}
      castShadow={castShadow}
    >
      <meshStandardMaterial {...options} />
    </RoundedBox>
  );
};

export default ChairBackRest;
