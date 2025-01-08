import Lottie from "react-lottie";
import loginAnimation from "../../../public/login-animation.json"; // Lottie animation file
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import auth from "../../Firebase/Firebase.config";
import { Link, useLocation, useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/";
    const {loginWithEmail,loading} = useContext(AuthContext)
    const [disabled,setDisabled] = useState(true)

useEffect(() => {
    loadCaptchaEnginge(6); 

},[])




  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);


    loginWithEmail(email,password)
    .then(result =>{
        const user = result.user;
        console.log(user)
        
        Swal.fire({
          title:`${user.email} Login Successful`,
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
        navigate(from,{replace:true});

        
    })
    .catch(error => {
        console.log('error ashce ', error)

    })
  };

  const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
 
        else {
            setDisabled(true);
        }
 

  }

  return (
     <>
      <Helmet>
          <title>Bistro Boss | Login</title>
     </Helmet>
         <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg flex flex-col md:flex-row overflow-hidden">
        {/* Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Welcome Back!
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
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
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

             <a href="#" className="text-sm mb-4 text-blue-500  hover:underline">
              Forgot Password?
            </a>

            <div className="mb-4 mt-4">
              <label
                htmlFor="password"

                className="block text-sm font-medium text-gray-600"
              >
                 <LoadCanvasTemplate />

              </label>
              <input
                 onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                placeholder="type the captcha above"
                
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button  className="btn btn-outline btn-xs my-4">Validate</button>

            </div>

            <button
              type="submit"
              
              disabled={disabled}
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-200"
            >
              Login
            </button>
          </form>
            <p><small>New Here? <Link to="/register">Create an account</Link></small></p>
        
        </div>
      </div>
    </div>
     </>
  );
};

export default Login;
