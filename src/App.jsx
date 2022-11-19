import { Canvas } from "@react-three/fiber";
import { data } from "./assets/dummyData";
import BarChart from "./components/BarChart";

function App() {
  return (
    <>
      <h3 className="App">Chart App</h3>
      <p>data imported:</p>
      {data.map((d) => {
        return (
          <div key={d.id} style={{ display: "inline-block", margin: "0.2rem" }}>
            {d.name}
            <ul
              style={{
                listStyle: "none",
                textAlign: "center",
                margin: "0.3rem",
              }}
            >
              <li>h: {d.height}</li>
              <li>w: {d.width}</li>
              <li>d: {d.depth}</li>
            </ul>
          </div>
        );
      })}

      <div style={{margin: "1rem", padding: "0.5rem",border: "1px solid", borderRadius: "15px"}}>
        <Canvas
          style={{ width: "100%", height: "50vh", background: "#f5f5f5" }}
          camera={{
            // zoom: -3,
            position: [-2, 9, -10],
          }}
          gl={{
            antialias: true,
          }}
        >
          <BarChart />
        </Canvas>
      </div>
    </>
  );
}

export default App;
