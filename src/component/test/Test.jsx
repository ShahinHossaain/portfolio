import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import image from "../../assets/Cartoon-astronaut-floating-on-transparent-background-PNG.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Test = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      className="relative mx-6 md:mx-8 lg:mx-16 h-2/3 flex justify-center"
      data-aos="fade-up-left"
      data-aos-delay="500"
    >
      <Canvas camera={{ fov: 25, position: [5, 5, 5] }} className="absolute">
        <OrbitControls enableZoom={false} autoRotate />

        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />

        <Sphere args={[1, 100, 200]} scale={1.5}>
          <MeshDistortMaterial
            color="#080B34"
            attach="material"
            distort={0.5}
            speed={2}
          />
        </Sphere>
      </Canvas>
      <img
        src={image}
        alt="bro"
        className="absolute h-4/5 bottom-9 slow-animation"
      />
    </div>
  );
};

export default Test;
