import React, { useState } from "react";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageUser = () => {
  // const [disable, setDisable] = useState(false);
  // const [disableAdmin, setDisableAdmin] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  console.log(users);
  const makeInstructor = (user) =>{
    axiosSecure.patch(`/users/instructor/${user._id}`)
    .then(data =>{
      console.log(data.data)
      refetch();
    })
  }
  const makeAdmin = user =>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(data =>{
      console.log(data.data)
      refetch();
    })
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, i) => 
              <tr key={user._id}>
                <th>{i+1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user?.role ? user.role : 'Student'}</td>
                <th>
                  <div className="flex gap-3">
                    <button
                      onClick={()=>makeInstructor(user)}
                      disabled={user?.role ==='Instructor'}
                      className="btn bg-green-300 btn-xs"
                    >
                      Make Instructor
                    </button>
                    <button
                      onClick={() => makeAdmin(user)}
                      disabled={user?.role ==='Admin'}
                      className="btn bg-green-300 btn-xs"
                    >
                      Make Admin
                    </button>
                  </div>
                </th>
              </tr>
            )}
            {/* <tr>
              <th>1</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>refat@gmail.com</td>
              <td>Student</td>
              <th>
                <div className="flex gap-3">
                <button onClick={() =>setDisable(true)} disabled={disable} className="btn bg-green-300 btn-xs">Make Instructor</button>
                <button onClick={() =>setDisableAdmin(true)} disabled={disableAdmin} className="btn bg-green-300 btn-xs">Make Admin</button>
                </div>
              </th>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
