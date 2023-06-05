import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ReservationDialog from "./ReservationDialog";
import ListItem from "@mui/material/ListItem";

const ReservationItem = ({ reservation }) => {
  const [open, setOpen] = useState(false);

  return (
    <ListItem divider={true}>
      <Grid container spacing={2}>
        <Grid item>
          <img
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
                Room Type: {reservation.roomType}
              </Typography>
              <Typography variant="body2" gutterBottom id="roomNumber">
                Guest Count: {reservation.guestCount}
              </Typography>
              <Typography variant="body2" gutterBottom id="check-in">
                Check In:{" "}
                {new Date(reservation.checkIn).toLocaleDateString("tr-TR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </Typography>
              <Typography variant="body2" gutterBottom id="check-out">
                Check Out:{" "}
                {new Date(reservation.checkOut).toLocaleDateString("tr-TR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </Typography>
              <Button variant="outlined" onClick={() => setOpen(true)}>
                <Typography variant="body2">Add Comment</Typography>
              </Button>
              <ReservationDialog
                open={open}
                handleClose={() => setOpen(false)}
                reservation={reservation}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div" id="price">
              {reservation.price}$
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default ReservationItem;
