import { Roboto } from "next/font/google";
import Image from "next/image";
import styles from "./portfolio.module.scss";
import * as ReactDOM from "react-dom/client";
import React from "react";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class Rating extends React.Component {
  render() {
    return null;
  }
}

document.body.innerHTML = "<div id='root'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));

ReactDOM.flushSync(() => root.render(<Rating />));

ReactDOM.flushSync(() => document.querySelectorAll("span")[2]?.click());
console.log(document.getElementById("rating")?.outerHTML);

export const Portfolio = () => {
  function filterNumbersFromArray(arr: any[]): void {
    // const checkArray = arr;

    // checkArray.filter((char, index) => {
    //   const getTypeOff = typeof char;
    //   if (getTypeOff != "number") {
    //     arr.splice(index, 1);
    //   }
    // });

    const usedTypeof = "number";

    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] !== usedTypeof) {
        arr.splice(i, 1);
      }
    }
  }

  // function isNumber(text: string | number): boolean {
  //   return /^\d$/.test(text);
  // }

  var arr = [1, "a", "b", 2];
  filterNumbersFromArray(arr);
  console.log(arr);

  return (
    <></>
    // <>
    //   <div className={styles.container} id="portfolio">
    //     <div>
    //       <h1 className={`${styles.title} ${roboto.className}`}>Portfolio</h1>
    //       <div className={styles.lineSeparator} />
    //     </div>
    //     <div className={styles.grid}>
    //       <a
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <div className={styles.boxBackground}>
    //           <div className={styles.background}>
    //             <Image src="/cru-card.jpeg" alt="" fill />
    //           </div>
    //         </div>
    //         <h2 className={roboto.className}>CRU App</h2>
    //         <p className={roboto.className}>
    //           Find in-depth information about Next.js features and&nbsp;API.
    //         </p>
    //       </a>

    //       <a
    //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <h2 className={roboto.className}>
    //           Learn <span>-&gt;</span>
    //         </h2>
    //         <p className={roboto.className}>
    //           Learn about Next.js in an robotoactive course with&nbsp;quizzes!
    //         </p>
    //       </a>

    //       <a
    //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <h2 className={roboto.className}>
    //           Templates <span>-&gt;</span>
    //         </h2>
    //         <p className={roboto.className}>
    //           Discover and deploy boilerplate example Next.js&nbsp;projects.
    //         </p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <h2 className={roboto.className}>
    //           Deploy <span>-&gt;</span>
    //         </h2>
    //         <p className={roboto.className}>
    //           Instantly deploy your Next.js site to a shareable URL
    //           with&nbsp;Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </div>
    // </>
  );
};
