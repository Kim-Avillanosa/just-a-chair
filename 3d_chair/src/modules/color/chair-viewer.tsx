import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo } from "react";
import Chair from "@/modules/color/component/chair";
import ChairEditor from "./chair-editor";
import useShadow from "@/hooks/useShadow";
import useChairSpin from "@/hooks/useChairSpin";
import { useChairSizeStore } from "../size/hooks/useChairSize";
import { calculateTotalHeight } from "@/lib/calculateTotalHeight";

const ChairViewer = () => {
  const { castShadow, backgroundColor } = useShadow();
  const { spinning } = useChairSpin();
  const { size } = useChairSizeStore();

  // Memoize the total height calculation
  const totalHeight = useMemo(
    () => calculateTotalHeight(size || "medium"),
    [size]
  );

  const setPadding = (size: keyof ChairSize) => {
    switch (size) {
      case "short":
        return 7.5;

      case "medium":
        return 8;

      case "long":
        return 8.5;

      case "extraLong":
        return 9;

      default:
        return 12;
    }
  };

  const chairBaseHeight = totalHeight + 2;
  const planePositionY = -chairBaseHeight + setPadding(size); // Set the plane slightly below the bottom of the chair

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          flex: 1,
          borderRight: "1px solid #ccc",
          padding: "10px",
          overflow: "auto",
        }}
      >
        <ChairEditor />
      </div>
      <div style={{ flex: 1, borderRight: "1px solid #ccc", padding: "10px" }}>
        <Canvas
          shadows={castShadow}
          camera={{ position: [5, 5, 5], fov: 100 }}
          style={{ height: "100%", background: backgroundColor }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, totalHeight + 5, 3]} // Light positioned based on total chair height
            intensity={1}
            castShadow={castShadow}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, planePositionY, 0]} // Ensure the plane is slightly below the chair's bottom
          >
            <planeGeometry args={[50, 50]} />
            <shadowMaterial opacity={0.5} />
          </mesh>
          <Chair />
          <OrbitControls
            autoRotate={spinning}
            autoRotateSpeed={spinning ? 5.0 : 0}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default ChairViewer;
