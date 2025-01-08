import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";


const FoodCard = ({item}) => {

    const {image,name,price,recipe}=item;


    const {user} = useContext(AuthContext)

  const  handleAddToCart = (food) =>{
    console.log(food)


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
             onClick={() => handleAddToCart(item)}
        className="btn btn-outline border-0 border-b-4 border-orange-400 text-yellow-400 bg-slate-100 mt-2 my-8">Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
