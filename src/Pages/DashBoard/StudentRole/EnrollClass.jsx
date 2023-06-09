import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const EnrollClass = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: enroolCls = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get(`/enrollClasses/${user?.email}`);
        return res.data;
      });
      console.log(enroolCls);
    return (
        <div>
      <h1 className="font-bold text-5xl text-center">My Enrolled Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {enroolCls.map((cls) => (
          <div key={cls._id} className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={cls.classImg} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{cls.className}</h2>
              {/* <p>Instructor Email: {cls.email}</p> */}
              <p>Instructor Name: {cls.name}</p>
              <p>Price: ${cls.price}</p>
              <p>Available Seats: {cls.seats}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default EnrollClass;