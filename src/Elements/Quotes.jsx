import styled from "styled-components";

export const QuoteCard = styled.div`
  > div:nth-of-type(1) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    opacity: 0.8;
    background-color: #000;
    overflow-x: hidden;
    overflow-y: auto;
  }

  > div:nth-of-type(2) {
    width: 620px;
    min-height: 350px;
    position: fixed;
    top: 20%;
    left: 50%;
    margin: auto;
    margin-left: -310px;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    color: #212529;
    background-color: #fff;
    z-index: 15;
    border-radius: 10px;
    animation: fade-in-backdrop 0.5s linear forwards;
    @keyframes fade-in-backdrop {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 0.95;
      }
    }

    > p {
      font-size: 13px;
      padding: 30px 0 0;
    }
    > p + div {
      width: 100%;
      height: 1px;
      border-bottom: 1px dashed #ddd;
    }
    > h3 {
      font-size: 26px;
      font-weight: 700;
      padding: 20px 0 5px;
    }
    > h5 {
      font-size: 12px;
      font-weight: 500;
      margin: 0 0 30px;
      > b {
        color: #0652dd;
      }
    }

    .four-left-list {
      width: 300px;
      margin: 5px auto 10px;
      display: flex;
      flex-direction: column;
      line-height: 2.5em;
      text-align: left;

      li {
        border-radius: 2px;
        box-shadow: 0 2px 4px 0 hsl(0deg 0% 79% / 50%);
        border: 1px solid #e2e2e2;
        background-color: #fff;
        font-size: 16px;
        padding-left: 15px;

        input {
          cursor: pointer;
          margin-right: 15px;
        }
      }
    }

    button {
      outline: 0;
      height: 56px;
      font-size: 26px;
      font-weight: 400;
      background: #fff;
      color: #252733;
      min-width: 108px;
      padding: 8px 20px;
      margin: 0 6px;
      cursor: pointer;
      border: 1px solid #252733;
      border-radius: 3px;
      margin-bottom: 10px;

      :hover {
        border-color: #1b98f5;
      }
    }
  }
`;

export const QuoteCompany = styled.div`
  border-top: 1px solid;
  > div {
    width: 85%;
    margin: auto;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.5;
    color: #253858;

    > div:nth-of-type(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      b {
        color: #0078fd;
      }
      input {
        margin-right: 5px;
      }
      > p,
      > p > p {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      > p:nth-of-type(3) {
        position: relative;
        width: 160px;
        padding-top: 10px;
        > input {
          border: 1px solid #fca220;
        }

        > p {
          padding: 5px 30px 5px 10px;
          color: #fca220;
          border: 1px solid #fca220;
          border-radius: 3px;
        }
        > b:nth-of-type(1) {
          z-index: 1;
        }
        > b {
          width: 48px;
          height: 46px;
          display: flex;
          justify-content: center;
          position: absolute;
          top: 0px;
          right: 8px;
          align-items: center;
          color: white;
        }
        .rotate-five {
          background: url(https://termlife.policybazaar.com/save-upto.df2f3d1d47ca4d9b0688.svg);
          animation: rotate 4s linear infinite;

          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        }
      }
    }
  }
`;
