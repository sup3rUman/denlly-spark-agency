import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { NavLinks } from "../../data";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const handleClose = () => {
    setIsShowing((prev) => !prev);
  };

  return (
    <React.Fragment>
      <header className="relative z-40 inset-x-0 top-0 font-Poppins bg-gray-50">
        <nav className="flex items-center justify-between py-4 text-sm tracking-widest font-semibold max-w-[1560px] mx-auto ">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Denlly Group</span>
              <h1 className="text-xl lg:text-2xl font-bold text-black uppercase">
                Denlly Group
              </h1>
            </Link>
          </div>

          <div className="flex lg:hidden">
            {isShowing ? (
              <button
                type="button"
                onClick={handleClose}
                className="-m-2.5 inline-flex items-baseline justify-center p-2.5 cursor-pointer text-gray-950 py-2 mr-2"
              >
                <HiOutlineX className="h-6 w-6" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleClose}
                className="-m-2.5 inline-flex items-baseline justify-center p-2.5 cursor-pointer text-gray-950 py-2 mr-2"
              >
                <HiMenuAlt3 className="h-6 w-6" />
              </button>
            )}
          </div>

          <div className="hidden lg:flex lg:gap-x-8 uppercase">
            {NavLinks.map((link) => (
              <Link key={link.id} to={link.link} className="">
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
        {/* Mobile Menu SideBar */}
        <Sidebar isShowing={isShowing} />
      </header>
    </React.Fragment>
  );
};

export default Header;
