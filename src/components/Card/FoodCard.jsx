

import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";



const FoodCard = ({item}) => {

    const {image,name,price,recipe, _id}=item;
    const {user} = useAuth();

    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()

    const [, refetch] = useCart() //useCart hook theke refetch ta k anlam

  const  handleAddToCart = () =>{
    if(user && user.email){
      //  send cart item to the database 





   const cartItem = {
    menuId: _id ,
    email: user.email,
    name,
    image,
    price
   }
   axiosSecure.post('/carts', cartItem)
   .then(res => {
    console.log(res.data)
    if(res.data.insertedId)
      Swal.fire({
        position: "center",
        icon: "success",
        title:`${name} added to your cart` ,
        showConfirmButton: false,
        timer: 2500
      });

      // refetch the cart to update the cart items count
      refetch();
   })

    }
    else{
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the card?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
        //  send the user to the login page
        navigate('/login ', {state: {from:location}})
           
        }
      });
    }


  }

  return (
    <div className="card bg-base-100 my-8 shadow-xl">
      <figure>
        <img
         src={image}
         className="w-full"
        />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 rounded-lg text-white">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
        <button
             onClick={handleAddToCart}
        className="btn btn-outline border-0 border-b-4 border-orange-400 text-yellow-400 bg-slate-100 mt-2 my-8">Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
