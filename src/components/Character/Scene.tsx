import { useEffect, useRef } from "react";
import * as THREE from "three";

import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";

const DESKTOP_BREAKPOINT = 1024;

const VIEW_CONFIG = {
  desktop: {
    camera: {
      x: 0,
      y: 13.1,
      z: 29.5,
      zoom: 0.95,
    },
    character: {
      x: -2.0,
      y: 0.1,
      z: 0,
    },
  },
  mobile: {
    camera: {
      x: 0,
      y: 13.1,
      z: 24.7,
      zoom: 1.05,
    },
    character: {
      x: 0.35,
      y: 0.45,
      z: 0,
    },
  },
};

const getViewMode = () =>
  window.innerWidth > DESKTOP_BREAKPOINT ? "desktop" : "mobile";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());
  const { setLoading } = useLoading();

  useEffect(() => {
    if (!canvasDiv.current) return;

    const rect = canvasDiv.current.getBoundingClientRect();
    const container = {
      width: rect.width,
      height: rect.height,
    };

    const aspect = container.width / container.height;
    const scene = sceneRef.current;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(container.width, container.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;

    canvasDiv.current.appendChild(renderer.domElement);

    const viewMode = getViewMode();
    const initialView = VIEW_CONFIG[viewMode];

    const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
    camera.position.set(
      initialView.camera.x,
      initialView.camera.y,
      initialView.camera.z
    );
    camera.zoom = initialView.camera.zoom;
    camera.updateProjectionMatrix();

    let headBone: THREE.Object3D | null = null;
    let screenLight: any | null = null;
    let mixer: THREE.AnimationMixer | undefined;
    let loadedCharacter: THREE.Object3D | null = null;

    const clock = new THREE.Clock();
    const light = setLighting(scene);

    const progress = setProgress((value) => setLoading(value));
    const { loadCharacter } = setCharacter(renderer, scene, camera);

    const resizeHandler = () => {
      if (loadedCharacter) {
        handleResize(renderer, camera, canvasDiv, loadedCharacter);
      }
    };

    loadCharacter().then((gltf) => {
      if (!gltf) return;

      const animations = setAnimations(gltf);

      if (hoverDivRef.current) {
        animations.hover(gltf, hoverDivRef.current);
      }

      mixer = animations.mixer;

      const character = gltf.scene;
      loadedCharacter = character;

      const currentView = VIEW_CONFIG[getViewMode()];
      character.position.set(
        currentView.character.x,
        currentView.character.y,
        currentView.character.z
      );

      scene.add(character);

      headBone = character.getObjectByName("spine006") || null;
      screenLight = character.getObjectByName("screenlight") || null;

      progress.loaded().then(() => {
        setTimeout(() => {
          light.turnOnLights();
          animations.startIntro();
        }, 2500);
      });

      window.addEventListener("resize", resizeHandler);
    });

    let mouse = { x: 0, y: 0 };
    let interpolation = { x: 0.1, y: 0.2 };

    const onMouseMove = (event: MouseEvent) => {
      handleMouseMove(event, (x, y) => {
        mouse = { x, y };
      });
    };

    let debounce: number | undefined;

    const onTouchStart = (event: TouchEvent) => {
      const element = event.target as HTMLElement;

      debounce = window.setTimeout(() => {
        element?.addEventListener("touchmove", (e: TouchEvent) =>
          handleTouchMove(e, (x, y) => {
            mouse = { x, y };
          })
        );
      }, 200);
    };

    const onTouchEnd = () => {
      handleTouchEnd((x, y, ix, iy) => {
        mouse = { x, y };
        interpolation = { x: ix, y: iy };
      });
    };

    document.addEventListener("mousemove", onMouseMove);

    const landingDiv = document.getElementById("landingDiv");
    if (landingDiv) {
      landingDiv.addEventListener("touchstart", onTouchStart);
      landingDiv.addEventListener("touchend", onTouchEnd);
    }

    const animate = () => {
      requestAnimationFrame(animate);

      if (headBone) {
        handleHeadRotation(
          headBone,
          mouse.x,
          mouse.y,
          interpolation.x,
          interpolation.y,
          THREE.MathUtils.lerp
        );

        light.setPointLight(screenLight);
      }

      const delta = clock.getDelta();

      if (mixer) {
        mixer.update(delta);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      clearTimeout(debounce);
      scene.clear();
      renderer.dispose();

      window.removeEventListener("resize", resizeHandler);
      document.removeEventListener("mousemove", onMouseMove);

      if (
        canvasDiv.current &&
        renderer.domElement.parentNode === canvasDiv.current
      ) {
        canvasDiv.current.removeChild(renderer.domElement);
      }

      if (landingDiv) {
        landingDiv.removeEventListener("touchstart", onTouchStart);
        landingDiv.removeEventListener("touchend", onTouchEnd);
      }
    };
  }, [setLoading]);

  return (
    <div className="character-container">
      <div className="character-model" ref={canvasDiv}>
        <div className="character-rim"></div>
        <div className="character-hover" ref={hoverDivRef}></div>
      </div>
    </div>
  );
};

export default Scene;