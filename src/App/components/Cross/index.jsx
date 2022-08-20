import { useRef } from 'react';
import { useGLTF } from "@react-three/drei";

import crossGlb from "./assets/cross.glb";

const Cross = () => {
  const group = useRef();
  const { nodes, materials } = useGLTF(crossGlb);

  return (
    <group ref={group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cross.geometry}
        material={materials.Stone}
        position={[-3.18, 0.39, 2.46]}
        rotation={[0.04, -1.14, 0.03]}
        scale={[0.37, 0.37, 0.37]}
      />
    </group>
  );
};

export default Cross;
