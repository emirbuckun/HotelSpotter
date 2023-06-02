import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ReservationItem from "./ReservationItem";
import Typography from "@mui/material/Typography";
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
    <div className="h-100 d-flex align-items-center justify-content-center">
      <List
        id="pastReservations"
        sx={{ width: "50%", bgcolor: "background.paper" }}
      >
        <div>
          <h1 className="text-left">Past Reservations</h1>
        </div>
        {loading ? (
          <div>
            <Typography variant="h6" align="center">
              Content loading..
            </Typography>
          </div>
        ) : (
          pastReservations.length > 0 &&
          pastReservations.map((reservation) => (
            <ReservationItem key={reservation._id} reservation={reservation} />
          ))
        )}
        {!loading && pastReservations.length <= 0 && (
          <div>
            <Typography variant="h6" align="center">
              You have no past reservations.
            </Typography>
          </div>
        )}
      </List>
    </div>
  );
};

export default PastReservations;
