import { DoubleSide } from "three";
import { Text, useMatcapTexture } from "@react-three/drei";

import MatCap from "../../lib/MatCap";
import FontFamily from "../../lib/FontFamily";

const HappyHalloween = () => {
  const [matcap] = useMatcapTexture(MatCap.id.ORANGE, MatCap.size.XL);

  return (
    <>
      <Text
        fontSize={2}
        font={FontFamily.Mochiy_Pop_One}
        position={[0, 9, -4.5]}
      >
        Happy Halloween!
        <meshMatcapMaterial matcap={matcap} side={DoubleSide} />
      </Text>
    </>
  );
};

export default HappyHalloween;
