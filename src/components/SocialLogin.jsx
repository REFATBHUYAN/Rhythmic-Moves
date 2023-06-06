import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';

const SocialLogin = () => {
    const {googleLogIn} = useContext(AuthContext);
    const handleGoogleSignIn = () =>{
        googleLogIn()
        .then(result =>{
            console.log(result.user);
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
                    onClick={handleGoogleSignIn}
                    className="hover:bg-green-400 flex font-bold items-center justify-center gap-4 border border-indigo-600 rounded-md w-full mx-auto py-2 text-center"
                  >
                    <FaGoogle></FaGoogle> Login With Google
                  </button>
                </div>
        </>
    );
};

export default SocialLogin;