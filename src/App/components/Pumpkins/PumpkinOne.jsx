import { useRef, useState } from 'react';
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, config } from '@react-spring/three';

import pumpkinsGlb from "./assets/pumpkin_1.glb";

const PumpkinOne = () => {
  const group = useRef();
  const { nodes, materials } = useGLTF(pumpkinsGlb);
  const [toggle, setToggle] = useState(false);

  // Use React Spring to slightly tilt (rotate) the pumpkin to the left
  const { rotation } = useSpring({
    rotation: toggle ? [0, 0.38, 0.25] : [0, 0.38, 0],
    config: config.wobbly
  });

  return (
    <group ref={group} dispose={null}>
      <animated.mesh
        onClick={() => setToggle(!toggle)}
        castShadow
        receiveShadow
        geometry={nodes.Pumpkin.geometry}
        material={materials.Pumpkin}
        position={[-2.25, 0.48, 3.7]}
        rotation={rotation}
        scale={[0.46, 0.46, 0.46]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.Stem}
          position={[0, 1.34, 0]}
          scale={[0.13, 0.13, 0.13]}
        />
        <pointLight
          castShadow={true}
          color={0xffc300}
          intensity={5}
          distance={3}
          decay={3}
        />
      </animated.mesh>
    </group>
  )
}

export default PumpkinOne;
