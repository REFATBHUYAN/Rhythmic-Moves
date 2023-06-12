import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { motion } from "framer-motion";

const PopularClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(
    ["classesPopular"],
    async () => {
      const res = await axiosSecure.get("/classes/popular");
      return res.data;
    }
  );
  // console.log(classes);
  return (
    <div className="py-10 max-w-7xl mx-auto px-6">
      <h1 className="text-5xl font-bold text-center py-8 mb-6">
        Popular Classes
      </h1>
      <div
        animate={{ x: [0, 100, 0] }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full"
      >
        {classes.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="card card-compact w-full bg-base-100 shadow-xl border-2 shadow-blue-500/50"
          >
            <figure>
              <img
                src={item.classImg}
                alt="Shoes"
                className="h-60 rounded-md"
              />
            </figure>
            <div className="card-body">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="card-title font-bold text-blue-700"
              >
                {item.className}
              </motion.h2>
              <p>
                <span className="font-semibold">Instructor:</span> {item.name}
              </p>
              <p>
                <span className="font-semibold">Available Seats:</span>{" "}
                {item.seats}
              </p>
              <p>
                <span className="font-semibold">Enrolled Students:</span>{" "}
                {item.enrolled}
              </p>
              <p>
                <span className="font-semibold">Price:</span>{" "}
                <span className="text-orange-400 font-bold">{item.price}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
