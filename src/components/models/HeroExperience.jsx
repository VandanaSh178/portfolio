// src/components/models/HeroExperience.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { SelectiveBloom } from "@react-three/postprocessing";

const HeroModel = () => {
  const { scene } = useGLTF("/models/your-model.glb"); // replace with your model path
  return <primitive object={scene} scale={1} position={[0, -1, 0]} />;
};

const HeroExperience = () => {
  return (
    <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
      {/* Lights */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 5, -5]} intensity={0.5} />

      {/* 3D Model */}
      <HeroModel />

      {/* Bloom effect */}
      <SelectiveBloom luminanceThreshold={0.2} luminanceSmoothing={0.1} intensity={1.5} />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default HeroExperience;
