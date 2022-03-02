import React from "react";
import { OurPartners } from "../Components/HomeComponents/OurPartners";
import { SliderImage } from "../Components/HomeComponents/SliderImage";
import { Top } from "../Components/HomeComponents/Top";

export const Home = () => {
  return (
    <div>
      <Top />
      <SliderImage />
      <OurPartners />
    </div>
  );
};
