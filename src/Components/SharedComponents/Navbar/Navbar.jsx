import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    console.log(isOpen);
  return (
    <div className="flex justify-between items-center border-2 border-b-green-500 shadow-lg rounded-lg p-2">
      <div className="flex items-center gap-2">
        {/* For mobile view */}
        <div className="md:hidden">
          {
            isOpen?<IoMdCloseCircleOutline onClick={()=>setIsOpen(false)} className="text-3xl"/>:<IoMenu onClick={()=>setIsOpen(true)} className="text-3xl"/>
          }
        </div>
        {/* For logo */}
        <div className="w-12 h-12 md:w-16 md:h-16">
        <Link to="/">
          <img src="logo.png" className="rounded-full" alt="sijma_logo" />
        </Link>
        </div>
      </div>
      {/* For Link */}
      <div className="hidden md:flex flex-row gap-4 font-semibold text-xl">
        <NavLink to="/" className="hover:text-green-500">
          Home
        </NavLink>
        <div className="relative group">
          <NavLink to="/category" className="hover:text-green-500">
            All Category
          </NavLink>
          <div className="absolute w-full p-2 rounded-lg hidden shadow-lg bg-white group-hover:block z-50">
            <div className="flex flex-col">
              <NavLink className="hover:text-green-500">Test1</NavLink>
              <NavLink className="hover:text-green-500">Test1</NavLink>
              <NavLink className="hover:text-green-500">Test1</NavLink>
            </div>
          </div>
        </div>
        <NavLink to="/about" className="hover:text-green-500">
          About Us
        </NavLink>
        <NavLink to="/contact" className="hover:text-green-500">
          Contact Us
        </NavLink>
      </div>
      {/* For user or Login */}
      <div>Login</div>
    </div>
  );
};

export default Navbar;

