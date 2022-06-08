import { useRef, useEffect } from "react";
import gsap from "gsap";
import {
  TopStarGreen,
  TopStarWhite,
  TopStarYellow,
  BottomStarCross,
  BottomStarWhite,
  BottomStarYellow,
  BottomStarSmallDiamond,
  BottomStarCrossTwo,
} from "../../assets/svgs";
import BottomDotStar from "../../assets/images/bottom-dot-star.png";
import BottomCross from "../../assets/images/bottom-cross.png";
import styles from "./stars.module.scss";

const Stars = () => {
  const smallStarRef = useRef();
  const smallDotRef = useRef();
  const crossRef = useRef();
  const smallDiamondRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      smallStarRef.current,
      6.5,
      { y: 164 },
      { y: -94, repeat: -1, delay: 3 }
    );
    gsap.fromTo(
      smallDotRef.current,
      8.5,
      { y: 164 },
      { y: -164, repeat: -1, delay: 8 }
    );
    gsap.fromTo(
      smallDiamondRef.current,
      8.5,
      { y: 64 },
      { y: -164, repeat: -1, delay: 8 }
    );
    gsap.fromTo(
      crossRef.current,
      10.5,
      { y: 0 },
      { y: -704, repeat: -1, delay: 8 }
    );
  });
  return (
    <>
      <div className={styles.star__top__green}>
        <TopStarGreen />
      </div>
      <div className={styles.star__top__yellow}>
        <TopStarYellow />
      </div>
      <div className={styles.star__top__white}>
        <TopStarWhite />
      </div>
      <div className={styles.star__bottom__cross} ref={smallDiamondRef}>
        <BottomStarSmallDiamond />
      </div>
      <div className={styles.star__bottom__white}>
        <BottomStarWhite />
      </div>
      <div className={styles.star__bottom__yellow}>
        <BottomStarYellow />
      </div>
      <div className={styles.star__bottom__smalldiamond} ref={smallStarRef}>
        <img src={BottomDotStar} alt="" />
      </div>
      <div className={styles.star__bottom__bigdiamond} ref={smallDotRef}>
        <BottomStarSmallDiamond />
      </div>
      <div className={styles.star__bottom__cross__two} ref={crossRef}>
        <img src={BottomCross} alt="" />
      </div>
    </>
  );
};

export default Stars;
