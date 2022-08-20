import { Suspense } from "react";
import { OrbitControls, Stats } from "@react-three/drei";
import { useControls } from "leva";

import Cross from './components/Cross';
import Floor from './components/Floor';
import Ghosts from './components/Ghosts';
// import { GhostOne, GhostTwo } from './components/Ghosts';
import HalloweenScene from './components/Halloween'
import HappyHalloween from './components/Text';
import Lighting from './components/Lighting';
import LightingGui from "./components/Lighting/indexGui";
import Mausoleum from './components/Mausoleum';
import Moon from './components/Moon';
import { PumpkinOne, PumpkinTwo, PumpkinThree } from './components/Pumpkins';
import Rocks from './components/Rocks';
import Tombstones from './components/Tombstones';
import Tree from './components/Tree';

// Array of the available components
const components = [
  "Cross",
  "Floor",
  // "Ghost 1",
  // "Ghost 2",
  "Ghosts",
  "Halloween Scene",
  "Happy Halloween",
  "Mausoleum",
  "Moon",
  "Pumpkin 1",
  "Pumpkin 2",
  "Pumpkin 3",
  "Rocks",
  "Tombstones",
  "Tree",
]

// Array of the available lighting
const lightings = [
  "None",
  "Default",
];

const Content = () => {
    const { showStats } = useControls("General", {
      showStats: {
        label: "Stats",
        value: false,
      },
    });
  
    // Controls for showing one or multiple helper(s) (axes, grid, lighting) and components
    // The Halloween Scene with all the available components is default
    // The default lighting is a soft ambient light and a spotlight coming from the moon component
    const {
      showAxesHelper,
      showGridHelper,
      useComponent,
      useLighting,
      useLightingGui,
    } = useControls("Helpers", {
      showAxesHelper: {
        label: "Axes Helper",
        value: false,
      },
      showGridHelper: {
        label: "Grid Helper",
        value: false,
      },
      useComponent: {
        label: "Component",
        options: components,
        value: "Halloween Scene",
      },
      useLighting: {
        label: "Lighting",
        options: lightings,
        value: "Default",
      },
      useLightingGui: {
        label: "Lighting GUI",
        value: false,
      }
    });

    // Function to show the chosen component
    function showComponent(name) {
      return useComponent === name;
    }

    // Function to show the chosen lighting
    function showLighting(name) {
      return useLighting === name;
    }

    return (
      <>
        <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
        {showAxesHelper && <axesHelper />}
        {showGridHelper && <gridHelper />}
        {showStats && <Stats />}

        {showLighting("Default") && !useLightingGui && <Lighting />}
        {showLighting("Default") && useLightingGui && <LightingGui />}

        <Suspense fallback={null}>
          {showComponent("Cross") && <Cross />}
          {showComponent("Floor") && <Floor />}
          {/* {showComponent("Ghost 1") && <GhostOne />}
          {showComponent("Ghost 2") && <GhostTwo />} */}
          {showComponent("Ghosts") && <Ghosts />}
          {showComponent("Halloween Scene") && <HalloweenScene />}
          {showComponent("Happy Halloween") && <HappyHalloween />}
          {showComponent("Mausoleum") && <Mausoleum />}
          {showComponent("Moon") && <Moon />}
          {showComponent("Pumpkin 1") && <PumpkinOne /> }
          {showComponent("Pumpkin 2") && <PumpkinTwo /> }
          {showComponent("Pumpkin 3") && <PumpkinThree />}
          {showComponent("Rocks") && <Rocks />}
          {showComponent("Tombstones") && <Tombstones />}
          {showComponent("Tree") && <Tree />}
        </Suspense>
      </>
    );
}

export default Content;
