import React, { useEffect, useState } from "react";
import { getUserID } from "../hooks/getUserID";
import axios from "axios";

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState({
    mail: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const userID = getUserID();

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const response = await axios.get(serverURL + "/user/" + userID);
      setUserDetails(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSaveChanges = () => {
    console.log(userDetails);
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
                      className="form-control"
                      id="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      value={userDetails.firstName}
                      name="firstName"
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
                      className="form-control"
                      id="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      value={userDetails.lastName}
                      name="lastName"
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
                      className="form-control"
                      id="mail"
                      type="email"
                      placeholder="Enter your email address"
                      value={userDetails.mail}
                      name="mail"
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
                      className="form-control"
                      id="phoneNumber"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={userDetails.phoneNumber}
                      name="phoneNumber"
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
                  onClick={handleSaveChanges}
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
