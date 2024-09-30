import { ChairProperties } from ".";

const ChairSeat: React.FC<ChairProperties> = ({ options, castShadow }) => {
    return (
        <>
            <mesh position={[0, 2, 0]} castShadow={castShadow}>
                <boxGeometry args={[2, 0.2, 2]} />
                <meshStandardMaterial {...options} />
            </mesh>
        </>
    );
};

export default ChairSeat;
