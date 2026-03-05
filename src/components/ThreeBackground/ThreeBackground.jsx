import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, Torus, Octahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import styles from './ThreeBackground.module.scss';

// ── Individual floating crystal / shape ──────────────────────────────────────
const FloatingShape = ({ position, color, type, speed = 1, distort = 0.3, scale = 1 }) => {
  const mesh = useRef();

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.12 * speed;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.18 * speed;
  });

  const material = (
    <MeshDistortMaterial
      color={color}
      emissive={color}
      emissiveIntensity={0.15}
      distort={distort}
      speed={2}
      opacity={0.18}
      transparent
      roughness={0.1}
      metalness={0.8}
    />
  );

  return (
    <Float speed={speed * 1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={mesh} position={position} scale={scale}>
        {type === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
        {type === 'torus' && <torusGeometry args={[1, 0.35, 16, 60]} />}
        {type === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
        {type === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
        {material}
      </mesh>
    </Float>
  );
};

// ── Particle field ────────────────────────────────────────────────────────────
const Particles = ({ count = 180 }) => {
  const points = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const palette = [
      new THREE.Color('#3A86FF'),
      new THREE.Color('#00F5A0'),
      new THREE.Color('#FFD700'),
      new THREE.Color('#FF6B6B'),
      new THREE.Color('#00D4FF'),
      new THREE.Color('#7B2CBF'),
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 28;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3]     = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.018;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.009) * 0.06;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
        <bufferAttribute attach="attributes-color"    array={colors}    count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.65} sizeAttenuation />
    </points>
  );
};

// ── Animated ring ─────────────────────────────────────────────────────────────
const Ring = ({ position, color, radius = 3.5, speed = 0.3, tilt = 0 }) => {
  const mesh = useRef();

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.z = state.clock.elapsedTime * speed;
    mesh.current.rotation.x = tilt + Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
  });

  return (
    <mesh ref={mesh} position={position}>
      <torusGeometry args={[radius, 0.012, 8, 200]} />
      <meshBasicMaterial color={color} transparent opacity={0.12} />
    </mesh>
  );
};

// ── Scene contents ─────────────────────────────────────────────────────────────
const Scene = () => {
  const { viewport } = useThree();
  const w = viewport.width;

  return (
    <>
      {/* Ambient + directional lights */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 8, 5]} intensity={0.6} color="#3A86FF" />
      <directionalLight position={[-5, -4, 3]} intensity={0.4} color="#00F5A0" />
      <pointLight position={[0, 4, 2]} intensity={0.8} color="#7B2CBF" distance={20} />

      {/* Particle field — spans the entire scene */}
      <Particles count={220} />

      {/* Floating 3D geometry objects */}
      <FloatingShape position={[-w * 0.32, 1.6, -4]}  color="#3A86FF" type="sphere"      speed={0.7}  distort={0.4}  scale={1.2} />
      <FloatingShape position={[ w * 0.3,  -1.2, -5]} color="#00F5A0" type="octahedron"  speed={0.9}  distort={0.2}  scale={0.9} />
      <FloatingShape position={[-w * 0.15, -2.2, -3]} color="#FFD700" type="icosahedron" speed={1.1}  distort={0.15} scale={0.7} />
      <FloatingShape position={[ w * 0.15, 2.4,  -6]} color="#FF6B6B" type="torus"       speed={0.6}  distort={0.3}  scale={1.0} />
      <FloatingShape position={[ w * 0.42, 0.2,  -7]} color="#00D4FF" type="sphere"      speed={0.5}  distort={0.5}  scale={1.5} />
      <FloatingShape position={[-w * 0.4, -0.5,  -8]} color="#7B2CBF" type="octahedron"  speed={0.8}  distort={0.25} scale={1.1} />
      <FloatingShape position={[ 0,        3.2,  -9]} color="#FF9F1C" type="icosahedron" speed={0.65} distort={0.18} scale={0.8} />

      {/* Orbital rings */}
      <Ring position={[-5, 1,  -10]} color="#3A86FF" radius={4.5} speed={0.22} tilt={0.5} />
      <Ring position={[ 6, -1, -12]} color="#00F5A0" radius={5.2} speed={0.18} tilt={0.8} />
      <Ring position={[ 0,  0, -14]} color="#7B2CBF" radius={7}   speed={0.12} tilt={0.3} />
    </>
  );
};

// ── Exported component ─────────────────────────────────────────────────────────
const ThreeBackground = () => (
  <div className={styles.wrapper}>
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  </div>
);

export default ThreeBackground;
