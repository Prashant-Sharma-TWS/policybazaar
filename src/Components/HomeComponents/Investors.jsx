import React from "react";
import styles from "./Investors.module.css";
import one from "../../Images/Investors/info.JPG";
import two from "../../Images/Investors/stead.JPG";
import three from "../../Images/Investors/temask.JPG";
import four from "../../Images/Investors/tiger.JPG";
import five from "../../Images/Investors/premji.JPG";
import Slider from "react-slick";

export const Investors = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: false,
  };

  return (
    <div className={styles.investorContainer}>
      <div className={styles.investorWraper}>
        <h2 className={styles.investorHeading}>Investors</h2>
        <span className={styles.investorSpan}></span>
        <Slider {...settings}>
          <div>
            <img src={one} alt="" className={styles.investorImg} />
          </div>
          <div>
            <img src={two} alt="" className={styles.investorImg} />
          </div>
          <div>
            <img src={three} alt="" className={styles.investorImg} />
          </div>
          <div>
            <img src={four} alt="" className={styles.investorImg} />
          </div>
          <div>
            <img src={five} alt="" className={styles.investorImg} />
          </div>
        </Slider>
      </div>
    </div>
  );
};
