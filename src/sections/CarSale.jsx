import { Canvas } from "@react-three/fiber";

import {
  Environment,
  Loader,
  OrbitControls,
  PerspectiveCamera,
  PointerLockControls,
  Html,
} from "@react-three/drei";
import { Suspense, useRef } from "react";

import { FloatingGrid } from "../components3D/FloatingGrid";
import Ground from "../components3D/Ground";
import { Model } from "../components3D/CarModel";

import { useControls } from "leva";

export default function CarSale() {
  const { FirstPerson } = useControls({ FirstPerson: false });
  const { zoom } = useControls({ zoom: false });
  const { rotate } = useControls({ rotate: false });

  const camera = useRef();

  return (
    <div className="h-[90vh] w-full md:py-8 container hidden md:block cursor-pointer relative">
      <Canvas className="rounded-3xl">
        <Suspense fallback={null}>
          <ambientLight intensity={1} />

          {FirstPerson && (
            <spotLight
              color={"white"}
              intensity={10}
              angle={1.5}
              penumbra={1}
              distance={1.1}
              position={[0, 1, 0.2]}
            />
          )}

          <Model />
          <Ground />
          <FloatingGrid />

          {FirstPerson ? (
            <PointerLockControls pointerSpeed={0.5} />
          ) : (
            <OrbitControls
              enableZoom={zoom}
              autoRotate={rotate}
              autoRotateSpeed={0.7}
              maxPolarAngle={1.3}
              minPolarAngle={1.3}
            />
          )}

          <PerspectiveCamera
            ref={camera}
            makeDefault
            fov={FirstPerson ? 40 : 50}
            position={FirstPerson ? [0.4, 0.9, -0.3] : [0, 1.5, 5]}
            rotation={FirstPerson ? [0, Math.PI, 0] : [0, 0, 0]}
          />

          <Environment preset="dawn" />

          <Html position={[0, 2.4, -1]} transform>
            <p className="text-white font-bold text-[12px] w-26 leading-3 p-1 rounded-xl bg-red-700">
              Summer Sale
            </p>
          </Html>
          <Html position={[0, 2, -1]} transform>
            <p className="text-white font-bold text-[12px] w-26 leading-3 p-1 rounded-xl bg-red-700">
              Lamborghini | $ 10.000.000
            </p>
          </Html>
        </Suspense>
      </Canvas>
      <Loader />
      {FirstPerson && (
        <p className="text-white absolute top-[60px] hidden md:inline left-[20px] z-50 font-bold">
          Press ESC to exit
        </p>
      )}
    </div>
  );
}
