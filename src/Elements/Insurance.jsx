import styled from "styled-components";

export const InsuranceCard = styled.div`
  padding: 20px 0 40px;
  background-color: #eee;
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
        }
      }
    }
  }
`;
