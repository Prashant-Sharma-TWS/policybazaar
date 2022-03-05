import React from "react";
import imageOne from "../../Images/slide-image-1.png";
import imageTwo from "../../Images/slide-image-2.png";
import imageThree from "../../Images/slide-image-3.png";
import imageFour from "../../Images/slide-image-4.png";
import styles from "./CSS/SecondSlider.module.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const SliderImage = () => {
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
      <div className={styles.slideWrapper}>
        <OwlCarousel className={styles.sliderItems} {...options}>
          <div className={styles.item}>
            <img src={imageOne} alt="tax-img" className={styles.img1} />
          </div>
          <div className="item">
            <img src={imageTwo} alt="tax-img" />
          </div>
          <div className="item">
            <img src={imageThree} alt="tax-img" />
          </div>
          <div className="item">
            <img src={imageFour} alt="tax-img" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};
