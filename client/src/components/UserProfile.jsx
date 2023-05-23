import React, { useState } from "react";

const UserProfile = () => {
  //first state of user(Before updating)
  const [username, setUsername] = useState("AliVeli");
  const [firstName, setFirstName] = useState("Ali");
  const [lastName, setLastName] = useState("Veli");
  const [email, setEmail] = useState("vali@gmail.com");
  const [phone, setPhone] = useState("+9012345634");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "inputUsername":
        setUsername(value);
        break;
      case "inputFirstName":
        setFirstName(value);
        break;
      case "inputLastName":
        setLastName(value);
        break;
      case "inputEmailAddress":
        setEmail(value);
        break;
      case "inputPhone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSaveChanges = () => {
    // Save operations in here
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
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputUsername">
                    Username
                  </label>
                  <input
                    className="form-control"
                    id="inputUsername"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    name="inputUsername"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputFirstName">
                      First name
                    </label>
                    <input
                      className="form-control"
                      id="inputFirstName"
                      type="text"
                      placeholder="Enter your first name"
                      value={firstName}
                      name="inputFirstName"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputLastName">
                      Last name
                    </label>
                    <input
                      className="form-control"
                      id="inputLastName"
                      type="text"
                      placeholder="Enter your last name"
                      value={lastName}
                      name="inputLastName"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputEmailAddress">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      id="inputEmailAddress"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      name="inputEmailAddress"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputPhone">
                      Phone number
                    </label>
                    <input
                      className="form-control"
                      id="inputPhone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phone}
                      name="inputPhone"
                      onChange={handleInputChange}
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
                  Save changes
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
