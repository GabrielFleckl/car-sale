import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { RepeatWrapping, TextureLoader } from "three";

export function FloatingGrid() {
  const diffuse = useLoader(TextureLoader, "textures/grid-texture.png");

  useEffect(() => {
    diffuse.wrapS = RepeatWrapping;
    diffuse.wrapT = RepeatWrapping;
    diffuse.anisotropy = 4;
    diffuse.repeat.set(30, 30);
    diffuse.offset.set(0, 0);
  }, [diffuse]);

  useFrame((state, delta) => {
    let t = -state.clock.getElapsedTime() * 2;
    diffuse.offset.set(0, t);
  });

  return <>
      <mesh rotation-x={-Math.PI * 0.5} position={[0, -0.2, 0]}>
      <circleGeometry args={[3.5, 128]} />
      <meshBasicMaterial
        color={[255, 255, 255]}
        opacity={1}
        map={diffuse}
        alphaMap={diffuse}
        transparent={true}
      />
    </mesh>
  </>
}