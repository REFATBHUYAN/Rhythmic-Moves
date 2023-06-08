import React, { useContext } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const SelecedClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: selectedCls = [], refetch } = useQuery(
    ["selectedClass"],
    async () => {
      const res = await axiosSecure.get(`/selectClasses/${user?.email}`);
      return res.data;
    }
  );
  console.log(selectedCls);
  return (
    <div>
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-3xl">Total Items: {selectedCls.length}</h3>
        <h3 className="text-3xl">Total Price: ${total}</h3>
        <Link to="/dashboard/payment">
          <button className="btn btn-warning btn-sm">PAY</button>
        </Link>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {selectedCls.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.classImg}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{user.className}</td>
                  <td>{user?.price}</td>
                  <th>
                    <div className="flex gap-3">
                      <button
                        //   onClick={()=>makeInstructor(user)}
                        //   disabled={user?.role ==='Instructor'}
                        className="btn bg-green-300 btn-xs"
                      >
                        Pay
                      </button>
                      <button
                        //   onClick={() => makeAdmin(user)}
                        //   disabled={user?.role ==='Admin'}
                        className="btn bg-green-300 btn-xs"
                      >
                        Delete
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SelecedClasses;
