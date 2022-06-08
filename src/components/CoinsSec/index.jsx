import { useEffect, useRef } from "react";
import { CoinLeft, CoinRight } from "../../assets/svgs";
import CoinPot from "../../assets/images/coins.png";
import LightsSec from "../LightsSec";
import StarsSec from "../StarsSec";
import gsap, { Power3 } from "gsap";
import styles from "./coinssec.module.scss";

const CoinsSec = () => {
  const leftCoinRef = useRef();
  const rightCoinRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      leftCoinRef.current,
      2.5,
      { y: -64 },
      { y: 34, yoyo: true, repeat: -1 }
    );

    gsap.fromTo(
      rightCoinRef.current,
      1.5,
      { y: -24 },
      { y: 24, yoyo: true, repeat: -1 }
    );
  });

  return (
    <div className={styles.coin}>
      <StarsSec />
      <LightsSec />

      <div className={styles.coin__pot}>
        <img src={CoinPot} alt="" />
      </div>
      <div className={styles.coin__left} ref={leftCoinRef}>
        <CoinLeft />
      </div>
      <div className={styles.coin__right} ref={rightCoinRef}>
        <CoinRight />
      </div>
    </div>
  );
};

export default CoinsSec;
