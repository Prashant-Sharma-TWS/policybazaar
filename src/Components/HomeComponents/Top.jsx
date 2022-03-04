import React from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer, HomeTop } from "../../Elements/Home";
// import icons from "../../Images/Icons/home-page-icons.svg";

export const Top = () => {
  return (
    <HomeTop>
      <div>
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
            <div>
              <img
                src="https://static.pbcdn.in/cdn/images/home-v1/pb-promise-new-1.png"
                alt="akshay"
                width="250px"
              />
            </div>
            <Slider />
          </div>
          <div className="for-slider-left"></div>
          <div className="for-slider-right"></div>
        </div>
        <CardContainer>
          <Card
            title="Term Life Insurance"
            img="https://cdn-icons.flaticon.com/png/128/4436/premium/4436481.png?token=exp=1646168902~hmac=f73b200ea5202a9059e93e92ffe2af75"
            info="Covers covid-19"
          />
          <Card
            title="Health Insurance"
            img="https://cdn-icons.flaticon.com/png/128/4436/premium/4436481.png?token=exp=1646168902~hmac=f73b200ea5202a9059e93e92ffe2af75"
            info="Covers covid-19"
          />
          <Card
            title="Investment Plans"
            img="https://cdn-icons.flaticon.com/png/128/4436/premium/4436481.png?token=exp=1646168902~hmac=f73b200ea5202a9059e93e92ffe2af75"
            info="Covers covid-19"
          />
          <Card
            title="Car Insurance"
            img="https://cdn-icons.flaticon.com/png/128/4436/premium/4436481.png?token=exp=1646168902~hmac=f73b200ea5202a9059e93e92ffe2af75"
            info="Covers covid-19"
          />
          <Card
            title="2 Wheeler Insurance"
            img="https://cdn-icons.flaticon.com/png/128/4436/premium/4436481.png?token=exp=1646168902~hmac=f73b200ea5202a9059e93e92ffe2af75"
            info="Covers covid-19"
          />
          <Card
            title="Family Health Insurance"
            img="https://cdn-icons.flaticon.com/png/128/4436/premium/4436481.png?token=exp=1646168902~hmac=f73b200ea5202a9059e93e92ffe2af75"
            info="Covers covid-19"
          />
          <Card
            title="Guranteed Return Plan"
            img="https://cdn-icons.flaticon.com/png/128/4436/premium/4436481.png?token=exp=1646168902~hmac=f73b200ea5202a9059e93e92ffe2af75"
            info="Covers covid-19"
          />
          <Card
            title="Saral Jeevan Bima"
            img="https://cdn-icons.flaticon.com/png/128/4436/premium/4436481.png?token=exp=1646168902~hmac=f73b200ea5202a9059e93e92ffe2af75"
            info="Covers covid-19"
          />
          <Card
            title="Travel Insurance"
            img="https://cdn-icons.flaticon.com/png/128/4436/premium/4436481.png?token=exp=1646168902~hmac=f73b200ea5202a9059e93e92ffe2af75"
            info="Covers covid-19"
          />
          <Card
            title="Childs Savings Plans"
            img="https://cdn-icons.flaticon.com/png/128/4436/premium/4436481.png?token=exp=1646168902~hmac=f73b200ea5202a9059e93e92ffe2af75"
            info="Covers covid-19"
          />
          <Card
            title="Retirement Plans"
            img="https://cdn-icons.flaticon.com/png/128/4436/premium/4436481.png?token=exp=1646168902~hmac=f73b200ea5202a9059e93e92ffe2af75"
            info="Covers covid-19"
          />
          <Card
            title="Group Health Insurance"
            img="https://cdn-icons.flaticon.com/png/128/4436/premium/4436481.png?token=exp=1646168902~hmac=f73b200ea5202a9059e93e92ffe2af75"
            info="Covers covid-19"
          />
          <Card
            title="1 Cr Health Insurance"
            img="https://cdn-icons.flaticon.com/png/128/4436/premium/4436481.png?token=exp=1646168902~hmac=f73b200ea5202a9059e93e92ffe2af75"
            info="Covers covid-19"
          />
          <Card
            title="Term Life Insurance"
            img="https://cdn-icons.flaticon.com/png/128/4436/premium/4436481.png?token=exp=1646168902~hmac=f73b200ea5202a9059e93e92ffe2af75"
            info="Covers covid-19"
          />
        </CardContainer>
      </div>
    </HomeTop>
  );
};

const Slider = () => {
  return (
    <div className="slider-parent">
      <div className="slider-child">
        <span>Health Insurance</span>
        <h3>Save tax upto ₹ 75,000</h3>
        <p>under sec 80D</p>
        <button>Buy now</button>
      </div>
      <div className="slider-child">
        <span>Investment Plans</span>
        <h3>Save tax upto ₹ 46,800</h3>
        <p>
          under sec 80C &amp; <b>no tax on returns*</b>
        </p>
        <button>Buy now</button>
      </div>
      <div className="slider-child">
        <span>Employee Insurance</span>
        <h3>Custum plans at just</h3>
        <p>
          <b>₹ 57 per employee*</b>
        </p>
        <button>Buy now</button>
      </div>
    </div>
  );
};

const Card = ({ img, title, info }) => {
  const navigate = useNavigate();

  return (
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
  );
};
