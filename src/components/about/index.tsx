import { Roboto } from "next/font/google";
import styles from "./about.module.scss";
import Image from "next/image";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const About = () => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.columns}>
        <div className={styles.sectionTitle}>
          <h1 className={`${styles.title} ${roboto.className}`}>About me</h1>
          <div className={styles.lineSeparator} />
          <br />
          <div className={styles.description}>
            <p className={roboto.className}>
              I&apos;m from Natal, state of Rio Grande do Norte, Brazil.
              I&apos;m a lover of games and books. I like, particularly, of
              fantasy and medieval stories like Tolkien and Bernard Cornwell.
              <br />
              <br />I truly believe that the best way of unite a team is through
              communication. I like to talk about the problems and good things
              that happen on our days. I already worked as a seller, support and
              now I&apos;m a software engineer. My knowledge is based on the
              JavaScript language.
              <br />
              <br />I have a deep knowledge with ReactJS, React Native and
              NodeJS, working with TypeScript. All of my projects, needs to use
              design and architecture patterns such like SOLID, Clean Code,
              Storybook, Automated tests with Jest or React-testing-library,
              Mobile First.
              <br />
              <br />
              Here is a list of technologies I&apos;ve been working with:
            </p>
            <div className={styles.list}>
              <ul>
                <li className={roboto.className}>JavaScript</li>
                <li className={roboto.className}>TypeScript</li>
                <li className={roboto.className}>PHP</li>
                <li className={roboto.className}>SQL</li>
                <li className={roboto.className}>NoSQL</li>
                <li className={roboto.className}>WebSocket</li>
              </ul>
              <ul>
                <li className={roboto.className}>ReactJS</li>
                <li className={roboto.className}>React Native</li>
                <li className={roboto.className}>NodeJS</li>
                <li className={roboto.className}>Express.JS</li>
                <li className={roboto.className}>Laravel</li>
                <li className={roboto.className}>Angular</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.sectionImage}>
          <div className={styles.image}>
            <Image
              src="/my-image.jpeg"
              alt="my photo"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
