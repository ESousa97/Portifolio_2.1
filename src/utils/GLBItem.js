// src/components/GLBItem.js
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const GLBItem = ({ modelPath, position }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    // Definindo OrthographicCamera
    const aspectRatio = containerRef.current.clientWidth / containerRef.current.clientHeight;
    const camera = new THREE.OrthographicCamera(
      -aspectRatio * 2.5, // left
      aspectRatio * 2.5,  // right
      2.5,                // top
      -2.5,               // bottom
      0.1,                // near
      5000                // far
    );
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Configura a iluminação
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Carrega o modelo GLB
    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      const model = gltf.scene;
      model.position.set(position.x, position.y, position.z);
      model.scale.set(0.5, 0.5, 0.5); // Ajusta a escala se necessário
      scene.add(model);
    });

    camera.position.z = 10;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.left = -aspect * 2.5;
      camera.right = aspect * 2.5;
      camera.top = 2.5;
      camera.bottom = -2.5;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, [modelPath, position]);

  return <div ref={containerRef} style={{ width: "100%", height: "400px" }} />;
};

export default GLBItem;
