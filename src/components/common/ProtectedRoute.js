import { Navigate } from "react-router-dom";

import useAuth from "hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  return (
    <div>
      {user &&
      (user.email === `admin@izonvoice.ng` ||
        user.email === `admin.local@izonvoice.ng`) ? (
        children
      ) : (
        <Navigate to="/auth/admin" replace />
      )}
    </div>
  );
};

export default ProtectedRoute;
