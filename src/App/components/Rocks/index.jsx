import { useRef } from 'react';
import { useGLTF } from "@react-three/drei";

import rocksGlb from "./assets/rocks.glb";

const Rocks = () => {
  const group = useRef();
  const { nodes, materials } = useGLTF(rocksGlb);

  return (
    <group ref={group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock.geometry}
        material={materials["Rock"]}
        position={[1.52, 0.74, 0.91]}
        scale={[0.59, 0.59, 0.59]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock001.geometry}
        material={materials["Rock"]}
        position={[2.41, 0.81, 0.29]}
        rotation={[Math.PI, -0.8, Math.PI]}
        scale={[0.59, 0.59, 0.59]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock002.geometry}
        material={materials["Rock"]}
        position={[1.26, 0.74, 0.09]}
        rotation={[1.03, 0.32, -0.26]}
        scale={[0.59, 0.59, 0.59]}
      />
    </group>
  );
};

export default Rocks;

