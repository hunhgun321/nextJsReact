import dynamic from "next/dynamic";
import React from "react";

import Curtain from "../components/Curtain/CurtainCopy.js"
import MouseFollowLight from "../components/MovingLightMouse/MovingLightMouse.js";

export default function Testing() {
  return (
    <div style={{ backgroundColor: "grey", width: "100vw", height: "100vh" }}>
      <Curtain/>
    </div>
  );
}
