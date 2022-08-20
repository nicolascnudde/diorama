import Cross from '../Cross';
import Floor from '../Floor';
import Ghosts from '../Ghosts';
// import { GhostOne, GhostTwo } from '../Ghosts';
import Mausoleum from '../Mausoleum';
import Moon from '../Moon';
import { PumpkinOne, PumpkinTwo, PumpkinThree } from '../Pumpkins';
import Rocks from '../Rocks';
import Tombstones from '../Tombstones';
import Text from '../Text';
import Tree from '../Tree';

const HalloweenScene = () => (
  <>
    <Cross />
    <Floor />
    {/* <GhostOne />
    <GhostTwo /> */}
    <Ghosts />
    <Mausoleum />
    <Moon />
    <PumpkinOne />
    <PumpkinTwo />
    <PumpkinThree />
    <Rocks />
    <Tombstones />
    <Text />
    <Tree />
  </>
);

export default HalloweenScene;
