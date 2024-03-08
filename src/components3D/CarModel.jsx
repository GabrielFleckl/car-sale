import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useControls } from "leva";
import { Html } from "@react-three/drei";
import { useState } from "react";

export const Model = () => {
  const car = useLoader(GLTFLoader, "./lamborghini/scene.gltf");

  const { Hood } = useControls({ Hood: true });
  // const { Glass } = useControls({ Glass: true });

  let group =
    car.scene.children[0].children[0].children[0].children[0].children[0]
      .children[0];

  group.children[4].visible = Hood;
  // group.children[22].children[0].visible = Glass;

  useFrame((state) => {
    let t = state.clock.getElapsedTime();
    group.children[0].rotation.x = t * -2;
    group.children[1].rotation.x = t * -2;
    group.children[28].children[1].rotation.x = t * -2;
    group.children[29].children[1].rotation.x = t * -2;
  });

  const [hidden, set] = useState();

  return (
    <>
      <primitive
        object={car.scene}
        scale={0.01}
        rotation={[0, Math.PI / -2, 0]}
        position={[0, -0.15, 0.1]}
      />
      {/* <Html
        scale={1}
        position={[0, 2, -2]}
        rotate
        transform
        onOcclude={set}
        style={{
          transition: "all 0.5s",
          opacity: hidden ? 0 : 1,
          transform: `scale(${hidden ? 0.5 : 1})`,
        }}
      >
        <div className="text-white bg-[#4e463d] rounded-xl px-1">$ 600.550</div>
      </Html> */}
    </>
  );
};
