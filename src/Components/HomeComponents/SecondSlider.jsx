import React from "react";
import one from "../../Images/Slider/minislider1.webp";
import two from "../../Images/Slider/minislider2.webp";
import three from "../../Images/Slider/minislider3.webp";
import four from "../../Images/Slider/minislider4.webp";
import five from "../../Images/Slider/minislider5.webp";
import six from "../../Images/Slider/minislider6.webp";
import seven from "../../Images/Slider/minislider7.webp";
import styles from "./CSS/SecondSlider.module.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export const SecondSlider = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: [`<span></span>`, `<span></span>`],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div className={styles.slideContainer}>
      {/* Starts */}
      <div className={styles.slideWrapper}>
        <OwlCarousel className={styles.sliderItems} {...options}>
          <div className={styles.item}>
            <img src={one} alt="tax-img" className={styles.img1} />
          </div>
          <div className="item">
            <img src={two} alt="tax-img" />
          </div>
          <div className="item">
            <img src={three} alt="tax-img" />
          </div>
          <div className="item">
            <img src={four} alt="tax-img" />
          </div>
          <div className="item">
            <img src={five} alt="tax-img" />
          </div>
          <div className="item">
            <img src={six} alt="tax-img" />
          </div>
          <div className="item">
            <img src={seven} alt="tax-img" />
          </div>
        </OwlCarousel>
      </div>
      {/* Ends */}
    </div>
  );
};
