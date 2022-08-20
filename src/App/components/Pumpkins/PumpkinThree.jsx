import { useRef, useState } from 'react';
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, config } from '@react-spring/three';

import pumpkinThreeGlb from "./assets/pumpkin_3.glb";

const PumpkinThree = () => {
  const group = useRef();
  const { nodes, materials } = useGLTF(pumpkinThreeGlb);
  const [toggle, setToggle] = useState(false);

  // Use React Spring to slightly tilt (rotate) the pumpkin to the back
  const { rotation } = useSpring({
    rotation: toggle ? [-0.25, 0.11, 0] : [0, 0.11, 0],
    config: config.wobbly
  });

  return (
    <group ref={group} dispose={null}>
      <animated.mesh
        onClick={() => setToggle(!toggle)}
        castShadow
        receiveShadow
        geometry={nodes.Pumpkin002.geometry}
        material={materials.Pumpkin}
        position={[-0.58, 0.68, 1.6]}
        rotation={rotation}
        scale={[0.52, 0.52, 0.52]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
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

export default PumpkinThree;
