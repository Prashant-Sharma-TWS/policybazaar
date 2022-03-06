import imageOne from "../../Images/home/akshay1.png";
import imageTwo from "../../Images/home/akshay2.png";
import imageThree from "../../Images/home/akshay3.png";
import React, { Component } from "react";
import Slider from "react-slick";

export class Akshay extends Component {
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
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
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
