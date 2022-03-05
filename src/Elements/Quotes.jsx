import styled from "styled-components";

export const QuoteCard = styled.div`
  > div:nth-of-type(1) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 180;
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
    z-index: 200;
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
  border-top: 1px solid #ddd;
  background-color: #eee;

  > div:nth-of-type(1) {
    background-color: #ddd;
    margin: 0 0 15px;

    > div {
      width: 85%;
      margin: auto;
      font-size: 13px;
      font-weight: 500;
      line-height: 1.5;
      color: #253858;
      padding: 5px 0 10px;
      display: grid;
      grid-template-columns: 32% 32% 13%;
      justify-content: space-between;
      align-items: center;

      b {
        margin-left: 5px;
        color: #0078fd;
      }
      input {
        margin-right: 5px;
      }
      > div,
      > div > p {
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

  > div:nth-of-type(2) {
    width: 85%;
    margin: auto;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.5;
    color: #253858;

    @media screen and (max-width: 750px) {
      > div.company-details {
        grid-template-columns: 100%;
      }
    }

    > div {
      display: grid;
      grid-template-columns: 69% 28%;
      justify-content: space-between;

      .filters {
        position: relative;
        width: 100%;
        padding: 10px 10px;
        border-radius: 8px;
        display: grid;
        grid-template-columns: 20% 1px 17% 1px 19% 1px 15% 1px 25%;
        justify-content: space-around;
        text-align: center;
        font-size: 11px;
        background: #8294a6;

        .line-in-middle {
          width: 1px;
          height: 85%;
          background-color: #777;
        }

        > li {
          display: flex;
          justify-content: space-around;
          color: #eee;
          font-size: 11px;
          font-weight: 500;
        }

        .search-by-name {
          input,
          input:focus {
            border: none;
            outline: none;
            padding: 3px 8px;
            color: white;
            background-color: transparent;
            border-bottom: 1px solid lightblue;

            ::placeholder {
              color: white;
            }
          }
        }
        .filter-by-rupee,
        .filter-by-age {
          display: flex;
          justify-content: space-around;
          align-items: center;
          .form-select {
            display: block;
            width: 80px;
            padding: 0rem 0rem 0rem 1rem;
            font-size: 12px;
            line-height: 1.4;
            color: white;
            background-color: #8294a6;
            background-position: right 0.75rem center;
            background-size: 10px 10px;
            border: none;
          }
        }
        .filter-by-claim {
          button {
            color: white;
            background-color: transparent;
            border: none;
          }
        }
        .toggle {
          .switch {
            position: relative;
            display: inline-block;
            width: 20px;
            height: 12px;
            input {
              opacity: 0;
              width: 0;
              height: 0;
            }

            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: #ccc;
              transition: 0.4s;
            }
            .slider:before {
              position: absolute;
              content: "";
              height: 5px;
              width: 5px;
              left: 4px;
              bottom: 4px;
              background-color: white;
              -webkit-transition: 0.4s;
              transition: 0.4s;
            }
            input:checked + .slider {
              background-color: #2196f3;
            }
            input:focus + .slider {
              box-shadow: 0 0 1px #2196f3;
            }
            input:checked + .slider:before {
              transform: translateX(8px);
            }
            .slider.round {
              border-radius: 5px;
            }
            .slider.round:before {
              border-radius: 50%;
            }
          }
        }

        .save-with-yearly {
          background: url(https://termlife.policybazaar.com/price.b579aa467da2438c3944.png);
          position: absolute;
          width: 110px;
          height: 24px;
          background-size: contain;
          left: 98%;
          padding-left: 41px;
          color: #15b5a5;
          font-weight: 600;
          line-height: 15px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .list-of-company {
        font-size: 13px;
        font-weight: 500;
        line-height: 1.5;
        color: #212529;
        padding-bottom: 50px;

        > ul {
          display: grid;
          grid-template-columns: 20% 1px 17% 1px 17% 1px 17% 1px 24%;
          justify-content: space-between;
          text-align: center;
          margin: 10px 0;
          line-height: 1.5;
          color: #212529;
          border-radius: 10px;
          background: #fff;

          @media screen and (max-width: 750px) {
            grid-template-columns: 20% 1px 17% 1px 40%;
            height: 150px;

            .lac,
            .yrs,
            .lac + .line-in-middle,
            .yrs + .line-in-middle {
              display: none;
            }
            > li:nth-of-type(9).last-wala {
              > div {
                top: 78%;
                right: 0;
                left: -15%;
                width: 150px;

                > p:nth-of-type(1) {
                  font-size: 10px;
                  padding: 1px 8px 2px;
                }
                > p:nth-of-type(2) {
                  font-size: 9px;
                }
              }

              > button {
                top: 30%;
                left: 0%;
                min-width: 80px;

                > i {
                  top: 45%;
                  left: 68%;
                  width: 6px;
                  height: 6px;
                }
              }
            }
          }

          .line-in-middle {
            width: 1px;
            height: 85%;
            background-color: #eee;
          }

          > li {
            font-size: 16px;
            padding: 36px 0;
            color: #212529;
          }

          > li:nth-of-type(1) {
            color: #757575;
            font-size: 10px;
            font-weight: 400;
            position: relative;

            > img {
              width: 80%;
            }
            > p {
              margin-top: 6px;
            }
            > p:nth-of-type(2) {
              cursor: pointer;
              position: absolute;
              left: -25%;
              bottom: 4px;
              padding: 2px 0;
              width: 100%;
              font-size: 10px;
              font-weight: 500;
              color: #212529;
            }
          }

          > li:nth-of-type(5) {
            position: relative;

            > p:nth-of-type(2) {
              position: absolute;
              background: #f4f5f7;
              font-size: 10px;
              font-weight: 600;
              top: 82%;
              left: -5%;
              width: 110%;
              text-align: center;
              border-top-left-radius: 30px;
              border-top-right-radius: 30px;
              height: 20px;
              color: #253858;

              > img {
                width: 14px;
                margin-right: 3px;
              }
            }
          }

          > li:nth-of-type(9) {
            position: relative;
            padding: 0px;

            > div {
              position: absolute;
              top: 0;
              right: 0;
              left: 20%;
              width: 80%;
              border-radius: 0 8px 0 8px;
              background: #f9ebeb;

              > p:nth-of-type(1) {
                border: 1px solid rgba(243, 80, 35, 0.2);
                border-top: 0;
                border-right: 0;
                color: red;
                font-weight: 500;
                font-size: 11px;
                padding: 1px 8px 2px;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              > p:nth-of-type(2) {
                font-weight: 500;
                border: 1px solid rgba(243, 80, 35, 0.2);
                border-radius: 0 0 0 8px;
                background: #fff;
                font-size: 10px;
                border-top: 0;
                border-right: 0;
                color: rgba(37, 56, 88, 0.9);
              }
            }

            > button {
              transition: all 0.4s ease;
              overflow: hidden;
              margin-top: 0;
              position: relative;
              top: 38%;
              font-size: 12px;
              background: #f35023;
              line-height: 36px;
              color: #fff;
              border: 0;
              border-radius: 3px;
              min-width: 140px;
              cursor: pointer;
              height: 36px;
              text-align: center;
              padding: 0 18px 0 5px;
              transition-property: all;
              transition-duration: 0.6s;
              transition-timing-function: ease;

              > i {
                position: absolute;
                pointer-events: none;
                content: "";
                top: 38%;
                left: 65%;
                width: 8px;
                height: 8px;
                border-width: 2px;
                border-style: solid;
                border-bottom: transparent;
                border-left: transparent;
                transform: rotate(40deg);
              }
            }
          }
        }
      }
    }

    .sidebar-images {
      padding-top: 50px;
    }
  }

  .reset-companies {
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
`;

export const PaymentDiv = styled.div`
  width: 100%;
  line-height: 1.5;
  color: #212529;
  background-color: #fafafa;

  > div {
    width: 85%;
    margin: auto;
    padding: 20px 0 40px;
    display: grid;
    grid-template-columns: 33% 65%;
    justify-content: space-between;

    .payment-left-sidebar {
      background-color: #fff;
      box-shadow: 0 0 6px 0 rgb(76 90 111 / 17%);

      > div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 40% 20px 20px;
        border-bottom: 1px solid #ddd;

        > img {
          width: 100px;
        }
        > p {
          font-size: 14px;
          font-weight: 600;
          line-height: 1.5;
          color: #27313d;
        }
      }

      > div:nth-of-type(2) {
        padding: 30px 40px 20px;

        label {
          font-size: 11px;
          font-weight: 500;
        }
      }
    }

    .payment-right-sidebar {
      background-color: #fff;
      box-shadow: 0 0 6px 0 rgb(76 90 111 / 17%);

      > div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 50px 14px 40px;
        border-bottom: 1px solid #ddd;
        color: #b2b2b2;
        font-weight: 600;
        font-size: 14px;

        .line-in-middle {
          width: 20%;
          height: 1px;
          background-color: #ddd;
        }
      }

      > div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        padding: 50px 140px 0px 140px;

        label {
          font-size: 11px;
          font-weight: 500;
          color: #4c5a6f;
        }
        input {
          border: 0;
          padding: 7px 0;
          border-bottom: 1px solid #e5e8eb;
          padding-right: 40px;
          background-color: transparent;
          margin-bottom: 40px;

          ::placeholder {
            font-size: 16px;
            font-weight: 600;
          }
        }
        input:focus {
          outline: none;
          border-bottom: 1px solid #1b98f5;
        }
      }
      > div:nth-of-type(3) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px 50px;
        font-size: 16px;
        color: #27313d;
        b {
          font-size: 20px;
          font-weight: 600;
          line-height: 1.18;
        }
      }
      .btn-primary {
        color: #fff;
        background-color: #fd4704;
        border-color: #fd4704;
        border: none;
        padding: 11px 40px;
        font-size: 16px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        border-radius: 5px;
      }
    }
    .select-label {
      position: relative;
      font-size: 16px;
      padding: 0;
      display: flex;
      width: 100%;
      height: 40px;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #ddd;
      margin-bottom: 10px;
      font-weight: 600;
      color: #27313d;
      padding-right: 20px;
      cursor: pointer;
    }
  }
`;
