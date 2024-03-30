import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useControls } from "leva";


export const Model = () => {

  // const directionalLight = useRef();

  // useHelper(directionalLight, DirectionalLightHelper, 1);

  const car = useLoader(GLTFLoader, "./lamborghini/scene.gltf");

  const { Hood } = useControls({ Hood: true });
  
  let group =
    car.scene.children[0].children[0].children[0].children[0].children[0]
      .children[0];

  group.children[4].visible = Hood;
  
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
        position={[0, -0.15, 0.1]}
      />
      <directionalLight
        // ref={directionalLight}
        intensity={10}
        position={[0, 3, 0]}
        color={"#ffffff"}
      />
      
    </>
  );
};
