import React from "react";
import { Link } from "react-router-dom";

function Dropdowns({ item }) {
  return (
    <>
      {item.childrens && (
        <div className="relative top-3 transition-all ease-out">
          <div className="top- absolute rounded-md min-w-[150px] bg-slate-500 z-50">
            <ul className="flex flex-col py-2 px-3 items-center">
              {item.childrens.map((child, idx) => (
                <li key={idx} className="py-2">
                  <Link to={child.path} className="text-white font-bold hover:text-slate-100">{child.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute w-[10px] h-[10px] top-0 left-1/2 -mt-1 bg-slate-500 rotate-[45deg] z-40"></div>
        </div>
      )}
    </>
  );
}

export default Dropdowns;
