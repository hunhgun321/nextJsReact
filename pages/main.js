import CastleIn2D from "../components/Castle/CastleIn2D";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import SparklingLights from "../components/SparklingLights/SparklingLights.js";

import {
  useIsomorphicLayoutEffect,
  useSSRSafeEffect,
} from "../common/WarningSuppress";
import React from "react";

export default function Main() {
  useIsomorphicLayoutEffect(() => {
    // This code will not execute on server side
    // and there will be no warning prompted.
  }, []);

  useSSRSafeEffect(() => {
    // This code will not execute on server side
    // and there will be no warning prompted.
  }, []);

  return (
    <div style={{ display: "flex", flexDirection:'column', justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw" }}>
      <CastleIn2D />
      <SparklingLights/>
    </div>
  );
}
