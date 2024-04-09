"use client";

import { Canvas } from "@react-three/fiber";
import React from "react";
import projects from '@/projects.json'
import { OrbitControls } from "@react-three/drei";

export default function ProjectsCanvas() {
  return (
    <div className="w-screen h-screen bg-black">
        <Canvas camera={{position: [0, 1, 0]}}>
            <OrbitControls />
            <ambientLight />
            <ProjectsScene/>
        </Canvas>
    </div>
  );
}

function ProjectsScene(){
 return (
    <>
    <mesh position={[0, -1, 0]} scale={5} rotation-x={-Math.PI * 0.5}>
        <planeGeometry/>
        <meshBasicMaterial />
    </mesh>
    <mesh position={[0, 0, 0]} >
        <planeGeometry args={[3, 2]}/>
        <meshStandardMaterial/>
    </mesh>
    </>

    
 )
}
