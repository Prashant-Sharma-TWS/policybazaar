import React from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer, HomeTop } from "../../Elements/Home";
import img1 from "../../Images/home/img1.png";
import img2 from "../../Images/home/img2.png";
import img3 from "../../Images/home/img3.png";
import img4 from "../../Images/home/img4.png";
import img5 from "../../Images/home/img5.png";
import img6 from "../../Images/home/img6.png";
import img7 from "../../Images/home/img7.png";
import img8 from "../../Images/home/img8.png";
import img9 from "../../Images/home/img9.png";
import img10 from "../../Images/home/img10.png";
import img11 from "../../Images/home/img11.png";
import img12 from "../../Images/home/img12.png";
import img13 from "../../Images/home/img13.png";
import img14 from "../../Images/home/img14.png";
import { SmallScreen } from "./SmallScreen";
import { Akshay } from "./Akshay";

export const Top = () => {
  return (
    <HomeTop>
      <div>
        <div className="small-screen-top">
          <SmallScreen />
        </div>
        <div className="top-viewport">
          <div>
            <h1>
              Let's find you
              <br /> the <b>Best Insurance</b>
            </h1>
            <div>
              <span>
                <i className="first-svg"></i>
                <p>50+ insurers with one of the best prices</p>
              </span>
              <span>
                <i className="second-svg"></i>
                <p>Quick, easy &amp; hassle free</p>
              </span>
            </div>
          </div>
          <div>
            <div className="akshay-image">
              <img
                src="https://static.pbcdn.in/cdn/images/home-v1/pb-promise-new-1.png"
                alt="akshay"
                width="250px"
                height="230px"
              />
            </div>
            {/* <Slider /> */}
            <div className="akshay-slider">
              <Akshay />
            </div>
          </div>
          <div className="for-slider-left"></div>
          <div className="for-slider-right"></div>
        </div>
        <CardContainer>
          <Card title="Term Life Insurance" img={img1} info="Covers covid-19" />
          <Card title="Health Insurance" img={img2} info="Covers covid-19" />
          <Card title="Investment Plans" img={img3} info="Covers covid-19" />
          <Card title="Car Insurance" img={img4} info="Covers covid-19" />
          <Card title="2 Wheeler Insurance" img={img5} info="Covers covid-19" />
          <Card
            title="Family Health Insurance"
            img={img6}
            info="Covers covid-19"
          />
          <Card
            title="Guranteed Return Plan"
            img={img7}
            info="Covers covid-19"
          />
          <Card title="Saral Jeevan Bima" img={img8} info="Covers covid-19" />
          <Card title="Travel Insurance" img={img9} info="Covers covid-19" />
          <Card
            title="Childs Savings Plans"
            img={img10}
            info="Covers covid-19"
          />
          <Card title="Retirement Plans" img={img11} info="Covers covid-19" />
          <Card
            title="Group Health Insurance"
            img={img12}
            info="Covers covid-19"
          />
          <Card
            title="1 Cr Health Insurance"
            img={img13}
            info="Covers covid-19"
          />
          <Card title="View All Products" img={img14} info="Covers covid-19" />
        </CardContainer>
      </div>
    </HomeTop>
  );
};

// const Slider = () => {
//   return (
//     <div className="slider-parent">
//       <div className="slider-child">
//         <span>Health Insurance</span>
//         <h3>Save tax upto ₹ 75,000</h3>
//         <p>under sec 80D</p>
//         <button>Buy now</button>
//       </div>
//       <div className="slider-child">
//         <span>Investment Plans</span>
//         <h3>Save tax upto ₹ 46,800</h3>
//         <p>
//           under sec 80C &amp; <b>no tax on returns*</b>
//         </p>
//         <button>Buy now</button>
//       </div>
//       <div className="slider-child">
//         <span>Employee Insurance</span>
//         <h3>Custum plans at just</h3>
//         <p>
//           <b>₹ 57 per employee*</b>
//         </p>
//         <button>Buy now</button>
//       </div>
//     </div>
//   );
// };

const Card = ({ img, title, info }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="card"
        onClick={() => {
          navigate(`/policybazaar/${title}`);
        }}
      >
        <div>
          <img src={img} alt={title} />
          <p>{title}</p>
        </div>
        <div>{info}</div>
      </div>
    </>
  );
};
