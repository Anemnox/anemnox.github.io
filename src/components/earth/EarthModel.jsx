import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import * as THREE from 'three';

import './earthModel.css';
import cloudImage from './images/2k_earth_clouds.jpeg';
import globeImage from './images/2k_earth_daymap.jpeg';
import nightImage from './images/2k_earth_nightmap.jpeg';
import atmosphereFragment from './shaders/atmosphereFragment.glsl';
import atmosphereVertex from './shaders/atmosphereVertex.glsl';
import cloudFragment from './shaders/cloudFragment.glsl';
import cloudVertex from './shaders/cloudVertex.glsl';
import fragmentShader from './shaders/fragment.glsl';
import vertexShader from './shaders/vertex.glsl';

const mouseDat = {
  x: 0,
  y: 0,
  rawDX: 0,
  rawDY: 0,
};

const Earth = ({ rotX, rotY }) => {
  const [globeTexture, nightTexture, cloudTexture] = useLoader(
    THREE.TextureLoader,
    [globeImage, nightImage, cloudImage],
  );

  const earthRef = useRef();
  const cloudRef = useRef();

  useFrame(({ clock }) => {
    earthRef.current.rotation.y += 0.002;
    cloudRef.current.rotation.y += 0.002;

    earthRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
    cloudRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <group position={[0, 0, 0]} rotation={[rotX, rotY, 0]}>
      <mesh ref={earthRef}>
        <sphereGeometry args={[5, 50, 50]} />
        <shaderMaterial
          attach="material"
          args={[
            {
              uniforms: {
                globeTexture: { value: globeTexture },
                nightTexture: { value: nightTexture },
                uTime: { type: 'f', value: 4.0 },
              },
              uniformsNeedUpdate: true,
              vertexShader: vertexShader,
              fragmentShader: fragmentShader,
            },
          ]}
        />
      </mesh>
      <mesh ref={cloudRef}>
        <sphereGeometry args={[5, 50, 50]} />
        <shaderMaterial
          attach="material"
          args={[
            {
              uniforms: {
                cloudTexture: { value: cloudTexture },
                uTime: { type: 'f', value: 0.0 },
              },
              blending: THREE.AdditiveBlending,
              side: THREE.FrontSide,
              vertexShader: cloudVertex,
              fragmentShader: cloudFragment,
            },
          ]}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[6, 50, 50]} />
        <shaderMaterial
          attach="material"
          args={[
            {
              vertexShader: atmosphereVertex,
              fragmentShader: atmosphereFragment,
              blending: THREE.AdditiveBlending,
              side: THREE.BackSide,
              transparent: true,
            },
          ]}
        />
      </mesh>
    </group>
  );
};

const EarthModel = ({ className }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMove = (event) => {
    if (event.buttons === 1) {
      mouseDat.x += ((event.clientX - mouseDat.rawDX) / window.innerWidth) * 2;
      mouseDat.y += ((event.clientY - mouseDat.rawDY) / window.innerHeight) * 2;
      setY(mouseDat.x * 0.5);
      setX(mouseDat.y * 0.5);
    }
    mouseDat.rawDX = event.clientX;
    mouseDat.rawDY = event.clientY;
  };

  return (
    <div
      className={`earth-backdrop ${className}`}
      onMouseMove={handleMove}
      role="presentation"
    >
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 10] }}>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Earth rotX={x} rotY={y} />
      </Canvas>
    </div>
  );
};

export default EarthModel;
