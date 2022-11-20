import { Canvas } from "@react-three/fiber";
import { data } from "./assets/dummyData";
import BarChart from "./components/BarChart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h3 >Chart App</h3>
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

      <div style={{margin: "1rem",border: "1px solid", borderRadius: "15px"}}>
        <Canvas
          style={{ width: "100%", height: "50vh", background: "#f5f5f5", borderRadius: "15px" }}
          camera={{
            // zoom: -3,
            position: [0, 19, 16],
          }}
          gl={{
            antialias: true,
          }}
        >
          <BarChart />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
