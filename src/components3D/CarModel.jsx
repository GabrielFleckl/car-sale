import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useControls } from "leva";

export const Model = () => {
  const car = useLoader(GLTFLoader, "./lamborghini/scene.gltf");
  console.log(
    car.scene.children[0].children[0].children[0].children[0].children[0]
      .children[0]
  );

  const { Hood } = useControls({ Hood: true });
  const { Glass } = useControls({ Glass: true });


  let group =
    car.scene.children[0].children[0].children[0].children[0].children[0]
      .children[0];

  group.children[4].visible = Hood;
  group.children[22].children[0].visible = Glass;

  useFrame((state) => {
    let t = state.clock.getElapsedTime();
    group.children[0].rotation.x = t * -2;
    group.children[1].rotation.x = t * -2;
    group.children[28].children[1].rotation.x = t * -2;
    group.children[29].children[1].rotation.x = t * -2;
  });

  return (
    <>
      <primitive
        object={car.scene}
        scale={0.01}
        rotation={[0, Math.PI / -2, 0]}
        position={[0, -0.15, 0]}
      />
    </>
  );
};
