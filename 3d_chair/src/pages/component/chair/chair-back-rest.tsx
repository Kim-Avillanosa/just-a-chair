import { ChairProperties } from ".";

const ChairBackRest: React.FC<ChairProperties> = ({
  castShadow, options
}) => {
  return (
    <>
      <mesh position={[0, 3, -0.9]} castShadow={castShadow}>
        <boxGeometry args={[2, 2, 0.2]} />
        <meshStandardMaterial {...options} />
      </mesh>
    </>
  );
};

export default ChairBackRest;
