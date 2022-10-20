/* eslint-disable react-hooks/exhaustive-deps */
/*  */
/* eslint-disable no-unused-vars */
import { toast } from "react-toastify";

import DashboardWrapper from "components/admin/Wrapper";
import useApi from "hooks/useApi";
import { getUsers } from "services/userService";
import { useEffect } from "react";
import LoadingAnimation from "components/common/LoadingAnimation";

const ManageUsers = () => {
  const { loading, data, request } = useApi(getUsers);

  useEffect(() => {
    request();
  }, []);

  const handleDelete = (id) => {};

  const handleEdit = (id) => {
    console.log(id);
  };

  if (loading) return <LoadingAnimation loading={loading} />;

  return (
    <DashboardWrapper topText={`Manage existing .`}>
      {data &&
        data.users.length > 0 &&
        data.users.map((user) => (
          <div className="pst-contain" key={user._id}>
            <div className="icon-contain">
              <i className="fa-solid fa-user"></i>
            </div>

            <p className="pst-title">{user.name}</p>

            <div className="buttons-contain">
              <button className="btn edit">
                Edit <i className="fa-solid fa-edit"></i>
              </button>

              <button
                className="btn dlt"
                onClick={() => handleDelete(user._id)}
              >
                Delete <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
    </DashboardWrapper>
  );
};

export default ManageUsers;
