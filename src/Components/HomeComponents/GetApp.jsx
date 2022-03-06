import React from "react";
import styles from "./CSS/GetApp.module.css";
export const GetApp = () => {
  return (
    <>
      <div className={styles.app_block}>
        <div className={styles.container}>
          <div className={styles.copy_part}>
            <p className={styles.text_head}>
              Get the <span>Policybazaar app</span>
            </p>
            <p className={styles.line}>
              <span></span>
            </p>
            <p className={styles.control}>
              Get control of all your insurance needs anywhere, anytime
            </p>
            <ul className={styles.list}>
              <li>Compare different insurance policies</li>
              <li>Buy, store and share all your policies online</li>
              <li>Track your policy status on the go</li>
              <li>Download your policy with a single tap</li>
            </ul>
            <div className={styles.mobile2}>
              <img
                src="https://static.pbcdn.in/cdn/images/home-v1/get-app.png"
                alt="app"
                className={`${styles.lazy} ${styles.app} ${styles.store}`}
                loading="lazy"
              />
            </div>
            <span className={styles.text}>Download our app from</span>
            <span
              className={`${styles.play_store} ${styles.googleplay} ${styles.download_app1}`}
            ></span>
            <span
              className={`${styles.play_store} ${styles.ios} ${styles.install_now}`}
            ></span>
          </div>
          <div className={styles.mobile}>
            <img
              src="https://static.pbcdn.in/cdn/images/home-v1/get-app.png"
              alt="app"
              className={`${styles.lazy} ${styles.app} ${styles.store}`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};
