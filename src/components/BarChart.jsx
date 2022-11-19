import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { data } from "../assets/dummyData";

const BarChart = () => {
    console.log(data)
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.3} />
      <directionalLight intensity={0.3} position={[-1, 1, -7]} />
      <directionalLight intensity={0.3} position={[-10, 1, 0]} />
      <mesh position={[0, 5.01, 0]} >
        <boxGeometry args={[1, 10, 1]} />
        <meshStandardMaterial color={"red"} />
        <mesh color={"red"} />
      </mesh>
    </>
  );
};

export default BarChart;

const Background = () => {
  return (
    <>
      <mesh rotation-x={[-Math.PI * 0.5]} position={[0, 0, 0]}>
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial color={"pink"} side={THREE.DoubleSide} />
      </mesh>
      <mesh  position={[0, 5, 5]}>
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial color={"pink"} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation-y={[-Math.PI * 0.5]} position={[5, 5, 0]}>
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial color={"pink"} side={THREE.DoubleSide} />
      </mesh>

    </>
  );
};
