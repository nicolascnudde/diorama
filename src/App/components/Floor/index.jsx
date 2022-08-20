import { useRef } from 'react';
import { useGLTF } from "@react-three/drei";

import floorGlb from "./assets/floor.glb";

const Floor = () => {
  const group = useRef();
  const { nodes, materials } = useGLTF(floorGlb);

  return (
    <group ref={group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.Dark}
        position={[0.06, 0, 0]}
        scale={[5.28, 7.9, 5.28]}
      />
    </group>
  );
};

export default Floor;
