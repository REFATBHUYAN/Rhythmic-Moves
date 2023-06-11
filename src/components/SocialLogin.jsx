import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [axiosSecure] = useAxiosSecure();
    const {googleLogIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () =>{
        googleLogIn()
        .then(result =>{
            console.log(result.user);
            const loggedUser = result.user;
            const user = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL };
            axiosSecure.post('/user', user)
            .then(data =>{
              console.log('from axios', data.data)
              navigate(from, { replace: true });
            })
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <>
            <div className="divider">OR</div>
                <div>
                  <button
                  className='btn btn-outline w-full'
                    onClick={handleGoogleSignIn}
                    // className="hover:bg-blue-400 flex font-bold items-center justify-center gap-4 border border-indigo-600 rounded-md w-full mx-auto py-2 text-center"
                  >
                    <FaGoogle></FaGoogle> Login With Google
                  </button>
                </div>
        </>
    );
};

export default SocialLogin;