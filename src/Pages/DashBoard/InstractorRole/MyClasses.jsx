import React, { useContext } from "react";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: myClasses = [], refetch } = useQuery(
    ["myClasses"],
    async () => {
      const res = await axiosSecure.get(`/classes/myClasses/${user?.email}`);
      return res.data;
    }
  );
  // console.log(myClasses);
  return (
    <div className="my-8">
      <h1 className="font-semibold text-4xl text-center">My Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {myClasses.map((cls) => (
          <div
            key={cls._id}
            className="card w-full bg-base-100 shadow-xl border-2 shadow-blue-500/50  "
          >
            <figure className="px-10 pt-10">
              <img src={cls.classImg} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{cls.className}</h2>
              {/* <p>Instructor Email: {cls.email}</p> */}
              <p>Instructor Name: {cls.name}</p>
              <p>Price: ${cls.price}</p>
              <p>Available Seats: {cls.seats}</p>
              <p>Enrolled Students: {cls.enrolled}</p>
              <p>Status: {cls.status}</p>
              {cls?.feedback && <p>Admin Feedback: {cls?.feedback}</p>}
              <div className="card-actions ">
                <Link to={`/dashboard/updateClass/${cls._id}`}>
                  <button className="btn btn-outline btn-info w-full">Update</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
