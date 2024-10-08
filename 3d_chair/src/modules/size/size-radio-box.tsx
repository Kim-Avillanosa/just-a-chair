import React, { useState } from "react";

interface SizeOption {
  label: string;
  value: keyof ChairSize;
}

interface SizeRadioBoxProps {
  options: SizeOption[];
  onSizeChange: (size: keyof ChairSize) => void;
}

const SizeRadioBox: React.FC<SizeRadioBoxProps> = ({
  options,
  onSizeChange,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(options[1].value); // Default to the first option

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const size = event.target.value;
    setSelectedSize(size);

    onSizeChange(size as keyof ChairSize);
  };

  return (
    <div className="flex flex-col">
      {options.map((option) => (
        <label key={option.value} className="flex items-center mb-2 text-lg">
          {" "}
          {/* Adjust text size */}
          <input
            type="radio"
            value={option.value}
            checked={selectedSize === option.value}
            onChange={handleSizeChange}
            className="mr-2 w-6 h-6 cursor-pointer" // Increase size of radio button
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default SizeRadioBox;
