import { Navigate, useLocation } from "react-router-dom";
import useUser from "hooks/useUser";

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  const location = useLocation();

  return (
    <div>
      {user.email === "admin@izonvoice.ng" ? (
        children
      ) : (
        <Navigate state={{ from: location.pathname }} to="/home" />
      )}
    </div>
  );
};

export default ProtectedRoute;
