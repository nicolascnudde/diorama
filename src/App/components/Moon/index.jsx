import { useRef, useState } from 'react';
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, config } from '@react-spring/three'

import moonGlb from "./assets/moon.glb";

const Moon = () => {
  const group = useRef();
  const { nodes, materials } = useGLTF(moonGlb);
  const [toggle, setToggle] = useState(false);

  // Use React Spring to toggle between a smaller and bigger moon
  const { scale } = useSpring({
    scale: toggle ? [8, 1.35, 8] : [4, 1.35, 4],
    config: config.wobbly
  });

  return (
    <group ref={group} dispose={null}>
      <animated.mesh onClick={() => setToggle(!toggle)}
        castShadow
        receiveShadow
        geometry={nodes.Moon.geometry}
        material={materials.Light}
        position={[0, 7.5, -6.62]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={scale}
      />
    </group>
  );
};

export default Moon;
