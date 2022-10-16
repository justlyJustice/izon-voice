import { createContext, useState } from "react";

import auth from "services/authService";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(auth.adminUser);

  return (
    <AdminContext.Provider value={[admin, setAdmin]}>
      {children}
    </AdminContext.Provider>
  );
};
