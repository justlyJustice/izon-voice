import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";

const useAdmin = () => {
  const [admin, setAdmin] = useContext(AdminContext);

  return { admin, setAdmin };
};

export default useAdmin;
