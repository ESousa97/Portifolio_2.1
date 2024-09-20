// src/components/GLBCarousel.js
import React from "react";
import GLBItem from "./GLBItem";

const GLBCarousel = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {/* Renderiza cada objeto GLB de forma independente */}
      <GLBItem modelPath="/models/Html5.glb" position={{ x: 0, y: 0, z: 0 }} />
      <GLBItem modelPath="/models/Css3.glb" position={{ x: 0, y: 0, z: 0 }} />
      <GLBItem modelPath="/models/JavaScript.glb" position={{ x: 0, y: 0, z: 0 }} />
      <GLBItem modelPath="/models/React.glb" position={{ x: 0, y: 0, z: 0 }} />
      <GLBItem modelPath="/models/NodeJs.glb" position={{ x: 0, y: 0, z: 0 }} />
    </div>
  );
};

export default GLBCarousel;
