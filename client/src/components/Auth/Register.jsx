import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Register() {
  const [mail, setMail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(serverURL + "/user/register", {
        mail,
        firstName,
        lastName,
        phoneNumber,
        password,
      });
      if (response.status == 200) {
        Swal.fire({
          title: "Registration Successful",
          text: "Redirecting to Home Page",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          navigate("/");
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "An error has occurred.",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "blue",
      });
      console.log(error);
    }
  };

  return (
    <section
      className="vh-100"
      style={{ backgroundColor: "#fff", fontFamily: "'Oswald', sans-serif" }}
    >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Register To HotelSpotter
                    </p>

                    <form className="mx-1 mx-md-4" onSubmit={onSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="mail">
                            E-mail
                          </label>
                          <input
                            type="email"
                            id="mail"
                            placeholder="leonardfloyd@icloud.com"
                            className="form-control"
                            required
                            onChange={(event) => setMail(event.target.value)}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="firstName">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            placeholder="Leonard"
                            className="form-control"
                            required
                            onChange={(event) =>
                              setFirstName(event.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="lastName">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            placeholder="Floyd"
                            className="form-control"
                            required
                            onChange={(event) =>
                              setLastName(event.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="phoneNumber">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phoneNumber"
                            placeholder="5455123224"
                            className="form-control"
                            pattern="^[0-9]{10,15}$"
                            required
                            onChange={(event) =>
                              setPhoneNumber(event.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            placeholder="**********"
                            className="form-control"
                            required
                            onChange={(event) =>
                              setPassword(event.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          type="checkbox"
                          id="terms"
                          className="form-check-input me-2"
                        />
                        <label className="form-check-label" htmlFor="terms">
                          I agree all statements in{" "}
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://a.cdn-hotels.com/gdcs/production0/d1374/2fe2ac0d-4abe-4316-9dd2-011fb65a5587.jpg?impolicy=fcrop&w=800&h=533&q=medium"
                      className="img-fluid"
                      alt="Sample Image"
                      style={{ borderRadius: "25px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
