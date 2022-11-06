import React from "react";
import { Bars4Icon } from "@heroicons/react/24/outline";
import Avatar from "@mui/material/Avatar";
const Navbar = () => {
  return (
    <div className="bg-white flex justify-between h-14 p-2">
      <Bars4Icon className="icons" />
      <Avatar alt="Remy Sharp" src="" sx={{ width: 30, height: 30 }} />
    </div>
  );
};

export default Navbar;
