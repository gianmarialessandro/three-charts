import * as THREE from "three";

const Background = ({ dimensions }) => {
  return (
    <>
      <mesh
        position={[-dimensions.width / 2, 0, dimensions.depth / 2]}
        rotation-x={[-Math.PI * 0.5]}
      >
        <planeBufferGeometry
          args={[dimensions.width + 4, dimensions.depth + 3]}
        />
        <meshLambertMaterial color={"lightgray"} side={THREE.DoubleSide} />
      </mesh>
      <mesh
        position={[
          -dimensions.width / 2,
          (dimensions.height + 2) / 2,
          dimensions.depth + 1.5,
        ]}
      >
        <planeBufferGeometry
          args={[dimensions.width + 4, dimensions.height + 2]}
        />
        <meshLambertMaterial color={"lightgray"} side={THREE.DoubleSide} />
      </mesh>
      <mesh
        position={[2, (dimensions.height + 2) / 2, dimensions.depth / 2]}
        rotation-y={[-Math.PI * 0.5]}
      >
        <planeBufferGeometry
          args={[dimensions.depth + 3, dimensions.height + 2]}
        />
        <meshLambertMaterial color={"lightgray"} side={THREE.DoubleSide} />
      </mesh>
      <LineH dimensions={dimensions} />
      <LineD dimensions={dimensions} />
    </>
  );
};

export default Background;

function LineH(dimensions) {
  let height = Math.ceil(dimensions.dimensions.height) + 1;
  let width = Math.ceil(dimensions.dimensions.width);
  let depth = Math.ceil(dimensions.dimensions.depth);
  var arr = [];
  for (let i = 0; i <= height; i++) {
    arr.push(
      <mesh position={[-width / 2, i, depth + 1.47]} key={i}>
        <boxGeometry args={[width + 4, 0.03, 0.03]} />
        <meshBasicMaterial color="black" />
      </mesh>
    );
  }

  return <>{arr}</>;
}

function LineD(dimensions) {
  let height = dimensions.dimensions.height + 1;
  let depth = dimensions.dimensions.depth;
  var arr = [];
  for (let i = 0; i <= height; i++) {
    arr.push(
      <mesh
        position={[1.98, i, depth - 0.5]}
        rotation-y={[-Math.PI * 0.5]}
        key={i}
      >
        <boxGeometry args={[depth + 3, 0.03, 0.03]} />
        <meshBasicMaterial color="black" />
      </mesh>
    );
  }

  return <>{arr}</>;
}
