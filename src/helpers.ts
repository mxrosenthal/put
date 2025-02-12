import { Size, Sizes } from "./constants";

export function getXYOffSets(size: Size) {
  const dimension = Sizes[size];
  return { x: dimension.width / 2, y: dimension.height / 2 };
}
