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
  const { FirstPerson } = useControls({ FirstPerson: false });
  const { zoom } = useControls({ zoom: false });
  const { rotate } = useControls({ rotate: true });

  const camera = useRef();

  return (
    <div className="h-[90vh] w-[95%] md:py-8 container hidden md:block cursor-pointer relative">
      <Canvas className="rounded-3xl">
        <Suspense fallback={null}>
          <color args={["#141414"]} attach="background" />

          <ambientLight intensity={1} />

          {FirstPerson ? (
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

          <fog attach="fog" color={"#323232"} near={0.1} far={15} />

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

          {/* <spotLight
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
          /> */}

          <Model />
          <Ground />
          <FloatingGrid />

          {FirstPerson ? (
            <PointerLockControls pointerSpeed={0.5} />
          ) : (
            <OrbitControls
              enableZoom={zoom}
              autoRotate={rotate}
              autoRotateSpeed={2.5}
              maxPolarAngle={1.45}
            />
          )}

          <PerspectiveCamera
            ref={camera}
            makeDefault
            fov={FirstPerson ? 40 : 50}
            position={FirstPerson ? [0.4, 0.9, -0.3] : [0, 1.5, 5]}
            rotation={FirstPerson ? [0, Math.PI, 0] : [0, 0, 0]}
          />
        </Suspense>
      </Canvas>
      <Loader />
      <p className="text-white absolute top-[60px] hidden md:inline left-[20px] z-50 font-bold">
        Press ESC to exit
      </p>
    </div>
  );
}
