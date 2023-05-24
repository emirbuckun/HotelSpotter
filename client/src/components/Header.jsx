import React from "react";
import { useCookies } from "react-cookie";

const Header = () => {
  const [cookies, _, removeCookie] = useCookies(["access_token"]);

  const logout = (e) => {
    e.preventDefault();
    removeCookie("access_token");
    window.localStorage.removeItem("userID");
    alert("User successfully logged out.");
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            HotelSpotter
          </a>
          <div className="navbar-nav">
            {cookies.access_token ? (
              <>
                <a className="nav-link" href="/userprofile">
                  User Profile
                </a>
                <a className="nav-link" href="/" onClick={logout}>
                  Log Out
                </a>
              </>
            ) : (
              <>
                <a className="nav-link" href="/login">
                  Login
                </a>
                <a className="nav-link" href="/register">
                  Register
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
