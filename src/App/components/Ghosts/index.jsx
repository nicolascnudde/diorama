import { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from '@react-spring/three'

import ghostsGlb from './assets/ghosts.glb';

const Ghosts = () => {
  const group = useRef()
  const { nodes, materials } = useGLTF(ghostsGlb);
  const ghostOneRef = useRef();
  const ghostTwoRef = useRef();
  const [toggle, setToggle] = useState(false);

  // Use React Spring to make the ghost slightly bigger
  const { scale } = useSpring({
    scale: toggle ? [0.53, 0.53, 0.53] : [0.47, 0.47, 0.47],
    config: config.wobbly
  });

  useFrame(() => {
    ghostOneRef.current.rotation.y += 0.01
    ghostTwoRef.current.rotation.y += -0.01
  });

  return (
    <group ref={group} dispose={null}>
      <group ref={ghostOneRef} position={[-0.78, 4.14, -0.4]} rotation={[0, -0.19, 0]} scale={[0.47, 0.47, 0.47]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere.geometry}
          material={materials["White Glow"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_1.geometry}
          material={materials.Black}
        />
      </group>
      <animated.group ref={ghostTwoRef} onClick={() => setToggle(!toggle)} position={[3.75, 3.8, 0.9]} rotation={[0, -0.99, 0]} scale={scale}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere.geometry}
          material={materials["White Glow"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_1.geometry}
          material={materials.Black}
        />
      </animated.group>
    </group>
  )
}

export default Ghosts;

// import GhostOne from './GhostOne'
// import GhostTwo from './GhostTwo'

// export {
//   GhostOne,
//   GhostTwo,
// }
