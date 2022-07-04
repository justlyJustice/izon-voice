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
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
  padding: 30px;

  h2 {
    color: #c4c4c4;
    font-size: 24px;
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
  display: grid;
  grid-template-columns: repeat(1fr, 2);

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
  width: 30%;
`;
