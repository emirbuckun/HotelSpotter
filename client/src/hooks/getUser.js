import axios from "axios";

export const getUserID = () => {
  return window.localStorage.getItem("userID");
};

export const getUserDetails = () => {
  try {
    if (getUserID) {
      const response = axios.get(serverURL + "/user/" + getUserID());
      return response.data;
    } else {
      console.log("userID not found in getUserDetails function!");
    }
  } catch (err) {
    console.log(err);
  }
};

export const getUserRole = async () => {
  try {
    if (getUserID) {
      const response = axios.get(serverURL + "/userRole/" + getUserID());
      console.log("getUserRole() invoked");
      console.log(serverURL + "/userRole/" + getUserID());
      return response.data;
    } else {
      console.log("userID not found in getUserRole function!");
    }
  } catch (err) {
    console.log(err);
  }
};
