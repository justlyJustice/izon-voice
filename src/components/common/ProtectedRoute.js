import { Navigate } from "react-router-dom";

import useAuth from "hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  return (
    <div>
      {user && user.email === `admin@izonvoice.ng` ? (
        children
      ) : (
        <Navigate to="/home" replace />
      )}
    </div>
  );
};

export default ProtectedRoute;
