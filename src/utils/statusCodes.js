const statusCodes = {
  CLIENT_ERROR: "Invalid email/password combination.",
  SERVER_ERROR: "Server Error, Something went wrong try again",
  TIMEOUT_ERROR: "Server didn't respond in time.",
  CONNECTION_ERROR: "Server not available, bad dns.",
  NETWORK_ERROR: "Network not available.",
  CANCEL_ERROR: "Request has been cancelled.",
};

export const getStatus = (name) => {
  return statusCodes[name];
};

export default statusCodes;
