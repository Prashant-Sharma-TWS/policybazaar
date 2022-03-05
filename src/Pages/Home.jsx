import React from "react";
import { GetApp } from "../Components/HomeComponents/GetApp";
import { OurPartners } from "../Components/HomeComponents/OurPartners";
import { PBSection } from "../Components/HomeComponents/PBSection";
import { SecondSlider } from "../Components/HomeComponents/SecondSlider";
import { SliderImage } from "../Components/HomeComponents/SliderImage";
import { Top } from "../Components/HomeComponents/Top";
import { Help } from "../Components/HomeComponents/help";
import { Best } from "../Components/HomeComponents/Best";

import { Investors } from "../Components/HomeComponents/Investors";

export const Home = () => {
  return (
    <div>
      <Top />
      <SliderImage />
      <Best />
      <SecondSlider />
      <PBSection />
      <GetApp />
      <OurPartners />
      <Help />
      <Investors />
    </div>
  );
};
