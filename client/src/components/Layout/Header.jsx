import React, { useEffect, useState } from "react";
import useFetch from "/src/hooks/useFetch";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useGetUserID } from "/src/hooks/useGetUserID";

const Header = () => {
  const [cookies, _, removeCookie] = useCookies(["access_token"]);
  const userID = useGetUserID();
  const navigate = useNavigate();
  const { data } = useFetch(serverURL + "/userRole/getByUserID/" + userID);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAdmin();
  }, [data]);

  // Check user roles, if admin role exists, show admin panel
  const checkAdmin = () => {
    for (var i = 0; i < data.length; i++) {
      if (data[i].role == "admin") {
        setIsAdmin(true);
        return;
      }
    }
  };

  const logout = (e) => {
    e.preventDefault();
    removeCookie("access_token");
    window.localStorage.removeItem("userID");
    Swal.fire({
      title: "Logout Successful",
      text: "Redirecting to Home Page",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "blue",
    });
    navigate("/");
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
                {isAdmin && (
                  <a className="nav-link" href="/admin/amenity">
                    Admin Panel
                  </a>
                )}
                <a className="nav-link" href="/user-profile">
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
