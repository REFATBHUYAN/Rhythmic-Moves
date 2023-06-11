import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import { motion } from "framer-motion"


const PopularInstructor = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [], refetch } = useQuery(
      ["istructor"],
      async () => {
        const res = await axiosSecure.get("/users/instructor");
        return res.data;
      }
    );
    // console.log(instructors);
    return (
      <div className='py-10 max-w-7xl mx-auto'>
        <h1 className="font-bold text-5xl text-center pb-8">Popular Instructors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
          {
              instructors.slice(0,6).map(inst => <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              key={inst._id} className="card w-full bg-base-100 shadow-xl border-2 shadow-blue-500/50 ">
              <figure className="px-10 pt-10">
                <img src={inst.photo} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-blue-600">{inst.name}</h2>
                <p className='font-semibold'>{inst.email}</p>
                
              </div>
            </motion.div>)
          }
        </div>
      </div>
    );
};

export default PopularInstructor;