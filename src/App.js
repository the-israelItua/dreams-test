import { useRef, useEffect } from "react";
import cx from "classnames";
import gsap from "gsap";
import Header from "./components/Header";
import Card from "./components/Card";
import CoinsSec from "./components/CoinsSec";
import { ChevronIcon } from "./assets/svgs";
import styles from "./styles/app.module.scss";

function App() {
  const titleRef = useRef();
  const subRef = useRef();

  const mTitleRef = useRef();
  const mTextRef = useRef();

  const textRef = useRef();
  const subTextRef = useRef();

  useEffect(() => {
    gsap.to(subRef.current, {
      y: -24,
      opacity: 1,
      duration: 0.2,
      delay: 0.7,
    });
    gsap.to(titleRef.current, {
      y: -24,
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    });

    gsap.to(subTextRef.current, {
      y: -24,
      opacity: 1,
      duration: 0.4,
      delay: 0.5,
    });
    gsap.to(textRef.current, {
      y: -24,
      opacity: 1,
      duration: 0.4,
      delay: 0.3,
    });
    gsap.to(mTitleRef.current, {
      y: -24,
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    });
    gsap.to(mTextRef.current, {
      y: -24,
      opacity: 1,
      duration: 0.4,
      delay: 0.3,
    });
  });

  return (
    <>
      <Header />
      <section className={styles.app}>
        <h5 className={styles.app__subtitle} ref={subRef}>
          Unlock to <br />
        </h5>
        <h5
          className={cx(styles.app__subtitle, styles.app__subtitle__sec)}
          ref={titleRef}
        >
          <span>Power your dreams!</span>
        </h5>

        <h5 className={cx(styles.app__mobile__subtitle)} ref={mTitleRef}>
          Unlock to <span>Power your dreams!</span>
        </h5>
        <p className={styles.app__mobile__text} ref={mTextRef}>
          Stand a chance to win <span>N3,000,000</span> everyday for the next 5
          days
        </p>
        <p className={styles.app__text} ref={textRef}>
          Stand a chance to win
        </p>
        <p className={styles.app__text} ref={subTextRef}>
          <span>&#8358;3,000,000</span> everyday for the next 5 days
        </p>

        <Card />

        <button>
          Play The Game <ChevronIcon />
        </button>
      </section>

      <CoinsSec />
    </>
  );
}

export default App;
