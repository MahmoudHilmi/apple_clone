import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import MacBookModel16 from "../../models/Macbook-16";
import MacBookModel14 from "../../models/Macbook-14";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshs = (group, opacity) => {
  if (!group) return;
  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
    }
  });
};

const moveAndFade = (group, x, opacity) => {
  if (!group) return;
  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
    }
  });
  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

export default function ModdelSwitcher({ scale, isMobile }) {
  const smallMackbbookRef = useRef();
  const largeMackbbookRef = useRef();
  const showLargeMackBook = scale === 0.08 || scale === 0.05;

  useGSAP(() => {
    if (showLargeMackBook) {
      moveAndFade(smallMackbbookRef.current, OFFSET_DISTANCE, 0);

      moveAndFade(largeMackbbookRef.current, 0, 1);
    } else {
      moveAndFade(smallMackbbookRef.current, 0, 1);
      moveAndFade(largeMackbbookRef.current, -OFFSET_DISTANCE, 0);
    }
  }, [scale]);

  const contorlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    polar: [-Math.PI, Math.PI],
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <>
      <PresentationControls {...contorlsConfig}>
        <group ref={largeMackbbookRef} position={[-OFFSET_DISTANCE, 0, 0]}>
          <MacBookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...contorlsConfig}>
        <group ref={smallMackbbookRef} position={[0, 0, 0]}>
          <MacBookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
}
