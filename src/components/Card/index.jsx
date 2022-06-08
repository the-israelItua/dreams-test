import { useRef, useEffect } from "react";
import { LightIcon } from "../../assets/svgs";
import gsap from "gsap";
import styles from "./card.module.scss";

const Card = () => {
  const cardRef = useRef();

  useEffect(() => {
    gsap.to(cardRef.current, { y: -20, duration: 0.4 });
  });

  return (
    <div className={styles.card} ref={cardRef}>
      <div className={styles.card__content}>
        <h4>🚀 How To Play</h4>
        <ol>
          <li>Guess the right combination of numbers</li>
          <li>
            Win <span>N3,000,000</span> instantly
          </li>
        </ol>

        <p>Sounds unbelievable? Well, guess right & see for yourself!</p>

        <div className={styles.card__content__foot}>
          <LightIcon />
          <p>
            Think well before you guess. You have only <span>2</span> attempts
            per day and even after you wi, you can come back the next day to try
            for another jackpot!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
