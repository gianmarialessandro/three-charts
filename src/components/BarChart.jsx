import { OrbitControls } from "@react-three/drei";
import { data } from "../assets/dummyData";
import Background from "./Background";

const BarChart = () => {
  const gap = 1;
  let sceneWidth = 0;
  let sceneDepth = 0;
  let sceneHeight = 0;

  for (let i = 0; i < data.length; i++) {
    sceneWidth += data[i].width + gap;
    if (data[i].height >= sceneHeight) sceneHeight = data[i].height;
    if (data[i].depth >= sceneDepth) sceneDepth = data[i].depth;
  }

  let dimensions = {
    width: sceneWidth,
    depth: sceneDepth,
    height: sceneHeight,
  };

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.3} />
      <directionalLight intensity={0.3} position={[-1, 1, -7]} />
      <directionalLight intensity={0.3} position={[-10, 1, 0]} />
      <group position={[sceneWidth / 2, sceneHeight / 2, sceneDepth]}>
        <Bars />
        <Background dimensions={dimensions} />
      </group>
    </>
  );
};

export default BarChart;

const Bars = () => {
  const gap = 0.5;
  let coordinates = 0;

  return (
    <>
      {data.map((d) => {
        coordinates += d.width + gap;
        return (
          <mesh key={d.id} position={[-coordinates, d.height / 2, 0]}>
            <boxGeometry args={[d.width, d.height, d.depth]} />
            <meshStandardMaterial color={`${d.color}`} />
            <mesh color={"red"} />
          </mesh>
        );
      })}
    </>
  );
};

