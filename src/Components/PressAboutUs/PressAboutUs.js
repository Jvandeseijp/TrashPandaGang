import React from "react";
import styles from "./PressAbout.module.css";
import { AiFillStar } from "react-icons/ai";
const PressAboutUs = () => {
  const partnaers = [
    { image: "./images/nasdaq.png", to: "https://www.nasdaq.com/" },
    { image: "./images/nasdaq.png", to: "https://www.nasdaq.com/" },
    { image: "./images/nasdaq.png", to: "https://www.nasdaq.com/" },
    { image: "./images/nasdaq.png", to: "https://www.nasdaq.com/" },
    { image: "./images/nasdaq.png", to: "https://www.nasdaq.com/" },
    { image: "./images/nasdaq.png", to: "https://www.nasdaq.com/" },
    { image: "./images/nasdaq.png", to: "https://www.nasdaq.com/" },
    { image: "./images/nasdaq.png", to: "https://www.nasdaq.com/" },
    { image: "./images/nasdaq.png", to: "https://www.nasdaq.com/" },
    { image: "./images/nasdaq.png", to: "https://www.nasdaq.com/" },
  ];
  return (
    <section className={styles.main}>
      <div className={styles.myWrapper}>
        <h2 className={styles.title}>Press About Us</h2>
        <div className={styles.myRow}>
          {partnaers.map((el, i) => (
            <div
              key={i}
              className={`${styles.myCol} ${i === 4 && styles.icon} ${
                i === 9 && styles.icon
              }`}
            >
              <a
                href={el.to}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <img src={el.image} alt="#" className={styles.images} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PressAboutUs;
{
  /* <AiFillStar
color="#fff"
className={`${i % 2 === 0 && styles.evenIcon} ${
  i % 2 !== 0 && styles.oddIcon
}`}
/> */
}
