import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo, useState } from "react";
import Chair, { ChairProperties } from "@/pages/component/chair";
import { material } from "@/pages/constants/material";
import ChairEditor from "./chair-editor";

export type CanvasBackground = "light" | "dark";

const ChairViewer = () => {
    const [background, setBackground] = useState<CanvasBackground>("light");

    const [chairColor, setColor] = useState("#a1662f")


    const backgroundColor = useMemo(() => {
        if (background === "dark") {
            return "#4b4b4b";
        }

        return "#ffffff";
    }, [background]);

    const toggleBackground = () => {
        setBackground((prevBackground) =>
            prevBackground === "light" ? "dark" : "light"
        );
    };

    const materialOptions: ChairProperties = useMemo(() => {
        return {
            castShadow: background === "dark" ? false : true,
            options: {
                color: chairColor
            },
        };
    }, [chairColor, background]);

    return (
        <>
            <div style={{ display: "flex", height: "100vh" }}>
                <div
                    style={{ flex: 1, borderRight: "1px solid #ccc", padding: "10px" }}
                >
                    <ChairEditor
                        background={background}
                        onThemeChange={toggleBackground}
                        onColorChange={(value) => setColor(value)}
                    />
                </div>
                <div
                    style={{ flex: 1, borderRight: "1px solid #ccc", padding: "10px" }}
                >
                    <Canvas
                        shadows={materialOptions.castShadow}
                        camera={{ position: [5, 5, 5], fov: 100 }}
                        style={{ height: "100%", background: backgroundColor }}
                    >
                        <ambientLight intensity={0.3} />
                        <directionalLight
                            position={[5, 10, 5]}
                            intensity={1}
                            castShadow={materialOptions.castShadow}
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
                        <Chair {...materialOptions} />
                        <OrbitControls />
                    </Canvas>
                </div>
            </div>
        </>
    );
};

export default ChairViewer;
