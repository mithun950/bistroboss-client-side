

import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";
import useAxiosOpen from "../../components/hooks/useAxiosOpen";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const axiosPublic = useAxiosOpen()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        
      } = useForm();

    const {registerWithEmail,loading,loginWithGoogle,updateUserProfile} = useContext(AuthContext)

    



  const onSubmit = (data) => {
         console.log(data)
    registerWithEmail(data.email,data.password)

    .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser)
        updateUserProfile(data.name, data.photoURL)
        .then(() => {
            // create user entry in the database
            const userInfo = {
                name: data.name,
                email: data.email
            }
            axiosPublic.post('/users', userInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        console.log('user added to the database')
                        reset();
                        Swal.fire({
                          position: 'top-end',
                          icon: 'success',
                          title: 'User created successfully.',
                          showConfirmButton: false,
                          timer: 1500
                      });
                      navigate('/');
                  }
              })


      })
      .catch(error => console.log(error))
})
};



 
 

  return (
    <>
     <Helmet>
        <title>Bistro Boss | Register</title>
     </Helmet>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg flex flex-col md:flex-row overflow-hidden pb-8">
        {/* Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Register Now!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                
                className="block text-sm font-medium text-gray-600"
              >
                 Name
              </label>
              <input
                type="text"
                {...register("name", {required: true})}
                name="name"
                placeholder="Enter your name"
                
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
                    {errors.name && <p className="text-red-500">name is required.</p>}

            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                {...register("email", {required: true})}
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
                                  {errors.email && <p className="text-red-500">email is required.</p>}

            </div>
            <div className="mb-4">
              <label
              
                className="block text-sm font-medium text-gray-600"
              >
                Photo Url
              </label>
              <input
                type="url"
                {...register("photoURL", {required: true})}
                
                placeholder="Enter your Photo Url"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
                      {errors.photoURL && <p className="text-red-500">Photo is required.</p>}

            </div>
            <div className="">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                {...register("password", {required: true,
                     minLength:6,
                      maxLength:20,
                      pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
                    })}
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
                                  {errors.password?.type==='required'&& <p className="text-red-500">password is required.</p>}
                                  {errors.password?.type==='minLength'&& <p className="text-red-500">password must be 6 characters.</p>}
                                  {errors.password?.type==='maxLength'&& <p className="text-red-500">password must be less then 20 characters.</p>}
                                  {errors.password?.type==='pattern'&& <p className="text-red-500">password must be one upper case , one lower case , one number and one spacial character.</p>}

            </div>
         <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-200 mt-4"
            >
              Register
            </button>
          </form>
          <p><small>Already registered? Go to <Link to="/login" className="underline">Log In</Link></small></p>
            <SocialLogin></SocialLogin>
        </div>
      </div>
    
    </div>
    </>
  );
};

export default Register;
