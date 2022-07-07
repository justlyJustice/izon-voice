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
  max-width: 500px;
  width: 100%;
  padding: 30px;

  .header hr {
    outline: 1.2px solid #1c1a1a;
    width: 200px;
    margin: 8px 0;
  }

  h2 {
    color: #1c1a1a;
    font-size: 28px;
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 10px 3px;

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
    width: 100%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  input[type="file"] {
    font-size: x-small;
    height: initial;
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
  grid-template-columns: 1fr 1fr;
  /*  align-items: center;
  display: flex;
  justify-content: space-between; */

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  /* justify-content: space-between; */
`;

export const Button = styled.button`
  color: white;
  cursor: pointer;
  background-color: #000cc0;
  font-size: 12px;
  font-weight: 800;
  padding: 12px 0px;
  text-align: center;
  text-transform: uppercase;
  width: 30%;
`;
