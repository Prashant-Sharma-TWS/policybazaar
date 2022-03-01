import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 100px;
  background-color: #fff;

  ul {
    width: 50%;
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
      width: 87%;
      height: 70vh;
      position: absolute;
      top: 60px;
      z-index: -5;
      display: none;
      background-color: #ddd;
    }
  }
`;

export const HomeTop = styled.div`
  margin: 0 0 10px;
  padding: 0 100px;

  .top-viewport {
    min-height: 293px;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    align-items: center;

    > div:nth-of-type(1) {
      h1 {
        margin: 0 0 20px;
        font-size: 36px;
        font-weight: 400;
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
        color: #776bfd;
      }
      div span:nth-of-type(2) {
        display: grid;
        grid-template-columns: 20% 40%;
        color: #ff9b2c;
      }
    }

    .slider-parent {
      width: 3400px;
      position: absolute;
      background-color: orange;

      .slider-child {
        width: 330px;
        background-color: lightcoral;
      }
    }
  }
`;
