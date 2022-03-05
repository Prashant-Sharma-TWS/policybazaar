import React from "react";
import styles from "./CSS/PBSection.module.css";
import icon1 from "../../Images/scaler-images/slide-image-1.png";
import icon2 from "../../Images/scaler-images/slide-image-2.png";
import icon3 from "../../Images/scaler-images/slide-image-3.png";
import icon4 from "../../Images/scaler-images/slide-image-4.png";
import icon5 from "../../Images/scaler-images/slide-image-5.png";

export const PBSection = () => {
  return (
    <div className={styles.pbContainer}>
      <h2 className={styles.pbh2}>PB Advantage</h2>
      <span className={styles.lineForPB}></span>
      <span className={styles.gALine}></span>

      <p className={styles.pForPB}>
        When you buy insurance from us, you get more than just financial safety.
        You also get: our promise of simplifying complex insurance terms and
        conditions, quick stress-free claims, instant quotes from top insurers
        and being present for you in the toughest of times.
      </p>
      <a href="##" className={styles.aForPB}>
        Know more
      </a>
      {/* Card zoom on hover starts */}
      <div className={styles.pbZoomWrapper}>
        <div className={styles.pbZoomContainer}>
          <img src={icon1} alt="icons" />
          <p className={styles.pbZoomHeading}>One of the best Prices </p>
          <p className={styles.pbZoomText}>Guaranteed</p>
        </div>
        <div className={styles.pbZoomContainer}>
          <img src={icon2} alt="icons" />
          <p className={styles.pbZoomHeading}>Unbiased Advice </p>
          <p className={styles.pbZoomText}>Keeping customers first</p>
        </div>
        <div className={styles.pbZoomContainer}>
          <img src={icon3} alt="icons" />
          <p className={styles.pbZoomHeading}>100% Reliable </p>
          <p className={styles.pbZoomText}>Regulated by IRDAI</p>
        </div>
        <div className={styles.pbZoomContainer}>
          <img src={icon4} alt="icons" />
          <p className={styles.pbZoomHeading}>Claims Support</p>
          <p className={styles.pbZoomText}>Made stress-free</p>
        </div>
        <div className={styles.pbZoomContainer}>
          <img src={icon5} alt="icons" />
          <p className={styles.pbZoomHeading}>Happy to Help</p>
          <p className={styles.pbZoomText}>Every day of the week</p>
        </div>
      </div>
      {/* Ends */}
    </div>
  );
};
