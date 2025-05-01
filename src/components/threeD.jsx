import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const RotatingCube = () => {
  return (
    <Canvas style={{ height: '100vh' }}>
      {/* Ambient and point lights to light up the cube */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* The cube */}
      <Cube />
    </Canvas>
  );
};

const Cube = () => {
  const meshRef = React.useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
};

export default RotatingCube;
