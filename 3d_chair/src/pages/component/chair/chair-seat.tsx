import { ChairProperties } from ".";
import { RoundedBox } from "@react-three/drei";

const ChairSeat: React.FC<ChairProperties> = ({ options, castShadow }) => {
    return (
        <>
            <RoundedBox
                position={[0, 2, 0]}
                args={[2, 0.2, 2]}
                radius={0.1} // Roundness of the edges
                smoothness={4} // Smoothness of the roundness
                castShadow={castShadow}
            >
                <meshStandardMaterial {...options} />
            </RoundedBox>
        </>
    );
};

export default ChairSeat;
