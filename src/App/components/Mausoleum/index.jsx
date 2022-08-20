import { useRef } from 'react';
import { useGLTF } from "@react-three/drei";

import mausoleumGlb from "./assets/mausoleum.glb";

const Mausoleum = () => {
  const group = useRef();
  const { nodes, materials } = useGLTF(mausoleumGlb);

  return (
    <group ref={group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mausoleum.geometry}
        material={materials.Stone}
        position={[3.08, 1.13, -2.32]}
        rotation={[3.02, -1.25, 3.1]}
        scale={[1.23, 1.23, 1.23]}>
      <pointLight
        castShadow={true}
        color={0x50ff83}
        intensity={15}
        distance={15}
        decay={15}
      />
      </mesh>
    </group>
  );
};

export default Mausoleum;
