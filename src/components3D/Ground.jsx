import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Ground() {
  const [roughness, normal] = useLoader(TextureLoader, [
    "textures/rubber-roughness.jpg",
    "textures/rubber-normal.jpg",
  ]);

  return (
    <mesh position={[0, -0.2, 0]} rotation-x={-Math.PI * 0.5}>
      <circleGeometry args={[3, 128]} />
      <MeshReflectorMaterial
        envMapIntensity={0}
        // normalMap={normal}
        normalScale={[0.015, 0.015]}
        
        // roughnessMap={roughness}
        dithering={true}
        resolution={1024}
        color={"#3a332b"}
      />
      {/* <meshStandardMaterial
        color={[0, 0, 0]}
        normalScale={[0.15, 0.15]}
        dithering={true}
      /> */}
    </mesh>
  );
}

export default Ground;
