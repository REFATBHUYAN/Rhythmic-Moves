import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
const imgbbKey = import.meta.env.VITE_imagbb_key;



const UpdateClass = () => {
  const {id} = useParams();
  const {user} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const imgHostingURL = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;
  const { data: myClasses = [], refetch } = useQuery(
    ["myClasses"],
    async () => {
      const res = await axiosSecure.get(`/classes/myClasses/${user?.email}`);
      return res.data;
    }
  );
    const singleCless = myClasses.find(cls => cls._id === id);

  console.log('sigleclss', singleCless);
  console.log(myClasses);
    
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
      } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        console.log(errors);
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
                    const { className, classImg, price, seats} = data;
                    const newClasses = { price: parseFloat(price), className, seats: parseInt(seats), classImg:imgURL}
                    console.log(newClasses)
                    axiosSecure.patch(`/classUpdate/${singleCless._id}`, newClasses)
                    .then(data => {
                        console.log('from add class section', data.data)
                        if(data.data.modifiedCount>0){
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Class information updated successfully',
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
            defaultValue={singleCless.className}
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
           {errors.classImg && <span className='text-red-300 pt-2'>Img Field is Required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <input
            type="text"
            name="seats"
            defaultValue={singleCless.seats}
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
            defaultValue={singleCless.price}
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

export default UpdateClass;