import { Project } from "@/types";
import { lerp } from "@/utils/functions";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { SetStateAction, useRef } from "react";
import { Mesh } from "three";

type SingleProjectProps = {
    project: Project;
    index: number;
    active: boolean;
    setState: React.Dispatch<SetStateAction<number>>;
  };
  

export default function SingleProject({
    project,
    index,
    active,
    setState,
  }: SingleProjectProps) {
    const positionY = index + 2 * index;
    const texture = useTexture(`/projects-images/${project.image}.webp`);
    const meshRef = useRef<Mesh | null>(null);
  
    useFrame(({ camera }, delta) => {
      if (!meshRef.current) return;
  
      if (active) {
        meshRef.current.rotation.y = lerp(meshRef.current.rotation.y, Math.PI * 0.4, 0.1);
        meshRef.current.rotation.x = lerp(meshRef.current.rotation.x, Math.PI * -0.03, 0.1);
        meshRef.current.scale.x = lerp(meshRef.current.scale.x, 1.2, 0.1);
        meshRef.current.scale.y = lerp(meshRef.current.scale.y, 1.2, 0.1);
      } else {
        meshRef.current.rotation.y = lerp(meshRef.current.rotation.y, 0, 0.1);
        meshRef.current.rotation.x = lerp(meshRef.current.rotation.x, 0, 0.1);
        meshRef.current.scale.x = lerp(meshRef.current.scale.x, 1, 0.1);
        meshRef.current.scale.y = lerp(meshRef.current.scale.y, 1, 0.1);
      }
    });
  
    return (
      <mesh
        onClick={() => setState(index)}
        position={[0, positionY, 0]}
        ref={meshRef}
      >
        <planeGeometry args={[3, 2]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    );
  }