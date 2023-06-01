import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ReservationDialog from "./ReservationDialog";
import ListItem from "@mui/material/ListItem";

const ReservationItem = ({ reservation, isPast }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [customCheckIn, setCustomCheckIn] = useState("");
  const [customCheckOut, setCustomCheckOut] = useState("");

  const changeDateFormat = (date) => {
    var checkIn = reservation.checkIn;
    var checkOut = reservation.checkOut;
    var day = checkIn.substring(8, 10);
    var month = checkIn.substring(5, 7);
    var year = checkIn.substring(0, 4);
    setCustomCheckIn(day + "/" + month + "/" + year);
    day = checkOut.substring(8, 10);
    month = checkOut.substring(5, 7);
    year = checkOut.substring(0, 4);
    setCustomCheckOut(day + "/" + month + "/" + year);
  };

  useEffect(() => {
    changeDateFormat();
  }, []);

  return (
    <ListItem alignItems="flex-start" divider={true}>
      <Grid container spacing={2}>
        <Grid item>
          <img
            alt="complex"
            src={reservation.hotelPhoto[0]}
            style={{
              width: "170px",
              height: "170px",
              borderRadius: "5%",
            }}
          />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                id="hotelName"
              >
                {reservation.hotelName}
              </Typography>
              <Typography variant="body2" gutterBottom id="roomType">
                Room type: {reservation.roomType}
              </Typography>
              <Typography variant="body2" gutterBottom id="roomNumber">
                Guest Count: {reservation.guestCount}
              </Typography>
              <Typography variant="body2" gutterBottom id="check-in">
                Check in: {customCheckIn}
              </Typography>
              <Typography variant="body2" gutterBottom id="check-out">
                Check out: {customCheckOut}
              </Typography>
              <Button variant="outlined" onClick={handleClickOpen}>
                <Typography variant="body2" gutterBottom>
                  Add comment
                </Typography>
              </Button>
              <ReservationDialog
                open={open}
                handleClose={handleClose}
                reservation={reservation}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div" id="price">
              ${reservation.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default ReservationItem;
