import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { NavLinks } from "../../data";
import Sidebar from "./Sidebar";
import { ChevronDown, ChevronUp } from "lucide-react";
import { LuCalendar } from "react-icons/lu";

const Header = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [isServiceOpen, setIsServiceOpen] = useState<boolean>(false);
  const handleClose = () => {
    setIsShowing((prev) => !prev);
  };

  const location = useLocation();
  
  const getFontClass = () => {
    if (location.pathname.includes("services/cleaning")) {
      return "font-OceanlyOceanly";
    } else if (location.pathname.includes("services/insurance")) {
      return "font-sans";
    } else {
      return "font-Playfair";
    }
  };

  return (
    <React.Fragment>
      <header className="sticky z-40 inset-x-0 top-0 font-Poppin bg-transparent backdrop-blur">
        <nav className="flex items-center justify-between py-4 text-sm tracking-widest font-semibold max-w-[1560px] mx-4 2xl:mx-auto flex-col sm:flex-row">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Denlly Group</span>
              <h1
                className={`text-xl lg:text-2xl font-bold uppercase ${getFontClass()}`}
              >
                Denlly Group
              </h1>
            </Link>
          </div>

          <div className="hidden lg:flex lg:gap-x-8 capitalize mr-16">
            {NavLinks.map((link) => (
              <div key={link.id} className="relative">
                {link.subLinks ? (
                  <>
                    <div
                      onMouseEnter={() => setIsServiceOpen(true)}
                      onMouseLeave={() => setIsServiceOpen(false)}
                      className="flex items-center cursor-pointer gap-2"
                    >
                      {link.name}
                      <span className="transition 0.3s transform">{isServiceOpen ? <ChevronDown size={16} /> : <ChevronUp size={16}/>}</span>
                    </div>
                    {isServiceOpen && (
                      <div
                        className="absolute mt-1 w-48 rounded-md shadow-lg ring-1 bg-background ring-black ring-opacity-5"
                        onMouseEnter={() => setIsServiceOpen(true)}
                        onMouseLeave={() => setIsServiceOpen(false)}
                      >
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          {link.subLinks.map((subLink, index) => (
                            <Link
                              key={index}
                              to={subLink.link}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary"
                              role="menuitem"
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={link.link}>{link.name}</Link>
                )}
              </div>
            ))}
          </div>

          {/* Reservation Button */}
          <div className="flex items-center justify-between sm:relative gap-8 w-full sm:w-fit  mt-4 sm:mt-0 sm:justify-end">
            <div className="p-3 relative flex bg-secondary">
              <Link to="/reservation" className="flex gap-2 items-center">
                <LuCalendar />
                Reservation
              </Link>
            </div>

            {/* Menu Three Bar */}
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
          </div>
        </nav>
        {/* Mobile Menu SideBar */}
        <Sidebar
          isShowing={isShowing}
          isServiceOpen={isServiceOpen}
          setIsServiceOpen={setIsServiceOpen}
        />
      </header>
    </React.Fragment>
  );
};

export default Header;
