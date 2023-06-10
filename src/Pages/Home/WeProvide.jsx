import React from "react";
import { FaMapMarkerAlt, FaMedal, FaVideo } from "react-icons/fa";
import { motion } from "framer-motion";

const WeProvide = () => {
  return (
    <section className="max-w-7xl mx-auto ">
      <div className="w-4/5 mx-auto py-12">
        <h1 className="text-2xl font-semibold text-center text-blue-700">
          Why People Choose Our Camp?
        </h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center p-8"
        >
          We provide the best experience
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full py-6">
          <div className="text-center flex flex-col items-center gap-4">
            <FaMapMarkerAlt className="w-20 h-12 text-blue-700"></FaMapMarkerAlt>
            <p className="text-blue-700 font-semibold text-2xl">
              Perfect Location
            </p>
            <p className="font-semibold">
              We have separate convenient location in different parts of the
              city
            </p>
          </div>
          <div className="text-center flex flex-col items-center gap-4">
            <FaMedal className="w-20 h-12 text-blue-700"></FaMedal>
            <p className="text-blue-700 font-semibold text-2xl">Best Team</p>
            <p className="font-semibold">
              Our team consist of the best specialist who know there job
              perfectly
            </p>
          </div>
          <div className="text-center flex flex-col items-center gap-4">
            <FaVideo className="w-20 h-12 text-blue-700"></FaVideo>
            <p className="text-blue-700 font-semibold text-2xl">
              Video Classes
            </p>
            <p className="font-semibold">
              Our video titurial are available on our websites
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeProvide;
