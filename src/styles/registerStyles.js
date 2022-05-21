import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  height: 100vh;

  .left-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 80px;
  }

  .left-container .logo {
    height: 200px;
    width: 200px;
    border-radius: 0px;
  }

  .left-container .para {
    font-family: Playfair Display;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    width: 430px;
  }

  .right-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .right-container .form-contain {
    height: fit-content;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 20px;
    padding-top: 20px;
    background-color: rgba(17, 55, 254, 0.7);
    box-shadow: 0px 20px 50px #dbdbdb;
  }

  @media only screen and (max-width: 768px) {
    display: block;
    height: 100%;
    padding: 50px;
    background-color: dodgerblue;
  }
`;

export const Rule = styled.hr`
  margin: 18px auto;
  width: 300px;
  height: 4px;
  background: #f2f2f2;
  border: none;
  border-radius: 20px;
`;

export const ButtonGroup = styled.div`
  align-items: center;
  display: flex;
  width: 471px;
  margin: 30px 0px;
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
`;
