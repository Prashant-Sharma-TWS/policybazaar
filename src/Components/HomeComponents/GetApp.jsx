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
            <span className={styles.text}>Download our app from</span>
            <a
              href="https://pbapp.onelink.me/8YTK?pid=mobile_hamburger&amp;c=mobile_hamburger_dropdown&amp;af_dp=pbapp%3A%2F%2Fpolicybazaar.com&amp;af_web_dp=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.policybazaar%26hl%3Den-GB%26pli%3D1"
              className={`${styles.play_store} ${styles.googleplay} ${styles.download_app1}`}
            ></a>
            <a
              href="https://pbweb.onelink.me/4ChW?pid=direct&amp;c=home-app-abff"
              className={`${styles.play_store} ${styles.ios} ${styles.install_now}`}
            ></a>
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
