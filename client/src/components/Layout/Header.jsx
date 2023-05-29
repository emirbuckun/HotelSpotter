import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useGetUserID } from "../../hooks/useGetUserID";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Header = () => {
  const [cookies, _, removeCookie] = useCookies(["access_token"]);
  const userID = useGetUserID();
  const navigate = useNavigate();
  const { data } = useFetch(serverURL + "/userRole/getByUserID/" + userID);
  const [isAdmin, setIsAdmin] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <a className="nav-link" onClick={handleShow}>
                  Live Chat
                </a>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    You can write for your question
                    <i class="bi bi-arrow-down"></i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                      />
                    </svg>
                    <br />
                    <br />
                    <i class="bi bi-whatsapp"></i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>{" "}
                    Whatsapp: +905075286421 <br />
                    <i class="bi bi-envelope"></i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>{" "}
                    Gmail: hotelspotter@gmail.com
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>

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
