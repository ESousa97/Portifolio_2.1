import React, { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"; // Importa os ícones de setas
import "../styles/Projects.css";
import "../styles/SmallScreenAdjustments.css";

function Projects() {
  const mountRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const models = useMemo(() => [
    "/models/Api.glb",
    "/models/BootStrap.glb",
    "/models/Css3.glb", 
    "/models/Git.glb",
    "/models/GitHub.glb",
    "/models/Html5.glb", 
    "/models/Javascript.glb",
    "/models/Linux.glb",
    "/models/MongoDb.glb",
    "/models/MySql.glb",
    "/models/NextJs.glb",
    "/models/NodeJs.glb",
    "/models/PostgreeSql.glb",
    "/models/Python.glb",
    "/models/React.glb",
    "/models/Sql.glb",
    "/models/ThreeJs.glb",
    "/models/TypeScript.glb",
    "/models/VisualCode.glb",
  ], []);

  useEffect(() => {
    let model;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
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

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % models.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + models.length) % models.length);
  };

  return (
    <div className="projects-container">
      <div className="left-side">
        <button onClick={handlePrev} className="nav-button nav-left"><FiArrowLeft size={24} /></button>
        <div className="model-viewer" ref={mountRef} style={{ width: "100%", height: "90%" }} />
        <button onClick={handleNext} className="nav-button nav-right"><FiArrowRight size={24} /></button>
      </div>
      <div className="right-side">
        <div className="project-info">
          <h1>My Projects</h1>
          <p>Use as setas do teclado ou os botões laterais para navegar entre os modelos.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
