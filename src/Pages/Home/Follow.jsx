import React from 'react';
import Marquee from 'react-fast-marquee';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Follow = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(
        ["classesAprove"],
        async () => {
          const res = await axiosSecure.get("/classes/approved");
          return res.data;
        }
      );
      console.log(classes);
    return (
        <section  className="py-10 bg-base-100 max-w-full mx-auto ">
      <div className=" overflow-hidden">
        <h1 className="text-2xl font-semibold text-center text-blue-700">Follow us on Instagram</h1>
        <div>
          <h1 className="text-5xl mb-10 font-bold text-center py-6">Dancing is Our Passion</h1>
        </div>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <Marquee>
            {
               classes.map(cls =><img
               key={cls._id}
                className="h-60 md:h-96 w-60 md:w-96 m-2 rounded-md shadow-xl border-2 shadow-blue-500/50"
                src={cls?.classImg}
                alt=""
              />) 
            }
        </Marquee>
        </div>
      </div>
    </section>
    );
};

export default Follow;