import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
const imgbbKey = import.meta.env.VITE_imagbb_key;
const AddClass = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const imgHostingURL = `https://api.imgbb.com/1/upload?key=${imgbbKey}`
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
        formData.append('image', data.classImg[0])
        fetch(imgHostingURL, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            if(result.success){
                const imgURL = result.data.display_url;
                const {name, email, className, classImg, price, seats} = data;
                const newClasses = {name, price: parseFloat(price), email, className, seats: parseInt(seats), classImg:imgURL, status: 'Pending', enrolled: 0}
                console.log(newClasses)
                axiosSecure.post('/classes', newClasses)
                .then(data => {
                    console.log('from add class section', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })

            }
        })
  };
  
  return (
    <div className="w-3/4 my-8 mx-auto">
      <h1 className="text-4xl font-semibold text-center">Add A Class</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class name</span>
          </label>
          <input
            type="text"
            name="className"
            placeholder="Class name"
            className="input input-bordered"
            {...register("className", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input
            type="file"
            name="classImg"
            placeholder="Class Image"
            className="input "
            {...register("classImg", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={user?.displayName}
            // defaultValue={user?.displayName}
            placeholder={user?.displayName}
            readOnly
            className="rounded-md p-4 input-bordered font-semibold text-black"
            {...register("name")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={user?.email}
            // defaultValue={user?.email}
            placeholder={user?.email}
            readOnly
            className="rounded-md p-4 input-bordered font-semibold text-black"
            {...register("email")}
          />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <input
            type="text"
            name="seats"
            placeholder="Available Seats"
            className="input input-bordered"
            {...register("seats", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input input-bordered"
            {...register("price", {
              required: true
            })}
          />
        </div>
        <div className="form-control mt-6">
          <input className="btn" type="submit" value="Add Class" />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
