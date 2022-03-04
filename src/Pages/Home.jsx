import React from "react";
import { GetApp } from "../Components/HomeComponents/GetApp";
import { OurPartners } from "../Components/HomeComponents/OurPartners";
import { PBSection } from "../Components/HomeComponents/PBSection";
import { SecondSlider } from "../Components/HomeComponents/SecondSlider";
import { SliderImage } from "../Components/HomeComponents/SliderImage";
import { Top } from "../Components/HomeComponents/Top";
import { Investors } from "../Components/HomeComponents/Investors";


export const Home = () => {
  return (
    <div>
      <Top />
      <SliderImage />
      <SecondSlider />
      <PBSection />
      <GetApp />
      <OurPartners />
      <Investors />
    </div>
  );
};
