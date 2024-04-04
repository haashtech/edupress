import React, { useState } from "react";
import { Navitems } from "./NavItems";
import Dropdowns from "./Dropdowns";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import Sidebar from "./Sidebar";
import { useOpen } from "../../contextApi/OpenProvider";
import SearchBar from "../searchBar/SearchBar";

function Navbar() {
  const {
    activeNavItem,
    openDropdown,
    opensearchbar,
    setOpensearchbar,
    handleNavItemClick
  } = useOpen();

  return (
    <header className="bg-white z-[9999] max-w-screen-2xl section-navbar container mx-aut top-0 right-0 left-0 sticky transition-all ease-in-out duration-300">
      <nav className="flex items-center justify-between flex-wrap">
        <div>
          <a href="/" className="flex items-center gap-1">
            <img src="/images/home/logo.png" alt="" />
            <span className="font-bold text-[1.5rem]">Edupress</span>
          </a>
        </div>
        <div>
          {/* responsive show in big screen */}
          <ul className="md:flex hidden relative select-none">
            {Navitems.map((item, index) => (
              <li
                key={item.id}
                className={`py-4 px-2 cursor-pointer hover:bg-[#F5F5F5] h-[100%] ${
                  activeNavItem === item.id ? "text-primary" : "text-black"
                }`}
              >
                <Link
                  to={item.path}
                  onClick={() => handleNavItemClick(item.id)}
                  className="cursor-pointer text-sm font-semibold"
                >
                  {item.name}
                </Link>
                {openDropdown === item.id && <Dropdowns item={item} />}
              </li>
            ))}
          </ul>
          {/* show in small screen */}
        </div>
        <div className="md:block hidden">
        <SearchBar/>
        </div>
        <div className="md:hidden">
          <Sidebar />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
