import styled from "styled-components";

export const FormContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  .image-contain {
    border-radius: 50%;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    overflow: hidden;
  }

  .image-contain img {
    height: 100%;
    width: 100%;
  }
`;

export const Form = styled.form`
  background-color: white;
  /* box-shadow: 4px 4px 3px 0px rgba(0, 0, 0, 0.05); */
  -webkit-box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 0.19);
  max-width: 550px;
  width: 100%;
  padding: 40px;

  h2 {
    color: #000cc0;
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Group = styled.div`
  width: 100%;
  margin: 15px 0px;

  @media screen and (max-width: 768px) {
    margin: 5px 0px;
  }

  label {
    display: block;
    font-weight: 700;
  }

  input,
  input[type="file"],
  select {
    background-color: white;
    border: 1px solid #f4f4f4;
    padding: 10px;
    max-width: 100%;
    width: 100%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  textarea {
    background-color: white;
    border: 1px solid #f4f4f4;
    padding: 10px;
    width: 100%;
    resize: none;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Contain = styled.div`
  align-items: center;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  /* justify-content: space-between; */
`;

export const Button = styled.button`
  color: white;
  cursor: pointer;
  background-color: #000cc0;
  padding: 15px 0px;
  text-align: center;
  width: 100%;
`;
