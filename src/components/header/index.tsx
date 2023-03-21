import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import styles from "./header.module.scss";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const Header = () => {
  return (
    <header className={`${styles.header} ${styles.screenPadding}`}>
      <div className={styles.container}>
        <a href="#home">
          <p
            className={`${styles.whiteLetters} ${styles.title} ${roboto.className}`}
          >
            Kayro Mizael
          </p>
        </a>
        <div className={styles.nav}>
          <a href="#about">
            <p className={`${styles.whiteLetters} ${roboto.className}`}>
              About
            </p>
          </a>
          <a href="#portfolio">
            <p className={`${styles.whiteLetters} ${roboto.className}`}>
              Portfolio
            </p>
          </a>
          <a href="#services">
            <p className={`${styles.whiteLetters} ${roboto.className}`}>
              Services
            </p>
          </a>
          <a href="#skills">
            <p className={`${styles.whiteLetters} ${roboto.className}`}>
              Skills
            </p>
          </a>
        </div>
      </div>
    </header>
  );
};
