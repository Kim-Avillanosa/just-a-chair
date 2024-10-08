import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo, useState } from "react";
import Chair, { ChairProperties } from "@/modules/color/component/chair";
import ChairEditor from "./chair-editor";
import useShadow from "@/hooks/useShadow";
import useChairSpin from "@/hooks/useChairSpin";

const ChairViewer = () => {
  const { castShadow, backgroundColor } = useShadow();
  const { spinning } = useChairSpin();


  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1, borderRight: "1px solid #ccc", padding: "10px" }}>
        <ChairEditor  />
      </div>
      <div style={{ flex: 1, borderRight: "1px solid #ccc", padding: "10px" }}>
        <Canvas
          shadows={castShadow}
          camera={{ position: [5, 5, 5], fov: 100 }}
          style={{ height: "100%", background: backgroundColor }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[5, 10, 5]}
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
            position={[0, 0, 0]}
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
