import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useTitle from "../../Hooks/useTitle";

const Register = () => {
  useTitle('Register')
  const [error, setError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const { createUser, user, updateUserProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setError("");
    if (data.password != data.confirmPassword) {
      setError("Password Does not match");
      return;
    }
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photo).then(() => {
        //   console.log(result);
        const user = { name: data.name, email: data.email, photo: data.photo };
          axiosSecure.post('/users', user)
            .then(data =>{
              console.log('from axios', data.data)
              reset();
              if(data.data.insertedId){
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                logOut();
                navigate('/login')
              }
              
            })
          

        })
        .catch(error=> console.log(error))
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };
  return (
    <section className="bg-green-200 max-w-full mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="hero min-h-screen bg-green-200">
          <div className="hero-content w-3/4 flex-col lg:flex-row">
            <div className="text-center h-3/4 w-full lg:text-left ">
              <img src="https://i.ibb.co/zXbT9GV/image.png" alt="" />
            </div>
            <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-green-300">
              <div className="card-body w-full">
                <h1 className="text-5xl font-bold text-center mb-6">
                  Register
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input input-bordered"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">PhotoURL</span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="PhotoURL"
                      className="input input-bordered"
                      {...register("photo", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                      {...register("email", { required: true })}
                    />
                    {errors.email && <span  className='text-red-300'>Email is Required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                      {...register("password", {
                        required: true,
                        pattern: /^(?=.*[A-Z])(?=.*[^.A-Za-z0-9]).{6,}$/,
                      })}
                    />
                    {errors.password && (
                      <span  className='text-red-300'>
                        At least a Capital Letter & number and 6 char minimum
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="password"
                      className="input input-bordered"
                      {...register("confirmPassword", { required: true })}
                    />
                  </div>
                  <div className="form-control mt-6">
                    <input className="btn" type="submit" value="Register" />
                  </div>
                </form>
                {/* state={{from: location?.state}} */}
                <p className="font-bold mt-3">
                  Don't have any Account ? Please ...{" "}
                  <Link to="/login" className="text-cyan-600 underline">
                    Login
                  </Link>
                </p>
                <SocialLogin></SocialLogin>
                <div className="text-red-600 my-4 font-bold">{error}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
