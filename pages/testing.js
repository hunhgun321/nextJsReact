import dynamic from "next/dynamic";
import React from "react";

const SparklingLights = dynamic(
  () => import("../components/SparklingLights/SparklingLights.js"),
  { ssr: false }
);

export default function Testing() {
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <SparklingLights />
    </div>
  );
}
