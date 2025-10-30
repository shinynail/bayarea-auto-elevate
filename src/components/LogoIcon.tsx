import React, { useEffect, useMemo, useState } from "react";
import baaecIcon from "@/assets/baaec-icon.png";

interface LogoIconProps {
  size?: number;
  alt?: string;
  className?: string;
}

// Lightweight chroma-key style background removal for gray/white checkered assets
// Removes near-gray pixels with medium-to-high brightness (typical checkerboard tiles)
function removeGrayBackground(img: HTMLImageElement): string | null {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const w = img.naturalWidth;
  const h = img.naturalHeight;
  canvas.width = w;
  canvas.height = h;
  ctx.drawImage(img, 0, 0);

  const imageData = ctx.getImageData(0, 0, w, h);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Detect neutral gray-ish pixels (checkerboard) with sufficient brightness
    const isGray = Math.abs(r - g) < 12 && Math.abs(g - b) < 12;
    const brightness = (r + g + b) / 3;

    // Remove both light and mid gray squares commonly used in checkerboards
    if (isGray && brightness > 150) {
      data[i + 3] = 0; // transparent
      continue;
    }

    // Also clear near-white pixels
    if (brightness > 235) {
      data[i + 3] = 0;
    }
  }

  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL("image/png");
}

export const LogoIcon: React.FC<LogoIconProps> = ({ size = 64, alt = "BAAEC - Wrench and Piston", className = "" }) => {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const processed = removeGrayBackground(img);
      setSrc(processed || baaecIcon);
    };
    img.onerror = () => setSrc(baaecIcon);
    img.src = baaecIcon;
  }, []);

  const dimension = useMemo(() => ({ width: size, height: size }), [size]);

  return (
    <img
      src={src ?? baaecIcon}
      alt={alt}
      width={dimension.width}
      height={dimension.height}
      className={className}
    />
  );
};

export default LogoIcon;
