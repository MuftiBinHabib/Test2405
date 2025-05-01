// Import React
import React from 'react';
// Import Canvas (3D scene container) from react-three-fiber
import { Canvas } from '@react-three/fiber';
// Import OrbitControls (to move/rotate the view) and Sphere (for the dice pips)
import { OrbitControls, Sphere } from '@react-three/drei';
// Import Three.js for manual line creation
import * as THREE from 'three';

// Define the main component
const ThreeD = () => {
  return (
    // Canvas creates the 3D scene; full height of the viewport
    <Canvas style={{ height: '100vh' }}>
      {/* Soft ambient light to illuminate the scene */}
      <ambientLight intensity={0.5} />
      {/* Point light (like a bulb) to give shading and depth */}
      <pointLight position={[10, 10, 10]} />
      {/* Controls to allow mouse drag to orbit around the dice */}
      <OrbitControls />
      {/* Add axis lines */}
      <AxisLines length={5} />
      {/* Render the Dice component */}
      <Dice />
    </Canvas>
  );
};

// AxisLines component to draw X, Y, Z lines
const AxisLines = ({ length = 5 }) => {
  return (
    <group>
      {/* X axis (Red) */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([-length, 0, 0, length, 0, 0])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="red" />
      </line>

      {/* Y axis (Green) */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([0, -length, 0, 0, length, 0])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="green" />
      </line>

      {/* Z axis (Blue) */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([0, 0, -length, 0, 0, length])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="blue" />
      </line>
    </group>
  );
};

// Define the Dice component (the cube + pips)
const Dice = () => {
  // Helper function: renders a pip (dot) at a specific position
  const pip = (pos) => (
    <Sphere position={pos} args={[0.08, 16, 16]}>
      {/* Material: black color for the pip */}
      <meshStandardMaterial color="black" />
    </Sphere>
  );

  return (
    <mesh>
      {/* The dice body: a cube with size 1x1x1 */}
      <boxGeometry args={[1, 1, 1]} />
      {/* Material: white color for the dice */}
      <meshStandardMaterial color="white" />

      {/* --- Face 1: Front side (z = +0.5) --- */}
      <group position={[0, 0, 0.51]}>
        {pip([0, 0, 0])}
      </group>

      {/* --- Face 6: Back side (z = -0.5) --- */}
      <group position={[0, 0, -0.51]}>
        {pip([-0.25, 0.25, 0])}
        {pip([0.25, 0.25, 0])}
        {pip([-0.25, 0, 0])}
        {pip([0.25, 0, 0])}
        {pip([-0.25, -0.25, 0])}
        {pip([0.25, -0.25, 0])}
      </group>

      {/* --- Face 2: Right side (x = +0.5) --- */}
      <group position={[0.51, 0, 0]}>
        {pip([0, 0.25, 0])}
        {pip([0, -0.25, 0])}
      </group>

      {/* --- Face 5: Left side (x = -0.5) --- */}
      <group position={[-0.51, 0, 0]}>
        {pip([0, 0, 0])}
        {pip([0, 0.25, -0.25])}
        {pip([0, 0.25, 0.25])}
        {pip([0, -0.25, 0.25])}
        {pip([0, -0.25, -0.25])}
      </group>

      {/* --- Face 3: Top side (y = +0.5) --- */}
      <group position={[0, 0.51, 0]}>
        {pip([0, 0, 0])}
        {pip([-0.25, 0, 0.25])}
        {pip([0.25, 0, -0.25])}
      </group>

      {/* --- Face 4: Bottom side (y = -0.5) --- */}
      <group position={[0, -0.51, 0]}>
        {pip([0.25, 0, -0.25])}
        {pip([-0.25, 0, -0.25])}
        {pip([-0.25, 0, 0.25])}
        {pip([0.25, 0, 0.25])}
      </group>
    </mesh>
  );
};

// Export the main component
export default ThreeD;
