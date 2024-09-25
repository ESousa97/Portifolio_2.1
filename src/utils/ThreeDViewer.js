import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "../styles/Projects.css"

function ThreeDViewer({ currentIndex, models }) {
  const mountRef = useRef(null);

  useEffect(() => {
    let model;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const mount = mountRef.current;
    if (mount) {
      mount.appendChild(renderer.domElement);
    }

    scene.background = null;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 2).normalize();
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const loader = new GLTFLoader();
    const loadModel = (index) => {
      if (model) {
        scene.remove(model);
      }

      loader.load(
        models[index],
        (gltf) => {
          model = gltf.scene;
          model.scale.set(0.7, 0.7, 0.7);
          scene.add(model);
        },
        undefined,
        (error) => {
          console.error("Erro ao carregar o modelo:", error);
        }
      );
    };

    loadModel(currentIndex);

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      if (model) model.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mount) {
        mount.removeChild(renderer.domElement);
      }
      if (model) {
        scene.remove(model);
      }
    };
  }, [currentIndex, models]);

  return <div ref={mountRef} className="model-viewer" style={{ width: "100%", height: "90%" }} />;
}

export default ThreeDViewer;
