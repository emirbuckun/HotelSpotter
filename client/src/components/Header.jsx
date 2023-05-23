import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Header = () => {
  const [cookies, _, removeCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const navigateRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const navigateLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const logout = () => {
    e.preventDefault();
    removeCookie("access_token");
    window.localStorage.removeItem("userID");
    alert("User successfully logged out.");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          HotelSpotter
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>

          <form className="d-flex">
            <ul className="navbar-nav mr-auto"></ul>
            <ul className="navbar-nav ml-auto">
              {cookies.access_token ? (
                <>
                  <li className="nav-item ml-1">
                    <a className="nav-link" href="#" onClick={logout}>
                      <span className="glyphicon glyphicon-user"></span> Log Out
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item ml-1">
                    <a className="nav-link" href="#" onClick={navigateRegister}>
                      <span className="glyphicon glyphicon-user"></span>{" "}
                      Register
                    </a>
                  </li>
                  <li className="nav-item ml-1">
                    <a className="nav-link" href="#" onClick={navigateLogin}>
                      <span className="glyphicon glyphicon-log-in "></span>{" "}
                      Login
                    </a>
                  </li>
                </>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
