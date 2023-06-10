import React, { useState } from "react";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [status, setStatus] = useState("");
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

    console.log(classes);
    const handleStatus = (item) => {
      console.log(item);
      const newStatus = {status: 'Approved'};
      axiosSecure.patch(`/classes/${item._id}`, newStatus)
      .then(data =>{
          console.log(data.data)
          refetch()
          if(data.data.modifiedCount>0){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Approval Approved",
                showConfirmButton: false,
                timer: 1500,
              });
          }
      })
    };
    const handleDeny = (item) => {
      console.log(item);
      const newStatus = {status: 'Denied'};
      axiosSecure.patch(`/classes/${item._id}`, newStatus)
      .then(data =>{
          console.log(data.data)
          refetch()
          if(data.data.modifiedCount>0){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Approval Denied",
                showConfirmButton: false,
                timer: 1500,
              });
          }
          
      })
    };
  return (
    <div>
      <h1 className="text-5xl font-bold text-center py-6">
        All Classes : {classes.length}
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {classes.map((cls) => (
          <div
            key={cls._id}
            className="card card-compact w-full bg-base-100 shadow-xl border-2 shadow-blue-500/50  "
          >
            <figure>
              <img src={cls.classImg} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cls.className}</h2>
              <p>Instructor Email: {cls.email}</p>
              <p>Instructor Name: {cls.name}</p>
              <p>Price: ${cls.price}</p>
              <p>Available Seats: {cls.seats}</p>
              <p>Status: {cls.status}</p>
              <div className="card-actions">
                <button
                  onClick={() => handleStatus(cls)}
                //   disabled={cls.status === 'Approved'}
                  disabled={cls.status === 'Approved' || cls.status === 'Denied'}
                  className="btn btn-primary"
                >
                  Approve
                </button>
                <button onClick={() => handleDeny(cls)} 
                // disabled={ cls.status === 'Denied'} 
                disabled={cls.status === 'Approved' || cls.status === 'Denied'} 
                className="btn btn-primary">Deny</button>
                <Link to={`feedback/${cls._id}`} disabled={cls.status != 'Denied'} className="btn btn-primary">Feedback</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;
