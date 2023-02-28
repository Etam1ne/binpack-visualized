import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box } from "./components/Box";

export function App() {
  return (
    <main>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.1}/>
        <spotLight 
          position={[10, 15, 10]}
          angle={0.3}
        />
        <Box />
      </Canvas>
    </main>
  );
}
