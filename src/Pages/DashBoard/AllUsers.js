import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../LoginSignup/Loading/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import UserRow from "./UserRow";

const AllUsers = () => {
  // const [deletingDoctor, setDeletingDoctor] = useState(null);
  const [modal, setModal] = useState({});
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://limitless-dusk-82358.herokuapp.com/allusers", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      {modal && (
        <DeleteConfirmModal
          setModal={setModal}
          user={modal}
          refetch={refetch}
        ></DeleteConfirmModal>
      )}
      <h2 className="text-2xl text-orange-600 mt-5 mb-5 font-bold text-center">
        Welcome Make An Admin From Here
      </h2>
      <div className="overflow-x-auto max-w-7xl mx-auto bg-cyan-100 pb-16 pl-10 pt-10 pr-10 rounded">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email Address</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={user._id}
                index={index}
                user={user}
                refetch={refetch}
                setModal={setModal}
                isLoading={isLoading}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
