import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: (
      <SentimentVeryDissatisfiedIcon color="error" style={{ fontSize: 30 }} />
    ),
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" style={{ fontSize: 30 }} />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" style={{ fontSize: 30 }} />,
    label: "Neutral",
  },
  4: {
    icon: (
      <SentimentSatisfiedAltIcon color="success" style={{ fontSize: 30 }} />
    ),
    label: "Satisfied",
  },
  5: {
    icon: (
      <SentimentVerySatisfiedIcon color="success" style={{ fontSize: 30 }} />
    ),
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

const HotelComment = (hotelData) => {
  const reviews = hotelData.hotelData.review;
  return (
    <div className="container">
      <h3>Comments</h3>
      {reviews.length > 0 ? (
        reviews.map((data, index) => <Comment key={index} data={data} />)
      ) : (
        <div>There is no any comment for this hotel.</div>
      )}
    </div>
  );
};

export default HotelComment;

const Comment = (data) => {
  const [userName, setUserName] = useState("");
  const review = data.data;

  const getUserDetails = async (userID) => {
    try {
      const response = await axios.get(serverURL + "/user/" + userID);
      setUserName(response.data.firstName + " " + response.data.lastName);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserDetails(review.userID);
  }, []);

  return (
    <div className="list-group">
      <a className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{userName}</h5>
          <small className="text-muted">
            {new Date(review.createDate).toLocaleDateString("tr-TR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </small>
        </div>
        <p className="mb-1">{review.description}</p>
        <StyledRating
          value={review.rating}
          IconContainerComponent={IconContainer}
          highlightSelectedOnly
          readOnly
        />
      </a>
    </div>
  );
};
