import { useRef, useEffect } from "react";
import gsap, { Power3 } from "gsap";
import {
  RectOne,
  RectTwo,
  RectThree,
  RectFour,
  RectFive,
} from "../../assets/svgs";
import styles from "./lightsec.module.scss";

const LightsSec = () => {
  const lightOneRef = useRef();
  const lightTwoRef = useRef();
  const lightThreeRef = useRef();
  const lightFourRef = useRef();
  const lightFiveRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      lightOneRef.current,
      2.5,
      { x: 64 },
      { x: -60, y: 0, repeat: -1 }
    );
    gsap.fromTo(lightTwoRef.current, 2.5, { x: 64 }, { x: -60, repeat: -1 });
    gsap.fromTo(lightThreeRef.current, 2.5, { x: 64 }, { x: -108, repeat: -1 });
    gsap.fromTo(lightFourRef.current, 2.5, { x: 64 }, { x: -108, repeat: -1 });
    gsap.fromTo(lightFiveRef.current, 2.5, { x: 64 }, { x: -108, repeat: -1 });
  });

  return (
    <>
      <div className={styles.lights__one} ref={lightOneRef}>
        <RectOne />
      </div>
      <div className={styles.lights__two} ref={lightTwoRef}>
        <RectTwo />
      </div>
      <div className={styles.lights__three} ref={lightThreeRef}>
        <RectThree />
      </div>

      <div className={styles.lights__four} ref={lightFourRef}>
        <RectFour />
      </div>
      <div className={styles.lights__five} ref={lightFiveRef}>
        <RectFive />
      </div>
    </>
  );
};

export default LightsSec;
