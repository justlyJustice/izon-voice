/* eslint-disable react-hooks/exhaustive-deps */
/*  */
import DashboardWrapper from "components/admin/Wrapper";
import useApi from "hooks/useApi";
import { getUsers } from "services/userService";
import { useEffect } from "react";

import LoadingPlaceHolder from "components/common/LoadingPlaceHolder";

const ManageUsers = () => {
  const { data, loading, request } = useApi(getUsers);

  useEffect(() => {
    request();
  }, []);

  const handleDelete = (id) => {};

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
      ) : data && data.users.length > 0 ? (
        data.users
          .filter((user) => user.name !== `Admin`)
          .map((user) => (
            <div>
              <div className="pst-contain" key={user._id}>
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
