/* eslint-disable react-hooks/exhaustive-deps */
/*  */
import DashboardWrapper from "components/admin/Wrapper";
import useApi from "hooks/useApi";
import { getUsers } from "services/userService";
import { useEffect } from "react";

import LoadingPlaceHolder from "components/common/LoadingPlaceHolder";

const ManageUsers = () => {
  const { data: users, loading, request, setData: setUsers } = useApi(getUsers);

  useEffect(() => {
    request();
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };

  return (
    <DashboardWrapper topText={`View/Manage users.`}>
      {loading ? (
        <>
          <div className="pst-contain">
            <LoadingPlaceHolder extraStyles={{ height: `100%` }} />
          </div>

          <div className="pst-contain">
            <LoadingPlaceHolder extraStyles={{ height: `100%` }} />
          </div>

          <div className="pst-contain">
            <LoadingPlaceHolder extraStyles={{ height: `100%` }} />
          </div>

          <div className="pst-contain">
            <LoadingPlaceHolder extraStyles={{ height: `100%` }} />
          </div>

          <div className="pst-contain">
            <LoadingPlaceHolder extraStyles={{ height: `100%` }} />
          </div>
        </>
      ) : users && users.length > 0 ? (
        users
          .filter((user) => user.name !== `Admin`)
          .map((user) => (
            <div key={user._id}>
              <div className="pst-contain">
                <div className="icon-contain">
                  <i className="fa-solid fa-user"></i>
                </div>

                <p className="pst-title">{user.name}</p>

                <div className="buttons-contain">
                  <button
                    className="btn dlt"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          ))
      ) : (
        <h2>No Users!</h2>
      )}
    </DashboardWrapper>
  );
};

export default ManageUsers;
