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
  width: 100%;
  height: 70px;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 5px 100px;
  background-color: #fff;

  ul {
    width: 55%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      font-size: 15px;
      font-weight: 400;
      position: relative;
      color: #172b4d;

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
      top: 44px;
      z-index: -5;
      background: #fff;
      box-shadow: 0 6px 16px rgb(52 105 203 / 16%);
      border-top: 1px solid #f1f1f1;
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
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
          width: 100%;
          font-size: 16px;
          font-weight: 600;
          color: #222;
          transition: all 0.1s ease;
        }
      }

      .nitin {
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
  }
`;

export const PageFooter = styled.footer`
  width: 100%;
  padding-bottom: 100px;
  color: #ffffff;
  background-color: #03203c;

  > div:nth-of-type(1) {
    padding: 50px 100px;
    @media screen and (max-width: 1050px) {
      padding: 0 20%;
    }
    @media screen and (max-width: 770px) {
      padding: 0 8%;
    }
    @media screen and (max-width: 570px) {
      padding: 0 100px;
    }
  }

  div:nth-of-type(1) div:nth-of-type(1) {
    font-size: 24px;
    font-weight: 600;
  }

  .more-products {
    height: 350px;
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
`;
