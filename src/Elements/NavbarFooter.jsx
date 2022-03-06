import styled from "styled-components";

export const Error = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const Nav = styled.nav`
  max-width: 1170px;
  width: 85%;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  > div {
    position: fixed;
    width: 100%;
    height: 60px;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    > div {
      width: 85%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  ul {
    width: 55%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;

    li {
      font-size: 15px;
      font-weight: 400;
      position: relative;
      color: #172b4d;
      padding-bottom: 10px;

      :hover {
        cursor: pointer;
        .arrow-down {
          transform: rotate(-135deg);
        }
      }

      .arrow-down {
        width: 8px;
        height: 8px;
        position: absolute;
        top: 30%;
        margin-left: 8px;
        border: solid #0065ff;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        transition: all 0.3s ease-out;
      }
    }

    .drop-down {
      position: absolute;
      top: 40px;
      background: #fff;
      box-shadow: 0 6px 16px rgb(52 105 203 / 16%);
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
      transform: translateY(5px);
      transition: all 0.7s ease;
    }

    .user-icon {
      padding: 2px 28px 4px 10px;
      border: 1px solid #0065ff;
      border-radius: 4px;
    }
    .user {
      width: 220px;
      height: 255px;
      right: 50px;

      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        line-height: 3.8rem;

        li {
          font-size: 16px;
          line-height: 20px;
          margin: 15px 0;
          width: 100%;
          color: #172b4d;
          transition: all 0.1s ease;
        }
      }
    }

    .insurance-products {
      width: 85%;
      height: 150vh;
      left: 7.5%;
      padding: 30px 20px;
      text-align: left;

      > div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        line-height: 3.8rem;

        > ul {
          width: 20%;
          display: flex;
          flex-direction: column;
          align-items: start;
          margin-bottom: 10px;

          > h3 {
            font-size: 14px;
            line-height: 24px;
            font-weight: 500;
            margin: 10px 0 0 0;
            color: #172b4d;
          }

          li {
            position: relative;
            font-size: 14px;
            line-height: 38px;
            display: block;
            width: 100%;
          }
        }
      }
    }

    .renew-your-policy {
      width: 220px;
      height: 255px;
      left: 58%;
      padding: 30px 0;

      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        li {
          font-size: 14px;
          line-height: 38px;
          margin: 10px 0;
          border-bottom: 1px solid #eee;
          width: 100%;
          color: #172b4d;
          transition: all 0.1s ease;
        }
      }
    }

    .support {
      width: 220px;
      left: 72%;
      padding: 30px 0;
      line-height: 0;

      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        li {
          font-size: 14px;
          line-height: 20px;
          margin: 15px 0;
          width: 100%;
          color: #172b4d;
          transition: all 0.1s ease;
        }
      }
    }
  }

  button {
    padding: 6px 10px;
    font-size: 14px;
    border: 1px solid #0065ff;
    border-radius: 8px;
    color: #0065ff;
    background-color: transparent;
    cursor: pointer;
    z-index: 1;
  }

  .hamburger {
    display: none;
  }

  @media screen and (max-width: 750px) {
    ul {
      display: none;
    }
    .hamburger {
      position: absolute;
      right: 6%;
      width: 44px;
      height: 44px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: end;
      padding: 8px 10px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 6px 16px rgb(52 105 203 / 16%);
      cursor: pointer;

      > span {
        display: block;
        height: 2px;
        background-color: #777;
      }
      > span:nth-child(1) {
        width: 26px;
      }
      > span:nth-child(2) {
        width: 20px;
      }
      > span:nth-child(3) {
        width: 26px;
      }
    }
    .show-anime span:nth-child(1) {
      transform: rotate(45deg);
      transition: 0.3s;
      top: 38%;
      position: relative;
    }
    .show-anime span:nth-child(2) {
      transform: scale(0);
      transition: 0.3s;
    }
    .show-anime span:nth-child(3) {
      transform: rotate(-45deg);
      transition: 0.3s;
      top: -30%;
      position: relative;
    }

    .show-anime + div + ul {
      width: 100%;
      height: 90vh;
      background-color: #fff;
      z-index: 100;
      position: fixed;
      top: 60px;
      left: 0;
      padding: 20px 30px 200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: start;
      transition: all 0.5s ease-in-out;
    }
  }
`;

export const PageFooter = styled.footer`
  padding: 50px 0;
  color: #ffffff;
  background-color: #03203c;

  > div {
    > div:nth-of-type(1) {
      width: 85%;
      margin: auto;
    }

    div:nth-of-type(1) div:nth-of-type(1) {
      font-size: 24px;
      font-weight: 600;
    }

    .more-products {
      height: 350px;
      line-height: 2rem;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: space-around;
      align-items: stretch;
      margin: 50px 0 20px;

      @media screen and (max-width: 1050px) {
        height: 700px;
      }
      @media screen and (max-width: 570px) {
        height: 1400px;
      }

      > div {
        > p {
          font-size: 16px;
          font-weight: 500;
          margin: 0 0 16px;
        }

        > div p {
          font-size: 14px;
          font-weight: 400;
          padding-left: 5px;
          color: rgb(202, 200, 200);
          cursor: pointer;
        }
      }
    }

    .middle-footer {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      padding: 20px 100px 10px;
      background-color: #10385e;

      > p {
        font-size: 14px;
        margin-right: 5px;
        color: rgb(202, 200, 200);
        cursor: pointer;
      }
    }
  }
`;
