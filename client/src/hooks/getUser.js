import axios from "axios";

export const getUserID = () => {
  return window.localStorage.getItem("userID");
};

export const getUserDetails = async () => {
  try {
    if (getUserID) {
      const response = await axios.get(serverURL + "/user/" + getUserID());
      return response.data;
    } else {
      console.log("userID not found in getUserDetails function!");
    }
  } catch (err) {
    console.log(err);
  }
};

export const getUserRoles = async () => {
  try {
    if (getUserID()) {
      const response = await axios.get(
        serverURL + "/userRole/getByUserID/" + getUserID()
      );
      return response.data;
    } else {
      return "userID not found in getUserRole function!";
    }
  } catch (err) {
    return err;
  }
};

export const isAdmin = async () => {
  try {
    const userRoles = getUserRoles();
    if (userRoles) {
      userRoles.forEach(function (userRole) {
        if (userRole.role == "admin") return true;
      });
      return false;
    } else {
      console.log("User roles doesn't exist!");
    }
  } catch (err) {
    console.log(err);
  }
};
