import { Navigate, useLocation } from "react-router-dom";
import useUser from "hooks/useUser";

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  const location = useLocation();

  return (
    <div>
      {user.isAdmin ? (
        children
      ) : (
        <Navigate state={{ from: location.pathname }} to="/blog" />
      )}
    </div>
  );
};

export default ProtectedRoute;
