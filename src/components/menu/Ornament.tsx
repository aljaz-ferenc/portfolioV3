import React, { useEffect, useRef } from "react";
import { useGLTF, Center } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import { PointLight, Raycaster, Vector2 } from "three";

export default function Ornament({mouse}: any) {
  const mouseRef = useRef<Vector2>(new Vector2(0, 0));
  const cursorRef = useRef<Vector2>(new Vector2(0, 0))

  return (
    <Canvas  camera={{fov: 100}}>
      <Center>
        <Model mouse={mouse}/>
      </Center>
    </Canvas>
  );
}

function Model({mouse}: any) {
  const pointLightRef = useRef<PointLight | null>(null);
  const modelRef = useRef<any>(null);
  const model = useGLTF("/models/ornament/scene.gltf");
  const wallRef = useRef<any>(null)
  const ballRef = useRef<any>(null)

  // useEffect(() => {
  //   if (!model) return;
  //   model.scene.traverse((child: any) => {
  //     if (child.isMesh) {
  //       if (child.material) {
  //         child.material.color.set("white");
  //       }
  //     }
  //   });
  // }, [model]);

  useFrame(({raycaster, camera, clock}, delta) => {
    if (!modelRef.current) return;
    modelRef.current.rotation.y += delta;

    if (!pointLightRef.current) return;
    pointLightRef.current.position.x = mouse.x 
    pointLightRef.current.position.y = mouse.y 

    if (!ballRef.current) return;
    ballRef.current.position.y = Math.sin(clock.getElapsedTime() - 1) / 2

  });

  return (
    <group>
      <pointLight color={"white"} position={[0, 3, -3]} intensity={0.5} />
      <pointLight
        color={"white"}
        ref={pointLightRef}
        position={[0, 0, 1]}
        intensity={0.5}
        decay={2}
      />
      <primitive object={model.scene} ref={modelRef} scale={2} />
      <mesh scale={50} position-z={-2} ref={wallRef}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial/>
      </mesh>
      <mesh scale={0.2} position={[0, 0, 0]} ref={ballRef}>
        <sphereGeometry />
        <meshStandardMaterial/>
      </mesh>
    </group>
  );
}
