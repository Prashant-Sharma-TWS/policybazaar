// import React from "react";
// import styles from "./Investors.module.css";
// import one from "../../Images/Investors/info.JPG";
// import two from "../../Images/Investors/stead.JPG";
// import three from "../../Images/Investors/temask.JPG";
// import four from "../../Images/Investors/tiger.JPG";
// import five from "../../Images/Investors/premji.JPG";
// import Slider from "react-slick";

// export const Investors = () => {
//   // const settings = {
//   //   dots: falsee,
//   //   infinite: true,
//   //   slidesToShow: 3,
//   //   slidesToScroll: 1,
//   //   autoplay: true,
//   //   speed: 2000,
//   //   autoplaySpeed: 2000,
//   //   cssEase: "linear",
//   //   rtl: false,
//   // };
//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

// };

import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./CSS/Investors.module.css";
import one from "../../Images/Investors/info.JPG";
import two from "../../Images/Investors/stead.JPG";
import three from "../../Images/Investors/temask.JPG";
import four from "../../Images/Investors/tiger.JPG";
import five from "../../Images/Investors/premji.JPG";
export class Investors extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className={styles.investorContainer}>
        <div className={styles.investorWraper}>
          <h2 className={styles.investorHeading}>Investors</h2>
          <span className={styles.investorSpan}></span>
          <Slider {...settings}>
            <div className={styles.investorImgDiv}>
              <img src={one} alt="" className={styles.investorImg} />
            </div>

            <div className={styles.investorImgDiv}>
              <img src={two} alt="" className={styles.investorImg} />
            </div>

            <div className={styles.investorImgDiv}>
              <img src={three} alt="" className={styles.investorImg} />
            </div>

            <div className={styles.investorImgDiv}>
              <img src={four} alt="" className={styles.investorImg} />
            </div>

            <div className={styles.investorImgDiv}>
              <img src={five} alt="" className={styles.investorImg} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
