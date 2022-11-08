import styled from "styled-components";

const IconDiv = styled.div`
  align-items: center;
  background: #c4c4c4;
  border-radius: 50%;
  display: flex;
  height: 59px;
  justify-content: center;
  width: 59px;

  i {
    color: #393939;
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
  }
`;

const CustomIcon = ({ name = "user", ...otherProps }) => {
  return (
    <IconDiv {...otherProps}>
      <i className={`fa fa-${name}`}></i>
    </IconDiv>
  );
};

export default CustomIcon;
