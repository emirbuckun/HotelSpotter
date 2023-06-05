import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import useFetch from "/src/hooks/useFetch";
import axios from "axios";
import Swal from "sweetalert2";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: (
      <SentimentVeryDissatisfiedIcon color="error" style={{ fontSize: 40 }} />
    ),
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" style={{ fontSize: 40 }} />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" style={{ fontSize: 40 }} />,
    label: "Neutral",
  },
  4: {
    icon: (
      <SentimentSatisfiedAltIcon color="success" style={{ fontSize: 40 }} />
    ),
    label: "Satisfied",
  },
  5: {
    icon: (
      <SentimentVerySatisfiedIcon color="success" style={{ fontSize: 40 }} />
    ),
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

const ReservationDialog = ({ open, handleClose, reservation }) => {
  const [rating, setRating] = useState();
  const [comment, setComment] = useState("");
  var userID = localStorage.getItem("userID");
  var reservationID = reservation._id;
  var { data } = useFetch(
    serverURL + "/review/getByReservationID/" + reservationID
  );

  const handlePostComment = async () => {
    try {
      if (data !== null) {
        if (
          rating &&
          comment &&
          (comment !== data.description || rating !== data.rating)
        ) {
          var review = {
            userID: userID,
            reservationID: reservationID,
            hotelID: reservation.hotelID,
            rating: rating,
            description: comment,
          };
          const response = await axios.put(
            serverURL + "/review/" + data._id,
            review
          );
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your comment has been updated.",
            showConfirmButton: false,
            timer: 2000,
          });
          handleClose();
        } else {
          if (comment === data.description && rating === data.rating) {
            Swal.fire({
              target: document.getElementById("comment-list"),
              icon: "error",
              title: "Oops...",
              text: "You have not changed your comment.",
              showConfirmButton: false,
              timer: 2000,
            });
          } else if (!rating || !comment) {
            Swal.fire({
              target: document.getElementById("comment-list"),
              icon: "error",
              title: "Oops...",
              text: "Please fill in all fields.",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        }
      } else {
        if (rating && comment) {
          var review = {
            userID: userID,
            reservationID: reservationID,
            hotelID: reservation.hotelID,
            rating: rating,
            description: comment,
          };
          const response = await axios.post(serverURL + "/review", review);
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your comment has been posted.",
            showConfirmButton: false,
            timer: 2000,
          });
          handleClose();
        } else {
          Swal.fire({
            target: document.getElementById("comment-list"),
            icon: "error",
            title: "Oops...",
            text: "Please fill in all fields.",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data) {
      setComment(data.description);
      setRating(data.rating);
    }
  }, [data]);

  return (
    <Dialog id={reservation._id} open={open} onClose={handleClose}>
      <List id="comment-list">
        <ListItem id="comment-list-item" alignItems="flex-start">
          <ListItemText
            primary={
              <Typography id="hotelName" variant="h5">
                Comment for {reservation.hotelName}
              </Typography>
            }
            secondary={
              <>
                <div>
                  <StyledRating
                    id="rating"
                    name="highlight-selected-only"
                    IconContainerComponent={IconContainer}
                    getLabelText={(value) => customIcons[value].label}
                    highlightSelectedOnly
                    value={rating}
                    onChange={(_, newValue) => setRating(newValue)}
                    sx={{ mt: 2 }}
                  />
                </div>
                <div>
                  <TextField
                    label="Comment"
                    multiline
                    fullWidth
                    maxRows={4}
                    id="comment"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    sx={{ mt: 2 }}
                  />
                </div>
              </>
            }
          />
        </ListItem>
        <Button
          variant="outlined"
          onClick={handlePostComment}
          sx={{ ml: 2, mb: 2 }}
        >
          Post Comment
        </Button>
      </List>
    </Dialog>
  );
};

export default ReservationDialog;
