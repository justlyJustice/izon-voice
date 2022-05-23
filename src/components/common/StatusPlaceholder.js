import styled from "styled-components";

const Error = styled.div`
  background-color: rgba(234, 25, 25, 0.7);
  border-radius: 10px;
  margin-bottom: 14px;
  padding: 15px;

  p {
    color: white;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
  }
`;

const Success = styled.div`
  background-color: rgba(66, 232, 39, 0.7);
  border-radius: 10px;
  margin-bottom: 14px;
  padding: 15px;

  p {
    color: white;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
  }
`;

const StatusPlaceholder = ({ error, success }) => {
  return (
    <>
      {success ? (
        <Success>
          <p>Success!</p>
        </Success>
      ) : null}

      {error ? (
        <Error>
          <p>Failed!</p>
        </Error>
      ) : null}
    </>
  );
};

export default StatusPlaceholder;
