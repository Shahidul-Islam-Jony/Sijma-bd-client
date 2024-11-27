import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { IoIosContact } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="flex justify-between items-center border-2 border-b-green-500 shadow-lg rounded-lg p-2">
      <div className="flex items-center gap-2 relative">
        {/* mobile view icon */}
        <div className="md:hidden">
          {isOpen ? (
            <IoMdCloseCircleOutline
              onClick={() => setIsOpen(false)}
              className="text-3xl"
            />
          ) : (
            <IoMenu onClick={() => setIsOpen(true)} className="text-3xl" />
          )}
        </div>
        {/* For logo */}
        <div className="w-12 h-12 md:w-16 md:h-16">
          <Link to="/">
            <img src="logo.png" className="rounded-full" alt="sijma_logo" />
          </Link>
        </div>

        {/* Link For mobile view */}
        {isOpen && (
          <div className="flex flex-col gap-2 font-semibold text-xl absolute top-14 bg-gray-200 w-60 p-4">
            <NavLink
              to="/"
              className="hover:text-green-500 flex items-center gap-2"
            >
              <IoHomeOutline /> Home
            </NavLink>
            <div className="relative group">
              <div
                onClick={() => setIsShow(!isShow)}
                className={`flex items-center gap-2 ${
                  isShow ? "text-green-500" : ""
                }`}
              >
                <TbCategory /> All Category{" "}
                {isShow ? (
                  <FaAngleDown className="mt-1" />
                ) : (
                  <FaAngleUp className="mt-1" />
                )}
              </div>
              {isShow && (
                <div className="flex flex-col gap-2 pl-4">
                  <NavLink className="hover:text-green-500">
                    Pure village products
                  </NavLink>
                  <NavLink className="hover:text-green-500">Sweets</NavLink>
                  <NavLink className="hover:text-green-500">Fruits</NavLink>
                  <NavLink className="hover:text-green-500">Vegetable</NavLink>
                  <NavLink className="hover:text-green-500">Ritual</NavLink>
                  <NavLink className="hover:text-green-500">Store</NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/about"
              className="hover:text-green-500 flex items-center gap-2"
            >
              <GoPeople /> About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-green-500 flex items-center gap-2"
            >
              <IoIosContact /> Contact Us
            </NavLink>
          </div>
        )}
      </div>

      {/* Link For Desktop and Tab View */}
      <div className="hidden md:flex flex-row gap-4 font-semibold text-xl">
        <NavLink
          to="/"
          className="hover:text-green-500 flex items-center gap-1"
        >
          <IoHomeOutline /> Home
        </NavLink>
        <div className="relative group">
          <NavLink
            to="/category"
            className="hover:text-green-500 flex items-center gap-1"
          >
            <TbCategory /> All Category
          </NavLink>
          <div className="absolute w-52 p-2 rounded-lg hidden shadow-lg bg-white group-hover:block z-50">
            <div className="flex flex-col">
              <NavLink className="hover:text-green-500">
                Pure village products
              </NavLink>
              <NavLink className="hover:text-green-500">Sweets</NavLink>
              <NavLink className="hover:text-green-500">Fruits</NavLink>
              <NavLink className="hover:text-green-500">Vegetable</NavLink>
              <NavLink className="hover:text-green-500">Ritual</NavLink>
              <NavLink className="hover:text-green-500">Store</NavLink>
            </div>
          </div>
        </div>
        <NavLink
          to="/about"
          className="hover:text-green-500 flex items-center gap-1"
        >
          <GoPeople /> About Us
        </NavLink>
        <NavLink
          to="/contact"
          className="hover:text-green-500 flex items-center gap-1"
        >
          <IoIosContact /> Contact Us
        </NavLink>
      </div>
      {/* For user or Login */}
      <div>
        <Link
          to="/login"
          className="flex items-center gap-1 border-2 border-green-500 px-5 py-1 text-lg font-medium rounded-md hover:bg-green-500"
        >
          <IoMdLogIn /> Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
