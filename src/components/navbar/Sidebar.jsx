import React, { useState } from "react";
import { Navitems } from "./NavItems";
import Dropdowns from "./Dropdowns";
import { Link } from "react-router-dom";
import { useOpen } from "../../contextApi/OpenProvider";
import ToggleBar from "./ToggleBar";
import SearchBar from "../searchBar/SearchBar";

function Sidebar({}) {
  const { isToggled, handleNavItemClick, openDropdown } = useOpen();

  return (
    <div className="">
      <ToggleBar />
      <div
        className={`${
          isToggled ? "h-screen pt-10 " : "h-0"
        } flex items-center flex-col transition-all duration-300 bg-slate-400 w-screen fixed top-20 bottom-0 left-0`}
      >
        <ul className="grid sm:grid-cols-2 grid-cols-1 ">
          {isToggled && (
            <>
              {Navitems.map((item, index) => (
                <>
                  <li className="hover:bg-gray-200 p-4 rounded-md">
                    <Link
                      className={` p-5 w-full text-white font-semibold hover:text-primary origin-center duration- ${
                        isToggled ? "scale-100 " : ""
                      }`}
                      to={item.path}
                      onClick={() => handleNavItemClick(item.id)}
                      key={index}
                    >
                      {item.name}
                    </Link>
                    {item.childrens && (
                      <div className=" ">
                        {openDropdown && <Dropdowns item={item} />}
                      </div>
                    )}
                  </li>
                </>
              ))}
              <div className="flex ms-8">
                <SearchBar />
              </div>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
