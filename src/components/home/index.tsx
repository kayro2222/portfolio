import { Roboto } from "next/font/google";
import Image from "next/image";
import styles from "./home.module.scss";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const Home = () => {
  return (
    <>
      <div className={styles.container} id="home">
        <div className={styles.titleContainer}>
          <h3 className={`${roboto.className} ${styles.presentation}`}>
            Hi, my name is
          </h3>
          <h1 className={`${roboto.className} ${styles.nameTitle}`}>
            Kayro Mizael
          </h1>
          <div className={styles.inlinePresentation}>
            <p className={roboto.className}>
              and I&apos;m a
              <h2 className={`${roboto.className} ${styles.presentation}`}>
                Software Engineer
              </h2>
            </p>
          </div>
          <div className={styles.mediaContainer}>
            <a
              href="https://github.com/kayro2222"
              target="_blank"
              className={styles.paddingMedia}
            >
              <Image src="/github-icon.png" alt="" width={25} height={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/kayro-mizael/"
              target="_blank"
              className={styles.paddingMedia}
            >
              <Image src="/linkedin-icon.png" alt="" width={25} height={25} />
            </a>
            <a href="mailto:kayromsa@gmail.com" className={styles.paddingMedia}>
              <Image src="/email-icon.png" alt="" width={28} height={28} />
            </a>
          </div>
        </div>
        <div className={styles.scrollContainer}>
          <a href="#about" className={styles.paddingMedia}>
            <Image src="/arrow-down-icon.png" alt="" width={25} height={25} />
          </a>
        </div>
      </div>
    </>
  );
};
