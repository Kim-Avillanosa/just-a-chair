import { ChairProperties } from ".";

const ChairLegs: React.FC<ChairProperties> = ({ castShadow, options }) => {
    return (
        <>
            <mesh position={[-0.9, 1, -0.9]} castShadow={castShadow}>
                <boxGeometry args={[0.2, 2, 0.2]} />
                <meshStandardMaterial {...options} />
            </mesh>
            <mesh position={[0.9, 1, -0.9]} castShadow={castShadow}>
                <boxGeometry args={[0.2, 2, 0.2]} />
                <meshStandardMaterial {...options} />
            </mesh>
            <mesh position={[-0.9, 1, 0.9]} castShadow={castShadow}>
                <boxGeometry args={[0.2, 2, 0.2]} />
                <meshStandardMaterial {...options} />
            </mesh>
            <mesh position={[0.9, 1, 0.9]} castShadow={castShadow}>
                <boxGeometry args={[0.2, 2, 0.2]} />
                <meshStandardMaterial {...options} />
            </mesh>
        </>
    );
};

export default ChairLegs;
