import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";

const Classes = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classesAprove"], async () => {
    const res = await axiosSecure.get("/classes/approved");
    return res.data;
  });
  console.log(classes);
  return (
    <div>
      <h1 className="font-bold text-5xl text-center">Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {
            classes.map(cls => <div key={cls._id} className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={cls.classImg} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{cls.className}</h2>
              {/* <p>Instructor Email: {cls.email}</p> */}
              <p>Instructor Name: {cls.name}</p>
              <p>Price: ${cls.price}</p>
              <p>Available Seats: {cls.seats}</p>
              {/* <p>Status: {cls.status}</p> */}
              
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Classes;
