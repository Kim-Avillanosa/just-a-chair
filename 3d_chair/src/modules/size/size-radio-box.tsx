import { useRouter } from "next/router";
import React, { useState } from "react";
import { useChairSizeStore } from "./hooks/useChairSize";

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
  const size = useChairSizeStore((x) => x.size);
  const router = useRouter();

  const {
    query: { size: querySize },
  } = router;

  const currentSize = Array.isArray(querySize)
    ? querySize[0]
    : querySize ?? size;

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const size = event.target.value;
    onSizeChange(size as keyof ChairSize);
  };

  return (
    <div className="flex flex-col">
      {options.map((option) => (
        <label key={option.value} className="flex items-center mb-2 text-lg">
          {/* Adjust text size */}
          <input
            type="radio"
            value={option.value}
            checked={currentSize === option.value}
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
