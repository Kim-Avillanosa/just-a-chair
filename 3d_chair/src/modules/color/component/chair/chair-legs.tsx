import useShadow from "@/hooks/useShadow";
import { ChairProperties } from ".";

const ChairLegs: React.FC<ChairProperties> = ({ options }) => {
    const castShadow = useShadow(x => x.castShadow)

    return (
        <>
            <mesh position={[-0.9, 1, -0.9]} castShadow={castShadow}>
                <cylinderGeometry args={[0.1, 0.1, 2, 32]} />
                <meshStandardMaterial {...options} />
            </mesh>
            <mesh position={[0.9, 1, -0.9]} castShadow={castShadow}>
                <cylinderGeometry args={[0.1, 0.1, 2, 32]} />
                <meshStandardMaterial {...options} />
            </mesh>
            <mesh position={[-0.9, 1, 0.9]} castShadow={castShadow}>
                <cylinderGeometry args={[0.1, 0.1, 2, 32]} />
                <meshStandardMaterial {...options} />
            </mesh>
            <mesh position={[0.9, 1, 0.9]} castShadow={castShadow}>
                <cylinderGeometry args={[0.1, 0.1, 2, 32]} />
                <meshStandardMaterial {...options} />
            </mesh>
        </>
    );
};

export default ChairLegs;
