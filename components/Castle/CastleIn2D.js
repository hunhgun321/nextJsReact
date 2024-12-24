import { contain, cover } from "three/src/extras/TextureUtils.js";
import castleImage from "../../public/disneyland_castle.jpeg";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./CastleCss.css";
import React from "react";

export default function CastleIn2D() {
  const [sparkle, setSparkle] = useState(false);

  useEffect(() => {
    const sparkleInterval = setInterval(() => {
      setSparkle(!sparkle);
    }, 2000);
    return () => clearInterval(sparkleInterval);
  }, [sparkle]);

  return (
    <div
      style={{
        position: "relative",
        width: "95vw",
        height: "95vh",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <Image
        src={"/disneyland_castle_png_best.png"}
        alt="Disneyland Castle"
        // This makes the image cover the entire div
        style={{ objectFit: "contain", overflow: "hidden", filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))' }} // This maintains aspect ratio
        fill={true}
      />
    </div>
  );
}
