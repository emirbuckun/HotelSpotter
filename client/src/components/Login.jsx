import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Login() {
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleLogin = async () => {
    var mail = document.getElementById("mail").value;
    var password = document.getElementById("password").value;

    try {
      const response = await axios.post(serverURL + "/user/login", {
        mail,
        password,
      });
      alert(response.data.message);
      if (response.status == 200) {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userID", response.data.userID);
        navigate("/");
      }
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <section
      className="vh-100"
      style={{ backgroundColor: "#ffff", fontFamily: "'Oswald', sans-serif" }}
    >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Login To HotelSpotter
                    </p>

                    <form className="mx-1 mx-md-4">
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
                          />
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="rememberMe"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="rememberMe"
                        >
                          Remember Me
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                          onClick={handleLogin}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2020/07/14/11/holidays-2020-should-you-stay-or-go.jpg?width=1200&auto=webp&quality=75"
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

export default Login;
