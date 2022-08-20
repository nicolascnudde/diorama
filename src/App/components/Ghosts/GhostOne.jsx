import { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";

import ghostOneGlb from "./assets/ghost_1.glb";
import { useEffect } from "react/cjs/react.development";
import { AnimationMixer } from "three";
import { useFrame } from "@react-three/fiber";

const GhostOne = () => {
  const { animations, scene } = useGLTF(ghostOneGlb, true);
  const animationRef = useRef();
  const mixer = useMemo(() => new AnimationMixer(), []);

  useEffect(() => {
    if (animationRef.current) {
      mixer.clipAction(animations[0], animationRef.current).play();
    }
  }, [animations, mixer]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return <primitive object={scene} ref={animationRef} />;
};

export default GhostOne;
