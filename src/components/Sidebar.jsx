import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BoltIcon } from "@heroicons/react/24/outline";
import { links } from "../data/dummy";
const Sidebar = () => {
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black text-md m-2 bg-blue-400";

  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-gray-100 m-2";
  return (
    <div className="h-screen md:overflow-hidden pb-10">
      <div className="flex justify-between items-center">
        <Link to="/" className="w-full justify-center items-center mt-2 flex">
          <BoltIcon className="brand-logo" />
          <span>Sell It</span>
        </Link>
      </div>
      <div className="mt-10">
        {links.map((item, index) => (
          <div key={index}>
            <NavLink
              to={`${item.path}`}
              // onClick={handleCloseSidebar}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span className="icons">{item.icon}</span>
              <span className="capitalize">{item.title}</span>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
