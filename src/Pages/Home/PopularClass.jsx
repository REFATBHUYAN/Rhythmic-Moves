import React, { useEffect, useState } from "react";

const PopularClass = () => {
  const card = [1, 2, 4, 5, 5, 6, 7, 4];
  const [classes, setClasses] = useState([]);
  useEffect(()=>{
    fetch('/dance.json')
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        setClasses(data.slice(0,6));
    })
  },[])
  return (
    <div className="py-10 w-full mx-auto px-5 md:pd-8">
      <h1 className="text-5xl font-bold text-center py-8">Popular Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full">
        {classes.map((item, i) => (
          <div key={i} className="card card-compact w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src={item.image}
                alt="Shoes"
                className="h-60 rounded-md"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.className}</h2>
              <p>Instructor: {item.instructorName}</p>
              <p>Available Seats: {item.availableSeats}</p>
              <p>Price: {item.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
