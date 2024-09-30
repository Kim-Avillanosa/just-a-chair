import useAudio from "@/hooks/useAudio";
import React, { useState } from "react";

interface Props {
    onColorChange: (value: string) => void;
}

const ColorPalette: React.FC<Props> = ({ onColorChange }) => {
    const [selectedColor, setSelectedColor] = useState<string>("#a1662f"); // Default color

    const predefinedColors: string[] = [
        "#a1662f",
        "#00b894",
        "#0984e3",
        "#fed330",
        "#eb3b5a",
        "#32ff7e",
        "#ff3838",
        "#fff200",
        "#3d3d3d",
        "#6F1E51",
        "#A3CB38",
        "#F79F1F",
        "#7d5fff"
    ];

    const handleColorClick = (color: string) => {
        setSelectedColor(color);
        onColorChange(color);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Select a Color</h2>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '10px', // Space between the color boxes
                    maxWidth: '320px', // Optional: limit the width of the palette
                    margin: '0 auto', // Center the palette
                }}
            >
                {predefinedColors.map((color) => (
                    <div
                        key={color}
                        onClick={() => {

                            handleColorClick(color)
                        }}
                        style={{
                            width: '80px',
                            height: '80px',
                            cursor: 'pointer',
                            border: '1px solid #000',
                            borderRadius: '5px',
                            backgroundColor: color,
                            transition: 'transform 0.2s',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    />
                ))}
            </div>
            <div
                style={{
                    marginTop: '20px',
                    width: '100px',
                    height: '100px',
                    border: '1px solid #000',
                    borderRadius: '5px',
                    backgroundColor: selectedColor,
                }}
            />
            <p>Selected Color: <b>{selectedColor}</b></p>
        </div>
    );
};

export default ColorPalette;
