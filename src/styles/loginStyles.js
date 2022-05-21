import { Link } from "react-router-dom";
import styled from "styled-components";

export const Btn = styled.button`
  color: #fff;
  cursor: pointer;
  height: 56px;
  width: 180px;
  border-radius: 20px;
  background: #1137fe;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0em;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

export const LoginContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh !important;
  padding: 30px;
  width: 100% !important;

  .left-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .left-container .logo {
    height: 200px;
    width: 200px;
    border-radius: 0px;
  }

  .left-container .left_para_contain {
    width: 430px;
  }

  .left-container .para {
    font-family: Playfair Display;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }

  .left-container .para span {
    font-weight: 600;
  }

  .right-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .right-container .form-contain {
    background-color: rgba(17, 55, 254, 0.7);
    box-shadow: 0px 20px 50px #dbdbdb;
    border-radius: 20px;
    height: fit-content;
    padding: 25px;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 30px;
    height: 100vh;
    width: 100% !important;
    /* flex-direction: column; */

    .left-container {
      height: fit-content;
      margin-bottom: 20px;
    }

    .left-container .logo {
      align-self: center;
      height: 120px;
      width: 120px;
    }

    .left-container .left_para_contain {
      margin: auto auto;
    }

    .left-container .para {
      align-self: center;
      margin: auto auto;
      width: 250px;
      font-family: "Playfair Display";
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
    }
  }
`;

export const Rule = styled.hr`
  margin: 18px auto;
  width: 300px;
  height: 4px;
  background: #f2f2f2;
  border: none;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    margin: 2px auto;
  }
`;

export const ButtonGroup = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 30px 0px;
  width: 471px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled(Link)`
  font-family: Playfair Display;
  text-align: center !important;
  color: #393939;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  width: 230px;
  padding: 10px;
  background: #f2f2f2;
  margin: 0px 5px;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;
