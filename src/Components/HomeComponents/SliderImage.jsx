import React from "react";
import { SlideOne } from "../../Elements/Home";
import imageOne from "../../Images/slide-image-1.png";
import imageTwo from "../../Images/slide-image-2.png";
import imageThree from "../../Images/slide-image-3.png";
import imageFour from "../../Images/slide-image-4.png";

export const SliderImage = () => {
  const prev = () => {
    const parent = document.getElementById("slide-img-one");
    const childs = document.getElementsByClassName("slide-img-one-child");

    parent.prepend(childs[childs.length - 1]);
  };
  const next = () => {
    const parent = document.getElementById("slide-img-one");
    const childs = document.getElementsByClassName("slide-img-one-child");

    parent.append(childs[0]);
  };

  return (
    <SlideOne>
      <div id="slide-img-one">
        <div className="slide-img-one-child">
          <img src={imageOne} alt="slideimg1" />
        </div>
        <div className="slide-img-one-child">
          <img src={imageTwo} alt="slideimg2" />
        </div>
        <div className="slide-img-one-child">
          <img src={imageThree} alt="slideimg3" />
        </div>
        <div className="slide-img-one-child">
          <img src={imageFour} alt="slideimg4" />
        </div>
      </div>
      <div>
        <span onClick={prev}></span>
        <span onClick={next}></span>
      </div>
    </SlideOne>
  );
};
