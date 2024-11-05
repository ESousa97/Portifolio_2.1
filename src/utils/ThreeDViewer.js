import React, { useEffect, useRef } from "react";
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

  const adjustModelScale = (model) => {
    const screenWidth = window.innerWidth;
    let scale;
    
    if (screenWidth <= 350) {
      scale = 0.4; // Ajuste adicional para 350px ou menos
    } else if (screenWidth <= 475) {
      scale = 0.5; // Ajuste para 475px ou menos
    } else if (screenWidth <= 560) {
      scale = 0.5; // Ajuste para 560px ou menos
    } else if (screenWidth <= 768) {
      scale = 0.5; // Ajuste para 768px ou menos
    } else if (screenWidth <= 780) {
      scale = 0.5; // Ajuste para 780px ou menos
    } else if (screenWidth <= 860) {
      scale = 0.60; // Ajuste para 860px ou menos
    } else if (screenWidth <= 960) {
      scale = 0.65; // Ajuste para 960px ou menos
    } else if (screenWidth <= 1024) {
      scale = 0.70; // Ajuste para 1024px ou menos
    } else if (screenWidth <= 1100) {
      scale = 0.75; // Ajuste para 1100px ou menos
    } else if (screenWidth <= 1280) {
      scale = 0.80; // Ajuste para 1280px ou menos
    } else if (screenWidth <= 1450) {
      scale = 0.75; // Ajuste para 1450px ou menos
    } else if (screenWidth <= 1600) {
      scale = 0.8; // Ajuste para 1600px ou menos
    } else {
      scale = 0.9; // Escala padrão para resoluções maiores
    }
  
    model.scale.set(scale, scale, scale);
};

  useEffect(() => {
    let model, modelGroup;

    // Configuração da cena, câmera e renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Configura o renderizador com WebGL2 para MSAA (antisserrilhamento aprimorado)
    let renderer;
    if (window.WebGL2RenderingContext) {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio); // Melhorar qualidade em telas de alta densidade
      renderer.setSize(window.innerWidth, window.innerHeight);
    } else {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    const mount = mountRef.current;
    if (mount) {
      mount.appendChild(renderer.domElement);
    }

    // Configuração da iluminação
    scene.background = null;
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 2);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 2);
    hemisphereLight.position.set(0, 5000, 0);
    scene.add(hemisphereLight);

    // Função para carregar o modelo GLTF e ajustar o material
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

          // Ajusta o material para dar o efeito de superfície "molhada"
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

          // Centralizar o modelo no seu próprio eixo
          const box = new THREE.Box3().setFromObject(model);
          const center = new THREE.Vector3();
          box.getCenter(center);
          model.position.sub(center);

          // Cria um grupo para o modelo
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

    // Configuração dos controles OrbitControls
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

    const animate = () => {
      requestAnimationFrame(animate);

      if (modelGroup && !isDraggingRef.current) {
        modelGroup.rotation.y += rotationSpeed.current;
        currentRotation.current = modelGroup.rotation.y;
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
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
  }, [currentIndex, models, onNavigate]);

  return <div ref={mountRef} className="model-viewer" style={{ width: "100%", height: "100%" }} />;
}

export default ThreeDViewer;
