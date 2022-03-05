import React from "react";
import styles from "./CSS/Best.module.css";

export const Best = () => {
  return (
    <>
      <div className={styles.best_place}>
        <div className={styles.container}>
          <div className={styles.left_block}>
            <div className={`${styles.txt_block} ${styles.opacity_1}`}>
              What makes
              <br />
              <span>Policybazaar</span> the
              <br />
              <span>best place</span> to buy
              <br />
              <span>insurance</span> in
              <br className="hide-big" />
              India?
            </div>
            <div className={`${styles.right_block} ${styles.top_0}`}>
              <div className={styles.info_box}>
                <span className={styles.top_icon}></span>
                <p className={styles.head}>Over 9 million</p>
                <p className={styles.copy}>
                  customers trust us &amp; have bought their insurance on
                  Policybazaar
                </p>
              </div>
              <div className={`${styles.info_box} ${styles.insurer}`}>
                <span className={styles.top_icon}></span>
                <p className={styles.head}>50+ insurers</p>
                <p className={styles.copy}>
                  partnered with us so that you can compare easily &amp;
                  transparently
                </p>
              </div>
              <div className={`${styles.info_box} ${styles.lowest_price}`}>
                <span className={styles.top_icon}></span>
                <p className={styles.head}>The Best Price</p>
                <p className={styles.copy}>
                  for all insurance plans available online
                </p>
              </div>
              <div className={`${styles.info_box} ${styles.claims}`}>
                <span className={styles.top_icon}></span>
                <p className={styles.head}>Claims</p>
                <p className={styles.copy}>
                  support built in with every policy for help, when you need it
                  the most
                </p>
              </div>
              <img
                src="https://static.pbcdn.in/cdn/images/home-v1/blank.gif"
                loading="lazy"
                alt="blank"
                className={styles.lazy}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
