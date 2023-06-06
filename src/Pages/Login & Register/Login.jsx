import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa";
import SocialLogin from "../../components/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(false);
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const showPassword = () => {
    setShow(!show);
  };
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    logIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate('/');
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="max-w-full mx-auto bg-green-200">
      <div className="max-w-7xl mx-auto bg-green-200">
        <div className="hero min-h-screen bg-green-200">
          <div className="hero-content w-3/4 flex-col lg:flex-row">
            <div className="text-center h-3/4 w-full lg:text-left">
              <img src="https://i.ibb.co/zXbT9GV/image.png" alt="" />
            </div>
            <div className="card w-full max-w-sm shadow-2xl bg-green-300">
              <div className="card-body w-full">
                <h1 className="text-5xl font-bold text-center mb-6">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input input-bordered"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <div className="flex w-full">
                      <input
                        type={show ? "text" : "password"}
                        name="password"
                        placeholder="password"
                        className="input input-bordered w-full"
                        {...register("password", { required: true })}
                      />
                      <button
                        type="button"
                        onClick={showPassword}
                        className="-ml-8"
                      >
                        {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                      </button>
                    </div>
                  </div>
                  <div className="form-control mt-6">
                    <input className="btn" type="submit" value="Login" />
                  </div>
                </form>
                {/* state={{from: location?.state}} */}
                <p className="font-bold mt-3">
                  Don't have any Account ? Please ...{" "}
                  <Link to="/register" className="text-cyan-600 underline">
                    Register
                  </Link>{" "}
                </p>
                <SocialLogin></SocialLogin>
                {/* <div className="divider">OR</div>
                <div>
                  <button
                    // onClick={handleGoogleSing}
                    className="hover:bg-green-400 flex font-bold items-center justify-center gap-4 border border-indigo-600 rounded-md w-full mx-auto py-2 text-center"
                  >
                    <FaGoogle></FaGoogle> Login With Google
                  </button>
                </div> */}
                {/* <div className="text-red-600 my-4 font-bold">{error}</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
