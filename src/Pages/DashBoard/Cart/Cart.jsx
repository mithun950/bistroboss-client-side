import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../components/hooks/useCart";
import SectionTitle from "../../../components/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();

  //   total price calculate
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      <div>
        <SectionTitle
          heading={"wanna add more"}
          subHeading={"My Cart"}
        ></SectionTitle>
      </div>
      <div className="md:flex justify-evenly items-center">
        <h2 className="text-2xl font-semibold"> Total Orders: {cart.length}</h2>
        <h2 className="text-2xl font-semibold"> Total Price: ${totalPrice}</h2>
        <button className="btn bg-orange-400 font-bold text-white">Pay</button>
      </div>

      {/* table */}
      <div className="overflow-x-auto mt-4">
        <table className="table w-full">
          {/* head */}
          <thead className="text-xl font-bold text-black">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
