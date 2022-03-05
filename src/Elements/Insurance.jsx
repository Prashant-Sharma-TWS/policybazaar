import styled from "styled-components";

export const InsuranceCard = styled.div`
  padding: 20px 0 40px;
  background-color: #eee;

  @media screen and (max-width: 750px) {
    padding: 0px 0 0px;
    background-color: #fff;
    > div.insurance-div {
      width: 100%;
      margin: 0 auto;
      padding: 20px 0 40px;
      position: relative;
      display: flex;
      justify-content: space-between;
      color: #212529;
      background: #fff;
      box-shadow: 0 1px 30px rgb(0 0 0 / 30%);
      border-top: 1px solid #ddd;
      border-radius: 0px;

      > div:nth-of-type(1) {
        display: none;
      }
      > div:nth-of-type(2).second-div-insurance {
        width: 85%;
        margin: auto;
        padding: 0px 0px 0px 0px;
      }
    }
  }

  > div {
    width: 85%;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    color: #212529;
    background: #fff;
    box-shadow: 0 1px 30px rgb(0 0 0 / 30%);
    border-radius: 20px;

    > div:nth-of-type(1) {
      position: relative;
      height: 560px;
      background: #e1edf4;
      border-radius: 0 33% 100% 0/51% 43% 59% 26%;
      width: 40%;
      border-top-left-radius: 20px;
      line-height: 1.5;
      color: #212529;
      padding: 30px 0 0 40px;
    }
    > div:nth-of-type(2) {
      text-align: center;
      padding: 0 130px 0 0;

      h1 {
        padding: 20px 0 0;
        font-size: 25px;
        font-weight: 400;
        > b {
          color: #0b6bff;
        }
      }
      h2 {
        font-size: 14px;
        padding: 2px 0 0;
        font-weight: 500;
      }
      h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        li {
          list-style-type: disc;
          font-size: 15px;
          color: #16b1a2;
          font-weight: 400;
          margin: 0 10px;
        }
      }

      .form-input {
        margin-top: 30px;

        > div:nth-of-type(1) {
          display: grid;
          grid-template-columns: repeat(2, 47%);
          justify-content: space-between;
          align-items: center;
          margin: 0 0 15px;

          .male,
          .female {
            width: 100%;
            height: 55px;
            display: block;
            position: relative;
            color: #253858;
            font-size: 16px;
            font-weight: 400;
            border-radius: 8px;
            border: 1px solid #5e6c84;
            line-height: 52px;
            cursor: pointer;
            background-color: orange;

            input {
              position: absolute;
              right: 10px;
              top: 0px;
              width: 15px;
              height: 15px;
              border: solid #fff;
              border-width: 0 1px 1px 0;
              transform: rotate(45deg);
              cursor: pointer;
            }
          }
          .male:hover,
          .female:hover {
            border: 1px solid #0065ff;
          }
          .male {
            background: url(https://static.pbcdn.in/term-cdn/images/images/psprite-icon.svg)
              no-repeat;
            background-position: 50px -178px;
            background-size: 90px;
            padding-left: 42px;
          }
          .female {
            background: url(https://static.pbcdn.in/term-cdn/images/images/psprite-icon.svg)
              no-repeat;
            background-position: 44px -217px;
            background-size: 82px;
            padding-left: 46px;
          }
        }

        > div {
          position: relative;

          label {
            position: absolute;
            left: 20px;
            padding: 0 5px;
            font-size: 14px;
            font-weight: 400;
            color: #5e6c84;
            background-color: white;
          }

          input {
            width: 100%;
            margin: 12px 0;
            padding: 5px 16px;
            font-size: 17px;
            font-weight: 500;
            line-height: 46px;
            border: 1px solid #777;
            border-radius: 8px;

            :focus {
              outline: none;
            }
          }
        }

        button {
          width: 100%;
          height: 50px;
          display: block;
          line-height: 46px;
          border-radius: 8px;
          overflow: hidden;
          text-align: center;
          border: 1px solid;
          font-size: 20px;
          font-weight: 400;
          color: #fff;
          background: #fd4705;
          margin: 10px 0 16px;
          > .right-arrow {
            margin-left: 10px;
            transform: rotate(225deg);
          }
        }
        p {
          width: 325px;
          height: 26px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 12px 0 10px 40px;
          font-size: 12px;
          font-weight: 500;
          line-height: 16px;
          color: rgba(37, 56, 88, 0.7);
          background: rgba(22, 177, 162, 0.10196078431372549);
          border-radius: 8px;

          > img {
            margin-right: 5px;
          }
        }
      }
    }
  }
`;
