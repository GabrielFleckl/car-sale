import { Canvas } from "@react-three/fiber";

import {
  Loader,
  OrbitControls,
  PerspectiveCamera,
  PointerLockControls,
} from "@react-three/drei";
import { Suspense, useRef } from "react";

import { FloatingGrid } from "../components3D/FloatingGrid";
import Ground from "../components3D/Ground";
import { Model } from "../components3D/CarModel";

import { useControls } from "leva";

export default function CarSale() {
  const { FP } = useControls({ FP: false });

  const camera = useRef();

  return (
    <div className="h-[90vh] md:w-[90%] md:py-10 container hidden md:block cursor-pointer relative">
      <Suspense>
        <Canvas className="rounded-3xl ">
          <color args={[0.01, 0.01, 0.01]} attach="background" />

          <ambientLight intensity={0.4} />

          {FP ? (
            ""
          ) : (
            <spotLight
              color={"white"}
              intensity={150}
              angle={1.5}
              penumbra={1}
              distance={1.1}
              position={[0, 1, 0.2]}
            />
          )}

          <fog attach="fog" color={"#323232"} near={1} far={15} />

          <spotLight
            // angle={0.5}
            // penumbra={1}
            color="#FFFFFF"
            intensity={150}
            position={[0, 4, 0]}
          />

          <spotLight
            angle={1}
            penumbra={1}
            color="#FFFFFF"
            intensity={50}
            position={[0, 3, 5.2]}
          />

          <spotLight
            color={[1, 0.25, 0.7]}
            intensity={150}
            penumbra={1}
            angle={0.6}
            position={[5, 5, 0]}
            shadow-bias={-0.0001}
          />
          <spotLight
            color={[0.14, 0.5, 1]}
            intensity={200}
            penumbra={1}
            angle={0.6}
            position={[-5, 5, 0]}
            shadow-bias={-0.0001}
          />

          <Model />
          <Ground />
          <FloatingGrid />

          {FP ? (
            <PointerLockControls pointerSpeed={0.5} />
          ) : (
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={2.5}
              maxPolarAngle={1.45}
            />
          )}

          <PerspectiveCamera
            ref={camera}
            makeDefault
            fov={FP ? 60 : 50}
            position={FP ? [0, 0.8, -0.4] : [0, 1.5, 5]}
            rotation={FP ? [0, Math.PI, 0] : [0, 0, 0]}
          />
        </Canvas>
      </Suspense>
      <Loader/>
      <p className="text-white absolute top-[60px] hidden md:inline left-[20px] z-50 font-bold">
        Press ESC to exit
      </p>
    </div>
  );
}
