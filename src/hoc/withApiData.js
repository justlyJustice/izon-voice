import useApi from "hooks/useApi";

const withApiData = (Component, apiFunc) => {
  return function WithApiData(props) {
    const apiResponse = useApi(apiFunc);

    return (
      <>
        <Component apiResponse={apiResponse} {...props} />
      </>
    );
  };
};

export default withApiData;
