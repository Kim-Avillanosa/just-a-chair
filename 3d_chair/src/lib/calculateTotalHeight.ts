const legHeightScheme: ChairSize = {
  short: [0.1, 0.1, 1, 32],
  medium: [0.1, 0.1, 2, 32],
  long: [0.1, 0.1, 3, 32],
  extraLong: [0.1, 0.1, 4, 32],
};

// Calculate total height based on the selected size
export const calculateTotalHeight = (size: keyof ChairSize): number => {
  const seatHeight = 2;
  const backRestHeight = 2;
  const legHeight = legHeightScheme[size][2]; // Access the height from the legHeightScheme
  return legHeight + seatHeight + backRestHeight;
};
