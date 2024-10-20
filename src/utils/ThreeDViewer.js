import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "../styles/Projects.css";

function ThreeDViewer({ currentIndex, models }) {
  const mountRef = useRef(null);
  const isDraggingRef = useRef(false);
  const shouldResetRef = useRef(false);
  const initialRotationY = useRef(0);
  const rotationSpeed = useRef(0.005); // Reduzir a velocidade para uma rotação mais suave
  const isResettingRef = useRef(false);
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

          // Definir a escala do modelo conforme necessário (ajustado pelo tamanho da tela)
          adjustModelScale(model);

          // Centralizar o modelo no seu próprio eixo
          const box = new THREE.Box3().setFromObject(model);
          const center = new THREE.Vector3();
          box.getCenter(center);
          model.position.sub(center);

          // Cria um grupo para o modelo
          modelGroup = new THREE.Group();
          modelGroup.add(model);
          modelGroupRef.current = modelGroup; // Armazenar referência
          scene.add(modelGroup);

          // Armazena a rotação inicial do modelo
          initialRotationY.current = modelGroup.rotation.y;
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

      if (screenWidth < 768) {
        model.scale.set(0.5, 0.5, 0.5); // Escala uniforme para telas pequenas
      } else if (screenWidth < 1024) {
        model.scale.set(0.6, 0.6, 0.6); // Escala uniforme para telas médias
      } else {
        model.scale.set(0.9, 0.9, 0.9); // Escala uniforme para telas grandes
      }
    };

    // Carregar o modelo inicial
    loadModel(currentIndex);

    // Configuração dos controles OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 1; // Aumentar o fator de amortecimento para reduzir o efeito "esticado"
    controls.enableZoom = false; // Desabilitar zoom para focar apenas em rotação
    controls.enableRotate = true;
    controls.enablePan = false;

    // Ajustes para permitir rotação livre em todos os eixos
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI;
    controls.minAzimuthAngle = -Infinity;
    controls.maxAzimuthAngle = Infinity;

    // Permitir que o controle use panning na tela
    controls.screenSpacePanning = true;

    // Eventos para detectar início e término do arrasto
    controls.addEventListener("start", () => {
      isDraggingRef.current = true;
      shouldResetRef.current = false;
    });

    controls.addEventListener("end", () => {
      isDraggingRef.current = false;
      shouldResetRef.current = true;
    });

    // Função para ajustar o tamanho da tela e a escala do modelo ao redimensionar
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      // Ajustar a escala do modelo ao redimensionar a tela
      if (modelGroupRef.current) {
        adjustModelScale(modelGroupRef.current);
      }
    };

    window.addEventListener("resize", handleResize);

    // Função de animação
    const animate = () => {
      requestAnimationFrame(animate);

      if (modelGroup) {
        if (!isDraggingRef.current && !isResettingRef.current) {
          modelGroup.rotation.y += rotationSpeed.current; // Rotação contínua
        }

        if (shouldResetRef.current && !isResettingRef.current) {
          isResettingRef.current = true;
        }

        if (isResettingRef.current) {
          const delta = (initialRotationY.current - modelGroup.rotation.y) * 0.05;
          modelGroup.rotation.y += delta;

          if (Math.abs(modelGroup.rotation.y - initialRotationY.current) < 0.01) {
            modelGroup.rotation.y = initialRotationY.current;
            isResettingRef.current = false;
            shouldResetRef.current = false;
          }
        }
      }

      controls.update(); // Atualiza os controles do OrbitControls
      renderer.render(scene, camera); // Renderiza a cena
    };

    animate();

    // Limpar recursos ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mount) {
        mount.removeChild(renderer.domElement);
      }
      if (modelGroup) {
        scene.remove(modelGroup);
      }
      controls.dispose();
    };
  }, [currentIndex, models]);

  return <div ref={mountRef} className="model-viewer" style={{ width: "100%", height: "100%" }} />;
}

export default ThreeDViewer;
