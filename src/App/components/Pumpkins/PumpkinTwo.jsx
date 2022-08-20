import { useRef, useState } from 'react';
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, config } from '@react-spring/three';

import pumpkinTwoGlb from "./assets/pumpkin_2.glb";

const PumpkinTwo = () => {
  const group = useRef();
  const { nodes, materials } = useGLTF(pumpkinTwoGlb);
  const [toggle, setToggle] = useState(false);

  // Use React Spring to slightly tilt (rotate) the pumpkin to the front
  const { rotation } = useSpring({
    rotation: toggle ? [0.25, -0.45, 0] : [0, -0.45, 0],
    config: config.wobbly
  });

  return (
    <group ref={group} dispose={null}>
      <animated.mesh
        onClick={() => setToggle(!toggle)}
        castShadow
        receiveShadow
        geometry={nodes.Pumpkin001.geometry}
        material={materials.Pumpkin}
        position={[1.82, 0.55, 3.73]}
        rotation={rotation}
        scale={[0.54, 0.54, 0.54]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
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

export default PumpkinTwo;
