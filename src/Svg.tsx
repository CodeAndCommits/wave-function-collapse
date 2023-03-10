import { ReactNode, useRef } from "react";
import { createPortal } from "react-dom";

export function Svg({ width, height, children }: { width: number, height: number, children: ReactNode }) {
  const portal = useRef(null)

  return (
    <svg width={width} height={height} version="1.1" xmlns="http://www.w3.org/2000/svg">
      {children}
      <g id="svg-portal"></g>
    </svg>
  );
}
