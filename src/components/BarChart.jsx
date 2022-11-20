import { OrbitControls, Text } from "@react-three/drei";
import { data, tests } from "../assets/dummyData";

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
      </group>
    </>
  );
};

export default BarChart;

const Bars = () => {
  const fontProps = {
    fontSize: 1,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": true,
  };

  return (
    <>
      <Ping />
      <Text
        color="black"
        position={[-8, 0, 0]}
        rotation-x={[-Math.PI * 0.5]}
        {...fontProps}
      >
        Ping
      </Text>
      <Text
        color="black"
        position={[-8, 0, 3]}
        rotation-x={[-Math.PI * 0.5]}
        {...fontProps}
      >
        DNS
      </Text>
      <Text
        color="black"
        position={[-10, 0, 6]}
        rotation-x={[-Math.PI * 0.5]}
        {...fontProps}
      >
        port_connection
      </Text>
      <Text
        color="black"
        position={[-10, 0, 9]}
        rotation-x={[-Math.PI * 0.5]}
        {...fontProps}
      >
        network_mode
      </Text>
      <Text
        color="black"
        position={[-10, 0, 12]}
        rotation-x={[-Math.PI * 0.5]}
        {...fontProps}
      >
        connectivity_wifi
      </Text>

      <Text
        color="black"
        position={[-6, 0, 15]}
        rotation-x={[-Math.PI * 0.5]}
        rotation-z={[-Math.PI * 0.5]}
        {...fontProps}
      >
        7590
      </Text>
      <Text
        color="black"
        position={[-4.5, 0, 15]}
        rotation-x={[-Math.PI * 0.5]}
        rotation-z={[-Math.PI * 0.5]}
        {...fontProps}
      >
        6690
      </Text>
      <Text
        color="black"
        position={[-3, 0, 15]}
        rotation-x={[-Math.PI * 0.5]}
        rotation-z={[-Math.PI * 0.5]}
        {...fontProps}
      >
        6660
      </Text>
      <Text
        color="black"
        position={[-1.5, 0, 15]}
        rotation-x={[-Math.PI * 0.5]}
        rotation-z={[-Math.PI * 0.5]}
        {...fontProps}
      >
        5590
      </Text>
      <Text
        color="black"
        position={[0, 0, 15]}
        rotation-x={[-Math.PI * 0.5]}
        rotation-z={[-Math.PI * 0.5]}
        {...fontProps}
      >
        4060
      </Text>
      <Text
        color="black"
        position={[1.5, 0, 15]}
        rotation-x={[-Math.PI * 0.5]}
        rotation-z={[-Math.PI * 0.5]}
        {...fontProps}
      >
        6591
      </Text>
      <Text
        color="black"
        position={[3, 0, 15]}
        rotation-x={[-Math.PI * 0.5]}
        rotation-z={[-Math.PI * 0.5]}
        {...fontProps}
      >
        5530
      </Text>
      <Text
        color="black"
        position={[4.5, 0, 15]}
        rotation-x={[-Math.PI * 0.5]}
        rotation-z={[-Math.PI * 0.5]}
        {...fontProps}
      >
        6850
      </Text>
      <Text
        color="black"
        position={[6, 0, 15]}
        rotation-x={[-Math.PI * 0.5]}
        rotation-z={[-Math.PI * 0.5]}
        {...fontProps}
      >
        6890
      </Text>
      <Text
        color="black"
        position={[7.5, 0, 15]}
        rotation-x={[-Math.PI * 0.5]}
        rotation-z={[-Math.PI * 0.5]}
        {...fontProps}
      >
        6820
      </Text>
    </>
  );
};

const Ping = () => {

  let arr = [];
  for (let index = 0; index < tests.length; index++) {
    let hws = tests[index].hardware;
    let coordinates = 0;

    const gap = 0.5;
    let coordinatesDepth = 0;
    coordinatesDepth += index 

    {
      hws.map((d) => {
        let p = hws.length + hws.length * gap;
        coordinates += 1 + gap;
        let color = "gray"
        if(d.durationAVG < 2) color = "green"
        if(d.durationAVG >= 2 && d.durationAVG < 7) color = "lightgreen"
        if(d.durationAVG <= 10 && d.durationAVG >= 7) color = "gold"
        if(d.durationAVG > 10 && d.durationAVG <= 15) color = "#f55045"
        if(d.durationAVG > 15 && d.durationAVG <= 20) color = "#f23f33"
        if(d.durationAVG > 20 ) color = "#bf1106"

        arr.push(
          <mesh
            key={d.hwID+index}
            position={[
              -p / 2 + coordinates,
              d.durationAVG / 2,
              (index) *3,
            ]}
            onClick={() => console.log(d.name)}
          >
            <boxGeometry args={[1, d.durationAVG, 1]} />
            <meshStandardMaterial color={color} />
            <mesh />
          </mesh>
        );
      });
    }
  }
  return <>{arr}</>;
};

