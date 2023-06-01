import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ReservationItem from "./ReservationItem";
import axios from "axios";

const PastReservations = () => {
  const [pastReservations, setPastReservations] = useState([]);
  const getPastReservationsByUserID = async () => {
    try {
      var userID = localStorage.getItem("userID");
      const response = await axios.get(
        serverURL + "/reservation/getByUserID/" + userID
      );

      setPastReservations(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPastReservationsByUserID();
    console.log(pastReservations);
  }, []);

  return (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <List
        id="pastReservations"
        sx={{ width: "50%", bgcolor: "background.paper" }}
      >
        {pastReservations.map((reservation) => (
          <ReservationItem
            key={reservation._id}
            reservation={reservation}
            isPast={true}
          />
        ))}
      </List>
    </div>
  );
};

export default PastReservations;
