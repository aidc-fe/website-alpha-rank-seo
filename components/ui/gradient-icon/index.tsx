import React from "react";
import * as lucideIcons from "./constants";

const modifySvgAttributes = (
  svg: string,
  newSize: number,
  strokeWidth: number
) => {
  return svg
    .replace(/width="[^"]*"/, `width="${newSize}"`)
    .replace(/height="[^"]*"/, `height="${newSize}"`)
    .replace(/stroke-width="[^"]*"/, `stroke-width="${strokeWidth}"`);
};

const GradientIcon = ({
  svg,
  size = 24,
  strokeWidth = 2,
  name,
}: {
  svg?: string;
  size?: number;
  strokeWidth?: number;
  name?: string;
}) => {
  const svgCode = svg ?? (lucideIcons as { [key: string]: string })[name ?? ""];

  if (!svgCode) {
    return null;
  }

  const encodedSvg = `data:image/svg+xml;utf8,${encodeURIComponent(
    modifySvgAttributes(svgCode, size, strokeWidth)
  )}`;

  return (
    <div
      className="flex items-center justify-center bg-gradient-to-b from-[#5543CF] to-[#AC52DD] mask-image"
      style={{
        width: size,
        height: size,
        WebkitMask: `url("${encodedSvg}")`,
        mask: `url("${encodedSvg}")`,
      }}
    />
  );
};

export default GradientIcon;
