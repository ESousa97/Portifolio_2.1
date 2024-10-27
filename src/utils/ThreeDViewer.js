import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "../styles/Projects.css";

function ThreeDViewer({ currentIndex, models, onNavigate }) {
  const mountRef = useRef(null);
  const isDraggingRef = useRef(false);
  const rotationSpeed = useRef(0.002); // Velocidade de rotação contínua
  const modelGroupRef = useRef(null); // Referência para o grupo do modelo

  useEffect(() => {
    let model, modelGroup;

    // Configuração da cena, câmera e renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const mount = mountRef.current;
    if (mount) {
      mount.appendChild(renderer.domElement);
    }

    // Configuração da iluminação
    scene.background = null;
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 2);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    hemisphereLight.position.set(0, 1000, 0);
    scene.add(hemisphereLight);

    // Função para carregar o modelo GLTF
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

          // Centralizar o modelo no seu próprio eixo
          const box = new THREE.Box3().setFromObject(model);
          const center = new THREE.Vector3();
          box.getCenter(center);
          model.position.sub(center);

          // Cria um grupo para o modelo
          modelGroup = new THREE.Group();
          modelGroup.add(model);
          modelGroupRef.current = modelGroup;
          scene.add(modelGroup);
        },
        undefined,
        (error) => {
          console.error("Erro ao carregar o modelo:", error);
        }
      );
    };

    // Função para ajustar a escala do modelo com base no tamanho da tela
    const adjustModelScale = (model) => {
      const screenWidth = window.innerWidth;
      const scale = screenWidth < 768 ? 0.5 : screenWidth < 1024 ? 0.6 : 0.9;
      model.scale.set(scale, scale, scale);
    };

    // Carregar o modelo inicial
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

    // Eventos para detectar início e término do arrasto
    controls.addEventListener("start", () => {
      isDraggingRef.current = true;
    });

    controls.addEventListener("end", () => {
      isDraggingRef.current = false;
    });

    // Função para ajustar o tamanho da tela e a escala do modelo ao redimensionar
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      if (modelGroupRef.current) {
        adjustModelScale(modelGroupRef.current);
      }
    };

    window.addEventListener("resize", handleResize);

    // Função para controlar a navegação via teclado
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        onNavigate("next");
      } else if (e.key === "ArrowLeft") {
        onNavigate("prev");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Função de animação
    const animate = () => {
      requestAnimationFrame(animate);

      if (modelGroup && !isDraggingRef.current) {
        modelGroup.rotation.y += rotationSpeed.current;
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Limpar recursos ao desmontar o componente
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
