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

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

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
          handleClose();
        } else {
          if (comment === data.description && rating === data.rating) {
            alert("Please change your comment.");
          } else if (!rating && !comment) {
            alert("Please fill in all fields.");
          } else if (!comment) {
            alert("Please comment on the hotel.");
          } else if (!rating) {
            alert("Please rate the hotel.");
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
          handleClose();
        } else {
          if (!rating && !comment) {
            alert("Please fill in all fields.");
          } else if (!comment) {
            alert("Please comment on the hotel.");
          } else if (!rating) {
            alert("Please rate the hotel.");
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddComment = () => {
    if (data) {
      setComment(data.description);
      setRating(data.rating);
    }
  };

  useEffect(() => {
    handleAddComment();
  }, [data]);

  return (
    <Dialog
      id={reservation._id}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ width: "100%", height: "100%" }}
    >
      <List
        id="comment-list"
        sx={{
          width: "100%",
          bgcolor: "background.paper",
        }}
      >
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
                    onChange={handleRatingChange}
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
                    onChange={handleCommentChange}
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
