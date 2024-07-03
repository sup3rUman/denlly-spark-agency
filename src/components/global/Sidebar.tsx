import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "../../data";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SideBarParams {
  isShowing: boolean;
  isServiceOpen: boolean;
  setIsServiceOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({
  isShowing,
  isServiceOpen,
  setIsServiceOpen,
}: SideBarParams) => {
  const servicesButtonRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      servicesButtonRef.current &&
      !servicesButtonRef.current.contains(event.target as Node)
    ) {
      setIsServiceOpen(false);
    }
  };

  useEffect(() => {
    if (isServiceOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isServiceOpen]);

  const handleServiceClick = () => {
    if (window.innerWidth <= 768) {
      setIsServiceOpen(!isServiceOpen);
    }
  };

  return (
    <React.Fragment>
      <div
        className={`fixed left-0 w-64 p-4 bg-background h-screen overflow-y-auto transition-transform ${
          isShowing ? "translate-x-0" : "-translate-x-full"
        } ease-out duration-[1.2s]`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <div className="py-4 overflow-y-auto flex flex-col space-y-2">
          {NavLinks.map((link) => (
            <div key={link.id} className="relative">
              {link.subLinks ? (
                <>
                  <div
                    ref={servicesButtonRef}
                    onMouseEnter={() => setIsServiceOpen(true)}
                    onMouseLeave={() => setIsServiceOpen(false)}
                    onClick={handleServiceClick}
                    className="flex items-center cursor-pointer p-2 rounded text-sm text-gray-700 hover:bg-accent justify-between"
                  >
                    {link.name}
                    <span className="transition-transform duration-[1200ms] ease-in-out">
                      {isServiceOpen ? (
                      <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </span>
                  </div>
                  {isServiceOpen && (
                    <div
                      className="relative rounded-md"
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
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent rounded-md transform ease-in-out "
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
                <Link
                  to={link.link}
                  className="block p-2 rounded text-sm text-gray-700 hover:bg-gray-50"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
