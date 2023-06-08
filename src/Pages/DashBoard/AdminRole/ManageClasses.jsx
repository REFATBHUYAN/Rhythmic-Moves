import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });
  console.log(classes);
    return (
        <div>
           <h1 className='text-5xl font-bold text-center py-6'>All Classes : {classes.length}</h1>
           <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5'>
            {
                classes.map(cls => <div key={cls._id} className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={cls.classImg} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{cls.className}</h2>
                  <p>Instructor Email: {cls.email}</p>
                  <p>Instructor Name: {cls.name}</p>
                  <p>Price: ${cls.price}</p>
                  <p>Available Seats: {cls.seats}</p>
                  <p>Status: {cls.status}</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Approve</button>
                    <button className="btn btn-primary">Deny</button>
                    <button className="btn btn-primary">Feedback</button>
                  </div>
                </div>
              </div>)
            }
           </div>
        </div>
    );
};

export default ManageClasses;