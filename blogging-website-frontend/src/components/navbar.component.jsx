import { Link, Outlet } from "react-router-dom";
import { Logo } from "../assets/images";
import { useState } from "react";

const Navbar = () => {
  const [searchBoxVisible, setSearchBoxVisible] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" className="flex-none w-10 " />
          </Link>
        </div>
        <div
          className={
            "absolute bg-white w-full left-0 top-full mt-0.5 border-b  border-grey md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto py-4 px-[5vw] " +
            (searchBoxVisible ? "show" : "hide")
          }
          // className={`absolute bg-white w-full left-0 top-full mt-0.5 border-b  border-grey md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto py-4 px-[5vw] ${
          //   searchBoxVisible ? "block" : "hidden"
          // }
          // `}
        >
          <input
            type="text"
            placeholder="search..."
            className="w-full md:w-auto p-4 pl-6 pr-[12%] md:pr-6 rounded-full bg-grey placeholder:text-dark-grey md:pl-12"
          />
          <i className="fi fi-br-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey "></i>
        </div>
        <div className="flex items-center justify-center  gap-3 md:gap-6 ml-auto ">
          <button
            className={
              "flex justify-center items-center w-12 h-12 bg-grey rounded-full md:hidden "
            }
            onClick={() => setSearchBoxVisible((currentVal) => !currentVal)}
          >
            <i className="fi fi-br-search text-xl text-dark-grey "></i>
          </button>
        </div>
        <div className="hidden md:flex  ">
          <Link to="/editor" className="link flex gap-2">
            <i className="fi fi-rr-file-edit"> </i>
            <p>Write</p>
          </Link>
        </div>
        <div className="flex gap-5">
          <Link to="/signin" className="btn-dark capitalize py-2">
            Sign In
          </Link>
          <Link
            to="/signup"
            className="btn-light capitalize py-2 hidden md:flex"
          >
            Sign Up
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
