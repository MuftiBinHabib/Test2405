// Import React and related hooks
import React, { useState, useRef } from 'react';
// Import Canvas (3D scene container) from react-three-fiber
import { Canvas, useFrame } from '@react-three/fiber';
// Import OrbitControls (to move/rotate the view) and Sphere (for the dice pips)
import { OrbitControls, Sphere } from '@react-three/drei';

// Define the main component
const ThreeD = () => {
  const [rolling, setRolling] = useState(false);  // Flag to track if the dice is rolling
  const [result, setResult] = useState(null);     // Store the result (number on top face)
  const diceRef = useRef();                       // Reference to the dice mesh

  // Function to roll the dice (trigger animation and set random result)
  const rollDice = () => {
    setRolling(true);
    setResult(null);

    // Start the rolling animation
    setTimeout(() => {
      setRolling(false); // Stop the animation after 2 seconds
      const randomFace = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
      setResult(randomFace); // Update the result
    }, 2000);
  };

  return (
    <>
      <Canvas style={{ height: '100vh' }}>
        {/* Soft ambient light to illuminate the scene */}
        <ambientLight intensity={0.5} />
        {/* Point light (like a bulb) to give shading and depth */}
        <pointLight position={[10, 10, 10]} />
        {/* Controls to allow mouse drag to orbit around the dice */}
        <OrbitControls />
        {/* Render the Dice component, passing rolling state to animate */}
        <Dice ref={diceRef} rolling={rolling} />
      </Canvas>

      {/* Button to trigger dice roll */}
      <button
        onClick={rollDice}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '10px',
          fontSize: '16px',
        }}
      >
        Roll Dice
      </button>

      {/* Display the result when dice stops rolling */}
      {result && (
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          Result: {result}
        </div>
      )}
    </>
  );
};

// Define the Dice component (the cube + pips)
const Dice = React.forwardRef(({ rolling }, ref) => {
  // Random rotations for animation
  const randomRotation = [
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
  ];

  // Helper function: renders a pip (dot) at a specific position
  const pip = (pos) => (
    <Sphere position={pos} args={[0.08, 16, 16]}>
      {/* Material: black color for the pip */}
      <meshStandardMaterial color="black" />
    </Sphere>
  );

  // Animated rotation of the dice
  useFrame(() => {
    if (rolling) {
      ref.current.rotation.x += 0.05;
      ref.current.rotation.y += 0.05;
      ref.current.rotation.z += 0.05;
    }
  });

  return (
    <mesh ref={ref}>
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
});

// Export the main component
export default ThreeD;
