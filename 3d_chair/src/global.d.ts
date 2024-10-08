type ChairSize = {
  short: CylinderGeometryProps;
  medium: CylinderGeometryProps;
  long: CylinderGeometryProps;
  extraLong: CylinderGeometryProps;
};

type CanvasBackground = "light" | "dark";

type ChairSurface = "smooth" | "cubic";

interface ChairProperties {
  surface: ChairSurface;
  size: keyof ChairSize;
}
