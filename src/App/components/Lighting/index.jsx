import { MathUtils } from "three";

const Lighting = () => {
  return (
    <>
      <ambientLight color={0xfff5d1} intensity={0.1} />
      <spotLight
        angle={MathUtils.degToRad(30)}
        castShadow={true}
        color={0xfff7ea}
        intensity={1.5}
        penumbra={1}
        position={[0, 7.5, -5]}
      />
    </>
  );
};

export default Lighting;
