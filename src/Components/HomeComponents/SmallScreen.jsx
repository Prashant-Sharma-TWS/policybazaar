import imageOne from "../../Images/home/health-tax-saving-1.webp";
import imageTwo from "../../Images/home/investment-tax-saving-1.webp";
import imageThree from "../../Images/home/employee-insurance-plans.webp";
import React, { Component } from "react";
import Slider from "react-slick";

export class SmallScreen extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
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
      <div>
        <Slider {...settings}>
          <div>
            <img src={imageOne} alt="" />
          </div>

          <div>
            <img src={imageTwo} alt="" />
          </div>

          <div>
            <img src={imageThree} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
