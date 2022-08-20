import { useRef } from 'react';
import { useGLTF } from "@react-three/drei";

import treeGlb from "./assets/tree.glb";

const Tree = () => {
  const group = useRef();
  const { nodes, materials } = useGLTF(treeGlb);

  return (
    <group ref={group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree.geometry}
        material={materials.Tree}
        position={[-2.64, 0.68, -2.98]}
        rotation={[Math.PI / 2, 0, -0.47]}
        scale={[0.37, 0.37, 0.37]}
      />
    </group>
  );
};

export default Tree;
