import React, { useContext } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import useRoles from "../../Hooks/useRoles";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Classes = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  const [roles, isRolesLoading] = useRoles();
  const { data: classes = [], refetch } = useQuery(
    ["classesAprove"],
    async () => {
      const res = await axiosSecure.get("/classes/approved");
      return res.data;
    }
  );
  console.log(classes);
  const handleSelect = (cls) => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Login First",
        
      });
      navigate('/login')
    }
    const { name, price, email, className, seats, classImg, _id, enrolled } = cls;
    const selectedAdd = {
      userEmail: user?.email,
      name,
      price,
      email,
      enrolled,
      className,
      seats,
      classImg,
      classId: _id
    };
    axiosSecure.post("/selectClasses", selectedAdd).then((data) => {
      console.log("from classes page", data.data);
      if (data.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="font-bold text-5xl text-center pb-6">Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {classes.map((cls) => (
          <motion.div  whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }} key={cls._id} className={`card w-full ${cls.seats == 0 ? 'bg-red-400' : 'bg-base-100'} shadow-xl border-2 shadow-blue-500/50  `}>
            <figure className="px-10 pt-10">
              <img src={cls.classImg} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{cls.className}</h2>
              {/* <p>Instructor Email: {cls.email}</p> */}
              <p>Instructor Name: {cls.name}</p>
              <p>Price: ${cls.price}</p>
              <p>Available Seats: {cls.seats}</p>
              <p>Enrolled Student: {cls.enrolled}</p>
              <div className="card-actions">
                <button
                  onClick={() => handleSelect(cls)}
                  disabled={
                    roles == "Instructor" || roles == "Admin" || cls.seats == 0
                  }
                  className="btn btn-primary"
                >
                  Select
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
