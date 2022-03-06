import styled from "styled-components";

export const HomeTop = styled.div`
  max-width: 1170px;
  width: 85%;
  margin: auto;
  > div {
    width: 100%;
    margin: auto;
    .small-screen-top {
      display: none;
    }
    @media screen and (max-width: 750px) {
      div.small-screen-top {
        width: 85%;
        margin: auto;
        padding: 50px 0 20px;
        display: block;
      }
    }
  }

  .top-viewport {
    min-height: 293px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    align-items: center;

    .akshay-slider {
      position: absolute;
      width: 310px;
      height: 400px;
      top: 15%;
      right: 0;
    }

    @media screen and (max-width: 750px) {
      display: none;
    }

    > div:nth-of-type(1) {
      h1 {
        margin: 0 0 25px;
        font-size: 36px;
        font-weight: 400;
        line-height: 3.3rem;
        color: #253858;
      }

      div {
        display: grid;
        grid-template-columns: repeat(2, 40%);
        font-size: 14px;
      }

      div span:nth-of-type(1) {
        display: grid;
        grid-template-columns: 20% 60%;
        align-items: center;
        color: #776bfd;
      }
      div span:nth-of-type(2) {
        display: grid;
        grid-template-columns: 20% 40%;
        grid-template-rows: 60px;
        align-items: center;
        color: #ff9b2c;
      }
    }
    .first-svg {
      width: 30px;
      height: 30px;
      background: url(https://static.pbcdn.in/cdn/images/svg/home-page-icons.svg?v=6)
        0 0;
    }
    .second-svg {
      width: 30px;
      height: 58px;
      background: url(https://static.pbcdn.in/cdn/images/svg/home-page-icons.svg?v=6)
        0 -30px;
    }

    .for-slider-left {
      width: 62%;
      height: 300px;
      position: absolute;
      background-color: #ffffff;
      z-index: -1;
    }
    .for-slider-right {
      width: 7%;
      height: 300px;
      position: absolute;
      right: 0;
      background-color: #ffffff;
      z-index: -1;
    }
    div.akshay-image img {
      width: 250px;
      height: 230px;
    }

    .slider-parent {
      display: flex;
      position: absolute;
      top: 100px;
      left: 20px;
      overflow-x: none;

      .slider-child {
        width: 330px;
        padding: 20px 20px;
        position: absolute;
        background-color: #ffffff;

        > span {
          padding: 5px 11px;
        }
        > h3 {
          margin: 20px 0 8px;
        }
        > p {
          font-size: 16px;
          color: #172b4d;
        }
        > button {
          display: inline-block;
          font-size: 14px;
          font-weight: 500;
          margin-top: 10px;
          padding: 10px 20px;
          text-decoration: none;
          color: #fff;
          background: #0663f6;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }
      }

      .slider-child:nth-of-type(1) {
        z-index: -2;
        left: 1000px;
        animation: slide 15s linear 0s infinite;
        > span,
        h3 {
          color: #19b24d;
        }
        > span {
          background: #e3fcef;
        }
      }
      .slider-child:nth-of-type(2) {
        z-index: -3;
        left: 1000px;
        animation: slide 15s linear 5s infinite;
        > span,
        h3 {
          color: #00a3bf;
        }
        > span {
          background: #e6fcff;
        }
        b {
          color: #ff991f;
        }
      }
      .slider-child:nth-of-type(3) {
        z-index: -4;
        left: 1000px;
        animation: slide 15s linear 10s infinite;
        > span {
          color: #6554c0;
          background: #eae6ff;
        }
        > h3 {
          font-weight: 400;
          color: #172b4d;
        }
        > p {
          font-size: 24px;
        }
      }
      @keyframes slide {
        0% {
          transform: translateX(0px);
        }
        1%,
        30% {
          transform: translateX(-90px);
          z-index: 1;
        }
        30% {
          z-index: -2;
        }
        33%,
        63% {
          transform: translateX(-400px);
          z-index: -2;
        }
        65%,
        100% {
          transform: translateX(-660px);
        }
      }
    }
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 120px);
  justify-content: space-between;
  row-gap: 50px;
  padding: 50px 0;

  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(5, 120px);
  }
  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(4, 120px);
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(3, 120px);
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(3, 120px);
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(2, 120px);
  }

  > .card {
    width: 120px;
    height: 100px;
    position: relative;
    padding: 2px 5px 8px;
    text-align: center;
    color: #253858;
    border: none;
    border-radius: 8px;
    box-shadow: 0 6px 8px rgb(52 105 203 / 16%);
    cursor: pointer;

    div:nth-of-type(1) {
      min-height: 100px;
    }
    img {
      margin: 10px 0 10px;
    }
    p {
      font-size: 12px;
    }
    div:nth-of-type(2) {
      width: 120px;
      height: 40px;
      position: relative;
      top: 0;
      left: 0;
      font-size: 10px;
      font-size: 10px;
      font-weight: 500;
      color: #0065ff;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      background: #edf1f7;
    }
    div:nth-of-type(2)::before {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #0065ff;
      content: "";
      display: inline-block;
      margin-right: 5px;
    }
  }
`;

export const SlideOne = styled.div`
  width: 100%;
  padding: 32px 100px 20px;
  background-color: #f2f7ff;
  overflow: hidden;
  transition: all 1s linear;

  > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    transition: all 1s linear;

    > div {
      margin: 0 3px;
    }
  }

  > div:nth-of-type(2) {
    width: 40px;
    margin: auto;

    span {
      width: 10px;
      height: 10px;
      display: inline-block;
      margin: 5px;
      background-color: #777;
      border-radius: 50%;
      cursor: pointer;
      opacity: 0.45;

      :hover {
        background-color: #2f4efb;
        opacity: 1;
      }
    }
  }
`;

export const Partner = styled.div`
  width: 100%;
  padding: 70px 0;
  background-color: #f7f9ff;

  > div {
    width: 85%;
    margin: auto;
    text-align: center;

    > div {
      margin: 20px 0 0;
    }
  }
`;
