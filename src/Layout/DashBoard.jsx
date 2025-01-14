import {
  FaAd,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaUsers,
  FaUtensils,
  FaVoicemail,
} from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";
import { MdMenuBook } from "react-icons/md";
import { NavLink, Outlet } from "react-router";
import useAdmin from "../components/hooks/useAdmin";

const DashBoard = () => {

    
     const [isAdmin] = useAdmin;



  return (
    <div className="flex">
      {/*dashboard  side bar  */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
         
          {
            isAdmin ? <>
             <li>
            <NavLink to="/dashboard/adminHome">
              <FaHome></FaHome>Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addItems">
              <FaUtensils></FaUtensils>Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageItems">
              <FaList></FaList>Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageBookings">
              <FaBookAtlas /> Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">
              <FaUsers></FaUsers> All Users
            </NavLink>

          </li>

            </> : 
            <>
             <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd /> Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaList></FaList> My Bookings
            </NavLink>

          
          </li>
            </>
          }

             {/* shared nav link */}
          <div className="divider"></div>

        <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
        <li>
            <NavLink to="/order/salad">
            <MdMenuBook/>Menu
            </NavLink>
          </li>
        <li>
            <NavLink to="/order/contact">
            <FaEnvelope/>Contact
            </NavLink>
          </li>

        </ul>
 </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
