import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai";
import { navLinks } from "./data";
import { Link } from "react-router-dom";
import logo from "../../assets/imags/logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);






  
  return (
    <nav className=" bg-Secondary shadow-md w-full fixed top-0 left-0 z-10 ">
      <div className=" container mx-auto flex justify-between items-center">

        <Link to="/">
          <img className=" w-24" src={logo} alt="logo" />
        </Link>

         <ul className={`md:flex md:items-center gap-x-10 absolute md:static bg-Secondary left-0
            w-full md:w-auto md:pl-0 pl-14   transition-all md:z-auto z-[-1] duration-500 ease-in  
        ${click ? ' top-20' : 'top-[-490px]'}`}>

          {navLinks.map(({ id, path, title }) => (
            <li className=' md:my-0 my-7 font-semibold' key={id}>
              <Link className=' hover:text-Primary duration-500' to={path}>{title}</Link>
            </li>
          ))}

          <div className=" md:ml-10 ml-0 md:flex items-center">
          <span className=" md:mr-10">
            <AiOutlineSearch className=" text-2xl cursor-pointer text-white" />
          </span>
          <Link to="login" className=" bg-Primary text-white px-2 py-1 md:px-4 md:py-2
           inline-block my-5 rounded">
          log in
          </Link>
        </div>

        </ul> 


        <div className="cursor-pointer md:hidden text-2xl text-Primary">
          <button onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
