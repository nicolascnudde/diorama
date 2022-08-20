import { useRef } from 'react';
import { useGLTF } from "@react-three/drei";

import tombstonesGlb from "./assets/tombstones.glb";

const Tombstones = () => {
  const group = useRef();
  const { nodes, materials } = useGLTF(tombstonesGlb);

  return (
    <group ref={group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tombstone.geometry}
        material={materials.Stone}
        position={[-1.43, 0.51, 0.32]}
        rotation={[0.2, -1.21, 0.23]}
        scale={[0.29, 0.37, 0.66]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tombstone001.geometry}
        material={materials.Stone}
        position={[3.41, 0.38, 3.14]}
        rotation={[-3.14, -1.13, 3.09]}
        scale={[0.29, 0.37, 0.66]}
      />
    </group>
  );
};

export default Tombstones;
