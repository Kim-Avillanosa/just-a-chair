import { ChairProperties } from ".";
import { RoundedBox } from "@react-three/drei";

const ChairBackRest: React.FC<ChairProperties> = ({ castShadow, options }) => {
  return (
    <>
      <RoundedBox
        position={[0, 3, -0.9]}
        args={[2, 2, 0.2]}
        radius={0.1} // radius for rounded edges
        smoothness={4} // smoothness for better curvature
        castShadow={castShadow}
      >
        <meshStandardMaterial {...options} />
      </RoundedBox>
    </>
  );
};

export default ChairBackRest;
