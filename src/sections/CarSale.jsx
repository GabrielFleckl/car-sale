import { Canvas } from "@react-three/fiber";

import {
  Environment,
  Loader,
  OrbitControls,
  PerspectiveCamera,
  PointerLockControls,
  Stats,
  Stars,
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

          {/* <fog attach="fog" color={"#323232"} near={0.1} far={15} /> */}

          <spotLight color="#FFFFFF" intensity={150} position={[0, 4, 0]} />

          <spotLight
            angle={1}
            penumbra={1}
            color="#FFFFFF"
            intensity={50}
            position={[0, 3, 5.2]}
          />

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

          <Stats />
          <Environment preset="night" background blur={1} />

          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            fade
            speed={1.6}
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
