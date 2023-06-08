import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";

const Instructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors = [], refetch } = useQuery(
    ["istructor"],
    async () => {
      const res = await axiosSecure.get("/users/instructor");
      return res.data;
    }
  );
  console.log(instructors);
  return (
    <div>
      <h1 className="font-bold text-5xl text-center">Instructors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {
            instructors.map(inst => <div key={inst._id} className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={inst.photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{inst.name}</h2>
              <p>{inst.email}</p>
              
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Instructors;
