import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Auth/AuthProvider";
import {  FaShoppingCart } from "react-icons/fa";
import useCart from "../../components/hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  
  // cart showing 
  const [cart] = useCart();



  const handleLogOut = () => {
    logOut()
      .then((res) =>{
         console.log('logout user')

      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/ourMenu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>
      <li>
        <NavLink to="/secret">Secret</NavLink>
      </li>
      <li>
        <Link to="/dashboard/cart">
        <div className="flex items-center gap-1">
        <FaShoppingCart />
                <div className="badge  badge-secondary">+{cart.length}</div>
        </div>
        </Link>
      </li>
      {user ? (
        <>
        {/* <span>{user?.displayName}</span> */}
          <button onClick={handleLogOut} className=" btn-ghost">
            Log out
          </button>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black w-10/12 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div>
          <img className="w-20 h-16" src="/assets/logo.png" alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
