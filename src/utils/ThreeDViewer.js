import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "../styles/Projects.css";

function ThreeDViewer({ currentIndex, models, onNavigate }) {
  const mountRef = useRef(null);
  const isDraggingRef = useRef(false);
  const rotationSpeed = useRef(0.004);
  const modelGroupRef = useRef(null);
  const currentRotation = useRef(0);
  const [isInView, setIsInView] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // Atualiza o estado se a janela for redimensionada
  useEffect(() => {
    const updateResolution = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", updateResolution);
    return () => window.removeEventListener("resize", updateResolution);
  }, []);

  const adjustModelScale = (model) => {
    const screenWidth = window.innerWidth;
    let scale;
    if (screenWidth <= 350) {
      scale = 0.3;
    } else if (screenWidth <= 475) {
      scale = 0.4;
    } else if (screenWidth <= 560) {
      scale = 0.5;
    } else if (screenWidth <= 768) {
      scale = 0.5;
    } else if (screenWidth <= 780) {
      scale = 0.5;
    } else if (screenWidth <= 860) {
      scale = 0.6;
    } else if (screenWidth <= 960) {
      scale = 0.65;
    } else if (screenWidth <= 1024) {
      scale = 0.7;
    } else if (screenWidth <= 1100) {
      scale = 0.75;
    } else if (screenWidth <= 1280) {
      scale = 0.8;
    } else if (screenWidth <= 1450) {
      scale = 0.75;
    } else if (screenWidth <= 1600) {
      scale = 0.8;
    } else {
      scale = 0.9;
    }
    model.scale.set(scale, scale, scale);
  };

  useEffect(() => {
    // Verifica se é desktop antes de executar o Three.js
    if (!isDesktop) return;

    let model, modelGroup;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const mount = mountRef.current;
    if (mount) {
      mount.appendChild(renderer.domElement);
    }

    scene.background = null;
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 2);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 2);
    hemisphereLight.position.set(0, 5000, 0);
    scene.add(hemisphereLight);

    const loader = new GLTFLoader();
    const loadModel = (index) => {
      if (model) {
        scene.remove(modelGroup);
      }

      loader.load(
        models[index],
        (gltf) => {
          model = gltf.scene;
          adjustModelScale(model);

          model.traverse((node) => {
            if (node.isMesh) {
              node.material = new THREE.MeshPhysicalMaterial({
                color: node.material.color || new THREE.Color(0xffffff),
                roughness: 0.00000000001,
                transmission: 1,
                clearcoat: 10,
                clearcoatRoughness: 10,
                reflectivity: 1,
                envMapIntensity: 10,
              });
              node.material.needsUpdate = true;
            }
          });

          const box = new THREE.Box3().setFromObject(model);
          const center = new THREE.Vector3();
          box.getCenter(center);
          model.position.sub(center);

          modelGroup = new THREE.Group();
          modelGroup.add(model);
          modelGroup.rotation.y = currentRotation.current;
          modelGroupRef.current = modelGroup;
          scene.add(modelGroup);
        },
        undefined,
        (error) => {
          console.error("Erro ao carregar o modelo:", error);
        }
      );
    };

    loadModel(currentIndex);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 1;
    controls.enableZoom = false;
    controls.enableRotate = true;
    controls.enablePan = false;
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI;
    controls.screenSpacePanning = true;

    controls.addEventListener("start", () => {
      isDraggingRef.current = true;
    });

    controls.addEventListener("end", () => {
      isDraggingRef.current = false;
    });

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      if (modelGroupRef.current) {
        adjustModelScale(modelGroupRef.current);
      }
    };

    window.addEventListener("resize", handleResize);

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        onNavigate("next");
      } else if (e.key === "ArrowLeft") {
        onNavigate("prev");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (mount) {
      observer.observe(mount);
    }

    const animate = () => {
      if (isInView) {
        requestAnimationFrame(animate);

        if (modelGroup && !isDraggingRef.current) {
          modelGroup.rotation.y += rotationSpeed.current;
          currentRotation.current = modelGroup.rotation.y;
        }

        controls.update();
        renderer.render(scene, camera);
      }
    };

    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      if (mount) {
        mount.removeChild(renderer.domElement);
      }
      if (modelGroup) {
        scene.remove(modelGroup);
      }
      controls.dispose();
    };
  }, [currentIndex, models, onNavigate, isDesktop, isInView]);

  if (!isDesktop) {
    return null; // Não renderiza nada se não for desktop
  }

  return <div ref={mountRef} className="model-viewer" style={{ width: "100%", height: "100%" }} />;
}

export default ThreeDViewer;
