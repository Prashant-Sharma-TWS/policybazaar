import React from "react";
import { CardContainer, HomeTop } from "../../Elements/Elements";
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
  return (
    <div className="card">
      <div>
        <img src={img} alt={title} />
        <p>{title}</p>
      </div>
      <div>{info}</div>
    </div>
  );
};
