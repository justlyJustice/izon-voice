import { Navigate } from "react-router-dom";
import useAdmin from "hooks/useAdmin";

const ProtectedRoute = ({ children }) => {
  const { admin } = useAdmin();

  return <div>{admin ? children : <Navigate to="/home" replace />}</div>;
};

export default ProtectedRoute;
