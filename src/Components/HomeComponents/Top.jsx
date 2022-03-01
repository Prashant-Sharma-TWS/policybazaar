import React from "react";
import { HomeTop } from "../../Elements/Elements";
// import icons from "../../Images/Icons/home-page-icons.svg";

export const Top = () => {
  return (
    <HomeTop>
      <div className="top-viewport">
        <div>
          <h1>
            Let's find you
            <br /> the <b>Best Insurance</b>
          </h1>
          <div>
            <span>
              {/* <img src={icons} alt="" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="37px"
                height="37px"
              >
                <path
                  fill="#776bfd"
                  d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"
                />
              </svg>
              <p>50+ insurers with one of the best prices</p>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="37px"
                height="37px"
              >
                <path
                  fill="#ff9b2c"
                  d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"
                />
              </svg>
              <p>Quick, easy &amp; hassle free</p>
            </span>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://static.pbcdn.in/cdn/images/home-v1/pb-promise-new-1.png"
              alt="akshay"
              width="250px"
            />
          </div>
          <Slider />
        </div>
      </div>
    </HomeTop>
  );
};

const Slider = () => {
  return (
    <div className="slider-parent">
      <div className="slider-child">1</div>
      <div className="slider-child">2</div>
      <div className="slider-child">3</div>
    </div>
  );
};