import React from "react";
import { OurPartners } from "../Components/HomeComponents/OurPartners";
import { PBSection } from "../Components/HomeComponents/PBSection";
import { SecondSlider } from "../Components/HomeComponents/SecondSlider";
import { SliderImage } from "../Components/HomeComponents/SliderImage";
import { Top } from "../Components/HomeComponents/Top";

export const Home = () => {
  return (
    <div>
      <Top />
      <SliderImage />
      <SecondSlider />

      <PBSection />

      <OurPartners />
    </div>
  );
};
