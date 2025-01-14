
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Auth/AuthProvider";
import useAxiosOpen from "../hooks/useAxiosOpen";
import { useNavigate } from "react-router";


const SocialLogin = () => {

       const axiosPublic = useAxiosOpen()
      const navigate = useNavigate();

    const {loginWithGoogle} = useContext(AuthContext)
    const handleLoginWithGoogle = () => {
        loginWithGoogle()
        .then(result => {
          console.log(result.user)
          const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName,
          }
          axiosPublic.post('/users', userInfo)
          .then(res => {
            console.log(res.data)
          })
          navigate(from,{replace:true});
        })
        .catch(error => {
          console.log(error)
        })
      }
    
  return (
    <div>
         <div className="divider">OR</div>
      <button
        onClick={handleLoginWithGoogle}
        className="btn bg-yellow-500 text-white w-full mx-auto mt-5 "
      >
        <FaGoogle /> Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
