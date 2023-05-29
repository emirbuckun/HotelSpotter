import React, { useEffect, useState } from "react";
import { useGetUserID } from "../../hooks/useGetUserID";
import axios from "axios";
import Swal from "sweetalert2";

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState({
    mail: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const userID = useGetUserID();

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const response = await axios.get(serverURL + "/user/" + userID);
      setUserDetails({
        mail: response.data.mail,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        phoneNumber: response.data.phoneNumber,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(serverURL + "/user/" + userID, {
        ...userDetails,
        updateDate: new Date(),
      });
      if (response.status == 200) {
        Swal.fire({
          title: "Update Successful",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "blue",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "An error occurred while updating.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "blue",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while updating.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "blue",
      });
      console.error(error);
    }
  };

  return (
    <div className="container-xl px-4 mt-4">
      <hr className="mt-0 mb-4" />
      <div className="row">
        <div className="col-xl-4">
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>
            <div className="card-body text-center">
              <img
                className="img-account-profile rounded-circle mb-2"
                src="https://media.istockphoto.com/id/1305665241/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette-stock-illustration.jpg?s=612x612&w=0&k=20&c=qA6GUTalFyrBCRVUzQgp2B5zODxmOA4NXTBcw9notYY="
                alt=""
                height={224}
                width={250}
              />
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card mb-4">
            <div className="card-header">Account Details</div>
            <div className="card-body">
              <form>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={userDetails.firstName}
                      placeholder="Enter your first name"
                      className="form-control"
                      required
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="form-control"
                      value={userDetails.lastName}
                      placeholder="Enter your last name"
                      required
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="mail">
                      E-mail Address
                    </label>
                    <input
                      type="email"
                      id="mail"
                      name="mail"
                      className="form-control"
                      value={userDetails.mail}
                      placeholder="Enter your email address"
                      required
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          mail: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="phoneNumber">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="form-control"
                      value={userDetails.phoneNumber}
                      placeholder="Enter your phone number"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      required
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          phoneNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="mb-3"></div>
                <div className="row gx-3 mb-3"></div>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleSubmit}
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
