import { Logo, CalenderIcon } from "../../assets/svgs";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.header__logo}>
        <Logo />
      </div>
      <div className={styles.header__date}>
        <CalenderIcon />
        <div>
          <h5>Day 1</h5>
          <p>of 5</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
