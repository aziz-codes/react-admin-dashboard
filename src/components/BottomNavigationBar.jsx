import React from "react";
import { Link } from "react-router-dom";
import {
  ComputerDesktopIcon,
  UserGroupIcon,
  ChartBarIcon,
  BanknotesIcon,
  Cog8ToothIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
const BottomNavigationBar = () => {
  const links = [
    {
      icon: <ComputerDesktopIcon />,
      path: "/",
    },
    {
      icon: <UserGroupIcon />,
      path: "/user",
    },
    {
      icon: <ChartBarIcon />,
      path: "/progress",
    },
    {
      icon: <BanknotesIcon />,
      path: "/financial",
    },
    {
      icon: <LightBulbIcon />,
      path: "/community",
    },
    {
      icon: <Cog8ToothIcon />,
      path: "/settings",
    },
  ];

  return (
    <div className="fixed -bottom-0 w-full shadow-xl border h-10 bg-white text-black flex flex-row">
      {links.map((item, index) => (
        <Link
          to={`${item.path}`}
          key={index}
          className=" w-full flex flex-row justify-center items-center"
        >
          <span className="icons">{item.icon}</span>
        </Link>
      ))}
    </div>
  );
};

export default BottomNavigationBar;
