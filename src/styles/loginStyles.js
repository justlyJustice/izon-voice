import { SubmitButton } from "components/forms";
import styled from "styled-components";

export const Btn = styled(SubmitButton)`
  cursor: pointer;
  color: #fff;
  position: absolute;
  width: 180px;
  background: #1137fe;
  border-radius: 10px;
  padding: 15px;
  left: 50%;
  transform: translateX(-50%);
  /*   margin-top: 10px; */
  font-family: "Montserrat";
  font-weight: 800;
  font-size: 18px;
  text-transform: uppercase;
`;

export const SuccessButton = styled.button`
  cursor: pointer;
  color: #fff;
  width: 100%;
  background: #36cd01;
  border-radius: 10px;
  padding: 15px;
  font-family: "Montserrat";
  font-weight: 800;
  font-size: 18px;
  text-transform: uppercase;
`;

export const LoginContainer = styled.section`
  .grid {
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Left Div */
  .left-div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    img {
      margin: 0 20px;
      width: 200px;
      height: 200px;
    }

    .left-para-contain {
      width: 430px;

      .para {
        font-family: "Playfair Display";
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 40px;
      }

      span {
        font-weight: 800;
      }
    }
  }

  /* Right Div */
  .right-div {
    /* height: 320px; */
    /* height: fit-content; */
    flex-direction: column;
    justify-content: space-between;

    .form {
      position: relative;
      padding: 30px;
      background: rgba(17, 55, 254, 0.7);
      box-shadow: 0px 20px 50px #dbdbdb;
      border-radius: 20px;
      width: 100%;
    }

    .right-bottom-div {
      .rule {
        width: 300px;
        height: 4px;
        background: #f2f2f2;
        border-radius: 20px;
        margin: 40px auto;
      }

      .button-group {
        margin: 20px 0;
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 20px;

    .grid {
      grid-template-columns: 1fr;
    }

    .left-div {
      margin: 0 auto;

      img {
        align-self: center;
        width: 100px;
        height: 100px;
      }

      .left-para-contain {
        width: 210px;
        text-align: center;

        .para {
          font-family: "Playfair Display";
          font-style: normal;
          font-size: 15px;
          line-height: 19px;
          text-align: center;
          color: #393939;
        }
      }
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 230px;
  padding: 10px;
  background: #f2f2f2;
  border-radius: 20px;
  text-align: center;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  color: #393939;

  .icon {
    color: #ea1919;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
