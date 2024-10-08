import React, { useState } from "react";

interface Props {
  title: string;
  onColorChange: (value: string) => void;
}

const ColorPalette: React.FC<Props> = ({ title, onColorChange }) => {
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
    "#7d5fff",
    "#f5f6fa",
    "#ffd1dc", // Soft Pink
    "#ff9aa2", // Coral Pink
    "#ffb7b2", // Peach
    "#ffdac1", // Apricot
    "#c7ceea", // Lavender
    "#a0e7e5", // Aqua
    "#b4f8c8", // Mint Green
    "#fbe7c6", // Light Peach
    "#ffadad", // Rosy Pink
    "#9ae4ea", // Light Sky Blue
    "#a3a1ff", // Periwinkle
    "#fcd1d1", // Light Rose
    "#ffe5b9", // Cream Yellow
    "#f9f7cf", // Light Butter
  ];

  const handleColorClick = (color: string) => {
    if (color !== selectedColor) {
      setSelectedColor(color);
      onColorChange(color);
    }
  };

  return (
    <div>
      <h3>{title}</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px", // Space between the color boxes
          maxWidth: "100%", // Optional: limit the width of the palette
        }}
      >
        {predefinedColors.map((color) => (
          <div
            key={color}
            onClick={() => handleColorClick(color)}
            style={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
              border:
                color === selectedColor
                  ? "5px solid #ff3f34"
                  : "2px solid #212121",
              borderRadius: "10px",
              backgroundColor: color,
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {color === selectedColor && "✅"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
