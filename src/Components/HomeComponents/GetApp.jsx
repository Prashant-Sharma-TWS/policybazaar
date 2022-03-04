import React from "react";
import styles from "./GetApp.module.css";
export const GetApp = () => {
  return (
    <div className={ styles.gAColor}>
    <div className={styles.getAppContainer}>
      <div className={styles.leftAppSec}>
        <p className={styles.gATitle}>
          Get the <span>Policybazaar app</span>
        </p>
        <span className={styles.gALine}></span>
        <p className={styles.gADescription}>
          Get control of all your insurance needs anywhere, anytime{" "}
        </p>
        <ul className={styles.gAlist}>
          <li>Compare different insurance policies</li>
          <li>Buy, store and share all your policies online</li>
          <li>Track your policy status on the go</li>
          <li>Download your policy with a single tap</li>
        </ul>
        <span className={styles.gAdownload}>Download our app from</span>
        <a
          href="https://pbapp.onelink.me/8YTK?pid=mobile_hamburger&amp;c=mobile_hamburger_dropdown&amp;af_dp=pbapp%3A%2F%2Fpolicybazaar.com&amp;af_web_dp=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.policybazaar%26hl%3Den-GB%26pli%3D1"
          className={styles.gAGpay}
        >
        </a>
        <a
          href="https://pbapp.onelink.me/8YTK?pid=mobile_hamburger&amp;c=mobile_hamburger_dropdown&amp;af_dp=pbapp%3A%2F%2Fpolicybazaar.com&amp;af_web_dp=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.policybazaar%26hl%3Den-GB%26pli%3D1"
          className={styles.gAStore}
        >
        </a>
      </div>
      <div className={styles.rightAppSec}>
        <img
          src="https://static.pbcdn.in/cdn/images/home-v1/get-app.png"
          alt="app"
          className={styles.rightAppSecImg}
        ></img>
      </div>
      </div>
      </div>
  );
};
