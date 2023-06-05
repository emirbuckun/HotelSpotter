import React, { useEffect, useState } from "react";
import ReservationItem from "./ReservationItem";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import useFetch from "/src/hooks/useFetch";

const PastReservations = () => {
  const [pastReservations, setPastReservations] = useState([]);
  const [userID, _] = useState(localStorage.getItem("userID"));
  var { data, loading } = useFetch(
    serverURL + "/reservation/getByUserID/" + userID
  );

  useEffect(() => {
    setPastReservations(data);
  }, [data]);

  return (
    <div className="container">
      <List id="pastReservations">
        <div>
          <h1 className="text-center">Past Reservations</h1>
        </div>
        {loading ? (
          <Typography variant="h6" align="center">
            Content loading..
          </Typography>
        ) : (
          pastReservations.length > 0 &&
          pastReservations.map((reservation) => (
            <ReservationItem key={reservation._id} reservation={reservation} />
          ))
        )}
        {!loading && pastReservations.length <= 0 && (
          <Typography variant="h6" align="center">
            You have no past reservations.
          </Typography>
        )}
      </List>
    </div>
  );
};

export default PastReservations;
