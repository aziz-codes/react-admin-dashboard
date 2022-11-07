import React from "react";
import { Bars4Icon } from "@heroicons/react/24/outline";
import Avatar from "@mui/material/Avatar";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <div className="bg-white flex justify-between h-14 p-2">
      <Bars4Icon className="icons" />
      {isAuthenticated ? (
        <Avatar
          alt={user.preferred_username}
          src={user.picture}
          sx={{ width: 30, height: 30, cursor: "pointer" }}
          onClick={() => logout({ returnTo: window.location.origin })}
        />
      ) : (
        <Avatar
          alt="Remy Sharp"
          src=""
          sx={{ width: 30, height: 30, cursor: "pointer" }}
          onClick={() => {
            loginWithRedirect();
          }}
        />
      )}
    </div>
  );
};

export default Navbar;
